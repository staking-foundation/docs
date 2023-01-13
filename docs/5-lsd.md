# divETH

## How divETH works for users

When a Staker deposits 1 ETH, 1 divETH is minted and handed over to the user. As blocks are produced and rewards are generated, the divETH balance grows to reflect the underlying value of its ETH. The Staker’s balance will automatically update reflecting such accrued value, i.e. an Staker depositing 1 ETH will receive 1 divETh which will increase over time as rewards are accrued holding 1.01 divETH, 1.02 divETH, etc.

1 divETH always represents an underlayer of 1 ETH.

1 divETH can be unstaked through the Diva protocol, by requesting a withdrawal and obtaining the underlying ETH after the withdrawal completes. This functionality will be available once Ethereum allows validator withdrawals, expected in March 2023.


## The divETH liquid staking model

Being divETH a rebasing token its balance is updated on a daily basis to reflect the corresponding ETH value. There are no lock-ups or minimum deposits.

Unlike other approaches, this mechanism allows divETH to always keep the rate 1:1 with ETH while automatically reflecting the staking rewards.


## The wdivETH wrapping option

In order to facilitate the integration with the wider Ethereum ecosystem and increase the divETH composability, an alternative has been set by allowing the “wrapping” of divETH into wdivETH. wdivETh balance’s is not updated daily. Instead, 1 wdivETH represents the value of 1 ETH staked through Diva at a certain moment in time and accrue its real value at redemption/unwrapping back into divETH.

It is important to note that as wdivETH balance remains constant the ratio will NOT be ETH1:1wdivETH, as it will be set to a % of the total rewards on Diva on redemption.


## divETH vs wdivETH

1 divETH = 1 ETH at any moment. divETH balance will increase or decrease daily to reflect the staking rewards. 

wdivETH reflects an static value which is updated at redemption (unwrapping to divETH),  therefore it can be stated that wdivETH is backed by exactly the same fundamentals that divETH: the staked ETH and its corresponding rewards.