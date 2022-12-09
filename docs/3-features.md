

# Features



### **Liquid staking**

Stakers obtain a liquid token, divETH, representing their ETH and the accrued value of their rewards. divETH is a rebasing token. Balances can be used like regular ETH, and are updated on a daily basis to reflect your ETH staking rewards. There are no lock-ups or minimum deposits. However it is also possible to convert divEth to a non-rebasing token, wdivETH, which is an alternative where the balance is not updated daily. As such, wdivETH appreciates versus ETH over time, similar to shares in an investment fund that appreciated over time vs USD.

### **Distributed validation** 
The secret key of each distributed validator is generated using Distributed Key Generation (DKG) among several nodes. The nodes then sign and combine the signatures of the validator duties thanks to the properties of BLS threshold signatures.

### **Non-custodial**
Node operators don't have access to the funds. The deposited ETHs backing divETHs are automatically staked, creating a non-custodial network of staking. To minimize smart contract risks, the Diva vault (which manages validators' inflows and outflows) is not upgradeable.

### **Decentralization**
Each validator is a distributed validator. Hosted in a randomly selected sub-network of nodes, making them genuinely decentralized. The protocol's governance is also decentralized, as a DAO governs it.

### **Permissionless**
Anybody can stake or run a node at any moment without any process that requires identification or any kind of permission. Anyone can participate by staking ETH, running a node or being a DAO member to govern the protocol.


### **Trust-minimization**
Diva is designed to minimize the trust required from any party since operators provide a bond to fully cover any potential losses they could produce.
For the moment, an oracle needs to be in place for technical reasons but it will be removed.

### **Censorship-resistance**
The Diva architecture and governance's decentralized nature makes the protocol censorship-resistant. From the block production point of view, Diva also enforces MEV only from DAO-approved relayers while maintaining a fallback mechanism that allows using the local execution client to produce blocks when certain conditions occur. 

### **Resiliency**
Thanks to the properties of Diva validator set, it only needs "n of m" signatures to reconstruct the total signature representing the validator contribution. Consequently, Diva validators tolerate up to "m - n" failing nodes, and the validation will not be affected, thus becoming resilient to periods of several node unavailability.

###  **Efficiency**
Diva uses a P2P network for node discovery. But communications occur directly between peers. It avoids delays that could affect the validation performance. This algorithm makes Diva validators achieve similar performance to the best-operated Ethereum validators. On top of that, Diva collects additional MEV yield by using MEV-Boost.

### **Progressive ossification**
Diva is working towards minimizing governance and ossifying its functioning.