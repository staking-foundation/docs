---
title: Smart Contracts
description: All the contracts connected to Diva Staking
hide_table_of_contents: true
---

# Diva Smart Contracts

| Smart Contract                     | Address                                    | Notes 
| ---------------------------------- | ------------------------------------------ | --
| DIVA token                         | [0xBFAbdE619ed5C4311811cF422562709710DB587d](https://etherscan.io/token/0xbfabde619ed5c4311811cf422562709710db587d)   | [See docs](https://github.com/staking-foundation/diva-governor)
| Merkle Distributor with Delegation | [0x777E2B2Cc7980A6bAC92910B95269895EEf0d2E8](https://etherscan.io/address/0xbfabde619ed5c4311811cf422562709710db587d) | [See docs](https://github.com/staking-foundation/diva-governor)
| DivaGovernor                       | [0xFb6B7C11a55C57767643F1FF65c34C8693a11A70](https://etherscan.io/address/0xFb6B7C11a55C57767643F1FF65c34C8693a11A70) | [See docs](https://github.com/staking-foundation/diva-governor)
| DivaTimelockController             | [0x4eBB20995B6264b4b1E25f4473a4636CDB6a9790](https://etherscan.io/address/0x4eBB20995B6264b4b1E25f4473a4636CDB6a9790) | DIVA DAO treasury

## Enzyme's "Diva Early Stakers" Vault Smart Contract

These contracts are used by the [Early Stakers Initiative](early_stakers), which is independently managed by DAO collaborators.

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
