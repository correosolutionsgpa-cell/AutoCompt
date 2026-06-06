$oldLogPath = "C:\Users\Fabiola\.gemini\antigravity\brain\c9e8e278-d877-4626-a071-a8cb457474a0\.system_generated\logs\transcript.jsonl"
if (Test-Path $oldLogPath) {
    Write-Host "Scanning older log for large HTML write operations..."
    $reader = New-Object System.IO.StreamReader($oldLogPath)
    $lineCount = 0
    $found = $false
    
    while (($line = $reader.ReadLine()) -ne $null) {
        $lineCount++
        # Perform quick string match first for speed
        if ($line -like "*index.html*" -and ($line -like "*replace_file_content*" -or $line -like "*multi_replace_file_content*" -or $line -like "*write_to_file*")) {
            try {
                $obj = ConvertFrom-Json $line
                $step = $obj.step_index
                if ($obj.tool_calls) {
                    foreach ($tc in $obj.tool_calls) {
                        $target = $tc.args.TargetFile
                        if ($target -like "*index.html*" -and $target -notlike "*vite-project*") {
                            # Check size of replacement content or code content
                            $size = 0
                            $contentToSave = ""
                            if ($tc.args.CodeContent) {
                                $size = $tc.args.CodeContent.Length
                                $contentToSave = $tc.args.CodeContent
                            } elseif ($tc.args.ReplacementContent) {
                                $size = $tc.args.ReplacementContent.Length
                                $contentToSave = $tc.args.ReplacementContent
                            } elseif ($tc.args.ReplacementChunks) {
                                # Check chunks
                                foreach ($chunk in $tc.args.ReplacementChunks) {
                                    if ($chunk.ReplacementContent.Length -gt $size) {
                                        $size = $chunk.ReplacementContent.Length
                                        $contentToSave = $chunk.ReplacementContent
                                    }
                                }
                            }
                            
                            if ($size -gt 50000) {
                                Write-Host "FOUND large write operation in old logs at line $lineCount (Step $step)!"
                                Write-Host "Type: $($tc.name)"
                                Write-Host "Size: $size characters"
                                
                                $outputPath = "c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\restored-index-$step.html"
                                [System.IO.File]::WriteAllText($outputPath, $contentToSave, [System.Text.Encoding]::UTF8)
                                Write-Host "Saved content to $outputPath"
                                $found = $true
                            }
                        }
                    }
                }
            } catch {
                # Ignore
            }
        }
    }
    $reader.Close()
    if (-not $found) {
        Write-Host "No large index.html write operation found."
    }
} else {
    Write-Host "Old log file not found."
}
