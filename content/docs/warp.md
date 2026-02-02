# warp

Warp

## 主题

[warp-theme-vitesse](https://github.com/HiDeoo/warp-theme-vitesse)

### macOS

```sh
mkdir -p $HOME/.warp
cd $HOME/.warp/
```

### Windows

```powershell
New-Item -Path "$env:APPDATA\warp\Warp\data\" -ItemType Directory
Set-Location -Path "$env:APPDATA\warp\Warp\data\"
```

## 重置命令历史记录

### macOS

```sh
rm -r "$HOME/Library/Group Containers/2BBY89MBSN.dev.warp/Library/Application Support/dev.warp.Warp-Stable/warp.sqlite"
```

### Windows

```powershell
Remove-Item "$env:LOCALAPPDATA\warp\Warp\data\warp.sqlite"
```
