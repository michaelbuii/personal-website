---
title: Bulk User Create
date: 2022-07-16
tags: ['Azure', 'Azure-Active-Directory']
draft: false
summary: 'Create users in bulk in AAD'
image: ''
category: ['Azure']
---

## Overview

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/users-bulk-add)

Rather than creating users 1-by-1, we can create users in bulk using a CSV file. This allows you to add many members at once by just downloading and filling out Microsoft's CSV template.

In this lab we're going to create 4 users

- 2 users in the Sales group
- 2 users in the IT group

## Instructions

1. `Azure Active Directory` -> `Users` -> `Bulk Operations` -> `Bulk Create`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_17_18.webp)
2. Download the CSV template
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_18_22.webp)
3. Fill out the CSV
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_18_54.webp)
4. Upload the CSV file back into `bulk user create`

Azure will process the users. If any errors occur, it'll be shown under failure.
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_20_01.webp)
