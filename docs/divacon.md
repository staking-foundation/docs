---
pagination_next: null
pagination_prev: null
---
# Diva
- [Source code](https://google.com)
- [Deployed contract](https://google.com)

Diva is the core contract which acts as a liquid staking pool. The contract is responsible for Ether deposits and withdrawals, minting and burning liquid tokens, delegating funds to node operators, applying fees, and accepting updates from the oracle contract. Node Operators' logic is extracted to a separate contract, NodeOperatorsRegistry.

Diva also acts as an ERC20 token which represents staked ether, divETH. Tokens are minted upon deposit and burned when redeemed. Despite divETH tokens being pegged 1:1 to the ether that is held by Lido, the market exchange rate between divETH and ETH may vary. divETH holder balances are updated daily with oracle reports.


## Rebasing
When a rebase occurs, the supply of the token is increased or decreased algorithmically, based on staking rewards (or slashing penalties) on the Beacon chain, and execution layer rewards (starting from the Merge Ethereum upgrade). A rebase happens when oracles report beacon stats.

The rebasing mechanism is implemented via "shares". Instead of storing map with account balances, Lido stores which share owned by account in the total amount of Ether controlled by the protocol.

The balance of an account is calculated as follows:

        balanceOf(account) = shares[account] * totalPooledEther / totalShares
- shares - map of user account shares. Every time user deposit ether, it converted to shares and added to current user shares.
- totalShares sum of shares of all account in shares map
- totalPooledEther is a sum of three types of ether owned by protocol:

For example, assume that we have:

    totalShares = 500
    totalPooledEther = 10 ETH
    sharesOf(Alice) -> 100
    sharesOf(Bob) -> 400
Therefore:

    balanceOf(Alice) -> 2 tokens which corresponds 2 ETH
    balanceOf(Bob) -> 8 tokens which corresponds 8 ETH
