---
title: Creating Groups
date: 2022/07/16
tags: ['Azure', 'Azure-Active-Directory']
draft: false
summary: 'Create groups in Azure Active Directory'
image: ''
category: ['Azure']
---

## Overview

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-groups-create-azure-portal)

Groups allow you to organize users and apply settings/policy easier. It's easier to group users and assign a setting to the group than it is to apply it to every individual user.

In this lab, we're going to create static and dynamic groups. We'll also explore the different options to create a group, such as using CLI and PowerShell.

## Creating a Group

### Portal

1. `Azure Active Directory` -> `Groups` -> `New Group`
2. Fill out the form with settings you want for the group
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_51_54.webp)

### Azure CLI

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/cli/azure/ad/group?view=azure-cli-latest#az_ad_group_create)

Available parameters

```shell
az ad group create --display-name --mail-nickname [--description] [--force {false, true}]
```

Example: Creates a group named `Static Test Group`

```shell
az ad group create --display-name 'Static Test Group' --mail-nickname 'Static' --description "Static group made for testing purposes"
```

### PowerShell

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/azuread/new-azureadgroup?view=azureadps-2.0)

Available parameters

```powershell
New-AzureADGroup
[-InformationAction <ActionPreference>]
[-InformationVariable <String>]
[-Description <String>]
-DisplayName <String>
-MailEnabled <Boolean>
-MailNickName <String>
-SecurityEnabled <Boolean>
[<CommonParameters>]
```

The new cmdlet `New-AzureADMSGroup` provides alot more functionality to the original `New-AzureAdGroup`
Requires the `AzureADPreview` cmdlet

```powershell
Install-Module -Name AzureADPreview
```

```powershell
New-AzureADMSGroup
   [-Description <String>]
   -DisplayName <String>
   [-IsAssignableToRole <Boolean>]
   -MailEnabled <Boolean>
   -MailNickname <String>
   -SecurityEnabled <Boolean>
   [-GroupTypes <System.Collections.Generic.List`1[System.String]>]
   [-Visibility <String>]
   [<CommonParameters>]
```

Example: Creating a dynamic group

```powershell
New-AzureADMSGroup -Description "Test Dynamic Group made with PS"
-DisplayName "Test Dynamic Group" -MailEnabled $false -SecurityEnabled $true -MailNickname "N/A" -GroupTypes "DynamicMembership" -MembershipRule "(user.displayName -contains ""bui"")" -MembershipRuleProcessingState "On"
```

Result:
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_41_34.webp)

## Static vs Dynamic Groups

Static groups have members assigned manually, whereas dynamic groups use membership rules to assign members.

### Changing to Dynamic Membership

Dynamic membership can be made using PowerShell like shown previously or by the Azure Portal.

1. Change membership type to `Dynamic User` or `Dynamic Device`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_44_27.webp)
2. Configure membership rules to have users/devices dynamically assigned to the group
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_45_28.webp)
