---
title: CCNA Lab-04 Basic Device Security
date: 2022-07-17
tags: ['CCNA']
draft: false
summary: 'Configure basic security settings on Cisco router & switch'
image: ''
category: ['CCNA']
---

## Overview

The purpose of this lab is to get familiar with Cisco's IOS CLI.

We are going to configure a Cisco router & switch's basic security settings.

This is the layout of the network we'll be looking at:
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_48_24.webp)

## Instructions

### Changing the hostnames of the router & switch to be `R1` and `SW1`

1. Enter global configuration mode by issuing `enable` then `configure terminal`
2. Enter `hostname` followed by the name you want to set on the device
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_53_32.webp)
3. Repeat the for the other device
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_55_03.webp)

### Configure and encrypted enable password of `CCNA` on both devices

1. While inside global configuration mode, enter `enable password CCNA`
2. Exit back to user exec mode with `exit` and re-enter with `enable`
3. You will be prompted to enter a password (case sensitive)
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_02_03.webp)
4. Repeat for the other device
5. If we do `show running-config` we can see the password stored in plain text
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_03_28.webp)
6. Encrypt the password by entering `global config mode` and running the command `service password-encryption`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_05_19.webp)
7. The password is now encrypted and not shown in plain text

### Configure a more secure & encrypted password for your devices

1. Enter `global config mode` and run the command `enable secret Cisco`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_12_32.webp)
2. Exit back to user exec mode with `exit` and re-enter with `enable`
3. You will be prompted to enter a password, but this time it's the password `Cisco`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_13_51.webp)
4. The `enable secrets` overrides the `enable password` set on the device
5. We can see when we show the running config that both the password and secret is enabled, but only hte enable secrets applies
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_15_20.webp)
6. This `enable secrets` is stored as an MD5 hash and is more secure than the normal `enable password` encryption
7. Save the running-config to startup config by running `write` alternatively you can run `copy running-config startup-config`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_17_18_10.webp)
