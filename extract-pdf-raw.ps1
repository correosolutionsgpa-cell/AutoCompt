$bytes = [System.IO.File]::ReadAllBytes('C:\Users\Fabiola\Downloads\app.autocompt\Informe_Tecnico_AutoCompt_Antigravity.pdf')
$text = [System.Text.Encoding]::ASCII.GetString($bytes)
$matches = [regex]::Matches($text, '\(([^)]+)\)')
$extracted = foreach ($m in $matches) {
    $val = $m.Groups[1].Value
    if ($val.Length -gt 3 -and $val -match '[a-zA-Z\s]') {
        $val
    }
}
$extracted | Out-File -FilePath 'C:\Users\Fabiola\Downloads\app.autocompt\pdf_raw_text.txt' -Encoding utf8
Write-Host "Success: Extracted $($extracted.Count) strings"
