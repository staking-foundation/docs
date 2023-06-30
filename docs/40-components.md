
# Protocol components

## Node

A full Diva node is a server running all of the following:

1. An Ethereum Execution client
2. An Ethereum Consensus client
3. A Diva client connected to both Ethereum clients

Nodes run the required infrastructure to power a Distributed Validator.

For more sophisticated setups, the Diva client can also be connected to an existing Ethereum node (EL/CL).

Nodes will receive and operate different Key Shares, allowing them to operate Distributed Validators in coordination with other nodes.

The Diva client is still in developent, and will be open-source and available in several formats such as source code, Docker image, and a Dappnode package. It allows nodes to:

- Register as an Operator in the Diva smart contracts.
- Sync the Consensus and Execution clients.
- Receive Distributed Validator Key Shares while maintaining the required ETH collateral.
- Perform validation duties for the Distributed Validators they are part of.

<div style={{textAlign: 'center'}}>

![DVT architecture](img/dvt-2.png)
</div>

## The Diva P2P Network

Diva creates a P2P network between nodes for discovery purposes. This way Diva remains decentralized and censorship-resistant. Also, the P2P network allows the DKG to be performed in fully decentralized manner that preserves privacy and security of all data transmissions.


## Smart Contracts

The Diva Smart Contract (DSC) allows:

- Stakers to deposit ETH and receive yield-generating divETH 1:1.
- Stakers to un-stake their divETH and receive ETH 1:1 by requesting a validator withdrawal.
- Operators to register their Key Shares for new Distributed Validators.
- Operators to trustlessly coordinate the creation of a new Ethereum validator in batches of 32 ETH.

Diva SCs will be non-upgradeable, ensuring the protocol remains predictable. This is one of the features that allow the protocol to remain predictable. If an issue manifests within a smart contract, a protection mechanism is in place to minimize any prospective impact to all parties.

Distributed Validators are subject to regular Ethereum Validator duties. The Diva SC handles staking reward distributions to the network participants, updating all balances daily based on a set of rules.

The Diva protocol has been conceived as a public good. Therefore, all infrastructure along with the smart contracts are released under permissive open-source licenses.


## Zero-Knowledge Proof Oracles

The Ethereum blockchain is running on two separate chains: the Execution Layer (EL) and the Consensus Layer (CL). The Execution Layer is where the blocks, transactions, and smart contracts sit, while the Consensus Layer is where the validation and consensus mechanisms take place.

At this time, the two-layer separation renders it technically impossible for the Diva SC (EL) to access the state of a validator (CL). The Diva SC has no direct way to check how one of its validators has been performing without receiving information from the consensus layer.

The proposed EIP-4788 will solve this problem by making it possible to communicate with both layers.

However, until EIP-4788 is available, Diva’s SC will use zero-knowledge proof (ZKP) oracles as the best available solution to obtain necessary data. These oracles offer extremely strong guarantees of data validity without requiring trust in a multisig or committee of traditional oracles.
