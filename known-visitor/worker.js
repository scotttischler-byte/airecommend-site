const LANDING = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<title>Who's There \u2014 see which companies visit your website | AIrecommend.ai</title>\n<meta name=\"description\" content=\"Who's There shows which companies visit your website, which pages they read, and who raises a hand. First-party, consent-aware, set up with one line of code.\">\n<meta property=\"og:title\" content=\"Who's There \u2014 see who's on your website\">\n<meta property=\"og:description\" content=\"Know which companies visit, what they read, and when a hot visitor lands. Consent-aware. One line to install.\">\n<meta name=\"theme-color\" content=\"#0e1016\">\n<style>\n:root{--brand:#2f5bea;--brand2:#7c3aed;--tint:#eef2ff;--good:#0f9d58;--warn:#c47f00;--bad:#d64545;\n--ink:#e9ecf3;--ink2:#c2c8d6;--muted:#9aa2b1;--line:#262b36;--panel:#161a23;--bg:#0e1016;--grad:linear-gradient(135deg,#2f5bea,#7c3aed)}\n@media(prefers-color-scheme:light){:root{--ink:#12151c;--ink2:#3a4152;--muted:#6b7280;--line:#e6e8ee;--panel:#f7f8fb;--bg:#fff}}\n*{box-sizing:border-box}html{scroll-behavior:smooth}\nbody{margin:0;background:var(--bg);color:var(--ink2);font:16px/1.6 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\n.wrap{max-width:1120px;margin:0 auto;padding:0 22px}\n.mark{font-weight:800;letter-spacing:-.02em;font-size:20px;color:var(--ink)}.mark b{color:var(--brand)}.mark i{font-style:normal;color:var(--muted);font-weight:600}\nnav{position:sticky;top:0;z-index:20;backdrop-filter:blur(14px);background:color-mix(in srgb,var(--bg) 82%,transparent);border-bottom:1px solid var(--line)}\nnav .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}\nnav .links{display:flex;gap:26px;align-items:center;font-size:14px;font-weight:600}\nnav .links a:hover{color:var(--ink)}@media(max-width:720px){nav .links a.h{display:none}}\n.btn{display:inline-flex;align-items:center;gap:8px;border-radius:10px;font-weight:700;padding:13px 22px;border:1px solid transparent;cursor:pointer;font:inherit;font-weight:700;transition:transform .15s,box-shadow .15s}\n.btn.p{background:var(--grad);color:#fff;box-shadow:0 10px 30px -10px rgba(47,91,234,.7)}.btn.p:hover{transform:translateY(-2px)}\n.btn.g{border-color:var(--line);color:var(--ink);background:transparent}.btn.g:hover{background:var(--panel)}\n.btn.s{padding:9px 16px;font-size:14px}\n.hero{position:relative;overflow:hidden;padding:84px 0 70px}\n.hero:before{content:\"\";position:absolute;inset:-30% -10% auto -10%;height:120%;background:radial-gradient(60% 50% at 70% 10%,rgba(124,58,237,.35),transparent 70%),radial-gradient(50% 45% at 20% 0%,rgba(47,91,234,.4),transparent 70%);pointer-events:none}\n.hero .wrap{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}\n@media(max-width:900px){.hero .wrap{grid-template-columns:1fr}.hero{padding-top:52px}}\n.kick{font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--brand)}\nh1{font-size:clamp(2.2rem,5vw,3.6rem);line-height:1.08;letter-spacing:-.03em;font-weight:800;color:var(--ink);margin:14px 0 18px}\nh1 em{font-style:normal;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}\n.sub{font-size:1.15rem;max-width:560px;color:var(--ink2)}\n.cta{display:flex;gap:12px;flex-wrap:wrap;margin:28px 0 16px}\n.fine{font-size:13px;color:var(--muted)}\n.feed{background:var(--panel);border:1px solid var(--line);border-radius:18px;box-shadow:0 30px 80px -30px rgba(47,91,234,.55);overflow:hidden}\n.feed .top{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border-bottom:1px solid var(--line);font-size:13px;color:var(--muted)}\n.live{display:inline-flex;align-items:center;gap:8px;color:var(--ink);font-weight:700}.live:before{content:\"\";width:8px;height:8px;border-radius:50%;background:var(--good);box-shadow:0 0 0 0 rgba(15,157,88,.6);animation:pulse 1.8s infinite}\n@keyframes pulse{70%{box-shadow:0 0 0 9px rgba(15,157,88,0)}100%{box-shadow:0 0 0 0 rgba(15,157,88,0)}}\n.row{display:grid;grid-template-columns:38px 1fr auto;gap:12px;align-items:center;padding:13px 18px;border-bottom:1px solid var(--line);animation:in .5s ease both}\n@keyframes in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}\n.av{width:38px;height:38px;border-radius:10px;background:var(--tint);color:var(--brand);display:grid;place-items:center;font-weight:800}\n.row b{display:block;color:var(--ink);font-size:15px;line-height:1.2}.row small{color:var(--muted);font-size:12.5px}\n.tag{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:4px 9px;border-radius:999px;background:rgba(124,58,237,.16);color:#a78bfa;white-space:nowrap}\n.tag.hot{background:rgba(214,69,69,.16);color:#f08a8a}.tag.new{background:rgba(15,157,88,.16);color:#5fd39a}\n@media(prefers-color-scheme:light){.tag{color:#6d28d9}.tag.hot{color:#b42323}.tag.new{color:#0a7a43}}\n.sample{padding:10px 18px;font-size:12px;color:var(--muted);text-align:center}\nsection{padding:78px 0}\nh2{font-size:clamp(1.7rem,3.2vw,2.4rem);letter-spacing:-.02em;line-height:1.15;color:var(--ink);margin:10px 0 14px;font-weight:800}\n.lead{max-width:640px;font-size:1.08rem}\n.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}\n@media(max-width:860px){.steps{grid-template-columns:1fr}}\n.card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:24px}\n.card h3{color:var(--ink);margin:12px 0 6px;font-size:1.1rem}.card p{margin:0}\n.num{width:34px;height:34px;border-radius:10px;background:var(--grad);color:#fff;font-weight:800;display:grid;place-items:center}\n.tw2{overflow-x:auto;border:1px solid var(--line);border-radius:16px;background:var(--panel)}.cmp{border-collapse:collapse;width:100%;min-width:640px}.cmp th{color:var(--ink);text-align:left;padding:14px 16px;border-bottom:1px solid var(--line);font-size:14px}.cmp td{padding:14px 16px;border-bottom:1px solid var(--line);vertical-align:top;font-size:15px}.cmp td:first-child{color:var(--ink);font-weight:700;white-space:nowrap}.cmp tr:last-child td{border-bottom:0}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}\n@media(max-width:900px){.grid{grid-template-columns:1fr 1fr}}@media(max-width:600px){.grid{grid-template-columns:1fr}}\n.ic{font-size:22px}\n.split{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:38px}@media(max-width:800px){.split{grid-template-columns:1fr}}\n.co{border-left:4px solid var(--good);border-radius:0 14px 14px 0;background:rgba(15,157,88,.08);padding:22px}\n.co.no{border-color:var(--warn);background:rgba(196,127,0,.09)}\n.co h3{margin:0 0 10px;color:var(--ink)}.co ul{margin:0;padding-left:20px}.co li{margin:6px 0}\n.dash{margin-top:38px;border-radius:18px;border:1px solid var(--line);background:var(--panel);overflow:hidden}\n.kp{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-bottom:1px solid var(--line)}\n@media(max-width:700px){.kp{grid-template-columns:1fr 1fr}}\n.kp div{padding:18px 20px;border-right:1px solid var(--line)}.kp b{display:block;font-size:30px;color:var(--ink);font-variant-numeric:tabular-nums;letter-spacing:-.02em}.kp small{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}\ntable{width:100%;border-collapse:collapse;font-size:14px}th{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);text-align:left;padding:12px 20px}td{padding:12px 20px;border-top:1px solid var(--line);color:var(--ink2);font-variant-numeric:tabular-nums}td:first-child{color:var(--ink);font-weight:600}\n.scroll{overflow-x:auto}\ndetails{border-bottom:1px solid var(--line);padding:18px 0}summary{cursor:pointer;font-weight:700;color:var(--ink);font-size:1.05rem;list-style:none}summary::-webkit-details-marker{display:none}summary:after{content:\"+\";float:right;color:var(--brand);font-size:22px;line-height:1}details[open] summary:after{content:\"\u2013\"}details p{margin:10px 0 0;max-width:760px}\n.cta-box{border-radius:24px;padding:54px 30px;text-align:center;background:var(--grad);color:#fff;position:relative;overflow:hidden}\n.cta-box h2{color:#fff}.cta-box p{color:rgba(255,255,255,.88);max-width:560px;margin:0 auto 26px}\nform{display:grid;gap:10px;max-width:520px;margin:0 auto;text-align:left}\ninput,textarea{width:100%;padding:14px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.14);color:#fff;font:inherit}\ninput::placeholder,textarea::placeholder{color:rgba(255,255,255,.75)}\ninput:focus,textarea:focus{outline:2px solid #fff;background:rgba(255,255,255,.2)}\n.btn.w{background:#fff;color:#2f5bea;justify-content:center}\n#ok{display:none;font-weight:700;font-size:1.1rem}\nfooter{padding:36px 0 60px;border-top:1px solid var(--line);font-size:13px;color:var(--muted)}\nfooter .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:center}\n</style>\n</head>\n<body>\n<nav><div class=\"wrap\"><a class=\"mark\" href=\"https://airecommend.ai\"><b>AI</b>recommend<i>.ai</i></a>\n<div class=\"links\"><a class=\"h\" href=\"#how\">How it works</a><a class=\"h\" href=\"#honest\">What it does</a><a class=\"h\" href=\"#compare\">Compare</a><a class=\"h\" href=\"#pricing\">Pricing</a><a class=\"h\" href=\"#faq\">FAQ</a><a class=\"btn p s\" href=\"#access\">Get early access</a></div></div></nav>\n\n<header class=\"hero\"><div class=\"wrap\">\n<div>\n<div class=\"kick\">AIrecommend.ai \u00b7 Who's There</div>\n<h1>See who's on your website <em>before they fill out a form.</em></h1>\n<p class=\"sub\">Who's There shows which companies visit, which pages they read, and the moment a hot visitor lands. One line to install. Consent-aware from day one.</p>\n<div class=\"cta\"><a class=\"btn p\" href=\"#access\">Get early access \u2192</a><a class=\"btn g\" href=\"#how\">See how it works</a></div>\n<div class=\"fine\">No magic. It names the business behind a visit when the network allows it, and says so plainly when it can't.</div>\n</div>\n<div class=\"feed\" aria-label=\"Sample live visitor feed\">\n<div class=\"top\"><span class=\"live\">Live visitors</span><span>Last 24 hours</span></div>\n<div id=\"feed\"></div>\n<div class=\"sample\">Sample data for illustration</div>\n</div>\n</div></header>\n\n<section id=\"how\"><div class=\"wrap\">\n<div class=\"kick\">How it works</div><h2>Three steps. About five minutes.</h2>\n<p class=\"lead\">No new software for your visitors, no forms to add, nothing to maintain.</p>\n<div class=\"steps\">\n<div class=\"card\"><div class=\"num\">1</div><h3>Paste one line</h3><p>Add a single script tag to your site's header. It works on WordPress, Webflow, Shopify, or plain HTML.</p></div>\n<div class=\"card\"><div class=\"num\">2</div><h3>We name the company</h3><p>Each visit is matched to the organization that owns the network, with the pages viewed, time on page, and where they came from.</p></div>\n<div class=\"card\"><div class=\"num\">3</div><h3>You hear about the hot ones</h3><p>When someone lands on pricing, contact, or booking, you get an alert you can send to Slack, Make, or any webhook.</p></div>\n</div></div></section>\n\n<section style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">What you get</div><h2>Built for owners, agencies, and sales teams.</h2>\n<div class=\"grid\">\n<div class=\"card\"><div class=\"ic\">\ud83c\udfe2</div><h3>Company recognition</h3><p>See which businesses visit and how often they return, ranked by how much they read.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udd25</div><h3>Hot-visitor alerts</h3><p>Pricing, contact, quote, and booking pages are flagged. One alert per visitor per day, so no noise.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\ude4b</div><h3>People who raise a hand</h3><p>When a visitor fills out a form, their name and email attach to their visit history. Their action, their consent.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udee1\ufe0f</div><h3>Consent-first</h3><p>Honors Global Privacy Control and Do Not Track. A consent banner is on by default: visitors who haven't accepted are only counted anonymously, with no ID and no company name.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udcf1</div><h3>A dashboard for every client</h3><p>Each site gets its own private, phone-friendly dashboard. Perfect for agencies and franchise networks.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83e\udd16</div><h3>Bots filtered out</h3><p>Crawlers and AI bots are kept out of your human numbers, so your counts stay honest.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udcac</div><h3>AI assistants sending visitors</h3><p>See who arrived from ChatGPT, Perplexity, Gemini, Claude and more. Proof that AI is recommending you.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udd77\ufe0f</div><h3>AI crawler watch</h3><p>Know which AI and search crawlers read your pages, and how often, even though they never run scripts.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udc46</div><h3>Clicks, calls and forms</h3><p>Track taps on call and email buttons, downloads, outbound links, and who started a form. Never what they typed.</p></div>\n</div></div></section>\n\n<section id=\"compare\" style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">How it's different</div><h2>Built on consent, not on a data broker.</h2>\n<div class=\"tw2\"><table class=\"cmp\"><tr><th></th><th>Who's There</th><th>Person-level tools (for example RB2B)</th></tr>\n<tr><td>How a person gets named</td><td>Only when they submit a form or you identify them. Their action, their consent.</td><td>Matched against a third-party database using cookies, device IDs and IP addresses.</td></tr>\n<tr><td>Consent</td><td>Banner on by default. No ID and no company name until a visitor accepts. Honors Global Privacy Control and Do Not Track.</td><td>RB2B's own help pages say it does not enforce consent for you; you configure it and update your privacy policy.</td></tr>\n<tr><td>Visitor's right to delete</td><td>Withdrawing consent deletes that visitor's stored data from our servers.</td><td>Separate opt-out and database-removal forms.</td></tr>\n<tr><td>Where it works</td><td>Any country, because it relies on consent rather than a US-only database.</td><td>Person-level identification is US-only; other countries get company-level data.</td></tr>\n<tr><td>AI search</td><td>Shows visitors sent by ChatGPT, Perplexity, Gemini and Claude, and which AI crawlers read your pages.</td><td>Focused on identifying people for outreach.</td></tr>\n<tr><td>What it does not do</td><td>It will not hand you a stranger's name, email or LinkedIn profile.</td><td>That is what these tools are built to do.</td></tr></table></div>\n<p style=\"margin-top:14px;font-size:14px;color:var(--muted)\">If your goal is a contact list of strangers with job titles and emails, a data-broker tool is built for that. If you want to know who is interested, act on it quickly, and stay on the right side of privacy law, that is what Who's There is for. Competitor details come from their own published pages.</p>\n</div></section>\n\n<section id=\"pricing\" style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">Pricing</div><h2>Simple monthly plans.</h2>\n<div class=\"grid\">\n<div class=\"card\"><h3>Starter</h3><p style=\"font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0\">$99<span style=\"font-size:1rem;font-weight:600;color:var(--muted)\">/mo</span></p><p>One website. Company recognition, hot-visitor alerts, AI-referral and AI-crawler reports, and a private phone-friendly dashboard.</p><p style=\"margin-top:16px\"><a class=\"btn p\" href=\"#access\">Get early access</a></p></div>\n<div class=\"card\"><h3>Agency</h3><p style=\"font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0\">$199<span style=\"font-size:1rem;font-weight:600;color:var(--muted)\">/mo</span></p><p>Up to five websites, each with its own private dashboard. Built for agencies and multi-location owners.</p><p style=\"margin-top:16px\"><a class=\"btn p\" href=\"#access\">Get early access</a></p></div>\n<div class=\"card\"><h3>Network</h3><p style=\"font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0\">Custom</p><p>Franchise systems and large agencies with many sites. We set up every site and the rollup reporting for you.</p><p style=\"margin-top:16px\"><a class=\"btn g\" href=\"#access\">Talk to us</a></p></div>\n</div>\n<p style=\"margin-top:18px;font-size:14px;color:var(--muted)\">One-time setup is $497 and includes installing it on your site and walking you through your first dashboard. Prices are for payment by wire; paying by card adds a 5% convenience fee. Bundle with other AIrecommend.ai tools and save 10% to 40% on the monthly fee.</p>\n</div></section>\n\n<section id=\"honest\" style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">Straight talk</div><h2>What it can name, and what it can't.</h2>\n<p class=\"lead\">Most tools in this category oversell. Here is the real mechanism.</p>\n<div class=\"split\">\n<div class=\"co\"><h3>It can</h3><ul><li>Name the business behind a visit from an office or corporate network</li><li>Show city and region for every visit</li><li>Show the full page-by-page path and time on each page</li><li>Attach a name and email when a visitor submits a form</li></ul></div>\n<div class=\"co no\"><h3>It can't</h3><ul><li>Name a person browsing from home or a phone unless they identify themselves</li><li>Tell you who someone is from an IP address alone</li><li>Promise a match rate. It depends on who actually visits you</li></ul></div>\n</div></div></section>\n\n<section style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">The dashboard</div><h2>Open it on your phone. Know who to call.</h2>\n<div class=\"dash\">\n<div class=\"kp\"><div><b>1,284</b><small>Visitors</small></div><div><b>46</b><small>Companies</small></div><div><b>9</b><small>Hot visitors</small></div><div><b>3:12</b><small>Avg time</small></div></div>\n<div class=\"scroll\"><table><tr><th>Company</th><th>Views</th><th>Key pages</th><th>Where</th><th>Last seen</th></tr>\n<tr><td>Northwind Logistics</td><td>14</td><td>3</td><td>Tampa, FL</td><td>2 min ago</td></tr>\n<tr><td>Summit Dental Group</td><td>9</td><td>2</td><td>Provo, UT</td><td>38 min ago</td></tr>\n<tr><td>Harbor Capital Partners</td><td>7</td><td>2</td><td>Dallas, TX</td><td>1 hr ago</td></tr>\n<tr><td>Pine Ridge Realty</td><td>5</td><td>1</td><td>Scottsdale, AZ</td><td>3 hr ago</td></tr></table></div>\n<div class=\"sample\">Sample data for illustration. Company names are fictional.</div>\n</div></div></section>\n\n<section id=\"faq\" style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">Questions</div><h2>Before you ask.</h2>\n<details><summary>Is this legal and private?</summary><p>It is built to be consent-aware: it honors Global Privacy Control and Do Not Track, shows a consent banner by default (no ID or company name until a visitor accepts), links to a plain-language privacy page, and stores a salted hash instead of the raw IP address. People are only named when they submit a form themselves. You should still have a privacy notice on your site, and for legal advice on your situation, talk to your own attorney. We are not a law firm.</p></details>\n<details><summary>Will it slow my site?</summary><p>No. It is a tiny script that loads asynchronously and sends small beacons in the background.</p></details>\n<details><summary>Who is it for?</summary><p>Business owners who want to know who is looking, agencies that run many client sites, and sales teams that want to call the right company at the right moment.</p></details>\n<details><summary>What does it cost?</summary><p>Plans start at $99 a month for one website, plus a one-time $497 setup. See the pricing section above. Request early access and we will set up your first site and show you real data from your own traffic.</p></details>\n</div></section>\n\n<section id=\"access\" style=\"padding-top:0\"><div class=\"wrap\"><div class=\"cta-box\">\n<h2>Find out who's there.</h2>\n<p>Request early access. We'll set up your site and show you what your own traffic looks like.</p>\n<form id=\"f\"><input name=\"name\" placeholder=\"Your name\" required autocomplete=\"name\"><input name=\"email\" type=\"email\" placeholder=\"Email\" required autocomplete=\"email\"><input name=\"website\" placeholder=\"Your website (optional)\" autocomplete=\"url\"><textarea name=\"message\" rows=\"2\" placeholder=\"Anything we should know? (optional)\"></textarea><button class=\"btn w\" type=\"submit\">Request early access</button></form>\n<div id=\"ok\">Thank you. We'll be in touch shortly.</div>\n</div></div></section>\n\n<footer><div class=\"wrap\"><a class=\"mark\" href=\"https://airecommend.ai\"><b>AI</b>recommend<i>.ai</i></a><span>Who's There \u00b7 Powered by AIrecommend.ai \u00b7 <a href=\"/whosthere/privacy\" style=\"color:inherit\">Privacy &amp; cookies</a></span></div></footer>\n\n<script>\n(function(){\nvar data=[[\"Northwind Logistics\",\"Viewed /pricing\",\"Tampa, FL\",\"hot\",\"Hot\"],[\"Summit Dental Group\",\"Viewed /contact\",\"Provo, UT\",\"hot\",\"Hot\"],[\"Harbor Capital Partners\",\"Read 4 pages\",\"Dallas, TX\",\"\",\"Returning\"],[\"Pine Ridge Realty\",\"Viewed /services\",\"Scottsdale, AZ\",\"new\",\"New\"],[\"Bluepoint Manufacturing\",\"Viewed /book\",\"Columbus, OH\",\"hot\",\"Hot\"],[\"Cedar & Oak Law\",\"Read 3 pages\",\"Atlanta, GA\",\"new\",\"New\"],[\"Redwood Health Network\",\"Viewed /quote\",\"Denver, CO\",\"hot\",\"Hot\"],[\"Lakeshore Insurance\",\"Read 2 pages\",\"Milwaukee, WI\",\"\",\"Returning\"]];\nvar el=document.getElementById(\"feed\"),i=0;\nfunction add(){var d=data[i%data.length];i++;var r=document.createElement(\"div\");r.className=\"row\";\nr.innerHTML='<div class=\"av\">'+d[0][0]+'</div><div><b>'+d[0]+'</b><small>'+d[1]+' \u00b7 '+d[2]+'</small></div><span class=\"tag '+d[3]+'\">'+d[4]+'</span>';\nel.insertBefore(r,el.firstChild);while(el.children.length>5)el.removeChild(el.lastChild)}\nfor(var k=0;k<4;k++)add();\nif(!matchMedia(\"(prefers-reduced-motion: reduce)\").matches)setInterval(add,2600);\nvar f=document.getElementById(\"f\");\nf.addEventListener(\"submit\",function(e){e.preventDefault();var b=f.querySelector(\"button\");b.disabled=true;b.textContent=\"Sending\u2026\";\nvar o={};new FormData(f).forEach(function(v,k){o[k]=v});\nfetch(location.pathname.replace(/\\/$/,\"\")+\"/api/lead\",{method:\"POST\",headers:{\"content-type\":\"application/json\"},body:JSON.stringify(o)}).then(function(r){if(!r.ok)throw 0;f.style.display=\"none\";document.getElementById(\"ok\").style.display=\"block\"}).catch(function(){b.disabled=false;b.textContent=\"Something went wrong. Try again\"})});\n})();\n</script>\n</body>\n</html>\n";
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
async function ensure(db) { if (!globalThis.__kv_schema) { await db.batch(SCHEMA.map(s => db.prepare(s))); try { await db.prepare(`ALTER TABLE events ADD COLUMN detail TEXT`).run(); } catch { } try { await db.prepare(`ALTER TABLE events ADD COLUMN lang TEXT`).run(); } catch { } globalThis.__kv_schema = 1; } }

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
var req=!(sc&&sc.getAttribute("data-consent")==="implied"),banner=!(sc&&sc.getAttribute("data-banner")==="false");
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){}}
function ss(k,v){try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v)}catch(e){}}
function rid(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36)}
var optOut=n.globalPrivacyControl===true||n.doNotTrack==="1"||ls("kv_c")==="0";
var vid=null,sid=null,t0=Date.now(),maxScroll=0,left=false;
function allowed(){return !optOut&&(!req||ls("kv_c")==="1")}
function ids(){if(!vid){vid=ls("kv_v");if(!vid){vid=rid();ls("kv_v",vid)}}if(!sid){sid=ss("kv_s");if(!sid){sid=rid();ss("kv_s",sid)}}}
function base(type,extra){var p=new URLSearchParams(location.search),o={type:type,vid:vid,sid:sid,path:location.pathname,title:d.title,ref:d.referrer,lang:n.language,tz:(function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return null}})(),scr:w.screen?w.screen.width+"x"+w.screen.height:null,click:p.get("gclid")?"google":p.get("fbclid")?"meta":p.get("msclkid")?"bing":null,
 utm_source:p.get("utm_source"),utm_medium:p.get("utm_medium"),utm_campaign:p.get("utm_campaign")};for(var k in extra)o[k]=extra[k];return o}
function undecided(){return !optOut&&req&&ls("kv_c")===null}
function send(type,extra){if(undecided()){try{var a=new URLSearchParams(location.search);fetch(E+"/api/collect",{method:"POST",keepalive:true,headers:{"content-type":"text/plain"},body:JSON.stringify({s:S,events:[{type:type,anon:1,path:location.pathname,ref:d.referrer,utm_source:a.get("utm_source"),utm_medium:a.get("utm_medium"),utm_campaign:a.get("utm_campaign")}]})})}catch(e){}return}
 if(!allowed())return;ids();var body=JSON.stringify({s:S,events:[base(type,extra||{})]});
 try{fetch(E+"/api/collect",{method:"POST",body:body,keepalive:true,headers:{"content-type":"text/plain"}})}catch(e){}}
function view(){t0=Date.now();maxScroll=0;left=false;send("view")}
function leave(){if(left)return;left=true;send("leave",{seconds:Math.round((Date.now()-t0)/1000),scroll:maxScroll})}
w.addEventListener("scroll",function(){var h=d.documentElement.scrollHeight-w.innerHeight;if(h>0){var p=Math.round(100*w.scrollY/h);if(p>maxScroll)maxScroll=Math.min(100,p)}},{passive:true});
d.addEventListener("visibilitychange",function(){if(d.visibilityState==="hidden")leave()});
w.addEventListener("pagehide",leave);
["pushState","replaceState"].forEach(function(f){var o=history[f];history[f]=function(){leave();var r=o.apply(this,arguments);setTimeout(view,0);return r}});
w.addEventListener("popstate",function(){leave();setTimeout(view,0)});
// Consented-only behavior: clicks on links/buttons, form start (never field values).
d.addEventListener("click",function(ev){try{if(!allowed())return;var a=ev.target.closest&&ev.target.closest("a,button,[role=button]");if(!a)return;
 var h=a.getAttribute("href")||"",k="cta",tx=(a.innerText||a.value||a.getAttribute("aria-label")||"").trim().slice(0,60);
 if(/^tel:/i.test(h))k="phone";else if(/^mailto:/i.test(h))k="email";else if(/[.](pdf|docx?|xlsx?|zip|pptx?)([?]|$)/i.test(h))k="download";
 else if(/^https?:/i.test(h)){try{if(new URL(h).hostname!==location.hostname)k="outbound"}catch(e){}}
 send("click",{detail:{kind:k,text:tx,href:h.slice(0,160)}})}catch(e){}},true);
var fs={};d.addEventListener("focusin",function(ev){try{var f=ev.target.form;if(!f||!allowed())return;var id=f.id||f.action||"form";if(fs[id])return;fs[id]=1;send("form_start",{detail:{form:String(id).slice(0,80)}})}catch(e){}},true);
// Identification ONLY when the person submits a form themselves (their action = consent to be contacted).
d.addEventListener("submit",function(ev){try{var f=ev.target,em=f.querySelector('input[type=email],input[name*=email i]'),
 nm=f.querySelector('input[name*=name i],input[name*=first i]'),ph=f.querySelector('input[type=tel],input[name*=phone i]');
 if(em&&em.value)KnownVisitor.identify({email:em.value,name:nm&&nm.value,phone:ph&&ph.value,source:"form"})}catch(e){}},true);
w.KnownVisitor={
 identify:function(p){if(!allowed()||!p)return;ids();try{fetch(E+"/api/collect",{method:"POST",keepalive:true,headers:{"content-type":"text/plain"},
  body:JSON.stringify({s:S,events:[base("identify",{detail:{name:p.name,email:p.email,phone:p.phone,source:p.source||"api"}})]})})}catch(e){}},
 consent:function(yes){var old=ls("kv_v");ls("kv_c",yes?"1":"0");optOut=!yes;if(yes){view()}else{if(old){try{fetch(E+"/api/forget",{method:"POST",keepalive:true,headers:{"content-type":"text/plain"},body:JSON.stringify({s:S,vid:old})})}catch(e){}}try{localStorage.removeItem("kv_v");sessionStorage.removeItem("kv_s")}catch(e){}vid=null;sid=null}},
 track:function(name){send("event",{detail:{name:name}})}};
function bar(force){if(!force&&(ls("kv_c")!==null||optOut))return;if(d.getElementById("kvb"))return;var b=d.createElement("div");b.id="kvb";
 b.setAttribute("style","position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483647;background:#111;color:#fff;font:14px/1.45 system-ui,sans-serif;padding:14px 16px;border-radius:12px;display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap;box-shadow:0 8px 30px rgba(0,0,0,.35)");
 b.innerHTML='<span style="flex:1 1 260px">This site uses privacy-friendly analytics. With your OK it stores a random ID in your browser (similar to a cookie) and may recognize the business network you visit from. Without it, we only count the visit anonymously. <a href="'+E+'/privacy?s='+S+'" target="_blank" rel="noopener" style="color:#9fc0ff">How it works</a></span><span><button id="kvn" style="margin-right:8px;padding:9px 14px;border-radius:8px;border:1px solid #666;background:transparent;color:#fff;cursor:pointer">No thanks</button><button id="kvy" style="padding:9px 14px;border-radius:8px;border:0;background:#fff;color:#111;font-weight:600;cursor:pointer">Accept</button></span>';
 d.body.appendChild(b);function done(){b.remove();gear()}
 b.querySelector("#kvy").onclick=function(){KnownVisitor.consent(true);done()};b.querySelector("#kvn").onclick=function(){KnownVisitor.consent(false);done()}}
function gear(){if(d.getElementById("kvg")||!d.body)return;var g=d.createElement("button");g.id="kvg";g.textContent="Privacy settings";
 g.setAttribute("style","position:fixed;left:10px;bottom:10px;z-index:2147483646;background:rgba(17,17,17,.85);color:#fff;border:0;border-radius:999px;padding:6px 11px;font:12px system-ui,sans-serif;cursor:pointer;opacity:.7");
 g.onclick=function(){g.remove();bar(true)};d.body.appendChild(g)}
if(allowed()||undecided())view();
if(banner){var go=function(){if(ls("kv_c")!==null&&!optOut)gear();else bar()};if(d.body)go();else d.addEventListener("DOMContentLoaded",go)}
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
    if (e.anon) {
      if (type !== "view" || bot) continue;
      stmts.push(env.DB.prepare(`INSERT INTO events (site,ts,type,path,referrer,utm_source,utm_medium,utm_campaign,country,org_kind,device,is_bot)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,0)`).bind(site.site, now, "view", s(e.path, 300), s(e.ref, 400), s(e.utm_source, 100), s(e.utm_medium, 100), s(e.utm_campaign, 100), cf.country || null, "anon", device(ua)));
      continue;
    }
    stmts.push(env.DB.prepare(`INSERT INTO events (site,ts,type,vid,sid,path,title,referrer,utm_source,utm_medium,utm_campaign,country,region,city,asn,org,org_kind,ip_hash,ua,device,is_bot,seconds,scroll,detail,lang)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).bind(site.site, now, type, s(e.vid, 40), s(e.sid, 40), s(e.path, 300), s(e.title, 200), s(e.ref, 400), s(e.utm_source, 100), s(e.utm_medium, 100), s(e.utm_campaign, 100),
      cf.country || null, cf.region || null, cf.city || null, cf.asn ? String(cf.asn) : null, org, kind, ip_hash, ua.slice(0, 250), device(ua), bot, num(e.seconds), num(e.scroll), type === "identify" ? null : (e.detail || e.click || e.tz || e.scr) ? s(JSON.stringify({ ...(e.detail || {}), ...(e.click ? { ad: e.click } : {}), tz: s(e.tz, 60), scr: s(e.scr, 12) }), 400) : null, s(e.lang, 12)));
    if (type === "identify" && e.vid && e.detail && !bot) {
      const d = e.detail;
      stmts.push(env.DB.prepare(`INSERT INTO people (site,vid,name,email,phone,source,first_seen,updated) VALUES (?,?,?,?,?,?,?,?)
        ON CONFLICT(site,vid) DO UPDATE SET name=COALESCE(excluded.name,name), email=COALESCE(excluded.email,email), phone=COALESCE(excluded.phone,phone), source=excluded.source, updated=excluded.updated`)
        .bind(site.site, s(e.vid, 40), s(d.name, 120), s(d.email, 200), s(d.phone, 40), s(d.source, 40), now, now));
      ctx.waitUntil(alert(env, site, `New identified visitor: ${s(d.name, 80) || ""} ${s(d.email, 120) || ""} ${s(d.phone, 40) || ""}`.trim(), e.vid, day + "-id"));
    }
  }
  if (stmts.length) await env.DB.batch(stmts);
  // Hot-visitor alerts (consented visitors only): high-intent page, tapped call/email, or started a form. Identification alerts are sent separately above.
  const first = (b.events || [])[0];
  if (first && !bot && first.vid && !first.anon) {
    const who = kind === "company" ? org : [cf.city, cf.region].filter(Boolean).join(", ") || "a visitor";
    const nm = site.name || site.site; let why = null, key = first.type;
    if (first.type === "view" && KEY_PAGES.test(first.path || "")) why = `viewed ${s(first.path, 100)}`;
    else if (first.type === "click" && first.detail && (first.detail.kind === "phone" || first.detail.kind === "email")) why = `tapped ${first.detail.kind} (${s(first.detail.text, 40)}) on ${s(first.path, 80)}`;
    else if (first.type === "form_start") why = `started a form on ${s(first.path, 80)}`;
    if (why) ctx.waitUntil(alert(env, site, `Hot visitor on ${nm}: ${who} ${why}`, first.vid + ":" + key, day));
  }
  return json({ ok: true }, 200, corsHeaders());
}

async function forget(request, env) {
  let b; try { b = JSON.parse(await request.text()); } catch { return json({ error: "bad json" }, 400, corsHeaders()); }
  await ensure(env.DB);
  const site = await env.DB.prepare(`SELECT site FROM sites WHERE site=?`).bind(s(b.s, 40)).first(), vid = s(b.vid, 40);
  if (!site || !vid) return json({ error: "bad request" }, 400, corsHeaders());
  await env.DB.batch([env.DB.prepare(`DELETE FROM events WHERE site=? AND vid=?`).bind(site.site, vid), env.DB.prepare(`DELETE FROM people WHERE site=? AND vid=?`).bind(site.site, vid)]);
  return json({ ok: true }, 200, corsHeaders());
}

async function alert(env, site, text, vid, day) {
  if (!site.alert_webhook) return;
  const r = await env.DB.prepare(`INSERT OR IGNORE INTO alerts (site,vid,day) VALUES (?,?,?)`).bind(site.site, vid, day).run();
  if (!r.meta || !r.meta.changes) return;
  try {
    if (/^https:\/\/ntfy\.sh\//.test(site.alert_webhook)) { // free push notification, no account needed
      const rr = await fetch(site.alert_webhook, { method: "POST", headers: { Title: "Whos There", Priority: "high" }, body: text });
      await env.DB.prepare(`INSERT OR REPLACE INTO settings (k,v) VALUES ('last_alert_status',?)`).bind(rr.status + " " + new Date().toISOString()).run();
    } else await fetch(site.alert_webhook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ text, site: site.name, at: new Date().toISOString() }) });
  } catch (e) { try { await env.DB.prepare(`INSERT OR REPLACE INTO settings (k,v) VALUES ('last_alert_status',?)`).bind("err " + String(e).slice(0, 150)).run(); } catch { } }
}

// ---------------------------------------------------------------- dashboard
async function dash(request, env, csv) {
  const u = new URL(request.url), siteKey = u.searchParams.get("s") || "", tok = u.searchParams.get("t") || "";
  await ensure(env.DB);
  const site = await env.DB.prepare(`SELECT * FROM sites WHERE site=?`).bind(siteKey).first();
  if (!site || !tok || tok !== site.token) return new Response("Not found", { status: 404 });
  const days = [1, 7, 30, 90].includes(Number(u.searchParams.get("days"))) ? Number(u.searchParams.get("days")) : 30;
  const since = new Date(Date.now() - days * 864e5).toISOString();
  const q = async (sql, ...p) => (await env.DB.prepare(sql).bind(site.site, since, ...p).all()).results || [];
  const tot = (await q(`SELECT COUNT(*) views, COUNT(DISTINCT vid) visitors, COUNT(DISTINCT sid) sessions, SUM(CASE WHEN org_kind='anon' THEN 1 ELSE 0 END) anon FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0`))[0] || {};
  const eng = (await q(`SELECT AVG(seconds) s, AVG(scroll) sc FROM events WHERE site=? AND ts>=? AND type='leave' AND is_bot=0`))[0] || {};
  const companies = await q(`SELECT org, COUNT(DISTINCT vid) visitors, COUNT(*) views, COUNT(DISTINCT path) pages, MAX(ts) last,
      SUM(CASE WHEN path GLOB '*[Pp]ric*' OR path GLOB '*ontact*' OR path GLOB '*ook*' OR path GLOB '*emo*' OR path GLOB '*uote*' OR path GLOB '*onsult*' THEN 1 ELSE 0 END) key_hits, MAX(city) city, MAX(region) region
    FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 AND org_kind='company' GROUP BY org ORDER BY (COUNT(*) + 5*SUM(CASE WHEN path GLOB '*[Pp]ric*' OR path GLOB '*ontact*' OR path GLOB '*ook*' OR path GLOB '*emo*' OR path GLOB '*uote*' OR path GLOB '*onsult*' THEN 1 ELSE 0 END)) DESC LIMIT 40`);
  const people = await env.DB.prepare(`SELECT p.*, (SELECT COUNT(*) FROM events e WHERE e.site=p.site AND e.vid=p.vid AND e.type='view') views FROM people p WHERE p.site=? AND p.updated>=? ORDER BY p.updated DESC LIMIT 100`).bind(site.site, since).all().then(r => r.results || []);
  const pages = await q(`SELECT path, COUNT(*) views, COUNT(DISTINCT vid) visitors FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY path ORDER BY views DESC LIMIT 15`);
  const sources = await q(`SELECT COALESCE(NULLIF(utm_source,''), CASE WHEN referrer IS NULL OR referrer='' THEN '(direct)' ELSE referrer END) src, COUNT(DISTINCT COALESCE(sid, 'a' || id)) sessions FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY src ORDER BY sessions DESC LIMIT 12`);
  const ai = await q(`SELECT CASE WHEN referrer LIKE '%chatgpt.com%' OR referrer LIKE '%chat.openai.com%' THEN 'ChatGPT' WHEN referrer LIKE '%perplexity.ai%' THEN 'Perplexity' WHEN referrer LIKE '%gemini.google.com%' THEN 'Gemini' WHEN referrer LIKE '%claude.ai%' THEN 'Claude' WHEN referrer LIKE '%copilot.microsoft.com%' THEN 'Copilot' WHEN referrer LIKE '%you.com%' THEN 'You.com' WHEN referrer LIKE '%grok.com%' THEN 'Grok' WHEN lower(utm_source) IN ('chatgpt.com','chatgpt','perplexity','gemini','claude') THEN utm_source END src, COUNT(*) views, MAX(ts) last FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY src HAVING src IS NOT NULL ORDER BY views DESC`);
  const crawlers = await q(`SELECT org bot, COUNT(*) hits, COUNT(DISTINCT path) pages, MAX(ts) last FROM events WHERE site=? AND ts>=? AND org_kind='bot' GROUP BY org ORDER BY hits DESC LIMIT 15`);
  const clicks = await q(`SELECT json_extract(detail,'$.kind') kind, json_extract(detail,'$.text') txt, COUNT(*) n FROM events WHERE site=? AND ts>=? AND type='click' AND is_bot=0 GROUP BY kind, txt ORDER BY n DESC LIMIT 15`);
  const funnel = (await q(`SELECT SUM(type='form_start') starts, SUM(type='identify') ids, SUM(type='click' AND json_extract(detail,'$.kind') IN ('phone','email')) contacts FROM events WHERE site=? AND ts>=? AND is_bot=0`))[0] || {};
  const countries = await q(`SELECT COALESCE(country,'?') c, COUNT(*) views FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY c ORDER BY views DESC LIMIT 8`);
  const recent = await q(`SELECT ts, vid, path, city, region, country, device, org, org_kind FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 ORDER BY id DESC LIMIT 30`);
  if (csv) {
    const kind = u.searchParams.get("kind") || "companies", cell = v => { v = v == null ? "" : String(v); if (/^[=+\-@]/.test(v)) v = "'" + v; return '"' + v.replace(/"/g, '""') + '"'; };
    const rowsOf = kind === "people" ? [["name", "email", "phone", "source", "views", "updated"], ...people.map(x => [x.name, x.email, x.phone, x.source, x.views, x.updated])]
      : kind === "events" ? [["time", "visitor", "page", "who_or_where", "device"], ...recent.map(v => [v.ts, (v.vid || "").slice(0, 6), v.path, v.org_kind === "company" ? v.org : [v.city, v.region, v.country].filter(Boolean).join(" "), v.device])]
      : [["company", "score", "visitors", "views", "pages", "key_pages", "city", "region", "last_seen"], ...companies.map(c => [c.org, c.views + 5 * c.key_hits, c.visitors, c.views, c.pages, c.key_hits, c.city, c.region, c.last])];
    return new Response(rowsOf.map(r => r.map(cell).join(",")).join("\r\n"), { headers: { "content-type": "text/csv; charset=utf-8", "content-disposition": `attachment; filename="whos-there-${kind}-${days}d.csv"`, "cache-control": "no-store" } });
  }
  const tbl = (head, rows) => `<div class="tw"><table><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("") || `<tr><td colspan="${head.length}" class="m">No data yet</td></tr>`}</table></div>`;
  const enc = encodeURIComponent, band = s => s >= 25 ? "Hot" : s >= 10 ? "Warm" : "New";
  const callFirst = companies.length ? `<div class="cf">${companies.slice(0, 5).map(c => { const sc = c.views + 5 * c.key_hits; return `<div class="cc"><div><b>${esc(c.org)}</b> <span class="bd ${band(sc)}">${band(sc)}</span><div class="m">${c.visitors} visitor${c.visitors == 1 ? "" : "s"} · ${c.views} views · ${c.pages} pages${c.key_hits ? " · " + c.key_hits + " key page" + (c.key_hits == 1 ? "" : "s") : ""} · ${esc([c.city, c.region].filter(Boolean).join(", "))}</div></div><div class="lk"><a target="_blank" rel="noopener" href="https://www.linkedin.com/search/results/companies/?keywords=${enc(c.org)}">LinkedIn</a><a target="_blank" rel="noopener" href="https://www.google.com/search?q=${enc(c.org + " " + (c.city || ""))}">Google</a></div></div>`; }).join("")}</div>` : `<div class="tw"><table><tr><td class="m">No companies yet. Consented visitors from business networks show up here.</td></tr></table></div>`;
  const base0 = u.pathname.startsWith(BASE) ? BASE : "";
  const dl = k => `?s=${esc(site.site)}&t=${esc(tok)}&days=${days}&kind=${k}`;
  const rng = [1, 7, 30, 90].map(d => `<a ${d === days ? 'class="on"' : ""} href="?s=${esc(site.site)}&t=${esc(tok)}&days=${d}">${d === 1 ? "24h" : d + "d"}</a>`).join("");
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(site.name)} · Known Visitor</title>
<style>*{box-sizing:border-box}body{margin:0;background:#0b1020;color:#e8ecf5;font:14px/1.5 system-ui,-apple-system,Segoe UI,sans-serif;padding:20px clamp(14px,4vw,40px)}h1{margin:0;font-size:26px}h2{font-size:16px;margin:28px 0 10px;color:#9fb0d6;text-transform:uppercase;letter-spacing:.08em}.sub{color:#8392b5;margin:4px 0 18px}.r a{display:inline-block;padding:6px 12px;margin:0 6px 6px 0;border:1px solid #2a3558;border-radius:999px;color:#c9d4ee;text-decoration:none}.r a.on{background:#3b6cff;border-color:#3b6cff;color:#fff}
.k{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px}.k div{background:#121a33;border:1px solid #22305a;border-radius:12px;padding:14px}.k b{display:block;font-size:28px}.k small{color:#8392b5;text-transform:uppercase;font-size:11px;letter-spacing:.1em}
body{overflow-x:hidden}.g>div,.cf{min-width:0}.cf{display:grid;gap:10px}.cc{display:flex;gap:12px;justify-content:space-between;align-items:center;flex-wrap:wrap;background:#121a33;border:1px solid #22305a;border-radius:12px;padding:12px 14px}.cc b{color:#fff}.cc .m{color:#8392b5;font-size:13px}.lk{display:flex;gap:8px}.lk a{border:1px solid #2f5bea;border-radius:8px;padding:5px 10px;font-size:13px;color:#cfe}.bd{font-size:11px;font-weight:700;border-radius:999px;padding:2px 8px;text-transform:uppercase}.bd.Hot{background:#d64545;color:#fff}.bd.Warm{background:#c47f00;color:#fff}.bd.New{background:#22305a;color:#8392b5}.tw{overflow-x:auto;background:#121a33;border:1px solid #22305a;border-radius:12px}table{border-collapse:collapse;width:100%}th{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#8392b5;text-align:left;padding:10px 12px;border-bottom:1px solid #22305a}td{padding:9px 12px;border-bottom:1px solid #1b2748;white-space:nowrap;max-width:320px;overflow:hidden;text-overflow:ellipsis}.m{color:#8392b5;text-align:center;padding:22px}.g{display:grid;grid-template-columns:1fr 1fr;gap:18px}@media(max-width:860px){.g{grid-template-columns:1fr}}.note{color:#8392b5;font-size:12px;margin-top:6px}</style></head><body>
<h1>${esc(site.name)}</h1><p class="sub">Known Visitor · ${esc(site.domain || "")}</p><div class="r">${rng}</div>
<div class="k"><div><b>${tot.views || 0}</b><small>All page views</small></div><div><b>${tot.visitors || 0}</b><small>Consented visitors</small></div><div><b>${tot.anon || 0}</b><small>Anonymous views</small></div><div><b>${tot.sessions || 0}</b><small>Sessions</small></div><div><b>${companies.length}</b><small>Companies</small></div><div><b>${people.length}</b><small>People</small></div><div><b>${Math.round(eng.s || 0)}s</b><small>Avg time</small></div></div>
<h2>Call these first</h2>${callFirst}
<p class="note">Ranked by pages read, with extra weight for pricing, contact, booking and quote pages. Links open a search for that company, so you can find the right person.</p>
<h2>Companies visiting</h2>${tbl(["Company", "Score", "Visitors", "Views", "Pages", "Key pages", "Where", "Last seen"], companies.map(c => [c.org, c.views + 5 * c.key_hits, c.visitors, c.views, c.pages, c.key_hits, [c.city, c.region].filter(Boolean).join(", "), (c.last || "").slice(0, 16).replace("T", " ")]))}
<p class="note">Company = the organization that owns the visitor's network, shown only for visitors who accepted. Home and mobile visitors show only as location, never a name. "Anonymous views" are visits counted without consent: no ID, no company, no IP stored.</p>
<h2>People who identified themselves</h2>${tbl(["Name", "Email", "Phone", "How", "Views", "When"], people.map(p => [p.name, p.email, p.phone, p.source, p.views, (p.updated || "").slice(0, 16).replace("T", " ")]))}
<div class="g"><div><h2>Top pages</h2>${tbl(["Page", "Views", "Visitors"], pages.map(p => [p.path, p.views, p.visitors]))}</div><div><h2>Sources</h2>${tbl(["Source", "Sessions"], sources.map(x => [x.src, x.sessions]))}</div></div>
<h2>AI assistants sending visitors</h2>${tbl(["Assistant", "Visits", "Last"], ai.map(a => [a.src, a.views, (a.last || "").slice(0, 16).replace("T", " ")]))}
<p class="note">People who clicked a link inside ChatGPT, Perplexity, Gemini, Claude and similar. This is proof AI is recommending the site.</p>
<h2>AI and search crawlers reading the site</h2>${tbl(["Crawler", "Hits", "Pages", "Last"], crawlers.map(c => [c.bot, c.hits, c.pages, (c.last || "").slice(0, 16).replace("T", " ")]))}
<p class="note">Robots, not people. Seen at the edge, so they are counted even though they never run scripts.</p>
<div class="g"><div><h2>What visitors click</h2>${tbl(["Type", "Button or link", "Clicks"], clicks.map(c => [c.kind, c.txt, c.n]))}</div><div><h2>Actions and countries</h2>${tbl(["Measure", "Count"], [["Started a form", funnel.starts || 0], ["Identified themselves", funnel.ids || 0], ["Tapped call or email", funnel.contacts || 0], ...countries.map(x => ["Views from " + x.c, x.views])])}</div></div>
<h2>Recent visits</h2>${tbl(["Time (UTC)", "Visitor", "Page", "Who / where", "Device"], recent.map(v => [(v.ts || "").slice(0, 16).replace("T", " "), (v.vid || "").slice(0, 6), v.path, v.org_kind === "company" ? v.org : v.org_kind === "anon" ? "Anonymous (" + (v.country || "?") + ")" : [v.city, v.region, v.country].filter(Boolean).join(", "), v.device]))}
<p class="note">Download: <a href="${base0}/dash.csv${dl("companies")}">companies</a> · <a href="${base0}/dash.csv${dl("people")}">people</a> · <a href="${base0}/dash.csv${dl("events")}">recent visits</a> (CSV)</p>
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
${sites.map(x => `<div class="c"><b>${esc(x.name)}</b> · ${esc(x.domain)}<br><small>Paste in the site's &lt;head&gt;:</small><code>&lt;script async src="${esc(o)}/v.js?s=${esc(x.site)}"&gt;&lt;/script&gt;</code><small>The consent banner and privacy settings button are on by default.</small><small>Paste into the site's privacy policy:</small><code>We use Who's There analytics (AIrecommend.ai). With your consent it stores a random ID in your browser and records pages viewed, approximate location and, for business networks, the organization name. Without consent we only count visits anonymously. Details and choices: ${esc(o)}/privacy?s=${esc(x.site)}</code><a href="${esc(o)}/dash?s=${esc(x.site)}&t=${esc(x.token)}">Open dashboard</a> · <a href="${esc(o)}/privacy?s=${esc(x.site)}">Privacy page</a></div>`).join("")}
<script>async function add(){const r=await fetch("${esc(base)}/api/admin/site",{method:"POST",headers:{authorization:"Bearer ${esc(key)}","content-type":"application/json"},body:JSON.stringify({name:n.value,domain:d.value,alert_webhook:w.value})});if(r.ok)location.reload();else alert("Failed")}</script></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}


// ---------------------------------------------------------------- privacy page
async function privacy(request, env, base) {
  const u = new URL(request.url); let name = "this website";
  try { await ensure(env.DB); const r = await env.DB.prepare(`SELECT name FROM sites WHERE site=?`).bind(u.searchParams.get("s") || "").first(); if (r && r.name) name = r.name; } catch { }
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>How visitor analytics works on ${esc(name)} | Who's There</title><meta name="robots" content="noindex">
<style>body{margin:0;background:#fff;color:#12151c;font:16px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}main{max-width:720px;margin:0 auto;padding:32px 20px 60px}h1{font-size:2rem;letter-spacing:-.02em;margin:.2em 0}h2{font-size:1.15rem;margin:1.8em 0 .4em}p,li{color:#3a4152}.k{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#2f5bea;font-weight:700}a{color:#2f5bea}.c{background:#f7f8fb;border:1px solid #e6e8ee;border-radius:12px;padding:14px 18px;margin:18px 0}@media(prefers-color-scheme:dark){body{background:#0e1016;color:#e9ecf3}p,li{color:#c2c8d6}.c{background:#161a23;border-color:#262b36}}</style></head><body><main>
<div class="k">Who's There · Privacy &amp; cookies</div><h1>How visitor analytics works on ${esc(name)}</h1>
<p>${esc(name)} uses Who's There, a visitor-analytics tool from AIrecommend.ai, to understand which pages help visitors and which businesses are interested. Here is exactly what it does, in plain language.</p>
<h2>If you click “No thanks”, or your browser sends Global Privacy Control or Do Not Track</h2><ul><li>No visitor ID is created, and any ID already stored is removed. Only your choice is remembered, so you are not asked again.</li><li>With Global Privacy Control or Do Not Track on, or after “No thanks”, nothing is sent at all.</li></ul>
<h2>If you have not answered yet</h2><ul><li>Only an anonymous page count is recorded: the page, the website you came from, your device type and your country. No ID, no company name, no IP address and nothing is stored in your browser.</li></ul>
<h2>If you click “Accept”</h2><ul><li>A random ID is stored in your browser (browser storage, which works like a cookie) so repeat visits can be recognized. It contains no personal information.</li><li>We record which pages you view, how long you stay, how far you scroll, where you came from, your device type and approximate location (city level).</li><li>If your connection belongs to a business or organization, its name can be recorded. Home and mobile connections are not turned into a name.</li><li>Your IP address is not stored. Only a scrambled one-way code is kept, so repeat visits can be matched.</li></ul>
<h2>Who you are</h2><p>You are only identified by name if you choose to type your details into a form on the website. Nothing is guessed about you, and we do not buy or add data from other companies.</p>
<h2>What we do not do</h2><ul><li>No selling of data, and no following you across other websites.</li><li>No advertising profiles.</li></ul>
<h2>Keeping your data</h2><p>Visit records are deleted after 24 months.</p>
<h2>Changing your mind</h2><p>Use the “Privacy settings” button at the bottom-left of the website to switch tracking off at any time. This also removes the ID from your browser. To ask what is held about you or to have it deleted, contact ${esc(name)}, or AIrecommend.ai through <a href="https://airecommend.ai/whosthere">airecommend.ai/whosthere</a>.</p>
<div class="c"><b>Who is responsible:</b> ${esc(name)} decides to use this tool on its website. AIrecommend.ai provides and hosts the tool. This page describes how the tool works and is not legal advice.</div>
</main></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
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


// ---------------------------------------------------------------- edge: install on a site with no code change
const AI_BOT = /GPTBot|OAI-SearchBot|ChatGPT-User|ClaudeBot|Claude-Web|anthropic-ai|PerplexityBot|Perplexity-User|Google-Extended|Googlebot|bingbot|Applebot|Amazonbot|Bytespider|CCBot|meta-externalagent|DuckAssistBot|YouBot|cohere-ai/i;
let SITES = null, SITES_AT = 0;
async function siteFor(env, host) {
  if (!SITES || Date.now() - SITES_AT > 60000) { await ensure(env.DB); SITES = ((await env.DB.prepare(`SELECT site,domain FROM sites WHERE domain IS NOT NULL AND domain!=''`).all()).results) || []; SITES_AT = Date.now(); }
  const h = host.replace(/^www\./, ""); return SITES.find(x => x.domain === h) || null;
}
async function edge(request, env, ctx) {
  const res = await fetch(request); // always serve the real site first; anything below fails open
  try {
    if (request.method !== "GET" || !(res.headers.get("content-type") || "").includes("text/html")) return res;
    const u = new URL(request.url), site = await siteFor(env, u.hostname); if (!site) return res;
    const ua = request.headers.get("user-agent") || "", m = ua.match(AI_BOT);
    if (m) {
      ctx.waitUntil(env.DB.prepare(`INSERT INTO events (site,ts,type,path,country,org,org_kind,ua,device,is_bot) VALUES (?,?,?,?,?,?,?,?,?,1)`)
        .bind(site.site, new Date().toISOString(), "view", s(u.pathname, 300), (request.cf && request.cf.country) || null, m[0], "bot", ua.slice(0, 250), "bot").run().catch(() => { }));
      return res;
    }
    if (BOT.test(ua)) return res;
    if (/^\/(dashboard|sign-in|sign-up|login|admin|account|checkout|api|rep-tools|rep-hub)(\/|$)/i.test(u.pathname)) return res; // private or logged-in areas are never tracked
    return new HTMLRewriter().on("head", { element(el) { el.append(`<script async src="/whosthere/v.js?s=${site.site}"></script>`, { html: true }); } }).transform(res);
  } catch { return res; }
}

const BASE = "/whosthere";
export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => { await ensure(env.DB); const cut = new Date(Date.now() - 730 * 864e5).toISOString(); await env.DB.batch([env.DB.prepare(`DELETE FROM events WHERE ts<?`).bind(cut), env.DB.prepare(`DELETE FROM alerts WHERE day<?`).bind(cut.slice(0, 10))]); })());
  },
  async fetch(request, env, ctx) {
    const u = new URL(request.url);
    let p = u.pathname.replace(/\/+$/, "") || "/", base = "";
    if (p === BASE || p.startsWith(BASE + "/")) { base = BASE; p = p.slice(BASE.length) || "/"; }
    // Any URL that is not /whosthere/* belongs to the host site: pass it through untouched (script is added to HTML pages only).
    if (!base && !u.hostname.endsWith("workers.dev")) return env.DB ? edge(request, env, ctx) : fetch(request);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders() });
    try {
      if (!env.DB) return json({ error: "no DB binding" }, 500);
      if (p === "/" && request.method === "GET") return new Response(LANDING, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
      if (p === "/v.js") return new Response(snippet(u.searchParams.get("s") || "", u.origin + base), { headers: { "content-type": "application/javascript; charset=utf-8", "cache-control": "public, max-age=300", ...corsHeaders() } });
      if (p === "/api/collect" && request.method === "POST") return await collect(request, env, ctx);
      if (p === "/api/lead" && request.method === "POST") return await lead(request, env);
      if (p === "/dash") return await dash(request, env);
      if (p === "/dash.csv") return await dash(request, env, true);
      if (p === "/api/forget" && request.method === "POST") return await forget(request, env);
      if (p === "/admin") return await admin(request, env, base);
      if (p === "/api/admin/site" && request.method === "POST") {
        const auth = (request.headers.get("authorization") || "").replace(/^Bearer /, "");
        if (!(await isAdmin(env, auth))) return json({ error: "unauthorized" }, 401);
        const b = await request.json();
        if (!b.name) return json({ error: "name required" }, 400);
        const r = await createSite(env, b.name, b.domain, b.alert_webhook);
        return json({ ...r, snippet: `<script async src="${u.origin}${base}/v.js?s=${r.site}"></script>`, dashboard: `${u.origin}${base}/dash?s=${r.site}&t=${r.token}` });
      }
      if (p === "/privacy" && request.method === "GET") return privacy(request, env, base);
      if (p === "/health") return json({ ok: true, service: "known-visitor" });
      return new Response("not found", { status: 404 });
    } catch (e) { return json({ error: String(e && e.message) }, 500); }
  }
};
