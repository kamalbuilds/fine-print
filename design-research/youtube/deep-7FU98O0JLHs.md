# Turn Claude Into A Design GENIUS In 3 Simple Steps

Chase AI. https://www.youtube.com/watch?v=7FU98O0JLHs
566,831 views, 22:59, uploaded 2026-07-23. Popularity 7.89, teaching 6, combined 6.76 (rank 4 of the kept set).
About a third of it is a tool tour (Impeccable, Taste Skill, Higgsfield MCP, 21st.dev). The parts worth keeping are the prompt structure and the iteration loop. Course plug at the end.

## Techniques, with timestamps

- **1:01 Why output is generic.** "no matter how good the models get ... It'll just change what we consider to be generic." Without references you get "an average regression to the mean output".
- **2:33 Taste library.** Save screenshots of references, then have the agent group them "based on design type" with "the actual vocabulary associated with this design".
- **11:10 Four-part prompt.** "first the aesthetic", "Secondly ... some sort of reference image", "Number three is the intent. What are we building and why?", "lastly, what are some sort of guard rails? What are things we always want it to do? And what are some things we never want it to do?"
- **12:11 Match the feel, not the content.** "we're trying to match the feel. We aren't necessarily trying to match it, you know, contentwise".
- **9:39 Wide net, then narrow.** "cast a very wide net off the bat ... five different versions in five different styles", then "three versions of that style", then pick one and tinker.
- **10:40 Compare on one screen.** "I want to see all my options on one screen at one time."
- **15:46 The ledger variant.** The variant he keeps is "more of a ledger ... this index that scrolls along with us".
- **18:18 Transitions and weight.** "make sure you take a look at the transitions between the hero and the body. It shouldn't just be like a super sudden change."
- **19:50 Tweaks bar.** Have the agent build a live panel for "font size, font type, accent colors, basically any place where you think there's a decision to be made" instead of re-prompting "make it look more premium".

## What applies to Fine Print

- Brief every UI pass with the four parts: aesthetic (document annotation / legal ledger), reference (pull from `design-research/refs`), intent (the reader checks whether a claim is backed by the policy's own words), guard rails (never purple gradients, Inter, card grids, emoji).
- Generate five directions for the diptych and compare them on one page before building. Then make three variants of the winner.
- The ledger with a sticky index he picked suits Fine Print's six findings: a sticky left index of the six claims that tracks scroll.
- A dev-only tweaks bar for the type scale, the axis rule weight and the strike style is cheaper than repeated prompt rounds.
