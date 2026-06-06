$logPath = "C:\Users\Fabiola\.gemini\antigravity\brain\2b20c820-c6fd-4012-8954-5aaa50321a8b\.system_generated\logs\transcript.jsonl"
$reader = New-Object System.IO.StreamReader($logPath)
$lineCount = 0

while (($line = $reader.ReadLine()) -ne $null) {
    $lineCount++
    if ($line -like "*index.html*") {
        # Try to parse the JSON line
        try {
            $obj = ConvertFrom-Json $line
            # Check if this is a tool call or output containing the index.html content
            if ($obj.tool_calls) {
                foreach ($tc in $obj.tool_calls) {
                    if ($tc.name -eq "write_to_file" -and $tc.args.TargetFile -like "*index.html*") {
                        Write-Host "Found write_to_file in line $lineCount (step $($obj.step_index))"
                        # We found a write call!
                        # Let's output some info
                        $contentLength = $tc.args.CodeContent.Length
                        Write-Host "Content length: $contentLength characters"
                    }
                }
            }
            # Also check if it's a VIEW_FILE output containing the content
            if ($obj.type -eq "VIEW_FILE" -and $obj.content -like "*Total Lines: 2267*") {
                Write-Host "Found VIEW_FILE of 2267-line index.html in line $lineCount (step $($obj.step_index))"
            }
        } catch {
            # Ignore json parse errors
        }
    }
}
$reader.Close()
