$logPath = "C:\Users\Fabiola\.gemini\antigravity\brain\7ea8c3b6-7352-49e7-8516-0f3e039d097a\.system_generated\logs\transcript.jsonl"
if (Test-Path $logPath) {
    Write-Host "Scanning logs for node.exe path..."
    $reader = New-Object System.IO.StreamReader($logPath)
    $lineCount = 0
    
    while (($line = $reader.ReadLine()) -ne $null) {
        $lineCount++
        try {
            $obj = ConvertFrom-Json $line
            $step = $obj.step_index
            if ($step -eq 1811 -or $step -eq 1813 -or $step -eq 1815 -or $step -eq 1812 -or $step -eq 1814 -or $step -eq 1816) {
                Write-Host "Line $lineCount (Step $step):"
                Write-Host "  Source: $($obj.source)"
                Write-Host "  Type: $($obj.type)"
                if ($obj.content) {
                    Write-Host "  Content: $($obj.content)"
                }
                Write-Host "---"
            }
        } catch {}
    }
    $reader.Close()
} else {
    Write-Host "Log not found."
}
