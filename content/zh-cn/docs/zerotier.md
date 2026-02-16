# ZeroTier

ZeroTier 命令行操作指南。

## 卸载 {#uninstall}

### macOS

```sh
sudo "/Library/Application Support/ZeroTier/One/uninstall.sh"
```

删除用户配置（重置配置）：

```sh
rm -rf ~/Library/Application\ Support/ZeroTier
```

## 常用命令 {#common-commands}

### 加入网络 {#join-network}

```sh
sudo zerotier-cli join <network_id>
```

### 离开网络 {#leave-network}

```sh
sudo zerotier-cli leave <network_id>
```

### 查看状态 {#check-status}

```sh
sudo zerotier-cli status
```

### 查看已加入的网络 {#list-joined-networks}

```sh
sudo zerotier-cli listnetworks
```

### 查看 Peers {#list-peers}

```sh
sudo zerotier-cli listpeers
```

## 配置 Moon {#configure-moon}

加入 Moon：

```sh
sudo zerotier-cli orbit <moon_id> <moon_id>
```

离开 Moon：

```sh
sudo zerotier-cli deorbit <moon_id>
```
