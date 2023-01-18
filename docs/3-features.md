

# Features

Diva is aiming to become **the most decentralized staking protocol** offering both Stakers and Operators the best conditions.

### **Liquid Staking**

Stakers obtain a liquid token, divETH, representing their ETH and the accrued value of their ETH rewards. There are no lock-ups or minimum deposits.

divETH is a rebasing token, increasing its balance daily in your wallet as it accrues staking rewards.

1 divETH is always backed by 1 ETH. divETH can be used like regular ETH, with the difference that you will have more of it every day without the need to take any action.

It is also possible to convert divETH to a non-rebasing token, wdivETH (wrapped divETH), which is an alternative where the balance is not updated daily. As such, wdivETH appreciates versus ETH over time and its value accrual consolidates once “unwrapped” back into divETH.

*See the Liquid Staking Derivative section for full details.*

### **Non-custodial**

Operators never have access to user funds. Diva automatically stakes the ETH provided into the protocol with Ethereum's built-in deposit contract.

### **Immutable, non-upgradable contracts**

All of Diva’s smart contracts are immutable and non-upgradable, minimizing the potential vectors of attack.

### **Distributed Validation** 

Distributed Validation (Diva) uses Distributed Key Generation (DKG) to split validator keys into key-shares operated by separate nodes using Boneh–Lynn–Shacham (BLS) Threshold Signatures. 

All validator actions require a consensus signature of approximately 2/3rds of nodes in the committee, making Diva resistant to collusion attacks.

Key-shares are generated using Multi-Party Computation (MPC) so secret keys never come together. This greatly reduces the risk of hacks or loss of private keys.

### **Decentralization**

Every Diva validator is a Distributed Validator, operated by a randomly selected sub-network of nodes, promoting diversity and true decentralization.

### **Resiliency**

Thanks to the properties of Diva's validators sets, only "n of m" signatures are needed to reconstruct the total signature representing the private key for each validator.

Consequently, Diva validators tolerate up to "m - n" failing nodes, and the validation will not be affected in case of partial validation failure. This makes Diva resilient to periods of node unavailability, even when multiple nodes go offline, and allows safety mechanisms to safely regenerate DKG and recover network liveliness.

###  **Efficiency**

Diva uses a P2P network for node discovery. Communications occur directly between peers. This avoids delays that could affect the validation performance, and minimizes single points of failure.

Diva's unique consensus algoritm allows Diva validators to achieve similar performance to the best-operated Ethereum validators.

### **Progressive ossification**

Diva is working towards a minimized-governance design and ossifying its operations.

### 💎 **Censorship-resistance**

The Diva protocol’s architecture has been designed to be censorship-resistant, in line with Ethereum's community values.

### 💎 **Permissionless** 

Diva's goal is to allow anybody to stake ETH or operate a node without any kind of permission.

### 💎 **Trust-minimization** 

Diva is designed to minimize the trust required from any party, providing:

- Strong economic incentives that align the interests of all parties.
- ETH bonds as a guarantee to make up for any potential losses.

At the time of this writing, oracles are necessary to fully operate the protocol for technical reasons ([see EIP-4788](https://eips.ethereum.org/EIPS/eip-4788)), but this will be removed as soon as the required dependencies from Ethereum have been implemented.

