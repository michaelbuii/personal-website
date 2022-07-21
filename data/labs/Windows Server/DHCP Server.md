---
title: DHCP Server
date: 2022/07/18
tags: ['Windows-Server', 'DHCP']
draft: false
summary: 'Set up a DHCP server and assign IP addresses'
image: ''
category: ['Windows-Server']
---

## Overview

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/troubleshoot/windows-server/networking/install-configure-dhcp-server-workgroup)

A DHCP server automatically provides and assigns IP addresses & IP configurations to client devices from a pool of addresses set up.

In this lab we're going to install the DHCP server role on SVR01 and assign a pool of addresses to give out.

## Instructions

1. Install the `DHCP Server` role
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_02_43.webp)
2. Configure the post-deployment configuration
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_10_08.webp)
3. We'll use the Administrator account to manage DHCP
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_12_42.webp)
4. Launch DHCP manager
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_14_17.webp)
5. Right click IPv4 to set up a scope
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_15_50.webp)
6. Set the pool of IP addresses to assign from `10.0.0.50` to `10.0.0.150`. This allows for 100 IP addresses to be given out.
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_17_00.webp)
7. Set the lease time to 7 days. This will vary based on your own needs.
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_18_37.webp)
8. You can optionally set up IP configurations to give out to client devices
9. Configure the default gateway
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_19_33.webp)
10. Specify the main DNS server. In my lab, SVR01 will also be the primary DNS server
    ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_22_04.webp)
11. Activate the scope to start assigning IP addresses

## Validating DHCP Configuration

We'll be using `PC01` to validate the settings

- On our first run of `ipconfig` we can see the PC is using an APIPA address
- When we run `ipconfig /renew` the PC sends out a request for an IP and is offered one from our DHCP server
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_40_54.webp)
- We are assigned `10.0.0.50` from the DHCP server, which is the first assignable IP from our pool of addresses
- Back on `SVR01` we can see the currently leased IP addresses
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_18_27_54.webp)
- We can see the IP `10.0.0.50` assigned to `PC01`
