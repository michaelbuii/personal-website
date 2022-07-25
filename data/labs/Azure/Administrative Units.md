---
title: Administrative Units
date: 2022/07/24
tags: ['Azure', 'Azure-Active-Directory']
draft: false
summary: 'Create administrative units & assign admins'
image: ''
category: ['Azure']
---

## Overview

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/azure/active-directory/roles/administrative-units)

Administrative units are organizational containers for users, groups, and devices. They can be used to restrict administrative scope. In this example we're going to divide the administrative units into 3 different city offices.

In this lab, we're going to create 3 dynamic administrative units for the `Vancouver`, `Toronto`, & `Calgary` departments. We're then going to assign a helpdesk admin to each administrative unit.

## Steps

### Creating Administrative Units

1. Go to `Azure Active Directory` -> `Administrative Units` -> `Add` and provide a name
2. Select the which administrator role to add. We're going to choose helpdesk
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_25_52.webp)
3. Select a user to assign this role
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_27_55.webp)
4. Repeat for the other offices
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_31_51.webp)

### Dynamic Assignment

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/azure/active-directory/roles/admin-units-members-dynamic)

1. Go into properties of the administrative unit & change membership to `dynamic user`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_33_09.webp)
2. Configure dynamic assignment rules
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_34_12.webp)
3. Repeat for the other cities
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_36_03.webp)

## Validation

- If we go back into the Vancouver Administrative Unit we'll see that it's been populated with users that have the `city` property equal to `Vancouver`
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_37_15.webp)

- We are going to log into the `Helpdesk - Vancouver` user to test if our administrative units work.
- Looking at the roles assigned we can see that we have the Helpdesk administrator role only on the resource `Vancovuer Office`
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_40_13.webp)
- We should be able to reset the passwords for the users listed above, but not be able to reset passwords of other users.
- We are able to reset the password of `Kevin Jackson` who is a part of the `Vancouver` administrative unit
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_44_15.webp)
- If we attempt to reset the password of `Emily Grant` who is a part of the `Toronto` administrative unit, we'll be denied
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_24_45_51.webp)
