$oldLogPath = "C:\Users\Fabiola\.gemini\antigravity\brain\c9e8e278-d877-4626-a071-a8cb457474a0\.system_generated\logs\transcript.jsonl"
if (Test-Path $oldLogPath) {
    Write-Host "Found old log file. Scanning..."
    $reader = New-Object System.IO.StreamReader($oldLogPath)
    $lineCount = 0
    $found = $false
    
    while (($line = $reader.ReadLine()) -ne $null) {
        $lineCount++
        if ($line -like "*write_to_file*index.html*" -and $line -notlike "*vite-project*") {
            try {
                $obj = ConvertFrom-Json $line
                foreach ($tc in $obj.tool_calls) {
                    if ($tc.name -eq "write_to_file" -and $tc.args.TargetFile -like "*index.html*" -and $tc.args.TargetFile -notlike "*vite-project*") {
                        Write-Host "FOUND write_to_file in old logs at line $lineCount!"
                        $code = $tc.args.CodeContent
                        Write-Host "Content length: $($code.Length) characters"
                        
                        # Save the extracted code
                        [System.IO.File]::WriteAllText("c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\restored-index-raw.html", $code, [System.Text.Encoding]::UTF8)
                        Write-Host "Successfully wrote recovered code to restored-index-raw.html"
                        $found = $true
                    }
                }
            } catch {
                # Ignore
            }
        }
    }
    $reader.Close()
    if (-not $found) {
        Write-Host "Could not find a matching write_to_file command for the root index.html."
    }
} else {
    Write-Host "Old log file not found."
}
