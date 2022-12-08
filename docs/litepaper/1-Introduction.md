# Introduction

Diva is a non-custodial Ethereum Liquid Staking Derivative (LSD) protocol powered by Distributed Validator Technology (DVT) with the following properties:

- **Two-sided**: Users can choose to be stakers (deposit ETH), node operators (run diva node/s), or both.
- **Liquid staking**: Stakers obtain a liquid token representing their ETH and the accrued value of their rewards.
- **Distributed validation**: The secret key of each distributed validator is generated using Distributed Key Generation (DKG) among several nodes. The nodes then sign and combine the signatures of the validator duties thanks to the properties of threshold signatures.
- **Non-custodial**: Node operators don't have access to the funds.
- **Permissionless**: Anybody can stake or run a node.
- **Trust-minimized**: Node operators are incentivized to operate in good faith by providing collateral.
- **Purely on-chain**: Diva provides trust purely via rewards and penalties.
- **Cooperative model**: The Diva protocol is designed as an incentive balancing mechanism between the different stakers and operators.
- **Inclusive**: Diva allows operators to be part of a validator depositing a small amount of ETH, as opposed to the 32 ETH required in Ethereum.
- **Progressive ossification**: Diva is working towards minimizing governance and ossifying its functioning.

While other solutions have features like liquid staking or DVT as tools, Diva is the only staking full stack solution combining all the properties above.

Diva allows depositors to delegate their ETH into a trust-minimized P2P network of nodes coordinated by a smart contract and run by individual operators. Operators are bonded and therefore incentivized to perform their duties to avoid penalties. Thus, the model does not require economic trust in any central party running the nodes or other entities.

Depositors can enjoy the full benefits of liquid staking designed to provide immediate liquidity and DeFi composability. As soon as a staker deposits ETH into the Diva smart contracts, divETH tokens will be minted and issued to the user. Those tokens represent the underlying ETHs staked in Diva, combining the value of the initial deposit + staking rewards. The divETH tokens will be burned when redeemed, and token balances are issued 1:1 to the ETH.

Diva aligns incentives using a novel bilateral cooperative model where users are rewarded for staking and running a validator node, encouraging stakers to become operators to receive higher rewards and help decentralize the network.

Our design focus has been to maximize decentralization by removing barriers to entry and providing solid economic incentives. 

## Ethereum Staking

Ethereum has transitioned to Proof of Stake. Hundreds of thousands of individual validators now support the network's security, each staking 32 ETH to produce staking rewards while running their execution and consensus clients.

A validator is a virtual entity controlled by one private key, which is used to fulfill network validation duties such as signing or attesting the new blocks. This work is rewarded today with an estimated 4% APY return in the consensus layer and 1% APY in the execution layer, increasing up to 3% APY in the execution layer when the nodes run Miner Extractable Value (MEV) software.

If a validator acts maliciously or fails to fulfill its validation duties correctly, some penalty will apply to the deposited 32 ETH, resulting in an economic loss for the staker.

These stick-and-carrot incentives have effectively secured billions of dollars in value for Ethereum.

## Setting up a validator has significant barriers to entry and financial commitment

Potential stakers and operators are often turned off by the financial cost of staking, 32 ETH, the technical expertise, the work required, and the uncertainty on when exactly they'll be able to withdraw their funds to have liquidity. 

**Financial commitment**

The minimum cost for a validator is 32 ETH, ranging from $32k (at 1,000 $/ETH) to $128k (at 4,000 $/ETH). As the network matures, one can expect USD prices to increase, thus becoming more prohibitive for smaller operators.

**Need for hardware and technical expertise**

- Generating a private key that must be kept secure.
- A server, which can be home hardware or cloud infrastructure.
- Installation and configuration of the software to run execution, consensus, and validation clients.
- Constant monitoring of uptime and software updates.

**Maintenance which is hard to delegate**

Holidays, illness, life changes, rural areas, and developing countries with power outages… Many situations can result in a node operator going offline for some time or indefinitely. Since Ethereum doesn't implement a way to pause or transfer a validator, the only option today would be for somebody to sign an exit on a validator, which would halt its rewards and penalties.
    
## How does Diva compare to others?

Diva key contribution is providing non-custodial liquid staking while leveraging trustless distributed validation.
### Liquid staking
**Non-custodial**

The deposited ETHs backing divETHs are automatically staked, creating a non-custodial network of staking. To minimize smart contract risks, the Diva vault (which manages validators' inflows and outflows) is not upgradeable.

**LSD**

Liquid staking allows stakers to earn rewards without maintaining staking infrastructure or locking their assets. Newly created liquid and tradable tokens are issued for the exact value of their deposit. Diva LSD tokens (divETH) are collateralized by staked ETHs and their accrued rewards in the protocol. They are redeemable anytime using DeFi (Decentralized Finance/Decentralized Exchanges) platforms or directly converting them to their backed ETHs and rewards in the Diva smart contract. When a staker converts a certain amount of divETHs back to ETHs in Diva, the smart contract burns those divETH and sends the proportional amount of ETHs to the staker.

Use cases:

- **Transferring your position**: divETH represents your staked ETH which you can transfer to any wallet and trade freely. The holder can redeem the ETH and its rewards in the future.
- **Use as collateral in DeFi** divETH can be posted as collateral for your trades while earning rewards. You can borrow against your divETH or get yield in addition to the staking rewards.
- **Exiting your staking position:** divETH can be sold for ETH anytime in decentralized exchanges, getting a price that's usually very close to the value of the accrued rewards.

**APY**

Diva uses a P2P network for node discovery, communication, and signing duties. Communications occur directly between peers, and the node's participation is deterministic but random, avoiding delays that could affect the validation performance. This algorithm translates to staking rewards comparable to solo stakers, thus making Diva validators achieve similar performance to the best-operated Ethereum validators. On top of that, Diva will collect additional MEV yield by using MEV-Boost.

### Distributed validation

**Trust the network, not the operators**

Diva is designed to minimize the trust required from any party:

- Stakers cannot cause penalties to user funds, as they are simply depositors.
- Node operators provide a bond to fully cover any potential losses they could produce by missing validation duties.
- The Diva DAO can only set governance parameters within safe limits, and they will tend towards ossification over time.

For the moment, an oracle needs to be in place to communicate the balance of the Diva distributed validators in the consensus layer to the Diva smart contract. The oracle is supported by ChainLink, considered the safest decentralized oracle. However, as soon as the Ethereum protocol allows it (EIP-4788), Diva will remove the oracle, allowing anybody to submit the required data directly to Ethereum and verify the balances using Zero Knowledge Proofs (ZKP).

**Decentralization**

Diva stands for **Di**stributed **Va**lidators. Each validator is hosted in a randomly selected sub-network of nodes, making them genuinely decentralized. The protocol's governance is also decentralized, as a DAO governs it.

**Censorship-resistance**

The Diva architecture and governance's decentralized nature makes the protocol censorship-resistant. Besides, since no single party is responsible for signing and producing blocks, blocks can be introduced in the network without censorship in the consensus layer. From the block production (or execution layer) point of view, Diva also enforces MEV only from DAO-approved relayers while maintaining a fallback mechanism that allows using the local execution client to produce blocks when certain conditions occur. 

**Permissionless**

Diva is fully permissionless, period. Anyone can participate as a staker by depositing and staking ETH, receiving automatically divETH that represents those deposited ETHs and their accrued rewards. Since Ethereum is also permissionless, anybody can interact with the Diva smart contract and stake without any restriction. The same applies to becoming an operator and running a node in Diva: there is no need to ask for permission. Anybody can run a node with a small amount of ETHs as collateral, set up its Diva client quickly, and start participating in the network. Last but not least, there is no king or queen in the protocol. All DIVA token holders are DAO members and govern the protocol according to the defined parameters of its design.

**Resiliency**

Diva validators are created by groups of $m$ nodes that use threshold signatures to generate and combine the signatures of the validator duties. Thanks to the properties of these signatures, the node that aggregates the signatures only needs $n/m$ signatures to reconstruct the total signature representing the validator contribution. Consequently, Diva validators tolerate up to $m-n$ failing nodes, and the validation will not be affected, thus becoming resilient to sporadic periods of node unavailability.
