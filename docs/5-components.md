# Protocol components


## Node

A node is a hardware machine running all of these:

1. An Ethereum Execution client
2. An Ethereum Consensus client
3. The Diva client.

Nodes run the required infrastructure to power a Distributed Validator.

Nodes will own different key-shares, allowing them to operate Distributed Validators in coordination with other nodes.

The Diva client is open source and available in several formats such as source code, as Docker image and a Dappnode package. It allows nodes to:

- Register as an Operator in the Diva smart contracts.
- Sync the Consensus and Execution clients.
- Receive Distributed Validator key-shares when maintaining the required ETH bond.
- Perform validation duties for the Distributed Validators they're part of.

## The Diva P2P Network

Diva creates a P2P network between nodes for discovery purposes. This way Diva remains decentralized and censorship-resistant. Also, the P2P network allows the DKG to be performed in fully decentralized manner that preserves privacy and security of all data transmissions.


## Smart Contracts

The Diva Smart Contract (DSC) allows:

- Stakers to deposit ETH and receive yield-generating divETH 1:1.
- Stakers to un-stake their divETH and receive ETH 1:1 by requesting a validator withdrawal.
- Operators to register their key-shares for new Distributed Validators.
- Operators to trustlessly coordinate the creation of a new Ethereum validator in batches of 32 ETH.

Diva SCs will be non-upgradeable. This is one of the features that allow the protocol to remain predictable. If an issue manifests within a smart contract, a protection mechanism is in place to minimize any prospective impact to all parties.

Distributed Validators are subject to regular Ethereum Validator duties. The Diva SC handles staking reward distributions to the network participants on a rules-based basis, updating all balances daily.

The Diva protocol has been conceived as a public good and therefore, all the infrastructure along with the smart contracts are released under permissive open-source licenses.

## Oracle

The Ethereum blockchain is running on two separate chains: the Execution Layer (EL) and the Consensus Layer (CL). The Execution Layer is where the blocks and transaction and smart contracts sit, while Consensus Layer is where the validation and consensus mechanisms take place.

At the time of this writing, this two-layer separation makes it technically impossible for the Diva SC (EL) to access to the state of a validator (CL). The Diva SC has no direct way to check how one of its validators has been performing without receiving information from the consensus layer.

The proposed [EIP-4788](https://eips.ethereum.org/EIPS/eip-4788) will solve this problem, by making it possible to communicate with both layers.

However, until EIP-4788 is available, Diva’s SC will use oracles as the best available solution to obtain the data required. Oracles will be operated by distributed network operators.
