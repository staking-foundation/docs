---
title: Stakers & Operators
description: Diva provides Liquid Staking and allows Operators to run validators to earn additional staking rewards
---


# Stakers & Operators

:::tip
The Diva Staking Smart Contract acts as a bridging mechanism. It deposits ETH into Ethereum [Consensus Layer validators](glossary#validator) while returning a [divETH receipt](lst) that can be used to later withdraw those ETH plus any staking rewards it might have generated.

:::


## Liquid Stakers (or "Stakers")

**Liquid Stakers deposit ETH to obtain divETH** which automatically generates [ETH Staking Rewards](staking-rewards) (if any).

Anyone can become a Liquid Staker with no minimum ETH requirement. Stakers depositing ETH to the Diva Smart Contract can instantly receive a transferable receipt token called divETH representing their staked ETH + any [staking rewards](staking-rewards) it generates.

Diva's staking is "liquid" because Stakers receive liquid divETH *if they want to*, meaning it is immediately transferable or tradable, as opposed to being locked.

Wallets holding divETH will see their balances update daily to reflect its Staking Rewards (or penalties, if any). This is accomplished via a [rebasing mechanism](lst).

The divETH token can:

- Be redeemed for ETH at any time by requesting a withdrawal from the Diva Staking Smart Contract.
- Be used in the DeFi ecosystem for lending, bridging, etc.

It is a standard ERC20 which enables composability with most DeFi apps. If needed, [divETH can be wrapped into wdivETH](lst), the static balance receipt token.

<div style={{textAlign: 'center'}}>

![stake](img/stakers-and-operators.png)
</div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/OBgAyhqck38?si=_bSB87ow9Uc8KYCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



## Operators

**Operators running Diva nodes can lock ETHs or divETHs as [collateral](glossary#collateral).** Operators performing their validation duties correctly will receive [divETHs or ETHs as Operator Rewards, in addition to ETHs or divETH's own Staking Rewards](economics).

To incentivize good behavior, an Operator misbehaving or missing their validation duties might suffer penalties on their locked ETH or divETH.

Operators can only receive [Key Shares](glossary#key-share) once they provide enough [ETH or divETH collateral](glossary#collateral) to the Diva Smart Contracts. Should an Operator causes any losses, this collateral can be transferred to Stakers to compensate them:

- Liquid Stakers receive [Staking Rewards](staking-rewards) protected by Operator collateral.
- Operators receive the base [Staking Rewards](staking-rewards) for their ETH or divETH collateral + [Operator Rewards](economics).

The more ETH or divETH an Operator locks, the more Key Shares they may receive, increasing their ability to generate rewards.

### Non-custodial validation

Unlike other solutions, Operators are completely non-custodial. They never have access to the funds or private key of the [validators](glossary#validator).

The Diva Smart Contract acts as a bridge, depositing ETH into the Ethereum [Consensus Layer](glossary#) where they are used to set up validators.

Each 32Ξ Ethereum validator is operated by 16 Diva [Key Shares](glossary#key-share), which are distributed to different Operators who have posted enough [collateral](glossary#collateral).

When a validator needs to sign its validation duties, at least 2/3rds of its Key Shares need to come to consensus on what to sign in order to perform any action.

This 66% consensus is the key to [Diva's own DVT](dvt), making the system more reliable and safe. Diva Staking creates keys using Distributed Key Generation (DKG) to sign duties using “Boneh–Lynn–Shacham” BLS threshold signatures.

<div style={{textAlign: 'center'}}>

![DVT architecture](img/dvt-2.png)
</div>


### Diva vs Ethereum staking

Diva acts as an extension of Ethereum staking, providing additional functionalities without compromising on decentralization:

- On Ethereum, stakers lock 32Ξ to create a validator, and must run a node to operate it.
- With Diva,
  - Liquid Stakers can deposit **any amount of ETH** and **receive liquid divETH** and generate [Staking Rewards](staking-rewards). No node running required!
  - Operators can further engage by **locking ETH or divETH** and **[operating a node](operators)** to generate additional [Operator Rewards](economics).

Running a Diva node is [generally preferable to running solo validator](solo-staking) on Ethereum with 32Ξ, and requires only 1Ξ.

[Staking Rewards are aggregated from the entire network](staking-rewards) (EL + CL + MEV), making them smoother and more predictable.

**With Diva, operators can run nodes without advanced skills, greater flexibility, and from only 1Ξ.**

