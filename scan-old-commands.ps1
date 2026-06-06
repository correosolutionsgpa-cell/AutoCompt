$oldLogPath = "C:\Users\Fabiola\.gemini\antigravity\brain\c9e8e278-d877-4626-a071-a8cb457474a0\.system_generated\logs\transcript.jsonl"
if (Test-Path $oldLogPath) {
    Write-Host "Scanning older log for commands..."
    $reader = New-Object System.IO.StreamReader($oldLogPath)
    $lineCount = 0
    
    while (($line = $reader.ReadLine()) -ne $null) {
        $lineCount++
        if ($line -like "*run_command*") {
            try {
                $obj = ConvertFrom-Json $line
                foreach ($tc in $obj.tool_calls) {
                    if ($tc.name -eq "run_command") {
                        Write-Host "Line $lineCount (Step $($obj.step_index)): $($tc.args.CommandLine)"
                    }
                }
            } catch {}
        }
    }
    $reader.Close()
} else {
    Write-Host "Old log not found."
}
