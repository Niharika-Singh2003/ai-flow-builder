# Git Setup Script for Windows
# Run this in PowerShell as Administrator

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

# Test Git
Write-Host "🧪 Testing Git installation..." -ForegroundColor Yellow
& "$gitDir\git.exe" --version

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Git is working!" -ForegroundColor Green
    Write-Host "🔄 Please restart PowerShell and try again!" -ForegroundColor Yellow
} else {
    Write-Host "❌ Git test failed" -ForegroundColor Red
}

Write-Host "📋 Next steps after restart:" -ForegroundColor Cyan
Write-Host "1. cd 'c:\Users\Lenovo\Desktop\Mern_App\ai-flow-builder'" -ForegroundColor White
Write-Host "2. git init" -ForegroundColor White
Write-Host "3. git add ." -ForegroundColor White
Write-Host "4. git commit -m 'Initial commit'" -ForegroundColor White
