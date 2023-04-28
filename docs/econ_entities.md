---
pagination_next: null
pagination_prev: null
---
# How rewards are handled 

The reward allocation can use auto-compounding that maximizes yield. For Execution rewards, operators are able to choose whether to claim it or keep it as collateral, until withdrawals are enabled:


|| Stakers  | Operators |
|-|------------- | ------------- |
|**Execution rewards**| 50% - Will be restaked  | 50% - Will be claimed OR Will be restaked
|**Consensus rewards**| 50% - Will be restaked  | 50% - Will be issued as divETH |



- **Operators consensus rewards**
Consensus rewards are blocked in the consensus layer and cannot be withdrawn at the moment. However operator do receive the rewards that exceed their bond (32 ETH) in divETH.

- **Operators execution rewards**
Operators can choose to have the rewards from the execution layer ready to be claimed or used by the protocol itself to be auto-compounded.

In case they choose to claim the rewards, they will go to a smoothing pool as the rewards are variable. This way a smooth distribution of MEV rewards across operators is assured. However, if they prefer to let the yield to be auto-compounding, the protocol will make them stake again and again.



### Rewards distribution

The Diva DAO decides how to distribute staking rewards for the common good of the network:
- 90-100% go to Stakers
- The rest is relatively distributed among:
    - Node Operators
    - Insurance pool
    - Incentives programs for Stakers, Node Operators, or Defi Pools
    - The rest of unallocated funds are saved to the DAO treasury

The exact parameters are decided via on-chain governance votes for the DAO.


