---
pagination_next: null
pagination_prev: null
---
# DVT Entities 
#### Validation set

A validation set is basically a distributed validator. It is a set of several signers that manages and perform duties of a distributed validator. It is composed by a defined number signers. One of those will be an aggregator. As any other validator, a distributed validator must:

- Once per epoch, propose an attestation. This needs the distributed validator signature, therefore n of m signers must sign this duty.
- Eventually, propose blocks. This needs the distributed validator signature, therefore n out of m signers must sign this duty.
- Eventually, be part of a sync-committee, this is something that the Ethereum clients of the aggregator take care of.

#### Signer

They form a validation set by keeping a key-share of the distributed validator and signing its duties. A diva signer is raised for each key-share that is issued to an operator. A signer is part of a single set. The duties of the diva signer are:

- When a new signing duty comes for a new attestation, the signer needs to check the block and that the fee recipient of the block is Diva's. Signers are placed in a node client that is installed along with a consensus and an execution client so the validation of the block can be done with the assistant of the Ethereum clients. For proposing new blocks Diva uses MEV-boost, those blinded blocks that will be signed as long as they validate that the fee-recipient is within the on-chain list of allowed relayers.
- Once the validity of the signing duty has been confirmed, the signer must sign the duty and send it back to the aggregator.

#### Aggregator

One of the signers within a validation set will be an aggregator. Each validator has it own numeric parameter and and each signer can independently calculate its own distance to that number. Each N epochs they are rotating the aggregator role using the distance as order, closest first.

This rotation helps to detect unavailable nodes and to avoid power concentration in a determined signer. After detected unavailability for period of t, each signer will start accepting signing-duties from the next closest peer (that peer was a signer that became an aggregator since a new duty will be sent from it).

The aggregator has two main duties within the validation set:

- Sign whatever duty is needed as any other signer from its validation set.
- Aggregate the signatures of the rest of the signers from its validation set.
- Eventually, when the distributed validator related to the validation set is meant to propose a block, the aggregator will build the block or request a block to mev-boost.
