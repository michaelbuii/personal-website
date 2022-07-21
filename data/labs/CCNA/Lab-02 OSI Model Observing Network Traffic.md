---
title: Lab-02 OSI Model Observing Network Traffic
date: 2022/07/13
tags: ['CCNA']
draft: false
summary: 'Using simulation mode in packet tracer to observe network traffic'
image: ''
category: ['CCNA']
---

## Overview

In this lab, we're going to take a look at Packet Tracer's simulation mode to see the network traffic on the network and see what layers of the OSI model are being used.

This is the network we are working with:
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_13_17_40.webp)

## Lab Walkthrough

Simulation mode can be found on the bottom right side.
Clicking on simulation mode will open up a panel where you can choose the speed and play through events
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_13_21_38.webp)
We'll first look at switch-2 sending network traffic
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_13_25_34.webp)

![](https://bui.blob.core.windows.net/labs/Lab_2022_07_13_31_07.webp)

At layer 2 we see that the device encapsulates the PDU into an ethernet frame.

At layer 1 a frame is sent out of FasterEthernet0/1 and GigabitEthernet0/1

Next, we can look at the traffic going through Router-1 which operates at layer 3.
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_13_36_03.webp)

In layer 3: The device encapsulates the data into an IP packet and then sets the TTL (Time to live) on the packet.

Finally, we can look at the traffic that happens when we renew the IP address on PC-1
We can do this by going to PC-1 and doing an ipconfig/renew
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_13_41_11.webp)

![](https://bui.blob.core.windows.net/labs/Lab_2022_07_13_40_33.webp)

The following sequence of events follows:

1. PC-1 sends out a broadcast request to 255.255.255.255 indicating that it has no IP
2. The frame goes to Switch 2. The frame has a broadcast address of FFFF.FFFF.FFFF, so it sends the data out to all ports except F0/1
3. The frame goes to Switch 1. Switch 1 recognizes that this is a broadcast address and sends the frame out of G0/2 and F0/1
4. On SVR-1:
   - At layer 2 – frame is decapsulated
   * At layer 3 – The packet's destination is also for broadcast, so the packet is also decapsulated
   * At layer 4 – the PDU is decapsulated from the UDP segment
   * At layer 7 – The packet is a DHCP packet, so the DHCP server processes it.
     A DHCP Offer packet is prepared and sent back to out to Switch-1 where it will eventually make it back to PC-1
5. At Router-1, the steps of decapsulation are similar to SVR-1 because it also acts as a DHCP server. However, because Router-1 does not have a DHCP pool configured for the received port, the packet is dropped.
