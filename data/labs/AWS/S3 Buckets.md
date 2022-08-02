---
title: S3 Buckets
date: 2022/08/01
tags: ['AWS', 'Storage']
draft: false
summary: ''
image: ''
category: ['AWS']
---

## Overview

Documentation: [AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html)

Buckets are containers for storing data objects in AWS. In this lab, we'll go through a few for the settings available wiith S3 buckets.

We'll look at:

- Creating a bucket
- Allowing object versioning
- Setting bucket access
- Lifecycle rules

## Creating a Bucket

1. Navigate to `S3` -> `Create Bucket`
2. Provide a name that is unique across all AWS
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_13_02.webp)
3. Decide on public access rules
4. Enable / disable versioning
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_18_05.webp)
5. Decide on encryption - (Server-side encryption means that data is encrypted at rest in the bucket)
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_18_39.webp)

## Versioning

When you enable versioning S3 keeps a copy of past versions.

- To see past versions press on `show versions`
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_53_38.webp)
- You can also click on the object and select `versions` to see past versions
  ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_54_42.webp)

## Access Permissions

You can set policies to decide how objects in the bucket can be accessed.

We're going to allow public anonymous access to only read the objects in our bucket.

1. Under permissions edit the bucket policy
2. Create a policy using the policy generator [here](https://awspolicygen.s3.amazonaws.com/policygen.html)
3. Choose s3 policy for policy type
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_21_47.webp)
4. Select `allow` and the `*` wildcard for everyone
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_22_09.webp)
5. We're going to select `s3:GetObject` and `s3:GetObjectVersion` to get the objects from the bucket
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_20_47.webp)
6. Apply the policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject", "s3:GetObjectVersion"],
      "Resource": "arn:aws:s3:::builab-bucket/*"
    }
  ]
}
```

## Lifecycle

You can create lifecycle rules for all objects inside the bucket or based on prefixes, tags, or object size.

1. Setting a rule scope
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_58_12.webp)
2. Set filters to apply to items
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_00_46.webp)
3. Select what you want to do to the objects
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_01_39.webp)
4. Select where to move the items
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_02_34.webp)
5. Now items inside the documents prefix (folder) will be placed in glacier deep archive after 15 days
   ![](https://bui.blob.core.windows.net/labs/Lab_2022_08_01_03_49.webp)
