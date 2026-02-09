# ubuntu

Ubuntu

## Configure Alibaba Cloud Mirror

### Back Up Configuration File

```sh
sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak
```

### Alibaba Cloud Public Mirror

```sh
sudo sed -i "s@http://.*archive.ubuntu.com@https://mirrors.aliyun.com@g" /etc/apt/sources.list
sudo sed -i "s@http://.*security.ubuntu.com@https://mirrors.aliyun.com@g" /etc/apt/sources.list
```

### Alibaba Cloud ECS VPC Mirror

```sh
sudo sed -i "s@http://.*archive.ubuntu.com@http://mirrors.cloud.aliyuncs.com@g" /etc/apt/sources.list
sudo sed -i "s@http://.*security.ubuntu.com@http://mirrors.cloud.aliyuncs.com@g" /etc/apt/sources.list
```
