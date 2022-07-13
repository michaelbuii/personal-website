---
title: Pho Canada Website
date: 2022-07-10
tags: ['HTML', 'CSS', 'Javascript']
draft: false
summary: Website to for local Vietnamese restaurant
image: '/static/images/pho-canada.webp'
category: ['Project']
---

![](https://bui.blob.core.windows.net/labs/Lab_2022_07_12_05_14.webp)

## Overview

This website was built for a restaurant to display their menu and photos of dishes that they offer. The website needed to look good displayed on mobile because most traffic comes from mobile google searches.

Source Code: [GitHub](https://github.com/michaelbuii/Pho-Canada)

## How I built it

The website was built from scratch using my newly developed skills in HTML, CSS, and Javascript.
The website is hosted using Azure Static Web Apps. This pulls updates from my GitHub repositiory where the code is stored.
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_12_17_39.webp)

When updates are pushed to the repo, GitHub actions will run the workflow that Azure Static Web Apps deployed and update the website.

## Custom Domain and SSL

To add a custom domain, we can go to the Web App resource in the Azure portal and click on the Custom Domain blade. The setup for a custom domain is the same process that we used for our lab [here](/lab/Azure/Adding%20a%20Custom%20Domain)

SSL is freely provided and managed by Microsoft, so we can have https for our site.

## Reflection

Building a website from scratch is alot harder than taking a template and tweaking elemetns to your liking. I wanted to see what I could build with just my novice knowledge of HTML and CSS.

Making a website responsive to different screen sizes is a 100% must have in today's world. Managing different @media queries can be difficult to manage. I hope to learn more effective ways of managing responsive design.
