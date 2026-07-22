$lines = Select-String -Path 'C:\Users\Fabiola\Downloads\app.autocompt\src\App.tsx' -Pattern 'case\s+[\x22\x27]\w+[\x22\x27]|switch\s*\(\s*vista|setVista'
$lines | Select-Object -Property LineNumber, Line -First 100 | Format-Table | Out-String | Out-File -FilePath 'c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\app_vistas_lines.txt' -Encoding utf8
Write-Host "Success"
