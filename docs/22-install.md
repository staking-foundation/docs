---
title: How to install & contribute
description: Follow this guide to become an Operator and start running a Diva node.
---

# Installing Diva Operator testnet

Diva is currently in Testnet ([check the 🛤️ Roadmap ](roadmap)), and the exact requirements are still being explored.

:::info
Ready to install? **[Jump to the the Diva Installation Guide](https://docs.shamirlabs.org/)** maintained by Shamir Labs.

Or keep reading to learn more :)
:::


## Operator setup

In the current version, no collateral is required! Key shares are sent automatically to live operators.

But this will change in future versions.

Diva Operators will require to post at least 1 Goerli ETH (testnet) as [collateral](glossary#collateral) to receive their first key share. If you need some Goerli ETH, [you can ask for it in the community Discord](https://discord.gg/diva).

There are three ways to run a Diva node:

1. **An all-in-one Diva node**, which automatically installs the Ethereum client dependencies (EL/CL/VC clients).

This requires a virtual or physical machine with the [specifications to run a full Ethereum node](https://ethereum.org/en/run-a-node/):

  - 📦 An operating system supporting Docker, ideally Linux
  - 🤖 CPU: 4 cores minimum, 8 cores recommended. *(ARM hasn't been tested yet)*
  - 🧠 RAM: 8 GB minimum, 16 GB recommended. *(We recommend higher amounts than the Ethereum Foundation's minimums)*
  - 🍱 Hard drive: 2 TB SSD drive.
  - Recommended: Wired internet connection

2. **Using the Dappnode package** which is under development.

3. **Connecting Diva to an existing Ethereum node**. In this case the requirements are much lower, as the Ethereum node does all the heavy lifting. It is recommended to use a dedicated Ethereum node that's isolated from other services to avoid accidental failures.

<div style={{textAlign: 'center'}}>

![How to run a Diva node](img/how-to-run-node.png)
</div>


## Installing Diva Operator client

The first Diva client implementation is being developed by Shamir Labs.

- 👉 **[Read the Diva Installation Guide](https://docs.shamirlabs.org/)** which provides the latest up-to-date details!
- 👉 **[Join the Discord](https://discord.gg/diva)** for live support from the community!


## Currently supported features

Diva still [under development](roadmap)! The exact details on how it works will keep evolving.

The current version supports:

- ✅ Creation of validators with automatic DKG, no manual key management
- ✅ Fulfilling validator duties using DVT
- 🔜 Validator Withdrawals
- 🔜 ZK Oracles to calculate rewards
- 🔜 Operator collateral and rewards management
- 🔜 MEV support

## Get involved!

So far, Diva Operator testnet is relatively new and has only been tested in Intel, Geth and Teku.

Get involved by reporting bugs, suggesting improvements, and helping us test more client combinations!
