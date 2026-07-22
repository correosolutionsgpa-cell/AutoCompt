$lines = Select-String -Path 'C:\Users\Fabiola\Downloads\app.autocompt\src\App.tsx' -Pattern '(fetch\s*\(|axios|\/api\/)'
$lines | Select-Object -Property LineNumber, Line -First 100 | Format-Table | Out-String | Out-File -FilePath 'c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\app_api_calls.txt' -Encoding utf8
Write-Host "Success"
