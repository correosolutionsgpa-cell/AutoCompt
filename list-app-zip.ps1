[System.Reflection.Assembly]::LoadWithPartialName('System.IO.Compression.FileSystem') | Out-Null
$zip = [System.IO.Compression.ZipFile]::OpenRead('C:\Users\Fabiola\Downloads\app.autocompt\autocompt.zip')
$zip.Entries | Select-Object -Property Name, Length, FullName | Format-Table | Out-String | Out-File -FilePath 'c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\zip_contents.txt' -Encoding utf8
$zip.Dispose()
Write-Host "Zip listed successfully."
