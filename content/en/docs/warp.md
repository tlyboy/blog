# warp

Warp

## Theme

[warp-theme-vitesse](https://github.com/HiDeoo/warp-theme-vitesse)

**macOS**

```sh
mkdir -p $HOME/.warp/themes
git clone https://github.com/HiDeoo/warp-theme-vitesse.git /tmp/warp-theme-vitesse
cp /tmp/warp-theme-vitesse/*.yaml $HOME/.warp/themes/
```

**Windows**

```powershell
New-Item -Path "$env:APPDATA\warp\Warp\data\themes" -ItemType Directory -Force
git clone https://github.com/HiDeoo/warp-theme-vitesse.git "$env:TEMP\warp-theme-vitesse"
Copy-Item "$env:TEMP\warp-theme-vitesse\*.yaml" "$env:APPDATA\warp\Warp\data\themes\"
```

## Reset Command History

**macOS**

```sh
rm -r "$HOME/Library/Group Containers/2BBY89MBSN.dev.warp/Library/Application Support/dev.warp.Warp-Stable/warp.sqlite"
```

**Windows**

```powershell
Remove-Item "$env:LOCALAPPDATA\warp\Warp\data\warp.sqlite"
```
