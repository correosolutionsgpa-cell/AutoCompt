$logPath = "C:\Users\Fabiola\.gemini\antigravity\brain\2b20c820-c6fd-4012-8954-5aaa50321a8b\.system_generated\logs\transcript.jsonl"
$line = (Get-Content -Path $logPath)[19] # line 20 is index 19
$obj = ConvertFrom-Json $line
Write-Host "Step Index: $($obj.step_index)"
Write-Host "Type: $($obj.type)"
Write-Host "Content length: $($obj.content.Length) chars"

# Let's save the content to a file to inspect it
[System.IO.File]::WriteAllText("extracted-step20.txt", $obj.content, [System.Text.Encoding]::UTF8)
Write-Host "Saved step 20 content to extracted-step20.txt"
