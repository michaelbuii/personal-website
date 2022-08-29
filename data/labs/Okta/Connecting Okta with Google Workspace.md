---
title: Connecting Okta with Google Workspace
date: 2022/08/26
tags: ['Okta', 'Google Workspace']
draft: false
summary: 'Adding integration for Google Workspace in Okta'
image: ''
category: ['Okta', 'Google Workspace']
---

## Overview

Okta is acting as our universal directory store. However, we want to use services from google workspace which require users to exist within the google workspace environment.

We also want to keep 1 set of credentials for SSO using our Okta environment.

To solve this we will be connecting Google Workspace with Okta to replicate users into Google Workspace and maintain the same credentials for SSO.

## Prerequisites

- An Okta & Google Workspace environment
- An Okta admin account
- A Google Workspace account with user admin permissions to create/update users

## Connecting to Google Workspace

1. Search for `Google Workspace` in Okta's app catalog and click `add integration`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_30_43.webp)
2. Give the application a label
3. Enter your domain associated with the Google Workspace
4. Choose number of seats (licenses) - Here we put 6 to not go over our trial limit in Google Workspace
5. Disable Powser plugin auto-submit - This is a password vaulting technique. We'll configure SSO after
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_33_10.webp)
6. Choose Sign on method - We'll be going with SAML and setting it up in the next step
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_35_18.webp)

## Provisioning

1. Click on the Google Workspace App and select the provisioning tab
2. Scroll down to configure API Integration to allow okta to automate Google Workspace user CRUD operations
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_45_48.webp)
3. Authenticate with your Google admin account that has user admin priviledges
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_48_07.webp)
4. Save the configuration and go back to provisioning
5. Configure settings for `To App`. We'll be using Okta as the master directory and replicating to Google Workspace.
6. Select Enable for creating, updating, deactivating users
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_52_13.webp)
7. Under Assignments - Assign the application to a group of users
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_00_39.webp)
8. Select which organizational unit to send these users to & what licenses to apply
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_02_04.webp)

## Verifying

- In my Okta directory I have a group of users named `Google Workspace` with 2 users
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_12_01.webp)
- Since we assigned the `Google Workspace` application to this group, they should be replicated to Google
- In our Google audit logs we see that 2 users were created using the Okta service account
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_13_18.webp)
