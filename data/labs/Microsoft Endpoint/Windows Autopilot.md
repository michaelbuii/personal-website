---
title: Windows Autopilot
date: 2022-07-15
tags: ['Microsoft-Endpoint']
draft: false
summary: 'Join a new device to your domain automatically'
image: ''
category: ['Microsoft-Endpoint']
---

## Overview

Documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/mem/autopilot/add-devices)

Autopilot is used to pre-configure new devices and get them ready out of the box. When a user receives their new device, Autopilot will go through the configure process automatically.

We are going to have a device auto join our Azure AD domain automatically when the user enters the OOBE (out-of-box-experience).

We are going to simulate the OOBE by harvesting the hwid of a virtual machine and then resetting it to go into the OOBE. This will simulate a brand new device where usually the vendor would send us the list of hwid's.

## Instructions

### Harvest the HWID

This is not necessary in a real life scenario, because you will typically already have the HWID.

1. Run the following PowerShell script in an elevated PowerShell session

```powershell
New-Item -Type Directory -Path "C:\HWID"
Set-Location -Path "C:\HWID"
$env:Path += ";C:\Program Files\WindowsPowerShell\Scripts"
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
Install-Script -Name Get-WindowsAutopilotInfo
Get-WindowsAutopilotInfo -OutputFile AutopilotHWID.csv
```

2. Save the csv file to somewhere you can access it from
3. Reset the machine

### Importing Device ID

1. Navigate to `endpoint.microsoft.com`
2. Select `devices` → `Windows enrollment` -> `Devices`
3. Click `import` and select the csv we saved
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_17_01.webp)
4. Once the device is done importing, assign the device to a group
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_33_55.webp)

### Configure Deployment Profile

1. Navigate back to Windows enrollment and select `Deployment Profiles`
2. Select `create profile`. We are going to assign a profile to our newly imported device
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_26_14.webp)
3. Customize the OOBE settings. You can hide certain settings like licensing terms and privacy settings.
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_30_04.webp)
4. Assign the policy to the group we created containing the device
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_35_09.webp)

### The User Experience

When the user opens their device for the first time, this is what they will experience.

1. The device will automatically go through the autopilot process
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_49_15.webp)
2. It will prompt for credentials. We're going to log in with an account that was set up for this lab.
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_51_05.webp)
3. Windows will start up as normal and prompt you to log in
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_02_45.webp)

### Conclusion

We have successfully enrolled the device into our AAD Domain

In the account settings, we can see that we're using the work account `mike@builab.ca`
![](https://bui.blob.core.windows.net/labs/Lab_2022_07_16_52_36.webp)
