# ZeroTier

ZeroTier command-line guide.

## Uninstallation

### macOS

```sh
sudo "/Library/Application Support/ZeroTier/One/uninstall.sh"
```

Remove user configuration (reset settings):

```sh
rm -rf ~/Library/Application\ Support/ZeroTier
```

## Common Commands

### Join a Network

```sh
sudo zerotier-cli join <network_id>
```

### Leave a Network

```sh
sudo zerotier-cli leave <network_id>
```

### Check Status

```sh
sudo zerotier-cli status
```

### List Joined Networks

```sh
sudo zerotier-cli listnetworks
```

### List Peers

```sh
sudo zerotier-cli listpeers
```

## Configure Moon

Join a Moon:

```sh
sudo zerotier-cli orbit <moon_id> <moon_id>
```

Leave a Moon:

```sh
sudo zerotier-cli deorbit <moon_id>
```
