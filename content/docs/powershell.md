# powershell

PowerShell

## 安装

```powershell
Install-Module posh-git -Scope CurrentUser
```

```powershell
Install-Module git-aliases -Scope CurrentUser -AllowClobber
```

```powershell
Install-Module z -AllowClobber
```

```powershell
winget install --id Starship.Starship
```

```powershell
winget install gerardog.gsudo
```

## 使用说明

```powershell
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
```

```powershell
Import-Module posh-git
Import-Module git-aliases -DisableNameChecking
Import-Module z
```

```powershell
Invoke-Expression (&starship init powershell)
```

```powershell
Set-Alias -Name la -Value Get-ChildItem
```

```powershell
function i {
    param (
        [string]$DirectoryName
    )

    Set-Location -Path "$HOME\i\$DirectoryName"
}
```

## powershell-profile

[⚙︎ Guany Powershell profile](https://github.com/tlyboy/powershell-profile/)
