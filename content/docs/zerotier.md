# ZeroTier

ZeroTier 命令行操作指南。

## 卸载

### macOS

```sh
sudo "/Library/Application Support/ZeroTier/One/uninstall.sh"
```

删除用户配置（重置配置）：

```sh
rm -rf ~/Library/Application\ Support/ZeroTier
```

## 常用命令

### 加入网络

```sh
sudo zerotier-cli join <network_id>
```

### 离开网络

```sh
sudo zerotier-cli leave <network_id>
```

### 查看状态

```sh
sudo zerotier-cli status
```

### 查看已加入的网络

```sh
sudo zerotier-cli listnetworks
```

### 查看 Peers

```sh
sudo zerotier-cli listpeers
```

## 配置 Moon

加入 Moon：

```sh
sudo zerotier-cli orbit <moon_id> <moon_id>
```

离开 Moon：

```sh
sudo zerotier-cli deorbit <moon_id>
```
