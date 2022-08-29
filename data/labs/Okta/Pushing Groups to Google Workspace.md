---
title: Pushing a Group to Google Workspace
date: 2022/08/27
tags: ['Okta', 'Google Workspace']
draft: false
summary: 'Setting up groups in Google Workspace using Okta'
image: ''
category: ['Okta']
---

## Overview

> You receive this mail from Sam, the CEO:
>
> Hey Google Workspace Admin,
>
> We would like to have a group email address where I (and only I) can send company wide announcements to everyone.
> I would also like to set up a team group for the use of the executive and managers only. Can you please create these groups for us? Thanks,
>
> Regards,
> Sam Morse, CEO

In this lab, we'll be creating an `All Employees` group in `Okta` and pushing the group to `Google Workspace`. We'll also create a group for `Executives & Managers`.

Each group will have their own emails.

This table shows the list of users we'll be working with
| Name | Last Name | Job Title | Group |
| ------- | --------- | --------- | ------------- |
| Sam | Morse | CEO | Executives & Managers |
| Amanda | Lambert | Director | Executives & Managers |
| Justin | McLean | Sales Manager | Executives & Managers |
| Owen | Murray | IT | All Employees |
| Anthony | Wilkins | Finance | All Employees |
| Sarah | Churchill | Sales | All Employees |

## Creating the Groups

### All Employees

1. Create a group in Okta named `All Employees`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_31_50.webp)
2. Assign users
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_03_23.webp)

### Executives & Managers

1. Create a group named `Executives & Managers`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_04_39.webp)
2. Assign users
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_05_50.webp)

## Push Groups to Google

1. In our Google Workspace Integration assign the application to the `All Employees` group
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_15_29.webp)
2. Go to the `Push Groups` tab
3. Select `Push Groups` -> `Find groups by name`
4. Search for `All Employees`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_18_05.webp)
5. Google Workspace has no group named `All Employees` currently so it will create the group when we press save
6. Repeat for `Executives & Managers`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_19_33.webp)

## Verification

- In our Google Workspace admin console we can see that there are 2 groups created
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_10_58.webp)
- For the future I would name the Executives group something else to avoid the weird group email address

### Adding Sam as Manager

- Go to the members section of the All Employees group
- Click on Sam and give him the role of Manager
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_14_03.webp)
- This will allow her to email members of the group

### Setting up executives group

- Set the group access to restricted
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_16_41.webp)
- Add Sam as a manager so she can add people to the group

### Sending Emails

- Log in as Sam
- Send an email to all employees
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_20_14.webp)
- Send an email to executives
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_21_54.webp)
- Log in as Amanda Lambert to check if she received both emails
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_26_57.webp)
