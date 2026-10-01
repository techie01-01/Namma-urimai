# 75-second judge demo · Namma Urimai

## Before the demo

- Use the **public HTTPS URL** from Vercel. Confirm state cards and source links load.
- Decide whether to show **Gemini mode** or the safe built-in guide. If Gemini is enabled, verify its badge and test one short question first; if not, the guide mode still demonstrates the core journey.
- Start in Tamil. Do not use real beneficiary details, personal numbers or invented user quotes. Ask permission before any live microphone demo; typing is a ready fallback.
- Test the mic in Chrome/Edge on the public HTTPS page (or local `localhost`), with browser and Windows mic permissions enabled. Voice recognition may need internet; do not depend on it for the demo.

## Spoken script + clicks

**0–10 sec — The problem**  
“Public services can feel unreachable when the first screen assumes English, form-filling confidence or someone nearby to help. Namma Urimai gives a first-time woman a calmer way to understand the next step—in the language she chooses.”

**10–23 sec — A guide, not another portal**  
Show the five-state notice, language selector and hero. Tap a state card, then show the native-script language choice.  
“We cover Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana. The interface is available in Tamil, Malayalam, Kannada, Telugu and English. It links to official sources; it never claims to be the government.”

**23–39 sec — Source-aware choices**  
Show the state cards and choose Kerala. Point to Kudumbashree's summary, then show the source-driven guide notice. Optionally switch to Andhra Pradesh and point out the student-scope note.  
“We don't force every service into a cash-benefit template. Kudumbashree is a women's community network. For Andhra Pradesh, we show Thalliki Vandanam rather than presenting Amma Vodi as a current scheme; the ₹15,000 reference is limited to Government Junior College students on the linked district page.”

**39–53 sec — Voice + simple text**  
Play the bundled samples for Tamil, Malayalam, Kannada, Telugu and English; they work without installed system voices. Show the speaker controls on both a question and an answer. If mic permissions and recognition are working, speak one short question; the app will try to read its reply aloud. Otherwise type a question and tap its speaker.  
“The five sample clips are packaged with the app, so each language has audio even on a device without that voice installed. Every chat message can be read aloud using Gemini TTS when configured, or a matching device voice. Microphone recognition depends on browser, permissions and connectivity. Text is always available.”

**53–65 sec — Trust, not false reassurance**  
Show the privacy cards and the note about genuine testimonials.  
“We do not ask for Aadhaar, OTP or bank numbers. The app does not save chat history. If Gemini chat is enabled, recent chat text is sent to Google for a reply. If Gemini read-aloud is configured, a voice-asked reply may be sent automatically for audio; pressing a question or answer speaker also sends that message text. The five bundled samples play locally. Browser speech recognition may process microphone audio.”

**65–75 sec — Official next step / close**  
Open the selected state's official source list.  
“The guide does not apply or decide eligibility. It gives a woman a clearer starting point, shows what we have actually verified, and hands her to the appropriate official source. That is the part we can responsibly scale.”

## 25-second backup pitch

“Namma Urimai is a multilingual voice-and-text guide to public-service information across five South Indian states. A first-time user can choose her state and language, ask a simple question and see an official next step. The scope is source-aware: Kudumbashree is treated as a community network, Karnataka's unverified current terms are not guessed, Andhra Pradesh uses the currently listed Thalliki Vandanam reference, and Telangana's category-specific rules stay category-specific. The app does not submit applications or decide eligibility.”

## Likely judge questions

**Which schemes are covered?**  
KMUT in Tamil Nadu; Kudumbashree community-network information in Kerala; Gruha Lakshmi source links in Karnataka; Thalliki Vandanam in Andhra Pradesh; and Kalyana Lakshmi / Shaadi Mubarak in Telangana. The coverage depth varies with what official information could be verified.

**Why not show ₹2,000 for Gruha Lakshmi?**  
The official WCD page could not be independently retrieved during this source review. The prototype therefore links the official WCD and Seva Sindhu pages but does not assert a current amount, eligibility details or application availability. We prefer a useful verified handoff to an unverified benefit claim.

**Why Thalliki Vandanam rather than Amma Vodi?**  
The current official district School Education page lists Thalliki Vandanam. A separate official district Intermediate Education page states ₹15,000 for Government Junior College students only. We do not generalize that amount to all students and do not treat an old Amma Vodi portal as proof of current statewide rules.

**Why no quiz for every state?**  
A one-size-fits-all eligibility quiz would be misleading for services with category-specific rules or incomplete current evidence. The TN quiz is a non-binding summary in Tamil and English; other states get a limited source-based guide until their current official criteria are verified and translated.

**What happens to data?**  
The app stores no chat history in local storage or a database. In guide mode, fallback answers run in the browser. In Gemini mode, a bounded recent conversation is sent to the server and Google to produce a reply. The five voice samples are bundled and play locally. For dynamic playback, if online TTS is configured, pressing a message speaker sends that text to Google; after a voice question, the reply may also be sent automatically for audio. Otherwise, matching device speech is attempted. Speech recognition may process microphone audio through the browser's service. Hosting and provider logs may still apply.

**Is the voice a real person?**  
No. The five bundled sample clips are AI-generated, not recordings of people, and play even without installed language voices. Dynamic answer read-aloud uses Gemini when configured or tries a matching browser/device voice; the written answer stays visible.

**Can this scale?**  
The reusable part is the interaction pattern: native-script language choice, simple prompts, optional voice, careful source-linked content, visible limitations, and an official handoff. A new scheme should be added only after checking current official rules and testing the translation with users.

**How would you measure impact?**  
Run a small, consent-based usability test. Measure whether a first-time user can name the next official step without another person taking over the phone, plus time-to-next-step and self-reported confidence. Do not collect Aadhaar, application numbers or other sensitive details, and do not claim impact before a real pilot.
