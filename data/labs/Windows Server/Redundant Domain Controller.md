---
title: Redundant Domain Controller & DNS
date: 2022/07/23
tags: ['Windows-Server', 'DNS']
draft: false
summary: 'Set up a secondary domain controller for redundancy'
image: ''
category: ['Windows-Server']
---

## Overview

In this lab we'll be configuring a second domain controller on `SVR02` to provide redundancy for Active Directory & DNS in our domain.

## Instructions

1. Join the machine to the domain you want to set up redundancy on
2. Add the Active Directory Domain Services Role
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_23_29.webp)
3. Promote Server to a domain controller
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_25_49.webp)
4. Add the domain controller to an existing domain. Our domain `lab.builab.ca`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_31_33.webp)
5. Specify the domain controller capabilities. We're not making this DC read only. Read only domain controllers can not be written to, they can only receive info from other DC's.
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_35_49.webp)
6. Specify which DC to replicate from. We're replicating from `SVR01`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_37_00.webp)
7. Finish up installation wizard & restart machine

## Validation

Upon restarting the machine we check to see if Active Directory & DNS records have been replicated over to `SVR02`

1. In ADDS, my OU of `BuiLab` is replicated over to `SVR02` with the users inside
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_42_21.webp)
2. Clicking on the Domain Controllers OU we can now see that `SVR01` & `SVR02` are listed
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_42_58.webp)
3. Our DNS forward and reverse lookup zones were replicated over from `SVR01`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_23_43_53.webp)
