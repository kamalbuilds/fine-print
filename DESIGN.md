# Fine Print design system

Hallmark custom theme, editorial genre. Vibe: "a proofreader's marked-up sheet".
Axes: paper band light, cool near-white (not cream: a warm off-white is the reflex AI surface) / display style grotesk-sans with a serif document voice / accent warm-yellow (highlighter).

## Art direction

A privacy policy, marked up by a proofreader. The app speaks in a plain grotesk; the policy speaks in a serif,
and every claim is pinned to the exact sentence in the policy, shown in its place on the page. A highlighter
stroke means the sentence is really there. A red strike means it is not.

Structure stolen from real screens (see `design-research/REFS.md`):
- Genius and Tufte CSS: the explanation sits beside the words it explains, on the same line.
- Full Fact: claim and verdict side by side.
- PrivacySpy: findings are questions a person would ask, answer under the question.
- Wikipedia infobox: provenance is a ruled key/value list (source, read at, length), not prose.
- GitHub diff: struck text in red means "this is not in the source".

## Type

- **Schibsted Grotesk** (400/500/700), the app voice: headings, labels, answers, buttons. Chosen because it reads
  like a newspaper's own grotesk, plain and civic, and is not Inter.
- **Newsreader** (400, optical sizes), the document voice: only for words copied from a policy.
- **IBM Plex Mono** (400/500), only for numbers, ids, costs, URLs, timestamps. Tabular figures.

Scale (px): 12 / 14 / 16 / 18 / 22 / 30 / 44 / 64. Display 64 at -0.03em, 44 at -0.02em. Micro labels 12px
uppercase +0.06em. Body 16/1.55. Quotes 18/1.6 Newsreader. No italic headings.

## Colour (OKLCH, 70/20/10)

| Token | Value | Job |
|---|---|---|
| `--paper` | oklch(98.7% 0.003 250) | page |
| `--surface` | oklch(95.9% 0.005 250) | the policy's own text, rails |
| `--ink` | oklch(20% 0.012 260) | text |
| `--muted` | oklch(46% 0.012 260) | secondary text |
| `--rule` | oklch(88% 0.006 250) | hairlines |
| `--mark` | oklch(90% 0.15 98) | highlighter: a quote found on the page. The one accent. |
| `--bad` | oklch(51% 0.19 27) | works against you; quote not on the page |
| `--mixed` | oklch(58% 0.13 65) | conditional |
| `--good` | oklch(47% 0.11 155) | protects you |
| `--focus` | oklch(20% 0.012 260) | focus ring, ink |

Semantic colours only carry meaning; ratings always pair colour with a word and a shape (● bad, ◐ mixed, ○ good, · silent).

## Space, shape, depth

8px grid: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96. Radius 2px on inputs and buttons, 0 elsewhere. No shadows, no cards:
structure is hairline rules. Content measure 64ch for prose. Desktop: 12 columns, findings use 5 + 7.

## Motion

One orchestrated moment: when a result arrives, each finding settles in (opacity + 8px rise, 40ms stagger), and the
highlighter sweeps across each verified quote (background-size 0 to 100%, 600ms, ease-out). A quote not on the page
gets its strike drawn left to right. Live steps tick in as Otari reports tool calls. `prefers-reduced-motion`: all
of it off, final state shown.

## Refusals

No gradients, no glow, no glass, no cards inside cards, no big rounded icons, no big-metric template, no pills for
everything, no stock illustrations, no logo walls, no Inter/Roboto/system fonts, no emoji, no fake browser chrome,
no score out of 10 we did not compute.
