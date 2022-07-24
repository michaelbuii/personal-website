---
title: DNS Server
date: 2022/07/22
tags: ['Windows-Server', 'DNS']
draft: false
summary: 'Deploying DNS Server for name resolution'
image: ''
category: ['Windows-Server']
---

## Overview

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/networking/dns/dns-top)

DNS Server provides name resolution to computers and users by mapping computer names to IP addresses. DNS allows us to use friendly names that can be easily remembered instead of IP addresses.

In Windows Server, DNS is a server role that you can install. However, in this lab we already have the DNS role installed because we installed AD DS on the server previously.

In this lab, we'll be configuring the DNS Server role on `SVR01` to allow name resolution for the PCs in our domain.

## Instructions

### Forward Lookup Zones

Forward lookup zones let us map host names to IP addresses

1. Open DNS manager
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_32_07.webp)
2. Right click Forward Lookup Zone -> New Zone
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_13_30.webp)
3. Choose replication settings
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_14_06.webp)
4. Configure Dynamic Update - This allows hosts to add A records to the forward lookup zone when they are part of the domain
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_14_43.webp)

- We can see that `PC01` added it's A record dynamically
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_18_11.webp)

### Reverse Lookup Zones

Reverse lookup zones let us find the host name of an IP address

1. Right click Reverse Lookup Zone -> New Zone
2. Create a new Primary Zone
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_20_34.webp)
3. Configure Replication
4. Choose type of reverse lookup. We're going to work with IPv4
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_21_06.webp)
5. Set the network portion of the IP space for the network. The network portion of our IP space is `10.0.0` we're using a subnet mask of `255.255.255.0`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_22_17.webp)
6. Allow records to by dynamically added
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_23_50.webp)

- Our reverse lookup zone configuration is completed
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_24_24.webp)

## Results

- On `PC01`, I pinged `SVR01`
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_34_16.webp)
- `SVR01` is the host name and DNS points it to the `lab.builab.ca` domain
- If we ping a host name that doesn't exist like `SVR02` DNS will not be able to resolve the name
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_42_17.webp)
- We can add an A record for `SVR02` and DNS will be able to resolve it
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_43_49.webp)
- Pinging `SVR02` again, the name resolves to our A record of `10.0.0.2`, however I do not have `SVR02` online so the ping request fails
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_44_25.webp)
- The IP address of PC01 is known to the DNS server via DHCP assignment and a PTR record is dynamically created in the Reverse lookup zone
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_36_12.webp)
