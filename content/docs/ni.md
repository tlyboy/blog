# ni

ni

## 安装

```sh
npm i -g @antfu/ni
```

## 配置

### Windows

```powershell
Remove-Item Alias:ni -Force -ErrorAction Ignore
```

```powershell
function nio {
    ni --prefer-offline
}

function s {
    nr start
}

function d {
    nr dev
}

function b {
    nr build
}

function bw {
    nr build --watch
}

function t {
    nr test
}

function tu {
    nr test -u
}

function tw {
    nr test --watch
}

function w {
    nr watch
}

function p {
    nr play
}

function c {
    nr typecheck
}

function lint {
    nr lint
}

function lintf {
    nr lint --fix
}

function release {
    nr release
}

function re {
    nr release
}
```

### MacOS/Linux

```sh
alias nio="ni --prefer-offline"
alias s="nr start"
alias d="nr dev"
alias b="nr build"
alias bw="nr build --watch"
alias t="nr test"
alias tu="nr test -u"
alias tw="nr test --watch"
alias w="nr watch"
alias p="nr play"
alias c="nr typecheck"
alias lint="nr lint"
alias lintf="nr lint --fix"
alias release="nr release"
alias re="nr release"
```
