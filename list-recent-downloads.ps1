$downloadsPath = "C:\Users\Fabiola\Downloads"
$files = Get-ChildItem -Path $downloadsPath -File -ErrorAction SilentlyContinue

Write-Host "Listing files created/modified in June 2026 in Downloads:"
foreach ($file in $files) {
    # Check if modified in June 2026
    $dateStr = [string]$file.LastWriteTime
    if ($dateStr -like "*6/*/2026*" -or $dateStr -like "*6-\*-2026*" -or $dateStr -like "*06/*/2026*") {
        Write-Host "File: $($file.Name)"
        Write-Host "  Size: $($file.Length) bytes"
        Write-Host "  Date: $($file.LastWriteTime)"
        Write-Host "---"
    }
}
