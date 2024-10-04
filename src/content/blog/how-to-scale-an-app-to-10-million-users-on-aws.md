---
layout: ../../layouts/LayoutBlogPost.astro
title: "How to Scale an App to 10 Million Users on AWS"
description: "A step-by-step guide to scaling an app from launch to 10 million users using AWS infrastructure"
pubDate: 2024-10-04
category: "AWS"
slug: "scale-app-to-10-million-users-on-aws"
---

# How to Scale an App to 10 Million Users on AWS

I spent hours studying this, so you don’t have to. Here’s a summary of what I learned:

- **Prelaunch**: Use a static site framework to minimize costs.

- **5 Users**: A single EC2 instance can handle the entire web stack.

- **10 Users**: Split the backend and database across separate EC2 instances.

- **1,000 Users**: Set up two availability zones with leader-follower database replication.

- **10,000 Users**: Replicate stateless servers, cache frequently read data, enable auto-scaling, and serve static content via a CDN.

- **500,000 Users**: Add more availability zones and switch to a microservices architecture.

- **10 Million Users**: Shard and federate the database. Expand into multiple AWS regions for global reach.

There are multiple ways to scale an app to 10 million users on AWS, and the right approach depends on your app's specific needs.
