$logPath = "C:\Users\Fabiola\.gemini\antigravity\brain\2b20c820-c6fd-4012-8954-5aaa50321a8b\.system_generated\logs\transcript.jsonl"
$reader = New-Object System.IO.StreamReader($logPath)
$lineCount = 0

while (($line = $reader.ReadLine()) -ne $null) {
    $lineCount++
    try {
        $obj = ConvertFrom-Json $line
        $step = $obj.step_index
        if ($obj.tool_calls) {
            foreach ($tc in $obj.tool_calls) {
                if ($tc.name -eq "run_command") {
                    Write-Host "Line $lineCount (Step $step): Command run: $($tc.args.CommandLine)"
                }
            }
        }
    } catch {
        # Ignore
    }
}
$reader.Close()
