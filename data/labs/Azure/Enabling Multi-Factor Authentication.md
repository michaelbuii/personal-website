---
title: Enabling Multi-Factor Authentication
date: 2022/07/16
tags: ['Azure', 'Security']
draft: false
summary: 'Enabling MFA in multiple ways'
image: ''
category: ['Azure']
---

## Overview

Multi-Factory Authentication (MFA) is when a user is prompted for an additional form of identification to access a resource. This can be a text message with a code, an authentication app, or a biometric.

There are many ways to enable MFA in Azure. In this lab, we'll go through the different ways to set it up.

## Security Defaults

---

This is the quickest way to enable MFA for all users. When enabled, all users in your tenant must register for MFA

1. Browse to `Azure Active Directory` -> `Properties` -> `Manage Security Defaults`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_50_53.webp)
   Once MFA is set up, users have 14 days from their first sign in attempt to register. If users fail to register after 14 days, they will be blocked from accessing resources.
   Read more on security defaults [here](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/concept-fundamentals-security-defaults#require-all-users-to-register-for-azure-ad-multi-factor-authentication)

## Per User Authentication

---

You can enable MFA for specific users. This is not really recommended because it can be hard to keep track of which users are set up for MFA.

1. Browse to `Azure Active Directory` -> `Users` -> `Per-user MFA`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_54_57.webp)

## Identity Protection

---

This method of enforcing MFA activates when a user's risk score is above the threshold amount set. Several factors can contribute to the sign in risk, such as logging in from a different location than normal, using a different device, or other abnormal activity detected by Microsoft.

1. Browse to `Azure Active Directory` -> `Security` -> `Identity Protection` -> `Sign-in risk policy`
2. Adjust the sign-in risk level & set control to grant access with MFA
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_02_04.webp)
3. Remember to enforce the policy and save
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_02_41.webp)

## Conditional Access

---

Conditional Access allows for more complex rules for requiring MFA.

- You can exclude certain users, such as a break-glass account, in the event that conditional access locks every user out.
- You can require MFA only for certain applications or resources
- Assign named locations to not require MFA (such as an internal IP address)

1. Browse to `Azure AD Conditional Access`
   - You can similarly set this up in the endpoint manager
2. Select which group of users this policy will apply to - We will be using the `Sales - Vancouver` for this demo
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_10_49.webp)
3. Choose which resource you want to apply conditional access to - For this demo, we are going with Office 365
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_34_21.webp)
4. For `Access controls` we're going to set grant, but require the user to perform MFA
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_16_12.webp)
5. Turn the policy on and create

### Demo

We're going to log on as `Alfonzo Thiel` who is a part of the Sales - Vancouver group in my AAD

1. Logging on as Alfonzo to `portal.azure.com` signs me in without issue
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_35_41.webp)
2. Logging into `portal.office.com`, I am greeted with a screen asking for information
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_36_16.webp)
3. Clicking next will prompt me to set up MFA if I want to access Office 365 resources
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_38_11.webp)

## Summary

In this lab, we've gone over the various ways to set up MFA

- Security Defaults
  - The easiest way to set up MFA for all users
  - Has a 14-day period for users to sign up for MFA
- Per User Authentication
  - Set up MFA for only certain users
- Identity Protection
  - Require MFA for logins that are flagged at a specific risk level
  - Helps secure accounts from malicious attacks
- Conditional Access
  - Has the most granular controls for setting up MFA
  - Can choose to include/exclude certain groups for each policy
  - Can enforce MFA based on specific criteria such as specific app or location
