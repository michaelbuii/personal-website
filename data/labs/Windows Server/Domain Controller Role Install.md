---
title: Domain Controller Role Install
date: 2022/07/14
tags: ['Windows-Server']
draft: false
summary: 'Install the Domain Controller Role on the server and promote it to a Domain Controller'
image: ''
category: ['Windows-Server']
---

## Overview

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-)

In this lab, we'll be installing the Domain Controller Role on our server, `SVR01`.
We're also going to promote this server to be the main domain controller for our lab domain, named `lab.builab.ca`.

A Domain Controller responds to authentication requests for authentication from users in a domain. Domain Controllers also contain the data of users and computers on the domain to provide the authentication.

## Instructions

1. In Server Manager click on `Add roles and features` -> Select the server from the server pool
2. Click the checkbox for `Active Directory Domain Services`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_14_19_51.webp)
3. After completing the wizard install, need to promote this server to be a Domain Controller.
4. On the top right of the Server Manager -> click the flag -> `Promote this server to a domain controller`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_14_24_56.webp)
5. We don't have a domain yet, so we're going to select `Add a new forest` and give it the root domain name: `lab.builab.ca`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_14_33_01.webp)
6. You'll be prompted to provide a `Directory Services Restore Mode` (DSRM) Password
   - This password helpes you gain access to the domain in the case that all domain administrators lose access
7. You'll be prompted for DNS (we'll configure this in another lab)
8. Assign a NetBIOS name for easy identification. We'll name it `builab`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_14_37_34.webp)

## Summary

In this lab, we've:

- Installed the Domain Controller Role on `SVR01`
- Promoted the server to be a Domain Controller
- Created a new forest named `lab.builab.com`
- Assign a DSRM password and NetBIOS name

In another lab we'll set up DHCP and DNS on this server to provide additional services to devices on the domain.
