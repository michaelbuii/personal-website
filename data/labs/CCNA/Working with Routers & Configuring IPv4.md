---
title: Working with Routers & Configuring IPv4
date: 2022/08/05
tags: ['CCNA']
draft: false
summary: 'Configure the network interfaces a router'
image: ''
category: ['CCNA']
---

## Overview

In this lab, we'll be looking at basic configurations on a Cisco router. We will also be assigning IPv4 addresses to the router's interfaces.

This is the network diagram we'll be working with:
![](https://bui.blob.core.windows.net/labs/Lab_2022_08_05_09_45.webp)

## Instructions

### Configure R1's host name

1. Enter R1's CLI
2. Enter global configuration mode by issuing `enable` then `configure terminal`
3. Enter hostname `R1`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_05_11_50.webp)

### View the list of R1's interfaces

1. In privileged exec mode use the command `show ip interface brief`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_05_14_39.webp)

- We see that all IP interfaces do not currently have an IP-Address assigned
- Status on interfaces are administratively down (default on Cisco Routers) which means that the interfaces have been disabled with the `shutdown` command

### Configure IP Addresses on R1's Interfaces & Enable Them

1. From config mode enter command `interface gigabitEthernet 0/0` or using shorthand `int g0/0`
2. Configure the IP address with `ip add 15.255.255.254 255.0.0.0`
3. Add a description with `desc ## to SW1 ##`
4. Enable the interface with `no shutdown`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_05_26_54.webp)
5. Continue to configure the other network interfaces
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_05_28_56.webp)

### Saving The Configuration

1. Run this command to save the running config to the startup config `write memory`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_05_31_14.webp)
2. This allows the router to load up these configurations next time it turns on

### Test Connectivity

1. Configure the IP addresses on each PC `config` -> `Interface` -> `IPv4 Address` -> `FastEthernet0`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_05_38_36.webp)
2. Ping `PC2` & `PC3` from `PC1`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_05_38_06.webp)
