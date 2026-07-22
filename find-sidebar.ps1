$lines = Select-String -Path 'C:\Users\Fabiola\Downloads\app.autocompt\src\App.tsx' -Pattern 'const\s+WorkspaceSidebar'
$lines | Format-Table | Out-String | Out-File -FilePath 'c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\sidebar_lines.txt' -Encoding utf8
Write-Host "Success"
