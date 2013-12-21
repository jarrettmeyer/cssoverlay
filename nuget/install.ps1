param($installPath, $toolsPath, $package, $project)

if ($installPath -eq $null) {
    Write-Host Error! Value for install path is null. Unable to continue!
    return;
}

$viewsFolder = Join-Path $installPath Views
$sharedViewsFolder = Join-Path $viewsFolder Shared
Write-Host Views\Shared is located at: $sharedViewsFolder

if (Test-Path $sharedViewsFolder) {
    Write-Host $sharedViewsFolder was found!
    Copy-Item _Overlay.cshtml $sharedViewsFolder
}
else {
    Write-Host $sharedViewsFolder does not exist.
}