const LANDING = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<title>Who's There \u2014 see which companies visit your website | AIrecommend.ai</title>\n<meta name=\"description\" content=\"Who's There shows which companies visit your website, which pages they read, and who raises a hand. First-party, consent-aware, set up with one line of code.\">\n<meta property=\"og:title\" content=\"Who's There \u2014 see who's on your website\">\n<meta property=\"og:description\" content=\"Know which companies visit, what they read, and when a hot visitor lands. Consent-aware. One line to install.\">\n<meta name=\"theme-color\" content=\"#0e1016\">\n<style>\n:root{--brand:#2f5bea;--brand2:#7c3aed;--tint:#eef2ff;--good:#0f9d58;--warn:#c47f00;--bad:#d64545;\n--ink:#e9ecf3;--ink2:#c2c8d6;--muted:#9aa2b1;--line:#262b36;--panel:#161a23;--bg:#0e1016;--grad:linear-gradient(135deg,#2f5bea,#7c3aed)}\n@media(prefers-color-scheme:light){:root{--ink:#12151c;--ink2:#3a4152;--muted:#6b7280;--line:#e6e8ee;--panel:#f7f8fb;--bg:#fff}}\n*{box-sizing:border-box}html{scroll-behavior:smooth}\nbody{margin:0;background:var(--bg);color:var(--ink2);font:16px/1.6 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\n.wrap{max-width:1120px;margin:0 auto;padding:0 22px}\n.mark{font-weight:800;letter-spacing:-.02em;font-size:20px;color:var(--ink)}.mark b{color:var(--brand)}.mark i{font-style:normal;color:var(--muted);font-weight:600}\nnav{position:sticky;top:0;z-index:20;backdrop-filter:blur(14px);background:color-mix(in srgb,var(--bg) 82%,transparent);border-bottom:1px solid var(--line)}\nnav .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}\nnav .links{display:flex;gap:26px;align-items:center;font-size:14px;font-weight:600}\nnav .links a:hover{color:var(--ink)}@media(max-width:720px){nav .links a.h{display:none}}\n.btn{display:inline-flex;align-items:center;gap:8px;border-radius:10px;font-weight:700;padding:13px 22px;border:1px solid transparent;cursor:pointer;font:inherit;font-weight:700;transition:transform .15s,box-shadow .15s}\n.btn.p{background:var(--grad);color:#fff;box-shadow:0 10px 30px -10px rgba(47,91,234,.7)}.btn.p:hover{transform:translateY(-2px)}\n.btn.g{border-color:var(--line);color:var(--ink);background:transparent}.btn.g:hover{background:var(--panel)}\n.btn.s{padding:9px 16px;font-size:14px}\n.hero{position:relative;overflow:hidden;padding:84px 0 70px}\n.hero:before{content:\"\";position:absolute;inset:-30% -10% auto -10%;height:120%;background:radial-gradient(60% 50% at 70% 10%,rgba(124,58,237,.35),transparent 70%),radial-gradient(50% 45% at 20% 0%,rgba(47,91,234,.4),transparent 70%);pointer-events:none}\n.hero .wrap{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}\n@media(max-width:900px){.hero .wrap{grid-template-columns:1fr}.hero{padding-top:52px}}\n.kick{font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--brand)}\nh1{font-size:clamp(2.2rem,5vw,3.6rem);line-height:1.08;letter-spacing:-.03em;font-weight:800;color:var(--ink);margin:14px 0 18px}\nh1 em{font-style:normal;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}\n.sub{font-size:1.15rem;max-width:560px;color:var(--ink2)}\n.cta{display:flex;gap:12px;flex-wrap:wrap;margin:28px 0 16px}\n.fine{font-size:13px;color:var(--muted)}\n.feed{background:var(--panel);border:1px solid var(--line);border-radius:18px;box-shadow:0 30px 80px -30px rgba(47,91,234,.55);overflow:hidden}\n.feed .top{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border-bottom:1px solid var(--line);font-size:13px;color:var(--muted)}\n.live{display:inline-flex;align-items:center;gap:8px;color:var(--ink);font-weight:700}.live:before{content:\"\";width:8px;height:8px;border-radius:50%;background:var(--good);box-shadow:0 0 0 0 rgba(15,157,88,.6);animation:pulse 1.8s infinite}\n@keyframes pulse{70%{box-shadow:0 0 0 9px rgba(15,157,88,0)}100%{box-shadow:0 0 0 0 rgba(15,157,88,0)}}\n.row{display:grid;grid-template-columns:38px 1fr auto;gap:12px;align-items:center;padding:13px 18px;border-bottom:1px solid var(--line);animation:in .5s ease both}\n@keyframes in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}\n.av{width:38px;height:38px;border-radius:10px;background:var(--tint);color:var(--brand);display:grid;place-items:center;font-weight:800}\n.row b{display:block;color:var(--ink);font-size:15px;line-height:1.2}.row small{color:var(--muted);font-size:12.5px}\n.tag{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:4px 9px;border-radius:999px;background:rgba(124,58,237,.16);color:#a78bfa;white-space:nowrap}\n.tag.hot{background:rgba(214,69,69,.16);color:#f08a8a}.tag.new{background:rgba(15,157,88,.16);color:#5fd39a}\n@media(prefers-color-scheme:light){.tag{color:#6d28d9}.tag.hot{color:#b42323}.tag.new{color:#0a7a43}}\n.sample{padding:10px 18px;font-size:12px;color:var(--muted);text-align:center}\nsection{padding:78px 0}\nh2{font-size:clamp(1.7rem,3.2vw,2.4rem);letter-spacing:-.02em;line-height:1.15;color:var(--ink);margin:10px 0 14px;font-weight:800}\n.lead{max-width:640px;font-size:1.08rem}\n.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}\n@media(max-width:860px){.steps{grid-template-columns:1fr}}\n.card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:24px}\n.card h3{color:var(--ink);margin:12px 0 6px;font-size:1.1rem}.card p{margin:0}\n.num{width:34px;height:34px;border-radius:10px;background:var(--grad);color:#fff;font-weight:800;display:grid;place-items:center}\n.tw2{overflow-x:auto;border:1px solid var(--line);border-radius:16px;background:var(--panel)}.cmp{border-collapse:collapse;width:100%;min-width:640px}.cmp th{color:var(--ink);text-align:left;padding:14px 16px;border-bottom:1px solid var(--line);font-size:14px}.cmp td{padding:14px 16px;border-bottom:1px solid var(--line);vertical-align:top;font-size:15px}.cmp td:first-child{color:var(--ink);font-weight:700;white-space:nowrap}.cmp tr:last-child td{border-bottom:0}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}\n@media(max-width:900px){.grid{grid-template-columns:1fr 1fr}}@media(max-width:600px){.grid{grid-template-columns:1fr}}\n.ic{font-size:22px}\n.split{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:38px}@media(max-width:800px){.split{grid-template-columns:1fr}}\n.co{border-left:4px solid var(--good);border-radius:0 14px 14px 0;background:rgba(15,157,88,.08);padding:22px}\n.co.no{border-color:var(--warn);background:rgba(196,127,0,.09)}\n.co h3{margin:0 0 10px;color:var(--ink)}.co ul{margin:0;padding-left:20px}.co li{margin:6px 0}\n.dash{margin-top:38px;border-radius:18px;border:1px solid var(--line);background:var(--panel);overflow:hidden}\n.kp{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-bottom:1px solid var(--line)}\n@media(max-width:700px){.kp{grid-template-columns:1fr 1fr}}\n.kp div{padding:18px 20px;border-right:1px solid var(--line)}.kp b{display:block;font-size:30px;color:var(--ink);font-variant-numeric:tabular-nums;letter-spacing:-.02em}.kp small{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}\ntable{width:100%;border-collapse:collapse;font-size:14px}th{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);text-align:left;padding:12px 20px}td{padding:12px 20px;border-top:1px solid var(--line);color:var(--ink2);font-variant-numeric:tabular-nums}td:first-child{color:var(--ink);font-weight:600}\n.scroll{overflow-x:auto}\ndetails{border-bottom:1px solid var(--line);padding:18px 0}summary{cursor:pointer;font-weight:700;color:var(--ink);font-size:1.05rem;list-style:none}summary::-webkit-details-marker{display:none}summary:after{content:\"+\";float:right;color:var(--brand);font-size:22px;line-height:1}details[open] summary:after{content:\"\u2013\"}details p{margin:10px 0 0;max-width:760px}\n.cta-box{border-radius:24px;padding:54px 30px;text-align:center;background:var(--grad);color:#fff;position:relative;overflow:hidden}\n.cta-box h2{color:#fff}.cta-box p{color:rgba(255,255,255,.88);max-width:560px;margin:0 auto 26px}\nform{display:grid;gap:10px;max-width:520px;margin:0 auto;text-align:left}\ninput,textarea{width:100%;padding:14px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.14);color:#fff;font:inherit}\ninput::placeholder,textarea::placeholder{color:rgba(255,255,255,.75)}\ninput:focus,textarea:focus{outline:2px solid #fff;background:rgba(255,255,255,.2)}\n.btn.w{background:#fff;color:#2f5bea;justify-content:center}\n#ok{display:none;font-weight:700;font-size:1.1rem}\nfooter{padding:36px 0 60px;border-top:1px solid var(--line);font-size:13px;color:var(--muted)}\nfooter .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:center}\n</style>\n</head>\n<body>\n<nav><div class=\"wrap\"><a class=\"mark\" href=\"https://airecommend.ai\"><b>AI</b>recommend<i>.ai</i></a>\n<div class=\"links\"><a class=\"h\" href=\"#how\">How it works</a><a class=\"h\" href=\"#honest\">What it does</a><a class=\"h\" href=\"#compare\">Compare</a><a class=\"h\" href=\"/whosthere/signup\">Get started</a><a class=\"h\" href=\"#pricing\">Pricing</a><a class=\"h\" href=\"#faq\">FAQ</a><a class=\"btn p s\" href=\"#access\">Get early access</a></div></div></nav>\n\n<header class=\"hero\"><div class=\"wrap\">\n<div>\n<div class=\"kick\">AIrecommend.ai \u00b7 Who's There</div>\n<h1>Someone just read your prices. <em>Do you know who they were?</em></h1>\n<p class=\"sub\">Most people look at your website, think about it, and leave without calling. You never find out. <b style=\"color:var(--brand2)\">Who's There</b> tells you which customers stopped by, what they looked at, and sends a ping to your phone the moment someone checks your prices or contact page, so you can reach out while they're still thinking about you.</p>\n<ul style=\"list-style:none;padding:0;margin:18px 0 6px;display:grid;gap:10px;color:var(--ink2);font-size:16px\">\n<li>\ud83d\udcf1 <b>A ping on your phone</b> when someone looks at pricing, contact or booking</li>\n<li>\ud83c\udfe2 <b>Who your customer is</b> behind the visit, when it can be found</li>\n<li>\ud83e\udd16 <b>Which AI assistants</b> (ChatGPT, Perplexity, Claude) are sending people to you</li>\n<li>\ud83d\udd12 <b>Honest and private</b>: visitors say yes or no first, and can delete their data any time</li>\n</ul>\n<div class=\"cta\"><a class=\"btn p\" href=\"/whosthere/signup\">Start for $99/mo \u2192</a><a class=\"btn g\" href=\"#how\">See how it works</a></div>\n<div class=\"fine\">No tech skills needed: paste one line, live in about two minutes. When we can't tell who someone is, we say so instead of guessing.</div>\n</div>\n<div class=\"feed\" aria-label=\"Sample live visitor feed\">\n<div class=\"top\"><span class=\"live\">Live visitors</span><span>Last 24 hours</span></div>\n<div id=\"feed\"></div>\n<div class=\"sample\">Sample data for illustration</div>\n</div>\n</div></header>\n\n<section id=\"how\"><div class=\"wrap\">\n<div class=\"kick\">How it works</div><h2>Three steps. About five minutes.</h2>\n<p class=\"lead\">No new software for your visitors, no forms to add, nothing to maintain.</p>\n<div class=\"steps\">\n<div class=\"card\"><div class=\"num\">1</div><h3>Paste one line</h3><p>Add a single script tag to your site's header. It works on WordPress, Webflow, Shopify, or plain HTML.</p></div>\n<div class=\"card\"><div class=\"num\">2</div><h3>We name the company</h3><p>Each visit is matched to the organization that owns the network, with the pages viewed, time on page, and where they came from.</p></div>\n<div class=\"card\"><div class=\"num\">3</div><h3>You hear about the hot ones</h3><p>When someone lands on pricing, contact, or booking, you get an alert you can send to Slack, Make, or any webhook.</p></div>\n</div></div></section>\n\n<section style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">What you get</div><h2>Built for owners, agencies, and sales teams.</h2>\n<div class=\"grid\">\n<div class=\"card\"><div class=\"ic\">\ud83c\udfe2</div><h3>Company recognition</h3><p>See which businesses visit and how often they return, ranked by how much they read.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udd25</div><h3>Hot-visitor alerts</h3><p>Pricing, contact, quote, and booking pages are flagged. One alert per visitor per day, so no noise.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\ude4b</div><h3>People who raise a hand</h3><p>When a visitor fills out a form, their name and email attach to their visit history. Their action, their consent.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udee1\ufe0f</div><h3>Consent-first</h3><p>Honors Global Privacy Control and Do Not Track. A consent banner is on by default: visitors who haven't accepted are only counted anonymously, with no ID and no company name.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udcf1</div><h3>A dashboard for every client</h3><p>Each site gets its own private, phone-friendly dashboard. Perfect for agencies and franchise networks.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83e\udd16</div><h3>Bots filtered out</h3><p>Crawlers and AI bots are kept out of your human numbers, so your counts stay honest.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udcac</div><h3>AI assistants sending visitors</h3><p>See who arrived from ChatGPT, Perplexity, Gemini, Claude and more. Proof that AI is recommending you.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udd77\ufe0f</div><h3>AI crawler watch</h3><p>Know which AI and search crawlers read your pages, and how often, even though they never run scripts.</p></div>\n<div class=\"card\"><div class=\"ic\">\ud83d\udc46</div><h3>Clicks, calls and forms</h3><p>Track taps on call and email buttons, downloads, outbound links, and who started a form. Never what they typed.</p></div>\n</div></div></section>\n\n<section id=\"start\" style=\"padding-top:0\"><div class=\"wrap\"><div class=\"kick\">Get started</div><h2>Be live in two minutes.</h2><p style=\"max-width:640px;color:var(--muted)\">Create your private dashboard, paste one line on your website (guides for WordPress, Shopify, Wix, Squarespace and Webflow), and visitors start showing up. A consent banner is included.</p><p><a class=\"btn p\" href=\"/whosthere/signup\">Get my install code</a> &nbsp; <a class=\"btn g\" href=\"/whosthere/install\">Install guides</a></p></div></section>\n\n<section id=\"compare\" style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">How it's different</div><h2>Built on consent, not on a data broker.</h2>\n<div class=\"tw2\"><table class=\"cmp\"><tr><th></th><th>Who's There</th><th>Person-level tools (for example RB2B)</th></tr>\n<tr><td>How a person gets named</td><td>Only when they submit a form or you identify them. Their action, their consent.</td><td>Matched against a third-party database using cookies, device IDs and IP addresses.</td></tr>\n<tr><td>Consent</td><td>Banner on by default. No ID and no company name until a visitor accepts. Honors Global Privacy Control and Do Not Track.</td><td>RB2B's own help pages say it does not enforce consent for you; you configure it and update your privacy policy.</td></tr>\n<tr><td>Visitor's right to delete</td><td>Withdrawing consent deletes that visitor's stored data from our servers.</td><td>Separate opt-out and database-removal forms.</td></tr>\n<tr><td>Where it works</td><td>Any country, because it relies on consent rather than a US-only database.</td><td>Person-level identification is US-only; other countries get company-level data.</td></tr>\n<tr><td>AI search</td><td>Shows visitors sent by ChatGPT, Perplexity, Gemini and Claude, and which AI crawlers read your pages.</td><td>Focused on identifying people for outreach.</td></tr>\n<tr><td>What it does not do</td><td>It will not hand you a stranger's name, email or LinkedIn profile.</td><td>That is what these tools are built to do.</td></tr></table></div>\n<p style=\"margin-top:14px;font-size:14px;color:var(--muted)\">If your goal is a contact list of strangers with job titles and emails, a data-broker tool is built for that. If you want to know who is interested, act on it quickly, and stay on the right side of privacy law, that is what Who's There is for. Competitor details come from their own published pages.</p>\n</div></section>\n\n<section id=\"pricing\" style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">Pricing</div><h2>Simple monthly plans.</h2>\n<style>.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px;margin-top:38px}</style>\n<div class=\"pg\"><div class=\"card\"><h3>Starter</h3><p style=\"font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0\">$99<span style=\"font-size:1rem;font-weight:600;color:var(--muted)\">/mo</span></p><p>1 website. Company recognition, hot-visitor alerts, AI-assistant and AI-crawler reports, weekly report, private phone-friendly dashboard.</p><p style=\"margin-top:16px\"><a class=\"btn p\" href=\"/whosthere/signup\">Get started</a></p></div><div class=\"card\"><h3>Growth</h3><p style=\"font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0\">$199<span style=\"font-size:1rem;font-weight:600;color:var(--muted)\">/mo</span></p><p>Up to 3 websites. Everything in Starter, plus sending hot visitors to your CRM (Zapier, HubSpot and more) and CSV and JSON exports.</p><p style=\"margin-top:16px\"><a class=\"btn p\" href=\"/whosthere/signup\">Get started</a></p></div><div class=\"card\"><h3>Pro</h3><p style=\"font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0\">$399<span style=\"font-size:1rem;font-weight:600;color:var(--muted)\">/mo</span></p><p>Up to 10 websites, each with its own private dashboard. Everything in Growth, plus setup help on every site.</p><p style=\"margin-top:16px\"><a class=\"btn p\" href=\"/whosthere/signup\">Get started</a></p></div><div class=\"card\"><h3>Agency</h3><p style=\"font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0\">$999<span style=\"font-size:1rem;font-weight:600;color:var(--muted)\">/mo</span></p><p>Up to 50 websites for agencies and multi-location owners. We set up and monitor every site for you.</p><p style=\"margin-top:16px\"><a class=\"btn p\" href=\"/whosthere/signup\">Get started</a></p></div><div class=\"card\"><h3>Custom</h3><p style=\"font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0\">Custom<span style=\"font-size:1rem;font-weight:600;color:var(--muted)\"></span></p><p>Franchise systems and large networks. Volume pricing and a plan built around your sites.</p><p style=\"margin-top:16px\"><a class=\"btn g\" href=\"#access\">Talk to us</a></p></div></div>\n<p style=\"margin-top:18px;font-size:14px;color:var(--muted)\">One-time setup is $497 per tool. Prices are for payment by wire; paying by card adds a 5% convenience fee. Already an AIrecommend.ai client? Who's There is available as an add-on to your programs, and bundling tools saves 10% to 40% on the monthly fee.</p>\n</div></section>\n\n<section id=\"honest\" style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">Straight talk</div><h2>What it can name, and what it can't.</h2>\n<p class=\"lead\">Most tools in this category oversell. Here is the real mechanism.</p>\n<div class=\"split\">\n<div class=\"co\"><h3>It can</h3><ul><li>Name the business behind a visit from an office or corporate network</li><li>Show city and region for every visit</li><li>Show the full page-by-page path and time on each page</li><li>Attach a name and email when a visitor submits a form</li></ul></div>\n<div class=\"co no\"><h3>It can't</h3><ul><li>Name a person browsing from home or a phone unless they identify themselves</li><li>Tell you who someone is from an IP address alone</li><li>Promise a match rate. It depends on who actually visits you</li></ul></div>\n</div></div></section>\n\n<section style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">The dashboard</div><h2>Open it on your phone. Know who to call.</h2>\n<div class=\"dash\">\n<div class=\"kp\"><div><b>1,284</b><small>Visitors</small></div><div><b>46</b><small>Companies</small></div><div><b>9</b><small>Hot visitors</small></div><div><b>3:12</b><small>Avg time</small></div></div>\n<div class=\"scroll\"><table><tr><th>Company</th><th>Views</th><th>Key pages</th><th>Where</th><th>Last seen</th></tr>\n<tr><td>Northwind Logistics</td><td>14</td><td>3</td><td>Tampa, FL</td><td>2 min ago</td></tr>\n<tr><td>Summit Dental Group</td><td>9</td><td>2</td><td>Provo, UT</td><td>38 min ago</td></tr>\n<tr><td>Harbor Capital Partners</td><td>7</td><td>2</td><td>Dallas, TX</td><td>1 hr ago</td></tr>\n<tr><td>Pine Ridge Realty</td><td>5</td><td>1</td><td>Scottsdale, AZ</td><td>3 hr ago</td></tr></table></div>\n<div class=\"sample\">Sample data for illustration. Company names are fictional.</div>\n</div></div></section>\n\n<section id=\"faq\" style=\"padding-top:0\"><div class=\"wrap\">\n<div class=\"kick\">Questions</div><h2>Before you ask.</h2>\n<details><summary>Is this legal and private?</summary><p>It is built to be consent-aware: it honors Global Privacy Control and Do Not Track, shows a consent banner by default (no ID or company name until a visitor accepts), links to a plain-language privacy page, and stores a salted hash instead of the raw IP address. People are only named when they submit a form themselves. You should still have a privacy notice on your site, and for legal advice on your situation, talk to your own attorney. We are not a law firm.</p></details>\n<details><summary>Will it slow my site?</summary><p>No. It is a tiny script that loads asynchronously and sends small beacons in the background.</p></details>\n<details><summary>Who is it for?</summary><p>Business owners who want to know who is looking, agencies that run many client sites, and sales teams that want to call the right company at the right moment.</p></details>\n<details><summary>What does it cost?</summary><p>Plans are $99, $199, $399 or $999 a month depending on how many websites you need, with custom pricing for larger networks, plus a one-time $497 setup. If you already use AIrecommend.ai programs, it can be added to your account, and bundling saves 10% to 40% on the monthly fee. See the pricing section above.</p></details>\n</div></section>\n\n<section id=\"access\" style=\"padding-top:0\"><div class=\"wrap\"><div class=\"cta-box\">\n<h2>Find out who's there.</h2>\n<p>Request early access. We'll set up your site and show you what your own traffic looks like.</p>\n<form id=\"f\"><input name=\"name\" placeholder=\"Your name\" required autocomplete=\"name\"><input name=\"email\" type=\"email\" placeholder=\"Email\" required autocomplete=\"email\"><input name=\"website\" placeholder=\"Your website (optional)\" autocomplete=\"url\"><textarea name=\"message\" rows=\"2\" placeholder=\"Anything we should know? (optional)\"></textarea><button class=\"btn w\" type=\"submit\">Request early access</button></form>\n<div id=\"ok\">Thank you. We'll be in touch shortly.</div>\n</div></div></section>\n\n<footer><div class=\"wrap\"><a class=\"mark\" href=\"https://airecommend.ai\"><b>AI</b>recommend<i>.ai</i></a><span>Who's There \u00b7 Powered by AIrecommend.ai \u00b7 <a href=\"/whosthere/privacy\" style=\"color:inherit\">Privacy &amp; cookies</a></span></div></footer>\n\n<script>\n(function(){\nvar data=[[\"Northwind Logistics\",\"Viewed /pricing\",\"Tampa, FL\",\"hot\",\"Hot\"],[\"Summit Dental Group\",\"Viewed /contact\",\"Provo, UT\",\"hot\",\"Hot\"],[\"Harbor Capital Partners\",\"Read 4 pages\",\"Dallas, TX\",\"\",\"Returning\"],[\"Pine Ridge Realty\",\"Viewed /services\",\"Scottsdale, AZ\",\"new\",\"New\"],[\"Bluepoint Manufacturing\",\"Viewed /book\",\"Columbus, OH\",\"hot\",\"Hot\"],[\"Cedar & Oak Law\",\"Read 3 pages\",\"Atlanta, GA\",\"new\",\"New\"],[\"Redwood Health Network\",\"Viewed /quote\",\"Denver, CO\",\"hot\",\"Hot\"],[\"Lakeshore Insurance\",\"Read 2 pages\",\"Milwaukee, WI\",\"\",\"Returning\"]];\nvar el=document.getElementById(\"feed\"),i=0;\nfunction add(){var d=data[i%data.length];i++;var r=document.createElement(\"div\");r.className=\"row\";\nr.innerHTML='<div class=\"av\">'+d[0][0]+'</div><div><b>'+d[0]+'</b><small>'+d[1]+' \u00b7 '+d[2]+'</small></div><span class=\"tag '+d[3]+'\">'+d[4]+'</span>';\nel.insertBefore(r,el.firstChild);while(el.children.length>5)el.removeChild(el.lastChild)}\nfor(var k=0;k<4;k++)add();\nif(!matchMedia(\"(prefers-reduced-motion: reduce)\").matches)setInterval(add,2600);\nvar f=document.getElementById(\"f\");\nf.addEventListener(\"submit\",function(e){e.preventDefault();var b=f.querySelector(\"button\");b.disabled=true;b.textContent=\"Sending\u2026\";\nvar o={};new FormData(f).forEach(function(v,k){o[k]=v});\nfetch(location.pathname.replace(/\\/$/,\"\")+\"/api/lead\",{method:\"POST\",headers:{\"content-type\":\"application/json\"},body:JSON.stringify(o)}).then(function(r){if(!r.ok)throw 0;f.style.display=\"none\";document.getElementById(\"ok\").style.display=\"block\"}).catch(function(){b.disabled=false;b.textContent=\"Something went wrong. Try again\"})});\n})();\n</script>\n</body>\n</html>\n";
//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 40
   * @param errorCorrectionLevel 'L','M','Q','H'
   */
  var qrcode = function(typeNumber, errorCorrectionLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];

    var _this = {};

    var makeImpl = function(test, maskPattern) {

      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        var modules = new Array(moduleCount);
        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

      for (var r = -1; r <= 7; r += 1) {

        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {

          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function() {

      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {

        makeImpl(true, i);

        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function() {

      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = (r % 2 == 0);
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = (c % 2 == 0);
      }
    };

    var setupPositionAdjustPattern = function() {

      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {

        for (var j = 0; j < pos.length; j += 1) {

          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {

            for (var c = -2; c <= 2; c += 1) {

              if (r == -2 || r == 2 || c == -2 || c == 2
                  || (r == 0 && c == 0) ) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function(test) {

      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function(test, maskPattern) {

      var data = (_errorCorrectionLevel << 3) | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      _modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {

        if (col == 6) col -= 1;

        while (true) {

          for (var c = 0; c < 2; c += 1) {

            if (_modules[row][col - c] == null) {

              var dark = false;

              if (byteIndex < data.length) {
                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function(buffer, rsBlocks) {

      var offset = 0;

      var maxDcCount = 0;
      var maxEcCount = 0;

      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {

        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;

        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function(typeNumber, errorCorrectionLevel, dataList) {

      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
        data.write(buffer);
      }

      // calc num max data.
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw 'code length overflow. ('
          + buffer.getLengthInBits()
          + '>'
          + totalDataCount * 8
          + ')';
      }

      // end code
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      // padding
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      // padding
      while (true) {

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data, mode) {

      mode = mode || 'Byte';

      var newData = null;

      switch(mode) {
      case 'Numeric' :
        newData = qrNumber(data);
        break;
      case 'Alphanumeric' :
        newData = qrAlphaNum(data);
        break;
      case 'Byte' :
        newData = qr8BitByte(data);
        break;
      case 'Kanji' :
        newData = qrKanji(data);
        break;
      default :
        throw 'mode:' + mode;
      }

      _dataList.push(newData);
      _dataCache = null;
    };

    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + ',' + col;
      }
      return _modules[row][col];
    };

    _this.getModuleCount = function() {
      return _moduleCount;
    };

    _this.make = function() {
      if (_typeNumber < 1) {
        var typeNumber = 1;

        for (; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
          var buffer = qrBitBuffer();

          for (var i = 0; i < _dataList.length; i++) {
            var data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
            data.write(buffer);
          }

          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }

        _typeNumber = typeNumber;
      }

      makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var qrHtml = '';

      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {

        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';

      return qrHtml;
    };

    _this.createSvgTag = function(cellSize, margin, alt, title) {

      var opts = {};
      if (typeof arguments[0] == 'object') {
        // Called by options.
        opts = arguments[0];
        // overwrite cellSize and margin.
        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      // Compose alt property surrogate
      alt = (typeof alt === 'string') ? {text: alt} : alt || {};
      alt.text = alt.text || null;
      alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

      // Compose title property surrogate
      title = (typeof title === 'string') ? {text: title} : title || {};
      title.text = title.text || null;
      title.id = (title.text) ? title.id || 'qrcode-title' : null;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var c, mc, r, mr, qrSvg='', rect;

      rect = 'l' + cellSize + ',0 0,' + cellSize +
        ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
          escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
      qrSvg += '>';
      qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
          escapeXml(title.text) + '</title>' : '';
      qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
          escapeXml(alt.text) + '</description>' : '';
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';

      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;
        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c) ) {
            mc = c*cellSize+margin;
            qrSvg += 'M' + mc + ',' + mr + rect;
          }
        }
      }

      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += '</svg>';

      return qrSvg;
    };

    _this.createDataURL = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      return createDataURL(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor( (x - min) / cellSize);
          var r = Math.floor( (y - min) / cellSize);
          return _this.isDark(r, c)? 0 : 1;
        } else {
          return 1;
        }
      } );
    };

    _this.createImgTag = function(cellSize, margin, alt) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;

      var img = '';
      img += '<img';
      img += '\u0020src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += '\u0020width="';
      img += size;
      img += '"';
      img += '\u0020height="';
      img += size;
      img += '"';
      if (alt) {
        img += '\u0020alt="';
        img += escapeXml(alt);
        img += '"';
      }
      img += '/>';

      return img;
    };

    var escapeXml = function(s) {
      var escaped = '';
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charAt(i);
        switch(c) {
        case '<': escaped += '&lt;'; break;
        case '>': escaped += '&gt;'; break;
        case '&': escaped += '&amp;'; break;
        case '"': escaped += '&quot;'; break;
        default : escaped += c; break;
        }
      }
      return escaped;
    };

    var _createHalfASCII = function(margin) {
      var cellSize = 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r1, r2, p;

      var blocks = {
        '██': '█',
        '█ ': '▀',
        ' █': '▄',
        '  ': ' '
      };

      var blocksLastLineNoMargin = {
        '██': '▀',
        '█ ': '▀',
        ' █': ' ',
        '  ': ' '
      };

      var ascii = '';
      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);
        for (x = 0; x < size; x += 1) {
          p = '█';

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = ' ';
          }

          if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += ' ';
          }
          else {
            p += '█';
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
        }

        ascii += '\n';
      }

      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.createASCII = function(cellSize, margin) {
      cellSize = cellSize || 1;

      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }

      cellSize -= 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r, p;

      var white = Array(cellSize+1).join('██');
      var black = Array(cellSize+1).join('  ');

      var ascii = '';
      var line = '';
      for (y = 0; y < size; y += 1) {
        r = Math.floor( (y - min) / cellSize);
        line = '';
        for (x = 0; x < size; x += 1) {
          p = 1;

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          line += p ? white : black;
        }

        for (r = 0; r < cellSize; r += 1) {
          ascii += line + '\n';
        }
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.renderTo2dContext = function(context, cellSize) {
      cellSize = cellSize || 2;
      var length = _this.getModuleCount();
      for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
          context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }

    return _this;
  };

  //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytesFuncs = {
    'default' : function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
      }
      return bytes;
    }
  };

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

  //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */
  qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

      var bin = base64DecodeInputStream(unicodeData);
      var read = function() {
        var b = bin.read();
        if (b == -1) throw 'eof';
        return b;
      };

      var count = 0;
      var unicodeMap = {};
      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode( (b0 << 8) | b1);
        var v = (b2 << 8) | b3;
        unicodeMap[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw count + ' != ' + numChars;
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];
          if (typeof b == 'number') {
            if ( (b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER :    1 << 0,
    MODE_ALPHA_NUM : 1 << 1,
    MODE_8BIT_BYTE : 1 << 2,
    MODE_KANJI :     1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectionLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectionLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
      var digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };

    _this.getBCHTypeInfo = function(data) {
      var d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
      }
      return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
      var d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
      }
      return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

      switch (maskPattern) {

      case QRMaskPattern.PATTERN000 :
        return function(i, j) { return (i + j) % 2 == 0; };
      case QRMaskPattern.PATTERN001 :
        return function(i, j) { return i % 2 == 0; };
      case QRMaskPattern.PATTERN010 :
        return function(i, j) { return j % 3 == 0; };
      case QRMaskPattern.PATTERN011 :
        return function(i, j) { return (i + j) % 3 == 0; };
      case QRMaskPattern.PATTERN100 :
        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
      case QRMaskPattern.PATTERN101 :
        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
      case QRMaskPattern.PATTERN110 :
        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
      case QRMaskPattern.PATTERN111 :
        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

      default :
        throw 'bad maskPattern:' + maskPattern;
      }
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      var a = qrPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
      }
      return a;
    };

    _this.getLengthInBits = function(mode, type) {

      if (1 <= type && type < 10) {

        // 1 - 9

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 10;
        case QRMode.MODE_ALPHA_NUM : return 9;
        case QRMode.MODE_8BIT_BYTE : return 8;
        case QRMode.MODE_KANJI     : return 8;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 27) {

        // 10 - 26

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 12;
        case QRMode.MODE_ALPHA_NUM : return 11;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 10;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 41) {

        // 27 - 40

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 14;
        case QRMode.MODE_ALPHA_NUM : return 13;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 12;
        default :
          throw 'mode:' + mode;
        }

      } else {
        throw 'type:' + type;
      }
    };

    _this.getLostPoint = function(qrcode) {

      var moduleCount = qrcode.getModuleCount();

      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {

          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {

            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {

              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c) ) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += (3 + sameCount - 5);
          }
        }
      };

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col) ) count += 1;
          if (qrcode.isDark(row + 1, col) ) count += 1;
          if (qrcode.isDark(row, col + 1) ) count += 1;
          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row, col + 1)
              &&  qrcode.isDark(row, col + 2)
              &&  qrcode.isDark(row, col + 3)
              &&  qrcode.isDark(row, col + 4)
              && !qrcode.isDark(row, col + 5)
              &&  qrcode.isDark(row, col + 6) ) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row + 1, col)
              &&  qrcode.isDark(row + 2, col)
              &&  qrcode.isDark(row + 3, col)
              &&  qrcode.isDark(row + 4, col)
              && !qrcode.isDark(row + 5, col)
              &&  qrcode.isDark(row + 6, col) ) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col) ) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;

      return lostPoint;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4]
        ^ EXP_TABLE[i - 5]
        ^ EXP_TABLE[i - 6]
        ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

      if (n < 1) {
        throw 'glog(' + n + ')';
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------

  function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
      throw num.length + '/' + shift;
    }

    var _num = function() {
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }
      var _num = new Array(num.length - offset + shift);
      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }
      return _num;
    }();

    var _this = {};

    _this.getAt = function(index) {
      return _num[index];
    };

    _this.getLength = function() {
      return _num.length;
    };

    _this.multiply = function(e) {

      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

      var num = new Array(_this.getLength() );
      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.getAt(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
      }

      // recursive call
      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function() {

    var RS_BLOCK_TABLE = [

      // L
      // M
      // Q
      // H

      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],

      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],

      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],

      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],

      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],

      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],

      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],

      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],

      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],

      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],

      // 11
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],

      // 12
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],

      // 13
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],

      // 14
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],

      // 15
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],

      // 16
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],

      // 17
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],

      // 18
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],

      // 19
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],

      // 20
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],

      // 21
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],

      // 22
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],

      // 23
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],

      // 24
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],

      // 25
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],

      // 26
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],

      // 27
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],

      // 28
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],

      // 29
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],

      // 30
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],

      // 31
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],

      // 32
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],

      // 33
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],

      // 34
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],

      // 35
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],

      // 36
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],

      // 37
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],

      // 38
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],

      // 39
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],

      // 40
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];

    var qrRSBlock = function(totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

      switch(errorCorrectionLevel) {
      case QRErrorCorrectionLevel.L :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectionLevel.M :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectionLevel.Q :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectionLevel.H :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default :
        return undefined;
      }
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

      if (typeof rsBlock == 'undefined') {
        throw 'bad rs block @ typeNumber:' + typeNumber +
            '/errorCorrectionLevel:' + errorCorrectionLevel;
      }

      var length = rsBlock.length / 3;

      var list = [];

      for (var i = 0; i < length; i += 1) {

        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount) );
        }
      }

      return list;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------

  var qrBitBuffer = function() {

    var _buffer = [];
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
      return _buffer;
    };

    _this.getAt = function(index) {
      var bufIndex = Math.floor(index / 8);
      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
      }
    };

    _this.getLengthInBits = function() {
      return _length;
    };

    _this.putBit = function(bit) {

      var bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
      }

      _length += 1;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrNumber
  //---------------------------------------------------------------------

  var qrNumber = function(data) {

    var _mode = QRMode.MODE_NUMBER;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var data = _data;

      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(strToNum(data.substring(i, i + 3) ), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i == 1) {
          buffer.put(strToNum(data.substring(i, i + 1) ), 4);
        } else if (data.length - i == 2) {
          buffer.put(strToNum(data.substring(i, i + 2) ), 7);
        }
      }
    };

    var strToNum = function(s) {
      var num = 0;
      for (var i = 0; i < s.length; i += 1) {
        num = num * 10 + chatToNum(s.charAt(i) );
      }
      return num;
    };

    var chatToNum = function(c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      }
      throw 'illegal char :' + c;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrAlphaNum
  //---------------------------------------------------------------------

  var qrAlphaNum = function(data) {

    var _mode = QRMode.MODE_ALPHA_NUM;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var s = _data;

      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(
          getCode(s.charAt(i) ) * 45 +
          getCode(s.charAt(i + 1) ), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(getCode(s.charAt(i) ), 6);
      }
    };

    var getCode = function(c) {

      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        switch (c) {
        case ' ' : return 36;
        case '$' : return 37;
        case '%' : return 38;
        case '*' : return 39;
        case '+' : return 40;
        case '-' : return 41;
        case '.' : return 42;
        case '/' : return 43;
        case ':' : return 44;
        default :
          throw 'illegal char :' + c;
        }
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------

  var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _bytes.length;
    };

    _this.write = function(buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrKanji
  //---------------------------------------------------------------------

  var qrKanji = function(data) {

    var _mode = QRMode.MODE_KANJI;
    var _data = data;

    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
    if (!stringToBytes) {
      throw 'sjis not supported.';
    }
    !function(c, code) {
      // self test for sjis support.
      var test = stringToBytes(c);
      if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
        throw 'sjis not supported.';
      }
    }('\u53cb', 0x9746);

    var _bytes = stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return ~~(_bytes.length / 2);
    };

    _this.write = function(buffer) {

      var data = _bytes;

      var i = 0;

      while (i + 1 < data.length) {

        var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

        if (0x8140 <= c && c <= 0x9FFC) {
          c -= 0x8140;
        } else if (0xE040 <= c && c <= 0xEBBF) {
          c -= 0xC140;
        } else {
          throw 'illegal char at ' + (i + 1) + '/' + c;
        }

        c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

        buffer.put(c, 13);

        i += 2;
      }

      if (i < data.length) {
        throw 'illegal char at ' + (i + 1);
      }
    };

    return _this;
  };

  //=====================================================================
  // GIF Support etc.
  //

  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------

  var byteArrayOutputStream = function() {

    var _bytes = [];

    var _this = {};

    _this.writeByte = function(b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function(s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i) );
      }
    };

    _this.toByteArray = function() {
      return _bytes;
    };

    _this.toString = function() {
      var s = '';
      s += '[';
      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }
        s += _bytes[i];
      }
      s += ']';
      return s;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------

  var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
      if (n < 0) {
        // error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw 'n:' + n;
    };

    _this.writeByte = function(n) {

      _buffer = (_buffer << 8) | (n & 0xff);
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> (_buflen - 6) );
        _buflen -= 6;
      }
    };

    _this.flush = function() {

      if (_buflen > 0) {
        writeEncoded(_buffer << (6 - _buflen) );
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;
        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function() {
      return _base64;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------

  var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

      while (_buflen < 8) {

        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw 'unexpected end of file./' + _buflen;
        }

        var c = _str.charAt(_pos);
        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/) ) {
          // ignore if whitespace.
          continue;
        }

        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
        _buflen += 6;
      }

      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function(c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw 'c:' + c;
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------

  var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

      //---------------------------------
      // GIF Signature

      out.writeString('GIF87a');

      //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);

      out.writeByte(0x80); // 2bit
      out.writeByte(0);
      out.writeByte(0);

      //---------------------------------
      // Global Color Map

      // black
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);

      // white
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);

      //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);

      //---------------------------------
      // Local Color Map

      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);

      out.writeByte(lzwMinCodeSize);

      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);

      //---------------------------------
      // GIF Terminator
      out.writeString(';');
    };

    var bitOutputStream = function(out) {

      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;

      var _this = {};

      _this.write = function(data, length) {

        if ( (data >>> length) != 0) {
          throw 'length over';
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
          length -= (8 - _bitLength);
          data >>>= (8 - _bitLength);
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = (data << _bitLength) | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1;

      // Setup LZWTable
      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i) );
      }
      table.add(String.fromCharCode(clearCode) );
      table.add(String.fromCharCode(endCode) );

      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut);

      // clear code
      bitOut.write(clearCode, bitLength);

      var dataIndex = 0;

      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {

        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c) ) {

          s = s + c;

        } else {

          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {

            if (table.size() == (1 << bitLength) ) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength);

      // end code
      bitOut.write(endCode, bitLength);

      bitOut.flush();

      return byteOut.toByteArray();
    };

    var lzwTable = function() {

      var _map = {};
      var _size = 0;

      var _this = {};

      _this.add = function(key) {
        if (_this.contains(key) ) {
          throw 'dup key:' + key;
        }
        _map[key] = _size;
        _size += 1;
      };

      _this.size = function() {
        return _size;
      };

      _this.indexOf = function(key) {
        return _map[key];
      };

      _this.contains = function(key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createDataURL = function(width, height, getPixel) {
    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y) );
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();

    return 'data:image/gif;base64,' + base64;
  };

  //---------------------------------------------------------------------
  // returns qrcode function.

  return qrcode;
}();

// multibyte support
!function() {

  qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    function toUTF8Array(str) {
      var utf8 = [];
      for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
          i++;
          // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
            | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18),
              0x80 | ((charcode>>12) & 0x3f),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
      }
      return utf8;
    }
    return toUTF8Array(s);
  };

}();


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
  `CREATE TABLE IF NOT EXISTS alerts (site TEXT, vid TEXT, day TEXT, PRIMARY KEY (site, vid, day))`,
  `CREATE TABLE IF NOT EXISTS requests (id INTEGER PRIMARY KEY AUTOINCREMENT, ts TEXT, kind TEXT, site TEXT, email TEXT, details TEXT, ip_hash TEXT)`,
  `CREATE TABLE IF NOT EXISTS crm (site TEXT, vid TEXT, status TEXT, notes TEXT, follow_up TEXT, owner TEXT, updated TEXT, PRIMARY KEY (site, vid))`,
  `CREATE INDEX IF NOT EXISTS ix_ev_vid ON events (site, vid, ts)`,
  `CREATE TABLE IF NOT EXISTS reps (slug TEXT PRIMARY KEY, name TEXT, first TEXT, phone TEXT, email TEXT, active INTEGER DEFAULT 1)`,
  `CREATE TABLE IF NOT EXISTS rephits (slug TEXT, day TEXT, src TEXT, n INTEGER, PRIMARY KEY (slug, day, src))`
];
async function ensure(db) { if (!globalThis.__kv_schema) { await db.batch(SCHEMA.map(s => db.prepare(s))); try { await db.prepare(`ALTER TABLE events ADD COLUMN detail TEXT`).run(); } catch { } try { await db.prepare(`ALTER TABLE events ADD COLUMN lang TEXT`).run(); } catch { } try { await db.prepare(`ALTER TABLE sites ADD COLUMN owner_email TEXT`).run(); } catch { } try { await db.prepare(`ALTER TABLE sites ADD COLUMN report_email TEXT`).run(); } catch { } try { await db.prepare(`ALTER TABLE sites ADD COLUMN crm_url TEXT`).run(); } catch { } try { await db.prepare(`ALTER TABLE sites ADD COLUMN hubspot_token TEXT`).run(); } catch { } try { await db.prepare(`ALTER TABLE sites ADD COLUMN ref TEXT`).run(); } catch { } try { await db.prepare(`ALTER TABLE leads ADD COLUMN ref TEXT`).run(); } catch { } try { await db.prepare(`ALTER TABLE leads ADD COLUMN phone TEXT`).run(); } catch { } globalThis.__kv_schema = 1; } }

const json = (o, status = 200, h = {}) => new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json", "cache-control": "no-store", ...h } });
const s = (v, n) => v == null ? null : String(v).slice(0, n);
const num = v => { const n = Number(v); return Number.isFinite(n) ? Math.round(n) : null; };
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const rand = (n = 24) => [...crypto.getRandomValues(new Uint8Array(n))].map(b => "abcdefghijkmnpqrstuvwxyz23456789"[b % 32]).join("");
async function sha(x) { const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(x)); return [...new Uint8Array(b)].map(v => v.toString(16).padStart(2, "0")).join("").slice(0, 32); }
const device = (ua = "") => /Mobi|Android|iPhone/.test(ua) ? "mobile" : /iPad|Tablet/.test(ua) ? "tablet" : "desktop";
const BOT = /bot|crawl|spider|headless|preview|lighthouse|monitor|curl|python-requests|gptbot|claudebot|perplexity/i;
// Network owners that are consumer ISPs, mobile carriers, hosting/VPN/cloud — NOT a business we can name.
const NOT_COMPANY = /comcast|xfinity|verizon|at&t|att services|spectrum|charter|cox comm|t-mobile|sprint|centurylink|lumen|frontier|google fiber|cloudflare|amazon|aws|google llc|microsoft|digitalocean|ovh|hetzner|linode|akamai|vpn|mobile|wireless|telecom|broadband|cable|internet|communications|hosting|cloud|server|proxy|fastly|oracle|alibaba|tencent|starlink|windstream|optimum|altice|mediacom|brightspeed|consolidated|zayo|level 3|cogent|telus|rogers|bell canada|shaw|vodafone|orange|telefonica|deutsche telekom|bt group|sky uk|virgin media|ntt|kddi|china (telecom|unicom|mobile)|zscaler|netskope|palo alto|apple inc|icloud|private relay|m247|cdn77|leaseweb|choopa|vultr|quadranet|colocrossing|psychz|scaleway|contabo|hostinger|godaddy|namecheap|rackspace|softlayer|ibm cloud|datacamp|packet|tor exit|anonymi|ipvanish|nordvpn|expressvpn|mullvad|proton/i;
function cleanOrg(o) { if (!o) return o; let x = String(o).replace(/^AS\d+\s+/i, "").replace(/_/g, " ").replace(/\s+/g, " ").trim(); if (x.length > 4 && x === x.toUpperCase()) x = x.toLowerCase().replace(/(^|[\s-])([a-z])/g, (m, a, c) => a + c.toUpperCase()); return x.slice(0, 120); }
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
  const rawOrg = cf.asOrganization || null, org = cleanOrg(rawOrg), kind = rawOrg ? (NOT_COMPANY.test(rawOrg) ? "isp" : "company") : "unknown";
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
      ctx.waitUntil(alert(env, site, `New identified visitor: ${s(d.name, 80) || ""} ${s(d.email, 120) || ""} ${s(d.phone, 40) || ""}`.trim(), e.vid, day + "-id", { event: "identified", name: s(d.name, 80), email: s(d.email, 120), phone: s(d.phone, 40) }));
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
    if (first.type === "view" && (site.alert_webhook || site.crm_url || site.hubspot_token)) {
      try {
        const prior = (await env.DB.prepare(`SELECT path, substr(ts,1,10) d FROM events WHERE site=? AND vid=? AND type='view' AND substr(ts,1,10)<? AND ts>=? ORDER BY ts DESC LIMIT 60`).bind(site.site, s(first.vid, 40), day, new Date(Date.now() - 14 * 864e5).toISOString()).all()).results || [];
        const hit = prior.find(r => KEY_PAGES.test(r.path || ""));
        if (hit) { why = null; ctx.waitUntil(alert(env, site, `Welcome back on ${nm}: ${who} is back (looked at ${s(hit.path, 80)} on ${hit.d})`, first.vid + ":back", day, { event: "returning_visitor", company: kind === "company" ? org : null, where: [cf.city, cf.region].filter(Boolean).join(", "), reason: `returned after viewing ${s(hit.path, 80)} on ${hit.d}`, page: s(first.path, 120) })); }
      } catch { }
    }
    if (why) ctx.waitUntil(alert(env, site, `Hot visitor on ${nm}: ${who} ${why}`, first.vid + ":" + key, day, { event: "hot_visitor", company: kind === "company" ? org : null, where: [cf.city, cf.region].filter(Boolean).join(", "), reason: why, page: s(first.path, 100) }));
  }
  return json({ ok: true }, 200, corsHeaders());
}

async function forget(request, env) {
  let b; try { b = JSON.parse(await request.text()); } catch { return json({ error: "bad json" }, 400, corsHeaders()); }
  await ensure(env.DB);
  const site = await env.DB.prepare(`SELECT site FROM sites WHERE site=?`).bind(s(b.s, 40)).first(), vid = s(b.vid, 40);
  if (!site || !vid) return json({ error: "bad request" }, 400, corsHeaders());
  await env.DB.batch([env.DB.prepare(`DELETE FROM events WHERE site=? AND vid=?`).bind(site.site, vid), env.DB.prepare(`DELETE FROM people WHERE site=? AND vid=?`).bind(site.site, vid), env.DB.prepare(`DELETE FROM crm WHERE site=? AND vid=?`).bind(site.site, vid)]);
  return json({ ok: true }, 200, corsHeaders());
}

const ORIGIN = "https://airecommend.ai/whosthere";
async function setStatus(env, v) { try { await env.DB.prepare(`INSERT OR REPLACE INTO settings (k,v) VALUES ('last_alert_status',?)`).bind(v).run(); } catch { } }
async function notify(env, site, text, high = true) {
  const w = site.alert_webhook; if (!w) return;
  try {
    let rr;
    if (/^https:\/\/ntfy\.sh\//.test(w)) rr = await fetch(w, { method: "POST", headers: { Title: "Whos There", Priority: high ? "high" : "default" }, body: text }); // free push, no account
    else if (/^https:\/\/hooks\.slack\.com\//.test(w)) rr = await fetch(w, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ text }) });
    else if (/^https:\/\/(discord|discordapp)\.com\/api\/webhooks\//.test(w)) rr = await fetch(w, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ content: text.slice(0, 1900) }) });
    else rr = await fetch(w, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ text, site: site.name, at: new Date().toISOString() }) });
    await setStatus(env, rr.status + " " + new Date().toISOString());
  } catch (e) { await setStatus(env, "err " + String(e).slice(0, 150)); }
}
async function crmPush(env, site, ev) {
  const hit = async (url, init) => { try { return await fetch(url, init); } catch { return null; } };
  if (site.crm_url && /^https:\/\//.test(site.crm_url)) await hit(site.crm_url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...ev, site: site.name, domain: site.domain, at: new Date().toISOString(), dashboard: `${ORIGIN}/dash?s=${site.site}&t=${site.token}` }) });
  if (site.hubspot_token) {
    const H = { authorization: "Bearer " + site.hubspot_token, "content-type": "application/json" }, api = "https://api.hubapi.com/crm/v3/objects/";
    if (ev.event === "identified" && ev.email) await hit(api + "contacts", { method: "POST", headers: H, body: JSON.stringify({ properties: { email: ev.email, firstname: ev.name || "", phone: ev.phone || "", lifecyclestage: "lead" } }) });
    else if (ev.company) {
      const r = await hit(api + "companies/search", { method: "POST", headers: H, body: JSON.stringify({ filterGroups: [{ filters: [{ propertyName: "name", operator: "EQ", value: ev.company }] }], limit: 1 }) });
      let found = false; try { found = r && r.ok && (await r.json()).total > 0; } catch { }
      if (!found) await hit(api + "companies", { method: "POST", headers: H, body: JSON.stringify({ properties: { name: ev.company, description: `Visited ${site.domain || site.name}: ${ev.reason || ""}` } }) });
    }
  }
}
async function alert(env, site, text, vid, day, ev) {
  if (!site.alert_webhook && !site.crm_url && !site.hubspot_token) return;
  const r = await env.DB.prepare(`INSERT OR IGNORE INTO alerts (site,vid,day) VALUES (?,?,?)`).bind(site.site, vid, day).run();
  if (!r.meta || !r.meta.changes) return;
  await notify(env, site, text, true);
  if (ev) await crmPush(env, site, ev);
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
      SUM(CASE WHEN path GLOB '*[Pp]ric*' OR path GLOB '*ontact*' OR path GLOB '*ook*' OR path GLOB '*emo*' OR path GLOB '*uote*' OR path GLOB '*onsult*' THEN 1 ELSE 0 END) key_hits, MAX(city) city, MAX(region) region, GROUP_CONCAT(DISTINCT CASE WHEN path GLOB '*[Pp]ric*' OR path GLOB '*ontact*' OR path GLOB '*ook*' OR path GLOB '*emo*' OR path GLOB '*uote*' OR path GLOB '*onsult*' THEN path END) kp
    FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 AND org_kind='company' GROUP BY org ORDER BY (COUNT(*) + 5*SUM(CASE WHEN path GLOB '*[Pp]ric*' OR path GLOB '*ontact*' OR path GLOB '*ook*' OR path GLOB '*emo*' OR path GLOB '*uote*' OR path GLOB '*onsult*' THEN 1 ELSE 0 END)) DESC LIMIT 40`);
  const people = await env.DB.prepare(`SELECT p.*, (SELECT COUNT(*) FROM events e WHERE e.site=p.site AND e.vid=p.vid AND e.type='view') views FROM people p WHERE p.site=? AND p.updated>=? ORDER BY p.updated DESC LIMIT 100`).bind(site.site, since).all().then(r => r.results || []);
  const pages = await q(`SELECT path, COUNT(*) views, COUNT(DISTINCT vid) visitors FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY path ORDER BY views DESC LIMIT 15`);
  const sources = await q(`SELECT COALESCE(NULLIF(utm_source,''), CASE WHEN referrer IS NULL OR referrer='' THEN '(direct)' ELSE referrer END) src, COUNT(DISTINCT COALESCE(sid, 'a' || id)) sessions FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY src ORDER BY sessions DESC LIMIT 12`);
  const ai = await q(`SELECT CASE WHEN referrer LIKE '%chatgpt.com%' OR referrer LIKE '%chat.openai.com%' THEN 'ChatGPT' WHEN referrer LIKE '%perplexity.ai%' THEN 'Perplexity' WHEN referrer LIKE '%gemini.google.com%' THEN 'Gemini' WHEN referrer LIKE '%claude.ai%' THEN 'Claude' WHEN referrer LIKE '%copilot.microsoft.com%' THEN 'Copilot' WHEN referrer LIKE '%you.com%' THEN 'You.com' WHEN referrer LIKE '%grok.com%' THEN 'Grok' WHEN lower(utm_source) IN ('chatgpt.com','chatgpt','perplexity','gemini','claude') THEN utm_source END src, COUNT(*) views, MAX(ts) last FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY src HAVING src IS NOT NULL ORDER BY views DESC`);
  const crawlers = await q(`SELECT org bot, COUNT(*) hits, COUNT(DISTINCT path) pages, MAX(ts) last FROM events WHERE site=? AND ts>=? AND org_kind='bot' GROUP BY org ORDER BY hits DESC LIMIT 15`);
  const clicks = await q(`SELECT json_extract(detail,'$.kind') kind, json_extract(detail,'$.text') txt, COUNT(*) n FROM events WHERE site=? AND ts>=? AND type='click' AND is_bot=0 GROUP BY kind, txt ORDER BY n DESC LIMIT 15`);
  const funnel = (await q(`SELECT SUM(type='form_start') starts, SUM(type='identify') ids, SUM(type='click' AND json_extract(detail,'$.kind') IN ('phone','email')) contacts FROM events WHERE site=? AND ts>=? AND is_bot=0`))[0] || {};
  const countries = await q(`SELECT COALESCE(country,'?') c, COUNT(*) views FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY c ORDER BY views DESC LIMIT 8`);
  const dom = String(site.domain || "").toLowerCase().replace(/[^a-z0-9.-]/g, "");
  const channels = await q(`SELECT channel, COUNT(*) n FROM (SELECT CASE WHEN lower(COALESCE(utm_source,'')) IN ('chatgpt.com','chatgpt','perplexity','gemini','claude') OR referrer LIKE '%chatgpt.com%' OR referrer LIKE '%chat.openai.com%' OR referrer LIKE '%perplexity.ai%' OR referrer LIKE '%gemini.google.com%' OR referrer LIKE '%claude.ai%' OR referrer LIKE '%copilot.microsoft.com%' OR referrer LIKE '%grok.com%' THEN 'AI assistant' WHEN referrer LIKE '%google.%' THEN 'Google' WHEN referrer LIKE '%bing.com%' OR referrer LIKE '%duckduckgo.com%' OR referrer LIKE '%yahoo.%' THEN 'Other search' WHEN referrer LIKE '%facebook.%' OR referrer LIKE '%instagram.%' OR referrer LIKE '%linkedin.%' OR referrer LIKE '%t.co/%' OR referrer LIKE '%twitter.%' OR referrer LIKE '%x.com%' OR referrer LIKE '%youtube.%' OR referrer LIKE '%tiktok.%' OR referrer LIKE '%reddit.%' THEN 'Social' WHEN referrer IS NULL OR referrer='' OR ('${dom}'!='' AND referrer LIKE '%${dom}%') THEN 'Direct' ELSE 'Other websites' END channel FROM events WHERE id IN (SELECT MIN(id) FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 GROUP BY COALESCE(sid,'a'||id))) GROUP BY channel ORDER BY n DESC`);
  const recent = await q(`SELECT ts, vid, path, city, region, country, device, org, org_kind FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 ORDER BY id DESC LIMIT 30`);
  if (csv === "json") return json({ days, companies: companies.map(c => ({ company: c.org, score: c.views + 5 * c.key_hits, visitors: c.visitors, views: c.views, pages: c.pages, key_pages: c.kp ? String(c.kp).split(",") : [], city: c.city, region: c.region, last_seen: c.last })), people: people.map(x => ({ name: x.name, email: x.email, phone: x.phone, source: x.source, updated: x.updated })) });
  if (csv) {
    const kind = u.searchParams.get("kind") || "companies", cell = v => { v = v == null ? "" : String(v); if (/^[=+\-@]/.test(v)) v = "'" + v; return '"' + v.replace(/"/g, '""') + '"'; };
    const rowsOf = kind === "people" ? [["name", "email", "phone", "source", "views", "updated"], ...people.map(x => [x.name, x.email, x.phone, x.source, x.views, x.updated])]
      : kind === "events" ? [["time", "visitor", "page", "who_or_where", "device"], ...recent.map(v => [v.ts, (v.vid || "").slice(0, 6), v.path, v.org_kind === "company" ? v.org : [v.city, v.region, v.country].filter(Boolean).join(" "), v.device])]
      : [["company", "score", "visitors", "views", "pages", "key_pages", "city", "region", "last_seen"], ...companies.map(c => [c.org, c.views + 5 * c.key_hits, c.visitors, c.views, c.pages, c.key_hits, c.city, c.region, c.last])];
    return new Response(rowsOf.map(r => r.map(cell).join(",")).join("\r\n"), { headers: { "content-type": "text/csv; charset=utf-8", "content-disposition": `attachment; filename="whos-there-${kind}-${days}d.csv"`, "cache-control": "no-store" } });
  }
  const base0 = u.pathname.startsWith(BASE) ? BASE : "";
  const cl = o => `${base0}/company?s=${esc(site.site)}&t=${esc(tok)}&org=${encodeURIComponent(o)}`;
  const peopleLink = o => `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(o + " owner OR founder OR director OR manager")}`;
  const tbl = (head, rows) => `<div class="tw"><table><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("") || `<tr><td colspan="${head.length}" class="m">No data yet</td></tr>`}</table></div>`;
  const whyText = (c, sc) => [c.kp ? "looked at " + String(c.kp).split(",").slice(0, 3).join(", ") : null, c.pages > 2 ? "read " + c.pages + " different pages" : null, c.visitors > 1 ? c.visitors + " people from the same company" : null, "score " + sc].filter(Boolean).join(" · ");
  const enc = encodeURIComponent, band = s => s >= 25 ? "Hot" : s >= 10 ? "Warm" : "New";
  const callFirst = companies.length ? `<div class="cf">${companies.slice(0, 5).map(c => { const sc = c.views + 5 * c.key_hits; return `<div class="cc"><div><b>${esc(c.org)}</b> <span class="bd ${band(sc)}">${band(sc)}</span><div class="m">${c.visitors} visitor${c.visitors == 1 ? "" : "s"} · ${c.views} views · ${c.pages} pages${c.key_hits ? " · " + c.key_hits + " key page" + (c.key_hits == 1 ? "" : "s") : ""} · ${esc([c.city, c.region].filter(Boolean).join(", "))}</div><div class="m">Why: ${esc(whyText(c, sc))}</div></div><div class="lk"><a href="${cl(c.org)}">Timeline</a><a target="_blank" rel="noopener" href="${peopleLink(c.org)}">Find people</a><a target="_blank" rel="noopener" href="https://www.linkedin.com/search/results/companies/?keywords=${enc(c.org)}">LinkedIn</a><a target="_blank" rel="noopener" href="https://www.google.com/search?q=${enc(c.org + " " + (c.city || ""))}">Google</a></div></div>`; }).join("")}</div>` : `<div class="tw"><table><tr><td class="m">No companies yet. Consented visitors from business networks show up here.</td></tr></table></div>`;
  const dl = k => `?s=${esc(site.site)}&t=${esc(tok)}&days=${days}&kind=${k}`;
  const rng = [1, 7, 30, 90].map(d => `<a ${d === days ? 'class="on"' : ""} href="?s=${esc(site.site)}&t=${esc(tok)}&days=${d}">${d === 1 ? "24h" : d + "d"}</a>`).join("");
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><meta name="theme-color" content="#0b1020"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Who's There"><link rel="manifest" href="${base0}/manifest.webmanifest?s=${esc(site.site)}&t=${esc(tok)}"><link rel="apple-touch-icon" href="${base0}/icon.png"><title>${esc(site.name)} · Known Visitor</title>
<style>*{box-sizing:border-box}body{margin:0;background:#0b1020;color:#e8ecf5;font:14px/1.5 system-ui,-apple-system,Segoe UI,sans-serif;padding:20px clamp(14px,4vw,40px)}h1{margin:0;font-size:26px}h2{font-size:16px;margin:28px 0 10px;color:#9fb0d6;text-transform:uppercase;letter-spacing:.08em}.sub{color:#8392b5;margin:4px 0 18px}.r a{display:inline-block;padding:6px 12px;margin:0 6px 6px 0;border:1px solid #2a3558;border-radius:999px;color:#c9d4ee;text-decoration:none}.r a.on{background:#3b6cff;border-color:#3b6cff;color:#fff}
.k{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px}.k div{background:#121a33;border:1px solid #22305a;border-radius:12px;padding:14px}.k b{display:block;font-size:28px}.k small{color:#8392b5;text-transform:uppercase;font-size:11px;letter-spacing:.1em}
body{overflow-x:hidden}.g>div,.cf{min-width:0}.cf{display:grid;gap:10px}.cc{display:flex;gap:12px;justify-content:space-between;align-items:center;flex-wrap:wrap;background:#121a33;border:1px solid #22305a;border-radius:12px;padding:12px 14px}.cc b{color:#fff}.cc .m{color:#8392b5;font-size:13px}.lk{display:flex;gap:8px}.lk a{border:1px solid #2f5bea;border-radius:8px;padding:5px 10px;font-size:13px;color:#cfe}.bd{font-size:11px;font-weight:700;border-radius:999px;padding:2px 8px;text-transform:uppercase}.bd.Hot{background:#d64545;color:#fff}.bd.Warm{background:#c47f00;color:#fff}.bd.New{background:#22305a;color:#8392b5}.tw{overflow-x:auto;background:#121a33;border:1px solid #22305a;border-radius:12px}table{border-collapse:collapse;width:100%}th{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#8392b5;text-align:left;padding:10px 12px;border-bottom:1px solid #22305a}td{padding:9px 12px;border-bottom:1px solid #1b2748;white-space:nowrap;max-width:320px;overflow:hidden;text-overflow:ellipsis}.m{color:#8392b5;text-align:center;padding:22px}.g{display:grid;grid-template-columns:1fr 1fr;gap:18px}@media(max-width:860px){.g{grid-template-columns:1fr}}.note{color:#8392b5;font-size:12px;margin-top:6px}</style></head><body>
<h1>${esc(site.name)}</h1><p class="sub">Known Visitor · ${esc(site.domain || "")}</p><div class="r">${rng}</div>
<div class="k"><div><b id="livec">…</b><small>On site now</small></div><div><b>${tot.views || 0}</b><small>All page views</small></div><div><b>${tot.visitors || 0}</b><small>Consented visitors</small></div><div><b>${tot.anon || 0}</b><small>Anonymous views</small></div><div><b>${tot.sessions || 0}</b><small>Sessions</small></div><div><b>${companies.length}</b><small>Companies</small></div><div><b>${people.length}</b><small>People</small></div><div><b>${Math.round(eng.s || 0)}s</b><small>Avg time</small></div></div>
<h2>Call these first</h2>${callFirst}
<p class="note">Score = page views, plus 5 extra for every view of a pricing, contact, booking, demo, quote or consult page. Hot is 25 or more, Warm is 10 or more. "Why" shows what earned the score. Timeline shows their full visit. LinkedIn and Google open a search so you can find the right person.</p>
<h2>On the site right now</h2><div class="cf" id="livel"><div class="m">Checking…</div></div>
<h2>Companies visiting</h2>${tbl(["Company", "Score", "Visitors", "Views", "Pages", "Key pages", "Where", "Last seen"], companies.map(c => [c.org, c.views + 5 * c.key_hits, c.visitors, c.views, c.pages, c.key_hits, [c.city, c.region].filter(Boolean).join(", "), (c.last || "").slice(0, 16).replace("T", " ")]))}
<p class="note">Company = the organization that owns the visitor's network, shown only for visitors who accepted. Home and mobile visitors show only as location, never a name. "Anonymous views" are visits counted without consent: no ID, no company, no IP stored.</p>
<h2>People who identified themselves</h2>${tbl(["Name", "Email", "Phone", "How", "Views", "When"], people.map(p => [p.name, p.email, p.phone, p.source, p.views, (p.updated || "").slice(0, 16).replace("T", " ")]))}
<div class="g"><div><h2>Top pages</h2>${tbl(["Page", "Views", "Visitors"], pages.map(p => [p.path, p.views, p.visitors]))}</div><div><h2>Sources</h2>${tbl(["Source", "Sessions"], sources.map(x => [x.src, x.sessions]))}</div></div>
<h2>How visitors found you</h2>${tbl(["Channel", "Visits"], channels.map(x => [x.channel, x.n]))}
<p class="note">Where each visit started: AI assistants (ChatGPT, Perplexity, Gemini, Claude and others), Google, social, or typed in directly.</p>
<h2>AI assistants sending visitors</h2>${tbl(["Assistant", "Visits", "Last"], ai.map(a => [a.src, a.views, (a.last || "").slice(0, 16).replace("T", " ")]))}
<p class="note">People who clicked a link inside ChatGPT, Perplexity, Gemini, Claude and similar. This is proof AI is recommending the site.</p>
<h2>AI and search crawlers reading the site</h2>${tbl(["Crawler", "Hits", "Pages", "Last"], crawlers.map(c => [c.bot, c.hits, c.pages, (c.last || "").slice(0, 16).replace("T", " ")]))}
<p class="note">Robots, not people. Seen at the edge, so they are counted even though they never run scripts.</p>
<div class="g"><div><h2>What visitors click</h2>${tbl(["Type", "Button or link", "Clicks"], clicks.map(c => [c.kind, c.txt, c.n]))}</div><div><h2>Actions and countries</h2>${tbl(["Measure", "Count"], [["Started a form", funnel.starts || 0], ["Identified themselves", funnel.ids || 0], ["Tapped call or email", funnel.contacts || 0], ...countries.map(x => ["Views from " + x.c, x.views])])}</div></div>
<h2>Recent visits</h2>${tbl(["Time (UTC)", "Visitor", "Page", "Who / where", "Device"], recent.map(v => [(v.ts || "").slice(0, 16).replace("T", " "), (v.vid || "").slice(0, 6), v.path, v.org_kind === "company" ? v.org : v.org_kind === "anon" ? "Anonymous (" + (v.country || "?") + ")" : [v.city, v.region, v.country].filter(Boolean).join(", "), v.device]))}
<p class="note">Tip: on iPhone tap Share, then Add to Home Screen. On Android tap the menu, then Install app. <a href="${base0}/settings?s=${esc(site.site)}&t=${esc(tok)}">Settings and integrations</a> · <a href="${base0}/dash.json?s=${esc(site.site)}&t=${esc(tok)}&days=${days}">JSON feed</a></p>
<p class="note"><b><a href="${base0}/crm?s=${esc(site.site)}&t=${esc(tok)}">Your leads (CRM) →</a></b></p>
<p class="note">Download: <a href="${base0}/dash.csv${dl("companies")}">companies</a> · <a href="${base0}/dash.csv${dl("people")}">people</a> · <a href="${base0}/dash.csv${dl("events")}">recent visits</a> (CSV)</p>
<script>(function(){var u="${base0}/live?s=${esc(site.site)}&t=${esc(tok)}";function r(){fetch(u,{cache:"no-store"}).then(function(x){return x.json()}).then(function(j){document.getElementById("livec").textContent=j.count;var l=document.getElementById("livel");l.textContent="";if(!j.rows.length){var e=document.createElement("div");e.className="m";e.textContent="No one on the site right now.";l.appendChild(e);return}j.rows.forEach(function(v){var d=document.createElement("div");d.className="cc";d.textContent=v.who+" · "+v.path+" · "+v.ago;l.appendChild(d)})}).catch(function(){})}r();setInterval(r,15000)})();if("serviceWorker"in navigator)navigator.serviceWorker.register("${base0}/sw.js").catch(function(){})</script>
</body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}

// ---------------------------------------------------------------- company timeline, live, digest
async function authSite(env, u) {
  await ensure(env.DB);
  const site = await env.DB.prepare(`SELECT * FROM sites WHERE site=?`).bind(u.searchParams.get("s") || "").first(), tok = u.searchParams.get("t") || "";
  return site && tok && tok === site.token ? site : null;
}
const ago = ts => { const m = Math.max(0, Math.round((Date.now() - Date.parse(ts)) / 60000)); return m < 1 ? "just now" : m < 60 ? m + " min ago" : m < 1440 ? Math.round(m / 60) + " h ago" : Math.round(m / 1440) + " d ago"; };
async function live(request, env) {
  const u = new URL(request.url), site = await authSite(env, u); if (!site) return json({ error: "not found" }, 404);
  const since = new Date(Date.now() - 5 * 60000).toISOString();
  const rows = (await env.DB.prepare(`SELECT ts, vid, path, city, region, country, org, org_kind FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 ORDER BY id DESC LIMIT 40`).bind(site.site, since).all()).results || [];
  const seen = new Set(), out = [];
  for (const r of rows) { const k = r.vid || r.path + r.ts; if (seen.has(k)) continue; seen.add(k); out.push({ who: r.org_kind === "company" ? r.org : r.org_kind === "anon" ? "Anonymous visitor" : [r.city, r.region, r.country].filter(Boolean).join(", ") || "Visitor", path: r.path, ago: ago(r.ts) }); }
  return json({ count: out.length, rows: out.slice(0, 15) });
}
async function company(request, env, base) {
  const u = new URL(request.url), site = await authSite(env, u); if (!site) return new Response("Not found", { status: 404 });
  const org = s(u.searchParams.get("org"), 200) || "", since = new Date(Date.now() - 90 * 864e5).toISOString();
  const rows = (await env.DB.prepare(`SELECT ts, type, vid, path, title, referrer, seconds, scroll, city, region, detail FROM events WHERE site=? AND ts>=? AND org=? AND org_kind='company' AND is_bot=0 ORDER BY ts ASC LIMIT 400`).bind(site.site, since, org).all()).results || [];
  const label = { view: "Viewed", leave: "Left", click: "Tapped", form_start: "Started a form", identify: "Identified themselves", event: "Event" };
  let day = "", body = "";
  for (const r of rows) {
    const d = (r.ts || "").slice(0, 10); if (d !== day) { day = d; body += `<h3>${esc(d)}</h3>`; }
    let det = {}; try { det = JSON.parse(r.detail || "{}"); } catch { }
    const extra = r.type === "leave" ? `${r.seconds || 0}s on page, ${r.scroll || 0}% scrolled` : r.type === "click" ? esc([det.kind, det.text].filter(Boolean).join(": ")) : r.type === "view" && r.referrer ? "from " + esc(String(r.referrer).replace(/^https?:\/\//, "").slice(0, 60)) : "";
    body += `<div class="e"><span class="t">${esc((r.ts || "").slice(11, 16))}</span><span><b>${label[r.type] || esc(r.type)}</b> ${esc(r.path || "")}<br><small>${extra} · visitor ${esc((r.vid || "").slice(0, 6))}</small></span></div>`;
  }
  const visitors = new Set(rows.map(r => r.vid)).size, views = rows.filter(r => r.type === "view").length;
  const back = `${base}/dash?s=${esc(site.site)}&t=${esc(site.token)}`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(org)} · Visit timeline</title>
<style>*{box-sizing:border-box}body{margin:0;background:#0b1020;color:#e8ecf5;font:15px/1.5 system-ui,-apple-system,sans-serif;padding:20px clamp(14px,4vw,40px);overflow-x:hidden}a{color:#8fb0ff}h1{margin:.2em 0;font-size:24px}h3{color:#9fb0d6;margin:22px 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:.08em}.e{display:flex;gap:12px;background:#121a33;border:1px solid #22305a;border-radius:10px;padding:10px 12px;margin:6px 0;word-break:break-word}.t{color:#8fb0ff;font-variant-numeric:tabular-nums;min-width:44px}small{color:#8392b5}</style></head><body>
<a href="${back}">← Back to dashboard</a><h1>${esc(org || "Unknown")}</h1><p><a target="_blank" rel="noopener" href="https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(org + " owner OR founder OR director OR manager")}">Find people at this company</a> · <a target="_blank" rel="noopener" href="https://www.google.com/search?q=${encodeURIComponent(org + " official website")}">Find their website</a></p><p style="color:#8392b5">${visitors} visitor${visitors == 1 ? "" : "s"} · ${views} page view${views == 1 ? "" : "s"} · last 90 days · times in UTC</p>${body || "<p>No visits found for this company yet.</p>"}</body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}
async function digestText(env, site, days = 7) {
  const since = new Date(Date.now() - days * 864e5).toISOString(), q = async (sql) => (await env.DB.prepare(sql).bind(site.site, since).all()).results || [];
  const t = (await q(`SELECT COUNT(*) v, COUNT(DISTINCT vid) p FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0`))[0] || {};
  const co = await q(`SELECT org, COUNT(*) views, SUM(CASE WHEN path GLOB '*[Pp]ric*' OR path GLOB '*ontact*' OR path GLOB '*ook*' OR path GLOB '*emo*' OR path GLOB '*uote*' OR path GLOB '*onsult*' THEN 1 ELSE 0 END) k FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 AND org_kind='company' GROUP BY org ORDER BY (COUNT(*)+5*SUM(CASE WHEN path GLOB '*[Pp]ric*' OR path GLOB '*ontact*' OR path GLOB '*ook*' OR path GLOB '*emo*' OR path GLOB '*uote*' OR path GLOB '*onsult*' THEN 1 ELSE 0 END)) DESC LIMIT 5`);
  const ai = (await q(`SELECT COUNT(*) n FROM events WHERE site=? AND ts>=? AND type='view' AND is_bot=0 AND (referrer LIKE '%chatgpt.com%' OR referrer LIKE '%perplexity.ai%' OR referrer LIKE '%gemini.google.com%' OR referrer LIKE '%claude.ai%' OR referrer LIKE '%copilot.microsoft.com%')`))[0] || {};
  const act = (await q(`SELECT SUM(type='form_start') f, SUM(type='identify') i, SUM(type='click' AND json_extract(detail,'$.kind') IN ('phone','email')) c FROM events WHERE site=? AND ts>=? AND is_bot=0`))[0] || {};
  const lines = [`${site.name}: last ${days} days`, `${t.v || 0} page views from ${t.p || 0} consented visitors`, `${ai.n || 0} visits sent by AI assistants`, `${act.c || 0} call/email taps, ${act.f || 0} forms started, ${act.i || 0} people identified`];
  lines.push(co.length ? "Top companies:" : "No companies identified yet.");
  co.forEach((c, i) => lines.push(`${i + 1}. ${c.org} (${c.views} views${c.k ? ", " + c.k + " on key pages" : ""})`));
  lines.push(`Dashboard: ${ORIGIN}/dash?s=${site.site}&t=${site.token}`);
  return lines.join("\n");
}
async function digestRun(env, site) {
  const text = await digestText(env, site);
  await notify(env, site, text, false);
  if (env.RESEND_API_KEY && env.REPORT_FROM && site.report_email) {
    try { await fetch("https://api.resend.com/emails", { method: "POST", headers: { authorization: "Bearer " + env.RESEND_API_KEY, "content-type": "application/json" }, body: JSON.stringify({ from: env.REPORT_FROM, to: [site.report_email], subject: `${site.name}: your weekly Who's There report`, text }) }); } catch { }
  }
  return text;
}

const ICON_B64 = "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";
async function settingsPage(request, env, base) {
  const u = new URL(request.url), site = await authSite(env, u); if (!site) return new Response("Not found", { status: 404 });
  const back = `${base}/dash?s=${esc(site.site)}&t=${esc(site.token)}`;
  return shell("Settings", `<p><a href="${back}">← Back to dashboard</a></p><h1>Settings and integrations</h1><p>Send hot visitors to your own tools. Leave a box empty to turn it off.</p>
<form id="f"><label>Alerts to Slack, Discord or ntfy (webhook link)<input name="alert_webhook" value="${esc(site.alert_webhook || "")}" placeholder="https://hooks.slack.com/..."></label>
<label>CRM or automation link (Zapier, Make, n8n or any webhook)<input name="crm_url" value="${esc(site.crm_url || "")}" placeholder="https://hooks.zapier.com/..."></label>
<label>HubSpot private app token ${site.hubspot_token ? "(one is saved; type a new one to replace it, or type OFF to remove it)" : "(optional)"}<input name="hubspot_token" type="password" autocomplete="off" placeholder="${site.hubspot_token ? "saved" : "pat-..."}"></label>
<label>Weekly report email<input name="report_email" type="email" value="${esc(site.report_email || "")}"></label>
<button>Save</button> <button type="button" id="t" style="background:#e9ecf3;color:#12151c">Send a test to my CRM link</button></form><p id="o"></p>
<p style="font-size:14px;color:#6b7280">What is sent: company name, city, the page and why it counted as hot. For people who typed their details into a form: their name, email and phone. Nothing is sent for visitors who did not accept the consent banner.</p>
<script>var f=document.getElementById("f"),o=document.getElementById("o");function body(extra){var d={s:${JSON.stringify(site.site)},t:${JSON.stringify(site.token)}};["alert_webhook","crm_url","hubspot_token","report_email"].forEach(function(k){var v=f[k].value;if(k==="hubspot_token"&&v==="")return;d[k]=v});for(var k in extra)d[k]=extra[k];return JSON.stringify(d)}
function post(path,extra){fetch("${esc(base)}"+path,{method:"POST",headers:{"content-type":"application/json"},body:body(extra)}).then(function(r){return r.json()}).then(function(j){o.textContent=j.ok?(j.message||"Saved."):(j.error||"Could not save.")}).catch(function(){o.textContent="Network error."})}
f.addEventListener("submit",function(e){e.preventDefault();post("/api/settings")});document.getElementById("t").onclick=function(){post("/api/crm-test")}</script>`);
}
async function saveSettings(request, env) {
  let b; try { b = await request.json(); } catch { return json({ error: "bad request" }, 400); }
  await ensure(env.DB);
  const site = await env.DB.prepare(`SELECT * FROM sites WHERE site=?`).bind(s(b.s, 40) || "").first();
  if (!site || !b.t || b.t !== site.token) return json({ error: "not found" }, 404);
  const url = v => { v = String(v || "").trim(); return v === "" ? "" : /^https:\/\/[^\s]{4,480}$/.test(v) ? v : null; };
  const sets = [], vals = [];
  for (const k of ["alert_webhook", "crm_url"]) if (b[k] !== undefined) { const v = url(b[k]); if (v === null) return json({ error: "Links must start with https://" }, 400); sets.push(k + "=?"); vals.push(v || null); }
  if (b.report_email !== undefined) { const e = String(b.report_email).trim(); if (e && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)) return json({ error: "Please enter a valid email." }, 400); sets.push("report_email=?"); vals.push(e || null); }
  if (b.hubspot_token !== undefined && String(b.hubspot_token).trim() !== "") { const v = String(b.hubspot_token).trim(); sets.push("hubspot_token=?"); vals.push(v.toUpperCase() === "OFF" ? null : v.slice(0, 200)); }
  if (sets.length) await env.DB.prepare(`UPDATE sites SET ${sets.join(",")} WHERE site=?`).bind(...vals, site.site).run();
  return json({ ok: true });
}
async function crmTest(request, env) {
  let b; try { b = await request.json(); } catch { return json({ error: "bad request" }, 400); }
  await ensure(env.DB);
  const site = await env.DB.prepare(`SELECT * FROM sites WHERE site=?`).bind(s(b.s, 40) || "").first();
  if (!site || !b.t || b.t !== site.token) return json({ error: "not found" }, 404);
  if (!site.crm_url && !site.hubspot_token) return json({ error: "Save a CRM link first, then test." });
  await crmPush(env, site, { event: "test", company: "Test Company (ignore)", where: "Phoenix, Arizona", reason: "viewed /pricing", page: "/pricing" });
  return json({ ok: true, message: "Test sent. Check your CRM or automation tool." });
}
function manifest(request, base, site) {
  const m = { name: `Who's There · ${site.name}`, short_name: "Who's There", start_url: `${base}/dash?s=${site.site}&t=${site.token}`, scope: `${base}/`, display: "standalone", background_color: "#0b1020", theme_color: "#0b1020", icons: [{ src: `${base}/icon.png`, sizes: "512x512", type: "image/png", purpose: "any" }] };
  return new Response(JSON.stringify(m), { headers: { "content-type": "application/manifest+json", "cache-control": "no-store" } });
}

// ---------------------------------------------------------------- signup, install, requests
const PAGE_CSS = `*{box-sizing:border-box}body{margin:0;background:#fff;color:#12151c;font:16px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}main{max-width:720px;margin:0 auto;padding:28px 18px 60px}h1{font-size:2rem;letter-spacing:-.02em;margin:.2em 0}h2{font-size:1.15rem;margin:1.6em 0 .4em}p,li{color:#3a4152}.k{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#2f5bea;font-weight:700}a{color:#2f5bea}input,select,textarea,button{font:inherit;width:100%;padding:13px;border-radius:10px;border:1px solid #cfd4df;margin:6px 0}button{background:#2f5bea;color:#fff;border:0;font-weight:700;cursor:pointer}code{display:block;background:#f7f8fb;border:1px solid #e6e8ee;border-radius:10px;padding:12px;overflow-x:auto;white-space:pre-wrap;word-break:break-all;font-size:13px;margin:8px 0}.c{background:#f7f8fb;border:1px solid #e6e8ee;border-radius:12px;padding:14px 18px;margin:14px 0}.ok{background:#eefaf3;border-color:#bfe6cf}`;
const shell = (title, inner) => new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | Who's There</title><style>${PAGE_CSS}</style></head><body><main><div class="k">Who's There · AIrecommend.ai</div>${inner}</main></body></html>`, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
function signupPage(base, ref) {
  return shell("Get started", `<h1>Get your install code</h1><p>Takes about two minutes. You get a private dashboard and one line of code to put on your website. A consent banner is included, so visitors choose before anything is stored.</p>
<form id="f"><input name="name" placeholder="Business name" required><input name="domain" placeholder="Your website (example.com)" required><input name="email" type="email" placeholder="Your email" required><button>Create my dashboard</button></form><div id="out"></div>
<p style="font-size:14px;color:#6b7280">By continuing you agree to use this only on a website you own or manage, and to keep the consent banner on. Plans and pricing: <a href="${esc(base)}/#pricing">see pricing</a>.</p>
<script>var f=document.getElementById("f"),o=document.getElementById("out");function line(t,c){var d=document.createElement(c?"code":"p");d.textContent=t;o.appendChild(d)}
f.addEventListener("submit",function(e){e.preventDefault();var b=f.querySelector("button");b.disabled=true;b.textContent="Creating…";fetch("${esc(base)}/api/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:f.name.value,domain:f.domain.value,email:f.email.value,ref:${JSON.stringify(validRef(ref))}})}).then(function(r){return r.json().then(function(j){return{ok:r.ok,j:j}})}).then(function(x){o.textContent="";if(!x.ok){line(x.j.error||"Something went wrong. Please try again.");b.disabled=false;b.textContent="Create my dashboard";return}
line("You're set up. Save this page: the dashboard link is private.");line("1. Put this in your website's head section:");line(x.j.snippet,1);var a=document.createElement("p");a.innerHTML='2. <a></a> &nbsp;3. <a class="g"></a>';var l=a.querySelectorAll("a");l[0].href=x.j.install;l[0].textContent="Step-by-step install guide (WordPress, Shopify, Wix and more)";l[1].href=x.j.dashboard;l[1].textContent="Open your private dashboard";o.appendChild(a);f.style.display="none"}).catch(function(){o.textContent="Network error. Please try again.";b.disabled=false;b.textContent="Create my dashboard"})});</script>`);
}
function installPage(base, siteKey) {
  const key = /^kv_[a-z0-9]{6,20}$/.test(siteKey || "") ? siteKey : "YOUR_SITE_KEY";
  const sn = `<script async src="${ORIGIN}/v.js?s=${key}"></script>`;
  const li = (h, steps) => `<h2>${h}</h2><ol>${steps.map(x => `<li>${x}</li>`).join("")}</ol>`;
  return shell("Install guide", `<h1>Install in 2 minutes</h1><p>Your code${key === "YOUR_SITE_KEY" ? " (replace YOUR_SITE_KEY with the key from your signup)" : ""}:</p><code>${esc(sn)}</code><p>Paste it once into the <b>head</b> section of your site. Menu names change now and then, so if a step looks different, tell us and we'll help.</p>
${li("WordPress", ["Install the free plugin “WPCode” (or “Insert Headers and Footers”).", "Open it and choose Header &amp; Footer (or add a new snippet set to “Site Wide Header”).", "Paste the code in the Header box and save."])}
${li("Shopify", ["Online Store, then Themes, then the three dots next to your theme, then Edit code.", "Open <b>theme.liquid</b> and paste the code just before the closing <b>&lt;/head&gt;</b> tag.", "Save."])}
${li("Wix", ["Settings, then Custom Code (under Advanced), then Add Custom Code.", "Paste the code, set it to load on All pages, in the Head, and apply."])}
${li("Squarespace", ["Settings, then Advanced, then Code Injection (needs a plan that supports it).", "Paste the code in the Header box and save."])}
${li("Webflow", ["Project settings, then Custom code.", "Paste in Head code, save, and publish the site."])}
${li("Any other site", ["Paste it before the closing &lt;/head&gt; tag of your pages, or ask your web person to."])}
<div class="c ok"><b>Check it worked:</b> open your website, and you should see the privacy banner at the bottom. Then your dashboard starts counting.</div>
<div class="c"><b>Add this to your privacy policy:</b> We use Who's There analytics (AIrecommend.ai). With your consent it stores a random ID in your browser and records pages viewed, approximate location and, for business networks, the organization name. Without consent we only count visits anonymously. Details and choices: ${esc(ORIGIN)}/privacy?s=${esc(key)}</div>`);
}
async function signup(request, env) {
  let b; try { b = await request.json(); } catch { return json({ error: "Please fill in every field." }, 400); }
  const name = s(b.name, 120), email = s(b.email, 200), dom = String(b.domain || "").toLowerCase().trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "").replace(/^www\./, "");
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email || "")) return json({ error: "Please enter your business name and a valid email." }, 400);
  if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/.test(dom) || dom.length > 100) return json({ error: "Please enter your website like example.com." }, 400);
  await ensure(env.DB);
  const ip = request.headers.get("cf-connecting-ip") || "", ih = ip ? await sha(ip + "|signup") : "", day = new Date(Date.now() - 864e5).toISOString();
  const mine = (await env.DB.prepare(`SELECT COUNT(*) n FROM requests WHERE kind='signup' AND ts>=? AND ip_hash=?`).bind(day, ih).first()).n, all = (await env.DB.prepare(`SELECT COUNT(*) n FROM requests WHERE kind='signup' AND ts>=?`).bind(day).first()).n;
  if (mine >= 3 || all >= 40) return json({ error: "Too many sign-ups right now. Please try again tomorrow or contact us." }, 429);
  if (await env.DB.prepare(`SELECT 1 FROM sites WHERE domain=?`).bind(dom).first()) return json({ error: "That website is already set up. Contact us if you need access to it." }, 409);
  const r = await createSite(env, name, dom, null);
  await env.DB.batch([env.DB.prepare(`UPDATE sites SET owner_email=?, report_email=?, ref=? WHERE site=?`).bind(email, email, validRef(String(b.ref || "")) || null, r.site), env.DB.prepare(`INSERT INTO requests (ts,kind,site,email,details,ip_hash) VALUES (?,?,?,?,?,?)`).bind(new Date().toISOString(), "signup", r.site, email, name + " / " + dom, ih)]);
  SITES = null;
  const owner = await env.DB.prepare(`SELECT * FROM sites WHERE site='kv_i8uqzb5daf3u'`).first(); if (owner) await notify(env, owner, `New Who's There signup: ${name} (${dom}) ${email}${validRef(String(b.ref || "")) ? " via rep " + validRef(String(b.ref || "")) : ""}`, false);
  return json({ ok: true, snippet: `<script async src="${ORIGIN}/v.js?s=${r.site}"></script>`, dashboard: `${ORIGIN}/dash?s=${r.site}&t=${r.token}`, install: `${ORIGIN}/install?s=${r.site}` });
}
async function privacyRequest(request, env) {
  let b; try { b = await request.json(); } catch { return json({ error: "bad request" }, 400); }
  const email = s(b.email, 200), kind = ["see", "delete", "other"].includes(b.kind) ? b.kind : "other";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email || "")) return json({ error: "Please enter a valid email." }, 400);
  await ensure(env.DB);
  const site = await env.DB.prepare(`SELECT * FROM sites WHERE site=?`).bind(s(b.s, 40) || "").first(); if (!site) return json({ error: "Unknown site." }, 404);
  const ip = request.headers.get("cf-connecting-ip") || "", ih = ip ? await sha(ip + "|req") : "";
  if ((await env.DB.prepare(`SELECT COUNT(*) n FROM requests WHERE kind LIKE 'priv-%' AND ts>=? AND ip_hash=?`).bind(new Date(Date.now() - 864e5).toISOString(), ih).first()).n >= 5) return json({ error: "Too many requests today." }, 429);
  await env.DB.prepare(`INSERT INTO requests (ts,kind,site,email,details,ip_hash) VALUES (?,?,?,?,?,?)`).bind(new Date().toISOString(), "priv-" + kind, site.site, email, s(b.details, 1000), ih).run();
  await notify(env, site, `Privacy request (${kind}) for ${site.name} from ${email}: ${s(b.details, 200) || ""}`, true);
  return json({ ok: true });
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
<h2>Ask to see or delete your data</h2><p>Tell us your email and what you need. We pass it to ${esc(name)} and act on it.</p>
<form id="rq"><input name="email" type="email" placeholder="Your email" required style="width:100%;box-sizing:border-box;padding:12px;margin:6px 0;border:1px solid #cfd4df;border-radius:10px"><select name="kind" style="width:100%;box-sizing:border-box;padding:12px;margin:6px 0;border:1px solid #cfd4df;border-radius:10px"><option value="see">Show me what you hold about me</option><option value="delete">Delete my data</option><option value="other">Something else</option></select><textarea name="details" rows="2" placeholder="Anything we should know (optional)" style="width:100%;box-sizing:border-box;padding:12px;margin:6px 0;border:1px solid #cfd4df;border-radius:10px"></textarea><button style="width:100%;box-sizing:border-box;padding:13px;border:0;border-radius:10px;background:#2f5bea;color:#fff;font-weight:700">Send request</button></form><p id="rqo"></p>
<script>var rq=document.getElementById("rq");rq.addEventListener("submit",function(e){e.preventDefault();fetch("${esc(base)}/api/request",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({s:${JSON.stringify(u.searchParams.get("s") || "")},email:rq.email.value,kind:rq.kind.value,details:rq.details.value})}).then(function(r){return r.json()}).then(function(j){document.getElementById("rqo").textContent=j.ok?"Thank you. Your request was sent.":(j.error||"Could not send. Please try again.")}).catch(function(){document.getElementById("rqo").textContent="Network error. Please try again."})});</script>
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
  if (b.company) return json({ ok: true });
  const ref = validRef(String(b.ref || "")), ph = s(b.phone, 40) || null;
  await env.DB.prepare(`INSERT INTO leads (ts,name,email,website,message,ip_hash,ref,phone) VALUES (?,?,?,?,?,?,?,?)`).bind(new Date().toISOString(), name, email, s(b.website, 200), s(b.message, 1000), ip ? await sha(ip + "|lead") : null, ref || null, ph).run();
  try { const owner = await env.DB.prepare(`SELECT * FROM sites WHERE site='kv_i8uqzb5daf3u'`).first(); if (owner) await notify(env, owner, `New Who's There lead${ref ? " for rep " + ref : ""}: ${name} <${email}> ${ph || ""} ${s(b.website, 100) || ""}`, true); } catch { }
  if (env.LEAD_WEBHOOK) { try { await fetch(env.LEAD_WEBHOOK, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ text: `Who's There early-access request: ${name} <${email}> ${s(b.website, 200) || ""} ${s(b.message, 300) || ""}` }) }); } catch { } }
  return json({ ok: true });
}


// ---------------------------------------------------------------- rep landing pages + QR codes
const telHref = p => { const d = String(p || "").replace(/\D/g, ""); return d.length === 10 ? "+1" + d : d.length === 11 && d[0] === "1" ? "+" + d : d ? "+" + d : ""; };
function qrSvg(text, color = "#2f5bea", px = 6) {
  const q = qrcode(0, "M"); q.addData(text); q.make();
  const n = q.getModuleCount(), m = 2, size = (n + m * 2) * px; let d = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${(c + m) * px} ${(r + m) * px}h${px}v${px}h-${px}z`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="QR code" style="width:100%;height:auto;display:block"><rect width="${size}" height="${size}" fill="#fff"/><path d="${d}" fill="${color}"/></svg>`;
}
const repUrl = slug => `${ORIGIN}/r/${slug}`;
const validRef = v => /^[a-z0-9]{2,30}$/.test(v || "") ? v : "";
async function repPage(request, env, base, slug, ctx) {
  await ensure(env.DB);
  const rep = await env.DB.prepare(`SELECT * FROM reps WHERE slug=? AND active=1`).bind(slug).first();
  if (!rep) return new Response("Not found", { status: 404 });
  const u = new URL(request.url), src = u.searchParams.get("src") === "qr" ? "qr" : "link", day = new Date().toISOString().slice(0, 10);
  ctx.waitUntil(env.DB.prepare(`INSERT INTO rephits (slug,day,src,n) VALUES (?,?,?,1) ON CONFLICT(slug,day,src) DO UPDATE SET n=n+1`).bind(slug, day, src).run());
  const f = esc(rep.first || rep.name), tel = telHref(rep.phone);
  const btns = `<a class="b p" href="${base}/signup?ref=${esc(slug)}">Start for $99/mo →</a>${tel ? `<a class="b g" href="tel:${esc(tel)}">Call ${f}</a><a class="b w" href="sms:${esc(tel)}">Text ${f}</a>` : ""}${rep.email ? `<a class="b w" href="mailto:${esc(rep.email)}">Email ${f}</a>` : ""}`;
  const css = `<style>main{max-width:760px}h1 em{font-style:normal;color:#7c3aed}.sub{font-size:1.1rem}.b{display:inline-block;border-radius:12px;padding:13px 20px;margin:5px 8px 5px 0;text-decoration:none;font-weight:700}.b.p{background:linear-gradient(135deg,#2f5bea,#7c3aed);color:#fff}.b.g{background:#0f9d58;color:#fff}.b.w{background:#fff;color:#2f5bea;border:1px solid #cfd4df}.list{list-style:none;padding:0;display:grid;gap:10px}.pl{display:grid;grid-template-columns:1fr 1fr;gap:10px}.pl div{background:#f7f8fb;border:1px solid #e6e8ee;border-radius:12px;padding:12px 14px}.pl b{font-size:1.25rem;color:#12151c}.pl span{display:block;font-size:14px;color:#6b7280}.qr{max-width:200px;margin:12px 0;border:1px solid #e6e8ee;border-radius:14px;overflow:hidden}.hp{position:absolute;left:-9999px}.chk{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:#6b7280}.chk input{width:auto;margin-top:4px}</style>`;
  const html = `${css}<div class="k" style="margin-top:6px">With ${esc(rep.name)}</div><h1>Someone just read your prices. <em>Do you know who they were?</em></h1>
<p class="sub">Most people look at your website, think about it, and leave without calling. You never find out. <b style="color:#7c3aed">Who's There</b> tells you which customers stopped by, what they looked at, and pings your phone the moment someone checks your prices or contact page. ${f} can have it running for you in about two minutes.</p>
<ul class="list"><li>📱 <b>A ping on your phone</b> when someone looks at pricing, contact or booking</li><li>🧑‍💼 <b>Who your customer is</b> behind the visit, when it can be found</li><li>🤖 <b>Which AI assistants</b> (ChatGPT, Perplexity, Claude) send people to you</li><li>🔒 <b>Honest and private</b>: visitors say yes or no first, and can delete their data any time</li></ul>
<p>${btns}</p>
<h2>Simple monthly plans</h2><div class="pl"><div><b>$99</b><span>Starter · 1 website</span></div><div><b>$199</b><span>Growth · up to 3 websites + CRM push</span></div><div><b>$399</b><span>Pro · up to 10 websites</span></div><div><b>$999</b><span>Agency · up to 50 websites</span></div></div><p style="font-size:14px;color:#6b7280">One-time $497 setup. Card payments add a 5% fee. Need more? Ask ${f} about Custom.</p>
<h2>Want ${f} to walk you through it?</h2>
<form id="lf"><input name="name" placeholder="Your name" required><input name="email" type="email" placeholder="Your email" required><input name="phone" type="tel" placeholder="Phone (optional)"><input name="website" placeholder="Your website (optional)"><input class="hp" name="company" tabindex="-1" autocomplete="off" aria-hidden="true"><label class="chk"><input type="checkbox" name="ok" required><span>I agree that ${f} (AIrecommend.ai) may contact me about Who's There by email or phone. No spam. I can say stop any time.</span></label><button>Send</button><p id="lm" style="color:#0f9d58;font-weight:700"></p></form>
<h2>Share this page</h2><p>Scan to open this page on a phone.</p><div class="qr">${qrSvg(repUrl(slug) + "?src=qr")}</div><p><a href="${base}/r/${esc(slug)}/qr">Printable QR poster</a></p>
<script>var lf=document.getElementById("lf");lf.addEventListener("submit",function(e){e.preventDefault();if(lf.company.value)return;var b=lf.querySelector("button");b.disabled=true;fetch("${esc(base)}/api/lead",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:lf.name.value,email:lf.email.value,phone:lf.phone.value,website:lf.website.value,message:"Asked ${esc(rep.first || rep.name)} to reach out",ref:${JSON.stringify(slug)}})}).then(function(r){return r.json()}).then(function(j){document.getElementById("lm").textContent=j.ok?"Thanks! ${f} will reach out soon.":(j.error||"Please try again.");if(j.ok)lf.reset();b.disabled=false}).catch(function(){document.getElementById("lm").textContent="Please try again.";b.disabled=false})});</script>`;
  return shell(`${rep.name}: see who visits your website`, html);
}
async function repPoster(env, slug) {
  await ensure(env.DB);
  const rep = await env.DB.prepare(`SELECT * FROM reps WHERE slug=? AND active=1`).bind(slug).first();
  if (!rep) return new Response("Not found", { status: 404 });
  const url = repUrl(slug) + "?src=qr";
  return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>QR poster · ${esc(rep.name)}</title><style>*{box-sizing:border-box}body{margin:0;font:18px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#12151c;text-align:center;padding:28px 18px}h1{font-size:2.1rem;letter-spacing:-.02em;line-height:1.12;margin:.3em 0}.k{font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#2f5bea;font-weight:700}.qr{max-width:360px;margin:18px auto;border:6px solid #2f5bea;border-radius:22px;overflow:hidden}.n{font-size:1.4rem;font-weight:800}.s{color:#6b7280;font-size:15px;word-break:break-all}.pr{margin-top:20px}button{font:inherit;padding:12px 22px;border-radius:10px;border:0;background:#2f5bea;color:#fff;font-weight:700}@media print{.pr{display:none}}</style></head><body><div class="k">AIrecommend.ai · Who's There</div><h1>Who's looking at<br>your website?</h1><p>Scan to find out, and get a ping on your phone when a customer checks your prices.</p><div class="qr">${qrSvg(url, "#2f5bea", 8)}</div><div class="n">${esc(rep.name)}</div><div class="s">${esc(repUrl(slug))}</div><div class="pr"><button onclick="window.print()">Print this poster</button></div></body></html>`, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}
async function repsAdmin(request, env, base) {
  const u = new URL(request.url), key = u.searchParams.get("key") || ""; if (!(await isAdmin(env, key))) return new Response("Not found", { status: 404 });
  await ensure(env.DB);
  const rows = (await env.DB.prepare(`SELECT r.slug, r.name, COALESCE((SELECT SUM(n) FROM rephits h WHERE h.slug=r.slug AND h.src='qr'),0) qr, COALESCE((SELECT SUM(n) FROM rephits h WHERE h.slug=r.slug AND h.src='link'),0) link, (SELECT COUNT(*) FROM leads l WHERE l.ref=r.slug) leads, (SELECT COUNT(*) FROM sites x WHERE x.ref=r.slug) sites FROM reps r WHERE r.active=1 ORDER BY r.name`).all()).results || [];
  return shell("Rep pages", `<style>.ld{display:block;background:#f7f8fb;border:1px solid #e6e8ee;border-radius:14px;padding:14px 16px;margin:10px 0}.mu{color:#6b7280;font-size:14px}</style><h1>Rep pages</h1><p class="mu">Each rep has a landing page and a printable QR poster. Counts show page opens (from QR scans and links), leads and signups.</p>${rows.map(r => `<div class="ld"><b>${esc(r.name)}</b><br><a href="${base}/r/${esc(r.slug)}">Page</a> · <a href="${base}/r/${esc(r.slug)}/qr">QR poster</a><br><span class="mu">${r.qr} QR opens · ${r.link} link opens · ${r.leads} leads · ${r.sites} signups</span></div>`).join("")}`);
}

// ---------------------------------------------------------------- CRM: leads, score, status, notes, follow-ups
const KEY_SQL = ["pric", "contact", "book", "demo", "quote", "schedule", "checkout", "buy", "apply", "get-started", "signup", "sign-up", "consult", "franchise"].map(k => `path LIKE '%${k}%'`).join(" OR ");
const STATUSES = ["new", "contacted", "won", "lost"];
function scoreOf(r) {
  let n = 0;
  n += Math.min(25, (r.keypages || 0) * 12);
  n += (r.days || 0) >= 2 ? 20 : 0; n += (r.days || 0) >= 3 ? 5 : 0;
  n += Math.min(30, (r.clicks || 0) * 30);
  n += (r.forms || 0) > 0 ? 20 : 0;
  n += r.ident ? 15 : 0;
  n += Math.min(10, Math.max(0, (r.pages || 0) - 1) * 3);
  if (r.last && Date.now() - Date.parse(r.last) < 864e5) n += 5;
  return Math.max(0, Math.min(100, n));
}
const heat = n => n >= 70 ? "Hot" : n >= 40 ? "Warm" : "Cold";
const heatColor = n => n >= 70 ? "#d64545" : n >= 40 ? "#c47f00" : "#6b7280";
async function crmLeads(env, site, days = 30) {
  const since = new Date(Date.now() - days * 864e5).toISOString();
  const rows = (await env.DB.prepare(`SELECT vid, MAX(ts) last, MIN(ts) first, COUNT(DISTINCT substr(ts,1,10)) days, COUNT(DISTINCT path) pages,
      COUNT(DISTINCT CASE WHEN type='view' AND (${KEY_SQL}) THEN path END) keypages,
      SUM(type='click' AND json_extract(detail,'$.kind') IN ('phone','email')) clicks, SUM(type='form_start') forms,
      MAX(CASE WHEN org_kind='company' THEN org END) org, MAX(city) city, MAX(region) region
    FROM events WHERE site=? AND ts>=? AND is_bot=0 AND vid IS NOT NULL AND vid<>'' GROUP BY vid ORDER BY last DESC LIMIT 300`).bind(site.site, since).all()).results || [];
  const people = new Map(((await env.DB.prepare(`SELECT vid,name,email,phone FROM people WHERE site=?`).bind(site.site).all()).results || []).map(p => [p.vid, p]));
  const crm = new Map(((await env.DB.prepare(`SELECT vid,status,notes,follow_up,owner,updated FROM crm WHERE site=?`).bind(site.site).all()).results || []).map(c => [c.vid, c]));
  return rows.map(r => { const p = people.get(r.vid) || {}, c = crm.get(r.vid) || {}; const o = { ...r, name: p.name || null, email: p.email || null, phone: p.phone || null, status: c.status || "new", notes: c.notes || "", follow_up: c.follow_up || "", owner: c.owner || "", ident: !!(p.name || p.email || p.phone) }; o.score = scoreOf(o); return o; }).sort((a, b) => b.score - a.score || Date.parse(b.last) - Date.parse(a.last));
}
const leadWho = r => r.name || r.email || r.org || [r.city, r.region].filter(Boolean).join(", ") || "Visitor";
const CRM_CSS = `<style>main{max-width:760px}.chips a{display:inline-block;padding:7px 13px;border:1px solid #cfd4df;border-radius:99px;margin:3px 4px 3px 0;text-decoration:none;color:#3a4152;font-size:14px}.chips a.on{background:#2f5bea;color:#fff;border-color:#2f5bea}.ld{display:block;text-decoration:none;color:inherit;background:#f7f8fb;border:1px solid #e6e8ee;border-radius:14px;padding:14px 16px;margin:10px 0}.ld b{color:#12151c}.sc{float:right;font-weight:800;font-size:15px;border-radius:99px;padding:3px 11px;color:#fff}.mu{color:#6b7280;font-size:14px}.due{color:#d64545;font-weight:700}.st{display:inline-block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7c3aed}.tl{border-left:3px solid #e6e8ee;padding-left:12px;margin:8px 0}.tl div{margin:6px 0;font-size:15px}.btnrow a{display:inline-block;background:#2f5bea;color:#fff;border-radius:10px;padding:11px 18px;margin:4px 6px 4px 0;text-decoration:none;font-weight:700}.btnrow a.g{background:#0f9d58}</style>`;
async function crmPage(request, env, base) {
  const u = new URL(request.url), site = await authSite(env, u); if (!site) return new Response("Not found", { status: 404 });
  const tok = u.searchParams.get("t"), f = u.searchParams.get("f") || "all", today = new Date().toISOString().slice(0, 10);
  const all = await crmLeads(env, site), link = (k) => `${base}/crm?s=${esc(site.site)}&t=${esc(tok)}&f=${k}`;
  const due = r => r.follow_up && r.follow_up <= today && r.status !== "won" && r.status !== "lost";
  const list = all.filter(r => f === "all" ? true : f === "due" ? due(r) : f === "hot" ? r.score >= 70 : r.status === f);
  const cnt = { all: all.length, hot: all.filter(r => r.score >= 70).length, due: all.filter(due).length };
  for (const k of STATUSES) cnt[k] = all.filter(r => r.status === k).length;
  const chip = (k, t) => `<a class="${f === k ? "on" : ""}" href="${link(k)}">${t} ${cnt[k] ?? ""}</a>`;
  const items = list.length ? list.map(r => `<a class="ld" href="${base}/crm/lead?s=${esc(site.site)}&t=${esc(tok)}&v=${encodeURIComponent(r.vid)}"><span class="sc" style="background:${heatColor(r.score)}">${r.score} ${heat(r.score)}</span><b>${esc(leadWho(r))}</b>${r.name && r.org ? ` <span class="mu">· ${esc(r.org)}</span>` : ""}<br><span class="st">${esc(r.status)}</span> <span class="mu">· ${r.days} visit day${r.days === 1 ? "" : "s"} · ${r.pages} page${r.pages === 1 ? "" : "s"} · ${ago(r.last)}</span>${due(r) ? `<br><span class="due">Follow up due ${esc(r.follow_up)}</span>` : r.follow_up ? `<br><span class="mu">Follow up ${esc(r.follow_up)}</span>` : ""}${r.owner ? `<br><span class="mu">With: ${esc(r.owner)}</span>` : ""}</a>`).join("") : `<p class="mu">No leads here yet. People show up once they accept the cookie banner and visit.</p>`;
  return shell("Leads", `${CRM_CSS}<h1>Your leads</h1><p class="mu">Everyone who said yes to the cookie banner, ranked by how ready they look to buy. Last 30 days.</p><div class="chips">${chip("all", "All")}${chip("hot", "Hot")}${chip("due", "Follow-up due")}${chip("new", "New")}${chip("contacted", "Contacted")}${chip("won", "Won")}${chip("lost", "Lost")}</div>${items}<p class="mu"><a href="${base}/dash?s=${esc(site.site)}&t=${esc(tok)}">← Back to dashboard</a></p>`);
}
async function crmLead(request, env, base) {
  const u = new URL(request.url), site = await authSite(env, u); if (!site) return new Response("Not found", { status: 404 });
  const tok = u.searchParams.get("t"), vid = s(u.searchParams.get("v"), 40) || "";
  const r = (await crmLeads(env, site, 365)).find(x => x.vid === vid); if (!r) return new Response("Not found", { status: 404 });
  const ev = (await env.DB.prepare(`SELECT ts,type,path,detail FROM events WHERE site=? AND vid=? AND is_bot=0 ORDER BY id DESC LIMIT 60`).bind(site.site, vid).all()).results || [];
  const label = { view: "Viewed", leave: "Left", click: "Tapped", form_start: "Started a form", identify: "Told us who they are", event: "Event" };
  const tl = ev.map(e => { let d = ""; if (e.type === "click" && e.detail) { try { const j = JSON.parse(e.detail); d = ` ${j.kind || ""}`; } catch { } } return `<div><span class="mu">${esc(ago(e.ts))}</span> · ${esc(label[e.type] || e.type)}${esc(d)} <span class="mu">${esc(e.path || "")}</span></div>`; }).join("");
  const tel = r.phone ? `<a class="g" href="tel:${esc(r.phone)}">Call ${esc(r.phone)}</a>` : "", mail = r.email ? `<a href="mailto:${esc(r.email)}">Email ${esc(r.email)}</a>` : "";
  const opts = STATUSES.map(x => `<option value="${x}"${r.status === x ? " selected" : ""}>${x[0].toUpperCase() + x.slice(1)}</option>`).join("");
  return shell(leadWho(r), `${CRM_CSS}<p><a href="${base}/crm?s=${esc(site.site)}&t=${esc(tok)}">← All leads</a></p><h1>${esc(leadWho(r))}</h1><p><span class="sc" style="background:${heatColor(r.score)};float:none">${r.score} ${heat(r.score)}</span> <span class="mu">${r.days} visit day${r.days === 1 ? "" : "s"} · ${r.pages} pages · first seen ${esc(ago(r.first))}</span></p>${r.org ? `<p class="mu">Network: ${esc(r.org)}</p>` : ""}<div class="btnrow">${tel}${mail}${!tel && !mail ? `<span class="mu">They haven't shared a phone or email yet.</span>` : ""}</div>
<h2>Status and notes</h2><select id="st">${opts}</select><input id="fu" type="date" value="${esc(r.follow_up)}" aria-label="Follow-up date"><input id="ow" placeholder="Who is following up?" value="${esc(r.owner)}"><textarea id="nt" rows="4" placeholder="Notes">${esc(r.notes)}</textarea><button id="sv">Save</button><p id="ms" class="mu"></p>
<h2>What they did</h2><div class="tl">${tl || "<div class='mu'>Nothing yet.</div>"}</div>
<script>document.getElementById("sv").onclick=function(){var b=this;b.disabled=true;fetch("${esc(base)}/api/crm/update",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({s:${JSON.stringify(site.site)},t:${JSON.stringify(tok)},vid:${JSON.stringify(vid)},status:document.getElementById("st").value,follow_up:document.getElementById("fu").value,owner:document.getElementById("ow").value,notes:document.getElementById("nt").value})}).then(function(r){return r.json()}).then(function(j){document.getElementById("ms").textContent=j.ok?"Saved.":"Could not save.";b.disabled=false}).catch(function(){document.getElementById("ms").textContent="Could not save.";b.disabled=false})};</script>`);
}
async function crmUpdate(request, env) {
  let b; try { b = await request.json(); } catch { return json({ error: "bad json" }, 400); }
  const u = new URL("https://x/?s=" + encodeURIComponent(s(b.s, 40) || "") + "&t=" + encodeURIComponent(s(b.t, 80) || "")), site = await authSite(env, u); if (!site) return json({ error: "not found" }, 404);
  const vid = s(b.vid, 40); if (!vid) return json({ error: "vid required" }, 400);
  const known = await env.DB.prepare(`SELECT 1 x FROM events WHERE site=? AND vid=? LIMIT 1`).bind(site.site, vid).first(); if (!known) return json({ error: "unknown lead" }, 404);
  const status = STATUSES.includes(b.status) ? b.status : "new", fu = /^\d{4}-\d{2}-\d{2}$/.test(b.follow_up || "") ? b.follow_up : "";
  await env.DB.prepare(`INSERT INTO crm (site,vid,status,notes,follow_up,owner,updated) VALUES (?,?,?,?,?,?,?) ON CONFLICT(site,vid) DO UPDATE SET status=excluded.status, notes=excluded.notes, follow_up=excluded.follow_up, owner=excluded.owner, updated=excluded.updated`).bind(site.site, vid, status, s(b.notes, 2000) || "", fu, s(b.owner, 80) || "", new Date().toISOString()).run();
  return json({ ok: true });
}
// ---------------------------------------------------------------- health check
async function healthCheck(env) {
  const checks = {};
  try { await ensure(env.DB); const r = await env.DB.prepare(`SELECT COUNT(*) n FROM sites`).first(); checks.database = r && r.n >= 0 ? "ok" : "fail"; } catch (e) { checks.database = "fail"; }
  try { const js = snippet("kv_healthcheck", ORIGIN); checks.script = js.includes("/api/collect") && js.length > 500 ? "ok" : "fail"; } catch { checks.script = "fail"; }
  checks.landing = typeof LANDING === "string" && LANDING.length > 5000 ? "ok" : "fail";
  try { const r = await env.DB.prepare(`SELECT COUNT(*) n FROM crm`).first(); checks.crm = r ? "ok" : "fail"; } catch { checks.crm = "fail"; }
  return { ok: Object.values(checks).every(v => v === "ok"), checks, at: new Date().toISOString() };
}
async function healthRun(env) {
  const h = await healthCheck(env);
  try { await env.DB.prepare(`INSERT OR REPLACE INTO settings (k,v) VALUES ('last_health',?)`).bind((h.ok ? "ok " : "FAIL ") + h.at).run(); } catch { }
  if (!h.ok) {
    const st = await env.DB.prepare(`SELECT * FROM sites WHERE alert_webhook IS NOT NULL AND alert_webhook<>'' LIMIT 1`).first();
    if (st) { try { await notify(env, st, "Who's There self-check FAILED: " + Object.entries(h.checks).filter(([, v]) => v !== "ok").map(([k]) => k).join(", "), true); } catch { } }
  }
  return h;
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
    ctx.waitUntil((async () => { await ensure(env.DB); try { await healthRun(env); } catch { } const cut = new Date(Date.now() - 730 * 864e5).toISOString(); await env.DB.batch([env.DB.prepare(`DELETE FROM events WHERE ts<?`).bind(cut), env.DB.prepare(`DELETE FROM alerts WHERE day<?`).bind(cut.slice(0, 10))]); if (new Date().getUTCDay() === 1) { const all = (await env.DB.prepare(`SELECT * FROM sites`).all()).results || []; for (const st of all) { try { await digestRun(env, st); } catch { } } } })());
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
      if (p === "/company") return await company(request, env, base);
      if (p === "/dash.json") return await dash(request, env, "json");
      if (p === "/settings") return await settingsPage(request, env, base);
      if (p === "/api/settings" && request.method === "POST") return await saveSettings(request, env);
      if (p === "/api/crm-test" && request.method === "POST") return await crmTest(request, env);
      if (p === "/manifest.webmanifest") { const site = await authSite(env, u); return site ? manifest(request, base, site) : new Response("Not found", { status: 404 }); }
      if (p === "/icon.png") return new Response(Uint8Array.from(atob(ICON_B64), c => c.charCodeAt(0)), { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
      if (p === "/sw.js") return new Response("self.addEventListener('install',function(){self.skipWaiting()});self.addEventListener('fetch',function(){});", { headers: { "content-type": "application/javascript", "cache-control": "no-store" } });
      if (p === "/live") return await live(request, env);
      if (p === "/digest") { const site = await authSite(env, u); if (!site) return new Response("Not found", { status: 404 }); const txt = u.searchParams.get("send") === "1" ? await digestRun(env, site) : await digestText(env, site); return new Response(txt, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" } }); }
      if (p === "/signup" && request.method === "GET") return signupPage(base, u.searchParams.get("ref"));
      if (p === "/api/signup" && request.method === "POST") return await signup(request, env);
      if (p === "/install") return installPage(base, u.searchParams.get("s"));
      if (p === "/api/request" && request.method === "POST") return await privacyRequest(request, env);
      if (p === "/health") { const h = await healthCheck(env); return json({ service: "known-visitor", ...h }, h.ok ? 200 : 503); }
      if (p === "/reps") return await repsAdmin(request, env, base);
      { const m = p.match(/^\/r\/([a-z0-9]{2,30})(\/qr)?$/); if (m && request.method === "GET") return m[2] ? await repPoster(env, m[1]) : await repPage(request, env, base, m[1], ctx); }
      if (p === "/crm") return await crmPage(request, env, base);
      if (p === "/crm/lead") return await crmLead(request, env, base);
      if (p === "/api/crm/update" && request.method === "POST") return await crmUpdate(request, env);
      return new Response("not found", { status: 404 });
    } catch (e) { return json({ error: String(e && e.message) }, 500); }
  }
};
