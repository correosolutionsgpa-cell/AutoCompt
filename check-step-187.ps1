$logPath = "C:\Users\Fabiola\.gemini\antigravity\brain\2b20c820-c6fd-4012-8954-5aaa50321a8b\.system_generated\logs\transcript.jsonl"
$reader = New-Object System.IO.StreamReader($logPath)
$lineCount = 0

while (($line = $reader.ReadLine()) -ne $null) {
    $lineCount++
    try {
        $obj = ConvertFrom-Json $line
        $step = $obj.step_index
        if ($step -ge 180 -and $step -le 195) {
            Write-Host "Line $lineCount (Step $step):"
            Write-Host "  Source: $($obj.source)"
            Write-Host "  Type: $($obj.type)"
            if ($obj.tool_calls) {
                foreach ($tc in $obj.tool_calls) {
                    Write-Host "  Tool Call: $($tc.name) with args: $($tc.args | ConvertTo-Json -Compress)"
                }
            }
            if ($obj.content) {
                Write-Host "  Content: $($obj.content.Substring(0, [Math]::Min($obj.content.Length, 150)))"
            }
            Write-Host "---"
        }
    } catch {
        # Ignore
    }
}
$reader.Close()
