---
title: Stakers & Operators
description: Diva connects Stakers & Operators in a network that aligns their incentives.
---


# Stakers & Operators

:::tip
Diva stakes all ETH from Stakers and Operators to generate staking rewards, which are distributed according to the contributions of each party.
:::


## Liquid Stakers

**Stakers deposit ETH to obtain divETH** which automatically accrues Ethereum staking rewards.

Anyone can become a Staker with no minimum ETH requirement. Stakers depositing ETH to the Diva smart contract will instantly receive a tradable receipt token called divETH 1:1 representing their reward-accruing deposit.

Diva's staking is "liquid" because Stakers receive liquid divETH, meaning it is immediately transferable or tradable, as opposed to being locked.

Stakers will usually see their divETH balance increase daily as it generates staking rewards. divETH uses a [rebasing mechanism](lst) that updates its balance in the user wallet automatically to reflect the accrued rewards. 1 divETH can be redeemed for 1 ETH at any time by requesting a withdrawal from the Diva Smart Contract.

Stakers can use their divETH in the DeFi ecosystem as a Liquid Staking Token (LST). divETH accrues staking rewards daily.


<div style={{textAlign: 'center'}}>

![stake](img/stakers-and-operators.png)
</div>


## Operators

**Operators run Diva nodes and lock some divETH as collateral** to secure Ethereum and generate divETH rewards.

An Operator performing their validation duties correctly will receive a share of staking rewards.

Conversely, an Operator missing their validation duties might cause will result in a loss of funds.

To prevent losses, Operators can only be assigned validation key-shares once they provide enough divETH collateral to the Diva Smart Contracts. Should an Operator miss any validation duties, this collateral can be transferred to Stakers to compensate for potential losses:

- Stakers receive <u>staking rewards guaranteed by Operator collateral</u>.
- Operators receive the <u>base staking divETH rewards</u> + <u>additional rewards for each key-share they operate</u>.

The more divETH an Operator locks, the more key-shares they may receive, increasing their ability to generate rewards.

### Non-custodial validation

Unlike other solutions, Operators are completely non-custodial. They never have access to the funds or private key of the validators.

Instead, each 32Ξ Ethereum validator is operated by 16 Diva key-shares. At least 2/3rds of key-shares need to come to consensus on what to sign in order to approve any action affecting a Diva validator.

This is done by giving different Operators 1 key-share out of 16, making the system more reliable and safe. This uses Diva's own DVT, which creates keys using Distributed Key Generation (DKG) to sign duties using “Boneh–Lynn–Shacham” BLS threshold signatures.

### Diva vs Ethereum staking

Running a Diva node is [generally preferable to running solo validator](solo-staking) on Ethereum with 32Ξ, thanks to:

- 🌳 **Up to 500x better uptime**: Multiple nodes can go offline without bringing the network down.
- 👍 **Simpler operations**: The Diva client manages keys automatically, reducing the workload.
- 👨‍👩‍👧‍👦 **More accessible**: Operators can participate in validation from only 1Ξ, vs Ethereum's 32Ξ requirement.

Operator rewards are averaged from the entire network (EL + CL + MEV), making them smoother and more predictable.

**With Diva, operators can run nodes without advanced skills, greater flexibility, and from only 1 ETH.**

