---
title: Early Stakers Initiative
description: Early Stakers can now deposit ETH or stETH prior to Diva's launch to earn DIVA tokens
---
# Early Stakers Initiative

Diva Staking is still under development, but you can already support its launch.

**You can now deposit ETH or stETH into [Pre-Launch Vaults](https://diva.enzyme.finance/#vaults) to become eligible for DIVA tokens**.

:::info Good to know
DIVA tokens are **currently** [non-transferable](https://www.tally.xyz/gov/diva/proposal/52481024395238134144299582623582875841236980209822828761178984408970724801644). Join the initiative for potential DIVA allocations.

:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/4QWk4oNdx0I" title="Diva Early Stakers Vaults" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

👉 **Visit the Diva Early Stakers website to get started** [https://diva.enzyme.finance](https://diva.enzyme.finance)

## How does it work

You can deposit ETH or stETH to signal your support for the Diva Staking launch. Every (st)ETH will earn DIVA tokens for every day in the vault starting 30 days before mainnet launch date.

TVL commitments are important, because they attract Liquid Stakers, [Operators](participants#operators) and facilitate integrations.

### Two vaults

<div style={{textAlign: 'center'}}>

![Two choices available](img/early_stakers/vault-choices.png)
</div>

ETH deposits are simply kept in "hold" mode until Diva Staking launches. stETH are also kept untouched until launch, but earn ETH staking rewards as you wait.

Once Diva Staking goes live, all (st)ETH will be converted to [divETH](lst), Diva's Liquid Staking Token (LST), which generates Ethereum staking rewards and can be freely traded on decentralized exchanges (DEXs).

Vaults are non-custodial, allowing depositors to withdraw their funds anytime.

### Rewards

The more (st)ETH you deposit, the more DIVA tokens you will get. You can find the daily reward amount valid for your deposit tranche in the [table](https://diva.enzyme.finance/#table). Alternatively, use the [calculator](https://diva.enzyme.finance/#calculator) to determine the amount of tokens.

If you deposit stETH, you will get both Ethereum staking rewards and DIVA tokens when they start accruing. For example, depositing 10 stETH (into the first tranche) and staying in the vault for the maximum duration will result in 4,575 DIVA rewards plus the full staking rewards (stETH before Diva launch and then divETH).

### Help Diva Staking launch successfully

This is an independently run initiative approved by the [Diva Staking DAO](dao) in [DIP-02](https://www.tally.xyz/gov/diva/proposal/45468458207916765916984557235161596151150976178275597160417224501662414206717).

It aims to accelerate the launch and adoption of Diva Staking by helping to:

-   Gain confidence that the protocol and DIVA are widely adopted
-   Distribute voting power to participants according to their commitments
-   Plan node operator capacity and DeFi integrations ahead of launch

This ultimately helps balance and decentralize the Ethereum staking ecosystem by promoting diversity to its LST landscape and embracing the future of [DVT](dvt) technology.

### DIVA transferability

Please note that DIVA is currently non-transferable and not trading, which means that a token price cannot be established.

DIVA token will only become transferable if approved by the Diva Staking DAO. You can check the latest [DAO proposal concerning transferability](https://www.tally.xyz/gov/diva/proposal/52481024395238134144299582623582875841236980209822828761178984408970724801644) on Tally.

## Enzyme protocol infrastructure

The program is made possible with Enzyme’s on-chain asset management infrastructure and non-custodial smart contract architecture. Stakers retain full self-custody of their funds at all times.

For the full Terms & Conditions, see [proposal](https://www.tally.xyz/gov/diva/proposal/45468458207916765916984557235161596151150976178275597160417224501662414206717) on Tally.

👉 **Visit the Diva Early Stakers website to get started** [https://diva.enzyme.finance](https://diva.enzyme.finance)


### Smart Contracts

<details><summary>View all Enzyme Smart Contracts</summary>
<p>

Some contracts are vault-specific:

| Component | Diva Early Stakers stETH Vault | Diva Early Stakers ETH Vault |
| --------- | ------------------------------ | ---------------------------- |
| Vault Address | 0x1ce8aafb51e79f6bdc0ef2ebd6fd34b00620f6db | 0x16770d642e882e1769ce4ac8612b8bc0601506fc |
| Vault Proxy | 0x1ce8aafb51e79f6bdc0ef2ebd6fd34b00620f6db | 0x16770d642e882e1769ce4ac8612b8bc0601506fc | 
| Comptroller Proxy | 0x648B8d2340842a7040680915c4dAb89382eeEDA9 | 0xC769Dac189494223a948426647e2615cf7412307 | 

Other contracts are shared for both vaults:

| Component | Address |
| --------- | ------- |
| Fund Deployer | 0x4f1C53F096533C04d8157EFB6Bca3eb22ddC6360 |
| Dispatcher | 0xC3DC853dD716bd5754f421ef94fdCbac3902ab32
| Value Interpreter | 0xd7b0610db501b15bfb9b7ddad8b3869de262a327
| Integration Manager | 0x31329024f1a3E4a4B3336E0b1DfA74CC3FEc633e
| Policy Manager | 0xADF5A8DB090627b153Ef0c5726ccfdc1c7aED7bd
| Policy:MinMaxInvestmentPolicy | 0xebdadFC929c357d12281118828AeA556db5be30C
| Policy:AllowedAdaptersPolicy | 0x720ef97bF835699FCF07591952cD2B132D63a6C0
| Policy:AllowedSharesTransferRecipientsPolicy | 0xebE37e43bC6b3AacfE318d6906fc80C4a2a7505A
| Policy:AllowedExternalPositionTypesPolicy | 0x9e076e7d35a3b881Ab9e3DA958431630FdFa756F
| Fee Manager | 0xAf0DFFAC1CE85c3fCe4c2BF50073251F615EefC4
| ProtocolFeeReserve | 0xb7460593bd222e24a2bf4393aa6416bd373995e0
| Protocol Fee Tracker | 0xe97980f1d43c4cd4f1eef0277a2dea7ddbc2cd13
| Deposit Wrapper | 0x59ea865ebb903ebc3e345efbbd4206dbd20d9c3f
</p>
</details>


