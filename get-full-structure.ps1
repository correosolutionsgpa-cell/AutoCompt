$lines = Get-Content -Path 'C:\Users\Fabiola\Downloads\app.autocompt\src\App.tsx'
$matches = for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    # Match top-level function or const declarations (without leading indent)
    if ($line -match '^(function|const|class|interface|export\s+default\s+function|export\s+const)\s+(\w+)') {
        [PSCustomObject]@{
            LineNumber = $i + 1
            Type       = $Matches[1]
            Name       = $Matches[2]
            Content    = $line.Trim()
        }
    }
}
$matches | Format-Table | Out-String | Out-File -FilePath 'c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\app_structure_full.txt' -Encoding utf8
Write-Host "Found $($matches.Count) top-level declarations"
