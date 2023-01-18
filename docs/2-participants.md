# Participants

## Stakers

Anyone can be a Staker with no minimum ETH. Stakers deposit ETH to the Diva smart contract and will instantly receive divETH 1:1 representing their interest-bearing deposit.

Stakers will see their divETH increase daily as it generates staking rewards. 1 divETH can be always redeemed for 1 ETH by requesting a withdrawal from the Diva Smart Contract.

Stakers earn rewards passively and have no duties towards the Diva protocol. They can use their divETH in the DeFi ecosystem as a liquid staking derivate. divETH accrues staking rewards continuously.

## Operators

Unlike other solutions, Operators do not have access at any moment to the funds or private key of the validators they are running.

Instead, several Operators need to come to consensus on what to sign to approve any action affecting a Diva validator.

This is done by giving each signer one key-share out of many, which makes the system more reliable and safe. This uses Diva's unique DVT which creates validators through Distributed Key Generation (DKG) to sign duties using BLS threshold signatures.

Operators can only be assigned to operate validators if they are providing sufficient ETH as a bond. This bond serves as a guarantee to align incentives with Stakers. Should the Operator miss any validation duties, this bond is transferred to Stakers as compensation for their any potential losses.

An Operator performing their validation duties correctly will receive a % of staking rewards.

While Stakers receive the staking yield, Operators receive the same staking yield + a potential distribution from passive stakers.

**This is expected to be much more attractive than passive staking or running a solo validator on Ethereum with 32 ETH.**

With Diva, operators can run their DVTs without advanced server management skills, more flexibility and from only 1 ETH.


### Deployment phases

Diva is currently in Testnet phase to finalize its design decisions. This phase is open to all participants.

Once Diva is ready for Mainnet, it will be rolled out in two phases:

🟢 **In Phase 1**, Stakers will collect 100% of staking rewards, and Operators will be subject to high reliability & security requirements.

💎 **In Phase 2**, Stakers and Operators will split staking rewards, and Operators will be able to operate in a fully trust-minimized manner. We expect that it will Operators will require a minimum of 1 ETH as a bond to operate a validator node. Stakers will be able to use the divETH without trusting any centralized party.


