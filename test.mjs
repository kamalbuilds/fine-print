import { checkQuote, locateQuote, inContext } from "./server.mjs";
const page = "## Sharing\nWe **do not sell** your personal\ninformation to third parties. We may share data with “service providers” — such as hosting. Data is kept for 30 days after you close your account.";
const cases = [
  ["We do not sell your personal information to third parties.", "verified", "verbatim across markdown + newline"],
  ["We may share data with \"service providers\" - such as hosting.", "verified", "curly quotes and dashes normalised"],
  ["We do not sell your personal information... Data is kept for 30 days after you close your account.", "excerpt", "ellipsis joins two verbatim pieces"],
  ["Data is kept for 30 days after you close your account... We do not sell your personal information", "not_found", "pieces out of order"],
  ["We do not sell your personal information... Data is kept for 90 days after you close your account.", "not_found", "one piece tampered"],
  ["We never sell or share your personal information.", "not_found", "paraphrase"],
  ["We sell your personal information to third parties.", "not_found", "meaning flipped"],
  ["We do not sell... to", "not_found", "pieces too short to mean anything"],
  ["", "empty", "empty quote"],
];
let failed = 0;
for (const [q, want, name] of cases) {
  const got = checkQuote(q, page);
  console.log(got === want ? "ok  " : "FAIL", name, got === want ? "" : `(got ${got}, want ${want})`);
  if (got !== want) failed++;
}
const span = locateQuote("We do not sell your personal information to third parties.", page);
const ctx = inContext(page, span.spans, 30);
const spanOk = page.slice(span.start, span.end) === "We **do not sell** your personal\ninformation to third parties" && ctx.filter((x) => x.mark).map((x) => x.text).join("|") === "We do not sell your personal information to third parties";
console.log(spanOk ? "ok  " : "FAIL", "quote located in the original text and shown in context");
if (!spanOk) failed++;
// An excerpt marks only its quoted pieces, never the words it skipped.
const ex = locateQuote("We do not sell your personal... Data is kept for 30 days after you close your account.", page);
const marked = inContext(page, ex.spans).filter((x) => x.mark).map((x) => x.text).join(" ");
const exOk = ex.status === "excerpt" && ex.spans.length === 2 && !marked.includes("service providers") && marked.includes("Data is kept for 30 days");
console.log(exOk ? "ok  " : "FAIL", "excerpt highlights only the quoted pieces");
if (!exOk) failed++;
// Hyphens and spaces are the same words; a changed word still fails.
const hy = "We will process your request within one-month. In some cases it takes 90 days.";
const hyOk = checkQuote("We will process your request within one month.", hy) === "verified" && checkQuote("We will process your request within one week.", hy) === "not_found";
console.log(hyOk ? "ok  " : "FAIL", "hyphen and space match, a changed word does not");
if (!hyOk) failed++;
process.exit(failed ? 1 : 0);
