---
title: Stakers & Operators
description: Diva connects Stakers & Operators in a network that aligns their incentives.
---


# Stakers & Operators

Diva stakes all ETH from Stakers and Operators to generate staking rewards, which are distributed according to the contributions of each party.

## Stakers

Stakers deposit ETH to obtain divETH, which automatically accrues staking rewards.

Anyone can become a Staker with no minimum ETH requirement. Stakers depositing ETH to the Diva smart contract will instantly receive tradable receipt token called divETH 1:1 representing their reward-accruing deposit.

Stakers will usually see their divETH balance increase daily as it generates staking rewards. divETH uses a [rebasing mechanism](04-lsd.md) that updates its balance in the user wallet automatically to reflect the accrued rewards. 1 divETH can be redeemed for 1 ETH at any time by requesting a withdrawal from the Diva Smart Contract.

Stakers can use their divETH in the DeFi ecosystem as a liquid staking token. divETH accrues staking rewards daily.


<div style={{textAlign: 'center'}}>

![stake](img/stakers-and-operators.png)
</div>


## Operators

Operators run Diva nodes to secure Ethereum and generate divETH rewards.

Unlike other solutions, Operators are completely non-custodial. They never have access to the funds or private key of the validators.

Instead, 2/3rds of Operators need to come to consensus on what to sign in order to approve any action affecting a Diva validator.

This is done by giving each signer one key-share out of many, making the system more reliable and safe. This uses Diva's unique DVT, which creates validators through Distributed Key Generation (DKG) to sign duties using “Boneh–Lynn–Shacham” BLS threshold signatures.

Operators can only be assigned to operate validators if they are providing sufficient ETH as a bond. This bond serves as a guarantee to align incentives with Stakers. Should an Operator miss any validation duties, this bond can be transferred to Stakers as compensation for any potential losses.

An Operator performing their validation duties correctly will receive a percentage of staking rewards.

While Stakers receive the staking yield, Operators receive a base staking yield for their ETH bond + a potential distribution from passive Stakers.

This is expected to have better rewards than a Diva Staker, because the protocol rewards the additional risk and work carried by Operators.

Running a Diva node is also expected to be preferable to running solo validator on Ethereum with 32 ETH, because:

- Operator rewards are averaged from the entire network, making them smoother and more predictable.
- Validation is performed by a consensus of diverse Operators, offering better uptime and protection against slashing events.

**With Diva, operators can run their DVTs without advanced server management skills, greater flexibility, and starting from only 0.5 ETH as a bond.**

