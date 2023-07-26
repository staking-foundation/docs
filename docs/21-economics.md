---
title: Operator economics
description: Diva Operators earn both Staking Rewards as well as Operator Rewards by running nodes and providing collateral
---

# Diva Operator economics

What makes Diva unique is that all ETH deposits are staked and operated by permissiones & trustless Operators.

This happens in several steps, as illustrated below:

1. Liquid Stakers deposit ETH to diva's Smart Contract and receive [liquid divETH](lst), which accrues Staking Rewards.
2. ETH deposits are bridged to the Ethereum Beacon Chain in increments of 32 ETH to create Ethereum validators.
3. Each 32 ETH validator is operated by 16 key shares, which together form a [distributed validator key](dvt).
4. Operators can **lock divETH collateral** to **run a diva node** and **operate key shares** to generate additional Operator Rewards.

Diva's distribution of key shares means there are 16x more Operators participating in Ethereum's attestations and block production, contributing to the network's decentralization. Anyone can participate from only 1 ETH!

<div style={{textAlign: 'center'}}>

![DVT architecture](img/architecture.jpg)
</div>

## Diva's trust-minimized security model

Staking provided by [centralized exchanges](exchanges) or protocols like [Lido](lido) require you to trust the entities staking your ETH. If they fail or are shut down, your ETH can ultimately be affected in unpredictable ways.

**Diva is designed to be unstoppable**, just like Ethereum's Proof of Stake. It runs using on-chain software, so you can trust cryptography and not humans.

Unlike other solutions, *anyone* can run a Diva Operator permissionlessly. Liquid Stakers are protected by:

- Cryptography: [Diva's DVT](dvt) distributes duties across the network to ensure there aren't single points of failure.
- Collateral: Operators post divETH collateral to guarantee they fulfil their duties responsibly.

## Operator economics

Diva Operators post divETH collateral as a guarantee. The more divETH they post, the more key shares they can receive.

At this moment, receiving **1 key share requires locking 1 divETH**. Operators posting divETH collateral will enter a queue to receive key shares whenever the network creates new validators. 

Operators receive two potential income streams:

- Staker Rewards: divETH collateral accrues rewards as it would for a Liquid Staker *even while waiting for key shares*.
- Operator Rewards: when correctly operating key shares, Operators generate additional divETH.

This bears some similarities with "re-staking", as it provides divETH holders a way to further engage with Diva to generate additional rewards that can be significantly higher than Ethereum staking alone.

Diva is [still under development](roadmap)! More details on the economic model will be posted as they're developed.