$utf8 = [System.Text.Encoding]::UTF8

# Update App.jsx
$p1 = "vite-project\src\App.jsx"
if (Test-Path $p1) {
    $c1 = [System.IO.File]::ReadAllText($p1, $utf8)
    $n1 = $c1.Replace("[PEGA AQUÍ EL LINK DE TU GOOGLE FORM]", "[PEGA AQUÍ TU ENLACE ACORTADO]")
    [System.IO.File]::WriteAllText($p1, $n1, $utf8)
    Write-Host "Updated App.jsx successfully."
} else {
    Write-Host "App.jsx not found."
}

# Update index.html
$p2 = "index.html"
if (Test-Path $p2) {
    $c2 = [System.IO.File]::ReadAllText($p2, $utf8)
    $n2 = $c2.Replace("[PEGA AQUÍ EL LINK DE TU GOOGLE FORM]", "[PEGA AQUÍ TU ENLACE ACORTADO]")
    [System.IO.File]::WriteAllText($p2, $n2, $utf8)
    Write-Host "Updated index.html successfully."
} else {
    Write-Host "index.html not found."
}
