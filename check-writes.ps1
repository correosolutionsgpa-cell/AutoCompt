$logPath = "C:\Users\Fabiola\.gemini\antigravity\brain\2b20c820-c6fd-4012-8954-5aaa50321a8b\.system_generated\logs\transcript.jsonl"
$reader = New-Object System.IO.StreamReader($logPath)
$lineCount = 0

while (($line = $reader.ReadLine()) -ne $null) {
    $lineCount++
    # Parse as JSON
    try {
        $obj = ConvertFrom-Json $line
        $step = $obj.step_index
        $type = $obj.type
        
        # Check tool calls
        if ($obj.tool_calls) {
            foreach ($tc in $obj.tool_calls) {
                if ($tc.name -eq "write_to_file" -or $tc.name -eq "replace_file_content" -or $tc.name -eq "multi_replace_file_content") {
                    $target = $tc.args.TargetFile
                    if ($target -like "*index.html*") {
                        Write-Host "Line $lineCount (Step $step): Tool Call '$($tc.name)' on '$target'"
                        if ($tc.name -eq "write_to_file") {
                            Write-Host "  CodeContent Length: $($tc.args.CodeContent.Length) chars"
                        }
                    }
                }
            }
        }
        
        # Check tool output
        if ($obj.source -eq "SYSTEM" -and $obj.content -like "*index.html*") {
            # Check if this is response of a file write/replace
            Write-Host "Line $lineCount (Step $step): System Response for tool output"
        }
    } catch {
        # Ignore parse errors
    }
}
$reader.Close()
