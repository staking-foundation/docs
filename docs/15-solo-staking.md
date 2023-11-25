---
title: Diva vs Ethereum Staking
description: Diva extends Ethereum staking to provide Liquid Staking and better conditions to Operators
---

# Diva vs Solo Staking

Both Diva and Solo Staking are highly decentralized ways to secure Ethereum while getting staking rewards.

## Solo staking is the base layer

Solo staking is the original implementation of Ethereum's Proof of Stake, the way its developers designed it.

As a primitive, it is the most "bare metal" and pure way of staking, and all other staking systems are built on top of it.

It requires you to stake [32 ETH per validator](glossary#validator), being quite rigid about the amounts for technical reasons.

In order to solo stake, you need to set up your own machine, but thanks to it, it is the most decentralized and resilient option as it has the lowest number of dependencies.

Ethereum is lucky to have a vibrant community of solo stakers, [estimated to be around 6% of the network](https://blog.rated.network/blog/solo-stakers).

In an ideal world, more stakers would run their own machines, but because of the way the Ethereum protocol is designed, the requirements can be prohibitive for most:

- 32 ETH is a very high amount for most people, especially in lower income regions
- Not everybody has the technical skills to solo stake
- The penalties for solo stakers can be discouraging

On the reward side, solo staking can also be unappealing for two reasons:

- **Your staked ETH is illiquid**, which means there is an opportunity cost compared to Liquid Staking.
- **Rewards are highly variable**, with large blocks rewards happening only once every few weeks or months.


## 🌱 Diva extends Ethereum staking

Diva was designed by asking "how could Ethereum staking work if we could redesign it from scratch?".

Diva maintains most the decentralization advantages of solo staking on Ethereum, as every Operator needs to run their own full Ethereum node.

**The Diva Smart Contract acts as a wrapper of the Ethereum deposit contract**, allowing:

- Liquid Stakers to deposit their ETH into [Ethereum validators](glossary#validator), obtaining [liquid divETH](lst) which generates [Staking Rewards](staking-rewards).
- Operators to run nodes to perform validation duties, locking [divETH collateral](glossary#collateral) to generate base Staking Rewards plus additional [Operator Rewards](economics).


|     | Ethereum  staking | Diva Staking
| --- | ---               | ---
| Collateral | 32Ξ per validator | 1 (div)ETH or less per key share
| Mapping | 1 key per validator | 16 distributed key shares per validator
| Keys to sign | 1 (100%) | 11/16 (66%)
| APR | Staking rewards | Staking + Operator rewards
| Liquid staking | No | Yes
| Key generation | Simple | Multi-party computation distributed key generation (MPC DKG)
| Offline penalties | Up to 16Ξ loss (1-2Ξ per year) | No loss if <33% of nodes are offline
| Downtime (mean) | 0.4% (all validators) | ~0.01% thanks to DVT redundancy
| Slashing risks | Any 1 node can slash | Requires an attack or bug of >66% of nodes
| MEV stealing | Possible | >66% of nodes needed to steal
| Infrastructure | Execution Client + Consensus Client | Diva Client connecting to an Ethereum node | Rocketpool Client connecting to an Ethereum node |
| Keys | Manual key generation | Automatic key management
| Client config | More “bare metal” | Easy Docker package, web UI


## Design Principles

**Validator Design**
- Nodes designed to be fully disposable
- [Reduce missed attestations 500x](dvt#key-features)

**Incentives and penalties**
- [Socialized smooth rewards](staking-rewards)
- Quick ejection to bad actors

**Trust-minimized crypto security**
- "Can't be evil" system
- [Collateral guarantees](glossary#collateral)

**Using Diva improves the lives of Liquid Stakers and Operators**:

- Liquid Stakers can stake ETH through Diva without the need to run their own hardware.
- Anyone can be an Operator from only 1 ETH and generate higher rewards than solo staking.
- Rewards for everyone are predictable and smooth, as they are averaged for the entire network.

**Diva extends Ethereum validation with a [greatly simplified client](operators)** which handles all validation duties transparently. As an Operator, you don't need to handle validator keys, withdrawals, etc, as it's all handled by the Diva client.

The Diva client works a lot like Bittorrent: it connects to other clients via its P2P network, streaming validation duties automatically the way Bittorrent streams files.

Diva's DVT also means that Operators can go offline and are better protected against penalties, offering more flexibility and peace of mind than solo staking.

