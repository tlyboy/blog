# git

Git

## Disable Automatic CRLF Line Ending Conversion

```sh
git config --global core.autocrlf false
```

## Configure credential helper

### WSL

```sh
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
```

### Linux

```sh
git config --global credential.helper store
```

## Set Default Branch to main

```sh
git config --global init.defaultBranch main
```

## Configure User Name and Email

```sh
git config --global user.name "Your Name"
```

```sh
git config --global user.email "youremail@domain.com"
```

## Configure lfs

```sh
git lfs install
```

## config

[⚙︎ Guany Git config](https://github.com/tlyboy/config/blob/main/.gitconfig)
