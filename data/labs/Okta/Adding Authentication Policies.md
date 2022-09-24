---
title: Adding Authentication Policies
date: 2022/08/29
tags: ['Okta', 'MFA']
draft: false
summary: 'Setting up MFA for Google Workspace'
image: ''
category: ['Okta']
---

## Overview

Some users or every user can take advantage of MFA. Using Authentication Policies in Okta is similar to having conditional access policies in Azure.

## Instructions

1. Go to `Security` -> `Authentication Policies` -> `Add a Policy`
2. Provide a name and description
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_29_15_39.webp)
3. The default catch-all policy is 2FA, but we're going to create a new rule
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_29_17_02.webp)
4. Click on `Add Rule`
5. Provide a name and target `Sam Morse` for the `User is` property
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_29_19_34.webp)
6. Configure to grant Sam access if they authenticate with a password + another factor - In case Google Authenticator is set up in our environment
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_29_20_43.webp)
7. Add an app to this rule to take affect on - Google Workspace
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_29_22_52.webp)

## Verifying

- Log in as Sam Morse
- In my Apps I click to launch Gmail
- Prompted to setup `Google Authenticator` because it hasn't been set up yet
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_29_26_43.webp)
- I'm also prompted to re-enter my okta password
- Close the session and reopen & you'll SSO normally because reauthentication was set to 2 hours when set up
