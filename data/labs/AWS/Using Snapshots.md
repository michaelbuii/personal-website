---
title: Using Snapshots
date: 2022/08/24
tags: ['AWS', 'EC2']
draft: false
summary: 'Using snapshots to create EBS volumes and AMIs'
image: ''
category: ['AWS']
---

## Overview

Snapshots let you back up data on Amazon EBS volumes. They save the state of the volume at a point-in-time and subsequent backups are incremental.

Snapshots are useful for copying over EBS volumes from one availability zone to another. You can create a snapshot of an EBS volume then create a new volume based on the snapshot.

You can also use snapshots to create your own custom images with preconfigured settings then launch a new EC2 instance with those settings.

In this lab, we'll look at creating a snapshot for an EBS volume and creating a new volume in another availability zone. We'll also look at creating our own custom AMI with an apache http server installed.

## Moving EBS Volumes with Snapshots

In the the [Create and Attach EBS Volumes](/lab/AWS/Create%20and%20Attach%20EBS%20Volumes) lab we created an EBS volume in the west-2a availability zone. We're going to create a snapshot of that EBS volume and move it to west-2b

1. Go to `EC2` -> `Elastic Block Store` -> `Snapshots` -> `Create Snapshot`
2. Create a snapshot of a volume
3. Choose the volume to create a snapshot of
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_20_51.webp)
4. From the Snapshot select `Create volume from snapshot`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_29_05.webp)
5. Select the us-west-2b availability zone
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_30_07.webp)
6. Attach the volume to the `Lab-3` EC2 instance we made in a previous [lab](/lab/AWS/Create%20and%20Attach%20EBS%20Volumes)
7. SSH into `Lab-3`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_35_47.webp)
8. Mount the volume
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_40_14.webp)

- All the data we had from the previous EBS volume from availability zone west-2a has been moved to west-2b on to this EC2 instance

## Creating an AMI From a Snapshot

1. Create an EC2 instance with the following startup script
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_05_49.webp)

```bash
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
```

2. Go to the http://(ip address here) and you'll see the default apache webpage
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_50_52.webp)
3. Create a Snapshot of the instance
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_52_38.webp)
4. From the snapshot - select `Create image from snapshot`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_56_54.webp)
5. Provide a name/description and leave defaults
6. Alternatively, you can skip creating a snapshot and create an image straight from the EC2 dashboard by right clicking the instance and selecting `create image`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_01_18.webp)
7. Go to `EC2` -> `Images` -> `AMIs` select the AMI and click `Launch instance from AMI`
8. Alternatively, go to launch an instance and select your AMI under `My AMIs`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_23_06_19.webp)
9. Go to the http://(ip address here) of the newly created EC2 instance & without any configurations you should see the apache http server default page
