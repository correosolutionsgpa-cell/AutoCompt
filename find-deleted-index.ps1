$shell = New-Object -ComObject Shell.Application
$bin = $shell.Namespace(0xA)
if ($bin -ne $null) {
    $items = $bin.Items()
    Write-Host "Searching specifically for 'index.html' in Recycle Bin..."
    $found = $false
    foreach ($item in $items) {
        if ($item.Name -eq "index.html") {
            $found = $true
            Write-Host "FOUND index.html:"
            Write-Host "  Original Path: $($item.Path)"
            Write-Host "  Size: $($item.Size) bytes"
            Write-Host "  Last Modified: $($item.ModifyDate)"
            Write-Host "---"
        }
    }
    if (-not $found) {
        Write-Host "No index.html file found in the Recycle Bin."
    }
} else {
    Write-Host "Could not access Recycle Bin namespace."
}
