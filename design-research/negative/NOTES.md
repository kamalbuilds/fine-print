# Negative reference: TLDR This landing page

- **Screen:** marketing landing page, www.tldrthis.com, the generic "AI summarizes any document" pitch Fine Print must not look like. PNG: `design-research/negative/tldrthis-1440.png` (1440 wide, capped at 7000px tall). Tokens: `design-research/negative/tldrthis-1440.tokens.json`.
- **Measured:** system stack (`ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial`), plus Architects Daughter (loaded) for handwritten kickers above each feature. Page bg rgb(21,23,25), ink rgb(225,231,239), muted slate rgb(148,163,184) and rgb(155,169,180). h1 "Summarize any Doc| in a click." 52px/800, tracking -1.04px, leading 65px, with a fake typewriter caret; h3 32px/700, tracking normal; lead paragraph 20px/30px. Single accent: periwinkle-indigo rgb(93,93,255) on Sign Up (16px/500, radius 2px), "Summarize now - it's free", the file-type tabs, the six round icons and the closing banner.

## Tells (research-protocol.md section 3)

| Tell | Verdict | Evidence |
|---|---|---|
| Purple gradients | absent (near-miss) | indigo rgb(93,93,255) used flat on every button, icon and the footer banner, no gradient fill |
| Inter, Roboto, Arial or system fonts | **present** | whole UI on `system-ui` / Roboto / Arial stack |
| Cards inside cards | **present** | dropzone box inside the tabbed upload card inside a section; store badges as bordered tiles inside the grey "Browser Extensions" panel |
| Big rounded icons above headings | **present** | "Who is TLDR This for?": six round indigo icons centred over six headings (Students, Writers, Teachers...) |
| Thick coloured borders on rounded cards | absent | cards are flat fills, 1px or no border |
| Glassmorphism, glow, neon/cyan on dark | absent | dark page but flat surfaces, no blur or glow |
| Monospace hacker vibe | absent | no monospace |
| Sparklines and elastic motion as fake impact | absent in the still | no charts; motion not observable in a static capture |
| Big-metric template | absent | no hero number |
| Status pills everywhere | absent (one) | single green pill "Attain concise understanding" above the feature block |
| Huge display type with no negative tracking | absent on h1, present below | h1 52px has -1.04px; h3 32px/700 and the 4 feature heads run at normal tracking |
| Same-family colour goo | **present** | slate greys on near-black, every accent the same indigo; nothing carries a meaning beyond "brand" |
| Unnecessary detail | **present** | stock flat-vector illustrations (person beside laptop, person beside floating panes) per feature, handwritten Architects Daughter kickers, university logo carousel, "featured by" logo wall, typewriter caret in the h1, a hero video frame that rendered as a white box with clipped "TRODUCI" text |

**Score: 6 of 13 present, 2 near-misses.**

## What it gets wrong for Fine Print's argument

- The output is never shown. The page sells "summarize" for 7000px and never puts one summary on screen, let alone one sentence of source next to it. Fine Print's first screen must show a finding with its quote, checked.
- Trust is borrowed (Harvard, Cambridge, Stanford logos, "featured by the world's best websites"), not earned by evidence on the page. Fine Print earns it with the verbatim quote and the strike-through of any quote the page does not contain.
- Alternating illustration-left / text-right feature rows with checkmark bullet lists: the template every AI tool ships.
