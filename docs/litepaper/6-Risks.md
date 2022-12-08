# Risks

As any software Diva's has a different risk that are inherent to the technologies used. 

- Signers not available. Watchers
- Network delays. TBD
- Double signing. Slashing protection
- Wrong signing. Watchers
- MEV relayers not available.Builder is execution client from aggregator

## Pending
- Top up validators

## Security concerns


###  1. Node Operator > 66% of the validators

Operators are bonded so their funds are at stake.
Cost of attack: 50% * TVL. If Diva has a 2% market share, ~$182m at today's ETH price
Incentives: Attacking Ethereum with leverage?

What can happen?

Since each Ethereum validator is independent of the others, this case is similar to taking control of a single validator. To achieve this goal, a malevolent actor must control the majority of operators that are part of the validator.

In that case:

- The majority of the collateral assigned to the validator must have been deposited by the malevolent actor.
- The “collateral efficiency curve” punishes the creation of multiple operators’ IDs, thus making the malevolent actor deposit around 50% higher collateral than what would have been necessary for the same amount of signers in different validators.
- Diva limit itself to XX% of the validation in Ethereum to prevent an attack to the network. 

**Withdrawals, slashing…**

Given that validators are independent, controlling 66% of validators does not represent any threat, nor it changes the control of the remaining 34% of validators in diva.

If 66% of diva validators trigger slashing conditions, the collateral affected will be the one associated with the operators of the sets that control those validators.

**Griefing attack**

You take funds on leverage (which you can do on-chain) and then you prove that you can control these validators and cause damages 

Worst-case possible attack is when 33% **IN TOTAL** (Diva + Rocket + others)

One might be able to do it with only 7% of all ETH

One thing to explore is slashing protection by using an SGX

Could also have a multisign in the secure enclaves. This entity just needs to do a remote signing

We'll need solutions from every angle: protocol, applications.

### 2. Controls > 50% of DIVA governance tokens


### 3. Sync Committee risk 

Sync Committee Membership offers Rewards… and Penalties

What Are Sync Committees?

A sync committee is a group of 512 validators, randomly assigned by the Ethereum 2.0 network. A new committee is chosen every 256 epochs, roughly 27 hours.

This committee continually signs block headers for each new slot in the beacon chain. A light client can trust these headers to represent accurate and validated blocks.

The network rewards Sync committee members for consistent singing of the block headers. This will be 2/64 of the total perfect validator rewards. The network will penalise validators a similar amount if they fail to fulfil their duties.

If you’re selected as a committee member, you’ll get a 27-hour notice period. This should give you enough time to cancel any planned maintenance or downtime.

### 4. Buy key shares
An attacker can wait for the Operators-queue to be empty so he can register n (from n/m committee threshold) to control the validator that diva will create

That makes the cost attack to Ethereum cheaper. 

The cost now would be:

`(n/m) * 50% * TVL`

Resulting in a <50% cost

We envision two alternatives involving raising the operators-waiting-pool size.

- Adding existing operators to the operators-pool

Operators that are already bonded could be incentivized to be available again to participate in a new validator set, in order to always have a set of operators and therefore ensure that the pool is never empty and an attacker cannot control it just depositing whatever is need to by only n of m key shares

- Keeping the operators-pool of a determined size

If the operators pool has always a minimum, the chances for an attacker to control a validator paying only whatever is needed to by n of m key shares are drastically minimized. As downside, the bond of those operators will be idle in terms of economic performance
