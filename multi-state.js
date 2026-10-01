/* Localised UI and state-specific plain-language guardrails for the multi-state prototype. */
(() => {
  "use strict";
  const copy = {
    ta: {
      skip: "உள்ளடக்கத்துக்குச் செல்ல", toplineLeft: "தமிழ்நாடு · கேரளம் · கர்நாடகம் · ஆந்திரப் பிரதேசம் · தெலங்கானா", toplineRight: "5 மாநிலங்களில் பெண்களுக்கான வழிகாட்டி · அரசுத் தளம் அல்ல",
      languageLabel: "மொழியைத் தேர்ந்தெடுக்கவும்", navLabel: "முதன்மை வழிசெலுத்தல்", brandAria: "நம்ம உரிமை — முகப்புக்குச் செல்ல", heroImageAria: "கிராமப்புற முற்றத்தில் கைப்பேசியைப் பயன்படுத்தும் பெண்", heroImageAlt: "கிராம வீட்டின் முற்றத்தில் அமைதியாக கைப்பேசியைப் பயன்படுத்தும் இந்தியப் பெண்", chatAria: "உரிமைத் தோழியுடன் உரையாடல்", micAria: "குரலில் பேச", sendAria: "கேள்வியை அனுப்பு",
      documentTitle: "நம்ம உரிமை — உங்கள் மாநிலம், உங்கள் மொழி", metaDescription: "தமிழ்நாடு, கேரளம், கர்நாடகம், ஆந்திரப் பிரதேசம், தெலங்கானா ஆகிய மாநிலங்களுக்கான எளிய மொழி மற்றும் குரல் வழிகாட்டி. அரசு தளம் அல்ல.",
      heroKicker: "ஐந்து தென் மாநிலங்கள் · எளிய மொழி வழிகாட்டி", heroTitle: "உங்கள் உரிமை,<br><span>உங்கள் குரலில்.</span>", heroBody: "உங்கள் மாநிலத்தின் அரசு சேவை அல்லது திட்டத்தை, தெரிந்த மொழியில் கேட்டு புரிந்துகொள்ளுங்கள். தட்டச்சு செய்யலாம், மைக்கில் பேசலாம்; அடுத்த படி தெளிவாக வரும்.", heroPrimary: "இந்த வழிகாட்டியைத் திற", heroSecondary: "பேசிக் கேட்க", heroReassure: "கணக்கு வேண்டாம். தொழில்நுட்ப அறிவு தேவையில்லை. உங்கள் வேகத்தில் கேளுங்கள்.", imageCaption: "தெரிந்த மொழி.<br>தெளிவான அடுத்த படி.", floatNote: "முதலில் கேளுங்கள்.<br>பிறகு முடிவு செய்யுங்கள்.",
      ribbonTitle: "உங்கள் முக்கிய எண்களை இங்கே பகிர வேண்டாம்.", ribbonOne: "ஆதார் / OTP கேட்காது", ribbonTwo: "செயலி உரையாடல் வரலாற்றைச் சேமிக்காது", ribbonThree: "அடுத்த முடிவு உங்களுடையது",
      stateKicker: "5 மாநிலங்கள் · 5 வழிகாட்டிகள்", stateTitle: "உங்கள் மாநிலம்.<br><em>உங்கள் வழி.</em>", stateIntro: "மாநிலத்தைத் தேர்ந்தெடுக்கவும். ஒவ்வொரு அட்டையும் அந்த மாநிலத்தின் அதிகாரப்பூர்வ திட்டம் அல்லது சேவை வழியைக் காட்டும்.", stateHonesty: "சுயாதீன வழிகாட்டி; அரசுத் தளம் அல்ல. விண்ணப்பத்தைச் சமர்ப்பிக்காது. விதி, தகுதி, தேதிகளை அதிகாரப்பூர்வ இணைப்பில் சரிபார்க்கவும்.", stateSelect: "இந்த மாநிலத்தைத் தேர்ந்தெடு", stateSelected: "தேர்ந்தெடுக்கப்பட்டது", plainLanguageTag: "எளிய வழிகாட்டி",
      voicesKicker: "குரல் வழிகாட்டிகள்", voicesTitle: "உங்களுக்குப் பிடித்த<br><em>குரலைக் கேளுங்கள்.</em>", voicesBody: "மாதிரி குரலைத் தேர்ந்தெடுத்தால், உங்கள் சாதனத்தின் உரை-ஒலி வசதி அதை வாசிக்கும்.", voiceTamil: "தமிழ் · Tamil", voiceMalayalam: "മലയാളം · Malayalam", voiceKannada: "ಕನ್ನಡ · Kannada", voiceTelugu: "తెలుగు · Telugu", playSample: "கேள்", voiceDisclaimer: "இவை சாதனத்தின் குரல் வசதியில் உருவாகும் மாதிரிகள்; உண்மையான நபர்களின் பதிவு அல்ல. கிடைக்கும் குரல் சாதனத்தைப் பொறுத்தது.",
      howKicker: "எளிய வழி. உங்கள் கட்டுப்பாடு.", howTitle: "தொடங்க மூன்று<br><em>எளிய வழிகள்.</em>", howBody: "முதன்முறையா? பரவாயில்லை. எந்தப் பொத்தானைத் தேர்ந்தெடுத்தாலும், ஒவ்வொரு படியையும் எளிய வார்த்தைகளில் சொல்கிறோம்.", cardOneTitle: "திட்ட வழியை<br>ஒன்றாகப் பார்ப்போம்", cardOneBody: "தேர்ந்தெடுத்த மாநிலத்திற்கான சுருக்கமான வழிகாட்டி. தனிப்பட்ட எண்கள் எதுவும் கேட்கப்படாது.", cardOneCta: "வழிகாட்டியைத் திற", cardTwoTitle: "அடுத்து என்ன<br>செய்யலாம்?", cardTwoBody: "அதிகாரப்பூர்வ அடுத்த படியை, ஒவ்வொன்றாகத் தெரிந்துகொள்ளுங்கள்.", cardTwoCta: "மூன்று படிகளைப் பார்", cardThreeTitle: "உங்கள் கேள்வி.<br>உங்கள் மொழியில்.", cardThreeBody: "தட்டச்சு செய்யுங்கள் அல்லது மைக்கைத் தொட்டு பேசுங்கள். பதில் சுருக்கமாக வரும்.", cardThreeCta: "தோழியிடம் கேள்", journeyFootnote: "இந்த வழிகாட்டி விண்ணப்பம் அல்ல. தகுதியையும் முடிவையும் அரசு தான் உறுதிப்படுத்தும்.",
      stepsKicker: "அதிகாரப்பூர்வ அடுத்த படி", stepsTitle: "அடுத்த வழி<br><em>தெளிவாக இருக்கட்டும்.</em>", stepsBody: "விதிகள், தகுதி, பதிவு தேதிகள் மாறலாம். கீழே உள்ள அரசு இணைப்பைத் திறந்து சமீபத்திய தகவலை உறுதிப்படுத்துங்கள்.", officialButton: "அதிகாரப்பூர்வ இணைப்பைத் திற", officialNote: "இந்த வழிகாட்டி விண்ணப்ப நிலை அல்லது தகுதியை உறுதிசெய்யாது.",
      stepOneTitle: "அரசு தகவல் பக்கத்தைத் திறக்கவும்", stepOneBody: "இந்தப் பக்கத்தில் உள்ள அதிகாரப்பூர்வ இணைப்பைப் பயன்படுத்தி தற்போதைய அறிவிப்பைப் பாருங்கள்.", stepTwoTitle: "உங்களுக்கு பொருந்தும் விதியைச் சரிபார்க்கவும்", stepThreeTitle: "அதிகாரப்பூர்வ வழியிலேயே உதவி பெறுங்கள்", stepThreeBody: "சந்தேகம் இருந்தால் உள்ளூர் அரசு அலுவலகம் அல்லது அதிகாரப்பூர்வ உதவி மையத்தில் கேளுங்கள். OTP அல்லது வங்கி விவரத்தை இங்கே பகிர வேண்டாம்.", stepSmallprint: "இது எளிய விளக்கம் மட்டுமே; அரசு விதி அல்லது விண்ணப்பம் அல்ல.",
      askKicker: "உங்கள் குரலில் கேளுங்கள்", askTitle: "கேட்பது சுலபம்.<br><em>புரிவதும் சுலபம்.</em>", askBody: "உங்கள் மொழியில் ஒரு கேள்வி கேளுங்கள். மைக் வேலை செய்யாவிட்டால், தட்டச்சு செய்யலாம்.", voiceStamp: "பேசலாம்.<br>தட்டச்சும் செய்யலாம்.", assistantName: "உரிமைத் தோழி", aiModeChecking: "தயார் ஆகிறது…", resetChat: "புதிதாகத் தொடங்கு", suggestLabel: "இதில் ஒன்றைக் கேளுங்கள்", suggestOne: "இந்தத் திட்டம் என்ன?", suggestTwo: "யார் விண்ணப்பிக்கலாம்?", suggestThree: "எப்படி விண்ணப்பிப்பது?", micButton: "பேசு", messageLabel: "உங்கள் கேள்வியை எழுதுங்கள்", inputPlaceholder: "உங்கள் கேள்வியை இங்கே எழுதுங்கள்…", voiceHint: "மைக் அனுமதி கேட்கப்படும். ஒலியை உலாவி அல்லது சாதனம் செயலாக்கலாம்.",
      geminiNote: "<strong>Gemini AI</strong> இயக்கப்பட்டால், இந்தக் கேள்வியும் சமீபத்திய உரையாடலும் பதில் உருவாக்க Google-க்கு அனுப்பப்படும். செயலி உரையாடல் வரலாற்றைச் சேமிக்காது; தனிப்பட்ட எண்களைப் பகிர வேண்டாம்.",
      trustKicker: "நம்பிக்கையே அடிப்படை", trustTitle: "தெளிவான தகவல்.<br><em>உங்கள் கட்டுப்பாடு.</em>", trustBody: "இது சுயாதீன வழிகாட்டி; எந்த அரசுத் துறையுடனும் இணைந்தது அல்ல. உங்களுக்குப் பதிலாக விண்ணப்பிக்காது. உரையாடல் வரலாற்றைச் செயலி சேமிக்காது.", trustCardOneTitle: "முக்கிய எண்களை கேட்க மாட்டோம்", trustCardOneBody: "ஆதார், OTP, வங்கி, தொலைபேசி அல்லது குடும்ப அட்டை எண்ணை இங்கே உள்ளிட வேண்டாம்.", trustCardTwoTitle: "அரசு மூல இணைப்புகள்", trustCardTwoBody: "விதிகள் மாறலாம். முடிவெடுப்பதற்கு முன் தேர்ந்தெடுத்த மாநிலத்தின் அதிகாரப்பூர்வ இணையதளத்தைப் பாருங்கள்.", trustCardThreeTitle: "இறுதி முடிவை அரசு உறுதிப்படுத்தும்", trustCardThreeBody: "இந்த வழிகாட்டி ஒரு தொடக்க உதவி மட்டுமே. தகுதி அல்லது ஒப்புதலை அரசு தான் முடிவு செய்யும்.", trustVoiceTitle: "குரல் மற்றும் தனியுரிமை", trustVoiceBody: "மைக் அனுமதி கொடுத்தால், ஒலியை உங்கள் உலாவி அல்லது சாதனம் செயலாக்கலாம். இந்தச் செயலி ஒலிப்பதிவைச் சேமிக்காது; செயலாக்கம் சாதனத்தைப் பொறுத்தது.", pilotLabel: "உண்மையான குரல்கள் · களச் சோதனைக்கு பின்", pilotNote: "இந்த prototype-இல் போலியான சான்றுரைகள் இல்லை. பெண்களுடன் சோதித்து, ஒப்புதல் பெற்ற உண்மையான கருத்துகளை மட்டுமே பின்னர் பகிர்வோம்.",
      sourcesTitle: "அரசு ஆதாரங்கள் & தகவல் எங்கிருந்து வருகிறது?", sourcesIntro: "கீழே தேர்ந்தெடுத்த மாநிலத்தின் அதிகாரப்பூர்வ ஆதாரங்கள் உள்ளன. நடப்பு விதிகள், தேதிகள், விண்ணப்ப வழி ஆகியவற்றை அங்கே சரிபார்க்கவும்.", sourceEligibility: "அதிகாரப்பூர்வ தகவல்", sourceFaq: "அதிகாரப்பூர்வ கேள்வி-பதில்", sourceHome: "அரசு திட்டப் பக்கம்", sourceBudget: "தமிழ்நாடு அரசு · பட்ஜெட் 2025–26", footerDisclaimer: "இது சுயாதீன prototype; எந்த அரசின் அதிகாரப்பூர்வ தளமும் அல்ல. தகவலை அரசு இணைப்பில் சரிபார்த்து, அங்கே மட்டுமே விண்ணப்பிக்கவும்.", footerOfficial: "அரசு இணைப்பு", footerTagline: "ஒவ்வொரு பெண்ணுக்கும் புரியும் உரிமை.", footerBuild: "தமிழ் · മലയാളം · ಕನ್ನಡ · తెలుగు · English · குறைந்த இணையத்திற்கும் ஏற்றது", installButton: "முகப்பில் சேர்க்கவும்", offlineNotice: "இணையம் இல்லை. அடிப்படை வழிகாட்டி தொடர்ந்து கிடைக்கும்.",
      aiModeGemini: "Gemini AI · இணைக்கப்பட்டுள்ளது", aiModeGuide: "அடிப்படை வழிகாட்டி · AI பதில் இல்லை", aiModeError: "AI இப்போது கிடைக்கவில்லை · அடிப்படை வழிகாட்டி தயார்", assistantGreeting: "வணக்கம்! {scheme} பற்றி எளிய விளக்கம் வேண்டுமா? உங்கள் மொழியில் கேளுங்கள். ஆதார், OTP அல்லது வங்கி எண்ணை இங்கே பகிர வேண்டாம்.", userMessageMeta: "நீங்கள்", aiMessageMeta: "உரிமைத் தோழி · AI", guideMessageMeta: "எளிய வழிகாட்டி", listenAnswer: "இந்தப் பதிலைக் கேள்", listenAnswerTitle: "பதிலைக் கேள்", typingLabel: "பதில் தயாராகிறது", msgSendError: "இணைய இணைப்பு தடைப்பட்டது. எளிய வழிகாட்டி பதிலைத் தருகிறேன்.", micUnsupported: "இந்த உலாவியில் குரல் உள்ளீடு கிடைக்காமல் இருக்கலாம். கேள்வியைத் தட்டச்சு செய்யலாம்.", micDenied: "மைக்கைப் பயன்படுத்த அனுமதி இல்லை. உலாவி அமைப்பில் அனுமதிக்கவும் அல்லது தட்டச்சு செய்யவும்.", micError: "குரலைப் புரிந்துகொள்ள முடியவில்லை. மீண்டும் முயற்சிக்கவும் அல்லது தட்டச்சு செய்யவும்.", speechUnavailable: "இந்தச் சாதனத்தில் ஒலி வாசிப்பு கிடைக்கவில்லை. உரையைப் படிக்கலாம்.", listeningNow: "கேட்கிறேன்… இப்போது பேசுங்கள்.", stateDataUnavailable: "மாநிலத் தகவலை ஏற்ற முடியவில்லை. இணையத்தைச் சரிபார்த்து மீண்டும் திறக்கவும்.", sensitiveMessage: "தனிப்பட்ட எண் இருக்கக்கூடிய செய்தியை அனுப்பவில்லை. அந்த எண்ணை நீக்கி மீண்டும் கேளுங்கள்.", emptyMessage: "உங்கள் கேள்வியை எழுதுங்கள் அல்லது பேசுங்கள்.", genericToast: "உங்கள் மாநிலத்தை முதலில் தேர்ந்தெடுக்கவும்.", fallbackOther: "இந்த வழிகாட்டி தேர்ந்தெடுத்த மாநிலத்தின் பொதுச் சேவைத் தகவலுக்காக. அதிகாரப்பூர்வ இணைப்பில் விதிகளைச் சரிபார்க்கவும்.", fallbackCurrent: "நடப்பு தகுதி, விண்ணப்ப நிலை அல்லது பதிவு தேதியை இந்த வழிகாட்டி உறுதிசெய்யாது. அதிகாரப்பூர்வ இணைப்பைப் பாருங்கள்.",
      stateNoticeKicker: "முக்கிய குறிப்பு", stateNoticeTitle: "இது ஒரு தகுதி முடிவு அல்ல.", stateNoticeBody: "இந்தச் சேவைக்கு ஒரே மாதிரியான தகுதி வினாடி வினா தவறாக வழிநடத்தலாம். அதிகாரப்பூர்வ ஆதாரத்தில் உறுதிசெய்யப்பட்ட வரம்பான தகவல்:", stateNoticeNext: "விதிகள், தகுதி, தேதிகள் மாறலாம். அரசு இணைப்பில் உறுதிப்படுத்துங்கள்; இந்தச் செயலி விண்ணப்பத்தைச் சமர்ப்பிக்காது.", stateNoticeOfficial: "அரசு ஆதாரத்தைத் திற", stateNoticeAsk: "இந்த வழிகாட்டியைப் பற்றி கேள்", stateNoticeClose: "மூடு", stateAskPrompt: "இந்தத் திட்டத்தின் அடுத்த படி என்ன?", genericToast: "உங்கள் மாநிலத்தை முதலில் தேர்ந்தெடுக்கவும்."
    },
    en: {
      skip: "Skip to content", toplineLeft: "Tamil Nadu · Kerala · Karnataka · Andhra Pradesh · Telangana", toplineRight: "A guide for women in 5 states · Not a government website",
      languageLabel: "Choose language", navLabel: "Main navigation", brandAria: "Namma Urimai — go to home", heroImageAria: "A woman using a phone in a rural courtyard", heroImageAlt: "An Indian woman calmly using a smartphone in her village courtyard", chatAria: "Conversation with the Urimai guide", micAria: "Speak your question", sendAria: "Send your question",
      documentTitle: "Namma Urimai — Your state, your language", metaDescription: "A simple text and voice guide to public services in Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana. Independent prototype, not a government website.",
      heroKicker: "Five southern states · a plain-language guide", heroTitle: "Your right,<br><span>in your own voice.</span>", heroBody: "Understand a public scheme or service in a language that feels familiar. Type a question or speak into the mic; get a clear next step.", heroPrimary: "Open this guide", heroSecondary: "Ask by voice", heroReassure: "No account. No technical knowledge. Ask at your own pace.", imageCaption: "A familiar language.<br>A clear next step.", floatNote: "Ask first.<br>Decide for yourself.",
      ribbonTitle: "Please don't share private numbers here.", ribbonOne: "No Aadhaar or OTP", ribbonTwo: "App does not save chat history", ribbonThree: "You choose the next step",
      stateKicker: "5 states · 5 guides", stateTitle: "Your state.<br><em>Your next step.</em>", stateIntro: "Choose a state. Each card links to an official scheme or service route for that state.", stateHonesty: "Independent guide, not a government website. It does not submit applications. Confirm current rules, eligibility and dates on the official link.", stateSelect: "Select this state", stateSelected: "Selected", plainLanguageTag: "plain-language guide",
      voicesKicker: "Featured voice guides", voicesTitle: "Choose a voice<br><em>that feels familiar.</em>", voicesBody: "Choose a sample; your device's text-to-speech feature will read it aloud.", voiceTamil: "தமிழ் · Tamil", voiceMalayalam: "മലയാളം · Malayalam", voiceKannada: "ಕನ್ನಡ · Kannada", voiceTelugu: "తెలుగు · Telugu", playSample: "Listen", voiceDisclaimer: "These are device-generated samples, not recordings of real people. Available voices depend on your device.",
      howKicker: "A simple route. Your choice.", howTitle: "Three easy ways<br><em>to get started.</em>", howBody: "First time here? That's okay. Choose any button and we'll explain each step in everyday words.", cardOneTitle: "Explore the service<br>together", cardOneBody: "A short guide for your selected state. No personal ID numbers are requested.", cardOneCta: "Open the guide", cardTwoTitle: "What can I<br>do next?", cardTwoBody: "Find the official next step, explained one piece at a time.", cardTwoCta: "See the three steps", cardThreeTitle: "Your question.<br>Your language.", cardThreeBody: "Type a question or tap the mic and speak. Answers are kept short.", cardThreeCta: "Ask the guide", journeyFootnote: "This guide is not an application. The government confirms eligibility and decisions.",
      stepsKicker: "The official next step", stepsTitle: "A clearer route<br><em>to public help.</em>", stepsBody: "Rules, eligibility and registration dates can change. Open the official link below and check the latest information.", officialButton: "Open official link", officialNote: "This guide cannot confirm application status or eligibility.", stepOneTitle: "Open the official information page", stepOneBody: "Use an official link on this page to check the latest notice.", stepTwoTitle: "Check the rule that applies to you", stepThreeTitle: "Get help through an official route", stepThreeBody: "If something is unclear, ask the relevant local government office or official help centre. Never share an OTP or bank details here.", stepSmallprint: "This is a plain-language guide, not a government rule or application.",
      askKicker: "Ask in your own voice", askTitle: "Easy to ask.<br><em>Easy to understand.</em>", askBody: "Ask a question in your language. If the mic is unavailable, you can type instead.", voiceStamp: "Speak it.<br>Or type it.", assistantName: "Urimai companion", aiModeChecking: "Getting ready…", resetChat: "Start over", suggestLabel: "Try asking", suggestOne: "What is this scheme?", suggestTwo: "Who can apply?", suggestThree: "How do I apply?", micButton: "Speak", messageLabel: "Type your question", inputPlaceholder: "Type your question here…", voiceHint: "Microphone permission is requested. Your browser or device may process audio.",
      geminiNote: "When <strong>Gemini AI</strong> is enabled, your question and recent conversation are sent to Google to generate a reply. This app does not save chat history; do not share private numbers.",
      trustKicker: "Trust comes first", trustTitle: "Clear information.<br><em>You stay in control.</em>", trustBody: "This is an independent guide, not affiliated with a government department. It will not apply on your behalf and does not save chat history.", trustCardOneTitle: "We don't ask for private numbers", trustCardOneBody: "Never enter Aadhaar, OTP, bank, phone or ration-card numbers here.", trustCardTwoTitle: "Official source links", trustCardTwoBody: "Rules can change. Check the official website for your selected state before acting.", trustCardThreeTitle: "The government confirms eligibility", trustCardThreeBody: "This guide is only a starting point. The government makes eligibility and approval decisions.", trustVoiceTitle: "Voice and privacy", trustVoiceBody: "If you allow microphone access, your browser or device may process audio. This app does not store recordings; handling depends on your device.", pilotLabel: "Real voices · only after field testing", pilotNote: "There are no fabricated testimonials in this prototype. We will only share genuine feedback from women after testing and with their consent.",
      sourcesTitle: "Official sources & where this information comes from", sourcesIntro: "The links below are official sources for the selected state. Check current rules, dates and application routes there.", sourceEligibility: "Official information", sourceFaq: "Official questions and answers", sourceHome: "Government scheme page", sourceBudget: "Government of Tamil Nadu · Budget 2025–26", footerDisclaimer: "This is an independent prototype, not an official government website. Confirm details through the government link and apply only there.", footerOfficial: "Official link", footerTagline: "A right every woman can understand.", footerBuild: "Tamil · Malayalam · Kannada · Telugu · English · low-bandwidth friendly", installButton: "Add to home screen", offlineNotice: "You're offline. The basic guide is still available.",
      aiModeGemini: "Gemini AI · connected", aiModeGuide: "Basic guide · no AI reply", aiModeError: "AI unavailable · basic guide is ready", assistantGreeting: "Hello! Would you like a simple explanation of {scheme}? Ask in your language. Please don't share Aadhaar, OTP or bank numbers here.", userMessageMeta: "You", aiMessageMeta: "Urimai companion · AI", guideMessageMeta: "Plain-language guide", listenAnswer: "Read this answer aloud", listenAnswerTitle: "Listen to answer", typingLabel: "Preparing an answer", msgSendError: "The connection dropped. I'll give you a basic guide answer instead.", micUnsupported: "Voice input may not be available in this browser. You can type your question instead.", micDenied: "Microphone permission is blocked. Allow it in your browser settings, or type instead.", micError: "I couldn't understand that. Please try again or type your question.", speechUnavailable: "Audio playback is not available on this device. You can read the text.", listeningNow: "Listening… speak now.", stateDataUnavailable: "State information could not be loaded. Check your connection and try again.", sensitiveMessage: "I didn't send a message containing a possible private number. Remove the number and ask again.", emptyMessage: "Type your question or use the mic.", genericToast: "Choose a state first.", fallbackOther: "This guide provides basic public-service information for your selected state. Check the official link for current rules.", fallbackCurrent: "This guide cannot confirm current eligibility, application status or registration dates. Check the official link.",
      stateNoticeKicker: "Important note", stateNoticeTitle: "This is not an eligibility decision.", stateNoticeBody: "A one-size-fits-all quiz could mislead for this service. Here is the limited information confirmed by the official source:", stateNoticeNext: "Rules, eligibility and dates can change. Confirm details on the official link; this app does not submit applications.", stateNoticeOfficial: "Open official source", stateNoticeAsk: "Ask about this guide", stateNoticeClose: "Close", stateAskPrompt: "What is the next step for this scheme?"
    },
    ml: {
      skip: "ഉള്ളടക്കത്തിലേക്ക് പോകുക", toplineLeft: "തമിഴ്നാട് · കേരളം · കർണാടക · ആന്ധ്രപ്രദേശ് · തെലങ്കാന", toplineRight: "5 സംസ്ഥാനങ്ങളിലെ സ്ത്രീകൾക്കുള്ള വഴികാട്ടി · സർക്കാർ വെബ്സൈറ്റ് അല്ല",
      languageLabel: "ഭാഷ തിരഞ്ഞെടുക്കുക", navLabel: "പ്രധാന നാവിഗേഷൻ", brandAria: "നമ്മ ഉറിമൈ — ഹോമിലേക്ക്", heroImageAria: "ഗ്രാമമുറ്റത്ത് ഫോൺ ഉപയോഗിക്കുന്ന സ്ത്രീ", heroImageAlt: "ഗ്രാമത്തിലെ വീട്ടുമുറ്റത്ത് ഫോൺ ഉപയോഗിക്കുന്ന ഇന്ത്യൻ സ്ത്രീ", chatAria: "ഉറിമൈ വഴികാട്ടിയുമായുള്ള സംഭാഷണം", micAria: "ചോദ്യം ശബ്ദമായി പറയുക", sendAria: "ചോദ്യം അയയ്ക്കുക",
      documentTitle: "നമ്മ ഉറിമൈ — നിങ്ങളുടെ സംസ്ഥാനം, നിങ്ങളുടെ ഭാഷ", metaDescription: "തമിഴ്നാട്, കേരളം, കർണാടക, ആന്ധ്രപ്രദേശ്, തെലങ്കാന എന്നിവിടങ്ങളിലെ പൊതുസേവനങ്ങൾക്ക് ലളിതമായ എഴുത്ത്, ശബ്ദ വഴികാട്ടി. സർക്കാർ വെബ്സൈറ്റ് അല്ല.",
      heroKicker: "അഞ്ച് തെക്കൻ സംസ്ഥാനങ്ങൾ · ലളിതമായ വഴികാട്ടി", heroTitle: "നിങ്ങളുടെ അവകാശം,<br><span>നിങ്ങളുടെ ശബ്ദത്തിൽ.</span>", heroBody: "നിങ്ങളുടെ സംസ്ഥാനത്തെ പൊതുപദ്ധതിയെ പരിചിതമായ ഭാഷയിൽ മനസ്സിലാക്കൂ. ചോദ്യം ടൈപ്പ് ചെയ്യുകയോ മൈക്കിൽ പറയുകയോ ചെയ്യാം; അടുത്ത പടി വ്യക്തമാക്കാം.", heroPrimary: "വഴികാട്ടി തുറക്കുക", heroSecondary: "ശബ്ദമായി ചോദിക്കുക", heroReassure: "അക്കൗണ്ട് വേണ്ട. സാങ്കേതിക അറിവ് വേണ്ട. നിങ്ങളുടെ വേഗത്തിൽ ചോദിക്കൂ.", imageCaption: "പരിചിതമായ ഭാഷ.<br>വ്യക്തമായ അടുത്ത പടി.", floatNote: "ആദ്യം ചോദിക്കൂ.<br>ശേഷം തീരുമാനിക്കൂ.",
      ribbonTitle: "സ്വകാര്യ നമ്പറുകൾ ഇവിടെ പങ്കിടരുത്.", ribbonOne: "ആധാർ / OTP ചോദിക്കില്ല", ribbonTwo: "ആപ്പ് ചാറ്റ് ചരിത്രം സൂക്ഷിക്കില്ല", ribbonThree: "അടുത്ത പടി നിങ്ങൾ തിരഞ്ഞെടുക്കാം",
      stateKicker: "5 സംസ്ഥാനങ്ങൾ · 5 വഴികാട്ടികൾ", stateTitle: "നിങ്ങളുടെ സംസ്ഥാനം.<br><em>അടുത്ത പടി.</em>", stateIntro: "ഒരു സംസ്ഥാനം തിരഞ്ഞെടുക്കൂ. ഓരോ കാർഡും ആ സംസ്ഥാനത്തിന്റെ ഔദ്യോഗിക പദ്ധതി അല്ലെങ്കിൽ സേവനത്തിലേക്ക് നയിക്കും.", stateHonesty: "സ്വതന്ത്ര വഴികാട്ടി; സർക്കാർ വെബ്സൈറ്റ് അല്ല. അപേക്ഷ സമർപ്പിക്കില്ല. നിലവിലെ നിയമങ്ങളും തീയതികളും ഔദ്യോഗിക ലിങ്കിൽ പരിശോധിക്കുക.", stateSelect: "ഈ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക", stateSelected: "തിരഞ്ഞെടുത്തു", plainLanguageTag: "ലളിതമായ വഴികാട്ടി",
      voicesKicker: "ശബ്ദ വഴികാട്ടികൾ", voicesTitle: "പരിചിതമായ<br><em>ശബ്ദം തിരഞ്ഞെടുക്കൂ.</em>", voicesBody: "ഒരു മാതൃക തിരഞ്ഞെടുക്കൂ; നിങ്ങളുടെ ഉപകരണത്തിലെ ടെക്സ്റ്റ്-ടു-സ്പീച്ച് അത് വായിക്കും.", voiceTamil: "தமிழ் · Tamil", voiceMalayalam: "മലയാളം · Malayalam", voiceKannada: "ಕನ್ನಡ · Kannada", voiceTelugu: "తెలుగు · Telugu", playSample: "കേൾക്കൂ", voiceDisclaimer: "ഇവ ഉപകരണം സൃഷ്ടിക്കുന്ന ശബ്ദമാതൃകകളാണ്; യഥാർത്ഥ ആളുകളുടെ റെക്കോർഡിങ്ങുകളല്ല. ലഭ്യമായ ശബ്ദം ഉപകരണത്തെ ആശ്രയിക്കും.",
      howKicker: "ലളിതമായ വഴി. നിങ്ങളുടെ തിരഞ്ഞെടുപ്പ്.", howTitle: "തുടങ്ങാൻ മൂന്ന്<br><em>ലളിതമായ വഴികൾ.</em>", howBody: "ആദ്യമായാണോ? പ്രശ്നമില്ല. ഏത് ബട്ടൺ തിരഞ്ഞെടുത്താലും ഓരോ ഘട്ടവും ലളിതമായി വിശദീകരിക്കും.", cardOneTitle: "സേവനത്തിന്റെ വഴി<br>ഒരുമിച്ച് നോക്കാം", cardOneBody: "തിരഞ്ഞെടുത്ത സംസ്ഥാനത്തിനുള്ള ചെറു വഴികാട്ടി. സ്വകാര്യ തിരിച്ചറിയൽ നമ്പറുകൾ ചോദിക്കില്ല.", cardOneCta: "വഴികാട്ടി തുറക്കുക", cardTwoTitle: "അടുത്തതായി<br>എന്തുചെയ്യാം?", cardTwoBody: "ഔദ്യോഗിക അടുത്ത പടി ഓരോന്നായി മനസ്സിലാക്കൂ.", cardTwoCta: "മൂന്ന് ഘട്ടങ്ങൾ കാണുക", cardThreeTitle: "നിങ്ങളുടെ ചോദ്യം.<br>നിങ്ങളുടെ ഭാഷയിൽ.", cardThreeBody: "ടൈപ്പ് ചെയ്യുകയോ മൈക്കിൽ സംസാരിക്കുകയോ ചെയ്യാം. മറുപടി ചുരുക്കമായിരിക്കും.", cardThreeCta: "വഴികാട്ടിയോട് ചോദിക്കൂ", journeyFootnote: "ഇത് അപേക്ഷയല്ല. അർഹതയും തീരുമാനവും സർക്കാർ സ്ഥിരീകരിക്കും.",
      stepsKicker: "ഔദ്യോഗിക അടുത്ത പടി", stepsTitle: "അടുത്ത വഴി<br><em>വ്യക്തമാക്കാം.</em>", stepsBody: "നിയമങ്ങളും അർഹതയും അപേക്ഷ തീയതികളും മാറാം. നിലവിലെ വിവരം അറിയാൻ ഔദ്യോഗിക ലിങ്ക് തുറക്കൂ.", officialButton: "ഔദ്യോഗിക ലിങ്ക് തുറക്കുക", officialNote: "അപേക്ഷയുടെ നിലയോ അർഹതയോ ഈ വഴികാട്ടിക്ക് സ്ഥിരീകരിക്കാനാവില്ല.", stepOneTitle: "ഔദ്യോഗിക വിവരപ്പേജ് തുറക്കുക", stepOneBody: "ഈ പേജിലെ ഔദ്യോഗിക ലിങ്ക് ഉപയോഗിച്ച് പുതിയ അറിയിപ്പ് പരിശോധിക്കുക.", stepTwoTitle: "നിങ്ങൾക്ക് ബാധകമായ നിയമം പരിശോധിക്കുക", stepThreeTitle: "ഔദ്യോഗിക മാർഗത്തിലൂടെ സഹായം തേടുക", stepThreeBody: "സംശയമുണ്ടെങ്കിൽ ബന്ധപ്പെട്ട സർക്കാർ ഓഫീസിലോ ഔദ്യോഗിക സഹായകേന്ദ്രത്തിലോ ചോദിക്കുക. OTPയോ ബാങ്ക് വിവരങ്ങളോ ഇവിടെ പങ്കിടരുത്.", stepSmallprint: "ഇത് ലളിതമായ വഴികാട്ടി മാത്രം; സർക്കാർ തീരുമാനമോ അപേക്ഷയോ അല്ല.",
      askKicker: "നിങ്ങളുടെ ഭാഷയിൽ ചോദിക്കൂ", askTitle: "ചോദിക്കാൻ എളുപ്പം.<br><em>മനസ്സിലാക്കാനും എളുപ്പം.</em>", askBody: "നിങ്ങളുടെ ഭാഷയിൽ ചോദിക്കൂ. മൈക്ക് പ്രവർത്തിക്കില്ലെങ്കിൽ ടൈപ്പ് ചെയ്യാം.", voiceStamp: "പറയൂ.<br>അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യൂ.", assistantName: "ഉറിമൈ കൂട്ടുകാരി", aiModeChecking: "തയ്യാറാക്കുന്നു…", resetChat: "പുതുതായി തുടങ്ങുക", suggestLabel: "ഇങ്ങനെ ചോദിക്കാം", suggestOne: "ഈ പദ്ധതി എന്താണ്?", suggestTwo: "ആർക്കൊക്കെ അപേക്ഷിക്കാം?", suggestThree: "എങ്ങനെ അപേക്ഷിക്കാം?", micButton: "സംസാരിക്കുക", messageLabel: "ചോദ്യം ടൈപ്പ് ചെയ്യുക", inputPlaceholder: "ചോദ്യം ഇവിടെ ടൈപ്പ് ചെയ്യൂ…", voiceHint: "മൈക്ക് അനുമതി ചോദിക്കും. ശബ്ദം ബ്രൗസറോ ഉപകരണമോ പ്രോസസ് ചെയ്യാം.",
      geminiNote: "<strong>Gemini AI</strong> പ്രവർത്തിച്ചാൽ, നിങ്ങളുടെ ചോദ്യവും സമീപകാല സംഭാഷണവും മറുപടി സൃഷ്ടിക്കാൻ Google-ലേക്ക് അയക്കും. ഈ ആപ്പ് ചാറ്റ് ചരിത്രം സൂക്ഷിക്കില്ല; സ്വകാര്യ നമ്പറുകൾ പങ്കിടരുത്.",
      trustKicker: "വിശ്വാസം ആദ്യം", trustTitle: "വ്യക്തമായ വിവരം.<br><em>നിങ്ങളുടെ നിയന്ത്രണം.</em>", trustBody: "ഇത് സ്വതന്ത്ര വഴികാട്ടിയാണ്; സർക്കാർ വകുപ്പുമായി ബന്ധമില്ല. നിങ്ങൾക്കുവേണ്ടി അപേക്ഷിക്കുകയോ ചാറ്റ് ചരിത്രം സൂക്ഷിക്കുകയോ ചെയ്യില്ല.", trustCardOneTitle: "സ്വകാര്യ നമ്പറുകൾ ചോദിക്കില്ല", trustCardOneBody: "ആധാർ, OTP, ബാങ്ക്, ഫോൺ, റേഷൻ കാർഡ് നമ്പറുകൾ ഇവിടെ നൽകരുത്.", trustCardTwoTitle: "ഔദ്യോഗിക ലിങ്കുകൾ", trustCardTwoBody: "നിയമങ്ങൾ മാറാം. നടപടിക്ക് മുമ്പ് തിരഞ്ഞെടുത്ത സംസ്ഥാനത്തിന്റെ ഔദ്യോഗിക വെബ്സൈറ്റ് പരിശോധിക്കുക.", trustCardThreeTitle: "അർഹത സർക്കാർ സ്ഥിരീകരിക്കും", trustCardThreeBody: "ഇത് തുടക്കസഹായം മാത്രം. അർഹതയും അംഗീകാരവും സർക്കാർ തീരുമാനിക്കും.", trustVoiceTitle: "ശബ്ദവും സ്വകാര്യതയും", trustVoiceBody: "മൈക്ക് അനുവദിച്ചാൽ ബ്രൗസറോ ഉപകരണമോ ശബ്ദം പ്രോസസ് ചെയ്യാം. ഈ ആപ്പ് റെക്കോർഡിങ് സൂക്ഷിക്കില്ല; കൈകാര്യം ചെയ്യൽ ഉപകരണത്തെ ആശ്രയിക്കും.", pilotLabel: "യഥാർത്ഥ ശബ്ദങ്ങൾ · ഫീൽഡ് ടെസ്റ്റിന് ശേഷം", pilotNote: "ഈ prototype-ൽ കെട്ടിച്ചമച്ച ഉപയോക്തൃ അഭിപ്രായങ്ങളില്ല. സ്ത്രീകളുമായി പരീക്ഷിച്ച്, അവരുടെ സമ്മതമുള്ള യഥാർത്ഥ പ്രതികരണങ്ങൾ മാത്രമേ പിന്നീട് പങ്കിടൂ.",
      sourcesTitle: "ഔദ്യോഗിക ഉറവിടങ്ങളും വിവരങ്ങളും", sourcesIntro: "താഴെ തിരഞ്ഞെടുത്ത സംസ്ഥാനത്തിന്റെ ഔദ്യോഗിക ഉറവിടങ്ങളുണ്ട്. നിലവിലെ നിയമങ്ങളും തീയതികളും അപേക്ഷാമാർഗവും അവിടെ പരിശോധിക്കുക.", sourceEligibility: "ഔദ്യോഗിക വിവരം", sourceFaq: "ഔദ്യോഗിക ചോദ്യോത്തരങ്ങൾ", sourceHome: "സർക്കാർ പദ്ധതി പേജ്", sourceBudget: "തമിഴ്നാട് സർക്കാർ · ബജറ്റ് 2025–26", footerDisclaimer: "ഇത് സ്വതന്ത്ര prototype ആണ്; ഔദ്യോഗിക സർക്കാർ വെബ്സൈറ്റ് അല്ല. വിവരങ്ങൾ സർക്കാർ ലിങ്കിൽ പരിശോധിച്ച് അവിടെ മാത്രം അപേക്ഷിക്കുക.", footerOfficial: "ഔദ്യോഗിക ലിങ്ക്", footerTagline: "ഓരോ സ്ത്രീക്കും മനസ്സിലാകുന്ന അവകാശം.", footerBuild: "தமிழ் · മലയാളം · ಕನ್ನಡ · తెలుగు · English · കുറഞ്ഞ ഡാറ്റയ്ക്കും അനുയോജ്യം", installButton: "ഹോം സ്ക്രീനിൽ ചേർക്കുക", offlineNotice: "ഇന്റർനെറ്റ് ഇല്ല. അടിസ്ഥാന വഴികാട്ടി ലഭ്യമാണ്.",
      aiModeGemini: "Gemini AI · ബന്ധിപ്പിച്ചു", aiModeGuide: "അടിസ്ഥാന വഴികാട്ടി · AI മറുപടിയില്ല", aiModeError: "AI ലഭ്യമല്ല · അടിസ്ഥാന വഴികാട്ടി തയ്യാറാണ്", assistantGreeting: "നമസ്കാരം! {scheme}യെക്കുറിച്ച് ലളിതമായി അറിയണോ? നിങ്ങളുടെ ഭാഷയിൽ ചോദിക്കൂ. ആധാർ, OTP, ബാങ്ക് നമ്പറുകൾ ഇവിടെ പങ്കിടരുത്.", userMessageMeta: "നിങ്ങൾ", aiMessageMeta: "ഉറിമൈ കൂട്ടുകാരി · AI", guideMessageMeta: "ലളിതമായ വഴികാട്ടി", listenAnswer: "ഈ മറുപടി കേൾക്കൂ", listenAnswerTitle: "മറുപടി കേൾക്കൂ", typingLabel: "മറുപടി തയ്യാറാക്കുന്നു", msgSendError: "ബന്ധം നഷ്ടപ്പെട്ടു. അടിസ്ഥാന വഴികാട്ടി മറുപടി നൽകാം.", micUnsupported: "ഈ ബ്രൗസറിൽ ശബ്ദ ഇൻപുട്ട് ലഭിക്കണമെന്നില്ല. ചോദ്യം ടൈപ്പ് ചെയ്യാം.", micDenied: "മൈക്ക് അനുമതി തടഞ്ഞു. ബ്രൗസർ ക്രമീകരണത്തിൽ അനുവദിക്കൂ അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യൂ.", micError: "ശബ്ദം മനസ്സിലായില്ല. വീണ്ടും ശ്രമിക്കൂ അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യൂ.", speechUnavailable: "ഈ ഉപകരണത്തിൽ ശബ്ദ വായന ലഭ്യമല്ല. എഴുത്ത് വായിക്കാം.", listeningNow: "ശ്രദ്ധിക്കുന്നു… ഇപ്പോൾ പറയൂ.", stateDataUnavailable: "സംസ്ഥാന വിവരം ലഭിച്ചില്ല. ഇന്റർനെറ്റ് പരിശോധിച്ച് വീണ്ടും തുറക്കുക.", sensitiveMessage: "സ്വകാര്യ നമ്പറുണ്ടാകാവുന്ന സന്ദേശം അയച്ചില്ല. നമ്പർ നീക്കി വീണ്ടും ചോദിക്കൂ.", emptyMessage: "ചോദ്യം ടൈപ്പ് ചെയ്യുകയോ മൈക്ക് ഉപയോഗിക്കുകയോ ചെയ്യൂ.", genericToast: "ആദ്യം ഒരു സംസ്ഥാനം തിരഞ്ഞെടുക്കുക.", fallbackOther: "തിരഞ്ഞെടുത്ത സംസ്ഥാനത്തെ പൊതുസേവന വിവരങ്ങൾക്കുള്ള അടിസ്ഥാന വഴികാട്ടിയാണിത്. നിലവിലെ നിയമങ്ങൾ ഔദ്യോഗിക ലിങ്കിൽ പരിശോധിക്കുക.", fallbackCurrent: "നിലവിലെ അർഹത, അപേക്ഷാ നില, രജിസ്ട്രേഷൻ തീയതി എന്നിവ ഈ വഴികാട്ടിക്ക് സ്ഥിരീകരിക്കാനാവില്ല. ഔദ്യോഗിക ലിങ്ക് പരിശോധിക്കുക.",
      stateNoticeKicker: "പ്രധാന കുറിപ്പ്", stateNoticeTitle: "ഇത് അർഹതാ തീരുമാനമല്ല.", stateNoticeBody: "എല്ലാവർക്കും ഒരേ ചോദ്യാവലി ഉപയോഗിക്കുന്നത് തെറ്റിദ്ധരിപ്പിക്കാം. ഔദ്യോഗിക ഉറവിടത്തിൽ സ്ഥിരീകരിച്ച പരിമിതമായ വിവരം:", stateNoticeNext: "നിയമങ്ങളും തീയതികളും മാറാം. ഔദ്യോഗിക ലിങ്കിൽ ഉറപ്പാക്കുക; ഈ ആപ്പ് അപേക്ഷ സമർപ്പിക്കില്ല.", stateNoticeOfficial: "ഔദ്യോഗിക ഉറവിടം തുറക്കുക", stateNoticeAsk: "വഴികാട്ടിയെക്കുറിച്ച് ചോദിക്കൂ", stateNoticeClose: "അടയ്ക്കുക", stateAskPrompt: "ഈ പദ്ധതിയുടെ അടുത്ത പടി എന്താണ്?"
    },
    kn: {
      skip: "ವಿಷಯಕ್ಕೆ ಹೋಗಿ", toplineLeft: "ತಮಿಳುನಾಡು · ಕೇರಳ · ಕರ್ನಾಟಕ · ಆಂಧ್ರ ಪ್ರದೇಶ · ತೆಲಂಗಾಣ", toplineRight: "5 ರಾಜ್ಯಗಳ ಮಹಿಳೆಯರಿಗೆ ಮಾರ್ಗದರ್ಶಿ · ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಅಲ್ಲ",
      languageLabel: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ", navLabel: "ಮುಖ್ಯ ನ್ಯಾವಿಗೇಶನ್", brandAria: "ನಮ್ಮ ಉರಿಮೈ — ಮುಖಪುಟಕ್ಕೆ", heroImageAria: "ಗ್ರಾಮದ ಅಂಗಳದಲ್ಲಿ ಫೋನ್ ಬಳಸುತ್ತಿರುವ ಮಹಿಳೆ", heroImageAlt: "ಗ್ರಾಮದ ಮನೆಯ ಅಂಗಳದಲ್ಲಿ ಫೋನ್ ಬಳಸುತ್ತಿರುವ ಭಾರತೀಯ ಮಹಿಳೆ", chatAria: "ಉರಿಮೈ ಮಾರ್ಗದರ್ಶಿಯೊಂದಿಗೆ ಸಂಭಾಷಣೆ", micAria: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಮಾತನಾಡಿ", sendAria: "ಪ್ರಶ್ನೆ ಕಳುಹಿಸಿ",
      documentTitle: "ನಮ್ಮ ಉರಿಮೈ — ನಿಮ್ಮ ರಾಜ್ಯ, ನಿಮ್ಮ ಭಾಷೆ", metaDescription: "ತಮಿಳುನಾಡು, ಕೇರಳ, ಕರ್ನಾಟಕ, ಆಂಧ್ರ ಪ್ರದೇಶ ಮತ್ತು ತೆಲಂಗಾಣದ ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳಿಗೆ ಸರಳ ಪಠ್ಯ ಮತ್ತು ಧ್ವನಿ ಮಾರ್ಗದರ್ಶಿ. ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಅಲ್ಲ.",
      heroKicker: "ಐದು ದಕ್ಷಿಣ ರಾಜ್ಯಗಳು · ಸರಳ ಮಾರ್ಗದರ್ಶಿ", heroTitle: "ನಿಮ್ಮ ಹಕ್ಕು,<br><span>ನಿಮ್ಮದೇ ಧ್ವನಿಯಲ್ಲಿ.</span>", heroBody: "ನಿಮ್ಮ ರಾಜ್ಯದ ಸರ್ಕಾರಿ ಯೋಜನೆ ಅಥವಾ ಸೇವೆಯನ್ನು ನಿಮಗೆ ಪರಿಚಿತವಾದ ಭಾಷೆಯಲ್ಲಿ ತಿಳಿಯಿರಿ. ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮೈಕ್‌ನಲ್ಲಿ ಹೇಳಿ; ಮುಂದಿನ ಹೆಜ್ಜೆ ಸ್ಪಷ್ಟವಾಗುತ್ತದೆ.", heroPrimary: "ಮಾರ್ಗದರ್ಶಿ ತೆರೆಯಿರಿ", heroSecondary: "ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಿ", heroReassure: "ಖಾತೆ ಬೇಡ. ತಾಂತ್ರಿಕ ಜ್ಞಾನ ಬೇಡ. ನಿಮ್ಮ ವೇಗದಲ್ಲಿ ಕೇಳಿ.", imageCaption: "ಪರಿಚಿತ ಭಾಷೆ.<br>ಸ್ಪಷ್ಟ ಮುಂದಿನ ಹೆಜ್ಜೆ.", floatNote: "ಮೊದಲು ಕೇಳಿ.<br>ನಂತರ ನಿರ್ಧರಿಸಿ.",
      ribbonTitle: "ಖಾಸಗಿ ಸಂಖ್ಯೆಯನ್ನು ಇಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.", ribbonOne: "ಆಧಾರ್ / OTP ಕೇಳುವುದಿಲ್ಲ", ribbonTwo: "ಆಪ್ ಚಾಟ್ ಇತಿಹಾಸ ಉಳಿಸುವುದಿಲ್ಲ", ribbonThree: "ಮುಂದಿನ ಹೆಜ್ಜೆ ನಿಮ್ಮ ಆಯ್ಕೆ",
      stateKicker: "5 ರಾಜ್ಯಗಳು · 5 ಮಾರ್ಗದರ್ಶಿಗಳು", stateTitle: "ನಿಮ್ಮ ರಾಜ್ಯ.<br><em>ಮುಂದಿನ ಹೆಜ್ಜೆ.</em>", stateIntro: "ಒಂದು ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಪ್ರತಿಯೊಂದು ಕಾರ್ಡ್ ಆ ರಾಜ್ಯದ ಅಧಿಕೃತ ಯೋಜನೆ ಅಥವಾ ಸೇವೆಯ ದಾರಿಗೆ ಕರೆದೊಯ್ಯುತ್ತದೆ.", stateHonesty: "ಸ್ವತಂತ್ರ ಮಾರ್ಗದರ್ಶಿ; ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಅಲ್ಲ. ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದಿಲ್ಲ. ಇತ್ತೀಚಿನ ನಿಯಮ, ಅರ್ಹತೆ ಮತ್ತು ದಿನಾಂಕಗಳನ್ನು ಅಧಿಕೃತ ಲಿಂಕ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.", stateSelect: "ಈ ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ", stateSelected: "ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ", plainLanguageTag: "ಸರಳ ಮಾರ್ಗದರ್ಶಿ",
      voicesKicker: "ಧ್ವನಿ ಮಾರ್ಗದರ್ಶಿಗಳು", voicesTitle: "ಪರಿಚಿತವಾದ<br><em>ಧ್ವನಿಯನ್ನು ಕೇಳಿ.</em>", voicesBody: "ಮಾದರಿಯನ್ನು ಆರಿಸಿ; ನಿಮ್ಮ ಸಾಧನದ ಪಠ್ಯ-ಧ್ವನಿ ಸೌಲಭ್ಯ ಅದನ್ನು ಓದುತ್ತದೆ.", voiceTamil: "தமிழ் · Tamil", voiceMalayalam: "മലയാളം · Malayalam", voiceKannada: "ಕನ್ನಡ · Kannada", voiceTelugu: "తెలుగు · Telugu", playSample: "ಕೇಳಿ", voiceDisclaimer: "ಇವು ಸಾಧನದಲ್ಲಿ ರಚಿಸಲಾದ ಧ್ವನಿ ಮಾದರಿಗಳು; ನಿಜವಾದ ವ್ಯಕ್ತಿಗಳ ಧ್ವನಿ-ರೆಕಾರ್ಡಿಂಗ್ ಅಲ್ಲ. ಧ್ವನಿ ಲಭ್ಯತೆ ಸಾಧನವನ್ನು ಅವಲಂಬಿಸಿದೆ.",
      howKicker: "ಸರಳ ದಾರಿ. ನಿಮ್ಮ ಆಯ್ಕೆ.", howTitle: "ಆರಂಭಿಸಲು ಮೂರು<br><em>ಸುಲಭ ಮಾರ್ಗಗಳು.</em>", howBody: "ಮೊದಲ ಬಾರಿಯೇ? ಪರವಾಗಿಲ್ಲ. ಯಾವುದೇ ಗುಂಡಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ; ಪ್ರತಿಯೊಂದು ಹಂತವನ್ನೂ ಸರಳವಾಗಿ ವಿವರಿಸುತ್ತೇವೆ.", cardOneTitle: "ಸೇವೆಯ ದಾರಿಯನ್ನು<br>ಒಟ್ಟಿಗೆ ನೋಡೋಣ", cardOneBody: "ಆಯ್ಕೆ ಮಾಡಿದ ರಾಜ್ಯಕ್ಕೆ ಚಿಕ್ಕ ಮಾರ್ಗದರ್ಶಿ. ಖಾಸಗಿ ಗುರುತು ಸಂಖ್ಯೆಯನ್ನು ಕೇಳುವುದಿಲ್ಲ.", cardOneCta: "ಮಾರ್ಗದರ್ಶಿ ತೆರೆಯಿರಿ", cardTwoTitle: "ಮುಂದೆ ಏನು<br>ಮಾಡಬಹುದು?", cardTwoBody: "ಅಧಿಕೃತ ಮುಂದಿನ ಹೆಜ್ಜೆಯನ್ನು ಒಂದೊಂದಾಗಿ ತಿಳಿಯಿರಿ.", cardTwoCta: "ಮೂರು ಹಂತಗಳನ್ನು ನೋಡಿ", cardThreeTitle: "ನಿಮ್ಮ ಪ್ರಶ್ನೆ.<br>ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ.", cardThreeBody: "ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮೈಕ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ. ಉತ್ತರ ಚಿಕ್ಕದಾಗಿರುತ್ತದೆ.", cardThreeCta: "ಮಾರ್ಗದರ್ಶಿಗೆ ಕೇಳಿ", journeyFootnote: "ಇದು ಅರ್ಜಿ ಅಲ್ಲ. ಅರ್ಹತೆ ಮತ್ತು ಅಂತಿಮ ನಿರ್ಧಾರವನ್ನು ಸರ್ಕಾರವೇ ಖಚಿತಪಡಿಸುತ್ತದೆ.",
      stepsKicker: "ಅಧಿಕೃತ ಮುಂದಿನ ಹೆಜ್ಜೆ", stepsTitle: "ಮುಂದಿನ ದಾರಿ<br><em>ಸ್ಪಷ್ಟವಾಗಿರಲಿ.</em>", stepsBody: "ನಿಯಮ, ಅರ್ಹತೆ ಮತ್ತು ಅರ್ಜಿ ದಿನಾಂಕಗಳು ಬದಲಾಗಬಹುದು. ಇತ್ತೀಚಿನ ಮಾಹಿತಿಗಾಗಿ ಅಧಿಕೃತ ಲಿಂಕ್ ತೆರೆಯಿರಿ.", officialButton: "ಅಧಿಕೃತ ಲಿಂಕ್ ತೆರೆಯಿರಿ", officialNote: "ಅರ್ಜಿ ಸ್ಥಿತಿ ಅಥವಾ ಅರ್ಹತೆಯನ್ನು ಈ ಮಾರ್ಗದರ್ಶಿ ಖಚಿತಪಡಿಸುವುದಿಲ್ಲ.", stepOneTitle: "ಅಧಿಕೃತ ಮಾಹಿತಿ ಪುಟ ತೆರೆಯಿರಿ", stepOneBody: "ಈ ಪುಟದಲ್ಲಿರುವ ಅಧಿಕೃತ ಲಿಂಕ್ ಬಳಸಿ ಇತ್ತೀಚಿನ ಸೂಚನೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.", stepTwoTitle: "ನಿಮಗೆ ಅನ್ವಯಿಸುವ ನಿಯಮ ಪರಿಶೀಲಿಸಿ", stepThreeTitle: "ಅಧಿಕೃತ ಮಾರ್ಗದಲ್ಲಿ ಸಹಾಯ ಪಡೆಯಿರಿ", stepThreeBody: "ಸಂದೇಹವಿದ್ದರೆ ಸಂಬಂಧಿಸಿದ ಸ್ಥಳೀಯ ಸರ್ಕಾರಿ ಕಚೇರಿ ಅಥವಾ ಅಧಿಕೃತ ಸಹಾಯ ಕೇಂದ್ರದಲ್ಲಿ ಕೇಳಿ. OTP ಅಥವಾ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಇಲ್ಲಿ ಹಂಚಬೇಡಿ.", stepSmallprint: "ಇದು ಸರಳ ಮಾರ್ಗದರ್ಶಿ ಮಾತ್ರ; ಸರ್ಕಾರಿ ನಿಯಮ ಅಥವಾ ಅರ್ಜಿ ಅಲ್ಲ.",
      askKicker: "ನಿಮ್ಮ ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಿ", askTitle: "ಕೇಳುವುದು ಸುಲಭ.<br><em>ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದೂ ಸುಲಭ.</em>", askBody: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಪ್ರಶ್ನೆ ಕೇಳಿ. ಮೈಕ್ ಕೆಲಸ ಮಾಡದಿದ್ದರೆ ಟೈಪ್ ಮಾಡಬಹುದು.", voiceStamp: "ಮಾತನಾಡಿ.<br>ಅಥವಾ ಟೈಪ್ ಮಾಡಿ.", assistantName: "ಉರಿಮೈ ಗೆಳತಿ", aiModeChecking: "ಸಿದ್ಧವಾಗುತ್ತಿದೆ…", resetChat: "ಹೊಸದಾಗಿ ಪ್ರಾರಂಭಿಸಿ", suggestLabel: "ಇದನ್ನು ಕೇಳಿ", suggestOne: "ಈ ಯೋಜನೆ ಏನು?", suggestTwo: "ಯಾರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು?", suggestThree: "ಅರ್ಜಿ ಹೇಗೆ ಸಲ್ಲಿಸಲಿ?", micButton: "ಮಾತನಾಡಿ", messageLabel: "ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಟೈಪ್ ಮಾಡಿ", inputPlaceholder: "ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ…", voiceHint: "ಮೈಕ್ ಅನುಮತಿ ಕೇಳಲಾಗುತ್ತದೆ. ಧ್ವನಿಯನ್ನು ಬ್ರೌಸರ್ ಅಥವಾ ಸಾಧನ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು.",
      geminiNote: "<strong>Gemini AI</strong> ಸಕ್ರಿಯವಾಗಿದ್ದರೆ, ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಮತ್ತು ಇತ್ತೀಚಿನ ಸಂಭಾಷಣೆಯನ್ನು ಉತ್ತರ ಸೃಷ್ಟಿಸಲು Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಈ ಆಪ್ ಚಾಟ್ ಇತಿಹಾಸ ಉಳಿಸುವುದಿಲ್ಲ; ಖಾಸಗಿ ಸಂಖ್ಯೆಯನ್ನು ಹಂಚಬೇಡಿ.",
      trustKicker: "ನಂಬಿಕೆ ಮೊದಲು", trustTitle: "ಸ್ಪಷ್ಟ ಮಾಹಿತಿ.<br><em>ನಿಮ್ಮ ನಿಯಂತ್ರಣ.</em>", trustBody: "ಇದು ಸ್ವತಂತ್ರ ಮಾರ್ಗದರ್ಶಿ; ಯಾವುದೇ ಸರ್ಕಾರಿ ಇಲಾಖೆಗೆ ಸಂಬಂಧಪಟ್ಟದ್ದಲ್ಲ. ನಿಮ್ಮ ಪರವಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದಿಲ್ಲ ಮತ್ತು ಚಾಟ್ ಇತಿಹಾಸ ಉಳಿಸುವುದಿಲ್ಲ.", trustCardOneTitle: "ಖಾಸಗಿ ಸಂಖ್ಯೆ ಕೇಳುವುದಿಲ್ಲ", trustCardOneBody: "ಆಧಾರ್, OTP, ಬ್ಯಾಂಕ್, ಫೋನ್ ಅಥವಾ ಪಡಿತರ ಚೀಟಿ ಸಂಖ್ಯೆಯನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಬೇಡಿ.", trustCardTwoTitle: "ಅಧಿಕೃತ ಮೂಲದ ಲಿಂಕ್‌ಗಳು", trustCardTwoBody: "ನಿಯಮಗಳು ಬದಲಾಗಬಹುದು. ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಆಯ್ದ ರಾಜ್ಯದ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಪರಿಶೀಲಿಸಿ.", trustCardThreeTitle: "ಅರ್ಹತೆಯನ್ನು ಸರ್ಕಾರ ದೃಢಪಡಿಸುತ್ತದೆ", trustCardThreeBody: "ಇದು ಆರಂಭಿಕ ಮಾರ್ಗದರ್ಶನ ಮಾತ್ರ. ಅರ್ಹತೆ ಮತ್ತು ಅನುಮೋದನೆಯನ್ನು ಸರ್ಕಾರ ನಿರ್ಧರಿಸುತ್ತದೆ.", trustVoiceTitle: "ಧ್ವನಿ ಮತ್ತು ಗೌಪ್ಯತೆ", trustVoiceBody: "ಮೈಕ್ ಅನುಮತಿಸಿದರೆ, ಬ್ರೌಸರ್ ಅಥವಾ ಸಾಧನ ಧ್ವನಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು. ಈ ಆಪ್ ರೆಕಾರ್ಡಿಂಗ್ ಉಳಿಸುವುದಿಲ್ಲ; ವಿಧಾನ ಸಾಧನವನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ.", pilotLabel: "ನಿಜವಾದ ಅಭಿಪ್ರಾಯಗಳು · ಕ್ಷೇತ್ರ ಪರೀಕ್ಷೆಯ ನಂತರ", pilotNote: "ಈ prototypeನಲ್ಲಿ ಕಲ್ಪಿತ ಬಳಕೆದಾರರ ಮಾತುಗಳಿಲ್ಲ. ಮಹಿಳೆಯರೊಂದಿಗೆ ಪರೀಕ್ಷಿಸಿ, ಅವರ ಒಪ್ಪಿಗೆಯೊಂದಿಗೆ ನಿಜವಾದ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಮಾತ್ರ ಹಂಚುತ್ತೇವೆ.",
      sourcesTitle: "ಅಧಿಕೃತ ಮೂಲಗಳು ಮತ್ತು ಮಾಹಿತಿಯ ವಿವರ", sourcesIntro: "ಕೆಳಗೆ ಆಯ್ದ ರಾಜ್ಯದ ಅಧಿಕೃತ ಮೂಲಗಳಿವೆ. ಇತ್ತೀಚಿನ ನಿಯಮಗಳು, ದಿನಾಂಕಗಳು ಮತ್ತು ಅರ್ಜಿ ವಿಧಾನವನ್ನು ಅಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.", sourceEligibility: "ಅಧಿಕೃತ ಮಾಹಿತಿ", sourceFaq: "ಅಧಿಕೃತ ಪ್ರಶ್ನೋತ್ತರ", sourceHome: "ಸರ್ಕಾರಿ ಯೋಜನೆ ಪುಟ", sourceBudget: "ತಮಿಳುನಾಡು ಸರ್ಕಾರ · 2025–26 ಬಜೆಟ್", footerDisclaimer: "ಇದು ಸ್ವತಂತ್ರ prototype; ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಅಲ್ಲ. ವಿವರಗಳನ್ನು ಸರ್ಕಾರಿ ಲಿಂಕ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ, ಅಲ್ಲಿ ಮಾತ್ರ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.", footerOfficial: "ಅಧಿಕೃತ ಲಿಂಕ್", footerTagline: "ಪ್ರತಿ ಮಹಿಳೆಯೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಹುದಾದ ಹಕ್ಕು.", footerBuild: "தமிழ் · മലയാളം · ಕನ್ನಡ · తెలుగు · English · ಕಡಿಮೆ ಡೇಟಾಕ್ಕೂ ಸೂಕ್ತ", installButton: "ಹೋಮ್ ಸ್ಕ್ರೀನ್‌ಗೆ ಸೇರಿಸಿ", offlineNotice: "ಇಂಟರ್ನೆಟ್ ಇಲ್ಲ. ಮೂಲ ಮಾರ್ಗದರ್ಶಿ ಲಭ್ಯವಿದೆ.",
      aiModeGemini: "Gemini AI · ಸಂಪರ್ಕಿತವಾಗಿದೆ", aiModeGuide: "ಮೂಲ ಮಾರ್ಗದರ್ಶಿ · AI ಉತ್ತರ ಇಲ್ಲ", aiModeError: "AI ಲಭ್ಯವಿಲ್ಲ · ಮೂಲ ಮಾರ್ಗದರ್ಶಿ ಸಿದ್ಧವಾಗಿದೆ", assistantGreeting: "ನಮಸ್ಕಾರ! {scheme} ಬಗ್ಗೆ ಸರಳವಾಗಿ ತಿಳಿಯಬೇಕೇ? ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಕೇಳಿ. ಆಧಾರ್, OTP ಅಥವಾ ಬ್ಯಾಂಕ್ ಸಂಖ್ಯೆಯನ್ನು ಇಲ್ಲಿ ಹಂಚಬೇಡಿ.", userMessageMeta: "ನೀವು", aiMessageMeta: "ಉರಿಮೈ ಗೆಳತಿ · AI", guideMessageMeta: "ಸರಳ ಮಾರ್ಗದರ್ಶಿ", listenAnswer: "ಈ ಉತ್ತರವನ್ನು ಕೇಳಿ", listenAnswerTitle: "ಉತ್ತರವನ್ನು ಕೇಳಿ", typingLabel: "ಉತ್ತರ ಸಿದ್ಧವಾಗುತ್ತಿದೆ", msgSendError: "ಸಂಪರ್ಕ ಕಡಿತವಾಯಿತು. ಮೂಲ ಮಾರ್ಗದರ್ಶಿ ಉತ್ತರ ನೀಡುತ್ತೇನೆ.", micUnsupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಲಭ್ಯವಿರದೇ ಇರಬಹುದು. ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ.", micDenied: "ಮೈಕ್ ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ. ಬ್ರೌಸರ್ ಸೆಟ್ಟಿಂಗ್‌ನಲ್ಲಿ ಅನುಮತಿಸಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ.", micError: "ಮಾತು ಅರ್ಥವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ.", speechUnavailable: "ಈ ಸಾಧನದಲ್ಲಿ ಧ್ವನಿ ಓದು ಲಭ್ಯವಿಲ್ಲ. ಪಠ್ಯವನ್ನು ಓದಿ.", listeningNow: "ಕೇಳುತ್ತಿದ್ದೇನೆ… ಈಗ ಮಾತನಾಡಿ.", stateDataUnavailable: "ರಾಜ್ಯದ ಮಾಹಿತಿ ಲಭ್ಯವಾಗಲಿಲ್ಲ. ಇಂಟರ್ನೆಟ್ ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ತೆರೆಯಿರಿ.", sensitiveMessage: "ಖಾಸಗಿ ಸಂಖ್ಯೆ ಇರಬಹುದಾದ ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಲಿಲ್ಲ. ಸಂಖ್ಯೆಯನ್ನು ತೆಗೆದು ಮತ್ತೆ ಕೇಳಿ.", emptyMessage: "ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮೈಕ್ ಬಳಸಿ.", genericToast: "ಮೊದಲು ಒಂದು ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ.", fallbackOther: "ಆಯ್ದ ರಾಜ್ಯದ ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳ ಮೂಲಭೂತ ಮಾಹಿತಿಗೆ ಈ ಮಾರ್ಗದರ್ಶಿ. ಇತ್ತೀಚಿನ ನಿಯಮಗಳನ್ನು ಅಧಿಕೃತ ಲಿಂಕ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.", fallbackCurrent: "ಪ್ರಸ್ತುತ ಅರ್ಹತೆ, ಅರ್ಜಿ ಸ್ಥಿತಿ ಅಥವಾ ನೋಂದಣಿ ದಿನಾಂಕವನ್ನು ಈ ಮಾರ್ಗದರ್ಶಿ ಖಚಿತಪಡಿಸುವುದಿಲ್ಲ. ಅಧಿಕೃತ ಲಿಂಕ್ ನೋಡಿ.",
      stateNoticeKicker: "ಮುಖ್ಯ ಸೂಚನೆ", stateNoticeTitle: "ಇದು ಅರ್ಹತಾ ನಿರ್ಧಾರವಲ್ಲ.", stateNoticeBody: "ಒಂದೇ ರೀತಿಯ ಪ್ರಶ್ನಾವಳಿ ಈ ಸೇವೆಗೆ ತಪ್ಪು ದಾರಿ ತೋರಿಸಬಹುದು. ಅಧಿಕೃತ ಮೂಲದಲ್ಲಿ ದೃಢಪಟ್ಟಿರುವ ಸೀಮಿತ ಮಾಹಿತಿ:", stateNoticeNext: "ನಿಯಮ ಮತ್ತು ದಿನಾಂಕಗಳು ಬದಲಾಗಬಹುದು. ಅಧಿಕೃತ ಲಿಂಕ್‌ನಲ್ಲಿ ಖಚಿತಪಡಿಸಿ; ಈ ಆಪ್ ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದಿಲ್ಲ.", stateNoticeOfficial: "ಅಧಿಕೃತ ಮೂಲ ತೆರೆಯಿರಿ", stateNoticeAsk: "ಈ ಮಾರ್ಗದರ್ಶಿ ಬಗ್ಗೆ ಕೇಳಿ", stateNoticeClose: "ಮುಚ್ಚಿ", stateAskPrompt: "ಈ ಯೋಜನೆಯ ಮುಂದಿನ ಹೆಜ್ಜೆ ಏನು?"
    },
    te: {
      skip: "విషయానికి వెళ్లండి", toplineLeft: "తమిళనాడు · కేరళ · కర్ణాటక · ఆంధ్రప్రదేశ్ · తెలంగాణ", toplineRight: "5 రాష్ట్రాల మహిళల కోసం మార్గదర్శి · ప్రభుత్వ వెబ్‌సైట్ కాదు",
      languageLabel: "భాషను ఎంచుకోండి", navLabel: "ప్రధాన నావిగేషన్", brandAria: "నమ్మ ఉరిమై — హోమ్‌కు వెళ్లండి", heroImageAria: "గ్రామీణ ప్రాంగణంలో ఫోన్ వాడుతున్న మహిళ", heroImageAlt: "గ్రామ ఇంటి ప్రాంగణంలో ఫోన్ వాడుతున్న భారతీయ మహిళ", chatAria: "ఉరిమై మార్గదర్శితో సంభాషణ", micAria: "మీ ప్రశ్నను మాట్లాడండి", sendAria: "ప్రశ్నను పంపండి",
      documentTitle: "నమ్మ ఉరిమై — మీ రాష్ట్రం, మీ భాష", metaDescription: "తమిళనాడు, కేరళ, కర్ణాటక, ఆంధ్రప్రదేశ్, తెలంగాణలో ప్రజా సేవల కోసం సరళమైన వచన, వాయిస్ మార్గదర్శి. ప్రభుత్వ వెబ్‌సైట్ కాదు.",
      heroKicker: "ఐదు దక్షిణ రాష్ట్రాలు · సులభమైన మార్గదర్శి", heroTitle: "మీ హక్కు,<br><span>మీ స్వరంలో.</span>", heroBody: "మీ రాష్ట్రంలోని ప్రభుత్వ పథకం లేదా సేవను మీకు తెలిసిన భాషలో అర్థం చేసుకోండి. టైప్ చేయండి లేదా మైక్‌లో చెప్పండి; తదుపరి అడుగు స్పష్టంగా తెలుసుకోండి.", heroPrimary: "మార్గదర్శిని తెరవండి", heroSecondary: "వాయిస్‌లో అడగండి", heroReassure: "ఖాతా అవసరం లేదు. సాంకేతిక పరిజ్ఞానం అవసరం లేదు. మీ వేగంతో అడగండి.", imageCaption: "తెలిసిన భాష.<br>స్పష్టమైన తదుపరి అడుగు.", floatNote: "ముందుగా అడగండి.<br>తర్వాత నిర్ణయించండి.",
      ribbonTitle: "వ్యక్తిగత నంబర్లను ఇక్కడ పంచుకోకండి.", ribbonOne: "ఆధార్ / OTP అడగదు", ribbonTwo: "యాప్ చాట్ చరిత్రను నిల్వ చేయదు", ribbonThree: "తదుపరి అడుగు మీ ఎంపిక",
      stateKicker: "5 రాష్ట్రాలు · 5 మార్గదర్శులు", stateTitle: "మీ రాష్ట్రం.<br><em>తదుపరి అడుగు.</em>", stateIntro: "రాష్ట్రాన్ని ఎంచుకోండి. ప్రతి కార్డు ఆ రాష్ట్రంలోని అధికారిక పథకం లేదా సేవా మార్గానికి తీసుకెళ్తుంది.", stateHonesty: "స్వతంత్ర మార్గదర్శి; ప్రభుత్వ వెబ్‌సైట్ కాదు. దరఖాస్తు సమర్పించదు. తాజా నియమాలు, అర్హత, తేదీలను అధికారిక లింక్‌లో చూడండి.", stateSelect: "ఈ రాష్ట్రాన్ని ఎంచుకోండి", stateSelected: "ఎంచుకున్నారు", plainLanguageTag: "సరళమైన మార్గదర్శి",
      voicesKicker: "ప్రత్యేక వాయిస్ మార్గదర్శులు", voicesTitle: "మీకు నచ్చిన<br><em>స్వరాన్ని వినండి.</em>", voicesBody: "ఒక నమూనాను ఎంచుకోండి; మీ పరికరంలోని టెక్స్ట్-టు-స్పీచ్ దాన్ని చదువుతుంది.", voiceTamil: "தமிழ் · Tamil", voiceMalayalam: "മലയാളം · Malayalam", voiceKannada: "ಕನ್ನಡ · Kannada", voiceTelugu: "తెలుగు · Telugu", playSample: "వినండి", voiceDisclaimer: "ఇవి పరికరం సృష్టించే వాయిస్ నమూనాలు; నిజమైన వ్యక్తుల రికార్డింగులు కావు. అందుబాటు పరికరంపై ఆధారపడుతుంది.",
      howKicker: "సులభమైన దారి. మీ ఎంపిక.", howTitle: "ప్రారంభించడానికి మూడు<br><em>సులభ మార్గాలు.</em>", howBody: "ఇది మొదటిసారినా? పరవాలేదు. ఏ బటన్ ఎంచుకున్నా ప్రతి దశను సరళమైన మాటల్లో వివరిస్తాం.", cardOneTitle: "సేవ మార్గాన్ని<br>కలిసి చూద్దాం", cardOneBody: "ఎంచుకున్న రాష్ట్రానికి చిన్న మార్గదర్శి. వ్యక్తిగత గుర్తింపు నంబర్లు అడగము.", cardOneCta: "మార్గదర్శిని తెరవండి", cardTwoTitle: "తర్వాత ఏమి<br>చేయవచ్చు?", cardTwoBody: "అధికారిక తదుపరి అడుగును ఒక్కొక్కటిగా తెలుసుకోండి.", cardTwoCta: "మూడు దశలు చూడండి", cardThreeTitle: "మీ ప్రశ్న.<br>మీ భాషలో.", cardThreeBody: "టైప్ చేయండి లేదా మైక్‌లో మాట్లాడండి. సమాధానం చిన్నదిగా ఉంటుంది.", cardThreeCta: "మార్గదర్శిని అడగండి", journeyFootnote: "ఇది దరఖాస్తు కాదు. అర్హత, తుది నిర్ణయాన్ని ప్రభుత్వం నిర్ధారిస్తుంది.",
      stepsKicker: "అధికారిక తదుపరి అడుగు", stepsTitle: "తదుపరి మార్గం<br><em>స్పష్టంగా ఉండాలి.</em>", stepsBody: "నియమాలు, అర్హత, దరఖాస్తు తేదీలు మారవచ్చు. తాజా సమాచారం కోసం అధికారిక లింక్‌ను తెరవండి.", officialButton: "అధికారిక లింక్ తెరవండి", officialNote: "దరఖాస్తు స్థితి లేదా అర్హతను ఈ మార్గదర్శి నిర్ధారించదు.", stepOneTitle: "అధికారిక సమాచార పేజీ తెరవండి", stepOneBody: "ఈ పేజీలోని అధికారిక లింక్ ద్వారా తాజా ప్రకటన చూడండి.", stepTwoTitle: "మీకు వర్తించే నియమాన్ని చూడండి", stepThreeTitle: "అధికారిక మార్గంలో సహాయం పొందండి", stepThreeBody: "సందేహం ఉంటే సంబంధిత స్థానిక ప్రభుత్వ కార్యాలయం లేదా అధికారిక సహాయ కేంద్రంలో అడగండి. OTP లేదా బ్యాంకు వివరాలను ఇక్కడ పంచుకోకండి.", stepSmallprint: "ఇది సరళమైన మార్గదర్శి మాత్రమే; ప్రభుత్వ నిర్ణయం లేదా దరఖాస్తు కాదు.",
      askKicker: "మీ స్వరంలో అడగండి", askTitle: "అడగడం సులభం.<br><em>అర్థం చేసుకోవడమూ సులభం.</em>", askBody: "మీ భాషలో ప్రశ్న అడగండి. మైక్ పనిచేయకపోతే టైప్ చేయవచ్చు.", voiceStamp: "మాట్లాడండి.<br>లేదా టైప్ చేయండి.", assistantName: "ఉరిమై స్నేహితురాలు", aiModeChecking: "సిద్ధం అవుతోంది…", resetChat: "కొత్తగా ప్రారంభించండి", suggestLabel: "ఇలా అడగండి", suggestOne: "ఈ పథకం ఏమిటి?", suggestTwo: "ఎవరు దరఖాస్తు చేసుకోవచ్చు?", suggestThree: "నేను ఎలా దరఖాస్తు చేయాలి?", micButton: "మాట్లాడండి", messageLabel: "మీ ప్రశ్నను టైప్ చేయండి", inputPlaceholder: "మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి…", voiceHint: "మైక్ అనుమతి అడుగుతుంది. బ్రౌజర్ లేదా పరికరం ఆడియోను ప్రాసెస్ చేయవచ్చు.",
      geminiNote: "<strong>Gemini AI</strong> పనిచేస్తే, మీ ప్రశ్న మరియు ఇటీవలి సంభాషణ సమాధానం కోసం Googleకు పంపబడతాయి. ఈ యాప్ చాట్ చరిత్రను నిల్వ చేయదు; వ్యక్తిగత నంబర్లను పంచుకోకండి.",
      trustKicker: "నమ్మకం ముందుగా", trustTitle: "స్పష్టమైన సమాచారం.<br><em>మీ నియంత్రణలో.</em>", trustBody: "ఇది స్వతంత్ర మార్గదర్శి; ప్రభుత్వ శాఖతో అనుబంధం లేదు. మీ తరఫున దరఖాస్తు చేయదు, చాట్ చరిత్రను నిల్వ చేయదు.", trustCardOneTitle: "వ్యక్తిగత నంబర్లు అడగము", trustCardOneBody: "ఆధార్, OTP, బ్యాంకు, ఫోన్ లేదా రేషన్ కార్డు నంబర్లను ఇక్కడ ఇవ్వకండి.", trustCardTwoTitle: "అధికారిక మూలాల లింకులు", trustCardTwoBody: "నియమాలు మారవచ్చు. చర్య తీసుకునే ముందు ఎంచుకున్న రాష్ట్రపు అధికారిక వెబ్‌సైట్ చూడండి.", trustCardThreeTitle: "అర్హతను ప్రభుత్వం నిర్ధారిస్తుంది", trustCardThreeBody: "ఇది ప్రారంభ మార్గదర్శి మాత్రమే. అర్హత, ఆమోదాన్ని ప్రభుత్వం నిర్ణయిస్తుంది.", trustVoiceTitle: "వాయిస్ మరియు గోప్యత", trustVoiceBody: "మైక్‌కు అనుమతిస్తే బ్రౌజర్ లేదా పరికరం ఆడియోను ప్రాసెస్ చేయవచ్చు. ఈ యాప్ రికార్డింగ్ నిల్వ చేయదు; విధానం పరికరంపై ఆధారపడుతుంది.", pilotLabel: "నిజమైన అభిప్రాయాలు · ఫీల్డ్ టెస్ట్ తర్వాత", pilotNote: "ఈ prototypeలో కల్పిత వినియోగదారుల అభిప్రాయాలు లేవు. మహిళలతో పరీక్షించి, వారి సమ్మతితో నిజమైన అభిప్రాయాలనే తర్వాత పంచుకుంటాం.",
      sourcesTitle: "అధికారిక మూలాలు & సమాచారం వివరాలు", sourcesIntro: "కింద ఎంచుకున్న రాష్ట్రపు అధికారిక మూలాలు ఉన్నాయి. తాజా నియమాలు, తేదీలు, దరఖాస్తు మార్గాన్ని అక్కడ చూడండి.", sourceEligibility: "అధికారిక సమాచారం", sourceFaq: "అధికారిక ప్రశ్నలు–సమాధానాలు", sourceHome: "ప్రభుత్వ పథకం పేజీ", sourceBudget: "తమిళనాడు ప్రభుత్వం · 2025–26 బడ్జెట్", footerDisclaimer: "ఇది స్వతంత్ర prototype; అధికారిక ప్రభుత్వ వెబ్‌సైట్ కాదు. వివరాలను ప్రభుత్వ లింక్‌లో నిర్ధారించి, అక్కడే దరఖాస్తు చేయండి.", footerOfficial: "అధికారిక లింక్", footerTagline: "ప్రతి మహిళ అర్థం చేసుకోగల హక్కు.", footerBuild: "தமிழ் · മലയാളം · ಕನ್ನಡ · తెలుగు · English · తక్కువ డేటాకూ అనుకూలం", installButton: "హోమ్ స్క్రీన్‌కు చేర్చండి", offlineNotice: "ఇంటర్నెట్ లేదు. ప్రాథమిక మార్గదర్శి అందుబాటులో ఉంది.",
      aiModeGemini: "Gemini AI · కనెక్ట్ అయింది", aiModeGuide: "ప్రాథమిక మార్గదర్శి · AI సమాధానం లేదు", aiModeError: "AI అందుబాటులో లేదు · ప్రాథమిక మార్గదర్శి సిద్ధంగా ఉంది", assistantGreeting: "నమస్కారం! {scheme} గురించి సులభంగా తెలుసుకోవాలా? మీ భాషలో అడగండి. ఆధార్, OTP లేదా బ్యాంకు నంబర్లను ఇక్కడ పంచుకోకండి.", userMessageMeta: "మీరు", aiMessageMeta: "ఉరిమై స్నేహితురాలు · AI", guideMessageMeta: "సరళమైన మార్గదర్శి", listenAnswer: "ఈ సమాధానాన్ని వినండి", listenAnswerTitle: "సమాధానం వినండి", typingLabel: "సమాధానం సిద్ధమవుతోంది", msgSendError: "కనెక్షన్ తెగింది. ప్రాథమిక మార్గదర్శి సమాధానం ఇస్తాను.", micUnsupported: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ అందుబాటులో ఉండకపోవచ్చు. ప్రశ్నను టైప్ చేయండి.", micDenied: "మైక్ అనుమతి నిరాకరించబడింది. బ్రౌజర్ సెట్టింగ్‌లో అనుమతించండి లేదా టైప్ చేయండి.", micError: "మాట అర్థం కాలేదు. మళ్లీ ప్రయత్నించండి లేదా టైప్ చేయండి.", speechUnavailable: "ఈ పరికరంలో ఆడియో ప్లేబ్యాక్ లేదు. వచనాన్ని చదవండి.", listeningNow: "వింటున్నాను… ఇప్పుడు మాట్లాడండి.", stateDataUnavailable: "రాష్ట్ర సమాచారం లోడ్ కాలేదు. ఇంటర్నెట్ చూసి మళ్లీ తెరవండి.", sensitiveMessage: "వ్యక్తిగత నంబర్ ఉండే సందేశాన్ని పంపలేదు. నంబర్ తొలగించి మళ్లీ అడగండి.", emptyMessage: "ప్రశ్నను టైప్ చేయండి లేదా మైక్ వాడండి.", genericToast: "ముందుగా ఒక రాష్ట్రాన్ని ఎంచుకోండి.", fallbackOther: "ఎంచుకున్న రాష్ట్రంలోని ప్రజా సేవల ప్రాథమిక సమాచారం కోసం ఈ మార్గదర్శి. తాజా నియమాలను అధికారిక లింక్‌లో చూడండి.", fallbackCurrent: "ప్రస్తుత అర్హత, దరఖాస్తు స్థితి లేదా నమోదు తేదీని ఈ మార్గదర్శి నిర్ధారించదు. అధికారిక లింక్ చూడండి.",
      stateNoticeKicker: "ముఖ్య గమనిక", stateNoticeTitle: "ఇది అర్హత నిర్ణయం కాదు.", stateNoticeBody: "ఒకే విధమైన ప్రశ్నావళి ఈ సేవకు తప్పుదారి పట్టించవచ్చు. అధికారిక మూలంలో నిర్ధారించిన పరిమిత సమాచారం:", stateNoticeNext: "నియమాలు, తేదీలు మారవచ్చు. అధికారిక లింక్‌లో నిర్ధారించండి; ఈ యాప్ దరఖాస్తు సమర్పించదు.", stateNoticeOfficial: "అధికారిక మూలం తెరవండి", stateNoticeAsk: "ఈ మార్గదర్శిని అడగండి", stateNoticeClose: "మూసివేయండి", stateAskPrompt: "ఈ పథకంలో తదుపరి అడుగు ఏమిటి?"
    }
  };

  const speechCopy = {
    ta: {
      voiceModeOnline: "Gemini ஆன்லைன் குரல் கிடைக்கிறது. ஒலிக்குறியைத் தொட்டால் மட்டும் வாசிக்க வேண்டிய உரை Google-க்கு அனுப்பப்படும்.",
      voiceModeDevice: "சாதனத்தின் பொருந்தும் குரல் பயன்படுத்தப்படுகிறது; உச்சரிப்பு சாதனம் அல்லது உலாவியைப் பொறுத்தது.",
      voiceModeMissing: "இந்த மொழிக்கான சாதனக் குரல் இல்லை. Chrome அல்லது Edge-ல் அந்த மொழிக் குரலை நிறுவுங்கள்; அல்லது உரையைப் படிக்கலாம்.",
      voicePickerLabel: "இந்த மொழிக்கான சாதனக் குரல்", voiceAuto: "சிறந்த பொருத்தத்தைத் தானாகத் தேர்ந்தெடு",
      useDeviceVoice: "Google ஆன்லைன் குரலுக்குப் பதில் சாதனக் குரலைப் பயன்படுத்து",
      voiceDisclaimer: "மைக் ஒலியை உலாவி அல்லது அதன் சேவை செயலாக்கலாம். Google ஆன்லைன் குரலைத் தேர்ந்தெடுத்தால், ஒலிக்குறியை அழுத்தும்போது வாசிக்க வேண்டிய உரை Google-க்கு அனுப்பப்படும். இந்தச் செயலி ஒலி அல்லது உரையாடலைச் சேமிக்காது.",
      voiceHint: "பேசு பொத்தானை அழுத்தி, மைக் அனுமதி கொடுத்து, பேசுங்கள். Chrome / Edge அல்லது HTTPS தளத்தைப் பயன்படுத்துங்கள். வேலை செய்யாவிட்டால் தட்டச்சு செய்யலாம்.",
      listeningHint: "கேட்கிறேன்… இப்போது உங்கள் கேள்வியைச் சொல்லுங்கள். முடித்ததும் அனுப்புகிறேன்.", stopListening: "நிறுத்து",
      micNeedsHttps: "மைக்கிற்கு பாதுகாப்பான இணைப்பு தேவை. localhost அல்லது HTTPS இணையதளத்தைத் திறக்கவும்.",
      micOffline: "குரல் உள்ளீட்டிற்கு இணையம் தேவைப்படலாம். இணையத்தைச் சரிபார்க்கவும் அல்லது தட்டச்சு செய்யவும்.",
      micNoSpeech: "குரல் கேட்கவில்லை. மைக்கிற்கு அருகில் மீண்டும் பேசுங்கள்.",
      micNoInput: "மைக் கண்டறியப்படவில்லை. Windows அல்லது உலாவியின் ஒலி அமைப்பைச் சரிபார்க்கவும்.",
      micNetwork: "உலாவியின் குரல் சேவையை இணைக்க முடியவில்லை. இணையத்தைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
      micDenied: "மைக்கிற்கு அனுமதி இல்லை. முகவரிப் பட்டை அல்லது தள அமைப்பில் அனுமதித்து மீண்டும் முயற்சிக்கவும்.",
      micUnsupported: "இந்த உலாவி குரல் உள்ளீட்டை ஆதரிக்காமல் இருக்கலாம். Chrome அல்லது Edge-ஐப் பயன்படுத்தவும்; இல்லையெனில் தட்டச்சு செய்யலாம்.",
      micLanguageUnsupported: "இந்த உலாவி தேர்ந்தெடுத்த மொழியில் குரலை அடையாளம் காண முடியாது. வேறு மொழியைத் தேர்ந்தெடுக்கவும் அல்லது தட்டச்சு செய்யவும்.",
      micError: "மைக் தொடங்கவில்லை. Windows ஒலி அமைப்பும் உலாவி அனுமதியும் சரிபார்க்கவும்; அல்லது தட்டச்சு செய்யவும்.",
      voiceMissing: "இந்த மொழிக்கான வாசிப்புக் குரல் இல்லை. உரை இங்கே கிடைக்கும்; வேறு குரலை நிறுவுங்கள் அல்லது ஆன்லைன் குரலைப் பயன்படுத்துங்கள்.",
      voiceFallback: "ஆன்லைன் குரல் கிடைக்கவில்லை. சாதனக் குரலை முயற்சிக்கிறேன்.",
      speechUnavailable: "ஒலி வாசிப்பு கிடைக்கவில்லை. பதிலை உரையாகப் படிக்கலாம்.", micTranscript: "உங்கள் கேள்வி கேட்கப்பட்டது; பதிலைத் தேடுகிறேன்."
    },
    ml: {
      voiceModeOnline: "Gemini ഓൺലൈൻ ശബ്ദം ലഭ്യമാണ്. കേൾക്കുക ബട്ടൺ അമർത്തുമ്പോൾ മാത്രം വായിക്കേണ്ട വാചകം Google-ലേക്ക് അയക്കും.",
      voiceModeDevice: "ഉപകരണത്തിലെ അനുയോജ്യമായ ശബ്ദമാണ് ഉപയോഗിക്കുന്നത്; ഉച്ചാരണം ബ്രൗസറിനെയും ഉപകരണത്തെയും ആശ്രയിക്കും.",
      voiceModeMissing: "ഈ ഭാഷയ്ക്ക് ഉപകരണത്തിൽ ശബ്ദമില്ല. Chrome അല്ലെങ്കിൽ Edge-ൽ ആ ഭാഷയുടെ ശബ്ദം ഇൻസ്റ്റാൾ ചെയ്യുക; അല്ലെങ്കിൽ എഴുത്ത് വായിക്കാം.",
      voicePickerLabel: "ഈ ഭാഷയ്ക്കുള്ള ഉപകരണ ശബ്ദം", voiceAuto: "ഏറ്റവും അനുയോജ്യമായത് സ്വയം തിരഞ്ഞെടുക്കുക",
      useDeviceVoice: "Google ഓൺലൈൻ ശബ്ദത്തിന് പകരം ഉപകരണ ശബ്ദം ഉപയോഗിക്കുക",
      voiceDisclaimer: "മൈക്കിലെ ശബ്ദം ബ്രൗസറോ അതിന്റെ സേവനമോ പ്രോസസ് ചെയ്യാം. Google ഓൺലൈൻ ശബ്ദം തിരഞ്ഞെടുത്താൽ, കേൾക്കുക അമർത്തുമ്പോൾ വായിക്കേണ്ട എഴുത്ത് Google-ലേക്ക് അയക്കും. ഈ ആപ്പ് ശബ്ദമോ ചാറ്റോ സൂക്ഷിക്കില്ല.",
      voiceHint: "സംസാരിക്കുക അമർത്തി മൈക്ക് അനുമതി നൽകി സംസാരിക്കുക. Chrome / Edge അല്ലെങ്കിൽ HTTPS സൈറ്റ് ഉപയോഗിക്കുക. പ്രവർത്തിക്കാത്തപക്ഷം ടൈപ്പ് ചെയ്യാം.",
      listeningHint: "ശ്രദ്ധിക്കുന്നു… ചോദ്യം പറയൂ. പൂർത്തിയാകുമ്പോൾ അയയ്ക്കും.", stopListening: "നിർത്തുക",
      micNeedsHttps: "മൈക്കിന് സുരക്ഷിതമായ കണക്ഷൻ വേണം. localhost അല്ലെങ്കിൽ HTTPS സൈറ്റ് തുറക്കുക.",
      micOffline: "ശബ്ദ ഇൻപുട്ടിന് ഇന്റർനെറ്റ് ആവശ്യമായേക്കാം. കണക്ഷൻ പരിശോധിക്കുകയോ ടൈപ്പ് ചെയ്യുകയോ ചെയ്യൂ.",
      micNoSpeech: "ശബ്ദം കേട്ടില്ല. മൈക്കിന് അടുത്ത് വീണ്ടും പറയൂ.",
      micNoInput: "മൈക്ക് കണ്ടെത്താനായില്ല. Windows അല്ലെങ്കിൽ ബ്രൗസറിലെ ശബ്ദ ക്രമീകരണം പരിശോധിക്കുക.",
      micNetwork: "ബ്രൗസറിന്റെ ശബ്ദ സേവനവുമായി ബന്ധപ്പെടാനായില്ല. ഇന്റർനെറ്റ് പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.",
      micDenied: "മൈക്ക് അനുമതി ലഭിച്ചില്ല. വിലാസപ്പട്ടിയിലോ സൈറ്റ് ക്രമീകരണത്തിലോ അനുമതി നൽകി വീണ്ടും ശ്രമിക്കുക.",
      micUnsupported: "ഈ ബ്രൗസറിൽ ശബ്ദ ഇൻപുട്ട് ലഭ്യമാകണമെന്നില്ല. Chrome അല്ലെങ്കിൽ Edge ഉപയോഗിക്കുക; അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യാം.",
      micLanguageUnsupported: "തിരഞ്ഞെടുത്ത ഭാഷയിൽ ഈ ബ്രൗസറിന് ശബ്ദം തിരിച്ചറിയാനായില്ല. മറ്റൊരു ഭാഷ തിരഞ്ഞെടുക്കുകയോ ടൈപ്പ് ചെയ്യുകയോ ചെയ്യൂ.",
      micError: "മൈക്ക് ആരംഭിച്ചില്ല. Windows ശബ്ദ ക്രമീകരണവും ബ്രൗസർ അനുമതിയും പരിശോധിക്കുക; അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യുക.",
      voiceMissing: "ഈ ഭാഷയ്ക്ക് വായനാ ശബ്ദമില്ല. എഴുത്ത് ലഭ്യമാണ്; ശബ്ദം ഇൻസ്റ്റാൾ ചെയ്യുകയോ ഓൺലൈൻ ശബ്ദം ഉപയോഗിക്കുകയോ ചെയ്യൂ.",
      voiceFallback: "ഓൺലൈൻ ശബ്ദം ലഭ്യമല്ല. ഉപകരണ ശബ്ദം ശ്രമിക്കുന്നു.",
      speechUnavailable: "ശബ്ദ വായന ലഭ്യമല്ല. മറുപടി എഴുത്തായി വായിക്കാം.", micTranscript: "ചോദ്യം ലഭിച്ചു; മറുപടി തയ്യാറാക്കുന്നു."
    },
    kn: {
      voiceModeOnline: "Gemini ಆನ್‌ಲೈನ್ ಧ್ವನಿ ಲಭ್ಯವಿದೆ. ಕೇಳಿ ಗುಂಡಿಯನ್ನು ಒತ್ತಿದಾಗ ಮಾತ್ರ ಓದಬೇಕಾದ ಪಠ್ಯವನ್ನು Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.",
      voiceModeDevice: "ಸಾಧನದಲ್ಲಿರುವ ಹೊಂದಾಣಿಕೆಯ ಧ್ವನಿ ಬಳಕೆಯಲ್ಲಿದೆ; ಉಚ್ಚಾರಣೆ ಬ್ರೌಸರ್ ಅಥವಾ ಸಾಧನವನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ.",
      voiceModeMissing: "ಈ ಭಾಷೆಗೆ ಸಾಧನದಲ್ಲಿ ಧ್ವನಿ ಇಲ್ಲ. Chrome ಅಥವಾ Edgeನಲ್ಲಿ ಆ ಭಾಷೆಯ ಧ್ವನಿಯನ್ನು ಸ್ಥಾಪಿಸಿ; ಇಲ್ಲವಾದರೆ ಪಠ್ಯವನ್ನು ಓದಬಹುದು.",
      voicePickerLabel: "ಈ ಭಾಷೆಯ ಸಾಧನ ಧ್ವನಿ", voiceAuto: "ಉತ್ತಮ ಹೊಂದಾಣಿಕೆಯನ್ನು ಸ್ವಯಂ ಆರಿಸಿ",
      useDeviceVoice: "Google ಆನ್‌ಲೈನ್ ಧ್ವನಿಯ ಬದಲು ಸಾಧನದ ಧ್ವನಿ ಬಳಸಿ",
      voiceDisclaimer: "ಮೈಕ್ ಧ್ವನಿಯನ್ನು ಬ್ರೌಸರ್ ಅಥವಾ ಅದರ ಸೇವೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು. Google ಆನ್‌ಲೈನ್ ಧ್ವನಿ ಆರಿಸಿದರೆ, ಕೇಳಿ ಒತ್ತಿದಾಗ ಓದಬೇಕಾದ ಪಠ್ಯವನ್ನು Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಈ ಆಪ್ ಧ್ವನಿ ಅಥವಾ ಚಾಟ್ ಉಳಿಸುವುದಿಲ್ಲ.",
      voiceHint: "ಮಾತನಾಡಿ ಗುಂಡಿ ಒತ್ತಿ, ಮೈಕ್ ಅನುಮತಿ ನೀಡಿ, ಮಾತನಾಡಿ. Chrome / Edge ಅಥವಾ HTTPS ತಾಣ ಬಳಸಿ. ಕೆಲಸವಾಗದಿದ್ದರೆ ಟೈಪ್ ಮಾಡಿ.",
      listeningHint: "ಕೇಳುತ್ತಿದ್ದೇನೆ… ಪ್ರಶ್ನೆಯನ್ನು ಹೇಳಿ. ಮುಗಿದಾಗ ಕಳುಹಿಸುತ್ತೇನೆ.", stopListening: "ನಿಲ್ಲಿಸಿ",
      micNeedsHttps: "ಮೈಕ್‌ಗೆ ಸುರಕ್ಷಿತ ಸಂಪರ್ಕ ಬೇಕು. localhost ಅಥವಾ HTTPS ತಾಣ ತೆರೆಯಿರಿ.",
      micOffline: "ಧ್ವನಿ ಇನ್‌ಪುಟ್‌ಗೆ ಇಂಟರ್ನೆಟ್ ಬೇಕಾಗಬಹುದು. ಸಂಪರ್ಕ ಪರಿಶೀಲಿಸಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ.",
      micNoSpeech: "ಧ್ವನಿ ಕೇಳಿಸಲಿಲ್ಲ. ಮೈಕ್ ಹತ್ತಿರ ಮತ್ತೆ ಮಾತನಾಡಿ.",
      micNoInput: "ಮೈಕ್ ಪತ್ತೆಯಾಗಲಿಲ್ಲ. Windows ಅಥವಾ ಬ್ರೌಸರ್ ಧ್ವನಿ ಸೆಟ್ಟಿಂಗ್ ಪರಿಶೀಲಿಸಿ.",
      micNetwork: "ಬ್ರೌಸರ್ ಧ್ವನಿ ಸೇವೆಗೆ ಸಂಪರ್ಕವಾಗಲಿಲ್ಲ. ಇಂಟರ್ನೆಟ್ ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      micDenied: "ಮೈಕ್ ಅನುಮತಿ ಇಲ್ಲ. ವಿಳಾಸ ಪಟ್ಟಿಯಲ್ಲಿ ಅಥವಾ ಸೈಟ್ ಸೆಟ್ಟಿಂಗ್‌ನಲ್ಲಿ ಅನುಮತಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      micUnsupported: "ಈ ಬ್ರೌಸರ್ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಬೆಂಬಲಿಸದೇ ಇರಬಹುದು. Chrome ಅಥವಾ Edge ಬಳಸಿ; ಇಲ್ಲವೇ ಟೈಪ್ ಮಾಡಿ.",
      micLanguageUnsupported: "ಈ ಬ್ರೌಸರ್ ಆಯ್ದ ಭಾಷೆಯಲ್ಲಿ ಮಾತನ್ನು ಗುರುತಿಸಲಿಲ್ಲ. ಬೇರೆ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ.",
      micError: "ಮೈಕ್ ಆರಂಭವಾಗಲಿಲ್ಲ. Windows ಧ್ವನಿ ಸೆಟ್ಟಿಂಗ್ ಮತ್ತು ಬ್ರೌಸರ್ ಅನುಮತಿ ಪರಿಶೀಲಿಸಿ; ಅಥವಾ ಟೈಪ್ ಮಾಡಿ.",
      voiceMissing: "ಈ ಭಾಷೆಗೆ ಓದುವ ಧ್ವನಿ ಇಲ್ಲ. ಪಠ್ಯ ಲಭ್ಯವಿದೆ; ಧ್ವನಿ ಸ್ಥಾಪಿಸಿ ಅಥವಾ ಆನ್‌ಲೈನ್ ಧ್ವನಿ ಬಳಸಿ.",
      voiceFallback: "ಆನ್‌ಲೈನ್ ಧ್ವನಿ ಲಭ್ಯವಿಲ್ಲ. ಸಾಧನದ ಧ್ವನಿಯನ್ನು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದೇನೆ.",
      speechUnavailable: "ಧ್ವನಿ ಓದು ಲಭ್ಯವಿಲ್ಲ. ಉತ್ತರವನ್ನು ಪಠ್ಯವಾಗಿ ಓದಬಹುದು.", micTranscript: "ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಕೇಳಿದೆ; ಉತ್ತರ ಹುಡುಕುತ್ತಿದ್ದೇನೆ."
    },
    te: {
      voiceModeOnline: "Gemini ఆన్‌లైన్ వాయిస్ అందుబాటులో ఉంది. వినండి బటన్ నొక్కినప్పుడు మాత్రమే చదవాల్సిన వచనం Googleకు పంపబడుతుంది.",
      voiceModeDevice: "పరికరంలోని సరిపోయే వాయిస్ ఉపయోగంలో ఉంది; ఉచ్చారణ బ్రౌజర్ లేదా పరికరంపై ఆధారపడుతుంది.",
      voiceModeMissing: "ఈ భాషకు పరికరంలో వాయిస్ లేదు. Chrome లేదా Edgeలో ఆ భాష వాయిస్‌ను ఇన్‌స్టాల్ చేయండి; లేదంటే వచనాన్ని చదవండి.",
      voicePickerLabel: "ఈ భాషకు పరికర వాయిస్", voiceAuto: "ఉత్తమంగా సరిపోయేదాన్ని ఆటోగా ఎంచుకోండి",
      useDeviceVoice: "Google ఆన్‌లైన్ వాయిస్ బదులు పరికర వాయిస్ వాడండి",
      voiceDisclaimer: "మైక్ ఆడియోను బ్రౌజర్ లేదా దాని సేవ ప్రాసెస్ చేయవచ్చు. Google ఆన్‌లైన్ వాయిస్ ఎంచుకుంటే, వినండి నొక్కినప్పుడు చదవాల్సిన వచనం Googleకు పంపబడుతుంది. ఈ యాప్ ఆడియో లేదా చాట్‌ను నిల్వ చేయదు.",
      voiceHint: "మాట్లాడండి బటన్ నొక్కి, మైక్ అనుమతి ఇచ్చి మాట్లాడండి. Chrome / Edge లేదా HTTPS సైట్ వాడండి. పని చేయకపోతే టైప్ చేయండి.",
      listeningHint: "వింటున్నాను… మీ ప్రశ్న చెప్పండి. పూర్తయ్యాక పంపిస్తాను.", stopListening: "ఆపండి",
      micNeedsHttps: "మైక్‌కు సురక్షిత కనెక్షన్ అవసరం. localhost లేదా HTTPS సైట్ తెరవండి.",
      micOffline: "వాయిస్ ఇన్‌పుట్‌కు ఇంటర్నెట్ అవసరం కావచ్చు. కనెక్షన్ చూడండి లేదా టైప్ చేయండి.",
      micNoSpeech: "మాట వినిపించలేదు. మైక్ దగ్గరగా మళ్లీ మాట్లాడండి.",
      micNoInput: "మైక్ కనిపించలేదు. Windows లేదా బ్రౌజర్ ఆడియో సెట్టింగులు చూడండి.",
      micNetwork: "బ్రౌజర్ వాయిస్ సేవకు కనెక్ట్ కాలేదు. ఇంటర్నెట్ చూసి మళ్లీ ప్రయత్నించండి.",
      micDenied: "మైక్ అనుమతి లేదు. అడ్రస్ బార్ లేదా సైట్ సెట్టింగుల్లో అనుమతించి మళ్లీ ప్రయత్నించండి.",
      micUnsupported: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ ఉండకపోవచ్చు. Chrome లేదా Edge వాడండి; లేదా టైప్ చేయండి.",
      micLanguageUnsupported: "ఎంచుకున్న భాషలో ఈ బ్రౌజర్ మాటను గుర్తించలేకపోయింది. మరో భాష ఎంచుకోండి లేదా టైప్ చేయండి.",
      micError: "మైక్ ప్రారంభం కాలేదు. Windows ఆడియో సెట్టింగులు, బ్రౌజర్ అనుమతి చూడండి; లేదా టైప్ చేయండి.",
      voiceMissing: "ఈ భాషకు చదివే వాయిస్ లేదు. వచనం అందుబాటులో ఉంది; వాయిస్ ఇన్‌స్టాల్ చేయండి లేదా ఆన్‌లైన్ వాయిస్ వాడండి.",
      voiceFallback: "ఆన్‌లైన్ వాయిస్ అందుబాటులో లేదు. పరికర వాయిస్‌ను ప్రయత్నిస్తున్నాను.",
      speechUnavailable: "ఆడియో ప్లేబ్యాక్ అందుబాటులో లేదు. సమాధానాన్ని వచనంగా చదవండి.", micTranscript: "మీ ప్రశ్న అందింది; సమాధానం వెతుకుతున్నాను."
    },
    en: {
      voiceModeOnline: "Gemini online speech is ready. Text is sent to Google only when you press a speaker button.",
      voiceModeDevice: "Using a matching voice on this device; pronunciation depends on your browser or device.",
      voiceModeMissing: "No device voice is installed for this language. Add one in Chrome or Edge, or read the text instead.",
      voicePickerLabel: "Device voice for this language", voiceAuto: "Choose the best match automatically",
      useDeviceVoice: "Use a device voice instead of Google online speech",
      voiceDisclaimer: "Your browser or its speech service may process microphone audio. If Google online speech is selected, the text is sent to Google for audio only when you press a speaker button. This app does not save audio or chat history.",
      voiceHint: "Press Speak, allow microphone access, then talk. Use Chrome or Edge on localhost or an HTTPS site. If it fails, you can type instead.",
      listeningHint: "Listening… say your question. It will be sent when you finish.", stopListening: "Stop",
      micNeedsHttps: "Microphone access needs a secure connection. Open localhost or an HTTPS site.",
      micOffline: "Voice input may need an internet connection. Check your connection or type instead.",
      micNoSpeech: "I didn't hear speech. Move closer to the mic and try again.",
      micNoInput: "No microphone was detected. Check Windows and browser audio settings.",
      micNetwork: "The browser's speech service could not connect. Check the internet and try again.",
      micDenied: "Microphone access is blocked. Allow it in the address-bar or site settings, then retry.",
      micUnsupported: "This browser may not support speech input. Try Chrome or Edge, or type your question.",
      micLanguageUnsupported: "This browser could not recognize speech in the selected language. Choose another language or type instead.",
      micError: "The microphone did not start. Check Windows audio settings and browser permission, or type instead.",
      voiceMissing: "No read-aloud voice is installed for this language. The text is still available; install a voice or use online speech.",
      voiceFallback: "Online speech is unavailable. Trying a matching device voice.",
      speechUnavailable: "Audio playback is unavailable. You can still read the answer.", micTranscript: "I heard your question; finding an answer now."
    }
  };
  Object.entries(speechCopy).forEach(([locale, values]) => {
    copy[locale] = Object.assign({}, copy[locale], values);
  });
  const speechGuideCopy = {
    ta: {
      voicesBody: "ஒலிக்குறியைத் தேர்ந்தெடுக்கவும். ஆன்லைன் குரல் அமைக்கப்பட்டிருந்தால் அதைப் பயன்படுத்துவோம்; இல்லையெனில் பொருந்தும் சாதனக் குரலை முயற்சிப்போம்.",
      trustVoiceBody: "மைக் ஒலியை உலாவியின் குரல் சேவை செயலாக்கலாம்; இணையம் தேவைப்படலாம். ஆன்லைன் TTS அமைக்கப்பட்டிருந்தால், ஒலிக்குறியை அழுத்தும்போது உரை Google-க்கு அனுப்பப்படும். இந்தச் செயலி ஒலியையோ உரையாடலையோ சேமிக்காது."
    },
    ml: {
      voicesBody: "കേൾക്കുക ബട്ടൺ തിരഞ്ഞെടുക്കൂ. ഓൺലൈൻ ശബ്ദം സജ്ജമാണെങ്കിൽ അത് ഉപയോഗിക്കും; അല്ലെങ്കിൽ അനുയോജ്യമായ ഉപകരണ ശബ്ദം ശ്രമിക്കും.",
      trustVoiceBody: "മൈക്ക് ശബ്ദം ബ്രൗസറിന്റെ speech സേവനം പ്രോസസ് ചെയ്യാം; ഇന്റർനെറ്റ് ആവശ്യമായേക്കാം. ഓൺലൈൻ TTS സജ്ജമാണെങ്കിൽ, കേൾക്കുക അമർത്തുമ്പോൾ എഴുത്ത് Google-ലേക്ക് അയക്കും. ഈ ആപ്പ് ശബ്ദമോ ചാറ്റോ സൂക്ഷിക്കില്ല."
    },
    kn: {
      voicesBody: "ಕೇಳಿ ಗುಂಡಿಯನ್ನು ಒತ್ತಿ. ಆನ್‌ಲೈನ್ ಧ್ವನಿ ಹೊಂದಿಸಿದ್ದರೆ ಅದನ್ನು ಬಳಸುತ್ತೇವೆ; ಇಲ್ಲವಾದರೆ ಹೊಂದಾಣಿಕೆಯ ಸಾಧನ ಧ್ವನಿ ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ.",
      trustVoiceBody: "ಮೈಕ್ ಧ್ವನಿಯನ್ನು ಬ್ರೌಸರ್‌ನ ಮಾತು ಸೇವೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು; ಇಂಟರ್ನೆಟ್ ಬೇಕಾಗಬಹುದು. ಆನ್‌ಲೈನ್ TTS ಹೊಂದಿಸಿದ್ದರೆ, ಕೇಳಿ ಒತ್ತಿದಾಗ ಪಠ್ಯವನ್ನು Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಈ ಆಪ್ ಧ್ವನಿ ಅಥವಾ ಚಾಟ್ ಉಳಿಸುವುದಿಲ್ಲ."
    },
    te: {
      voicesBody: "వినండి బటన్ నొక్కండి. ఆన్‌లైన్ వాయిస్ సెటప్ ఉంటే దానిని వాడతాం; లేకపోతే సరిపోయే పరికర వాయిస్ ప్రయత్నిస్తాం.",
      trustVoiceBody: "మైక్ ఆడియోను బ్రౌజర్ వాయిస్ సేవ ప్రాసెస్ చేయవచ్చు; ఇంటర్నెట్ అవసరం కావచ్చు. ఆన్‌లైన్ TTS సెటప్ ఉంటే, వినండి నొక్కినప్పుడు వచనం Googleకు పంపబడుతుంది. ఈ యాప్ ఆడియో లేదా చాట్‌ను నిల్వ చేయదు."
    },
    en: {
      voicesBody: "Press a sample's Listen button. If online speech is configured, it is used; otherwise the app tries a matching voice on your device.",
      trustVoiceBody: "Browser speech recognition may process microphone audio and may need internet. If online TTS is configured, answer text is sent to Google only after you press a speaker button. This app does not save audio or chat history."
    }
  };
  Object.entries(speechGuideCopy).forEach(([locale, values]) => {
    copy[locale] = Object.assign({}, copy[locale], values);
  });
  const bundledVoiceCopy = {
    ta: {
      voiceEnglish: "ஆங்கிலம் · English",
      voicesBody: "ஐந்து மொழிகளிலும் குரல் மாதிரிகள் செயலியுடன் சேர்க்கப்பட்டுள்ளன; உங்கள் சாதனத்தில் குரல் நிறுவப்பட்டிருக்க வேண்டியதில்லை.",
      voiceModeOnline: "Gemini பதில்-வாசிப்பு தயாராக உள்ளது. பதிலின் ஒலிக்குறியை அழுத்தினால் மட்டும் அந்த உரை Google-க்கு அனுப்பப்படும்; மாதிரிகள் செயலியிலிருந்தே ஒலிக்கும்.",
      voiceModeDevice: "பதில் வாசிப்புக்கு சாதனக் குரல் பயன்படுத்தப்படுகிறது. மொழி மாதிரிகள் செயலியுடன் சேர்க்கப்பட்டுள்ளதால் அவை தனியாக ஒலிக்கும்.",
      voiceModeMissing: "இந்த மொழியில் பதிலை வாசிக்க சாதனக் குரல் இல்லை; ஆனால் இங்குள்ள குரல் மாதிரிகள் செயலியிலிருந்து ஒலிக்கும். உரையைப் படிக்கலாம்.",
      useDeviceVoice: "பதில் வாசிப்புக்கு Google குரலுக்குப் பதில் சாதனக் குரல் பயன்படுத்து",
      voiceDisclaimer: "இவை செயலியுடன் சேர்க்கப்பட்ட AI குரல் மாதிரிகள்; உண்மையான நபர்களின் பதிவு அல்ல. மாதிரிகளை கேட்க சாதனக் குரல் அல்லது இணையம் தேவையில்லை. மைக் ஒலியை உலாவி செயலாக்கலாம். Gemini பதில்-வாசிப்பு அமைக்கப்பட்டிருந்தால், பதிலின் ஒலிக்குறியை அழுத்தும்போது மட்டும் பதில் உரை Google-க்கு அனுப்பப்படும். செயலி ஒலி அல்லது உரையாடலைச் சேமிக்காது.",
      voiceMissing: "இந்த மொழியில் பதிலை வாசிக்க சாதனக் குரல் இல்லை. இங்குள்ள மாதிரிகள் இன்னும் ஒலிக்கும்; பதிலை உரையாகப் படிக்கலாம்.",
      sampleUnavailable: "குரல் மாதிரியை இயக்க முடியவில்லை. ஒலி அளவைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
      trustVoiceBody: "மைக் ஒலியை உலாவியின் பேச்சு சேவை செயலாக்கலாம். குரல் மாதிரிகள் செயலியுடன் சேர்க்கப்பட்டவை; அவற்றை இயக்க இணையம் தேவையில்லை. Gemini பதில்-வாசிப்பு அமைக்கப்பட்டிருந்தால், பதிலின் ஒலிக்குறியை அழுத்தும்போது மட்டும் உரை Google-க்கு அனுப்பப்படும்."
    },
    ml: {
      voiceEnglish: "ഇംഗ്ലീഷ് · English",
      voicesBody: "അഞ്ച് ഭാഷകളിലെയും ശബ്ദ മാതൃകകൾ ആപ്പിൽ ഉൾപ്പെടുത്തിയിട്ടുണ്ട്; ഉപകരണത്തിൽ ശബ്ദം ഇൻസ്റ്റാൾ ചെയ്തിരിക്കേണ്ടതില്ല.",
      voiceModeOnline: "Gemini മറുപടി വായന തയ്യാറാണ്. മറുപടിയിലെ സ്പീക്കർ അമർത്തുമ്പോൾ മാത്രം ആ എഴുത്ത് Google-ലേക്ക് അയക്കും; മാതൃകകൾ ആപ്പിൽ നിന്ന് തന്നെ കേൾക്കാം.",
      voiceModeDevice: "മറുപടി വായിക്കാൻ ഉപകരണ ശബ്ദമാണ് ഉപയോഗിക്കുന്നത്. ഭാഷാ മാതൃകകൾ ആപ്പിൽ ഉൾപ്പെടുത്തിയതിനാൽ അവ സ്വതന്ത്രമായി കേൾക്കാം.",
      voiceModeMissing: "ഈ ഭാഷയിൽ മറുപടി വായിക്കാൻ ഉപകരണ ശബ്ദമില്ല; എന്നാൽ ഇവിടെ ഉള്ള മാതൃകകൾ ആപ്പിൽ നിന്ന് കേൾക്കാം. എഴുത്തും വായിക്കാം.",
      useDeviceVoice: "മറുപടി വായിക്കാൻ Google ശബ്ദത്തിന് പകരം ഉപകരണ ശബ്ദം ഉപയോഗിക്കുക",
      voiceDisclaimer: "ഇവ ആപ്പിൽ ഉൾപ്പെടുത്തിയ AI ശബ്ദ മാതൃകകളാണ്; യഥാർത്ഥ ആളുകളുടെ റെക്കോർഡിങ്ങുകളല്ല. ഇവ കേൾക്കാൻ ഉപകരണ ശബ്ദമോ ഇന്റർനെറ്റോ വേണ്ട. മൈക്ക് ശബ്ദം ബ്രൗസർ പ്രോസസ് ചെയ്യാം. Gemini മറുപടി വായന സജ്ജമാണെങ്കിൽ, മറുപടിയിലെ സ്പീക്കർ അമർത്തുമ്പോൾ മാത്രം എഴുത്ത് Google-ലേക്ക് അയക്കും. ആപ്പ് ശബ്ദമോ ചാറ്റോ സൂക്ഷിക്കില്ല.",
      voiceMissing: "ഈ ഭാഷയിൽ മറുപടി വായിക്കാൻ ഉപകരണ ശബ്ദമില്ല. ഉൾപ്പെടുത്തിയ മാതൃകകൾ കേൾക്കാം; മറുപടി എഴുത്തായി വായിക്കാം.",
      sampleUnavailable: "ശബ്ദ മാതൃക പ്ലേ ചെയ്യാനായില്ല. ശബ്ദനില പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കൂ.",
      trustVoiceBody: "മൈക്ക് ശബ്ദം ബ്രൗസറിന്റെ speech സേവനം പ്രോസസ് ചെയ്യാം. ശബ്ദ മാതൃകകൾ ആപ്പിൽ ഉൾപ്പെടുത്തിയതിനാൽ അവയ്ക്ക് ഇന്റർനെറ്റ് വേണ്ട. Gemini മറുപടി വായന സജ്ജമാണെങ്കിൽ, മറുപടിയിലെ സ്പീക്കർ അമർത്തുമ്പോൾ മാത്രം എഴുത്ത് Google-ലേക്ക് അയക്കും."
    },
    kn: {
      voiceEnglish: "ಇಂಗ್ಲಿಷ್ · English",
      voicesBody: "ಐದು ಭಾಷೆಗಳ ಧ್ವನಿ ಮಾದರಿಗಳು ಆಪ್‌ನಲ್ಲೇ ಸೇರಿವೆ; ಸಾಧನದಲ್ಲಿ ಧ್ವನಿ ಸ್ಥಾಪಿಸಬೇಕಿಲ್ಲ.",
      voiceModeOnline: "Gemini ಉತ್ತರ ಓದು ಸಿದ್ಧವಾಗಿದೆ. ಉತ್ತರದ ಸ್ಪೀಕರ್ ಒತ್ತಿದಾಗ ಮಾತ್ರ ಆ ಪಠ್ಯವನ್ನು Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ; ಮಾದರಿಗಳು ಆಪ್‌ನಿಂದಲೇ ಕೇಳುತ್ತವೆ.",
      voiceModeDevice: "ಉತ್ತರ ಓದಲು ಸಾಧನದ ಧ್ವನಿ ಬಳಕೆಯಲ್ಲಿದೆ. ಭಾಷಾ ಮಾದರಿಗಳು ಆಪ್‌ನಲ್ಲೇ ಇರುವುದರಿಂದ ಅವು ಪ್ರತ್ಯೇಕವಾಗಿ ಕೇಳುತ್ತವೆ.",
      voiceModeMissing: "ಈ ಭಾಷೆಯಲ್ಲಿ ಉತ್ತರ ಓದಲು ಸಾಧನ ಧ್ವನಿ ಇಲ್ಲ; ಆದರೆ ಇಲ್ಲಿರುವ ಮಾದರಿಗಳು ಆಪ್‌ನಿಂದ ಕೇಳುತ್ತವೆ. ಪಠ್ಯವನ್ನು ಓದಬಹುದು.",
      useDeviceVoice: "ಉತ್ತರ ಓದಲು Google ಧ್ವನಿಯ ಬದಲು ಸಾಧನದ ಧ್ವನಿ ಬಳಸಿ",
      voiceDisclaimer: "ಇವು ಆಪ್‌ನಲ್ಲಿರುವ AI ಧ್ವನಿ ಮಾದರಿಗಳು; ನಿಜವಾದ ವ್ಯಕ್ತಿಗಳ ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ಅಲ್ಲ. ಇವುಗಳನ್ನು ಕೇಳಲು ಸಾಧನದ ಧ್ವನಿ ಅಥವಾ ಇಂಟರ್ನೆಟ್ ಬೇಡ. ಮೈಕ್ ಧ್ವನಿಯನ್ನು ಬ್ರೌಸರ್ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು. Gemini ಉತ್ತರ-ಓದು ಹೊಂದಿಸಿದ್ದರೆ, ಉತ್ತರದ ಸ್ಪೀಕರ್ ಒತ್ತಿದಾಗ ಮಾತ್ರ ಪಠ್ಯವನ್ನು Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಆಪ್ ಧ್ವನಿ ಅಥವಾ ಚಾಟ್ ಉಳಿಸುವುದಿಲ್ಲ.",
      voiceMissing: "ಈ ಭಾಷೆಯಲ್ಲಿ ಉತ್ತರ ಓದಲು ಸಾಧನ ಧ್ವನಿ ಇಲ್ಲ. ಆಪ್‌ನಲ್ಲಿರುವ ಮಾದರಿಗಳನ್ನು ಕೇಳಬಹುದು; ಉತ್ತರವನ್ನು ಪಠ್ಯವಾಗಿ ಓದಬಹುದು.",
      sampleUnavailable: "ಧ್ವನಿ ಮಾದರಿ ಪ್ಲೇ ಆಗಲಿಲ್ಲ. ಧ್ವನಿ ಮಟ್ಟ ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      trustVoiceBody: "ಮೈಕ್ ಧ್ವನಿಯನ್ನು ಬ್ರೌಸರ್‌ನ ಮಾತು ಸೇವೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು. ಧ್ವನಿ ಮಾದರಿಗಳು ಆಪ್‌ನಲ್ಲೇ ಇರುವುದರಿಂದ ಅವುಗಳಿಗೆ ಇಂಟರ್ನೆಟ್ ಬೇಡ. Gemini ಉತ್ತರ ಓದು ಹೊಂದಿಸಿದ್ದರೆ, ಉತ್ತರದ ಸ್ಪೀಕರ್ ಒತ್ತಿದಾಗ ಮಾತ್ರ ಪಠ್ಯವನ್ನು Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ."
    },
    te: {
      voiceEnglish: "ఇంగ్లీష్ · English",
      voicesBody: "ఐదు భాషల వాయిస్ నమూనాలు యాప్‌లోనే ఉన్నాయి; పరికరంలో వాయిస్ ఇన్‌స్టాల్ చేయాల్సిన అవసరం లేదు.",
      voiceModeOnline: "Gemini సమాధానాన్ని చదవడం సిద్ధంగా ఉంది. సమాధానంలోని స్పీకర్ నొక్కినప్పుడు మాత్రమే ఆ వచనం Googleకు పంపబడుతుంది; నమూనాలు యాప్ నుంచే వినిపిస్తాయి.",
      voiceModeDevice: "సమాధానం చదవడానికి పరికర వాయిస్ వాడుతున్నాం. భాషా నమూనాలు యాప్‌లోనే ఉన్నందున అవి విడిగా వినిపిస్తాయి.",
      voiceModeMissing: "ఈ భాషలో సమాధానం చదివే పరికర వాయిస్ లేదు; కానీ ఇక్కడి నమూనాలు యాప్ నుంచే వినిపిస్తాయి. వచనాన్ని చదవవచ్చు.",
      useDeviceVoice: "సమాధానం చదవడానికి Google వాయిస్ బదులు పరికర వాయిస్ వాడండి",
      voiceDisclaimer: "ఇవి యాప్‌లో చేర్చిన AI వాయిస్ నమూనాలు; నిజమైన వ్యక్తుల రికార్డింగులు కావు. వీటిని వినడానికి పరికర వాయిస్ లేదా ఇంటర్నెట్ అవసరం లేదు. మైక్ ఆడియోను బ్రౌజర్ ప్రాసెస్ చేయవచ్చు. Gemini సమాధాన-వాచనం సెటప్ ఉంటే, సమాధానంలోని స్పీకర్ నొక్కినప్పుడు మాత్రమే వచనం Googleకు పంపబడుతుంది. యాప్ ఆడియో లేదా చాట్ నిల్వ చేయదు.",
      voiceMissing: "ఈ భాషలో సమాధానం చదివే పరికర వాయిస్ లేదు. యాప్‌లోని నమూనాలు మాత్రం వినిపిస్తాయి; సమాధానాన్ని వచనంగా చదవవచ్చు.",
      sampleUnavailable: "వాయిస్ నమూనా ప్లే కాలేదు. వాల్యూమ్ తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.",
      trustVoiceBody: "మైక్ ఆడియోను బ్రౌజర్ వాయిస్ సేవ ప్రాసెస్ చేయవచ్చు. వాయిస్ నమూనాలు యాప్‌లోనే ఉంటాయి, వాటికి ఇంటర్నెట్ అవసరం లేదు. Gemini సమాధాన-వాచనం సెటప్ ఉంటే, సమాధానంలోని స్పీకర్ నొక్కినప్పుడు మాత్రమే వచనం Googleకు పంపబడుతుంది."
    },
    en: {
      voiceEnglish: "English",
      voicesBody: "Bundled audio samples are included for all five languages. They play even if your device has no voice installed.",
      voiceModeOnline: "Gemini answer read-aloud is ready. Answer text is sent to Google only when you press an answer's speaker; sample clips play from this app.",
      voiceModeDevice: "A matching device voice reads answers aloud. The bundled language samples play independently of device voices.",
      voiceModeMissing: "No device voice is installed to read answers in this language, but the bundled sample clips still play. The written answer is always available.",
      useDeviceVoice: "Use a device voice instead of Google speech for answers",
      voiceDisclaimer: "These AI-generated sample voices are bundled with the app—not recordings of real people—and play without an installed voice or internet. Your browser may process microphone audio. If Gemini answer read-aloud is configured, answer text is sent to Google only when you press an answer's speaker button. This app does not save audio or chat history.",
      voiceMissing: "No device voice is installed to read answers in this language. The bundled samples still play, and you can read the answer.",
      sampleUnavailable: "The voice sample could not play. Check your audio volume and try again.",
      trustVoiceBody: "Browser speech recognition may process microphone audio. The voice samples are bundled with the app and do not need internet. If Gemini answer read-aloud is configured, answer text is sent to Google only when you press an answer's speaker button."
    }
  };
  Object.entries(bundledVoiceCopy).forEach(([locale, values]) => {
    copy[locale] = Object.assign({}, copy[locale], values);
  });
  const chatVoiceCopy = {
    ta: {
      listenQuestion: "கேள்வியைக் கேள்", listenQuestionTitle: "உங்கள் கேள்வியை ஒலியாகக் கேள்",
      voiceHint: "பேசு பொத்தானை அழுத்தி, மைக் அனுமதி கொடுத்து கேள்வியைச் சொல்லுங்கள். குரலில் கேட்ட கேள்விக்குப் பதிலை ஒலியாக வாசிக்க முயற்சிக்கும். கேள்வி அல்லது பதிலின் ஒலிக்குறியைத் தொட்டும் கேட்கலாம்.",
      voiceModeOnline: "Gemini குரல் கேள்வி, பதில் வாசிப்புக்குத் தயாராக உள்ளது. அவற்றின் ஒலிக்குறியை அழுத்தினால் மட்டும் அந்த உரை Google-க்கு அனுப்பப்படும்; மாதிரி குரல்கள் செயலியிலிருந்தே ஒலிக்கும்.",
      voiceModeDevice: "கேள்வி, பதில் ஒலிக்க சாதனக் குரல் பயன்படுத்தப்படுகிறது. மாதிரி குரல்கள் செயலியிலிருந்து தனியாக ஒலிக்கும்.",
      voiceModeMissing: "இந்த மொழியில் கேள்வி, பதிலை வாசிக்க சாதனக் குரல் இல்லை; ஆனால் மாதிரிகள் ஒலிக்கும். உரையும் கிடைக்கும்.",
      voiceMissing: "இந்த மொழியில் கேள்வி, பதிலை வாசிக்க சாதனக் குரல் இல்லை. மாதிரிகள் ஒலிக்கும்; உரையைப் படிக்கலாம்.",
      useDeviceVoice: "கேள்வி, பதில் வாசிக்க Google குரலுக்குப் பதில் சாதனக் குரல் பயன்படுத்து",
      voiceDisclaimer: "இங்குள்ள ஐந்து AI குரல் மாதிரிகள் செயலியுடன் சேர்க்கப்பட்டவை; அவை இணையமின்றி ஒலிக்கும். கேள்வி அல்லது பதிலின் ஒலிக்குறியை அழுத்தினால், Gemini குரல் அமைக்கப்பட்டிருக்கும் போது அந்த உரை மட்டும் Google-க்கு அனுப்பப்படும். மைக் ஒலியை உலாவி செயலாக்கலாம். செயலி ஒலி அல்லது உரையாடலைச் சேமிக்காது.",
      trustVoiceBody: "மைக் ஒலியை உலாவியின் பேச்சு சேவை செயலாக்கலாம். ஐந்து குரல் மாதிரிகள் செயலியிலேயே உள்ளன. கேள்வி அல்லது பதிலின் ஒலிக்குறியை அழுத்தினால், Gemini குரல் அமைக்கப்பட்டிருக்கும் போது அந்த உரை மட்டும் Google-க்கு அனுப்பப்படும்."
    },
    ml: {
      listenQuestion: "ചോദ്യം കേൾക്കൂ", listenQuestionTitle: "നിങ്ങളുടെ ചോദ്യം ശബ്ദമായി കേൾക്കൂ",
      voiceHint: "സംസാരിക്കുക അമർത്തി മൈക്ക് അനുമതി നൽകി ചോദ്യം പറയൂ. ശബ്ദമായി ചോദിച്ചാൽ മറുപടി വായിച്ചു കേൾപ്പിക്കാൻ ശ്രമിക്കും. ചോദ്യത്തിന്റെയോ മറുപടിയുടെയോ സ്പീക്കർ അമർത്തിയും കേൾക്കാം.",
      voiceModeOnline: "Gemini ശബ്ദം ചോദ്യവും മറുപടിയും വായിക്കാൻ തയ്യാറാണ്. അവയുടെ സ്പീക്കർ അമർത്തുമ്പോൾ മാത്രം എഴുത്ത് Google-ലേക്ക് അയക്കും; മാതൃകകൾ ആപ്പിൽ നിന്ന് കേൾക്കാം.",
      voiceModeDevice: "ചോദ്യവും മറുപടിയും വായിക്കാൻ ഉപകരണ ശബ്ദമാണ് ഉപയോഗിക്കുന്നത്. മാതൃകകൾ ആപ്പിൽ നിന്ന് സ്വതന്ത്രമായി കേൾക്കാം.",
      voiceModeMissing: "ഈ ഭാഷയിൽ ചോദ്യവും മറുപടിയും വായിക്കാൻ ഉപകരണ ശബ്ദമില്ല; എന്നാൽ മാതൃകകൾ കേൾക്കാം. എഴുത്തും ലഭ്യമാണ്.",
      voiceMissing: "ഈ ഭാഷയിൽ ചോദ്യവും മറുപടിയും വായിക്കാൻ ഉപകരണ ശബ്ദമില്ല. മാതൃകകൾ കേൾക്കാം; എഴുത്ത് വായിക്കാം.",
      useDeviceVoice: "ചോദ്യവും മറുപടിയും വായിക്കാൻ Google ശബ്ദത്തിന് പകരം ഉപകരണ ശബ്ദം ഉപയോഗിക്കുക",
      voiceDisclaimer: "ഇവിടെ അഞ്ച് AI ശബ്ദ മാതൃകകൾ ആപ്പിൽ ഉൾപ്പെടുത്തിയിട്ടുണ്ട്; ഇന്റർനെറ്റ് ഇല്ലാതെയും കേൾക്കാം. ചോദ്യത്തിന്റെയോ മറുപടിയുടെയോ സ്പീക്കർ അമർത്തുമ്പോൾ Gemini ശബ്ദം സജ്ജമാണെങ്കിൽ ആ എഴുത്ത് മാത്രം Google-ലേക്ക് അയക്കും. മൈക്ക് ശബ്ദം ബ്രൗസർ പ്രോസസ് ചെയ്യാം. ആപ്പ് ശബ്ദമോ ചാറ്റോ സൂക്ഷിക്കില്ല.",
      trustVoiceBody: "മൈക്ക് ശബ്ദം ബ്രൗസറിന്റെ speech സേവനം പ്രോസസ് ചെയ്യാം. അഞ്ച് ശബ്ദ മാതൃകകൾ ആപ്പിൽ തന്നെയുണ്ട്. ചോദ്യത്തിന്റെയോ മറുപടിയുടെയോ സ്പീക്കർ അമർത്തുമ്പോൾ Gemini ശബ്ദം സജ്ജമാണെങ്കിൽ ആ എഴുത്ത് മാത്രം Google-ലേക്ക് അയക്കും."
    },
    kn: {
      listenQuestion: "ಪ್ರಶ್ನೆ ಕೇಳಿ", listenQuestionTitle: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಿ",
      voiceHint: "ಮಾತನಾಡಿ ಒತ್ತಿ, ಮೈಕ್ ಅನುಮತಿ ನೀಡಿ, ಪ್ರಶ್ನೆ ಹೇಳಿ. ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಿದ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರವನ್ನು ಓದಿ ಕೇಳಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ. ಪ್ರಶ್ನೆ ಅಥವಾ ಉತ್ತರದ ಸ್ಪೀಕರ್ ಒತ್ತಿಯೂ ಕೇಳಬಹುದು.",
      voiceModeOnline: "Gemini ಧ್ವನಿ ಪ್ರಶ್ನೆ ಮತ್ತು ಉತ್ತರ ಓದಲು ಸಿದ್ಧವಾಗಿದೆ. ಅವುಗಳ ಸ್ಪೀಕರ್ ಒತ್ತಿದಾಗ ಮಾತ್ರ ಪಠ್ಯವನ್ನು Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ; ಮಾದರಿಗಳು ಆಪ್‌ನಿಂದಲೇ ಕೇಳುತ್ತವೆ.",
      voiceModeDevice: "ಪ್ರಶ್ನೆ ಮತ್ತು ಉತ್ತರ ಓದಲು ಸಾಧನದ ಧ್ವನಿ ಬಳಕೆಯಲ್ಲಿದೆ. ಮಾದರಿಗಳು ಆಪ್‌ನಿಂದ ಸ್ವತಂತ್ರವಾಗಿ ಕೇಳುತ್ತವೆ.",
      voiceModeMissing: "ಈ ಭಾಷೆಯಲ್ಲಿ ಪ್ರಶ್ನೆ ಮತ್ತು ಉತ್ತರ ಓದಲು ಸಾಧನದ ಧ್ವನಿ ಇಲ್ಲ; ಆದರೆ ಮಾದರಿಗಳು ಕೇಳುತ್ತವೆ. ಪಠ್ಯವೂ ಲಭ್ಯವಿದೆ.",
      voiceMissing: "ಈ ಭಾಷೆಯಲ್ಲಿ ಪ್ರಶ್ನೆ ಮತ್ತು ಉತ್ತರ ಓದಲು ಸಾಧನದ ಧ್ವನಿ ಇಲ್ಲ. ಮಾದರಿಗಳು ಕೇಳುತ್ತವೆ; ಪಠ್ಯವನ್ನು ಓದಬಹುದು.",
      useDeviceVoice: "ಪ್ರಶ್ನೆ ಮತ್ತು ಉತ್ತರ ಓದಲು Google ಧ್ವನಿಯ ಬದಲು ಸಾಧನದ ಧ್ವನಿ ಬಳಸಿ",
      voiceDisclaimer: "ಐದು AI ಧ್ವನಿ ಮಾದರಿಗಳು ಆಪ್‌ನಲ್ಲೇ ಸೇರಿವೆ; ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದಿದ್ದರೂ ಕೇಳುತ್ತವೆ. ಪ್ರಶ್ನೆ ಅಥವಾ ಉತ್ತರದ ಸ್ಪೀಕರ್ ಒತ್ತಿದಾಗ Gemini ಧ್ವನಿ ಸಿದ್ಧವಿದ್ದರೆ ಆ ಪಠ್ಯವನ್ನು ಮಾತ್ರ Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಮೈಕ್ ಧ್ವನಿಯನ್ನು ಬ್ರೌಸರ್ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು. ಆಪ್ ಧ್ವನಿ ಅಥವಾ ಚಾಟ್ ಉಳಿಸುವುದಿಲ್ಲ.",
      trustVoiceBody: "ಮೈಕ್ ಧ್ವನಿಯನ್ನು ಬ್ರೌಸರ್‌ನ ಮಾತು ಸೇವೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು. ಐದು ಧ್ವನಿ ಮಾದರಿಗಳು ಆಪ್‌ನಲ್ಲೇ ಇವೆ. ಪ್ರಶ್ನೆ ಅಥವಾ ಉತ್ತರದ ಸ್ಪೀಕರ್ ಒತ್ತಿದಾಗ Gemini ಧ್ವನಿ ಸಿದ್ಧವಿದ್ದರೆ ಆ ಪಠ್ಯವನ್ನು ಮಾತ್ರ Googleಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ."
    },
    te: {
      listenQuestion: "ప్రశ్న వినండి", listenQuestionTitle: "మీ ప్రశ్నను వాయిస్‌లో వినండి",
      voiceHint: "మాట్లాడండి నొక్కి, మైక్ అనుమతి ఇచ్చి ప్రశ్న చెప్పండి. వాయిస్‌లో అడిగితే సమాధానాన్ని చదివి వినిపించడానికి ప్రయత్నిస్తాం. ప్రశ్న లేదా సమాధానంలోని స్పీకర్ నొక్కి కూడా వినవచ్చు.",
      voiceModeOnline: "ప్రశ్న, సమాధానం చదవడానికి Gemini వాయిస్ సిద్ధంగా ఉంది. వాటి స్పీకర్ నొక్కినప్పుడు మాత్రమే వచనం Googleకు పంపబడుతుంది; నమూనాలు యాప్ నుంచే వినిపిస్తాయి.",
      voiceModeDevice: "ప్రశ్నలు, సమాధానాలు చదవడానికి పరికర వాయిస్ వాడుతున్నాం. నమూనాలు యాప్ నుంచే విడిగా వినిపిస్తాయి.",
      voiceModeMissing: "ఈ భాషలో ప్రశ్నలు, సమాధానాలు చదివే పరికర వాయిస్ లేదు; కానీ నమూనాలు వినిపిస్తాయి. వచనమూ అందుబాటులో ఉంది.",
      voiceMissing: "ఈ భాషలో ప్రశ్నలు, సమాధానాలు చదివే పరికర వాయిస్ లేదు. నమూనాలు వినిపిస్తాయి; వచనాన్ని చదవవచ్చు.",
      useDeviceVoice: "ప్రశ్నలు, సమాధానాలు చదవడానికి Google వాయిస్ బదులు పరికర వాయిస్ వాడండి",
      voiceDisclaimer: "ఐదు AI వాయిస్ నమూనాలు యాప్‌లో ఉన్నాయి; ఇంటర్నెట్ లేకుండానూ వినవచ్చు. ప్రశ్న లేదా సమాధానంలోని స్పీకర్ నొక్కినప్పుడు Gemini వాయిస్ సెటప్ ఉంటే ఆ వచనం మాత్రమే Googleకు పంపబడుతుంది. మైక్ ఆడియోను బ్రౌజర్ ప్రాసెస్ చేయవచ్చు. యాప్ ఆడియో లేదా చాట్ నిల్వ చేయదు.",
      trustVoiceBody: "మైక్ ఆడియోను బ్రౌజర్ వాయిస్ సేవ ప్రాసెస్ చేయవచ్చు. ఐదు వాయిస్ నమూనాలు యాప్‌లోనే ఉన్నాయి. ప్రశ్న లేదా సమాధానంలోని స్పీకర్ నొక్కినప్పుడు Gemini వాయిస్ సెటప్ ఉంటే ఆ వచనం మాత్రమే Googleకు పంపబడుతుంది."
    },
    en: {
      listenQuestion: "Listen to question", listenQuestionTitle: "Play this question aloud",
      voiceHint: "Press Speak, allow microphone access, then ask your question. After a spoken question, the app will try to read the answer aloud. You can also press the speaker on any question or answer.",
      voiceModeOnline: "Gemini speech is ready for questions and answers. Their text is sent to Google only when you press that message's speaker; sample clips play locally.",
      voiceModeDevice: "A matching device voice reads questions and answers; bundled samples play independently.",
      voiceModeMissing: "No device voice is installed to read questions or answers in this language, but bundled samples still play. Text remains available.",
      voiceMissing: "No device voice is installed to read this question or answer. The bundled samples still play; text is available.",
      useDeviceVoice: "Use a device voice instead of Google speech for questions and answers",
      voiceDisclaimer: "Five AI-generated voice samples are bundled and play without internet. When Gemini speech is configured, question or answer text is sent to Google only when you press that message's speaker. Your browser may process microphone audio. This app does not save audio or chat history.",
      trustVoiceBody: "Browser speech recognition may process microphone audio. The five samples are bundled with the app. When Gemini speech is configured, question or answer text is sent to Google only when you press that message's speaker."
    }
  };
  Object.entries(chatVoiceCopy).forEach(([locale, values]) => {
    copy[locale] = Object.assign({}, copy[locale], values);
  });
  const autoSpeechPrivacyCopy = {
    ta: {
      voiceModeOnline: "Gemini குரலில் பதில் வாசிப்பு தயாராக உள்ளது. மைக்கில் கேள்வி கேட்டால், பதிலை ஒலியாக்க உரை Google-க்கு அனுப்பப்படும்; செய்தி ஒலிக்குறியை அழுத்தினாலும் அந்த உரை அனுப்பப்படும். மாதிரிகள் செயலியிலிருந்தே ஒலிக்கும்.",
      voiceDisclaimer: "ஐந்து AI குரல் மாதிரிகள் செயலியுடன் உள்ளன; இணையமின்றி ஒலிக்கும். Gemini குரல் அமைக்கப்பட்டால், மைக்கில் கேள்வி கேட்டபின் பதில் உரை ஒலிக்காக Google-க்கு அனுப்பப்படலாம்; அல்லது செய்தியின் ஒலிக்குறியை அழுத்தினால் அந்த உரை அனுப்பப்படும். மைக் ஒலியை உலாவி செயலாக்கலாம். செயலி ஒலியையோ உரையாடலையோ சேமிக்காது.",
      trustVoiceBody: "மைக் ஒலியை உலாவியின் பேச்சு சேவை செயலாக்கலாம். ஐந்து குரல் மாதிரிகள் செயலியிலேயே உள்ளன. Gemini குரல் அமைக்கப்பட்டால், மைக்கில் கேட்ட கேள்விக்கான பதில் உரை ஒலிக்காக Google-க்கு அனுப்பப்படலாம்; செய்தியின் ஒலிக்குறியை அழுத்தினாலும் உரை அனுப்பப்படும்."
    },
    ml: {
      voiceModeOnline: "Gemini ശബ്ദത്തിൽ മറുപടി വായന തയ്യാറാണ്. മൈക്കിൽ ചോദിച്ചാൽ മറുപടി ഓഡിയോ ആക്കാൻ എഴുത്ത് Google-ലേക്ക് അയക്കും; അല്ലെങ്കിൽ സന്ദേശ സ്പീക്കർ അമർത്തുമ്പോൾ അയക്കും. മാതൃകകൾ ആപ്പിൽ നിന്ന് കേൾക്കാം.",
      voiceDisclaimer: "അഞ്ച് AI ശബ്ദ മാതൃകകൾ ആപ്പിൽ ഉൾപ്പെടുത്തിയിട്ടുണ്ട്; ഇന്റർനെറ്റ് ഇല്ലാതെയും കേൾക്കാം. Gemini ശബ്ദം സജ്ജമാണെങ്കിൽ, മൈക്കിൽ ചോദിച്ചശേഷം മറുപടി ഓഡിയോ ആക്കാൻ എഴുത്ത് Google-ലേക്ക് അയക്കാം; അല്ലെങ്കിൽ സന്ദേശ സ്പീക്കർ അമർത്തുമ്പോൾ അയക്കും. മൈക്ക് ശബ്ദം ബ്രൗസർ പ്രോസസ് ചെയ്യാം. ആപ്പ് ശബ്ദമോ ചാറ്റോ സൂക്ഷിക്കില്ല.",
      trustVoiceBody: "മൈക്ക് ശബ്ദം ബ്രൗസറിന്റെ speech സേവനം പ്രോസസ് ചെയ്യാം. അഞ്ച് ശബ്ദ മാതൃകകൾ ആപ്പിലുണ്ട്. Gemini ശബ്ദം സജ്ജമാണെങ്കിൽ, മൈക്കിൽ ചോദിച്ചശേഷം മറുപടി വായിക്കാൻ എഴുത്ത് Google-ലേക്ക് അയക്കാം; സന്ദേശ സ്പീക്കർ അമർത്തുമ്പോഴും അയക്കും."
    },
    kn: {
      voiceModeOnline: "Gemini ಧ್ವನಿ ಉತ್ತರ ಓದು ಸಿದ್ಧವಾಗಿದೆ. ಮೈಕ್‌ನಲ್ಲಿ ಕೇಳಿದಾಗ ಉತ್ತರವನ್ನು ಧ್ವನಿಮಾಡಲು ಪಠ್ಯವನ್ನು Googleಗೆ ಕಳುಹಿಸಬಹುದು; ಇಲ್ಲವಾದರೆ ಸಂದೇಶದ ಸ್ಪೀಕರ್ ಒತ್ತಿದಾಗ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಮಾದರಿಗಳು ಆಪ್‌ನಿಂದ ಕೇಳುತ್ತವೆ.",
      voiceDisclaimer: "ಐದು AI ಧ್ವನಿ ಮಾದರಿಗಳು ಆಪ್‌ನಲ್ಲಿವೆ; ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದಿದ್ದರೂ ಕೇಳುತ್ತವೆ. Gemini ಧ್ವನಿ ಹೊಂದಿದ್ದರೆ, ಮೈಕ್‌ನಲ್ಲಿ ಪ್ರಶ್ನಿಸಿದ ಬಳಿಕ ಉತ್ತರದ ಪಠ್ಯವನ್ನು ಧ್ವನಿಗಾಗಿ Googleಗೆ ಕಳುಹಿಸಬಹುದು; ಅಥವಾ ಸಂದೇಶದ ಸ್ಪೀಕರ್ ಒತ್ತಿದಾಗ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಮೈಕ್ ಧ್ವನಿಯನ್ನು ಬ್ರೌಸರ್ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು. ಆಪ್ ಧ್ವನಿ ಅಥವಾ ಚಾಟ್ ಉಳಿಸುವುದಿಲ್ಲ.",
      trustVoiceBody: "ಮೈಕ್ ಧ್ವನಿಯನ್ನು ಬ್ರೌಸರ್‌ನ ಮಾತು ಸೇವೆ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಹುದು. ಐದು ಮಾದರಿಗಳು ಆಪ್‌ನಲ್ಲಿವೆ. Gemini ಧ್ವನಿ ಹೊಂದಿದ್ದರೆ, ಮೈಕ್ ಪ್ರಶ್ನೆಯ ಬಳಿಕ ಉತ್ತರ ಓದಲು ಪಠ್ಯವನ್ನು Googleಗೆ ಕಳುಹಿಸಬಹುದು; ಸಂದೇಶದ ಸ್ಪೀಕರ್ ಒತ್ತಿದಾಗಲೂ ಕಳುಹಿಸಲಾಗುತ್ತದೆ."
    },
    te: {
      voiceModeOnline: "Gemini వాయిస్ సమాధానం చదవడానికి సిద్ధంగా ఉంది. మైక్‌లో ప్రశ్నిస్తే సమాధానాన్ని ఆడియో చేయడానికి వచనం Googleకు పంపబడుతుంది; లేదా సందేశ స్పీకర్ నొక్కినప్పుడు పంపబడుతుంది. నమూనాలు యాప్ నుంచే వినిపిస్తాయి.",
      voiceDisclaimer: "ఐదు AI వాయిస్ నమూనాలు యాప్‌లో ఉన్నాయి; ఇంటర్నెట్ లేకుండానే వినవచ్చు. Gemini వాయిస్ సెటప్ ఉంటే, మైక్‌లో ప్రశ్నించిన తర్వాత సమాధానం ఆడియో చేయడానికి వచనం Googleకు పంపబడవచ్చు; లేదా సందేశ స్పీకర్ నొక్కితే పంపబడుతుంది. మైక్ ఆడియోను బ్రౌజర్ ప్రాసెస్ చేయవచ్చు. యాప్ ఆడియో లేదా చాట్ నిల్వ చేయదు.",
      trustVoiceBody: "మైక్ ఆడియోను బ్రౌజర్ వాయిస్ సేవ ప్రాసెస్ చేయవచ్చు. ఐదు నమూనాలు యాప్‌లో ఉన్నాయి. Gemini వాయిస్ ఉంటే, మైక్ ప్రశ్న తర్వాత సమాధానం చదవడానికి వచనం Googleకు పంపబడవచ్చు; సందేశ స్పీకర్ నొక్కినప్పుడూ పంపబడుతుంది."
    },
    en: {
      voiceModeOnline: "Gemini answer speech is ready. After a spoken question, its reply may be sent to Google for audio; pressing any message speaker also sends that message text. Samples play locally.",
      voiceDisclaimer: "Five AI voice samples are bundled and play offline. If Gemini speech is configured, after you ask by mic the reply text may be sent to Google to make audio; pressing a message speaker also sends that message text. Your browser may process mic audio. This app does not save audio or chat history.",
      trustVoiceBody: "Browser speech recognition may process mic audio. Five samples are bundled locally. If Gemini speech is configured, a reply may be sent to Google for audio after a mic question; pressing a message speaker also sends that message text."
    }
  };
  Object.entries(autoSpeechPrivacyCopy).forEach(([locale, values]) => {
    copy[locale] = Object.assign({}, copy[locale], values);
  });

  const stateGuidance = {
    ta: {
      tn: "கலைஞர் மகளிர் உரிமைத் திட்டம் தகுதியான பெண்களுக்கு மாதம் ₹1,000 வழங்குகிறது. வயது, குடும்ப வருமானம், நிலம், மின்சாரப் பயன்பாடு உள்ளிட்ட நெறிகள் உள்ளன; அரசு தளத்தில் முழு விதிகளைச் சரிபார்க்கவும்.",
      kl: "குடும்பஸ்ரீ பெண்களின் சமூக வலைப்பின்னல்; ஒரே மாதாந்திர பண உதவி திட்டம் அல்ல. NHG / ADS / CDS அமைப்பு மற்றும் அருகிலுள்ள குழுவை அதிகாரப்பூர்வமாகக் கேளுங்கள்.",
      ka: "கர்நாடக அரசின் பெண்கள் மற்றும் குழந்தைகள் மேம்பாட்டுத் தளத்தில் கிருஹலட்சுமி விவரம் உள்ளது; நடப்பு தொகை, தகுதி, விண்ணப்பம் இங்கு உறுதிப்படுத்தப்படவில்லை. அதிகாரப்பூர்வ தளத்தில் சரிபார்க்கவும்.",
      ap: "திருப்பதி மாவட்டக் கல்வித் தளம் தல்லிக்கி வந்தனத்தைப் பட்டியலிடுகிறது. ₹15,000 குறிப்பு அரசு ஜூனியர் கல்லூரி மாணவர்களுக்கு மட்டும்; எல்லா மாணவர்களுக்கும் பொருந்தாது.",
      tg: "தெலங்கானா ePASS-ல் SC / ST / BC / EBC பிரிவுகளுக்கு கல்யாண லட்சுமி, சிறுபான்மையினருக்கு ஷாதி முபாரக் சேவைகள் உள்ளன. வருமான வரம்பும் விதிகளும் பிரிவு வாரியாக மாறும்."
    },
    ml: {
      tn: "കലൈഞ്ജർ മകളിർ ഉറിമൈ തിട്ടം അർഹരായ സ്ത്രീകൾക്ക് മാസം ₹1,000 നൽകുന്നു. പ്രായം, കുടുംബവരുമാനം, ഭൂമി, വൈദ്യുതി ഉപയോഗം എന്നിവയ്ക്കുള്ള നിബന്ധനകൾ ഔദ്യോഗിക പേജിൽ പരിശോധിക്കുക.",
      kl: "കുടുംബശ്രീ സ്ത്രീകളുടെ സാമൂഹിക ശൃംഖലയാണ്; ഏകീകൃത പ്രതിമാസ പണസഹായമല്ല. NHG / ADS / CDS ഘടനയും സമീപത്തെ സംഘവും ഔദ്യോഗികമായി അന്വേഷിക്കുക.",
      ka: "കർണാടക വനിതാ-ശിശു വികസന വകുപ്പിന്റെ പേജിൽ ഗൃഹലക്ഷ്മി വിവരമുണ്ട്. നിലവിലെ തുക, അർഹത, അപേക്ഷാ നില എന്നിവ ഇവിടെ സ്ഥിരീകരിച്ചിട്ടില്ല; ഔദ്യോഗികമായി പരിശോധിക്കുക.",
      ap: "തിരുപ്പതി ജില്ലാ വിദ്യാഭ്യാസ പേജ് തല്ലിക്കി വന്ദനം പട്ടികപ്പെടുത്തുന്നു. ₹15,000 എന്ന വിവരം സർക്കാർ ജൂനിയർ കോളേജ് വിദ്യാർത്ഥികൾക്കു മാത്രം; എല്ലാ വിദ്യാർത്ഥികൾക്കും ബാധകമല്ല.",
      tg: "തെലങ്കാന ePASS-ൽ SC / ST / BC / EBC വിഭാഗങ്ങൾക്ക് കല്യാണ ലക്ഷ്മിയും ന്യൂനപക്ഷങ്ങൾക്ക് ഷാദി മുബാറക്കും ഉണ്ട്. വരുമാനപരിധിയും നിയമങ്ങളും വിഭാഗം അനുസരിച്ച് മാറും."
    },
    kn: {
      tn: "ಕಲೈಞರ್ ಮಗಳಿರ್ ಉರಿಮೈ ಯೋಜನೆ ಅರ್ಹ ಮಹಿಳೆಯರಿಗೆ ತಿಂಗಳಿಗೆ ₹1,000 ನೀಡುತ್ತದೆ. ವಯಸ್ಸು, ಕುಟುಂಬದ ಆದಾಯ, ಭೂಮಿ, ವಿದ್ಯುತ್ ಬಳಕೆ ಮೊದಲಾದ ನಿಯಮಗಳನ್ನು ಅಧಿಕೃತ ಪುಟದಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.",
      kl: "ಕುಟುಂಬಶ್ರೀ ಮಹಿಳೆಯರ ಸಮುದಾಯ ಜಾಲ; ಒಂದೇ ಮಾಸಿಕ ನಗದು ಸಹಾಯ ಯೋಜನೆ ಅಲ್ಲ. NHG / ADS / CDS ರಚನೆ ಮತ್ತು ಹತ್ತಿರದ ಗುಂಪಿನ ಬಗ್ಗೆ ಅಧಿಕೃತವಾಗಿ ವಿಚಾರಿಸಿ.",
      ka: "ಕರ್ನಾಟಕ ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಇಲಾಖೆಯ ಪುಟದಲ್ಲಿ ಗೃಹಲಕ್ಷ್ಮಿ ಮಾಹಿತಿ ಇದೆ. ಇಂದಿನ ಮೊತ್ತ, ಅರ್ಹತೆ, ಅರ್ಜಿ ಸ್ಥಿತಿ ಇಲ್ಲಿ ದೃಢಪಟ್ಟಿಲ್ಲ; ಅಧಿಕೃತವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
      ap: "ತಿರುಪತಿ ಜಿಲ್ಲಾ ಶಿಕ್ಷಣ ಪುಟ ತಲ್ಲಿಕಿ ವಂದನಂ ಅನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ. ₹15,000 ಉಲ್ಲೇಖವು ಸರ್ಕಾರಿ ಜೂನಿಯರ್ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮಾತ್ರ; ಎಲ್ಲ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ.",
      tg: "ತೆಲಂಗಾಣ ePASSನಲ್ಲಿ SC / ST / BC / EBC ವರ್ಗಗಳಿಗೆ ಕಲ್ಯಾಣ ಲಕ್ಷ್ಮಿ ಮತ್ತು ಅಲ್ಪಸಂಖ್ಯಾತರಿಗೆ ಶಾದಿ ಮುಬಾರಕ್ ಸೇವೆಗಳಿವೆ. ಆದಾಯ ಮಿತಿ ಮತ್ತು ನಿಯಮಗಳು ವರ್ಗದಂತೆ ಬದಲಾಗುತ್ತವೆ."
    },
    te: {
      tn: "కలైంజర్ మహిళా ఉరిమై పథకం అర్హులైన మహిళలకు నెలకు ₹1,000 ఇస్తుంది. వయస్సు, కుటుంబ ఆదాయం, భూమి, విద్యుత్ వినియోగ పరిమితులను అధికారిక పేజీలో చూడండి.",
      kl: "కుటుంబశ్రీ మహిళల సామాజిక నెట్‌వర్క్; ఒకే నెలవారీ నగదు పథకం కాదు. NHG / ADS / CDS నిర్మాణం, దగ్గర సమూహం వివరాలను అధికారికంగా అడగండి.",
      ka: "కర్ణాటక మహిళా, శిశు అభివృద్ధి శాఖ పేజీలో గృహలక్ష్మి సమాచారం ఉంది. ప్రస్తుత మొత్తం, అర్హత, దరఖాస్తు స్థితి ఇక్కడ నిర్ధారించలేదు; అధికారికంగా చూడండి.",
      ap: "తిరుపతి జిల్లా విద్యా పేజీ తల్లికి వందనాన్ని జాబితా చేస్తుంది. ₹15,000 సమాచారం ప్రభుత్వ జూనియర్ కళాశాల విద్యార్థులకు మాత్రమే; అందరికీ వర్తించదు.",
      tg: "తెలంగాణ ePASSలో SC / ST / BC / EBC వర్గాలకు కళ్యాణ లక్ష్మి, మైనారిటీలకు షాదీ ముబారక్ సేవలు ఉన్నాయి. ఆదాయ పరిమితి, నియమాలు వర్గాన్ని బట్టి మారుతాయి."
    },
    en: {
      tn: "Kalaignar Magalir Urimai Thittam provides ₹1,000 monthly to eligible women. Age, family-income, land, electricity-use rules and exclusions apply; check the official source for the full criteria.",
      kl: "Kudumbashree is a women’s community network, not one monthly cash benefit. Ask the official NHG / ADS / CDS network about a nearby group.",
      ka: "Karnataka’s Women and Child Development department lists Gruha Lakshmi. The current amount, eligibility and application status were not confirmed here; check the official page.",
      ap: "A Tirupati district education page lists Thalliki Vandanam. Its ₹15,000 reference applies only to Government Junior College students, not all students.",
      tg: "Telangana ePASS lists Kalyana Lakshmi for SC / ST / BC / EBC categories and Shaadi Mubarak for minorities. Income limits and rules vary by category."
    }
  };

  const voiceSamples = {
    ta: "வணக்கம்! உங்கள் மாநிலத்தின் அரசு சேவையை எளிய தமிழில் புரிந்துகொள்ளலாம். ஒரு கேள்வியை எழுதுங்கள் அல்லது மைக்கில் பேசுங்கள். தனிப்பட்ட எண்களைப் பகிர வேண்டாம்.",
    ml: "നമസ്കാരം! നിങ്ങളുടെ സംസ്ഥാനത്തെ സർക്കാർ സേവനം ലളിതമായി മനസ്സിലാക്കാം. ചോദ്യം ടൈപ്പ് ചെയ്യുകയോ മൈക്കിൽ പറയുകയോ ചെയ്യൂ. സ്വകാര്യ നമ്പറുകൾ പങ്കിടരുത്.",
    kn: "ನಮಸ್ಕಾರ! ನಿಮ್ಮ ರಾಜ್ಯದ ಸರ್ಕಾರಿ ಸೇವೆಯನ್ನು ಸರಳವಾಗಿ ತಿಳಿದುಕೊಳ್ಳೋಣ. ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮೈಕ್‌ನಲ್ಲಿ ಹೇಳಿ. ಖಾಸಗಿ ಸಂಖ್ಯೆಯನ್ನು ಹಂಚಬೇಡಿ.",
    te: "నమస్కారం! మీ రాష్ట్ర ప్రభుత్వ సేవను సులభంగా తెలుసుకుందాం. ప్రశ్నను టైప్ చేయండి లేదా మైక్‌లో చెప్పండి. వ్యక్తిగత నంబర్లను పంచుకోకండి.",
    en: "Hello! Let's understand a public service in simple language. Type a question or speak into the microphone. Please don't share private numbers here."
  };

  const artwork = {
    tn: '<svg viewBox="0 0 280 150" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="140" cy="74" r="38"/><circle cx="140" cy="74" r="25"/><circle cx="140" cy="74" r="11"/><path d="M140 20v20m0 68v22M86 74h20m68 0h20M102 36l14 14m48 48 14 14m0-76-14 14m-48 48-14 14"/><path d="M121 74c8-14 19-14 38 0-12 15-25 15-38 0Z"/><path d="M126 57c8 3 13 9 14 17m-8 19c5-8 12-13 21-15"/></g><g fill="currentColor"><circle cx="140" cy="16" r="3"/><circle cx="140" cy="132" r="3"/><circle cx="82" cy="74" r="3"/><circle cx="198" cy="74" r="3"/></g></svg>',
    kl: '<svg viewBox="0 0 280 150" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M0 107c27-18 54 18 81 0s54 18 81 0 54 18 81 0 29 0 37 0M0 126c27-18 54 18 81 0s54 18 81 0 54 18 81 0 29 0 37 0"/><path d="M72 101V46m0 0c-26 2-38-11-39-31 23-1 38 8 39 31Zm0 9c20-4 32-18 30-38-21 1-33 15-30 38Z"/><path d="M182 101V37m0 0c-28 2-42-12-41-34 24-2 41 10 41 34Zm0 11c22-3 34-17 34-39-23 1-36 15-34 39Z"/><path d="M123 101V57m0 0c-20 1-30-9-30-26 18-1 30 7 30 26Zm0 9c17-2 26-13 26-30-17 0-27 11-26 30Z"/></g></svg>',
    ka: '<svg viewBox="0 0 280 150" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M30 118h220M52 118V69h176v49M68 69V45h144v24M85 45V34h110v11"/><path d="M74 118V89a17 17 0 0 1 34 0v29m32 0V89a17 17 0 0 1 34 0v29M107 69V51m66 18V51"/><path d="M131 34V21h18v13m-9-13V10"/><path d="M43 132c28-9 52-9 80 0s52 9 80 0 38-5 50 0"/></g><g fill="currentColor"><circle cx="140" cy="10" r="3"/><circle cx="60" cy="56" r="3"/><circle cx="220" cy="56" r="3"/></g></svg>',
    ap: '<svg viewBox="0 0 280 150" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M0 112c26-18 52-18 78 0s52 18 78 0 52-18 78 0 28 9 46 0M0 132c26-18 52-18 78 0s52 18 78 0 52-18 78 0 28 9 46 0"/><path d="M67 99 98 68l22 20 35-43 59 54M91 75l7-22 8 22m37-30 8-24 8 24"/><path d="M181 98V65h28v33M188 65V54h14v11M132 103c3-18 15-27 31-27s28 9 31 27"/><circle cx="218" cy="38" r="15"/><path d="m218 18 3 10 10 3-10 3-3 10-3-10-10-3 10-3 3-10Z"/></g></svg>',
    tg: '<svg viewBox="0 0 280 150" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M47 122h186M66 122V64h148v58M82 64V49h116v15M100 49V36h80v13"/><path d="M87 122V89a21 21 0 0 1 42 0v33m22 0V89a21 21 0 0 1 42 0v33M118 36V25h44v11"/><path d="M140 25V11m-10 7h20M48 137c25-8 50-8 75 0s50 8 75 0 26-4 35 0"/><path d="M104 76h18m36 0h18"/></g><g fill="currentColor"><circle cx="140" cy="10" r="3"/><circle cx="51" cy="50" r="3"/><circle cx="229" cy="50" r="3"/></g></svg>'
  };

  window.NAMMA_MULTISTATE = { copy, stateGuidance, voiceSamples, artwork };
})();
