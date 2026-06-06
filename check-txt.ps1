Get-ChildItem -Path "C:\Users\Fabiola\Downloads" -Filter "*.txt" | ForEach-Object {
    if ($_.Length -gt 100000) {
        Write-Host "File: $($_.FullName)"
        Write-Host "Size: $($_.Length) bytes"
        Write-Host "Modified: $($_.LastWriteTime)"
        Write-Host "---"
    }
}
