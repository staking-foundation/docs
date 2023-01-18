---
title: divETH & wdivETH

---
# divETH

## How divETH works for users

When a Staker deposits 1 ETH, 1 divETH is minted and returned to the Staker.

As Ethereum blocks are produced and staking rewards are generated, the Staker's divETH balance grows to reflect the underlying value of its ETH. The Staker's balance will automatically update daily to reflect the accrued ETH value.

Example:

- A Staker deposits 1 ETH into the Diva Smart Contract and obtains 1 divETH in their wallet.
- 1 year later, the staking rewards have been 5% and the Staker sees 1.05 divETH in their wallet.
- 2 years later, that 1.05 divETH further becomes 1.1025 divETH.
- The Staker decides to un-stake those 1.1025 divETH with the Diva Smart Contract and obtains 1.1025 ETH in return.

**1 divETH always represents an underlying value of 1 ETH,** as it is fully backed by ETH.

divETH can be unstaked through the Diva protocol, by requesting a withdrawal and obtaining the underlying ETH after the withdrawal completes. *This functionality will be available Ethereum allows validator withdrawals, expected in March 2023.*


## The divETH liquid staking model

divETH is a rebasing token, meaning that its balance is updated on a daily basis its exact underlying ETH value. There are no lock-ups or minimum deposits.

This mechanism allows divETH to always keep a 1:1 rate vs ETH while automatically reflecting the staking rewards.

Some other protocols use non-rebasing models more similar to wdivETH described below. We have chosen the rebasing model as we believe it to be more intuitive for users, as it doesn't require to apply a conversion rate to calculate the fair ETH value.


## The wdivETH wrapping option

In order to facilitate the integration with the wider Ethereum ecosystem and increase the divETH composability, we provide an alternative non-rebasing token called wdivETH.

The Diva Smart Contracts allow users to “wrap” divETH into wdivETH and vice-versa.

Balances of wdivETH are not updated daily, and do not change over time.

Instead, 1 wdivETH represents the value of 1 ETH staked through Diva at a certain moment in time. As Diva accrues staking rewards, 1 wdivETH is backed by an increasing amount of ETH over time, meaning that **wdivETH appreciated vs ETH over time**.

Example:

- A Staker deposits 1 ETH into the Diva Smart Contract and obtains 1 divETH in their wallet.
- The Staker wraps 1 divETH to obtain 1 wdivETH.
- 1 year later, the staking rewards have been 5%. The Staker still has 1 wdivETH, but it is now worth 1.05 ETH, as the underlying ETH increased.
- 2 years later, that same 1 wdivETH is now worth 1.1025 ETH.
- The Staker decides to unwrap the 1 wdivETH and obtains 1.1025 divETH.
- Those 1.1025 divETH are un-staked with the Diva Smart Contract and become 1.1025 ETH.

## divETH vs wdivETH

1 divETH = 1 ETH at any moment. The ratio is always 1:1, increasing or decreasing to reflect the exact amount of underlying ETH.

The ratio of wdivETH:ETH is not 1:1 and will change over time, with 1 wdivETH being backed by 1.01 ETH, 1.02 ETH, 1.03 ETH, etc.

The wdivETH in your wallet will be static value which only changes when you trade it. wdivETH can be unwrapped into divETH or further unstaked to obtain ETH.
