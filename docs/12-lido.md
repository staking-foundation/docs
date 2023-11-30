---
title: Diva vs Lido
description: The main difference between Diva and Lido is that Diva doesn't require any trust in Operators, thanks to trustless cryptographic mechanisms.
---

# Diva vs Lido

Both Diva and Lido are Liquid Staking solutions, allowing stakers to easily stake their ETH and use it in Defi.

The main difference is in their security and trust components:

- Lido relies on trusting their 30 Node Operators (Proof of Authority).
- Diva has on-chain protections that don't require trusting any centralized party (Collateralized Proof of Stake).

## Lido is based on trust and reputation

Lido is operated by a whitelisted set of ~30 Node Operators, which are permissioned and uncollateralized. This is commonly referred to as "Proof of Authority".

<div style={{textAlign: 'center'}}>

![full-width](img/Lido-comp.png)
</div>

Each of these Node Operators is handling approximately 1% of all staked ETH, representing hundreds of millions of dollars of responsibility per Operator, without posting any ETH collateral guarantees.

**This means that there is no direct guarantee that staker funds will be fully protected from loss of funds**.

While Lido has been operating safely in a completely uncollateralized way, their model is fully reliant on the reputation and performance of their operators. If their operators suffer from hacks, censorship or law enforcement actions (like the recent actions against Coinbase, Kraken, and Binance), staker funds could suffer losses.

## Diva is based on cryptography and incentives

Diva's DVT system provides novel risk mitigation mechanisms, thanks to its fault tolerance and consensus mechanisms preventing single Operators from causing damages.

This has been designed to mirror Ethereum's rock-solid Proof of Stake mechanisms.

**🏦 Economic protection: Diva Operators are [collateralized](glossary#collateral)**, providing skin-in-the-game and economic guarantees for Stakers against any potential losses.

**💬 Censorship protection: Diva Operators are permissionless**, potentially being run by thousands of independent entities with diverse setups and geographies.

**🔐 Hack protection: Diva Operators don't have access to validator keys**, so even if they're hacked, they can't unilaterally cause damage to the protocol.

**🛡️ Takeover protection: Diva isn't run by any single entity**. Diva is a decentralized platform in which decision making power is held its participants, including Stakers and Operators.
