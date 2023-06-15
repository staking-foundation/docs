---
title: divETH & wdivETH
description: Diva offers Liquid Staking Tokens in rebasing (divETH) and non-rebasing (wdivETH) flavors.
hide_table_of_contents: false
displayed_sidebar: mainSidebar
---

# divETH & wdivETH

:::info

Diva's Liquid Staking token is available in a rebasing (divETH) and non-rebasing version (wdivETH), to fit all use cases.

It's designed to be compatible with Lido's stETH, to facilitate integrations with apps that already support stETH or wstETH.
:::



## 📈 How divETH works for stakers

When a Staker deposits 1 ETH, 1 divETH is minted and returned to the Staker.

As Ethereum blocks are produced and staking rewards are generated, **the Staker's divETH balance grows to reflect the underlying value of its ETH**. The Staker's balance will automatically update daily to reflect the accrued ETH value.

**1 divETH always represents an underlying value of 1 ETH,** as it is fully backed by ETH.

divETH can be unstaked through the Diva protocol at any time by requesting a withdrawal and obtaining the underlying ETH after the withdrawal completes.

<details>
  <summary>Example of divETH staking</summary>
  <div>
    <ul>
        <li>A Staker deposits 1 ETH into the Diva Smart Contract and obtains 1 divETH in their wallet.</li>
        <li>1 year later, the staking rewards have been 5% and the Staker sees 1.05 divETH in their wallet.</li>
        <li>2 years later, it accrues 5% more, so those 1.05 divETH further become 1.1025 divETH.</li>
        <li>The Staker decides to withdraw (un-stake) the 1.1025 divETH with the Diva Smart Contract and obtains 1.1025 ETH in return.</li>
    </ul>
  </div>
</details>


### 1 divETH = 1 staked ETH

divETH is a rebasing token, meaning that its balance is updated on a daily basis to reflect its exact underlying ETH value. There are no lock-ups or minimum deposits.

This mechanism allows divETH to always keep a 1:1 rate vs ETH while automatically reflecting the staking rewards.

Some other protocols use non-rebasing models more similar to [wdivETH](#the-wdiveth-wrapping-option). Diva utilizes the rebasing model as it does not require Stakers to apply a conversion rate to calculate the fair divETH/ETH exchange rate, allowing the system to be more intuitive. 

## 📦 The wdivETH wrapping option

In some cases, the changing balance of divETH is not ideal, and a non-rebasing static-balance token is preferable. This is the case with some Defi protocols and accounting use cases. That's why Diva provides wdivETH as a non-rebasing token.

The Diva Smart Contracts allow users to “wrap” divETH into wdivETH and vice-versa.

Balances of wdivETH are not updated daily, and do not change over time.

Instead, 1 wdivETH represents the value of 1 ETH staked through Diva at a certain moment in time. As Diva accrues staking rewards, 1 wdivETH is backed by an increasing amount of ETH over time, meaning that **wdivETH appreciates vs ETH over time**.


<details>
  <summary>Example of wdivETH staking</summary>
  <div>
    <ul>
        <li>A Staker deposits 1 ETH into the Diva Smart Contract and obtains 1 divETH in their wallet.</li>
        <li>The Staker wraps 1 divETH to obtain 1 wdivETH. (This exchange rate is not fixed 1:1).</li>
        <li>1 year later, the staking rewards have been 5%. The Staker still has 1 wdivETH, but it is now worth 1.05 ETH, as the underlying ETH increased from the staking rewards.</li>
        <li>2 years later, the Staker still has 1 wdivETH but it's now worth 1.1025 ETH.</li>
        <li>The Staker decides to unwrap the 1 wdivETH, and obtains 1.1025 divETH.</li>
        <li>The 1.1025 divETH is withdrawn (un-staked) with the Diva Smart Contract and becomes 1.1025 ETH.</li>
    </ul>
  </div>
</details>

The purpose of wdivETH is to facilitate the integration with the wider Ethereum ecosystem and increase the divETH composability.

### divETH vs wdivETH

1 divETH = 1 ETH at any moment. The ratio is always 1:1, increasing or decreasing to reflect the exact amount of underlying ETH.

The ratio of wdivETH:ETH is not 1:1 and will change over time, with 1 wdivETH being backed by 1.01 ETH, 1.02 ETH, 1.03 ETH, etc.

The wdivETH in your wallet will be a static value which only changes when you mint, withdraw or trade it. wdivETH can be unwrapped into divETH or further unstaked to obtain ETH.
