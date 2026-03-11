# Ghostty

Ghostty terminal emulator

## Settings

Config file location: `~/Library/Application Support/com.mitchellh.ghostty/config.ghostty`

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

Install [vitesse-ghostty-theme](https://github.com/hamlim/vitesse-ghostty-theme):

```sh
git clone https://github.com/hamlim/vitesse-ghostty-theme.git ~/.config/ghostty/themes
```

## Shader

Install [ghostty-cursor-shaders](https://github.com/sahaj-b/ghostty-cursor-shaders):

```sh
git clone https://github.com/sahaj-b/ghostty-cursor-shaders.git ~/.config/ghostty/shaders
```
