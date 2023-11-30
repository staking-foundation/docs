---
title: Running a Diva Operator
description: Diva Operators power Diva Staking. Operators lock divETH and run nodes to generate operator rewards in addition to their staking rewards.
---

:::info
Diva Operator testnet is now live! Keep reading to set up your first node.
:::

# Running a Diva Operator node

A node operator on the Ethereum network plays a crucial role in maintaining the network's security and stability. Each node stores a copy of the blockchain ledger, validates transactions, and participates in the consensus process, ensuring only legitimate transactions are added to the blockchain.

**A Diva Operator node is an extension of an Ethereum node,** aiming to perform validation duties more efficiently:

- It connects to Ethereum by using existing Execution, Consensus, Validation and MEV-boost clients.
- It coordinates with other Diva nodes via a P2P network to generate and manage key shares using MPC DKG.
- It fulfils validation duties in coordination with other Diva clients using [Diva's DVT](dvt).


**The Diva Smart contract wraps the Ethereum PoS deposit contract**, extending its functionalities to:

- Allowing ETH deposits of any amount and minting [liquid divETH](lst).
- Handling the creation of [Ethereum validators](glossary#validator) and withdrawals of their ETH.
- Updating divETH balances to reflect any generated [Staking Rewards](staking-rewards).
- Keeping a registry of Diva Operators and validators.
- Managing [Operator Collateral](glossary#collateral) & [Operator Rewards](economics) balances.

Diva Operators are responsible for maintaining their node's hardware and software updates, monitoring their performance and security.

Operators are essential to the effective functioning of both the Ethereum and Diva networks, and they are rewarded for their contribution with staking rewards. [Learn more about staking with Ethereum vs with Diva](solo-staking).


<div style={{textAlign: 'center'}}>

![half-size](img/how-to-run-node.png)
</div>

