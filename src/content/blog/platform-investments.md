---
publishDate: 2023-01-08T00:00:00Z
title: Platform Investments
description: How much of your r&d spend should be focused on platform work?
excerpt: Build a tech investment system that reinforces itself. While it's controversial why I suggest you spend 50% of your r&d budget on your platform.
nextpost: layerinitis
---

Another common question I’m answering working with scaling tech companies is…

Question: How much of your r&d spend should be focused on platform work?

Answer: 50%, and most teams are way off what it should be. Let me explain...

This question is a proxy question for many underlying issues…

- Lack of trust in the engineering team
- Lack of understand of your strategy
- Lack of long term thinking and culture
- Lack of understanding of compounding technology investments

This comes up is often in panic situations, “the engineering team says that there’s too much technical debt and can’t work on features”… but the problems started way before.

Let’s step back… what is meant by platform? Its definition has changed over the decades and we can’t talk about platform investments without a shared definition.

Platform used to mean a complete software development environment and underlying subsystem with language, runtime, components and all associated libraries and binaries. Only the big guys had one, Windows, iOS, Linux, Eclipse – and then platforms became mainstream.

In the recent decade, a platform is more broad and means anything that you can build upon. A platform enables you to build things with that were not originally envisaged. A platform is the foundational layers of your product. And every company in the 1-N phase has one.

More concretely your platform is a lot:

- Infra that runs your stuff
- Development environment and tools that helps write / test / run code
- System architecture / security
- Key technology choices
- Core abstractions (data model, business modelling)
- API/SDKs

Your platform isn’t just the small set of hidden engineering parts. The quality of your platform investments will influence some of your most important product features: scalability, speed, quality, flexibility. It's the most important product features you have.

Platform work is also the most important retention tool for your engineers. Give them the tools and architecture to be productive. And if you don't, they will leave to a team that will.

A way of visualizing your r&d investments is with 3 buckets. Having the right mix is critical. They work together. A healthy investment distribution is 50% platform, 40% features, and 10% experiments. You can skew for short periods, but over the long term its fatal.

![3_1470894724865085440](chapter2-assets/exp-fea-plat.png)

The feedback loop between investment types is critical. Feature and experiments inform your platform roadmap, and inversely platform provides leverage to build more features/experiments. If not balanced, you loose these feedback loops. And the feedback loops guide you.

The long term velocity of your entire team is anchored in how well you balance these investments over years. Each type of investment plays an important role. You can ship a lot of experiments and it's the volume that matters and the immediate learnings and impact.

For features, you're a little more deliberate. They make take a few weeks or months to ship and you expect them to delight your customers. Platform features takes months and years to ship. But their impact is felt over a longer term. They provide leverage. When you combine these different types of investments, a simplified view of your velocity is as follows:

![1_1470894724865085440](chapter2-assets/rnd-velocity.png)

Platform work isn't all roses. You can burn A TON of money with wasted platform work. It’s a huge trap and the larger a company gets the more of a trap it becomes. Golden Rule of platforms...platforms are extracted from product / feature / experiences.

You can’t build platform hoping “they will come”. Break this rule and you’ll waste millions in APIs that no one needs or uses.

⭐️ Duplication is better than the wrong abstraction

The most common platform debt domain are data models that become bloated and hard for devs to grok. God objects, mutations and side effects everywhere. Keep your domain model up to date with your current understanding of the domain. Not that of your past understanding.

The other common low investment is in test suites and automation around development env setup. I've met teams where it takes 2 days to setup a basic dev env. This is a tax on every developer you've hired (oh, did I say that they will leave because of this).

Because your platform supports your most important product features you need data about them. Your CFO will publish detailed financials, you have to track detailed data about speed, scale, uptime ...most engineering teams don't track as well as your finance team does.

Platform work has longer timelines. It's longer to build a subway, then to add a new floor on an existing building. Make sure you celebrate platform work in progress 🎉.

Have milestones (ideally in prod), don't wait for it to ship fully. Build endurance for longer work... Unfortunately, many companies celebrate features more than they do platform.

Most PMs will be closer to the features and are generally more outgoing! The engineers are heads-down just trying to make things work :) Work with your PMs so that they see the platform work.

Platform work has an interesting attribute in that the side effects of low investment mean you'll get slower slowly. It doesn't happen over night.

So you can ignore it for a bit. Then a bit more..and... bam💥. You're asking, why do I have to invest in platform work again?

Building software is hard, there's no silver bullet. But have a strategy around what you're building and what role it plays short and long term. Build a tech investment system that reinforces itself. That's why I suggest you spend 50% of your r&d budget on your platform.
