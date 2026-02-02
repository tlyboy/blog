# git

Git

## 配置关闭自动转换 CRLF 行尾

```sh
git config --global core.autocrlf false
```

## 配置 credential helper

### WSL

```sh
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
```

### Linux

```sh
git config --global credential.helper store
```

## 配置默认分支为 main

```sh
git config --global init.defaultBranch main
```

## 配置用户和邮箱

```sh
git config --global user.name "Your Name"
```

```sh
git config --global user.email "youremail@domain.com"
```

## 配置 lfs

```sh
git lfs install
```

## config

[⚙︎ Guany Git config](https://github.com/tlyboy/config/blob/main/.gitconfig)
