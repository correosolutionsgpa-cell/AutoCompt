$lines = Get-Content -Path 'C:\Users\Fabiola\Downloads\app.autocompt\src\App.tsx'
$nested = for ($i = 650; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    if ($line -match '^\s+(const|function)\s+(render\w+|handle\w+)\s*=') {
        [PSCustomObject]@{
            LineNumber = $i + 1
            Content    = $line.Trim()
        }
    }
}
$nested | Format-Table | Out-String | Out-File -FilePath 'c:\Users\Fabiola\Downloads\AutoCompt - Landing Page\app_nested_renders.txt' -Encoding utf8
Write-Host "Found $($nested.Count) nested helper declarations"
