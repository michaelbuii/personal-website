---
title: Creating Users
date: 2022/07/12
tags: ['Azure', 'Azure-Active-Directory']
draft: false
summary: 'Create users using the portal, CLI and Powershell'
image:
category: ['Azure']
---

## Overview

In this lab we're going to create users using 3 different methods

- Azure Portal, Azure CLI, and Azure PowerShell

## Instructions

### Azure Portal

Create a user with the following configurations
| username | buitest1 |
| ---------------- | --------- |
| Name | Bui Test1 |
| Initial Password | Passw0rd |
| Block signing | yes |
We're blocking signin so no one can log into this account

1. Click on + New User
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_12_57_53.webp)
2. Fill in the user information

### Azure CLI

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/cli/azure/ad/user?view=azure-cli-latest#az_ad_user_create)

Create a user with the following
Azure CLI is currently not as feature rich as the Portal / PowerShell
| username | buicli |
| ---------------- | ----------- |
| Initial Password | Passw0rd |

The following options are available:

```shell
az ad user create --display-name
                  --password
                  --user-principal-name
                  [--force-change-password-next-sign-in {false, true}]
                  [--immutable-id]
                  [--mail-nickname]
```

1. Run the following command to create the user

```shell
az ad user create --display-name buicli --password Passw0rd --user-principal-name buicli@builab.ca
```

### PowerShell

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/azuread/new-azureaduser?view=azureadps-2.0)

PowerShell creation is highly customizable and great to learn for automating user setup

```powershell
Connect-AzureAD
```

run this before running other cmdlets to connect

1. Run the following to create the user

```powershell
$PasswordProfile = New-Object -TypeName Microsoft.Open.AzureAD.Model.PasswordProfile
$PasswordProfile.Password = "Passw0rd"

New-AzureADUser -DisplayName "buiPS" -PasswordProfile $PasswordProfile -UserPrincipalName "buiPS@builab.ca" -AccountEnabled $False -MailNickName "buiPS"
```

2. You'll get text confirming the creation of the user object
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_12_09_12.webp)
