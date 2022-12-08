# Economic model

## Operator bond
Operators maintain the infrastructure for the distributed validators, which will generate rewards for them when running properly and penalties if they malfunction. Due to the risk of slashing, Diva requires operators to provide one collateral unit in ETH per validator share (each key share represents a validator share). 

Diva smart contracts are receiving ETH and minting divETH for stakers. At the same time, they are receiving ETH as bond and managing registrations from operators. Whenever 16 ETH from stakers and 16 ETH from operators are available, a new distributed validator will be raised. The process of creating a new DVT will start and a new validator will be registered on Ethereum. The private key of the validator is splitted between [x from x of y] key-shares that will be shared across the signers on that validator set. This is how the private key remains unknown. It requires a BLS threshold for being used and signing duties; BLS threshold of [x of y] signers in the validation set is required to sign duties in behalf of the distributed validator's private key. For security purposes a few measures has been put in place. Users will not notice, those measures are transparent for them:

Withdrawal address for all validators will be Diva's, this way operators are bonded and stakers's fund are not at risk.
Deposit to Ethereum to register a validator is done in two transactions, 1 ETH first and then 32 ETH to prevent front-running.
After the process is completed and the validator status is "Active" the distributed validator will start to perform the validator duties as any other validator in Ethereum. And will start to receive rewards.

<!-- $$
\alpha_o(n_i) = \alpha_{\Xi} \cdot \frac{k+C}{c(n_i)} \cdot p(n_i)
$$ -->

<!-- $$
\alpha_o(n_i) = \alpha_{\Xi} \cdot \frac{k+C}{c(n_i)}
$$ -->

<!-- $$
r_o = \frac{\alpha_{\Xi} \cdot (k+C)}{n_i} \cdot \sum_{n_i=0}^{N-1} p(n_i)
$$ -->

<!-- $$
r_o = r_b + r_c = (\alpha_{\Xi} + \alpha_{c}) \cdot c(n_i) =  \alpha_{\Xi} \cdot c(n_i) + \frac{(v_s-v_o)}{G} 
$$ -->


<!-- $$
\alpha_{c} = \frac{(v_s-v_o)}{G \cdot c(n_i)} =
\frac{V - v_o  -v_o}{G}
$$ -->

<!-- $$
\alpha_{c} = \frac{(v_s-v_o)}{G \cdot c(n_i)} 
$$

$$
\alpha_{c} = \frac{(v_s-v_o)}{G \cdot c(n_i)} =
\frac{V - v_o  -v_o}{G}
$$ -->

<!-- We define extra operator's rewards derived from the discount of the collateral curve as:

$$
r_c = \frac{(v_s-v_o)}{G} \cdot c(n_i)
$$ -->


<!-- Base Ethereum rewards:

$$
r_b = \alpha_{\Xi} \cdot c(n_i)
$$ -->


<!-- $$
\alpha_{c} \in \left[ \frac{V}{G \cdot (k+C)} -2\right] = \left[ \frac{32}{16 \cdot (0.5)} -2\right] = \frac{(24-8)}{16} = 8/16 = 0.5
$$ -->

<!-- $$
r = \frac{v_s}{v_o} 
$$ -->


<!-- $$
p = d_s + d_o
$$ -->



## Rewards

### Source of rewards
The staking rewards come from both layers, consensus and execution. Execution rewards can be significantly higher because of the use of MEV. When a validator is proposing a block, it can be done in such a way to maximize the value by creating a customized block. To help with it the protocol enables the use of MEV-boost.

- **Consensus rewards**
The rewards of the consensus layer come determined by the Ethereum protocol specification. They depend on the number of active validators. The rewards are locked by the Ethereum protocol under Diva smart contracts. Once available they will be used to redeem the divETH for ETH or by opt-in be used as auto-compounding.

- **Execution rewards**
Ethereum protocol has some PBS features that enables the use of MEV-boost. That lets the distributed validator to outsource the building of the block and just propose it. When one of their signers is an aggregator of a distributed validator that is meant to propose a block, the build of the block will not be requested to the execution client but to the MEV-boost client instead. MEV-boost client is installed and will manage the block building using an on-chain list of relayers that the DAO maintains. Every signer checks that the fee recipient is an address that belongs to one of the relayers in the list before signing.

There is an additional mechanism to ensure the resiliency of Diva and therefore Ethereum for proposing blocks. That lets Diva benefits from MEV rewards whilst is tolerant to centralization issues.
In the event that all the admitted relayers by the DAO are not available and a distributed validator is meant to propose a block, this will build the block locally with its own execution client.


### How rewards are handled 

The reward allocation can use auto-compounding that maximizes yield. For Execution rewards, operators are able to choose whether to claim it or keep it as collateral, until withdrawals are enabled:


|| Stakers  | Operators |
|-|------------- | ------------- |
|**Execution rewards**| 50% - Will be restaked  | 50% - Will be claimed OR Will be restaked
|**Consensus rewards**| 50% - Will be restaked  | 50% - Will be issued as divETH |



- **Operators consensus rewards**
Consensus rewards are blocked in the consensus layer and cannot be withdrawn at the moment. However operator do receive the rewards that exceed their bond (32 ETH) in divETH.

- **Operators execution rewards**
Operators can choose to have the rewards from the execution layer ready to be claimed or used by the protocol itself to be auto-compounded.

In case they choose to claim them, they will go to a smoothing pool as this rewards are very variable. This way a smooth distribution of MEV rewards across operators is assured. But if they prefer to let the yield to be auto-compounding, the protocol will make  stake them again again.



### Rewards distribution

The Diva DAO decides how to distribute staking rewards for the common good of the network:
- 90-100% go to Stakers.
- The rest is relatively distributed between:
    - Node Operators.
    - Insurance pool.
    - Incentives programs for Stakers, Node Operators or Defi Pools.
    - The rest of unallocated funds are saved to the DAO treasury.

The exact parameters are decided via on-chain governance votes for the DAO.


Define $\beta_i^{DAO}$ distribution for:

         function REWARDS distribution %
         - operator.
         -insurance pool.
         -incentives.
         -DAO treasury.


## Penalties

### Bonded collateral

`FUNCTIONS`

As any other validator, a distributed validator has different duties to perform and different states in Ethereum. The working state is *Active*, if otherwise we will consider it as *non-Active*. There are many ways to have a validator as *non-Active*, we will treat them all as it follows:
In that moment the smart contracts detects one of the Diva distributed validator is *non-active*, it will handle the event and will initiate a process for each one of the signer (the aggregator is considered a signer as well) in that validation set. Upon exiting Ethereum the smart contracts will receive the deposited ETH from Ethereum. Those ETH will burn the same quantity in divEth. Then, the ETH will be transferred back to operators. But there are some impacts on that amount. Firstly the protocol applies will receive the percentage that DAO set. Then, depending on its past distribute validator performance some penalty or compensation could apply.

Periodically, as rebase goes different mechanism are activated:
    
    FUNCTIONS:
    - rebase mechanism, and timing.
    - Smart Contracts detects validator events when:
        - block is missed (by proofs when rebasing) -  validator set does not receive proportional rewards compared to the case in which it had produced a block.
        - block produced with MEV - reward transaction coming from a relayer.
        - block produced without MEV (by proof to check who proposed the block).

    - Adjust balances by:
        - Execution rewards state.
        - Consensus rewards state.
        - Weigh its validator performance.

    - MEV protection mechanism;
        - Penalty to DV that produced block without MEV when FUNCTION (no all N blocks around are using MEV).

    ** OPERATOR vs SIGNER COLLATERAL

## Incentivized processes
- Watchers

### Distributed validator creation

### Distributed validator exit
Incentives for EXIT

### Validator key resharing
 Resharing model

### Incentivized exit

## Tokenomics

Economic model & balance of the protocol with DIVA token, rewards distribution, etc.

`FUNCTIONS` 

![tokenomics](img/tokenomics_schema.png)

### Economic security guarantees

### DAO governance

The governance token DIVA allows community members to participate and govern the protocol. It gives voting power for the DAO. Although Diva community members can contribute openly, the governance tokens gives rights to make proposals that other holders will vote.

Apart from leading the protocol in terms of govern, $Diva are required to set some key parameters the protocol relays on. Overall:

- Raise and vote governance proposals.
 - Protocol settings.
    - Rewards distribution to Ethereum yield to protocol .
    - fee applied to Stakers.
    - Commission to Operators.
    - Funds to incentive.
    - Funds to DAO treasury.
    - MEV-boost relayers on-chain list.
    - `[SOME OF THE FUNCTIONS PARAMS]`.

In addition to the above, $Diva Governance tokens are also present in the following:

- As collateral requirements for operators `MODEL REQUIRED`.
- As incentive for stakers, a relative amount of the ETH stakers will be given in %DIVA **on top** of the divEth token.

