# ssh

SSH

## Generate a New SSH Key

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## View SSH Key

### macOS / Linux

```sh
cat ~/.ssh/id_ed25519.pub
```

### Windows (PowerShell)

```powershell
cat $HOME\.ssh\id_ed25519.pub
```

## Configure GitHub to Use SSH over the HTTPS Port

```
Host github.com
  HostName ssh.github.com
  Port 443
  User git
```

## Test SSH Connection

```sh
ssh -T git@github.com
```

## Configure Proxy

```
ProxyCommand nc -X 5 -x 127.0.0.1:7890 %h %p
```

## SSH Agent Key Management

### Start ssh-agent Service on Windows

On Windows, you need to start the ssh-agent service before using it:

```powershell
Set-Service -Name ssh-agent -StartupType Automatic
Start-Service ssh-agent
```

### Add Key to SSH Agent

macOS / Linux:

```sh
ssh-add ~/.ssh/id_ed25519
```

Windows (PowerShell):

```powershell
ssh-add $HOME\.ssh\id_ed25519
```

### List Added Keys

```sh
ssh-add -l
```

### Remove Key from SSH Agent

Remove a specific key:

macOS / Linux:

```sh
ssh-add -d ~/.ssh/id_ed25519
```

Windows (PowerShell):

```powershell
ssh-add -d $HOME\.ssh\id_ed25519
```

Remove all keys:

```sh
ssh-add -D
```
