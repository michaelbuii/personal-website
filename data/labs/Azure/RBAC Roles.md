---
title: RBAC Roles
date: 2022/07/26
tags: ['Azure', 'Governance']
draft: False
summary: 'Create a custom RBAC role & assign it'
image: ''
category: ['Azure']
---

## Overview

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/azure/role-based-access-control)

RBAC (Role Based Access Control) helps manage who has access to Azure Resources. You assign RBAC roles to a security principal to restrict the amount of permissions it has.

In this lab, we'll be using the following lab structure below provided by [Microsoft Learning](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_02a_Manage_Subscriptions_and_RBAC.html)

![](https://bui.blob.core.windows.net/labs/rbac.png)

- We have a RBAC Management group & lab subscription already created.
- We'll create a custom role definition that only allows the user to read `resource groups` & manage support requests only inside the `LAB subscription`

## Instructions

### Custom RBAC Role

1. Role Definition

```JSON
{
   "Name": "Support Request Contributor (Custom)",
   "IsCustom": true,
   "Description": "Allows to create support requests",
   "Actions": [
       "Microsoft.Resources/subscriptions/resourceGroups/read",
       "Microsoft.Support/*"
   ],
   "NotActions": [
   ],
   "AssignableScopes": [
       "/providers/Microsoft.Management/managementGroups/rbac-management-group",
       "/subscriptions/SUBSCRIPTION_ID"
   ]
}
```

2. Open cloud shell and upload the .json custom role
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_26_31_01.webp)

### Assigning Role

We have created a user named `RBAC_Lab_User` for this lab

1. Go to the RBAC management group -> Add -> Role Assignment
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_26_34_57.webp)
2. Search for our created custom role
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_26_36_45.webp)
3. Select the RBAC Lab user
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_26_37_21.webp)

## Verification

1. Log in as RBAC Lab User
2. Browse to `Resource Groups`
3. We can confirm that there are no resource groups
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_26_40_43.webp)
4. Using a global admin, create a resource group with a storage account resource inside
5. Now back on RBAC Lab User we can see the resource group
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_26_47_02.webp)
6. However, we still do not see resources on our RBAC Lab User account
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_26_41_17.webp)
