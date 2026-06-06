$shell = New-Object -ComObject Shell.Application
$bin = $shell.Namespace(0xA) # 0xA is the shell folder constant for Recycle Bin
if ($bin -ne $null) {
    $items = $bin.Items()
    Write-Host "Total items in Recycle Bin: $($items.Count)"
    $matches = $items | Where-Object { $_.Name -like "*index.html*" -or $_.Name -like "*AutoCompt*" }
    if ($matches) {
        Write-Host "Found matches in Recycle Bin:"
        foreach ($item in $matches) {
            Write-Host "Name: $($item.Name)"
            Write-Host "Original Path: $($item.Path)"
            Write-Host "Size: $($item.Size) bytes"
            Write-Host "---"
        }
    } else {
        Write-Host "No matching files found in Recycle Bin."
    }
} else {
    Write-Host "Could not access Recycle Bin namespace."
}
