---
publishDate: 2023-01-08T00:00:00Z
title: Going fast slowly
description: Autonomy is great. But as you scale, the speed impact of only investing in getting fast fast will in fact slow you to a crawl.
nextpost: problem-solving-vs-planning
image: ~/assets/images/autonomy-cohesiveness-chart.png
---

Andy Jassy, the CEO of Amazon, was on the cover of Time magazine in 2022. He talks about Amazon staying fast and how autonomy has been their most important tool.

Amazon has been obsessed with staying fast for decades: they invented the 2-pizza team and teams that only talk via APIs.

Autonomy is an intuitively "no shit" obvious way of getting fast.
Reduce the collaboration friction between teams...and bingo!
The same week that you tell two people that they don't have to work together, they immediately get faster fast.

![3](/images/fast-slowly/collab-friction.png)

Autonomy is great. But as you scale, the speed impact of only investing in getting fast fast will in fact slow you to a crawl.
It's like eating a snickers bar mid-afternoon. The sugar rush is nice, but it doesn't last long.

What Jassy fails to mention is that they also invested massively in getting fast slowly by reducing the amount of med/low value repeated decisions in their teams.
One is called AWS, it was built for themselves first. And took years to build. The other are leadership principles. Teams don’t have their own, they share them.

Building shared standards and platforms to reduce decision friction is how you go fast slowly.
The faster you get longer term, the more likely that removing small decisions compounded to make it happen over time.

![4](/images/fast-slowly/decision-friction.png)

When you were a small team you didn't have decision friction. You had limited decisions to make and those you did make applied to everyone uniformly.
So it's not something you prepared for until it hits you.

Reducing “decision duplication” is where I see most companies struggle because it means they have to make imperfect decisions that impact a lot of people.
It's hard, painful. And they avoid it.

You avoid it because your company is full of smart and opinionated experts who all have their pet processes, tools, and approaches.
Using the autonomy card is easy as it avoids conflict.
Building shared processes/tools/tech is running towards conflict and many imperfect and hard decisions.

Once your company gets to a certain size the benefits you can obtain by investing in making all your teams slightly more productive with a 85% good tool/process start to swamp the slight gains that several different teams might get from going fully autonomous and doing things their own way with a 95% tool/process.

It's much faster long term to be an expert with a small set of good shared tools/approaches and get the speed benefit of being an expert and not having all teams having to make that repeated decision.
There are so many small/med decisions being made over and over that aren’t key to your business or need re-invention. Below is how the tension between autonomy and cohesiveness work together to give you long term sustained speed, slowly.

![1](/images/fast-slowly/autonomy-cohesiveness-chart.png)

## Speed Roadmap

Let's make this more concrete and run an exercise called the “Company Speed Roadmap”. It helps you take a step back and look at what you can invest in to go fast fast and fast slowly.

Start by writing down the last 7-10 initiatives that have either shipped or are shipping in your team or company.
Accessing speed has to be done at the project/initiative level as it’s where value is created. It’s a forcing function for looking at the entire system of how teams create outcomes.

![5](/images/fast-slowly/speed-roadmap.png)

For each initiative write down what impacted its speed and why. Then write down what you could have done quickly or slowly to fix.
We've found it helpful to access projects from different perspectives so that you get the full picture.

These categories can help you look at your projects from different points of view as each has an impact on speed and each has fixes that are short term and long term:

- Leadership
- Aiming
- Staffing
- Difficulty
- Quality

#### Leadership

Did you have a strong/full time leader? Did the senior team ensure timely decisions on product/scope/tech? Did the leaders know how to unblock decisions? Was the leader(s) full time on this initiative or balancing many others?

#### Aiming

Did the team take the initiative in the right direction? How long did it take to find the direction? Was scope well defined or took too long to settle on? Did they aim ambitiously enough?

#### Staffing

Did you have the right mix and amount of people at the right time (too little too late, or too many too early)? Was there an expertise that was missing that caused slow down or quality issues? Did the team work well together? Where did the team spend the most time?

#### Difficulty

Was this harder to implement than expected? Where did the code go? Did it require new primitives, complex areas of the code, cross-cutting changes across the product? Did the team have to build a lot of scaffolding, infrastructure and tools as part of this project?

#### Quality

Once the team built the right thing, was it high or low quality (UX, resiliency, speed, scale)? What impacted the quality of the output the most?

When I run this exercise with teams, I suggest they make as many fast fixes as they do slow fixes. The goal is two-fold: make the hard decisions that impact speed today, and ensure you invest in the long term slow fixes as well.
It also has a hidden benefit of aligning a team on their “speed” expectations.

Below are some examples of common speed issues with suggestions for fast and slow fixes. There's no right answer in terms of favouring the fast or slow fix, but what's needed is a decision to do something about them instead of praying that they resolve themselves.

**Leadership**: You didn't have a leader with enough context and decisions were slow.

- _Fast Fix_: Move someone from another team to take the role. Requires tradeoff and prioritization that is hard.
- _Slow Fix_: Leadership development programs are lacking, there is no paired leadership culture, onboarding for leaders is missing.

**Difficulty**: The amount of changes required across the code base was a surprise and took a lot longer than expected.

- _Fast Fix_: Create your own service/system and duplicate code
- _Slow Fix_: Prototype at the start of the project and help inform scope of project or gaps in architecture that may need more people or different sequencing of work.

**Staffing**: We had the right people but they weren't familiar with the tech stack and tools for this area.

- _Fast fix_: Stop or slow down other projects and move the right skill to the right projects.
- _Slow Fix_: Standardize the dev envs & tools across teams to make it easier to move people between areas. Invest in hack-a-thons for developers to work in other areas of the code base more regularly.

After the exercise you'll have a great insight as a team into how you see speed and the tools you can use to address today and into the future. Think of this as your "speed" roadmap.
But some of the slowest engineering teams I've met have decided to let teams do their thing and recovery takes years.

## Engineering platfrom cohesiveness

Cohesiveness is hard, culturally because of strongly held opinions of a few people on your team. It’s also hard because in some cases you also have to decide what to leave up to the teams and not standardized. But teams who do this hard work will benefit.

Some engineers get their self-worth with the tech/process they know, and when they join your company they want to use that tech/process. They are often loud.
It takes a strong culture to rejig that tech self-worth dependence.

And it doesn't help that there's amnesia in the tech world that the productivity speed we got with the internet was thanks to imperfect technical standards that got adopted at scale (ip, udp, dns, http, etc...).

Like the internet protocols, I recommend engineering orgs standardize big parts of how they work. Cohesion powers more autonomy of the work that matters.
Here are some ideas on where you should be making decisions on standards to go fast over the long term. You won't get it perfect. But that's not the point.

![5](/images/fast-slowly/eng-cohesiveness-areas.png)

You’ll have engineers quit over some of the decisions you make with your team for the long term.
With the breadth of engineering cohesion areas, there are a lot of opinions about each area.

For another great perspective on the value of cohesion in engineering teams read [Let a 1,000 flowers bloom. Then rip 999 of them out by the roots](https://gigamonkeys.com/flowers/) from @peterseibel about the tradeoff and experience with a company that ignored cohesion and had to adjust abruptly after too many years. It's one
of my favourite essays of all time.

Autonomy and cohesion work together. Autonomy is a cohesiveness test as there will be things you decide to standardize that rust and need replacing or removing. Do this regularly and don’t get too attached.
We’ve all been stuck with that stupid “old process that doens’t work” or tool
Autonomy is a great tool for exploring and testing new ideas quickly.

You get speed by consistently working on autonomy and cohesiveness initiatives.
When you start to slow down because of too much autonomy is when you start getting the benefits of cohesion investments. Teams I work with that do both well are 1.5-2x faster than others that don’t.
