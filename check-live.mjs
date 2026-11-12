// Live checks against Otari. Costs about $0.03. Run: node check-live.mjs
import { secondOpinion, statsCode } from "./server.mjs";
const B = (process.env.OTARI_BASE_URL || "https://api.otari.ai/api"), H = { Authorization: `Bearer ${process.env.OTARI_API_KEY}`, "Content-Type": "application/json" };
let failed = 0;
const ok = (c, m) => { console.log(c ? "ok  " : "FAIL", m); if (!c) failed++; };

const page = (await (await fetch(`${B}/v1/fetch`, { method: "POST", headers: H, body: JSON.stringify({ url: "https://www.strava.com/legal/privacy" }) })).json()).text;
ok(page?.length > 5000, `Otari fetch read the Strava policy (${page?.length} chars)`);

const run = await (await fetch(`${B}/v1/code/execute`, { method: "POST", headers: H, body: JSON.stringify({ code: statsCode(page + ' "q" \\  '), timeout_seconds: 30 }) })).json();
const stats = run.return_code === 0 ? JSON.parse(run.stdout) : null;
ok(stats?.words > 1000 && stats.grade_level > 5, `sandbox stats ${JSON.stringify(stats)}`);

// The second reader must flag ratings the quote does not support.
const planted = [
  { topic: "Right to delete your data", rating: "bad", check: "verified", quote: "You can restrict or delete much of your information through your account" },
  { topic: "Precise location tracking", rating: "good", check: "verified", quote: "you must grant us permission through your device to track your device's precise location" },
];
const o = await secondOpinion(planted, "Strava", process.env.OTARI_API_KEY);
for (const v of o.verdicts) ok(v.rating !== planted[v.i].rating, `second reader overrules planted "${planted[v.i].rating}" on ${planted[v.i].topic}: ${v.rating}`);
process.exit(failed ? 1 : 0);
