---
title: EC2 Placement Groups
date: 2022/08/20
tags: ['AWS', 'EC2']
draft: false
summary: 'Using Placement groups with EC2 instances'
image: ''
category: ['AWS']
---

## Overview

Placement groups allow you to place your group of instances in a specific way. You can have them spread across availability zones & hardware for resiliency or on the same rack for low latency tasks.

In this lab, we'll create a `cluster`, `spread`, and `partition` placement group. We'll also look at how to place EC2 isntances into these groups.

## Creating Placement Groups

### Cluster

- EC2 instances are placed in the same rack in the same availability zone
- Lower latency
- If a rack fails all our EC2 instances fail

1. Go to `EC2` -> `Placement Groups`
2. Provide a name & select `Cluster` as the placement strategy
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_20_28_40.webp)

### Spread

- All EC2 instances are placed on different hardware (racks)
- Span across multiple availability zones
- Less risk of simultaneous failure
- Limited to 7 instances per AZ per placement group

1. Go to `EC2` -> `Placement Groups`
2. Provide a name & select `Spread` as the placement strategy
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_20_30_40.webp)

### Partition

- A partition is a specific rack in that AZ
- 7 partitions per AZ

1. Go to `EC2` -> `Placement Groups`
2. Provide a name & select `Partition` as the placement strategy
3. Choose the number of partitions (racks) you want to have
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_20_32_30.webp)

## EC2 Instances in Placement Groups

1. When creating an EC2 instance you can specify which placement group to place it under `advanced details`
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_20_35_23.webp)
2. View the details of the placement group when you click on the EC2 instance
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_20_42_59.webp)
