$lines = Select-String -Path 'C:\Users\Fabiola\Downloads\app.autocompt\src\App.tsx' -Pattern 'vista\s*===\s*[\x22\x27]dashboard[\x22\x27]'
$lines | Format-Table | Out-String | Out-File -FilePath 'c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\dashboard_lines.txt' -Encoding utf8
Write-Host "Success"
