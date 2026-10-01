# Hackathon submission sheet · Namma Urimai

## Project title
**நம்ம உரிமை — Namma Urimai**  
**Your state. Your language. Your next step.**

## One-line summary
A source-linked, voice-and-text public-service guide that helps first-time women users explore information in Tamil, Malayalam, Kannada, Telugu or English across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana.

## The problem
Many public-service journeys assume English fluency, confidence with forms, strong connectivity or a nearby helper. A first-time user can be excluded before she understands which official service applies to her.

## The solution
Namma Urimai replaces a blank form with an approachable starting point:

- Five illustrated state cards with local scheme/service routes and official links.
- Native-script selector for Tamil, Malayalam, Kannada, Telugu and English.
- Optional browser microphone input with visible permission/error feedback; typed alternative always available.
- Five bundled AI-generated voice samples (Tamil, Malayalam, Kannada, Telugu and English), speaker controls on both chat questions and answers, and an attempt to read replies aloud after spoken questions.
- A Tamil Nadu KMUT basics guide in Tamil and English; a non-binding source note rather than a pass/fail quiz for services whose current rules are complex or not fully verified.
- State-aware multilingual Gemini routing, with short plain-language replies when a server-side Gemini key is configured.
- Local fallback guidance when the key is absent or unavailable.
- A visible trust center: no Aadhaar/OTP request, voice processing disclosure, source links, no invented testimonials and no claim of government affiliation.

## Responsible coverage

- **Tamil Nadu:** KMUT; official budget describes ₹1,000 monthly assistance for eligible beneficiaries. The guide is not an eligibility decision.
- **Kerala:** Kudumbashree is described accurately as a women's community network, not a single cash benefit.
- **Karnataka:** Gruha Lakshmi official WCD / Seva Sindhu links are provided, but no current amount or detailed eligibility claim is made because current terms could not be independently verified during this review.
- **Andhra Pradesh:** The currently listed Thalliki Vandanam initiative is used instead of presenting the legacy Amma Vodi portal as proof of current statewide rules. The linked district page's ₹15,000 reference is restricted to Government Junior College students.
- **Telangana:** Kalyana Lakshmi / Shaadi Mubarak are routed through official ePASS information. Category-specific rules and income limits are not collapsed into one universal threshold.

## Why this matters
The prototype prioritizes a truthful official handoff over a broad but unreliable eligibility claim. It gives a user a language choice, an optional way to speak, a simple next action and a clear explanation of what the guide cannot do.

## Responsible AI and privacy

- Quiz answers and chat history exist in page memory only; the app does not persist conversations to local storage or a database.
- In guide mode, the built-in fallback answers run in the browser without sending a chat to Gemini.
- If Gemini is enabled, the selected state, language and bounded recent conversation are sent to the same-origin serverless endpoint and then to Google to generate a reply. The key is server-side; provider and host logging/retention policies may apply.
- The microphone starts only after a user action and permission. Browser speech services may process audio and may require internet; this app does not save a recording. Chrome/Edge, a secure page, and Windows/browser microphone permissions are required for the common desktop path.
- The five sample clips are bundled with the app and play without network access or installed language voices. They are AI-generated, not human recordings. For dynamic chat playback, Gemini TTS sends the chosen question or answer text to Google when its speaker is pressed; after a voice question, the reply may also be sent automatically for audio. Otherwise, a same-language browser/device voice is attempted. The app does not save generated audio.
- Client and server guards block likely long private numbers and OTP-like messages; users are still told not to share personal information.
- The grounded prompt forbids fabricated amounts, dates, eligibility guarantees and application claims; the model is not used to decide eligibility.

## Technology and deployability
Vanilla HTML/CSS/JavaScript; zero-dependency Node server for local testing; Vercel serverless chat and speech-generation endpoints; Gemini REST APIs called server-side; browser speech recognition and device-speech fallback; service-worker app shell. No frontend build, database, analytics or external UI dependency. GitHub-to-Vercel publishing steps are documented in `README.md`.

## SDG alignment
- **SDG 5 — Gender Equality:** a women-focused design that does not presume an English-speaking or male helper.
- **SDG 4 — Quality Education:** plain-language explanations support digital and public-service literacy.
- **SDG 10 — Reduced Inequalities:** native-language choice, voice/text alternatives and low-bandwidth support reduce access barriers.

## What success would look like
In a consent-based first-time-user test, a participant can identify the correct official next step without another person taking over her phone. Measure task completion, time-to-next-step and self-reported confidence. Establish a baseline before making impact claims; do not collect Aadhaar or application details.

## Short description to paste into a form
**Namma Urimai is a multilingual voice-and-text guide to public-service information across five South Indian states. It helps a first-time woman choose a state and language, understand a safe next step and open an official source. Coverage is source-aware: it treats Kudumbashree as a community network, avoids unverified current Gruha Lakshmi claims, uses the currently listed Thalliki Vandanam reference with a limited student scope, and preserves Telangana's category-specific rules. It does not submit applications, collect Aadhaar/OTP or decide eligibility.**

## Submission links to fill in after deployment

- **Public project:** `https://github.com/YOUR-USERNAME/namma-urimai`
- **Live demo:** copy the exact HTTPS URL Vercel gives your project (for example, `https://namma-urimai-YOUR-SUFFIX.vercel.app`)
- **Walkthrough:** [`docs/DEMO_SCRIPT.md`](docs/DEMO_SCRIPT.md)

Do not submit `localhost` or a fabricated Vercel address. A real public URL is generated only after you deploy from your GitHub/Vercel account.
