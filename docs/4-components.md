# Components



## Node

 The node works along Ethereum Execution and Consensus clients to support the Diva infrastructure for the distributed validator to work. The nodes can maintain different key-shares that represent a share in different distributed validator. Thanks to nodes, Diva creates a network that supports distributed validation. Node's Client, as all Diva software, is being released open sourced, in the most convenient formats such as code, as docker image and as Dappnode package. A Diva Client enables operators to seamlessly:

- Register as operator in Diva smart contracts.
- Sync the Consensus and execution clients and get them ready.
- Add key-shares by depositing 1 ETH each to be part of many distributed-validators.
- Perform the different duties through Diva for Ethereum.

## Diva's P2P Network

Diva creates a P2P network between nodes for discovering purposes. This way Diva is decentralized and censorship-resistant. Also, the P2P network allows the DKG to be performed fully decentralized.


## Smart Contracts


The Diva Smart Contract allows Stakers to deposit ETH and receive yield-accruing divETH 1:1. They also enable operators to register and deposit ETH for their new key-shares allowing them to take their role at different distributed validators.

 Diva Smart Contract (SC) coordinates with registered Nodes to generate a new Ethereum validator on 32ETH batches. Besides, the Diva SC is able to request validator withdrawals.

Diva SCs are non-upgradeable. This is one of the features that allow the protocol to be more predictable. If an issue manifests within a smart contract, a protection mechanism is in place to minimize any prospective impact.

As any other validator, distributed validators need to perform Ethereum's set duties. The Diva SC handles staking reward distributions to the network participants o a daily basis.

The Diva protocol is born to become a public good and therefore, all the infrastructure along with the smart contracts are released under the most permissive open-source license.


## Oracle

The Ethereum blockchain is running in two separate chains: the execution layer and the consensus layer. The execution layer is where the blocks and transaction and smart contracts sit, while consensus layer is where the validation and consensus information takes place.

At the time of this writing, this two-layer separation makes it impossible for the Diva SC to access to the state of a validator. The Diva SC has no direct way to check how one of its validators has been performing without checking the consensus layer.

The proposed EIP-4788 will solve this problem, by making it possible to communicate with both layers.

However, until EIP-4788 is available Diva’s SC uses oracle’s as the best available solution to obtain the data required.