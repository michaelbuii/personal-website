---
title: IAM User
date: 2022/07/27
tags: ['AWS', 'IAM']
draft: false
summary: 'Create an administrator IAM user to log in'
image: ''
category: ['AWS']
---

## Overview

As best practice, you should only use the root user account to perform select service management tasks. You should use an IAM user to perform other activities inside AWS

## Instructions

1. Enable billing data under `Account` to allow IAM users access to pages of the Billing and Cost Management console
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_27_54_00.webp)
2. Under IAM -> Users -> Add a user
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_27_56_32.webp)
3. Provide username
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_27_57_59.webp)
4. Select required credentials
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_27_58_26.webp)
5. Add user to a group named `Administrators` & apply the `AdministratorAccess` policy to provide full access to AWS services & resources
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_27_00_00.webp)
6. Download / save the credentials. This is the only time you can save these credentials.

## Verification

### Console Login

1. Using the new console login link enter in your new credentials or aws.amazon.com/console
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_27_03_51.webp)
2. You can change this accoutnID to something familiar like `builab` by changing the account alias under `IAM` -> `Account Alias`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_27_08_39.webp)

### CLI Login

1. Download the CLI [here](https://aws.amazon.com/cli/)
2. Set up AWS CLI documentation [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
3. Run `aws configure`
4. Enter your access key & secret key information that you downloaded earlier
