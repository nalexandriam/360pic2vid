Get-ChildItem | ForEach-Object {
    $newName = $_.Name -replace ' ', '' -replace '\(', '0' -replace '\)', '0'
    Rename-Item -Path $_.FullName -NewName $newName
}
