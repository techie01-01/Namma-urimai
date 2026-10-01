# நம்ம உரிமை · Namma Urimai

**Your state. Your language. Your next step.** Namma Urimai is an independent, voice-and-text guide for first-time women users exploring public-service information across **Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana**. The interface supports **Tamil, Malayalam, Kannada, Telugu and English**.

> **Not a government website.** This prototype does not submit applications, check a person's status or decide eligibility. It links to official sources and explains only the facts currently grounded in those sources.

## Public URL vs. localhost — important

- `http://localhost:3000` is only for **your own local testing**. Do not submit or share it; it works only on the computer running the server.
- The browser calls the same-origin `/api/chat` route, not a hardcoded localhost address. The route works on the domain where the app is deployed.
- After deployment, Vercel will assign a real HTTPS URL such as `https://namma-urimai-YOUR-SUFFIX.vercel.app`. Copy the **exact URL shown in your Vercel project** into your hackathon submission. The final suffix cannot be known before you deploy from your account.
- The Arena preview is temporary. For a stable, public URL with the Gemini endpoint, connect the GitHub repository to Vercel using the steps below.

## What a first-time user can do

1. **Choose a state** from five illustrated state cards. The guide defaults to that state's primary language unless the user has manually selected another language.
2. **Read or listen** in Tamil, Malayalam, Kannada, Telugu or English. The app bundles playable AI-generated sample recordings for all five languages, independent of installed system voices. Every chat question and answer has a speaker control; a spoken question also triggers an attempt to read the answer aloud. Dynamic message read-aloud uses Gemini speech generation when configured; otherwise, it tries a same-language voice installed on the device.
3. **Explore a safe next step.** Tamil Nadu offers a seven-question KMUT basics guide in Tamil and English. The other state services show a source-based information note instead of a potentially misleading universal eligibility quiz.
4. **Ask by text or voice.** Voice input is optional; typing always remains available. Voice recognition needs a supported browser and may rely on its online speech service. In Gemini mode, the AI is routed with the selected state and language. In guide mode, short, state-specific fallback answers run in the browser.
5. **Open an official link** for current rules, dates, categories and application routes. The prototype itself never applies for the user.

The project preserves a deliberately small scope: one practical next step, clear limits, no accounts and no assumed digital experience.

## Scheme facts and evidence boundaries

The source-linked catalogue lives in [`data/schemes.json`](data/schemes.json). It is reviewed 2026-10-01 and deliberately distinguishes detailed from limited coverage:

| State | Service shown | What this prototype safely says |
|---|---|---|
| Tamil Nadu | Kalaignar Magalir Urimai Thittam (KMUT) | The official 2025–26 budget describes ₹1,000 monthly assistance for eligible beneficiaries. The source-linked guide presents a basic criteria explainer; it is not an eligibility decision. |
| Kerala | Kudumbashree | A women's community network with NHG / ADS / CDS tiers, **not a single cash benefit**. Official membership guidance says adult women may join, with one membership per family. Local participation details should be checked with the local group. |
| Karnataka | Gruha Lakshmi | The official Women and Child Development scheme page and Seva Sindhu are linked. During this review, the department page could not be independently retrieved, so the prototype does **not** claim a current amount, detailed eligibility or an open application window. |
| Andhra Pradesh | Thalliki Vandanam | Used instead of treating Amma Vodi as current. An official district education page lists Thalliki Vandanam. A separate district page's ₹15,000 reference is limited to Government Junior College students; it must not be generalized to all school students or households. |
| Telangana | Kalyana Lakshmi / Shaadi Mubarak | The official ePASS page lists Kalyana Lakshmi services for SC / ST / BC / EBC categories and Shaadi Mubarak for minorities. Income limits and rules are category-specific; no single universal limit or amount is stated by this guide. |

**Please re-check official notices before a real application.** Scheme rules, payment details, dates and service routes can change. The app does not scrape a live portal or guarantee that an application is open.

## Voice and privacy — accurately stated

- The app does **not** write chat history or quiz answers to local storage or a database. Current chat and quiz answers are held in page memory and disappear when the page is closed or reloaded.
- In **guide mode** (no Gemini key, unavailable API, or offline), questions are answered by a local fallback and are not sent to Gemini. The PWA caches the app shell, scheme guide and five short language-sample audio files, not chats.
- In **Gemini mode**, the current question and a bounded recent conversation are sent to the same-origin serverless endpoint, then to Google Gemini to generate a reply. The Gemini key stays server-side. Google and hosting-provider terms/logging may apply; this prototype does not control provider logs.
- Microphone access starts only after the user taps **Speak** and grants permission. Browser speech recognition converts audio to text; depending on browser/device, audio may be processed by the browser's speech service and may require internet. This prototype does not record or store microphone audio. Use Chrome/Edge on `localhost` or an HTTPS site; Windows microphone privacy settings and the selected input device must also allow access.
- The five bundled language samples play locally from the app; pressing a sample button does not call Google or depend on an installed system voice. Every chat question and answer has a speaker button. If Gemini TTS is configured, pressing a message speaker sends that message text to Google; after a spoken question, the reply may also be sent automatically to produce audio. If Gemini TTS is unavailable, a matching browser/device voice is attempted—never a deliberately mismatched language voice. TTS calls may incur Google API usage charges; check your account's current terms and pricing.
- Likely long ID/phone/bank numbers and OTP-like messages are blocked in both client and server code. This cannot identify every private detail, so the interface still tells users not to share sensitive information.
- No Aadhaar, OTP, bank, phone or ration-card number is needed for this guide. **Never paste one into chat.**

## Tech and project structure

Vanilla HTML/CSS/JavaScript, a zero-dependency Node local server, one Vercel serverless function and a service-worker app shell. No framework build, database, analytics, tracking pixel or third-party font CDN.

```text
namma-urimai/
├── index.html                 Accessible state/language/voice-first UI
├── styles.css                 Responsive layout and illustration-card styling
├── multi-state.js             UI translations, state-specific notes and voice samples
├── app.js                     State selection, chat, speech, quiz and privacy checks
├── data/schemes.json          Localised state catalogue and official source links
├── api/chat.js                State-aware Vercel/Gemini endpoint; key server-side
├── api/speech.js              Rate-limited Gemini TTS endpoint; key server-side
├── server.js                  Zero-dependency local development server
├── sw.js                      Offline cache for app shell and scheme catalogue
├── manifest.webmanifest       Installable PWA metadata
├── assets/                    Hero art, app icons and five bundled voice samples
├── tests/check-project.js     Translation/source/API safety checks
├── docs/DEMO_SCRIPT.md        Multi-state demo story and judge Q&A
├── SUBMISSION.md              Copy-ready project summary and submission checklist
├── vercel.json                Deployment and security headers
├── .env.example               Placeholder only—never put a real key here
└── LICENSE                    MIT
```

## Run locally

**Requirements:** Node.js 18 or later. No `npm install` is needed; runtime code uses Node built-ins only.

```bash
cd namma-urimai
npm run dev
```

Open the URL printed in the terminal in Chrome or Edge—not in VS Code's HTML editor. The local server starts on port 3000 by default and now automatically tries the next port if 3000 is occupied; for example, it may print `http://localhost:3001`. Use that exact port in the browser. To choose a fixed port yourself in PowerShell, run `$env:PORT = "3100"` and then `npm run dev`; open **http://localhost:3100**. The state guide, source links, text chat, KMUT basics quiz and safe fallback work without a Gemini key. Microphone recognition depends on browser support, internet service and Windows microphone permissions; if unavailable, type the question instead.

### If microphone input does not start on Windows

1. Keep `npm run dev` running and open the URL in **Chrome or Edge**. Do not double-click `index.html` or use VS Code's HTML preview; browser speech recognition needs a supported secure origin such as `http://localhost` or a deployed HTTPS URL.
2. Press **Speak** once and choose **Allow** in the browser permission prompt. If it was previously blocked, open the site controls beside the address bar → **Site settings** → **Microphone: Allow**, then reload.
3. In Windows, check **Settings → Privacy & security → Microphone** and allow desktop apps; then check **Settings → System → Sound → Input** and select the working microphone.
4. The browser's speech service may need internet and may not support every language. The app now shows specific permission, device, network, silence and unsupported-language feedback. If recognition remains unavailable, type the question—the text path still works.

Run the syntax, localization, catalogue and API safety checks:

```bash
npm run check
```

### Enable Gemini locally (optional)

Create a Gemini API key in [Google AI Studio](https://aistudio.google.com/app/apikey). **Never put the key in `app.js`, HTML, screenshots, a public issue or a GitHub commit.** Set it only in the server's environment:

**macOS / Linux**

```bash
GEMINI_API_KEY="paste-your-key-here" npm run dev
```

**Windows PowerShell**

```powershell
$env:GEMINI_API_KEY = "paste-your-key-here"
npm run dev
```

**Windows Command Prompt**

```cmd
set GEMINI_API_KEY=paste-your-key-here && npm run dev
```

`GEMINI_MODEL` can be set to a model currently enabled for your Google project. The repository default is `gemini-3.8-flash`, listed as a stable model in [Google's Gemini model documentation](https://ai.google.dev/gemini-api/docs/models) (checked 2026-10-01). If that model is not enabled for your account, set the variable to another supported model. The endpoint sends only the selected language, selected state and bounded recent chat text required for a reply. When a Gemini key is configured, `GEMINI_TTS_MODEL` defaults to `gemini-3.8-flash-tts` for optional read-aloud requests (see [Gemini speech generation](https://ai.google.dev/gemini-api/docs/speech-generation)); the TTS endpoint is server-side and the key is never sent to the browser. You may set `GEMINI_TTS_MODEL` to a TTS model enabled for your account.

## Publish the project to GitHub

1. Sign in to GitHub and create a **new empty public repository** called `namma-urimai`. For the simplest first push, do not pre-create a README, license or `.gitignore` there.
2. Open a terminal in this project folder and run:

```bash
git init
git add .
git commit -m "Build Namma Urimai multilingual service guide"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/namma-urimai.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If your repository already contains a README, pull/rebase first or use GitHub Desktop. `.gitignore` excludes `.env`; still verify no real secret is staged before you push.

## Deploy a public demo on Vercel

Vercel is recommended because it hosts the static app **and** the server-side `/api/chat` endpoint. GitHub Pages can host the front end, but it cannot run this Vercel function; on Pages, the UI falls back to the local guide and AI chat is unavailable.

1. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
2. Import the public `namma-urimai` GitHub repository.
3. Choose **Framework Preset: Other**. Leave the build command and output directory empty; there is no front-end build step.
4. To enable Gemini, open **Project → Settings → Environment Variables** and add:
   - `GEMINI_API_KEY` = your Google AI Studio key
   - `GEMINI_MODEL` = a model name enabled for your Google project (optional; the code has a default)
   - `GEMINI_TTS_MODEL` = a speech-generation model enabled for your project (optional; default `gemini-3.8-flash-tts`)
   - Select **Production** and **Preview** for these variables. The same key enables the optional speaker-button TTS service; read-aloud calls may incur additional API usage.
5. Click **Deploy**. Vercel detects `api/chat.js` and `api/speech.js` as Node serverless functions.
6. Open the `*.vercel.app` address Vercel provides. **That exact HTTPS address is the public link to submit.** Do not submit `localhost` or the temporary Arena preview as your stable public URL.
7. In the app, check the chat status label. It should say **Gemini AI · connected** if the key works; otherwise the app still has its guide mode. Test the scheme cards, source links and one text question on the deployed URL. Play a bundled language sample, then try a chat answer's speaker button; if Gemini TTS is enabled, the voice status says so and you can select a device voice instead.
8. Push future changes to `main`; Vercel can redeploy from GitHub automatically.

The key stays on the server. Set a suitable usage quota/budget in Google Cloud if available. The example in-memory rate limit is a lightweight prototype safeguard, not production abuse protection.

## Two-hour ship checklist

| Time | Task | Done when |
|---|---|---|
| 0–10 min | Run `npm run dev` and `npm run check` | Local page and checks pass |
| 10–25 min | Try all five state cards and language selector | Each state changes its sources, summary and next-step note |
| 25–40 min | Create an empty public GitHub repository and push | Code is public; no secret is committed |
| 40–65 min | Import into Vercel; add Gemini environment variables if available; deploy | A real public HTTPS URL appears |
| 65–80 min | Test live URL on a phone and laptop | Layout, source links and state selection work |
| 80–100 min | Rehearse [`docs/DEMO_SCRIPT.md`](docs/DEMO_SCRIPT.md) | 60–75 seconds, no personal data needed |
| 100–120 min | Recheck scheme caveats, public link and API badge; freeze scope | GitHub and live links are ready to submit |

If Gemini setup or quotas slow you down, deploy the working guide first. Do not delay publication while waiting for an AI key.

## Last-minute test checklist

- [ ] Open the **public Vercel URL** on a phone; do not test only localhost.
- [ ] Choose each state; confirm scheme name, safe summary, step note and official links change.
- [ ] Switch the language to Tamil, Malayalam, Kannada, Telugu and English.
- [ ] Play all five bundled voice samples (Tamil, Malayalam, Kannada, Telugu and English); they should work even without language voices installed on the device.
- [ ] Confirm speaker buttons appear on both a user question and an assistant answer. With a voice question, confirm the app attempts to read the reply aloud; dynamic speech needs Gemini TTS or a matching device voice.
- [ ] Test microphone input in Chrome/Edge on HTTPS: allow site and Windows mic access, speak one short question, and confirm a transcript is sent. If the speech service is unavailable, verify the typed-question path still works.
- [ ] Try text Q&A in guide mode. If using Gemini, verify the connected badge and one short answer per state.
- [ ] Open the Tamil Nadu basics guide; show the “not a final decision” disclaimer.
- [ ] For Kerala, say Kudumbashree is a community network—not a fixed cash benefit.
- [ ] For Karnataka, do not announce an amount or exact current eligibility without checking the official source.
- [ ] For Andhra Pradesh, say the ₹15,000 reference is only for Government Junior College students on the linked district page; do not revive Amma Vodi as a current program without a current official rule.
- [ ] For Telangana, say category-specific limits differ; avoid one universal amount or threshold.
- [ ] Confirm the page does not ask for Aadhaar, OTP or bank details and that no fabricated testimonials appear.
- [ ] Check that the final form contains the exact public HTTPS link and public GitHub repository.

## Official source links

- **Tamil Nadu:** [KMUT portal](https://kmut.tn.gov.in/), [scheme and eligibility](https://kmut.tn.gov.in/about-kmut.html), [FAQ](https://kmut.tn.gov.in/faq.html), [2025–26 state budget PDF](https://www.tnbudget.tn.gov.in/tnweb_files/BS_2025_26_ENG_FINAL.pdf); the budget describes ₹1,000 monthly assistance.
- **Kerala:** [Kudumbashree membership](https://www.kudumbashree.org/pages/171), [community structure](https://www.kudumbashree.org/pages/9), [Kerala Local Self Government Department](https://lsgd.kerala.gov.in/en/waste-management/supporting-institutions/kudumbashree/).
- **Karnataka:** [Women and Child Development — Gruhalakshmi](https://dwcd.karnataka.gov.in/41/gruhalakshmi-scheme/en), [Seva Sindhu](https://sevasindhu.karnataka.gov.in/Sevasindhu/English). The WCD page could not be independently retrieved during this review; current terms are intentionally not asserted.
- **Andhra Pradesh:** [Tirupati School Education](https://tirupati.ap.gov.in/departments/education/), [Tirupati Intermediate Education](https://tirupati.ap.gov.in/intermediate-education/). The latter's stated ₹15,000 scope is Government Junior College students only.
- **Telangana:** [ePASS Kalyana Lakshmi links](https://telanganaepass.cgg.gov.in/KalyanaLakshmiLinks.jsp), [ePASS portal](https://telanganaepass.cgg.gov.in/), [Suryapet District information](https://suryapet.telangana.gov.in/scheme/kalyana-lakshmi-scheme/).

## License and attribution

MIT; see [`LICENSE`](LICENSE). The generated illustration is part of this prototype. Government sources are linked for verification; this project is not endorsed by any state government, Hack2Skill, Hackarena or Google.
