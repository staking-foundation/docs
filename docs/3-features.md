

# Features



### **Liquid Staking**

Stakers obtain a liquid token, divETH, representing their ETH and the accrued value of their ETH rewards. divETH is a rebasing token. Balances can be used like regular ETH, and are updated on a daily basis to reflect your ETH's staking rewards. There are no lock-ups or minimum deposits. However it is also possible to convert divEth to a non-rebasing token, wdivETH (wrapped divETH), which is an alternative where the balance is not updated daily. As such, wdivETH appreciates versus ETH over time and its value accrual consolidates once “unwrapped” back into divETH.

### **Distributed Validation** 
Distributed Key Generation (DKG) is being used among several nodes to generate the secret keys allocated to each single validator. Upon generation the nodes sign and combine the validator's signatures thanks to the properties of Boneh–Lynn–Shacham (BLS) Threshold Signatures.

### **Non-custodial**
There’s no custodianship within the Diva protocol, being the ETH provided by the participants automatically staked within the Ethereum network. Further, all Diva’s smart contracts are non upgradable, minimizing any prospective attack vector.

### **Decentralization**
Each validator is a distributed validator. Hosted in a randomly selected sub-network of nodes, making them genuinely decentralized.

### **Censorship-resistance**
The Diva protocol’s architecture has been designed to be completely censorship-resistant. 

### **Resiliency**
Thanks to the properties of Diva's validators sets, only "n of m" signatures are needed to reconstruct the total signature representing each validator contribution. Consequently, Diva validators tolerate up to "m - n" failing nodes, and the validation will not be affected in case of partial validation failure, thus becoming resilient to periods of several node unavailability.

###  **Efficiency**
Diva uses a P2P network for node discovery. Therefore, communications occur directly between peers. It avoids delays that could affect the validation performance. This algorithm makes Diva validators achieve similar performance to the best-operated Ethereum validators.

### **Progressive ossification**
Diva is working towards minimizing governance and ossifying its functioning.
