# Parity: what direct competitors show on the equivalent screen

Columns: ToS;DR service page, PrivacySpy product page, App Store privacy label. Last column is Fine Print.

| Element | ToS;DR | PrivacySpy | App Store label | Fine Print |
|---|---|---|---|---|
| Product name + logo in header | yes, logo + name | yes, logo 48px + name 36px | yes, icon + name 34px | **build**: name + favicon of the policy's domain (Google s2 favicon service is an external call; use the domain wordmark in type instead, no third-party request) |
| One overall verdict (grade / score) | Grade E chip | 3.2/10, red | none | **build**: a count-based verdict, "4 of 6 bad or mixed", derived from the six ratings; no invented 0-10 score |
| Severity per item | row colour | coloured dot + n/10 | none | **build**: rating word + colour + shape, never colour alone |
| Question-shaped rows | no, statements | yes | no, categories | **have**: six fixed topics; reword as questions a user asks |
| Answer under each question | statement only | grey answer line | category list | **have**: the plain sentence |
| Evidence on the page | behind icons, 2 clicks | "Source #1" link to whole policy | link to policy | **have**: the exact sentence beside each claim, the core edge |
| Evidence verified | no | no | no (self-reported) | **have**: re-fetched and matched, struck through if absent |
| Source / provenance rail | no | right rail: Last Updated, Sources, Contributors | "The developer indicated..." | **build**: right rail: policy URL, read at (time), page length, what the model searched and fetched |
| Freshness | unknown | "Last Updated May 26, 2021" | developer-set | **have**: read live on every request; show the time it was read |
| Group headings | "Points" | Handling / Transparency / Collection | three consequence boxes | **skip**, six items do not need groups; the consequence split is carried by the rating |
| Search / pick a product | site search in nav | search box in nav "press /" | store search | **have**: the input is the primary action; add example chips |
| Expand for detail | per-row icons | chevrons | "Learn more" | **skip**, nothing is hidden: the quote is already shown |
| Updates / history timeline | no | yes, breaches by year | "What's New" | **skip**, out of scope for a live read; a judge accepts this, it is a different product (news) |
| Cost / how it was produced | no | "How we calculate ratings" link | no | **build**: the gateway panel: model, provider, fallback, tokens, cost, request id |
| Loading state | n/a (static) | n/a (static) | n/a | **build**: live steps from the stream: searching "<query>", reading <url>, checking quotes |
| Error / not found state | 404 page | "page not found" | n/a | **build**: plain error in the page voice, with a retry action |
