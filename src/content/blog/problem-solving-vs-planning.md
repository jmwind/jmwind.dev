---
publishDate: 2023-01-08T00:00:00Z
title: Problem solving vs problem planning
description: Planning is important, but most planning is wasted time. Focus on building a problem solving culture and not a problem planning one.
---

There are a million details that impact how well a company can take an idea and get it into a product. We've all memorized the old saying that building anything is 1% inspiration and 99% persperation. When I start working with a new company, digging into the "how do you ship" is the best way to get to know the team.

The slide below was part of a deck that was shared with me explaining the "how they ship" question. It was slide 2 of 30, and at the time the team thought it was the LEAST important slide in the deck. It explained how product and engineering worked together and how they plan and prioritize work.

![](/images/problem-solving-vs-planning/product-eng.jpeg)

I interrupted them... "can we go back?" then quietly "that is what is killing you from the inside, it's why you're slowing down".

They looked dumbfounded. They wanted to get to the other slides. We stayed on this slide for 2 hours... thought I'd share why.

The advice in that slide is spread all over the internet. Two groups of people (product and engineering) want a nice clean API about who does what. But it's like being in a marriage and thinking that you'll each clean your side of the bedroom only and then cook half of each meal.

The culture you'll build following that slide is one that will plan to reduce risk vs build to reduce risk. Then you'll plan more and more. Specifically, it's bad advice because:

- All the risk shipping is in the what/how/who. Yet those get the least attention up front
- 50% of your roadmap is the what/how owned by engineers. Your architecture is your strategy
- An entire org planning why/when wasting a huge amount of time of the builders

Instead, we discussed changing as follows:

- Focus on the what/how/who upfront. Include engineers and product from day 1. Build to learn, realize that a big part of your strategy is how it's built, both technically and the UX, onboarding, etc...
- Cancel 50% of the why/when planning that you're doing right now.
- Assign an engineer as PM of the platform and 50% of your roadmap: scale, perf, ext, domain model, api, etc... These are customer features, not tech debt. Have a roadmap for the work.

I realize we can't completely ignore the "when" something will ship. One suggestion is to constrain the types of "when" decisions you have to make based on the type of work. Create 3 buckets of "when":

- Ships in weeks => experiments
- Ships in a few months => features
- Ships in a year => platform/infrastructure

And voila, you'll have a rough idea of "when" and you don't need to waste time planning to a finer grain. Ensure you have one accountable person full-time on each big area. If you can't, don't start it.

When you over-plan for years, the ratio of non-builders to builders grows, more planning will happen. More distractions. Less building.

Have a vision for your area, the chess moves and their reasoning are important. But that's usually a 1-2 page doc that changes twice a year as you start shipping it.

Focus on building a problem solving culture and not a problem planning one.
