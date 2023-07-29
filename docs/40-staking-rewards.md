---
title: Ethereum staking rewards
description: Understand how Diva generates and distributes Ethereum Staking rewards
---

# Ethereum rewards

### How Diva generates rewards

Diva Staking stakes all ETH deposits into the Ethereum Consensus Layer to generate additional ETH rewards.

**All rewards are aggregated, independently of their sources**. This includes consensus rewards (attestations, block proposals and sync committes) and execution rewards (priority fees and MEV).

**Diva averages the rewards from all its validators**, providing smooth and predictable returns for all participants without segregation.

Penalties may be applied to Operators who don't fulfil their duties to compensate Liquid Stakers and to disincentivize underperformance.

### How rewards are distributed

Diva's Total Rewards are split daily into:

- **Operator Rewards** (10% of the Total Rewards).
- **Staking Rewards**, which go fully to [divETH and wdivETH holders](lst).
- Penalties may be collected from Operators if they fail their duties.
- Important: Diva Staking doesn't charge any kind of protocol fee!

If support for re-staking is introduced, it will come as an additional reward distributed between Staker Rewards and Operator Rewards.

## Ethereum rewards

Diva is simply a tool to enhance Ethereum staking, so understanding how the underlying rewards are generated is important.

### Consensus rewards are predictable

The rewards of the consensus layer are determined by the Ethereum protocol
specifications. They depend on the number of active validators, with rewards going down as more ETH is staked.

There are three kind of consensus rewards:

- Attestations provide small but continuous rewards.
- Block Proposals are larger but more sporadic (every few months).
- Sync Committee are also infrequent and sizeable.

Responding to validation duties in a timely and correct manner increases the rewards, so performance and resilience are important for rewards.

Consensus layer rewards do not depend on network activity, they ensure consensus sustainability by rewarding good players and punishing (slashing) those acting against the consensus’ rules.


### Execution rewards are more variable

Execution rewards are more connected to network activity, with two sources:

- Priority Fees paid by users to process transactions faster.
- MEV Rewards from sophisticated arbitrage opportunities.

Both Priority fees and MEV rewards are highly variable (depending on network activity) and can be very significant.

Ethereum execution rewards can be significantly higher because of the use of MEV. When a validator is proposing a block, it can be done in such a way to maximize the value by creating a customized block.

Diva will be integrating MEV support to improve the overall Staking Rewards.


### What this means for Diva

The smoothing effect of Diva's aggregation of rewards reduces variance and "noise" in the expected rewards, making them smooth and predictable.

1. Liquid Stakers & Operators can expect smooth aggregated rewards.
2. If more ETH is staked overall, staking reward rates might decline.
3. If the Ethereum network becomes more active, staking rewards might increase.

Overall it is possible that factors 2 & 3 balance each other out to provide Ethereum Staking Rewards in the range of 5% APR over the ETH deposits.
‍
‍