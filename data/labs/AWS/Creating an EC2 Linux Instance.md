---
title: Creating an EC2 Linux Instance
date: 2022/08/10
tags: ['AWS', 'EC2']
draft: false
summary: 'Creating an EC2 Linux Instance'
image: ''
category: ['AWS']
---

## Overview

## Instructions

### Creating EC2 Instance

1. Go to `EC2` and press `Launch Instance`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_10_00_42.webp)
2. Provide a name and tags (optional)
3. Choose a system image (AMI)
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_10_02_45.webp)
4. Choose an Instance type (level of compute power)
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_10_03_53.webp)
5. Create a key pair if you don't already have one. Choose .ppk for use with PuTTY to ssh into the linux instance
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_10_08_05.webp)
6. Set the network to be the default vpc and create a new security group to allow SSH traffic from your IP & HTTP trafic from the internet
   ![](Pasted%20image%2020220810201234.png)
7. Under advanced settings, paste the following code into `user data`

```bash
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
```

- This will install updates for the linux instance & install the http web server
- This script will only run `once` when the instance is first started

8. Launch the instance

### SSH into Instance

Now we need to connect to our instance

1. Go to your Instances and select the instance / click on the instance ID
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_10_35_49.webp)
2. To connect to our instance, open PuTTY. Get PuTTY [here](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
3. Add the `.ppk` key file you received at time of key creation to PuTTY under `Connection` -> `SSH` -> `Auth`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_10_44_29.webp)
4. Connect to the instance using it's public IP
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_10_45_10.webp)
5. The default login name for Amazon Linux instances is `ec2-user`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_10_45_50.webp)

### Viewing the Website

1. Grab the public IP of the instance
2. Go to http://(ip address here)
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_10_51_16.webp)
