---
title: divETH & wdivETH
description: Diva offers Liquid Staking Tokens in rebasing (divETH) and non-rebasing (wdivETH) flavors.
hide_table_of_contents: false
---

# divETH & wdivETH

:::info

Diva's Liquid Staking Token is available in a rebasing (divETH) and non-rebasing version (wdivETH), to fit all use cases.

It's designed in similarity to Lido's liquid staking tokens to facilitate integrations with apps that already support stETH or wstETH.
:::



## 📈 How divETH works for Liquid Stakers

At its core, divETH is a receipt token. When a Liquid Staker deposits 1 ETH, 1 divETH is minted and returned to the Liquid Staker.

As Ethereum blocks are produced and [Staking Rewards](staking-rewards) are generated, **the Liquid Staker's divETH balance grows to reflect the underlying ETH balance**. The Liquid Staker's divETH balance will automatically update daily to reflect the deposited ETH balance plus any of its Staking Rewards.

⛩️ The Diva Smart Contract acts as a "bridging" mechanism. It deposits ETH into [Ethereum Consensus Layer validators](glossary#validator) while returning a divETH receipt that can be used to later withdraw those ETH plus any staking rewards it might have produced.

**divETH is merely a receipt token allowing its holder to permissionlessly withdraw the corresponding ETH**. It is not a "stablecoin" and there is no pegging mechanism to guarantee it will trade 1:1 towards the underlying ETH.

divETH can be unstaked through the Diva smart contract at any time by requesting a withdrawal and obtaining the underlying ETH after the withdrawal completes.

<details>
  <summary>Example of divETH staking</summary>
  <div>
    <ul>
        <li>A Liquid Staker deposits 1 ETH into the Diva Smart Contract and obtains 1 divETH in their wallet.</li>
        <li>1 year later, the <a href="/staking-rewards">Staking Rewards</a> have been 5% and the Liquid Staker sees 1.05 divETH in their wallet.</li>
        <li>2 years later, it returns 5% more, so those 1.05 divETH further become 1.1025 divETH.</li>
        <li>The Liquid Staker decides to withdraw (un-stake) the 1.1025 divETH with the Diva Smart Contract and obtains 1.1025 ETH in return.</li>
    </ul>
  </div>
</details>


### divETH Accounting Mechanism

divETH is a rebasing token, meaning that the holder's divETH balance is updated on a daily basis to reflect the exact underlying ETH staked through Diva. There are no lock-ups or minimum deposits. Diva is designed to work in a fully non-custodial and permissionless manner.

This mechanism allows divETH balances to automatically reflect the [Staking Rewards](staking-rewards).

Some other protocols use non-rebasing models more similar to [wdivETH](#the-wdiveth-wrapping-option). Diva utilizes the rebasing model as it does not require Liquid Stakers estimate any inferred value, reinforcing its character as a receipt token and making its use more intuitive.

## 📦 The wdivETH wrapping option

In some cases, the automatically updating balance of divETH is not ideal, and a non-rebasing static-balance token is preferable. This is the case with some DeFi protocols and accounting use cases. That's why the Diva allows Liquid Stakers to convert their divETH into wdivETH as a non-rebasing token.

The Diva Smart Contracts allow users to “wrap” divETH (dynamic balance) into wdivETH (static balance) and vice-versa.

Balances of wdivETH are not updated daily, and do not change over time.

wdivETH balances are static and are not updated automatically in your wallet. Instead, wdivETH can be redeemed for the corresponding ETH plus staking rewards only by **withdrawing into ETH** or **unwrapping into divETH**.

<details>
  <summary>Example of wdivETH staking</summary>
  <div>
    <ul>
        <li>A Liquid Staker deposits 1 ETH into the Diva Smart Contract and obtains 1 divETH in their wallet.</li>
        <li>They wrap 1 divETH to obtain 1 wdivETH. (This exchange rate is not fixed 1:1).</li>
        <li>1 year later, the <a href="/staking-rewards">Staking Rewards</a> have been 5%. They still has 1 wdivETH, but it is now worth 1.05 ETH, as the underlying ETH increased from the staking rewards.</li>
        <li>2 years later, they still have 1 wdivETH but it's now worth 1.1025 ETH.</li>
        <li>They decides to unwrap the 1 wdivETH, and obtains 1.1025 divETH.</li>
        <li>The 1.1025 divETH is withdrawn (un-staked) with the Diva Smart Contract and becomes 1.1025 ETH.</li>
    </ul>
  </div>
</details>

The purpose of wdivETH is to facilitate the integration with the wider Ethereum ecosystem and increase the divETH composability.

### divETH vs wdivETH

While the **divETH balance will dynamically update** in the token holder’s wallet, the **wdivETH balance will remain static** until it is unwrapped into a divETH receipt token, or further redeemed for its underlying ETH.

These two alternatives provide versatile ways for Liquid Stakers to conveniently deposit their ETH into Ethereum's Consensus Layer to generate staking rewards.
