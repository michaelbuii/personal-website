---
title: Azure AD Connect
date: 2022/07/25
tags: ['Azure', 'Windows-Server', 'Azure-Active-Directory', 'Active-Directory']
draft: false
summary: 'Installing Azure AD Connect to sync on-prem users to Azure'
image: ''
category: ['Windows-Server', 'Azure']
---

## Overview

Azure AD Connect allows us to sync our on-prem Active Directory with our Azure Active Directory in the cloud. This allows for existing users on our on-prem environment to utilize Single Sign On (SSO) to access both their on-prem resources & their cloud resources with the same credentials.

In this lab we'll be installing Azure AD Connect to `SVR01` which hosts our primary Active Directory for our on-premises environment. We will sync our users to our Azure AD & sign into cloud resources using our existing on-prem credentials.

## Instructions

1. Install Azure AD Connect from Microsoft's download page [here](https://www.microsoft.com/en-us/download/details.aspx?id=47594)
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_13_00.webp)
2. Run Azure AD Connect on the server that will sync AD objects
3. Use express settings (We only have 1 AD forest to sync)
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_15_24.webp)
4. Enter credentials for global admin of Azure AD
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_16_21.webp)
5. Enter On-Prem AD Administrator credentials
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_19_18.webp)
6. Configure Azure AD sign-in domain names. Our On-Prem is using the UPN suffix `lab.builab.ca`, but our Azure AD only has the custom domain `builab.ca`. To fix this we added the custom domain `lab.builab.ca` to our Azure Active Directory
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_24_05.webp)
7. Wait for setup to complete
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_27_42.webp)

## Verification

### Verifying User Sync

- On our on-prem environment we have 2 IT users: Kirk & Michael
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_31_08.webp)
- We also have 2 normal users: Dorothy & John
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_31_49.webp)
- In our Azure AD we see all 4 users synced
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_32_37.webp)

## On-Prem Account

- Log in with our On-Prem account
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_34_03.webp)
- Log into office with the same credentials
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_25_36_09.webp)
