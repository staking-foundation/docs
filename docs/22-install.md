---
title: How to install & contribute
description: Follow this guide to become an Operator and start running a Diva node.
---

# Installing Diva Operator testnet

Diva is currently in Testnet ([check the 🛤️ Roadmap ](roadmap)), and the exact requirements are being still explored.

## Operator setup

Diva Operators will require to post at least 1 Goerli ETH (testnet) as collateral to receive their first key share. If you need some Goerli ETH, [you can ask for it in the community Discord](https://discord.gg/diva).

There are two ways to run a Diva node:

1. **A full Diva node**. This requires a server with the [requirements to run a full Ethereum node](https://ethereum.org/en/run-a-node/) (including EL/CL clients):
  - 📦 A machine supporting Docker.
  - 🤖 CPU: 4 cores minimum, 8 cores recommended. *(ARM hasn't been tested yet)*
  - 🧠 RAM: 8 GB minimum, 16 GB recommended. *(We recommend higher amounts than the Ethereum Foundation's minimums)*
  - 🍱 Hard drive: 2 TB SSD drive.
  - Recommended: Wired internet connection
2. **Connecting Diva to an existing Ethereum node**. In this case the requirements are much lower, as the Ethereum node does all the heavy lifting. It is recommended to use a dedicated Ethereum node that's isolated from other services to avoid accidental failures.

<div style={{textAlign: 'center'}}>

![How to run a Diva node](img/how-to-run-node.png)
</div>


## Installing Diva Operator client

👉 Follow the installation instructions on Github!

The Github Docker package comes prepare for a full Diva node (option #1).

If you would like to configure it to connect to your own node, you can edit the Docker configuration files.


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

So far, Diva Operator testnetis relatively new and has only been tested in Intel, Geth and Teku.

Get involved us by reporting bugs, suggesting improvements, and helping us test more client combinations!
