$shell = New-Object -ComObject Shell.Application
$bin = $shell.Namespace(0xA)
if ($bin -ne $null) {
    $items = $bin.Items()
    Write-Host "Searching Recycle Bin by Date and Extensions..."
    
    # Filter items deleted or written recently
    foreach ($item in $items) {
        # Check if the file is an HTML file or has a size close to 128KB (approx 120000 - 135000 bytes)
        # or if it was modified around June 5th/6th
        $isHtml = $item.Name -like "*.html" -or $item.Name -like "*.htm"
        $isCloseSize = $item.Size -gt 100000 -and $item.Size -lt 150000
        
        if ($isHtml -or $isCloseSize -or $item.Name -like "*autocompt*") {
            Write-Host "Match:"
            Write-Host "  Name: $($item.Name)"
            Write-Host "  Original Path: $($item.Path)"
            Write-Host "  Size: $($item.Size) bytes"
            Write-Host "  Type: $($item.Type)"
            Write-Host "---"
        }
    }
}
