/* Namma Urimai — no frameworks, no trackers, no personal-data persistence. */
/* 10-MIN FIX */
global.window = global;
global.i18n = { init: () => {}, use: () => ({ t: (k) => k, language: 'en' }), t: (k) => k, language: 'en', changeLanguage: () => {}, addResourceBundle: () => {}, loadNamespaces: () => Promise.resolve() };
global.navigator = { userAgent: 'node', platform: 'node', language: 'en', languages: ['en'] };
global.i18n = { init: () => {}, use: () => {}, t: () => '' };
global.navigator = { userAgent: 'node', platform: 'node', language: 'en', languages: ['en'] };
global.removeEventListener = () => {};
const fakeEl = () => ({
  style: {}, appendChild: () => {}, addEventListener: () => {}, removeEventListener: () => {},
  setAttribute: () => {}, getAttribute: () => null, classList: { add: () => {}, remove: () => {} },
  innerHTML: '', textContent: '', tagName: 'DIV', querySelector: () => null, querySelectorAll: () => []
});
global.document = {
  createElement: (t) => fakeEl(),
  title: '', body: { appendChild: () => {}, style: {}, innerHTML: '' },
  head: { appendChild: () => {}, style: {} },
  documentElement: fakeEl(),
  getElementById: () => fakeEl(),
  querySelector: () => fakeEl(),
  querySelectorAll: () => [fakeEl()]
};
global.navigator = { userAgent: 'node', platform: 'node' };
global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
global.screen = { width: 1024, height: 768 };
global.matchMedia = () => ({ matches: false, addListener: () => {}, removeListener: () => {} });
global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
global.cancelAnimationFrame = (id) => clearTimeout(id);
if (typeof global !== 'undefined' && typeof global.window === 'undefined') {
  global.window = global;
  global.document = { createElement: () => ({}), title: '', body: { appendChild: () => {} }, getElementById: () => null, querySelector: () => null };
  global.navigator = { userAgent: 'node' };
  global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
  global.screen = { width: 1024, height: 768 };
}
(() => {
  "use strict";

  const COPY = {
    ta: {
      skip: "உள்ளடக்கத்துக்குச் செல்ல",
      toplineLeft: "தமிழ்நாட்டுக்கான ஒரு எளிய வழிகாட்டி",
      toplineRight: "உள்நுழைவு இல்லை · தகுதி முடிவு இல்லை · அடுத்த படி மட்டும்",
      brandSub: "ஒரு உரிமை. ஒரு எளிய வழி.",
      navHow: "இது எப்படி உதவும்?", navAsk: "கேள்வி கேள்", navTrust: "நம்பிக்கை & தனியுரிமை", navStart: "தொடங்கலாம்",
      heroKicker: "கலைஞர் மகளிர் உரிமைத் திட்டம் · எளிய தமிழ்",
      heroTitle: "உங்கள் உரிமை,<br><span>உங்கள் குரலில்.</span>",
      heroBody: "கலைஞர் மகளிர் உரிமைத் திட்டத்தைப் புரிந்துகொள்ள யாரையும் காத்திருக்க வேண்டாம். தகுதியைப் பாருங்கள், அடுத்த படியைக் கேளுங்கள்—உங்கள் வேகத்தில்.",
      heroPrimary: "என் தகுதியைப் பார்ப்போம்", heroSecondary: "பேசிக் கேட்க",
      heroReassure: "உள்நுழைவு இல்லை. ஆங்கிலம் வேண்டாம். உதவியாளர் தேவையில்லை.",
      imageCaption: "தெரிந்த மொழி.<br>தெளிவான அடுத்த படி.", benefitAmount: "₹1,000 <small>/ மாதம்</small>",
      benefitLabel: "தகுதி பெற்ற குடும்பத் தலைவிக்கு", floatNote: "முதலில் கேளுங்கள்.<br>பிறகு முடிவு செய்யுங்கள்.",
      ribbonTitle: "உங்கள் முக்கிய எண்கள், உங்களிடமே.", ribbonOne: "ஆதார் / OTP கேட்காது", ribbonTwo: "இந்தச் செயலியில் சேமிக்காது", ribbonThree: "நீங்களே முடிவு செய்கிறீர்கள்",
      howKicker: "ஒரே திட்டம். முழு தெளிவு.", howTitle: "தொடங்க மூன்று<br><em>எளிய வழிகள்.</em>",
      howBody: "முதன்முறையா? பரவாயில்லை. எந்தப் பொத்தானைத் தேர்ந்தெடுத்தாலும், ஒவ்வொரு படியையும் எளிய வார்த்தைகளில் சொல்கிறோம்.",
      cardOneTitle: "தகுதி என்னவென்று<br>சேர்ந்து பார்ப்போம்", cardOneBody: "ஏழு சிறிய கேள்விகள். தனிப்பட்ட எண்கள் எதுவும் கேட்கப்படாது.", cardOneCta: "தகுதி வழிகாட்டியைத் திற",
      cardTwoTitle: "அடுத்து என்ன<br>செய்ய வேண்டும்?", cardTwoBody: "அருகிலுள்ள சரியான அரசு வழியை, படிப்படியாகத் தெரிந்துகொள்ளுங்கள்.", cardTwoCta: "மூன்று படிகளைப் பார்",
      cardThreeTitle: "உங்கள் கேள்வி.<br>உங்கள் மொழியில்.", cardThreeBody: "தட்டச்சு செய்யுங்கள் அல்லது மைக்கைத் தொட்டு பேசுங்கள். பதில் சுருக்கமாக வரும்.", cardThreeCta: "தோழியிடம் கேள்",
      journeyFootnote: "இந்த வழிகாட்டி விண்ணப்பம் அல்ல. முடிவு எப்போதும் அரசு அதிகாரிகளுடையது.",
      stepsKicker: "இன்றே தெரிந்து கொள்ளுங்கள்", stepsTitle: "அரசு வழி<br><em>எளிதாக இருக்கட்டும்.</em>",
      stepsBody: "விண்ணப்பப் பதிவு முகாம் உங்கள் பகுதியில் தற்போது நடக்கிறதா என்பதை முதலில் உறுதிசெய்யுங்கள். தேதியும் நடைமுறையும் மாறக்கூடும்.",
      officialButton: "அரசின் அதிகாரப்பூர்வ தளம்", officialNote: "புதிய பதிவு திறந்திருப்பதை அரசு தளத்தில் உறுதிப்படுத்துங்கள்.",
      stepOneTitle: "உங்கள் நியாயவிலைக் கடையில் கேளுங்கள்", stepOneBody: "உங்கள் குடும்ப அட்டை உள்ள ரேஷன் கடையில், மகளிர் உரிமைத் திட்டப் பதிவு முகாம் எப்போது என்று கேளுங்கள்.",
      stepTwoTitle: "தேவையானவற்றை அருகில் வையுங்கள்", stepTwoBody: "குடும்ப அட்டை, ஆதார் அட்டை, வங்கிக் கணக்கு விவரம் ஆகியவற்றை எடுத்துச் செல்லுங்கள். வருமானம் அல்லது நிலத்திற்குத் தனிச் சான்று வாங்கத் தேவையில்லை என்று அரசின் வழிகாட்டி கூறுகிறது.",
      stepThreeTitle: "அரசு முகாமில் நேரடியாகப் பதிவு செய்யுங்கள்", stepThreeBody: "பதிவு திறந்திருப்பதை உறுதி செய்து, அங்குள்ள அதிகாரியிடம் விண்ணப்பிக்க உதவி கேளுங்கள். உங்கள் ஆதார், OTP, வங்கி எண் ஆகியவற்றை இந்தச் செயலியில் ஒருபோதும் பகிர வேண்டாம்.",
      stepSmallprint: "இந்தப் படிகள் புரிந்துகொள்ள உதவும் சுருக்கம்; தற்போதைய அறிவிப்பை அரசு தளத்தில் சரிபார்க்கவும்.",
      askKicker: "உங்கள் குரலில் கேளுங்கள்", askTitle: "கேட்பது சுலபம்.<br><em>புரிவதும் சுலபம்.</em>",
      askBody: "எளிய தமிழில் ஒரு கேள்வி கேளுங்கள். மைக் வேலை செய்யாவிட்டால், தட்டச்சு செய்யலாம்.", voiceStamp: "பேசலாம்.<br>தட்டச்சும் செய்யலாம்.",
      assistantName: "உரிமைத் தோழி", aiModeChecking: "தயார் ஆகிறது…", resetChat: "புதிதாகத் தொடங்கு", suggestLabel: "இதில் ஒன்றைக் கேளுங்கள்",
      suggestOne: "இந்தத் திட்டம் என்ன?", suggestTwo: "யார் விண்ணப்பிக்கலாம்?", suggestThree: "எப்படி விண்ணப்பிப்பது?",
      micButton: "பேசு", messageLabel: "உங்கள் கேள்வியை எழுதுங்கள்", inputPlaceholder: "உங்கள் கேள்வியை இங்கே எழுதுங்கள்…", voiceHint: "மைக் அனுமதி கேட்கப்படும்; குரலை உலாவி செயலாக்கலாம்.",
      geminiNote: "<strong>Gemini AI</strong> இயக்கப்பட்டால், உங்கள் கேள்வி பதில் உருவாக்க Google-க்கு அனுப்பப்படும். தனிப்பட்ட எண்களைப் பகிர வேண்டாம்.",
      trustKicker: "நம்பிக்கையே அடிப்படை", trustTitle: "தெளிவான தகவல்.<br><em>உங்கள் கட்டுப்பாடு.</em>",
      trustBody: "அரசு சேவையை எளிதாகப் புரிய வைப்பதே எங்கள் பணி. உங்கள் சார்பில் விண்ணப்பிக்கவோ, இந்தச் செயலியில் உங்கள் விவரங்களைச் சேமிக்கவோ மாட்டோம்.",
      trustCardOneTitle: "முக்கிய எண்கள் கேட்கப்படாது", trustCardOneBody: "ஆதார் எண், OTP, வங்கி எண், ரேஷன் அட்டை எண்—எதையும் இங்கே உள்ளிடாதீர்கள்.",
      trustCardTwoTitle: "அரசு மூலத்தைக் காட்டுகிறோம்", trustCardTwoBody: "திட்ட விதிகள் மாறலாம். முடிவெடுக்கும் முன் அதிகாரப்பூர்வ இணையதளத்தைச் சரிபார்க்கவும்.",
      trustCardThreeTitle: "இறுதி முடிவு உங்களுடையது", trustCardThreeBody: "இந்தச் சரிபார்ப்பு ஒரு ஆரம்ப வழிகாட்டி மட்டுமே. தகுதி அல்லது ஒப்புதலை அரசு தான் உறுதிப்படுத்தும்.",
      sourcesTitle: "அரசு ஆதாரங்கள் & தகவல் எங்கிருந்து வருகிறது?", sourcesIntro: "இந்த prototype-இல் உள்ள திட்டச் சுருக்கம் தமிழ்நாடு அரசின் அதிகாரப்பூர்வ KMUT இணையதளத்தை அடிப்படையாகக் கொண்டது. இணைப்பு திறந்து சமீபத்திய விதி மற்றும் பதிவு அறிவிப்பைப் பாருங்கள்.",
      sourceEligibility: "திட்டம், தகுதி, விண்ணப்ப நடைமுறை", sourceFaq: "அதிகாரப்பூர்வ அடிக்கடி கேட்கப்படும் கேள்விகள்", sourceHome: "கலைஞர் மகளிர் உரிமைத் திட்டம் — தமிழ்நாடு அரசு",
      footerDisclaimer: "இது ஒரு சுயாதீன வழிகாட்டி prototype; தமிழ்நாடு அரசின் அதிகாரப்பூர்வ தளம் அல்ல. அரசு தளத்தில் விவரங்களை உறுதிசெய்து, அங்கே மட்டுமே விண்ணப்பிக்கவும்.",
      footerOfficial: "அரசு தளம்", footerTagline: "ஒவ்வொரு பெண்ணுக்கும் புரியும் உரிமை.", footerBuild: "தமிழில் வடிவமைக்கப்பட்டது · குறைந்த இணையத்திற்கும் ஏற்றது", installButton: "முகப்பில் சேர்க்கவும்",
      offlineNotice: "இணையம் இல்லை. அடிப்படை வழிகாட்டி தொடர்ந்து கிடைக்கும்.",
      aiModeGemini: "Gemini AI · இணைக்கப்பட்டுள்ளது", aiModeGuide: "அடிப்படை வழிகாட்டி · Gemini key சேர்க்கலாம்", aiModeError: "AI இப்போது கிடைக்கவில்லை · அடிப்படை வழிகாட்டி தயார்",
      assistantGreeting: "வணக்கம்! கலைஞர் மகளிர் உரிமைத் திட்டம் பற்றி என்ன தெரிந்துகொள்ள விரும்புகிறீர்கள்? கேள்வியை எழுதுங்கள் அல்லது மைக்கைத் தொட்டு பேசுங்கள். முதலில், உங்கள் முக்கிய எண்களை இங்கே பகிர வேண்டாம்.",
      userMessageMeta: "நீங்கள்", aiMessageMeta: "உரிமைத் தோழி", guideMessageMeta: "எளிய வழிகாட்டி", typingLabel: "பதில் தயாராகிறது",
      charCountSuffix: "எழுத்துகள்", msgSendError: "இணைய இணைப்பு தடைப்பட்டது. கீழே உள்ள எளிய வழிகாட்டி பதிலைத் தருகிறேன்.",
      micUnsupported: "இந்த உலாவியில் குரல் உள்ளீடு கிடைக்காமல் இருக்கலாம். கேள்வியைத் தட்டச்சு செய்யலாம்.", micDenied: "மைக்கைப் பயன்படுத்த அனுமதி இல்லை. உலாவி அமைப்பில் அனுமதிக்கவும் அல்லது தட்டச்சு செய்யவும்.", micError: "குரலைப் புரிந்துகொள்ள முடியவில்லை. மீண்டும் முயற்சிக்கவும் அல்லது தட்டச்சு செய்யவும்.",
      sensitiveMessage: "ஆதார், OTP, தொலைபேசி அல்லது வங்கி எண் உள்ள செய்தியை அனுப்பவில்லை. அந்த எண்ணை நீக்கி மீண்டும் கேளுங்கள்.",
      emptyMessage: "உங்கள் கேள்வியை எழுதுங்கள் அல்லது பேசுங்கள்.", genericToast: "இந்த வழிகாட்டி கலைஞர் மகளிர் உரிமைத் திட்டம் பற்றிய கேள்விகளுக்காக உருவாக்கப்பட்டது.",
      fallbackWhat: "கலைஞர் மகளிர் உரிமைத் திட்டம், தகுதியான குடும்பத் தலைவிகளுக்கு மாதம் ₹1,000 வழங்கும் தமிழ்நாடு அரசு திட்டம். ஒரு குடும்ப அட்டைக்கு ஒருவரே பயனாளி. உங்கள் குடும்பத்துக்கான இறுதி முடிவை அரசு தான் உறுதிப்படுத்தும்.",
      fallbackEligibility: "பொதுவாக, 21 வயது அல்லது அதற்கு மேல்; குடும்பத் தலைவி; ஆண்டு குடும்ப வருமானம் ₹2.5 லட்சத்திற்குக் குறைவு; நன்செய் நிலம் 5 ஏக்கருக்கும் குறைவு அல்லது புன்செய் நிலம் 10 ஏக்கருக்கும் குறைவு; வீட்டு மின்சாரம் ஆண்டுக்கு 3,600 யூனிட்டிற்குக் குறைவு ஆகிய அடிப்படை நெறிகள் உள்ளன. சில விலக்கு நெறிகளும் உண்டு. இது ஆரம்ப வழிகாட்டி மட்டுமே.",
      fallbackApply: "உங்கள் குடும்ப அட்டை உள்ள நியாயவிலைக் கடையில் தற்போது பதிவு முகாம் திறந்திருப்பதை முதலில் கேளுங்கள்; தேதி மாறலாம். அரசின் வழிகாட்டியில், அந்த அட்டைக்குரிய கடையின் முகாமில்தான் பதிவு செய்ய வேண்டும் என்கிறது. சமீபத்திய அறிவிப்புக்கு kmut.tn.gov.in-ஐப் பாருங்கள்.",
      fallbackDocs: "குடும்ப அட்டை, ஆதார் அட்டை, வங்கிக் கணக்கு விவரங்களை அதிகாரப்பூர்வ முகாமில் கேட்கும்போது மட்டும் வைத்திருங்கள். ஆதார் எண், OTP, வங்கி எண் ஆகியவற்றை இங்கே அனுப்ப வேண்டாம். வருமானம் அல்லது நிலத்திற்குத் தனிச் சான்று வாங்கத் தேவையில்லை என்று அரசின் வழிகாட்டி கூறுகிறது; அன்றைய ஆவணப் பட்டியலை முகாமில் உறுதிசெய்யுங்கள்.",
      fallbackStatus: "இந்த வழிகாட்டி உங்கள் விண்ணப்ப நிலையைப் பார்க்காது. kmut.tn.gov.in என்ற அரசு தளத்தில் மட்டும் சென்று நீங்களே சரிபார்க்கவும். OTP-ஐ யாருடனும் பகிர வேண்டாம்.",
      fallbackOther: "நான் கலைஞர் மகளிர் உரிமைத் திட்டத்தைப் பற்றிய வழிகாட்டி. தகுதி, தேவையானவை, பதிவு செய்யும் அடுத்த படி—இதில் எதைப் பற்றி கேட்க விரும்புகிறீர்கள்?",
      checkTitle: "உங்கள் தகுதியைப் புரிந்துகொள்ளலாம்", checkIntro: "ஒவ்வொன்றாகப் பதில் சொல்லுங்கள். உங்களுடைய தனிப்பட்ட எண்கள் எதையும் கேட்க மாட்டோம்.",
      checkKicker: "சிறிய தகுதி வழிகாட்டி", questionWord: "கேள்வி", ofWord: "/", qRead: "இந்தக் கேள்வியைக் கேளுங்கள்", qReadAria: "கேள்வியை ஒலியாகக் கேள்",
      answerYes: "ஆம்", answerNo: "இல்லை", answerUnsure: "தெரியவில்லை", answerYesHint: "பொருந்துகிறது", answerNoHint: "பொருந்தவில்லை", answerUnsureHint: "உறுதியாகத் தெரியவில்லை",
      checkBack: "முந்தையது", checkRestart: "மீண்டும் தொடங்கு", checkClose: "வழிகாட்டியை மூடு", qExtraTitle: "உதாரணமாக, இவற்றில் ஏதாவது உள்ளதா?",
      resultMatchTitle: "நீங்கள் சொன்ன பதில்கள் நல்ல தொடக்கம்.", resultMatchBody: "உங்கள் பதில்கள் அடிப்படை நெறிகளுடன் பொருந்துகின்றன. இது தகுதி அல்லது ஒப்புதல் உறுதி அல்ல—இறுதி முடிவை அரசு தான் எடுக்கும்.",
      resultReviewTitle: "சில விஷயங்களை உறுதிசெய்யலாம்.", resultReviewBody: "பதிலளிக்கத் தெரியாத விஷயங்களை அதிகாரப்பூர்வ முகாமில் கேளுங்கள். சந்தேகம் இருப்பது உங்கள் தவறு அல்ல.",
      resultCautionTitle: "ஒரு விதி வேறுபடலாம்—அதிகாரியிடம் கேளுங்கள்.", resultCautionBody: "உங்கள் பதில்களில் ஒரு அரசு நெறி பொருந்தாமல் இருக்கலாம். ஆனாலும் இதை இறுதி மறுப்பு என்று எடுத்துக்கொள்ள வேண்டாம்; அதிகாரியிடம் உங்கள் நிலையை உறுதிசெய்யுங்கள்.",
      resultKnownLabel: "அடுத்து செய்யலாம்", resultUnknownLabel: "உறுதிசெய்ய வேண்டியவை", resultMismatchLabel: "அதிகாரியிடம் கேட்க வேண்டியது",
      resultNextMatch: "பதிவு முகாம் உங்கள் பகுதியில் தற்போது திறந்திருப்பதை முதலில் உறுதிசெய்யுங்கள்.", resultNextReview: "குறித்த விஷயங்களை குடும்ப அட்டை இருக்கும் நியாயவிலைக் கடை அல்லது அதிகாரப்பூர்வ முகாமில் கேளுங்கள்.", resultNextCaution: "குடும்ப அட்டை உள்ள நியாயவிலைக் கடையிலோ அதிகாரப்பூர்வ முகாமிலோ விதியை உறுதிசெய்யுங்கள்.",
      resultSteps: "அடுத்த படிகளைப் பாருங்கள்", resultRestart: "மீண்டும் பார்க்கலாம்", resultOfficial: "அரசு விதியைத் திற", resultDisclaimer: "இது சட்ட அல்லது அரசு முடிவு அல்ல. விதிகள் / பதிவு தேதிகள் மாறலாம். ஆதார், OTP, வங்கி எண் எதையும் இந்த வழிகாட்டியில் உள்ளிட வேண்டாம்.",
      qAge: "விண்ணப்பிக்க நினைக்கும் பெண்ணுக்கு 21 வயது முடிந்துவிட்டதா?", hAge: "இந்தத் திட்டத்திற்கு 21 வயது அல்லது அதற்கு மேல் இருக்க வேண்டும்.",
      qHead: "குடும்ப அட்டைப்படி, அந்தப் பெண் குடும்பத் தலைவியாக உள்ளாரா?", hHead: "அட்டையில் ஆண் குடும்பத் தலைவர் என்றால் அவரது மனைவியும் கணக்கில் வரலாம். தனியாகக் குடும்பம் நடத்தும் பெண், கைம்பெண் அல்லது திருநங்கை குடும்பத் தலைவியாக இருந்தாலும் கேட்கலாம்.",
      qState: "குடும்ப அட்டை தமிழ்நாட்டைச் சேர்ந்ததா?", hState: "இது தமிழ்நாடு அரசின் திட்டம்.",
      qIncome: "குடும்பத்தின் ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குக் குறைவா?", hIncome: "குடும்பத்தின் மொத்த ஆண்டு வருமானத்தை நினைத்துப் பதில் சொல்லுங்கள். சரியான தொகையை இங்கே எழுதத் தேவையில்லை.",
      qLand: "நில அளவு அரசு கூறிய வரம்புக்குள் உள்ளதா?", hLand: "நன்செய் நிலம் 5 ஏக்கருக்கும் குறைவு அல்லது புன்செய் நிலம் 10 ஏக்கருக்கும் குறைவு இருக்க வேண்டும். நிலம் இல்லை என்றால் “ஆம்” என்று தேர்வு செய்யுங்கள்.",
      qPower: "வீட்டு மின்சாரப் பயன்பாடு ஆண்டுக்கு 3,600 யூனிட்டிற்குக் குறைவா?", hPower: "மின்சாரக் கட்டணத்தில் யூனிட் அளவைப் பார்க்கலாம். தெரியாவிட்டால் “தெரியவில்லை” என்பதைத் தேர்ந்தெடுங்கள்.",
      qExclude: "கீழே உள்ள விலக்கு விதிகளில் ஏதாவது ஒன்று உங்கள் குடும்பத்திற்குப் பொருந்துகிறதா?", hExclude: "ஏதாவது ஒன்று பொருந்தினால் “ஆம்” என்று சொல்லுங்கள். தெரியாவிட்டால் அதிகாரியிடம் உறுதிசெய்யுங்கள்.",
      qExcludeList: "<ul><li>அரசு, வங்கி, பொதுத்துறை, உள்ளாட்சி அல்லது கூட்டுறவு அமைப்பில் வேலை / ஓய்வூதியம்</li><li>குடும்பத்தில் வருமானவரி அல்லது தொழில்வரி செலுத்துபவர்</li><li>சொந்தப் பயன்பாட்டுக்கான கார், ஜீப், டிராக்டர் அல்லது கனரக வாகனம்</li><li>ஆண்டுக்கு ₹50 லட்சத்துக்கு மேல் விற்பனை செய்து GST செலுத்தும் தொழில்</li></ul>",
      qAgeName: "வயது 21 அல்லது அதற்கு மேல்", qHeadName: "குடும்பத் தலைவி விதி", qStateName: "தமிழ்நாடு குடும்ப அட்டை", qIncomeName: "குடும்ப வருமான வரம்பு", qLandName: "நில அளவு", qPowerName: "மின்சாரப் பயன்பாடு", qExcludeName: "விலக்கு விதிகள்",
      resultGood: "அடிப்படை நெறிகளுக்குப் பொருந்துவதாக நீங்கள் பதிலளித்தீர்கள்.", resultUnsure: "உறுதிப்படுத்த வேண்டியவை", resultMismatch: "அதிகாரியிடம் கேட்க வேண்டியவை",
      fallbackPrivacy: "உங்கள் உரையாடல் இந்த செயலியில் சேமிக்கப்படாது. ஆனால் Gemini இயக்கப்பட்டால், பதில் உருவாக்க உங்கள் கேள்வி Google-க்கு அனுப்பப்படும். தனிப்பட்ட தகவலைப் பகிர வேண்டாம்."
    },
    en: {
      skip: "Skip to content",
      toplineLeft: "A simple guide for Tamil Nadu", toplineRight: "No sign-up · No eligibility decision · Just a clear next step",
      brandSub: "One right. One simple path.", navHow: "How it helps", navAsk: "Ask a question", navTrust: "Trust & privacy", navStart: "Get started",
      heroKicker: "Kalaignar Magalir Urimai Thittam · plain language",
      heroTitle: "Your right,<br><span>in your own voice.</span>",
      heroBody: "You shouldn't have to wait for someone else to explain the Kalaignar Magalir Urimai Thittam. Check the basics, hear the next step, and move at your own pace.",
      heroPrimary: "Check the basics", heroSecondary: "Ask by voice",
      heroReassure: "No sign-up. No English required. No helper needed.",
      imageCaption: "A familiar language.<br>A clear next step.", benefitAmount: "₹1,000 <small>/ month</small>",
      benefitLabel: "for eligible women heading a family", floatNote: "Ask first.<br>Decide for yourself.",
      ribbonTitle: "Your sensitive numbers stay yours.", ribbonOne: "No Aadhaar or OTP", ribbonTwo: "Not stored by this app", ribbonThree: "You stay in control",
      howKicker: "One scheme. Clear answers.", howTitle: "Three easy ways<br><em>to get started.</em>",
      howBody: "First time here? That's okay. Choose any button and we'll explain each step in everyday words.",
      cardOneTitle: "Let's check the<br>basic criteria", cardOneBody: "Seven small questions. No personal ID numbers are requested.", cardOneCta: "Open the eligibility guide",
      cardTwoTitle: "What should I<br>do next?", cardTwoBody: "Find the official next step, explained one piece at a time.", cardTwoCta: "See the three steps",
      cardThreeTitle: "Your question.<br>Your language.", cardThreeBody: "Type a question or tap the mic and speak. Answers are kept short.", cardThreeCta: "Ask the guide",
      journeyFootnote: "This guide is not an application. Only the government can make the final decision.",
      stepsKicker: "Know what to do next", stepsTitle: "The official route,<br><em>made easier.</em>",
      stepsBody: "First, check whether a registration camp is currently open in your area. Dates and procedures can change.",
      officialButton: "Open the official portal", officialNote: "Check the official site to see whether new registration is open.",
      stepOneTitle: "Ask at your ration shop", stepOneBody: "Ask the fair-price shop linked to your family card when a Magalir Urimai registration camp will be held.",
      stepTwoTitle: "Keep the basics nearby", stepTwoBody: "Take your family card, Aadhaar card and bank-account details when you visit. The official guide says you do not need separate income or land certificates.",
      stepThreeTitle: "Register through the official camp", stepThreeBody: "Confirm registration is open, then ask the officer at the camp for help. Never share your Aadhaar, OTP or bank number in this app.",
      stepSmallprint: "This is a plain-language summary. Check the official site for current notices.",
      askKicker: "Ask in your own voice", askTitle: "Easy to ask.<br><em>Easy to understand.</em>",
      askBody: "Ask in simple Tamil or English. If the mic is unavailable, you can type instead.", voiceStamp: "Speak it.<br>Or type it.",
      assistantName: "Urimai companion", aiModeChecking: "Getting ready…", resetChat: "Start over", suggestLabel: "Try asking",
      suggestOne: "What is this scheme?", suggestTwo: "Who can apply?", suggestThree: "How do I apply?",
      micButton: "Speak", messageLabel: "Type your question", inputPlaceholder: "Type your question here…", voiceHint: "Allow voice recognition; your browser may process audio.",
      geminiNote: "When <strong>Gemini AI</strong> is enabled, your question is sent to Google to create a reply. Please don't share personal numbers.",
      trustKicker: "Trust comes first", trustTitle: "Clear information.<br><em>You stay in control.</em>",
      trustBody: "Our job is to make a public service easier to understand. We will not apply on your behalf or store your details in this app.",
      trustCardOneTitle: "We don't ask for secret numbers", trustCardOneBody: "Never enter your Aadhaar, OTP, bank-account or ration-card number here.",
      trustCardTwoTitle: "We show the official source", trustCardTwoBody: "Scheme rules can change. Check the official website before you act.",
      trustCardThreeTitle: "The final decision is yours", trustCardThreeBody: "This check is only an initial guide. The government confirms eligibility and approval.",
      sourcesTitle: "Official sources & where this information comes from", sourcesIntro: "This prototype's scheme summary is based on the Government of Tamil Nadu's official KMUT website. Open the links to check the latest rules and registration notices.",
      sourceEligibility: "Scheme, eligibility and application guidance", sourceFaq: "Official frequently asked questions", sourceHome: "Kalaignar Magalir Urimai Thittam — Government of Tamil Nadu",
      footerDisclaimer: "This is an independent guidance prototype, not a Tamil Nadu Government service. Confirm details on the official site and apply only there.",
      footerOfficial: "Official portal", footerTagline: "A right every woman can understand.", footerBuild: "Designed in Tamil · Built for low-bandwidth use", installButton: "Add to home screen",
      offlineNotice: "You're offline. The basic guide is still available.",
      aiModeGemini: "Gemini AI · connected", aiModeGuide: "Basic guide · add a Gemini key for AI", aiModeError: "AI unavailable · basic guide is ready",
      assistantGreeting: "Hello! What would you like to know about the Kalaignar Magalir Urimai Thittam? Type a question or tap the mic to speak. Please don't share private ID or bank numbers here.",
      userMessageMeta: "You", aiMessageMeta: "Urimai companion", guideMessageMeta: "Plain-language guide", typingLabel: "Preparing an answer",
      charCountSuffix: "characters", msgSendError: "The connection dropped. I'll give you a basic guide answer instead.",
      micUnsupported: "Voice input may not be available in this browser. You can type your question instead.", micDenied: "Microphone permission is blocked. Allow it in your browser settings, or type instead.", micError: "I couldn't understand that. Please try again or type your question.",
      sensitiveMessage: "I didn't send a message containing a possible Aadhaar, OTP, phone or bank number. Remove the number and ask again.",
      emptyMessage: "Type your question or use the mic.", genericToast: "This guide is designed for questions about the Kalaignar Magalir Urimai Thittam.",
      fallbackWhat: "Kalaignar Magalir Urimai Thittam is a Tamil Nadu government scheme that provides ₹1,000 a month to eligible women heading a family. One beneficiary per family card. Only the government can confirm a family's final eligibility.",
      fallbackEligibility: "The basic rules include: the applicant is at least 21 and the family head; annual family income is below ₹2.5 lakh; wetland is under 5 acres or dryland under 10 acres; household electricity use is under 3,600 units a year. There are also exclusions. This is only a first guide, not a decision.",
      fallbackApply: "First ask the ration shop linked to your family card whether a registration camp is currently open; dates can change. The official guide says registration is at the camp for that shop. Check kmut.tn.gov.in for the latest notice.",
      fallbackDocs: "Keep your family card, Aadhaar card and bank-account details ready only for the official camp. Never send an Aadhaar number, OTP or bank number here. The official guide says separate income or land certificates are not needed; confirm the current checklist at the camp.",
      fallbackStatus: "This guide cannot check your application status. Visit kmut.tn.gov.in and check directly on the official government site. Never share an OTP with anyone.",
      fallbackOther: "I'm a guide for the Kalaignar Magalir Urimai Thittam. Would you like to ask about eligibility, documents or the next step to register?",
      checkTitle: "Let's understand the basic criteria", checkIntro: "Answer one question at a time. We will not ask for your personal ID numbers.",
      checkKicker: "A small eligibility guide", questionWord: "Question", ofWord: "of", qRead: "Listen to this question", qReadAria: "Read this question aloud",
      answerYes: "Yes", answerNo: "No", answerUnsure: "Not sure", answerYesHint: "This seems to fit", answerNoHint: "This may not fit", answerUnsureHint: "I need to check",
      checkBack: "Previous", checkRestart: "Start again", checkClose: "Close guide", qExtraTitle: "For example, does any of this apply?",
      resultMatchTitle: "Your answers are a good start.", resultMatchBody: "Your answers appear to match the basic rules. This is not an eligibility or approval decision—the government makes the final decision.",
      resultReviewTitle: "A few details need checking.", resultReviewBody: "Ask about the items you are unsure of at an official registration camp. It's okay not to know yet.",
      resultCautionTitle: "One rule may differ—check with an official.", resultCautionBody: "One of your answers may not match a government rule. Please don't treat this as a final rejection; ask an official to review your situation.",
      resultKnownLabel: "A possible next step", resultUnknownLabel: "Things to confirm", resultMismatchLabel: "Ask an official about",
      resultNextMatch: "First confirm whether a registration camp is currently open in your area.", resultNextReview: "Ask about these items at the ration shop linked to your family card or at an official camp.", resultNextCaution: "Confirm the rule with the ration shop linked to your family card or at an official camp.",
      resultSteps: "See the next steps", resultRestart: "Check again", resultOfficial: "Open official rules", resultDisclaimer: "This is not legal advice or a government decision. Rules and registration dates can change. Never enter your Aadhaar, OTP or bank number in this guide.",
      qAge: "Is the woman applying at least 21 years old?", hAge: "The scheme's guideline says the applicant must be 21 or older.",
      qHead: "Is she the woman treated as the family head on the family card?", hHead: "If a man is named as the head, his wife may be counted. A woman heading her own family, including a widow or transgender person, may also be considered.",
      qState: "Is the family card from Tamil Nadu?", hState: "This is a Tamil Nadu government scheme.",
      qIncome: "Is the family's yearly income below ₹2.5 lakh?", hIncome: "Think about the family's total yearly income. You do not need to type an exact amount here.",
      qLand: "Is the family's land within the scheme's limit?", hLand: "Wetland should be under 5 acres, or dryland under 10 acres. If the family has no agricultural land, choose “Yes”.",
      qPower: "Is household electricity use under 3,600 units a year?", hPower: "You may find the unit count on an electricity bill. If you don't know, choose “Not sure”.",
      qExclude: "Does any of the exclusion rules below apply to the family?", hExclude: "If any one applies, choose “Yes”. If you are unsure, ask an official.",
      qExcludeList: "<ul><li>Government, bank, public-sector, local-body or co-operative employment / pension</li><li>A family member paying income or professional tax</li><li>A car, jeep, tractor or heavy vehicle for personal use</li><li>A business with sales over ₹50 lakh a year that pays GST</li></ul>",
      qAgeName: "Applicant's age", qHeadName: "Family-head rule", qStateName: "Tamil Nadu family card", qIncomeName: "Family income limit", qLandName: "Land limit", qPowerName: "Electricity use", qExcludeName: "Exclusion rules",
      resultGood: "Your answers appear to fit the basic rules.", resultUnsure: "Items to confirm", resultMismatch: "Items to ask an official about",
      fallbackPrivacy: "This app does not save your chat. If Gemini is enabled, your question and recent conversation are sent to Google to generate a reply. Please don't share personal information."
    }
  };

  const MULTI = window.NAMMA_MULTISTATE || { copy: {}, stateGuidance: {}, voiceSamples: {}, artwork: {} };
  Object.entries(MULTI.copy || {}).forEach(([locale, values]) => {
    COPY[locale] = Object.assign({}, COPY.en, COPY[locale] || {}, values);
  });

  const QUESTIONS = {
    ta: [
      { id: "age", q: "qAge", help: "hAge", name: "qAgeName", good: "yes" },
      { id: "head", q: "qHead", help: "hHead", name: "qHeadName", good: "yes" },
      { id: "state", q: "qState", help: "hState", name: "qStateName", good: "yes" },
      { id: "income", q: "qIncome", help: "hIncome", name: "qIncomeName", good: "yes" },
      { id: "land", q: "qLand", help: "hLand", name: "qLandName", good: "yes" },
      { id: "power", q: "qPower", help: "hPower", name: "qPowerName", good: "yes" },
      { id: "exclude", q: "qExclude", help: "hExclude", name: "qExcludeName", extra: "qExcludeList", good: "no" }
    ],
    en: [
      { id: "age", q: "qAge", help: "hAge", name: "qAgeName", good: "yes" },
      { id: "head", q: "qHead", help: "hHead", name: "qHeadName", good: "yes" },
      { id: "state", q: "qState", help: "hState", name: "qStateName", good: "yes" },
      { id: "income", q: "qIncome", help: "hIncome", name: "qIncomeName", good: "yes" },
      { id: "land", q: "qLand", help: "hLand", name: "qLandName", good: "yes" },
      { id: "power", q: "qPower", help: "hPower", name: "qPowerName", good: "yes" },
      { id: "exclude", q: "qExclude", help: "hExclude", name: "qExcludeName", extra: "qExcludeList", good: "no" }
    ]
  };

  let lang = "ta";
  let activeState = "tn";
  let stateCatalog = {};
  let manuallySelectedLanguage = false;
  let chatHistory = [];
  let isBusy = false;
  let recognition = null;
  let isListening = false;
  let micHintTimer = null;
  let speechMode = "device";
  let speechSequence = 0;
  let currentAudio = null;
  let currentAudioUrl = null;
  let deviceVoiceByLanguage = Object.create(null);
  let toastTimer = null;
  let deferredInstallPrompt = null;
  let checkState = { index: 0, answers: {} };
  let apiMode = "guide";
  const supportedLanguages = ["ta", "ml", "kn", "te", "en"];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const t = (key) => (COPY[lang] && COPY[lang][key]) || (COPY.en && COPY.en[key]) || key;
  const currentScheme = () => stateCatalog[activeState] || null;
  const currentDisplay = () => {
    const scheme = currentScheme();
    return scheme && scheme.display ? (scheme.display[lang] || scheme.display.en || scheme.display.ta) : null;
  };
  const dialog = $("#checkDialog");
  const dialogContent = $("#checkDialogContent");
  const chatMessages = $("#chatMessages");
  const messageInput = $("#messageInput");
  const sendButton = $(".send-button");
  const micButton = $("#micButton");
  const aiModeLabel = $("#aiModeLabel");

  function applyLanguage(nextLang) {
    lang = supportedLanguages.includes(nextLang) ? nextLang : "ta";
    document.documentElement.lang = lang === "en" ? "en-IN" : lang;
    const languageSelect = $("#languageSelect");
    if (languageSelect) {
      languageSelect.value = lang;
      languageSelect.setAttribute("aria-label", t("languageLabel"));
    }
    $$('[data-i18n]').forEach((el) => { const value = t(el.dataset.i18n); if (value) el.textContent = value; });
    $$('[data-i18n-html]').forEach((el) => { const value = t(el.dataset.i18nHtml); if (value) el.innerHTML = value; });
    $$('[data-i18n-placeholder]').forEach((el) => { const value = t(el.dataset.i18nPlaceholder); if (value) el.setAttribute("placeholder", value); });
    $(".brand").setAttribute("aria-label", t("brandAria"));
    $(".desktop-nav").setAttribute("aria-label", t("navLabel"));
    $(".hero-visual").setAttribute("aria-label", t("heroImageAria"));
    $("#heroImage").alt = t("heroImageAlt");
    chatMessages.setAttribute("aria-label", t("chatAria"));
    micButton.setAttribute("aria-label", t("micAria"));
    $(".send-button").setAttribute("aria-label", t("sendAria"));
    document.title = t("documentTitle");
    const description = $("meta[name='description']");
    if (description) description.content = t("metaDescription");
    messageInput.value = "";
    resizeInput();
    updateCharCount();
    chatHistory = [];
    renderStateGrid();
    updateStateUI();
    renderChat();
    setAiMode(apiMode);
    if (dialog.open) renderCheck();
    if (recognition) { try { recognition.abort ? recognition.abort() : recognition.stop(); } catch (_) {} }
    recognition = null;
    isListening = false;
    setMicButtonState(false);
    setMicHint(t("voiceHint"));
    stopSpeechPlayback();
    populateDeviceVoicePicker();
    updateVoiceModeUI();
  }

  function showToast(message, ms = 3600) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), ms);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  }

  function stateGuidance() {
    const byLanguage = MULTI.stateGuidance || {};
    const localized = byLanguage[lang] || byLanguage.en || {};
    return localized[activeState] || (byLanguage.en && byLanguage.en[activeState]) || t("fallbackCurrent");
  }

  function renderStateGrid() {
    const grid = $("#stateGrid");
    if (!grid) return;
    grid.replaceChildren();
    const order = ["tn", "kl", "ka", "ap", "tg"];
    order.forEach((id) => {
      const scheme = stateCatalog[id];
      if (!scheme) return;
      const display = scheme.display && (scheme.display[lang] || scheme.display.en || scheme.display.ta) || {};
      const card = document.createElement("article");
      const selected = id === activeState;
      card.className = `state-card${selected ? " is-active" : ""}`;
      card.dataset.state = id;
      card.style.setProperty("--state-accent", scheme.color || "#1c3d35");
      const artwork = (MULTI.artwork && MULTI.artwork[id]) || "";
      card.innerHTML = `
        <div class="state-art" aria-hidden="true">${artwork}</div>
        <div class="state-card-content">
          <div class="state-name-row"><span class="state-code">${escapeHtml(scheme.code || "")}</span><span>${escapeHtml(display.state || scheme.stateName)}</span></div>
          <h3 lang="${escapeHtml(scheme.defaultLanguage || lang)}">${escapeHtml(scheme.schemeNative || scheme.schemeName)}</h3>
          <p class="state-latin">${escapeHtml(scheme.schemeName || "")}</p>
          <p class="state-summary">${escapeHtml(display.summary || scheme.detailLevel || "")}</p>
          <button type="button" class="state-select" data-select-state="${escapeHtml(id)}" aria-pressed="${selected ? "true" : "false"}">${selected ? `<svg aria-hidden="true"><use href="#i-check"/></svg>` : ""}<span>${escapeHtml(selected ? t("stateSelected") : t("stateSelect"))}</span></button>
        </div>`;
      grid.appendChild(card);
    });
  }

  async function loadStateCatalog() {
    try {
      const response = await fetch("/data/schemes.json", { headers: { Accept: "application/json" }, cache: "no-cache" });
      if (!response.ok) throw new Error("Scheme guide unavailable");
      const data = await response.json();
      if (!data || !data.states || typeof data.states !== "object") throw new Error("Invalid scheme data");
      stateCatalog = data.states;
      if (!stateCatalog[activeState]) activeState = Object.keys(stateCatalog)[0] || "tn";
      renderStateGrid();
      updateStateUI();
      renderChat();
    } catch (_) {
      const grid = $("#stateGrid");
      if (grid) grid.innerHTML = `<p class="state-honesty">${escapeHtml(t("stateDataUnavailable"))}</p>`;
    }
  }

  function updateStateUI() {
    const scheme = currentScheme();
    if (!scheme) return;
    const display = currentDisplay() || {};
    const title = $("#heroKicker");
    if (title) {
      title.innerHTML = `<span lang="${escapeHtml(scheme.defaultLanguage || lang)}">${escapeHtml(scheme.schemeNative || scheme.schemeName)}</span> · <span lang="${escapeHtml(document.documentElement.lang)}">${escapeHtml(t("plainLanguageTag"))}</span>`;
    }
    const benefit = $("#benefitAmount");
    if (benefit) benefit.innerHTML = display.benefit || escapeHtml(scheme.schemeName || "");
    const benefitLabel = $("#benefitLabel");
    if (benefitLabel) benefitLabel.textContent = display.benefitLabel || scheme.detailLevel || "";
    const primarySource = Array.isArray(scheme.sources) ? scheme.sources[0] : null;
    const officialButton = $("#officialButton");
    const footerOfficial = $("#footerOfficialLink");
    if (primarySource && officialButton) officialButton.href = primarySource.url;
    if (primarySource && footerOfficial) footerOfficial.href = primarySource.url;
    const sourceIds = [["sourceLinkOne", "sourceNameOne"], ["sourceLinkTwo", "sourceNameTwo"], ["sourceLinkThree", "sourceNameThree"], ["sourceLinkFour", "sourceNameFour"]];
    sourceIds.forEach(([linkId, nameId], index) => {
      const link = document.getElementById(linkId);
      const name = document.getElementById(nameId);
      const source = scheme.sources && scheme.sources[index];
      if (!link || !name) return;
      if (!source) { link.parentElement.hidden = true; return; }
      link.parentElement.hidden = false;
      link.href = source.url;
      name.textContent = source.title;
      link.setAttribute("aria-label", source.title);
    });
    const genericSteps = !(activeState === "tn" && (lang === "ta" || lang === "en"));
    if (genericSteps) {
      const ids = ["stepOneTitle", "stepOneBody", "stepTwoTitle", "stepTwoBody", "stepThreeTitle", "stepThreeBody", "stepSmallprint", "stepsBody", "officialNote"];
      const values = [t("stepOneTitle"), t("stepOneBody"), t("stepTwoTitle"), stateGuidance(), t("stepThreeTitle"), t("stepThreeBody"), t("stepSmallprint"), t("stepsBody"), t("officialNote")];
      ids.forEach((id, index) => { const element = document.getElementById(id); if (element) element.textContent = values[index]; });
    }
    renderStateGrid();
  }

  function selectState(stateId) {
    const scheme = stateCatalog[stateId];
    if (!scheme) return;
    activeState = stateId;
    if (!manuallySelectedLanguage && scheme.defaultLanguage && supportedLanguages.includes(scheme.defaultLanguage)) {
      applyLanguage(scheme.defaultLanguage);
      return;
    }
    chatHistory = [];
    renderStateGrid();
    updateStateUI();
    renderChat();
    if (dialog.open) renderCheck();
  }

  function setAiMode(mode) {
    apiMode = mode;
    aiModeLabel.textContent = mode === "gemini" ? t("aiModeGemini") : mode === "error" ? t("aiModeError") : t("aiModeGuide");
    const status = aiModeLabel.closest(".assistant-status");
    status.classList.toggle("status-ai", mode === "gemini");
    status.classList.toggle("status-guide", mode !== "gemini");
  }

  async function detectApiMode() {
    try {
      const response = await fetch("/api/chat", { method: "GET", headers: { "Accept": "application/json" }, cache: "no-store" });
      if (!response.ok) throw new Error("API unavailable");
      const data = await response.json();
      setAiMode(data.mode === "gemini" ? "gemini" : "guide");
    } catch (_) {
      setAiMode("guide");
    }
  }

  function renderChat() {
    chatMessages.replaceChildren();
    const scheme = currentScheme();
    const welcome = t("assistantGreeting").replace("{scheme}", scheme ? scheme.schemeName : "public services");
    if (!chatHistory.length) {
      appendMessage("assistant", welcome, apiMode === "gemini" ? "gemini" : "guide", false);
    } else {
      chatHistory.forEach((message) => appendMessage(message.role, message.text, message.source || "", false));
    }
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendMessage(role, text, source = "", scroll = true) {
    const article = document.createElement("article");
    article.className = `message ${role === "user" ? "message-user" : "message-assistant"}`;
    const bubble = document.createElement("div");
    bubble.className = "message-bubble";
    bubble.textContent = text;
    article.appendChild(bubble);
    const tools = document.createElement("div");
    tools.className = "message-tools";
    const meta = document.createElement("span");
    meta.className = "message-meta";
    meta.textContent = role === "user" ? t("userMessageMeta") : source === "gemini" ? t("aiMessageMeta") : t("guideMessageMeta");
    tools.appendChild(meta);
    const speak = document.createElement("button");
    speak.className = "speak-message";
    speak.type = "button";
    speak.setAttribute("aria-label", t(role === "user" ? "listenQuestion" : "listenAnswer"));
    speak.title = t(role === "user" ? "listenQuestionTitle" : "listenAnswerTitle");
    speak.innerHTML = '<svg aria-hidden="true"><use href="#i-volume"/></svg>';
    speak.addEventListener("click", () => speakText(text, lang));
    tools.appendChild(speak);
    article.appendChild(tools);
    chatMessages.appendChild(article);
    if (scroll) chatMessages.scrollTop = chatMessages.scrollHeight;
    return article;
  }

  function addTyping() {
    const item = document.createElement("div");
    item.className = "message message-assistant";
    item.id = "typingMessage";
    const bubble = document.createElement("div");
    bubble.className = "message-bubble typing-bubble";
    bubble.setAttribute("aria-label", t("typingLabel"));
    bubble.innerHTML = "<i></i><i></i><i></i>";
    item.appendChild(bubble);
    chatMessages.appendChild(item);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function detectIntent(text) {
    const value = String(text || "").toLocaleLowerCase();
    if (/status|application status|track|விண்ணப்ப நிலை|நிலைமை|நிலை\b|பணம் வரவில்ல|வரவில்லை|நிராகரிக்க/.test(value)) return "Status";
    if (/document|paper|proof|ஆவணம்|ஆதார்|வங்கி கணக்கு|குடும்ப அட்டை/.test(value)) return "Docs";
    if (/apply|application|register|விண்ணப்ப|பதிவு|எப்படி செய்ய|எங்கே செய்ய/.test(value)) return "Apply";
    if (/eligible|eligibility|qualify|who can|தகுதி|யார் விண்ணப்ப|யார் பெற|யாருக்கு கிடைக்கும்/.test(value)) return "Eligibility";
    if (/what is|what's|scheme|amount|how much|benefit|திட்டம் என்ன|என்ன திட்டம்|எவ்வளவு|தொகை|ரூபாய்|ஆயிரம்/.test(value)) return "What";
    return "Other";
  }

  function localFallback(text, intent) {
    const key = intent || detectIntent(text);
    const normalized = key.toLowerCase();
    if (activeState !== "tn" || (lang !== "ta" && lang !== "en")) return `${stateGuidance()} ${t("fallbackCurrent")}`;
    if (normalized === "what") return t("fallbackWhat");
    if (normalized === "eligibility") return t("fallbackEligibility");
    if (normalized === "apply") return t("fallbackApply");
    if (normalized === "docs") return t("fallbackDocs");
    if (normalized === "status") return t("fallbackStatus");
    return t("fallbackOther");
  }

  function asciiDigits(text) {
    return String(text || "").replace(/[\u0660-\u0669\u06f0-\u06f9\u0966-\u096f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f]/g, (digit) => {
      const code = digit.charCodeAt(0);
      const base = code >= 0x0d66 ? 0x0d66 : code >= 0x0ce6 ? 0x0ce6 : code >= 0x0c66 ? 0x0c66 : code >= 0x0be6 ? 0x0be6 : code >= 0x0966 ? 0x0966 : code >= 0x06f0 ? 0x06f0 : 0x0660;
      return String(code - base);
    });
  }

  function looksSensitive(text) {
    const normalized = asciiDigits(text);
    const compact = normalized.replace(/[\s().-]/g, "");
    const longNumber = /\d{10,18}/.test(compact);
    const mentionsOtp = /\bOTP\b|ஒரு\s*முறை\s*கடவுச்சொல்|ஒடிபி|ఓటీపీ|ಒಟಿಪಿ|ഒടിപി/i.test(normalized);
    const shortCodeWithOtp = mentionsOtp && /(?:\d[\s-]?){4,8}/.test(normalized);
    const mentionsAadhaarAndNumber = /(aadhaar|aadhar|ஆதார்|ఆధార్|ಆಧಾರ್|ആധാർ)/i.test(normalized) && /\d{4,}/.test(compact);
    return longNumber || shortCodeWithOtp || mentionsAadhaarAndNumber;
  }

  async function sendMessage(rawText, intent, fromVoice = false) {
    const text = String(rawText || "").trim();
    if (!text) { showToast(t("emptyMessage")); return; }
    if (isBusy) return;
    if (looksSensitive(text)) { showToast(t("sensitiveMessage"), 5000); messageInput.value = ""; updateCharCount(); return; }
    if (recognition) {
      const activeRecognition = recognition;
      recognition = null;
      try { activeRecognition.abort ? activeRecognition.abort() : activeRecognition.stop(); } catch (_) {}
      setMicButtonState(false);
    }

    if (apiMode !== "gemini") {
      chatHistory.push({ role: "user", text });
      appendMessage("user", text, "", true);
      messageInput.value = "";
      resizeInput();
      updateCharCount();
      const localReply = localFallback(text, intent);
      chatHistory.push({ role: "assistant", text: localReply, source: "guide" });
      appendMessage("assistant", localReply, "guide", true);
      if (fromVoice) speakText(localReply, lang);
      return;
    }

    chatHistory.push({ role: "user", text });
    appendMessage("user", text, "", true);
    messageInput.value = "";
    resizeInput();
    updateCharCount();
    isBusy = true;
    sendButton.disabled = true;
    micButton.disabled = true;
    addTyping();

    let reply = "";
    let source = "guide";
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 24000);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ lang, state: activeState, messages: chatHistory.slice(-8).map(({ role, text: messageText }) => ({ role, text: messageText })) }),
        signal: controller.signal
      });
      clearTimeout(timeout);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 400 && errorData.error === "sensitive_number_blocked") {
          if (chatHistory.length && chatHistory[chatHistory.length - 1].role === "user") chatHistory.pop();
          const userNodes = $$(".message-user", chatMessages);
          if (userNodes.length) userNodes[userNodes.length - 1].remove();
          const blocked = new Error("Sensitive number blocked");
          blocked.sensitive = true;
          throw blocked;
        }
        throw new Error(`Guide API returned ${response.status}`);
      }
      const data = await response.json();
      if (!data.reply || typeof data.reply !== "string") throw new Error("No reply");
      reply = data.reply.trim();
      source = data.mode === "gemini" ? "gemini" : "guide";
      setAiMode(source === "gemini" ? "gemini" : "guide");
    } catch (error) {
      if (error && error.sensitive) {
        reply = t("sensitiveMessage");
        source = "guide";
        setAiMode("guide");
      } else {
        reply = localFallback(text, intent);
        source = "guide";
        if (apiMode === "gemini") setAiMode("error");
        else setAiMode("guide");
      }
    } finally {
      isBusy = false;
      sendButton.disabled = false;
      micButton.disabled = false;
      const typing = $("#typingMessage");
      if (typing) typing.remove();
    }

    chatHistory.push({ role: "assistant", text: reply, source });
    appendMessage("assistant", reply, source, true);
    if (source === "guide" && apiMode === "error") showToast(t("msgSendError"), 4200);
    if (fromVoice) speakText(reply, lang);
  }

  function resizeInput() {
    messageInput.style.height = "auto";
    messageInput.style.height = `${Math.min(messageInput.scrollHeight, 100)}px`;
  }

  function updateCharCount() {
    const length = messageInput.value.length;
    $("#charCount").textContent = lang === "ta" ? `${length} / 500` : `${length} / 500`;
  }

  function speechLocale(language = lang) {
    return ({ ta: "ta-IN", ml: "ml-IN", kn: "kn-IN", te: "te-IN", en: "en-IN" })[language] || "en-IN";
  }

  function setMicHint(message, resetAfter = 0) {
    const hint = $("#voiceHint");
    if (hint) hint.textContent = message;
    clearTimeout(micHintTimer);
    if (resetAfter > 0) micHintTimer = setTimeout(() => { if (hint) hint.textContent = t("voiceHint"); }, resetAfter);
  }

  function setMicButtonState(active) {
    if (!micButton) return;
    isListening = Boolean(active);
    micButton.classList.toggle("is-listening", isListening);
    micButton.setAttribute("aria-pressed", String(isListening));
    micButton.setAttribute("aria-label", isListening ? t("stopListening") : t("micAria"));
    const label = $("[data-i18n='micButton']", micButton);
    if (label) label.textContent = isListening ? t("stopListening") : t("micButton");
  }

  function stopSpeechPlayback() {
    speechSequence += 1;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = "";
      currentAudio = null;
    }
    if (currentAudioUrl) {
      URL.revokeObjectURL(currentAudioUrl);
      currentAudioUrl = null;
    }
    return speechSequence;
  }

  function allDeviceVoices() {
    return window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  }

  function deviceVoiceKey(voice) {
    return `${voice.voiceURI || voice.name}|${voice.lang}`;
  }

  function matchingDeviceVoices(language = lang) {
    const locale = speechLocale(language).toLowerCase();
    const prefix = locale.split("-")[0];
    return allDeviceVoices().filter((voice) => String(voice.lang || "").toLowerCase().split("-")[0] === prefix).sort((a, b) => {
      const exactA = String(a.lang || "").toLowerCase() === locale ? 0 : 1;
      const exactB = String(b.lang || "").toLowerCase() === locale ? 0 : 1;
      if (exactA !== exactB) return exactA - exactB;
      const preferredA = /natural|neural|enhanced|premium/i.test(a.name || "") ? 0 : 1;
      const preferredB = /natural|neural|enhanced|premium/i.test(b.name || "") ? 0 : 1;
      return preferredA - preferredB || String(a.name || "").localeCompare(String(b.name || ""));
    });
  }

  function populateDeviceVoicePicker() {
    const pickerWrap = $("#deviceVoicePickerWrap");
    const picker = $("#deviceVoiceSelect");
    if (!pickerWrap || !picker) return;
    const voices = matchingDeviceVoices(lang);
    picker.replaceChildren();
    const automatic = document.createElement("option");
    automatic.value = "";
    automatic.textContent = t("voiceAuto");
    picker.appendChild(automatic);
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = deviceVoiceKey(voice);
      option.textContent = `${voice.name || voice.lang} (${voice.lang})`;
      picker.appendChild(option);
    });
    const preferred = deviceVoiceByLanguage[lang];
    picker.value = preferred && voices.some((voice) => deviceVoiceKey(voice) === preferred) ? preferred : "";
    pickerWrap.hidden = voices.length === 0;
    updateVoiceModeUI();
  }

  function updateVoiceModeUI() {
    const status = $("#voiceModeStatus");
    const toggleWrap = $("#deviceVoiceToggleWrap");
    const useDevice = $("#useDeviceVoice");
    if (!status) return;
    const useOnline = speechMode === "gemini" && navigator.onLine && !(useDevice && useDevice.checked);
    if (toggleWrap) toggleWrap.hidden = speechMode !== "gemini";
    if (useOnline) status.textContent = t("voiceModeOnline");
    else status.textContent = matchingDeviceVoices(lang).length ? t("voiceModeDevice") : t("voiceModeMissing");
  }

  async function detectSpeechMode() {
    try {
      const response = await fetch("/api/speech", { method: "GET", headers: { Accept: "application/json" }, cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      speechMode = response.ok && data.mode === "gemini" ? "gemini" : "device";
    } catch (_) {
      speechMode = "device";
    }
    updateVoiceModeUI();
  }

  function waitForDeviceVoices(timeoutMs = 1300) {
    const synthesis = window.speechSynthesis;
    if (!synthesis) return Promise.resolve([]);
    const initial = synthesis.getVoices();
    if (initial.length) return Promise.resolve(initial);
    return new Promise((resolve) => {
      let finished = false;
      const done = () => {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        if (synthesis.removeEventListener) synthesis.removeEventListener("voiceschanged", done);
        resolve(synthesis.getVoices());
      };
      const timer = setTimeout(done, timeoutMs);
      if (synthesis.addEventListener) synthesis.addEventListener("voiceschanged", done, { once: true });
    });
  }

  async function speakWithDeviceVoice(text, language, sequence) {
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      showToast(t("speechUnavailable"));
      return false;
    }
    await waitForDeviceVoices();
    if (sequence !== speechSequence) return false;
    const voices = matchingDeviceVoices(language);
    if (!voices.length) {
      showToast(t("voiceMissing"), 5000);
      updateVoiceModeUI();
      return false;
    }
    const selectedKey = deviceVoiceByLanguage[language];
    const voice = voices.find((item) => deviceVoiceKey(item) === selectedKey) || voices[0];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speechLocale(language);
    utterance.voice = voice;
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onerror = (event) => {
      if (sequence === speechSequence && event.error !== "canceled" && event.error !== "interrupted") showToast(t("speechUnavailable"));
    };
    try {
      window.speechSynthesis.speak(utterance);
      return true;
    } catch (_) {
      showToast(t("speechUnavailable"));
      return false;
    }
  }

  function normalizeSpeechText(value) {
    return String(value)
      .replace(/<[^>]*>/g, " ")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/(^|\n)\s*[-*•]\s+/g, "$1")
      .replace(/[`*_#>]/g, " ")
      .replace(/\r/g, "")
      .replace(/\n+/g, ". ")
      .replace(/[ \t]+/g, " ")
      .trim();
  }

  function playVoiceSample(language) {
    if (!supportedLanguages.includes(language)) { showToast(t("sampleUnavailable")); return; }
    const sequence = stopSpeechPlayback();
    const audio = new Audio(`/assets/voice-sample-${language}.mp3`);
    audio.preload = "none";
    currentAudio = audio;
    currentAudioUrl = null;
    const cleanup = () => {
      if (currentAudio === audio) currentAudio = null;
    };
    audio.onended = cleanup;
    audio.onerror = () => {
      cleanup();
      if (sequence === speechSequence) showToast(t("sampleUnavailable"), 4500);
    };
    audio.play().catch(() => {
      cleanup();
      if (sequence === speechSequence) showToast(t("sampleUnavailable"), 4500);
    });
  }

  async function speakText(text, language = lang) {
    const sequence = stopSpeechPlayback();
    const spokenText = normalizeSpeechText(text);
    if (!spokenText) { showToast(t("speechUnavailable")); return; }
    const useDevice = $("#useDeviceVoice");
    const useOnline = speechMode === "gemini" && !(useDevice && useDevice.checked) && navigator.onLine;
    let onlineFailed = false;
    if (useOnline) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 25_000);
      let createdAudio = null;
      let createdUrl = null;
      try {
        const response = await fetch("/api/speech", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "audio/wav" },
          body: JSON.stringify({ lang: language, text: spokenText }),
          signal: controller.signal
        });
        if (!response.ok) throw new Error("online speech unavailable");
        const blob = await response.blob();
        if (!blob.size || sequence !== speechSequence) return;
        createdUrl = URL.createObjectURL(blob);
        createdAudio = new Audio(createdUrl);
        currentAudio = createdAudio;
        currentAudioUrl = createdUrl;
        const cleanup = () => {
          if (currentAudio === createdAudio) currentAudio = null;
          if (currentAudioUrl === createdUrl) currentAudioUrl = null;
          URL.revokeObjectURL(createdUrl);
        };
        createdAudio.onended = cleanup;
        createdAudio.onerror = cleanup;
        await createdAudio.play();
        clearTimeout(timeout);
        return;
      } catch (_) {
        if (createdAudio) { createdAudio.pause(); createdAudio.src = ""; }
        if (currentAudio === createdAudio) currentAudio = null;
        if (createdUrl) URL.revokeObjectURL(createdUrl);
        if (currentAudioUrl === createdUrl) currentAudioUrl = null;
        onlineFailed = true;
      } finally {
        clearTimeout(timeout);
      }
    }
    if (onlineFailed) showToast(t("voiceFallback"), 2400);
    await speakWithDeviceVoice(spokenText, language, sequence);
  }

  function openCheck() {
    checkState = { index: 0, answers: {} };
    renderCheck();
    if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
  }

  function closeCheck() {
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
    checkState = { index: 0, answers: {} };
  }

  function renderStateNotice() {
    const scheme = currentScheme();
    if (!scheme) return;
    const display = currentDisplay() || {};
    const source = scheme.sources && scheme.sources[0];
    const stateName = display.state || scheme.stateName;
    dialogContent.innerHTML = `
      <div class="state-notice">
        <div class="dialog-top"><div class="dialog-top-left"><span class="dialog-step-mark">!</span><span>${escapeHtml(t("stateNoticeKicker"))}</span></div><button class="icon-button" type="button" data-dialog-action="close" aria-label="${escapeHtml(t("stateNoticeClose"))}"><svg><use href="#i-close"/></svg></button></div>
        <div class="state-notice-panel" style="--state-accent:${escapeHtml(scheme.color || "#c95743")}">
          <p class="dialog-kicker">${escapeHtml(stateName)} · ${escapeHtml(scheme.schemeName)}</p>
          <h2 id="checkDialogTitle">${escapeHtml(t("stateNoticeTitle"))}</h2>
          <p>${escapeHtml(t("stateNoticeBody"))}</p>
          <p class="state-notice-fact">${escapeHtml(stateGuidance())}</p>
          <p>${escapeHtml(t("stateNoticeNext"))}</p>
          <div class="state-notice-actions">
            ${source ? `<a class="button button-primary" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer" data-dialog-action="close">${escapeHtml(t("stateNoticeOfficial"))}<svg><use href="#i-external"/></svg></a>` : ""}
            <button class="button button-quiet" type="button" data-dialog-action="ask">${escapeHtml(t("stateNoticeAsk"))}<svg><use href="#i-arrow"/></svg></button>
          </div>
          <p class="state-notice-source"><svg><use href="#i-shield"/></svg><span>${escapeHtml(source ? source.title : t("sourceHome"))}</span></p>
        </div>
      </div>`;
  }

  function renderCheck() {
    if (activeState !== "tn" || !QUESTIONS[lang]) { renderStateNotice(); return; }
    const questions = QUESTIONS[lang];
    const total = questions.length;
    if (checkState.index >= total) { renderResult(); return; }
    const q = questions[checkState.index];
    const progress = Math.round(((checkState.index + 1) / total) * 100);
    const answers = [
      ["yes", t("answerYes"), t("answerYesHint")],
      ["no", t("answerNo"), t("answerNoHint")],
      ["unsure", t("answerUnsure"), t("answerUnsureHint")]
    ];
    dialogContent.innerHTML = `
      <div class="check-inner">
        <div class="dialog-top"><div class="dialog-top-left"><span class="dialog-step-mark">${String(checkState.index + 1).padStart(2, "0")}</span><span>${t("checkKicker")}</span></div><button class="icon-button" type="button" data-dialog-action="close" aria-label="${t("checkClose")}"><svg><use href="#i-close"/></svg></button></div>
        <div class="dialog-progress" aria-hidden="true"><span style="width:${progress}%"></span></div>
        <p class="dialog-kicker">${t("questionWord")} ${checkState.index + 1} ${t("ofWord")} ${total}</p>
        <div class="dialog-question-row"><h2 class="dialog-question" id="checkDialogTitle">${t(q.q)}</h2><button type="button" class="read-question" data-speak-question="true" aria-label="${t("qReadAria")}" title="${t("qRead")}"><svg><use href="#i-volume"/></svg></button></div>
        <p class="dialog-help">${t(q.help)}</p>
        ${q.extra ? `<div class="dialog-extra"><strong>${t("qExtraTitle")}</strong>${t(q.extra)}</div>` : ""}
        <div class="answer-list" role="group" aria-label="${t("answerYes")} / ${t("answerNo")} / ${t("answerUnsure")}">
          ${answers.map(([value, label, hint]) => `<button type="button" class="answer-option" data-answer="${value}" aria-pressed="${checkState.answers[q.id] === value ? "true" : "false"}"><span class="answer-marker">${checkState.answers[q.id] === value ? '<svg><use href="#i-check"/></svg>' : ""}</span><span>${label}<small style="display:block;color:#8b8f88;font-size:10px;font-weight:450;line-height:1.5">${hint}</small></span></button>`).join("")}
        </div>
        <div class="dialog-controls"><button class="dialog-back" type="button" data-dialog-action="back" ${checkState.index === 0 ? "disabled" : ""}><svg style="transform:rotate(180deg)"><use href="#i-arrow"/></svg>${t("checkBack")}</button><button class="dialog-restart" type="button" data-dialog-action="restart">${t("checkRestart")}</button></div>
      </div>`;
  }

  function renderResult() {
    const questions = QUESTIONS[lang];
    const officialUrl = currentScheme() && currentScheme().sources && currentScheme().sources[0] ? currentScheme().sources[0].url : "https://kmut.tn.gov.in/about-kmut.html";
    const mismatch = questions.filter((q) => checkState.answers[q.id] !== "unsure" && checkState.answers[q.id] !== q.good);
    const unknown = questions.filter((q) => checkState.answers[q.id] === "unsure");
    const status = mismatch.length ? "caution" : unknown.length ? "review" : "match";
    const title = t(status === "match" ? "resultMatchTitle" : status === "review" ? "resultReviewTitle" : "resultCautionTitle");
    const body = t(status === "match" ? "resultMatchBody" : status === "review" ? "resultReviewBody" : "resultCautionBody");
    const icon = status === "match" ? "i-check" : status === "review" ? "i-ear" : "i-spark";
    const items = status === "match" ? [t("resultNextMatch")] : status === "review" ? unknown.map((q) => t(q.name)) : mismatch.map((q) => t(q.name));
    const listLabel = status === "match" ? t("resultKnownLabel") : status === "review" ? t("resultUnknownLabel") : t("resultMismatchLabel");
    dialogContent.innerHTML = `
      <div class="check-inner">
        <div class="dialog-top"><div class="dialog-top-left"><span class="dialog-step-mark">✓</span><span>${t("checkKicker")}</span></div><button class="icon-button" type="button" data-dialog-action="close" aria-label="${t("checkClose")}"><svg><use href="#i-close"/></svg></button></div>
        <div class="dialog-result">
          <span class="result-icon ${status === "match" ? "result-check" : status === "review" ? "result-review" : "result-caution"}"><svg><use href="#${icon}"/></svg></span>
          <h2 class="result-title" id="checkDialogTitle">${title}</h2>
          <p class="result-copy">${body}</p>
          <div class="result-list"><strong>${listLabel}</strong><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>${status !== "match" ? `<p style="margin:9px 0 0">${status === "review" ? t("resultNextReview") : t("resultNextCaution")}</p>` : ""}</div>
          <div class="result-actions"><button class="button button-primary" type="button" data-dialog-action="steps">${t("resultSteps")}<svg><use href="#i-arrow"/></svg></button><a class="button button-quiet" href="${escapeHtml(officialUrl)}" target="_blank" rel="noopener noreferrer" data-dialog-action="close">${t("resultOfficial")}<svg><use href="#i-external"/></svg></a></div>
          <p class="result-disclaimer">${t("resultDisclaimer")}</p>
          <button type="button" class="dialog-restart" data-dialog-action="restart" style="margin-top:12px">${t("resultRestart")}</button>
        </div>
      </div>`;
  }

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) { closeCheck(); return; }
    const answer = event.target.closest("[data-answer]");
    if (answer) {
      const q = QUESTIONS[lang][checkState.index];
      checkState.answers[q.id] = answer.dataset.answer;
      checkState.index += 1;
      renderCheck();
      return;
    }
    if (event.target.closest("[data-speak-question]")) {
      const q = QUESTIONS[lang][checkState.index];
      speakText(`${t(q.q)} ${t(q.help)}`);
      return;
    }
    const actionElement = event.target.closest("[data-dialog-action]");
    if (!actionElement) return;
    const action = actionElement.dataset.dialogAction;
    if (action === "close") closeCheck();
    if (action === "restart") { checkState = { index: 0, answers: {} }; renderCheck(); }
    if (action === "back") { checkState.index = Math.max(0, checkState.index - 1); renderCheck(); }
    if (action === "steps") { closeCheck(); setTimeout(() => $("#steps").scrollIntoView({ behavior: "smooth" }), 60); }
    if (action === "ask") {
      closeCheck();
      messageInput.value = t("stateAskPrompt");
      resizeInput();
      updateCharCount();
      setTimeout(() => { $("#ask").scrollIntoView({ behavior: "smooth" }); messageInput.focus(); }, 60);
    }
  });
  dialog.addEventListener("close", () => { checkState = { index: 0, answers: {} }; });

  function initSpeechRecognition() {
    if (recognition && !isListening) return;
    if (isListening && recognition) {
      try { recognition.stop(); } catch (_) {}
      setMicButtonState(false);
      setMicHint(t("voiceHint"));
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setMicHint(t("micUnsupported"), 6500);
      showToast(t("micUnsupported"), 5200);
      return;
    }
    const isLocalhost = ["localhost", "127.0.0.1", "::1"].includes(location.hostname);
    if (!window.isSecureContext && !isLocalhost) {
      setMicHint(t("micNeedsHttps"), 6500);
      showToast(t("micNeedsHttps"), 5200);
      return;
    }
    const instance = new SpeechRecognition();
    recognition = instance;
    instance.lang = speechLocale(lang);
    instance.interimResults = true;
    instance.maxAlternatives = 1;
    instance.continuous = false;
    let finalTranscript = "";
    instance.onstart = () => {
      if (recognition !== instance) return;
      setMicButtonState(true);
      setMicHint(t("listeningHint"));
      showToast(t("listeningNow"), 1800);
    };
    instance.onresult = (event) => {
      if (recognition !== instance) return;
      let interim = "";
      for (let index = event.resultIndex || 0; index < event.results.length; index += 1) {
        const result = event.results[index];
        const transcript = result && result[0] ? String(result[0].transcript || "").trim() : "";
        if (!transcript) continue;
        if (result.isFinal) finalTranscript = transcript;
        else interim = transcript;
      }
      if (finalTranscript) {
        const transcript = finalTranscript;
        finalTranscript = "";
        setMicHint(t("micTranscript"), 5000);
        sendMessage(transcript, undefined, true);
      } else if (interim) {
        setMicHint(`${t("listeningHint")} “${interim}”`);
      }
    };
    instance.onerror = (event) => {
      if (recognition !== instance || !event) return;
      let message = "";
      if (event.error === "not-allowed" || event.error === "service-not-allowed") message = t("micDenied");
      else if (event.error === "no-speech") message = t("micNoSpeech");
      else if (event.error === "audio-capture") message = t("micNoInput");
      else if (event.error === "network") message = t("micNetwork");
      else if (event.error === "language-not-supported") message = t("micLanguageUnsupported");
      else if (event.error !== "aborted") message = t("micError");
      if (message) {
        setMicHint(message, 7000);
        showToast(message, 5200);
      }
    };
    instance.onend = () => {
      if (recognition !== instance) return;
      recognition = null;
      setMicButtonState(false);
    };
    try {
      instance.start();
    } catch (_) {
      recognition = null;
      setMicButtonState(false);
      setMicHint(t("micError"), 6500);
      showToast(t("micError"), 5200);
    }
  }

  $("#languageSelect").addEventListener("change", (event) => {
    manuallySelectedLanguage = true;
    applyLanguage(event.target.value);
  });
  $("#stateGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-select-state]");
    if (button) selectState(button.dataset.selectState);
  });
  $("#startCheck").addEventListener("click", openCheck);
  $("#cardStartCheck").addEventListener("click", openCheck);
  $("#resetChat").addEventListener("click", () => { chatHistory = []; renderChat(); messageInput.focus(); });
  $("#chatForm").addEventListener("submit", (event) => { event.preventDefault(); sendMessage(messageInput.value); });
  messageInput.addEventListener("input", () => { resizeInput(); updateCharCount(); });
  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey && !event.isComposing) { event.preventDefault(); $("#chatForm").requestSubmit(); }
  });
  micButton.addEventListener("click", initSpeechRecognition);
  $("#useDeviceVoice").addEventListener("change", updateVoiceModeUI);
  $("#deviceVoiceSelect").addEventListener("change", (event) => {
    if (event.target.value) deviceVoiceByLanguage[lang] = event.target.value;
    else delete deviceVoiceByLanguage[lang];
  });
  $$(".suggestion").forEach((button) => button.addEventListener("click", () => {
    const prompt = button.getAttribute(`data-prompt-${lang}`) || button.dataset.promptEn || button.dataset.promptTa;
    if (prompt) sendMessage(prompt, button.dataset.intent);
  }));
  $$(".voice-prompt").forEach((button) => button.addEventListener("click", () => {
    const prompt = button.dataset.prompt;
    const promptLanguage = button.dataset.promptLang;
    if (!prompt) return;
    if (promptLanguage && supportedLanguages.includes(promptLanguage) && promptLanguage !== lang) {
      manuallySelectedLanguage = true;
      applyLanguage(promptLanguage);
    }
    $("#ask").scrollIntoView({ behavior: "smooth" });
    sendMessage(prompt);
  }));
  $$(".voice-play").forEach((button) => button.addEventListener("click", () => {
    playVoiceSample(button.dataset.guideLang || lang);
  }));

  window.addEventListener("online", () => { $("#networkBanner").hidden = true; detectApiMode(); detectSpeechMode(); });
  window.addEventListener("offline", () => { $("#networkBanner").hidden = false; updateVoiceModeUI(); });
  if (!navigator.onLine) $("#networkBanner").hidden = false;

  const installButton = $("#installButton");
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    installButton.hidden = false;
  });
  installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installButton.hidden = true;
  });
  window.addEventListener("appinstalled", () => { installButton.hidden = true; });

  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
  }

  if (window.speechSynthesis) {
    if (window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener("voiceschanged", populateDeviceVoicePicker);
    else window.speechSynthesis.onvoiceschanged = populateDeviceVoicePicker;
  }
  applyLanguage("ta");
  loadStateCatalog();
  detectApiMode();
  detectSpeechMode();
})();
