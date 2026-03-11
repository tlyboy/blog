# Ghostty

Ghostty 终端模拟器

## Settings

配置文件位置：`~/Library/Application Support/com.mitchellh.ghostty/config.ghostty`

```ini
font-family = "FiraCode Nerd Font"
font-family-bold = "FiraCode Nerd Font"
font-family-italic = "FiraCode Nerd Font"
font-family-bold-italic = "FiraCode Nerd Font"
font-size = 16

font-feature = calt
font-feature = liga

theme = light:vitesse-light,dark:vitesse-dark

custom-shader = ~/.config/ghostty/shaders/cursor_warp.glsl
custom-shader = ~/.config/ghostty/shaders/ripple_cursor.glsl

custom-shader-animation = always
```

## Theme

安装 [vitesse-ghostty-theme](https://github.com/hamlim/vitesse-ghostty-theme)：

```sh
git clone https://github.com/hamlim/vitesse-ghostty-theme.git ~/.config/ghostty/themes
```

## Shader

安装 [ghostty-cursor-shaders](https://github.com/sahaj-b/ghostty-cursor-shaders)：

```sh
git clone https://github.com/sahaj-b/ghostty-cursor-shaders.git ~/.config/ghostty/shaders
```
