# Level Up Your Designs with Aligned Grids

Will Paterson. https://www.youtube.com/watch?v=siGaAh_D_GA
187,793 views, 13:28, uploaded 2024-05-08. Popularity 6.91, teaching 7, combined 6.96 (rank 2 of the kept set).
InDesign demo of the Muller-Brockmann method. Sponsor segment (Squarespace) runs 7:08 to 9:10.

## Techniques, with timestamps

- **2:33 Measure first.** "I want to make sure that my column has about seven to nine words on average on each line." Column width comes from the text, not the page.
- **3:34 Leading is the master unit.** "Helvetica new regular in eight points and 11 point leading ... everything is actually based on the leading of our body text."
- **4:34 Baseline = leading.** "make our baseline grid the same as the leading ... an increment not every 12 points but 11 points because that is what our leading is".
- **5:36 Margins are multiples of leading.** "keep that number 11 in our minds cuz that is the main number"; the top margin is "11 * 3 points".
- **9:10 Rows from factors.** Count the baseline lines (48), take its factors, and pick the row and column counts from them ("I'm going to choose number eight and 12").
- **9:40 Gutter = leading.** "we're going to make sure that our gutter is not 12 points, but 11 points, which is our leading size".
- **10:11 Remove the extra gutter.** The grid misaligns by one gutter. You fix it by moving one margin by one leading unit.
- **12:15 Headings snap to the grid.** "times it by two. So, 16 ... change it from regular to medium" keeps headings on the baseline rhythm.

## What applies to Fine Print

- Pick the body leading for the quote text first (for example 16px/24px), then set every vertical gap, gutter and margin to a multiple of 24px. In CSS: one `--lh` custom property, with `gap`, `padding` and `margin` written as `calc(var(--lh) * n)`.
- The quote column should hold 7 to 9 words per line (about 45 to 60ch at body size). That decides the right-hand diptych width.
- The heading for each finding is 2x body size at medium weight, so it sits on the same rhythm as the quote beside it and the two halves of the diptych share baselines.
- Diptych gutter = leading. The claim and the quote read as one unit, separated by exactly one line of air.
