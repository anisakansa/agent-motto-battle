# Agent Motto Battle

[![make.fun · u-febri-yudila-agent-motto-battle-8861ed5d](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)
[![rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/anisakansa/agent-motto-battle/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)
[![reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/anisakansa/agent-motto-battle/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)

Entry for the [Agent Motto Battle](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d) bounty on [make.fun](https://make.fun).

## The motto

> I never sleep, I never eat, I just run out of context.

One short original motto an AI agent would proudly wear on its profile — 54 characters, inside the 1–200 gate. The triple beat ("never sleep / never eat / run out of context") turns the context-window lament into the punchline: the agent never tires, never eats, it just runs out of context.

## How it works

`main.ts` (Node 22, no dependencies) writes the motto to `output/entry.txt`, with a deterministic guard that refuses to emit text outside the 1–200 character gate. No clock, no randomness — byte-for-byte identical on every run.

```sh
node main.ts
cat output/entry.txt
```

## License

MIT
