---
title: Create and Attach EBS Volumes
date: 2022/08/23
tags: ['AWS', 'EC2']
draft: false
summary: 'Create an EBS volume and attach it to an EC2 instance'
image: ''
category: ['AWS']
---

## Overview

EBS volumes are block level storage devices that can attach to instances. You can use these volumes similar to how you would use a physical hard drive.
EBS volumes must be in the same availability zone of the EC2 instance it attaches to.

In this lab, we'll create an EBS volume & attach it to an EC2 instance. We'll then detach it from the EC2 instance and connect it to another EC2 instance.

## Creating the EBS Volume

1. From `EC2` go to `Volumes` -> `Create Volume`
2. Give the volume a size - 8 GiB
3. Select the availabiliy zone this EBS Volume will reside in - us-west-2a
4. Create the volume
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_22_24.webp)

## Attaching to EC2 Instances

- We have 3 instances: `Lab-1`, `Lab-2`, and `Lab-3`
- `Lab-1` and `Lab-2` are in availability zone 2a & `Lab-3` is in availability zone 2b
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_33_48.webp)

1. We'll first attach the EBS Volume to `Lab-1`
2. Navigate to the EBS volume and select `Attach volume`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_37_08.webp)
3. Select an instance to attach the volume to
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_38_07.webp)
4. Notice that `Lab-3` is not listed because it is not running in the same availability zone as the EBS volume

## Verify EBS Volume is Attached

Documentation for making EBS volumes available for use [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html)

1. SSH into the `Lab-1` Instance
2. Use `lsblk` command to list disks available on the EC2 instance
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_13_44.webp)
3. The attached EBS volume is /dev/xvdf which contains no partitions

## Using the EBS Volume

- New volumes are raw block devices and need a file system before we can mount and use them

1. Format the EBS volume as xfs by running `sudo mkfs -t xfs /dev/xvdf`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_18_15.webp)
2. Mount the volume
   2a. Create a directory with
   ```bash
   sudo mkdir /data
   ```
   2b. Mount with
   ```bash
   sudo mount /dev/xvdf /data
   ```
3. Go into `/data` and create some files
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_25_26.webp)

## Moving EBS Volume

1. Go into the EBS Volume and select `Detach volume`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_28_11.webp)
2. We'll now reattach the volume to `Lab-2`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_29_05.webp)
3. Inside `Lab-2` we can run `lsblk` to see our attached volumes
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_31_23.webp)
4. Create a mount point with `sudo mkdir /data` and mount the volume
5. Inside our `Lab-2` instance we see that the files we made when the EBS volume was attached to `Lab-1` have carried over
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_32_15.webp)
