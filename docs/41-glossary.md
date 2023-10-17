---
title: Glossary of Diva
description: Full details about the different Diva terms and components
---

# Glossary

This glossary has been made with the official [Ethereum glossary](https://ethereum.org/en/glossary) in mind. The goal is to extend the current Ethereum glossary avoiding collision with existing terms.

### Validator

Validators power Ethereum's [Proof of Stake](https://ethereum.org/en/glossary/#pos) system. They're responsible for for storing data, processing transactions, and adding new blocks to the blockchain.

A validator isn't a physical entity or server. It is a virtual entity in the blockchain, formed by a 32 ETH deposit and the private keys to operate it.

Validators must be operated continuously. When operated correctly, it will generate ETH rewards. If validation duties are missed, part of the 32 ETH can suffer penalties.

A validator client is required in order to run a Diva node. A validator client is software that can manage multiple validators.

The validator lifecycle on Ethereum is:

1. Depositing 32 ETH
2. Entering the activation queue waiting to activated (this can take days or weeks)
3. Active: currently attesting and proposing blocks
4. Exiting: the validator has been flagged for exiting the network, either voluntarily or because they have been ejected.


### Consensus Layer

The Consensus Layer is the former Beacon Chain, now merged with Ethereum.

It is the blockchain that handles Ethereum's [Proof of Stake](https://github.com/ethereum/ethereum-org-website/blob/dev/src/content/glossary/index.md#pos) and [validators](https://github.com/ethereum/ethereum-org-website/blob/dev/src/content/glossary/index.md#validator).

The Consensus Layer is used to lock ETH into [validators](#validator) to perform Ethereum validation duties.

The Beacon Chain originally ran alongside the proof-of-work Ethereum Mainnet from December 2020 until the two chains were merged in September 2022 to form the Ethereum of today.

### Block proposer

The specific validator chosen to create a block in a particular [slot](https://ethereum.org/en/glossary/#slot).

### Bootnode

The nodes which can be used to initiate the discovery process when running a node. The endpoints of these nodes are recorded in the Ethereum source code.

### Diva node

A "node" is any instance of Diva client software that is connected to other computers also running Diva software, forming a network. A Diva client is an implementation of Diva that verifies data against the protocol rules and keeps the network secure.

A [full Diva node](operators) is formed by a Diva client connected to Ethereum [Execution](#execution-client), [Consensus](#consensus-client) and Validator clients.

Currently, only one Diva client implementation exists, which is the canonical Diva implementation written in Go, although Diva is being designed to support multiple client implementations in the future.

### Collateral

Diva Operators post some amount of divETH as Collateral (also called Bond) to guarantee that they will operate correctly.

A certain amount of divETH is required per Key Share. The required divETH collateral scales with the number of Key Shares an Operator is running.

Operators performing their duties correctly will generate [Operator Rewards](economics). If they fail their duties, they can lose part of their Collateral to compensate other participants.


### Consensus client

Consensus clients (such as Prysm, Teku, Nimbus, Lighthouse, Lodestar) run Ethereum's [proof-of-stake](https://ethereum.org/en/glossary/#pos) consensus algorithm allowing the network to reach agreement about the head of the chain. Consensus clients do not participate in validating/broadcasting transactions or executing state transitions. This is done by [execution clients](https://ethereum.org/en/glossary/#execution-client).

Ethereum's Consensus Layer is the network of [consensus clients](https://ethereum.org/en/glossary/#consensus-client).

### Execution client

Execution clients (formerly known as "Eth1 clients"), such as Besu, Erigon, Go-Ethereum (Geth), Nethermind, are tasked with processing and broadcasting transactions and managing Ethereum's state. They run the computations for each transaction using the [Ethereum Virtual Machine](https://ethereum.org/en/glossary/#evm) to ensure that the rules of the protocol are followed.

Ethereum's Execution Layer is the network of [execution clients](https://ethereum.org/en/glossary/#execution-client).

### Key Share

Key Shares are the basic validation unit in Diva. They are generated and custodied by multiple independent [Diva nodes](#diva-node) and are used to operate the network.

Each [Ethereum validator](#validator) created through Diva is managed by 16 Key Shares. 

When 2/3rds of these Key Shares sign together, they form a fully valid signature that can operate the Ethereum validator.

Each Key Share is generated and operated by a separate Diva node to ensure resiliency and decentralization. Each Diva node can hold hundreds or even thousands of Key Shares. Operators must post [divETH Collateral](#collateral) as a guarantee before receiving a Key Share.

### Liquid Staking Token (LST)

divETH is a Liquid Staking Token, because it allows users to deposit ETH to stake it with Diva while receiving an equal amount of divETH tokens which are liquid and tradable immediately. 