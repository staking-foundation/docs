# Components



## Node

 The node works along Ethereum Execution and Consensus clients to support the diva infrastructure for the distributed validator to work. The nodes can maintain different key-shares that represent a share in different distributed validator. Thanks to nodes, Diva creates a network that support the distributed validator. Nodes client as all Diva software is open source. It is delivered in several ways. As code, as docker image and as Dappnode package. A diva node enable operators to seamlessly:

- Register as operator in Diva smart contracts.
- Sync the Consensus and execution clients and get them ready.
- Add key-shares by depositing 1 ETH each to be part of many distributed-validators.
- Perform the different duties for Diva and therefore for Ethereum.

## Diva P2P

Diva creates a P2P network between nodes for discovering purposes. This way Diva is decentralized and censorship-resistant. Also, the P2P network allows the DKG to be performed fully decentralized.

## Diva DAO

Diva is governed by its community that is organized by the Diva DAO. Members of the Diva DAO hold DIVA tokens. Diva DAO has the following responsibilities:

- Raise and support governance proposals.
- Allocate ETH rewards and DIVA incentives.
- Set protocol parameters.
- Maintain the approved relayers for MEV-boost.


## Smart Contracts


The Smart Contract governs the economic incentives between all parties: reward distributions, incentives and penalties all have an impact, and can be partially adjusted by the DAO.

The Diva Smart Contract allows Stakers to deposit ETH and receive yield-accruing divETH 1:1. They also are useful for operators to register and deposit ETH for their new key-shares for them to participate in different distributed validators.

Whenever the Diva Smart Contract has a balance of 32 ETH, it coordinates with registered Nodes to generate a new Ethereum validator, and is able to request validator withdrawals.

Diva smart contracts are non-upgradeable. This is one of the features that allow the protocol to be more predictable and trustless. If an issue manifests within a smart contract, a protection mechanism is in place to avoid any mayor leak of the funds.

As any other validator, distributed validators need to perform the Ethereum duties. The Diva Smart Contract handles staking reward distributions to Operators, Stakers and the DAO based on the daily rewards. A poor performance from Operators will result in penalties applied towards their ETH balances, which includes the Operator's bond.

Diva's smart contracts are released open-source for full transparency.

## Oracle

The Ethereum blockchain is running in two separate chains: the execution layer and the consensus layer. The execution layer is where the blocks and transaction and smart contracts sit, while consensus layer is where the validation and consensus information takes place.

At the time of this writing, this two-layer separation makes it impossible for the Diva Smart Contract to access to the state of a validator. The Diva smart contract has no direct way to check how one its validators have been performing without checking the consensus layer.

The proposed EIP-4788 will solve this problem, by making it possible to communicate both layers.

However, until EIP-4788 is available, a less ideal solution is available by using oracles. Chainlink has been selected as an interim solution, given that it is the most decentralized and safe alternative at the moment.