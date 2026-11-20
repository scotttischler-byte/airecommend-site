// Known Visitor — first-party, consent-aware visitor identification. Multi-client.
// Routes:
//   GET  /v.js?s=SITE_KEY        tracking snippet
//   POST /api/collect            beacon from snippet (public, site-key scoped)
//   GET  /dash?s=SITE_KEY&t=TOK  client dashboard (token protected)
//   GET  /admin?key=ADMIN_KEY    create clients + copy snippets (phone friendly)
//   POST /api/admin/site         create a client site (Bearer ADMIN_KEY)
// Storage: D1 binding DB. Secret: ADMIN_KEY.

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS sites (site TEXT PRIMARY KEY, name TEXT, domain TEXT, token TEXT, alert_webhook TEXT, created TEXT)`,
  `CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, site TEXT NOT NULL, ts TEXT NOT NULL, type TEXT NOT NULL, vid TEXT, sid TEXT,
    path TEXT, title TEXT, referrer TEXT, utm_source TEXT, utm_medium TEXT, utm_campaign TEXT,
    country TEXT, region TEXT, city TEXT, asn TEXT, org TEXT, org_kind TEXT, ip_hash TEXT, ua TEXT, device TEXT, is_bot INTEGER DEFAULT 0, seconds INTEGER, scroll INTEGER)`,
  `CREATE INDEX IF NOT EXISTS ev_site_ts ON events(site, ts)`,
  `CREATE INDEX IF NOT EXISTS ev_site_vid ON events(site, vid)`,
  `CREATE TABLE IF NOT EXISTS people (site TEXT, vid TEXT, name TEXT, email TEXT, phone TEXT, source TEXT, first_seen TEXT, updated TEXT, PRIMARY KEY (site, vid))`,
  `CREATE TABLE IF NOT EXISTS leads (id INTEGER PRIMARY KEY AUTOINCREMENT, ts TEXT, name TEXT, email TEXT, website TEXT, message TEXT, ip_hash TEXT)`,
  `CREATE TABLE IF NOT EXISTS settings (k TEXT PRIMARY KEY, v TEXT)`,
  `CREATE TABLE IF NOT EXISTS alerts (site TEXT, vid TEXT, day TEXT, PRIMARY KEY (site, vid, day))`
];
async function ensure(db) { if (!globalThis.__kv_schema) { await db.batch(SCHEMA.map(s => db.prepare(s))); globalThis.__kv_schema = 1; } }

const json = (o, status = 200, h = {}) => new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json", "cache-control": "no-store", ...h } });
const s = (v, n) => v == null ? null : String(v).slice(0, n);
const num = v => { const n = Number(v); return Number.isFinite(n) ? Math.round(n) : null; };
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const rand = (n = 24) => [...crypto.getRandomValues(new Uint8Array(n))].map(b => "abcdefghijkmnpqrstuvwxyz23456789"[b % 32]).join("");
async function sha(x) { const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(x)); return [...new Uint8Array(b)].map(v => v.toString(16).padStart(2, "0")).join("").slice(0, 32); }
const device = (ua = "") => /Mobi|Android|iPhone/.test(ua) ? "mobile" : /iPad|Tablet/.test(ua) ? "tablet" : "desktop";
const BOT = /bot|crawl|spider|headless|preview|lighthouse|monitor|curl|python-requests|gptbot|claudebot|perplexity/i;
// Network owners that are consumer ISPs, mobile carriers, hosting/VPN/cloud — NOT a business we can name.
const NOT_COMPANY = /comcast|xfinity|verizon|at&t|att services|spectrum|charter|cox comm|t-mobile|sprint|centurylink|lumen|frontier|google fiber|cloudflare|amazon|aws|google llc|microsoft|digitalocean|ovh|hetzner|linode|akamai|vpn|mobile|wireless|telecom|broadband|cable|internet|communications|hosting|cloud|server|proxy|fastly|oracle|alibaba|tencent|starlink|windstream|optimum|altice|mediacom|brightspeed|consolidated|zayo|level 3|cogent|telus|rogers|bell canada|shaw|vodafone|orange|telefonica|deutsche telekom|bt group|sky uk|virgin media|ntt|kddi|china (telecom|unicom|mobile)/i;
const KEY_PAGES = /pric|contact|book|demo|quote|schedule|checkout|buy|apply|get-started|signup|sign-up|consult|franchise/i;

// ---------------------------------------------------------------- snippet
function snippet(site, origin) {
  return `(function(){var S=${JSON.stringify(site)},E=${JSON.stringify(origin)},d=document,w=window,n=navigator,sc=d.currentScript;
if(w.KnownVisitor)return;
var req=sc&&sc.getAttribute("data-consent")==="required",banner=sc&&sc.getAttribute("data-banner")==="true";
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){}}
function ss(k,v){try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v)}catch(e){}}
function rid(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36)}
var optOut=n.globalPrivacyControl===true||n.doNotTrack==="1"||ls("kv_c")==="0";
var vid=null,sid=null,t0=Date.now(),maxScroll=0,left=false;
function allowed(){return !optOut&&(!req||ls("kv_c")==="1")}
function ids(){if(!vid){vid=ls("kv_v");if(!vid){vid=rid();ls("kv_v",vid)}}if(!sid){sid=ss("kv_s");if(!sid){sid=rid();ss("kv_s",sid)}}}
function base(type,extra){var p=new URLSearchParams(location.search),o={type:type,vid:vid,sid:sid,path:location.pathname,title:d.title,ref:d.referrer,
 utm_source:p.get("utm_source"),utm_medium:p.get("utm_medium"),utm_campaign:p.get("utm_campaign")};for(var k in extra)o[k]=extra[k];return o}
function send(type,extra){if(!allowed())return;ids();var body=JSON.stringify({s:S,events:[base(type,extra||{})]});
 try{fetch(E+"/api/collect",{method:"POST",body:body,keepalive:true,headers:{"content-type":"text/plain"}})}catch(e){}}
function view(){t0=Date.now();maxScroll=0;left=false;send("view")}
function leave(){if(left)return;left=true;send("leave",{seconds:Math.round((Date.now()-t0)/1000),scroll:maxScroll})}
w.addEventListener("scroll",function(){var h=d.documentElement.scrollHeight-w.innerHeight;if(h>0){var p=Math.round(100*w.scrollY/h);if(p>maxScroll)maxScroll=Math.min(100,p)}},{passive:true});
d.addEventListener("visibilitychange",function(){if(d.visibilityState==="hidden")leave()});
w.addEventListener("pagehide",leave);
["pushState","replaceState"].forEach(function(f){var o=history[f];history[f]=function(){leave();var r=o.apply(this,arguments);setTimeout(view,0);return r}});
w.addEventListener("popstate",function(){leave();setTimeout(view,0)});
// Identification ONLY when the person submits a form themselves (their action = consent to be contacted).
d.addEventListener("submit",function(ev){try{var f=ev.target,em=f.querySelector('input[type=email],input[name*=email i]'),
 nm=f.querySelector('input[name*=name i],input[name*=first i]'),ph=f.querySelector('input[type=tel],input[name*=phone i]');
 if(em&&em.value)KnownVisitor.identify({email:em.value,name:nm&&nm.value,phone:ph&&ph.value,source:"form"})}catch(e){}},true);
w.KnownVisitor={
 identify:function(p){if(!allowed()||!p)return;ids();try{fetch(E+"/api/collect",{method:"POST",keepalive:true,headers:{"content-type":"text/plain"},
  body:JSON.stringify({s:S,events:[base("identify",{detail:{name:p.name,email:p.email,phone:p.phone,source:p.source||"api"}})]})})}catch(e){}},
 consent:function(yes){ls("kv_c",yes?"1":"0");optOut=!yes;if(yes){view()}},
 track:function(name){send("event",{detail:{name:name}})}};
function bar(){if(ls("kv_c")!==null||optOut)return;var b=d.createElement("div");
 b.setAttribute("style","position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483647;background:#111;color:#fff;font:14px/1.4 system-ui,sans-serif;padding:14px 16px;border-radius:10px;display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap");
 b.innerHTML='<span>We use privacy-friendly analytics to understand which pages help visitors. OK with you?</span><span><button id="kvn" style="margin-right:8px;padding:8px 14px;border-radius:8px;border:1px solid #666;background:transparent;color:#fff">No thanks</button><button id="kvy" style="padding:8px 14px;border-radius:8px;border:0;background:#fff;color:#111;font-weight:600">Accept</button></span>';
 d.body.appendChild(b);b.querySelector("#kvy").onclick=function(){KnownVisitor.consent(true);b.remove()};b.querySelector("#kvn").onclick=function(){KnownVisitor.consent(false);b.remove()}}
if(allowed())view();
if(banner||req){if(d.body)bar();else d.addEventListener("DOMContentLoaded",bar)}
})();`;
}

// ---------------------------------------------------------------- collector
function corsHeaders() { return { "access-control-allow-origin": "*", "access-control-allow-methods": "GET,POST,OPTIONS", "access-control-allow-headers": "content-type" }; }

async function collect(request, env, ctx) {
  let b; try { b = JSON.parse(await request.text()); } catch { return json({ error: "bad json" }, 400, corsHeaders()); }
  await ensure(env.DB);
  const site = await env.DB.prepare(`SELECT * FROM sites WHERE site=?`).bind(s(b.s, 40)).first();
  if (!site) return json({ error: "unknown site" }, 404, corsHeaders());
  const origin = request.headers.get("origin") || "";
  if (site.domain && origin) { let h = ""; try { h = new URL(origin).hostname; } catch { } const dom = site.domain.replace(/^www\./, ""); if (!(h === dom || h.endsWith("." + dom))) return json({ error: "origin not allowed" }, 403, corsHeaders()); }
  const cf = request.cf || {}, ua = request.headers.get("user-agent") || "", ip = request.headers.get("cf-connecting-ip") || "";
  const ip_hash = ip ? await sha(ip + "|" + site.site) : null;
  const org = cf.asOrganization || null, kind = org ? (NOT_COMPANY.test(org) ? "isp" : "company") : "unknown";
  const bot = BOT.test(ua) ? 1 : 0, now = new Date().toISOString(), day = now.slice(0, 10);
  const stmts = [];
  for (const e of (Array.isArray(b.events) ? b.events : []).slice(0, 20)) {
    const type = s(e.type, 20) || "view";
    stmts.push(env.DB.prepare(`INSERT INTO events (site,ts,type,vid,sid,path,title,referrer,utm_source,utm_medium,utm_campaign,country,region,city,asn,org,org_kind,ip_hash,ua,device,is_bot,seconds,scroll)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).bind(site.site, now, type, s(e.vid, 40), s(e.sid, 40), s(e.path, 300), s(e.title, 200), s(e.ref, 400), s(e.utm_source, 100), s(e.utm_medium, 100), s(e.utm_campaign, 100),
      cf.country || null, cf.region || null, cf.city || null, cf.asn ? String(cf.asn) : null, org, kind, ip_hash, ua.slice(0, 250), device(ua), bot, num(e.seconds), num(e.scroll)));
    if (type === "identify" && e.vid && e.detail && !bot) {
      const d = e.detail;
      stmts.push(env.DB.prepare(`INSERT INTO people (site,vid,name,email,phone,source,first_seen,updated) VALUES (?,?,?,?,?,?,?,?)
        ON CONFLICT(site,vid) DO UPDATE SET name=COALESCE(excluded.name,name), email=COALESCE(excluded.email,email), phone=COALESCE(excluded.phone,phone), source=excluded.source, updated=excluded.updated`)
        .bind(site.site, s(e.vid, 40), s(d.name, 120), s(d.email, 200), s(d.phone, 40), s(d.source, 40), now, now));
      ctx.waitUntil(alert(env, site, `New identified visitor: ${s(d.name, 80) || ""} ${s(d.email, 120) || ""} ${s(d.phone, 40) || ""}`.trim(), e.vid, day + "-id"));
    }
  }
  if (stmts.length) await env.DB.batch(stmts);
  // Hot-visitor alert: a real (non-bot) visitor who hits a high-intent page, once per visitor per day.
  const first = (b.events || [])[0];
  if (first && !bot && first.type === "view" && first.vid && KEY_PAGES.test(first.path || "")) {
    const who = kind === "company" ? org : [cf.city, cf.region].filter(Boolean).join(", ") || "a visitor";
    ctx.waitUntil(alert(env, site, `Hot visitor on ${site.name || site.site}: ${who} viewed ${s(first.path, 100)}`, first.vid, day));
  }
  return json({ ok: true }, 200, corsHeaders());
}

async function alert(env, site, text, vid, day) {
  if (!site.alert_webhook) return;
  const r = await env.DB.prepare(`INSERT OR IGNORE INTO alerts (site,vid,day) VALUES (?,?,?)`).bind(site.site, vid, day).run();
  if (!r.meta || !r.meta.changes) return;
  try { await fetch(site.alert_webhook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ text, site: site.name, at: new Date().toISOString() }) }); } catch { }
}

// ---------------------------------------------------------------- dashboard
async function dash(request, env) {
  const u = new URL(request.url), siteKey = u.searchParams.get("s") || "", tok = u.searchParams.get("t") || "";
  await ensure(env.DB);
  const site = await env.DB.prepare(`SELECT * FROM sites WHERE site=?`).bind(siteKey).first();
  if (!site || !tok || tok !== site.token) return new Response("Not found", { status: 404 });
  const days = [1, 7, 30, 90].includes(Number(u.searchParams.get("days"))) ? Number(u.searchParams.get("days")) : 30;
  const since = new Date(Date.now() - days * 864e5).toISOString();
  const q = async (sql, ...p) => (await env.DB.prepare(sql).bind(site.site, since, ...p).all()).results || [];
  const tot = (await q(`SELECT COUNT(*) views, COUNT(DISTINCT vid) visitors, COUNT(DISTINCT sid) sessions FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0`))[0] || {};
  const eng = (await q(`SELECT AVG(seconds) s, AVG(scroll) sc FROM events WHERE site=? AND ts>=? AND type='leave' AND is_bot=0`))[0] || {};
  const companies = await q(`SELECT org, COUNT(DISTINCT vid) visitors, COUNT(*) views, COUNT(DISTINCT path) pages, MAX(ts) last,
      SUM(CASE WHEN path GLOB '*[Pp]ric*' OR path GLOB '*ontact*' OR path GLOB '*ook*' OR path GLOB '*emo*' OR path GLOB '*uote*' OR path GLOB '*onsult*' THEN 1 ELSE 0 END) key_hits, MAX(city) city, MAX(region) region
    FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 AND org_kind='company' GROUP BY org ORDER BY (COUNT(*) + 5*SUM(CASE WHEN path GLOB '*[Pp]ric*' OR path GLOB '*ontact*' OR path GLOB '*ook*' OR path GLOB '*emo*' OR path GLOB '*uote*' OR path GLOB '*onsult*' THEN 1 ELSE 0 END)) DESC LIMIT 40`);
  const people = await env.DB.prepare(`SELECT p.*, (SELECT COUNT(*) FROM events e WHERE e.site=p.site AND e.vid=p.vid AND e.type='view') views FROM people p WHERE p.site=? AND p.updated>=? ORDER BY p.updated DESC LIMIT 100`).bind(site.site, since).all().then(r => r.results || []);
  const pages = await q(`SELECT path, COUNT(*) views, COUNT(DISTINCT vid) visitors FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY path ORDER BY views DESC LIMIT 15`);
  const sources = await q(`SELECT COALESCE(NULLIF(utm_source,''), CASE WHEN referrer IS NULL OR referrer='' THEN '(direct)' ELSE referrer END) src, COUNT(DISTINCT sid) sessions FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY src ORDER BY sessions DESC LIMIT 12`);
  const recent = await q(`SELECT ts, vid, path, city, region, country, device, org, org_kind FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 ORDER BY id DESC LIMIT 30`);
  const tbl = (head, rows) => `<div class="tw"><table><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("") || `<tr><td colspan="${head.length}" class="m">No data yet</td></tr>`}</table></div>`;
  const rng = [1, 7, 30, 90].map(d => `<a ${d === days ? 'class="on"' : ""} href="?s=${esc(site.site)}&t=${esc(tok)}&days=${d}">${d === 1 ? "24h" : d + "d"}</a>`).join("");
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(site.name)} · Known Visitor</title>
<style>*{box-sizing:border-box}body{margin:0;background:#0b1020;color:#e8ecf5;font:14px/1.5 system-ui,-apple-system,Segoe UI,sans-serif;padding:20px clamp(14px,4vw,40px)}h1{margin:0;font-size:26px}h2{font-size:16px;margin:28px 0 10px;color:#9fb0d6;text-transform:uppercase;letter-spacing:.08em}.sub{color:#8392b5;margin:4px 0 18px}.r a{display:inline-block;padding:6px 12px;margin:0 6px 6px 0;border:1px solid #2a3558;border-radius:999px;color:#c9d4ee;text-decoration:none}.r a.on{background:#3b6cff;border-color:#3b6cff;color:#fff}
.k{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px}.k div{background:#121a33;border:1px solid #22305a;border-radius:12px;padding:14px}.k b{display:block;font-size:28px}.k small{color:#8392b5;text-transform:uppercase;font-size:11px;letter-spacing:.1em}
.tw{overflow-x:auto;background:#121a33;border:1px solid #22305a;border-radius:12px}table{border-collapse:collapse;width:100%}th{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#8392b5;text-align:left;padding:10px 12px;border-bottom:1px solid #22305a}td{padding:9px 12px;border-bottom:1px solid #1b2748;white-space:nowrap;max-width:320px;overflow:hidden;text-overflow:ellipsis}.m{color:#8392b5;text-align:center;padding:22px}.g{display:grid;grid-template-columns:1fr 1fr;gap:18px}@media(max-width:860px){.g{grid-template-columns:1fr}}.note{color:#8392b5;font-size:12px;margin-top:6px}</style></head><body>
<h1>${esc(site.name)}</h1><p class="sub">Known Visitor · ${esc(site.domain || "")}</p><div class="r">${rng}</div>
<div class="k"><div><b>${tot.visitors || 0}</b><small>Visitors</small></div><div><b>${tot.sessions || 0}</b><small>Sessions</small></div><div><b>${tot.views || 0}</b><small>Page views</small></div><div><b>${companies.length}</b><small>Companies</small></div><div><b>${people.length}</b><small>People</small></div><div><b>${Math.round(eng.s || 0)}s</b><small>Avg time</small></div></div>
<h2>Companies visiting</h2>${tbl(["Company", "Visitors", "Views", "Pages", "Key pages", "Where", "Last seen"], companies.map(c => [c.org, c.visitors, c.views, c.pages, c.key_hits, [c.city, c.region].filter(Boolean).join(", "), (c.last || "").slice(0, 16).replace("T", " ")]))}
<p class="note">Company = the organization that owns the visitor's network. Home and mobile visitors show only as location, never a name.</p>
<h2>People who identified themselves</h2>${tbl(["Name", "Email", "Phone", "How", "Views", "When"], people.map(p => [p.name, p.email, p.phone, p.source, p.views, (p.updated || "").slice(0, 16).replace("T", " ")]))}
<div class="g"><div><h2>Top pages</h2>${tbl(["Page", "Views", "Visitors"], pages.map(p => [p.path, p.views, p.visitors]))}</div><div><h2>Sources</h2>${tbl(["Source", "Sessions"], sources.map(x => [x.src, x.sessions]))}</div></div>
<h2>Recent visits</h2>${tbl(["Time (UTC)", "Visitor", "Page", "Who / where", "Device"], recent.map(v => [(v.ts || "").slice(0, 16).replace("T", " "), (v.vid || "").slice(0, 6), v.path, v.org_kind === "company" ? v.org : [v.city, v.region, v.country].filter(Boolean).join(", "), v.device]))}
</body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}

// ---------------------------------------------------------------- admin
async function isAdmin(env, k) {
  if (!k) return false;
  if (env.ADMIN_KEY && k === env.ADMIN_KEY) return true;
  try { await ensure(env.DB); const r = await env.DB.prepare(`SELECT v FROM settings WHERE k='admin_key'`).first(); return !!(r && r.v && r.v === k); } catch { return false; }
}
async function createSite(env, name, domain, webhook) {
  await ensure(env.DB);
  const site = "kv_" + rand(12), token = rand(24);
  await env.DB.prepare(`INSERT INTO sites (site,name,domain,token,alert_webhook,created) VALUES (?,?,?,?,?,?)`).bind(site, s(name, 120), s((domain || "").replace(/^https?:\/\//, "").replace(/\/.*$/, "").replace(/^www\./, ""), 120), token, s(webhook, 500) || null, new Date().toISOString()).run();
  return { site, token };
}
async function admin(request, env, base) {
  const u = new URL(request.url), key = u.searchParams.get("key") || "";
  if (!(await isAdmin(env, key))) return new Response("Add ?key=… to open admin.", { status: 401 });
  await ensure(env.DB);
  const sites = (await env.DB.prepare(`SELECT * FROM sites ORDER BY created DESC`).all()).results || [];
  const o = u.origin + base;
  const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Known Visitor admin</title>
<style>body{font:15px/1.5 system-ui;margin:0;padding:20px;background:#0b1020;color:#e8ecf5}input,button{font:inherit;padding:12px;border-radius:10px;border:1px solid #2a3558;background:#121a33;color:#fff;width:100%;margin:6px 0}button{background:#3b6cff;border:0;font-weight:600}.c{background:#121a33;border:1px solid #22305a;border-radius:12px;padding:14px;margin:14px 0}code{display:block;background:#0b1020;padding:10px;border-radius:8px;overflow-x:auto;white-space:pre-wrap;word-break:break-all;font-size:12px}a{color:#8fb0ff}</style></head><body>
<h1>Known Visitor</h1><div class="c"><b>Add a client</b><input id="n" placeholder="Client name"><input id="d" placeholder="Their domain (example.com)"><input id="w" placeholder="Alert webhook URL (optional)"><button onclick="add()">Create</button></div>
${sites.map(x => `<div class="c"><b>${esc(x.name)}</b> · ${esc(x.domain)}<br><small>Paste in the site's &lt;head&gt;:</small><code>&lt;script async src="${esc(o)}/v.js?s=${esc(x.site)}"&gt;&lt;/script&gt;</code><small>With consent banner:</small><code>&lt;script async data-banner="true" data-consent="required" src="${esc(o)}/v.js?s=${esc(x.site)}"&gt;&lt;/script&gt;</code><a href="${esc(o)}/dash?s=${esc(x.site)}&t=${esc(x.token)}">Open dashboard</a></div>`).join("")}
<script>async function add(){const r=await fetch("${esc(base)}/api/admin/site",{method:"POST",headers:{authorization:"Bearer ${esc(key)}","content-type":"application/json"},body:JSON.stringify({name:n.value,domain:d.value,alert_webhook:w.value})});if(r.ok)location.reload();else alert("Failed")}</script></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}

// ---------------------------------------------------------------- lead capture
async function lead(request, env) {
  let b; try { b = await request.json(); } catch { return json({ error: "bad json" }, 400); }
  const name = s(b.name, 120), email = s(b.email, 200);
  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ error: "name and valid email required" }, 400);
  await ensure(env.DB);
  const ip = request.headers.get("cf-connecting-ip") || "";
  await env.DB.prepare(`INSERT INTO leads (ts,name,email,website,message,ip_hash) VALUES (?,?,?,?,?,?)`).bind(new Date().toISOString(), name, email, s(b.website, 200), s(b.message, 1000), ip ? await sha(ip + "|lead") : null).run();
  if (env.LEAD_WEBHOOK) { try { await fetch(env.LEAD_WEBHOOK, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ text: `Who's There early-access request: ${name} <${email}> ${s(b.website, 200) || ""} ${s(b.message, 300) || ""}` }) }); } catch { } }
  return json({ ok: true });
}

const BASE = "/whosthere";
export default {
  async fetch(request, env, ctx) {
    const u = new URL(request.url);
    let p = u.pathname.replace(/\/+$/, "") || "/", base = "";
    if (p === BASE || p.startsWith(BASE + "/")) { base = BASE; p = p.slice(BASE.length) || "/"; }
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders() });
    try {
      if (!env.DB) return json({ error: "no DB binding" }, 500);
      if (p === "/" && request.method === "GET") return new Response(LANDING, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
      if (p === "/v.js") return new Response(snippet(u.searchParams.get("s") || "", u.origin + base), { headers: { "content-type": "application/javascript; charset=utf-8", "cache-control": "public, max-age=3600", ...corsHeaders() } });
      if (p === "/api/collect" && request.method === "POST") return await collect(request, env, ctx);
      if (p === "/api/lead" && request.method === "POST") return await lead(request, env);
      if (p === "/dash") return await dash(request, env);
      if (p === "/admin") return await admin(request, env, base);
      if (p === "/api/admin/site" && request.method === "POST") {
        const auth = (request.headers.get("authorization") || "").replace(/^Bearer /, "");
        if (!(await isAdmin(env, auth))) return json({ error: "unauthorized" }, 401);
        const b = await request.json();
        if (!b.name) return json({ error: "name required" }, 400);
        const r = await createSite(env, b.name, b.domain, b.alert_webhook);
        return json({ ...r, snippet: `<script async src="${u.origin}${base}/v.js?s=${r.site}"></script>`, dashboard: `${u.origin}${base}/dash?s=${r.site}&t=${r.token}` });
      }
      if (p === "/health") return json({ ok: true, service: "known-visitor" });
      return new Response("not found", { status: 404 });
    } catch (e) { return json({ error: String(e && e.message) }, 500); }
  }
};
