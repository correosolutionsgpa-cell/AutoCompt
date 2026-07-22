$lines = Get-Content -Path 'C:\Users\Fabiola\Downloads\app.autocompt\src\App.tsx'
$states = for ($i = 650; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    # Check if we hit the return or large structures to stop or filter
    if ($i -gt 6000) { break }
    if ($line -match 'const\s+\[(\w+),\s*set\w+\]\s*=\s*useState') {
        [PSCustomObject]@{
            LineNumber = $i + 1
            Content    = $line.Trim()
        }
    }
}
$states | Format-Table | Out-String | Out-File -FilePath 'c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\app_states.txt' -Encoding utf8
Write-Host "Found $($states.Count) useState declarations"
