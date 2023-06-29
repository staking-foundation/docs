
# Glossary

This glossary has been made with the official [Ethereum glossary](https://ethereum.org/en/glossary) in mind. The goal is to extend the current Ethereum glossary avoiding collision with existing terms.

### Pool

Collection of nodes that work together signing messages. A pools is perceived by the network as a single validator.

### Validator

A software in a [proof-of-stake](https://ethereum.org/en/glossary/#pos) system responsible for storing data, processing transactions, and adding new blocks to the blockchain. A validator client is required in order to run a Diva node.

### Beacon Chain

The Beacon Chain was the blockchain that introduced [proof-of-stake](https://github.com/ethereum/ethereum-org-website/blob/dev/src/content/glossary/index.md#pos) and [validators](https://github.com/ethereum/ethereum-org-website/blob/dev/src/content/glossary/index.md#validator) to Ethereum. It ran alongside the proof-of-work Ethereum Mainnet from December 2020 until the two chains were merged in September 2022 to form the Ethereum of today.

It should not be used since it does not exists anymore.

### Block proposer

The specific validator chosen to create a block in a particular [slot](https://ethereum.org/en/glossary/#slot).

### Bootnode

The nodes which can be used to initiate the discovery process when running a node. The endpoints of these nodes are recorded in the Ethereum source code.

### Diva node

A "node" is any instance of Diva client software that is connected to other computers also running Diva software, forming a network. A Diva client is an implementation of Diva that verifies data against the protocol rules and keeps the network secure. Currently, only one implementation exists, which is the "official" Diva implementation written in Go.

### Collateral or Bond

Diva Operators post some amount of ETH as collateral (also called Bond) to guarantee that they will operate correctly. The required ETH collateral scales with the number of key shares an Operator is running.


### Consensus client

Consensus clients (such as Prysm, Teku, Nimbus, Lighthouse, Lodestar) run Ethereum's [proof-of-stake](https://ethereum.org/en/glossary/#pos) consensus algorithm allowing the network to reach agreement about the head of the chain. Consensus clients do not participate in validating/broadcasting transactions or executing state transitions. This is done by [execution clients](https://ethereum.org/en/glossary/#execution-client).

### Consensus layer

Ethereum's consensus layer is the network of [consensus clients](https://ethereum.org/en/glossary/#consensus-client).

### Execution client

Execution clients (formerly known as "Eth1 clients"), such as Besu, Erigon, Go-Ethereum (Geth), Nethermind, are tasked with processing and broadcasting transactions and managing Ethereum's state. They run the computations for each transaction using the [Ethereum Virtual Machine](https://ethereum.org/en/glossary/#evm) to ensure that the rules of the protocol are followed.

### Execution layer

Ethereum's execution layer is the network of [execution clients](https://ethereum.org/en/glossary/#execution-client).

### Liquid Staking Token (LST)

divETH is a Liquid Staking Token, because it allows users to deposit ETH to stake it with Diva while receiving an equal amount of divETH tokens which are liquid and tradable immediately. 