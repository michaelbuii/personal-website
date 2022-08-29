---
title: Configuring SSO for Google Workspace in Okta
date: 2022/08/27
tags: ['Okta', 'SSO', 'Google Workspace']
draft: false
summary: 'Set up SSO for Google Workspace using Okta as an IdP'
image: ''
category: ['Okta']
---

## Overview

In a previous lab, we integrated Google Workspace with Okta. We chose to use SAML for SSO so that users wouldn't need to have passwords for Google Workspace.

In this lab, we'll be configuring SSO so that users can sign into their google accounts from Okta.

## Instructions

1. In the Google admin portal - go to `Security` -> `Authentication` -> `SSO with third party IdP`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_42_31.webp)
2. Click `Add SSO Profile`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_43_31.webp)
3. To get the Sign-in page URL you can go to the Google Workspace Integration and click Sign On -> View SAML setup instructions
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_51_09.webp)

## Verifying

### Going straight to Google (Service-Provider Initiated)

- Upon going to gmail.com and entering credentials for the builab domain user - I am taken to an Okta sign in to access Gmail
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_52_14.webp)
- Once I log in I am in my Gmail
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_54_09.webp)

### Going from Okta Portal (IdP Initiated)

- I will log into the Okta portal at okta.builab.ca using the Sam L user
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_28_38_20.webp)
- We're greeted with the available apps on the users dashboard
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_02_40.webp)
- Clicking on any of these logs us in to the Google app
- Here, I click on Google Workspace Account
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_27_03_45.webp)
