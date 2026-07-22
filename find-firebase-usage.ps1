$lines = Select-String -Path 'C:\Users\Fabiola\Downloads\app.autocompt\src\App.tsx' -Pattern 'from\s+[\x22\x27]\..*firebase[\x22\x27]'
$lines | Select-Object -Property LineNumber, Line -First 100 | Format-Table | Out-String | Out-File -FilePath 'c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\app_firebase_imports.txt' -Encoding utf8
Write-Host "Success"
