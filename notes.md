Diva is [still under development](roadmap)! More details on the economic model will be posted as they're developed.





1 divETH collateral is an overly safe level coming from 16 key shares per validator * 1 divETH per key share = 16 ETH collateral per validator

this is too high, but its the starting point for the testnet

we'll probably lower it substantially like rocket pool did without issues

lower collateral from operators means better apr and makes it worth it for them to run nodes

on the 500x better uptime, it comes from a rather complex modeling we did on probability of downtime when you only need 11 out of 16 nodes online to sign, which is our model

for it we analyzed mean downtime %s

and we modeled the chance to be offline with 11/16 dvt sets. node the log scale

do you think we should explain this better in the DVT section? if so, what would help? 🙂

withdrawal address will be always the diva SC, so it can redistribute rewards. but we're aiming to make it immutable to prevent governance attacks

on validator ejection, it will be anytime that somebody is below the collateral levels by a safety margin. we can soft eject via cryptographic consensus or via SC ejections (with eip7002)

[ graphs for downtime and DVT  ]




Nice additions. Something that I found very helpful and compelling when RP was releasing their LEB8s was this side by side calculation: https://docs.rocketpool.net/guides/atlas/lebs.html#rewards

Very simple, and I'd recommend formatting it slightly better lol, but something like this where you calculate the rewards for someone who has, for example, 32 eth, if they use it to run 1 solo validator, vs 32 key shares on Diva.  What is the ultimate annual return for running on Diva, compared to the ~3.64% for solo staking (as claimed on the launchpad https://launchpad.ethereum.org/en/)?


Makes sense - I did this calculation when I was reading too.  I agree that it makes sense to follow a conservative path for now, and one trodden by Rocket Pool already.  Small feedback here is making that decision making process explicit somewhere in the docs would be helpful, so the reader knows how you arrived there, rather than having to infer for themselves

Awesome data!  I think having a short section in the DVT section, explaining basically exactly what you did here (can include graphs if you're comfortable) would go a long way.  The claim of 500x improvement without the data to justify it makes me skeptical, but hearing this makes it very compelling



Ver chat con Samitier Kleros

