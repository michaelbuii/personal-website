---
title: Adding a Custom Domain
date: 2022-07-11
tags: ['Azure Active Directory']
draft: false
summary: Add a custom domain name to your Azure Active Directory
---

## Overview

When you first create an Azure AD tenant you only have the `<domainname>.onmicrosoft.com domain`. You can add a custom domain for your company to help with company branding. It is also easier for users to remember

In this lab we'll be adding the `builab.ca` domain to our tenant

## Instructions

1. Have a domain name ready from a domain registrar. I personally bought mine from `goDaddy`
2. In the `Azure Active Directory` Blade click on `Add custom domain`![](https://bui.blob.core.windows.net/labs/Lab_2022_07_11_28_22.webp)
3. When you enter in your domain name it will prompt you to verify your domain![](https://bui.blob.core.windows.net/labs/Lab_2022_07_11_30_42.webp)
4. You add the record to your DNS record at the site where you registered your domain

## Conclusion

Your custom domain should be ready to use. When you go to add a new user you'll have the option to select the new domain name.
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_11_35_26.webp)
