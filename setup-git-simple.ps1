# Git Setup Script for Windows
Write-Host "🔧 Setting up Git for AI Flow Builder..." -ForegroundColor Green

# Check if Git is installed
$gitPaths = @(
    "C:\Program Files\Git\bin\git.exe",
    "C:\Program Files (x86)\Git\bin\git.exe",
    "C:\Git\bin\git.exe"
)

$gitFound = $false
foreach ($path in $gitPaths) {
    if (Test-Path $path) {
        Write-Host "✅ Git found at: $path" -ForegroundColor Green
        $gitFound = $true
        $gitDir = Split-Path $path -Parent
        break
    }
}

if (-not $gitFound) {
    Write-Host "❌ Git not found. Please install Git first:" -ForegroundColor Red
    Write-Host "📥 Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "Press Enter after installing Git"
    exit
}

# Add Git to PATH
$currentPath = [Environment]::GetEnvironmentVariable("PATH", "User")
if ($currentPath -notlike "*$gitDir*") {
    Write-Host "🔗 Adding Git to PATH..." -ForegroundColor Yellow
    $newPath = $currentPath + ";" + $gitDir
    [Environment]::SetEnvironmentVariable("PATH", $newPath, "User")
    Write-Host "✅ Git added to PATH!" -ForegroundColor Green
} else {
    Write-Host "✅ Git already in PATH!" -ForegroundColor Green
}

Write-Host "🔄 Please restart PowerShell and try again!" -ForegroundColor Yellow
