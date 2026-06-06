$shell = New-Object -ComObject Shell.Application
$bin = $shell.Namespace(0xA)
if ($bin -ne $null) {
    $items = $bin.Items()
    Write-Host "Scanning Recycle Bin for files deleted in June 2026..."
    
    # We want to see items with size > 10KB
    foreach ($item in $items) {
        # Check if the modify date is in June 2026
        # ModifyDate in shell objects is a string or datetime
        $dateStr = [string]$item.ModifyDate
        if ($dateStr -like "*6/*/2026*" -or $dateStr -like "*6-\*-2026*" -or $dateStr -like "*06/*/2026*") {
            if ($item.Size -gt 10000) {
                Write-Host "Match:"
                Write-Host "  Name: $($item.Name)"
                Write-Host "  Original Path: $($item.Path)"
                Write-Host "  Size: $($item.Size) bytes"
                Write-Host "  Date: $($item.ModifyDate)"
                Write-Host "---"
            }
        }
    }
} else {
    Write-Host "Could not access Recycle Bin."
}
