---
title: Creating Users in Okta & Pushing to Google Workspace
date: 2022/08/28
tags: ['Okta', 'Google Workspace']
draft: false
summary: 'Create users and push them to Google Workspace & Azure'
image: ''
category: ['Okta']
---

## Overview

In this lab we'll populate the following users into our Okta user directory:
| Name | Last Name | Job Title | Group |
| ------- | --------- | --------- | ------------- |
| Sam | Morse | CEO | Executives & Managers|
| Amanda | Lambert | Director | Executives & Managers|
| Justin | McLean | Sales Manager | Executives & Managers|
| Owen | Murray | IT | All Employees |
| Anthony | Wilkins | Finance | All Employees |
| Sarah | Churchill | Sales | All Employees |

### Prerequisite

- The Google Workspace integration has to already be set up from a previous lab [here](/lab/Okta/Configuring%20SSO%20for%20Google%20Workspace%20in%Okta)

## Create Users

### Adding a Single User

1. Navigate to `Directory` -> `People` -> `Add Person`
2. Fill out the form to add user info
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_43_00.webp)

### Bulk Add Users

1. Go to `More Options` and select `Import users from CSV`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_43_27.webp)
2. Download the template & fill it out
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_48_55.webp)
3. Import the CSV
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_49_57.webp)

All our users should now be added into our directory
![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_54_41.webp)

## Sync to Google Workspace

- In the Google Workspace App under assignments select how you want to assign the users. In this scenario I chose to apply to everyone in my directory.
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_32_42.webp)

## Verifying in Google Workplace

- Users are automatically created in Google Workspace
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_31_46.webp)
