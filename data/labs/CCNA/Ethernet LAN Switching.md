---
title: Ethernet LAN Switching
date: 2022/07/20
tags: ['CCNA']
draft: false
summary: 'See how ARP and MAC address tables are updated'
image: ''
category: ['CCNA']
---

## Overview

In this lab we're going to examine traffic going through switches. The switches will start with empty MAC address tables & empty ARP tables.

This is the lab layout:
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_21_21_30.webp)

## Instructions

`PC1` pings `PC3`. What messages will be sent over the network & which devices will receive them?

Ping PC3 `192.168.1.3` from `PC1`
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_21_01_41.webp)

### ARP Process

![](https://bui.blob.core.windows.net/labs/Lab_2022_07_21_42_01.gif)

1. `PC1` sends an ICMP message to `192.168.1.3`
2. `PC1` does not know the MAC address of PC3 so ARP is constructed for PC3's IP address
3. `SW1` adds PC1 to MAC address table -> `SW1` broadcasts the ARP request out all ports except source
4. `PC2` processes frame and drops it because it's not for the destination IP
5. `SW2` adds PC1 to MAC address table -> `SW2` broadcasts request out all ports except source
6. `PC4` drops
7. `PC3` updates it's ARP table -> `PC3` sends out a reply with MAC address
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_21_35_07.webp)
8. Frame is sent to `SW2` -> `SW1` -> `PC1`
9. `PC1` updates it's ARP table
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_21_18_23.webp)

### Ping Process

![](https://bui.blob.core.windows.net/labs/Lab_2022_07_21_43_13.gif)

1. `PC1` sends out ICMP echo request
2. `PC1` has the MAC address of `PC3` from ARP table so it sets a destination MAC address and sends it out
3. `SW1` receives frame -> `SW1` sees that it has destination MAC address in it's MAC table and sends it out port G0/1
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_21_32_28.webp)
4. `SW2` receives frame -> `SW2` sees that it has destination MAC address in it's MAC table and sends it out port F0/1
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_21_33_20.webp)
5. `PC3` receives frame -> decapsulates PDU from frame -> decapsulates packet because it was destined for this IP
6. `PC3` processes the ICMP packet & sends an echo reply to the IP address of `PC1`
7. Frame is sent to `SW2` -> `SW1` -> `PC1`
8. `PC1` decapsulates packet & receives the echo reply message
