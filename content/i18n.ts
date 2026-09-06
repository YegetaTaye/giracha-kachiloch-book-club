export type Lang = "am" | "en";

export const dictionary = {
  am: {
    nav: { home: "መግቢያ", guests: "ገጣሚያን እና ደራሲያን", books: "መጽሐፍት" },
    hero: {
      cta: "ቀጣዩን ምሽት ይከታተሉ",
    },
    nextGathering: {
      eyebrow: "ቀጣዩ ስብሰባ",
      notify: "አሳውቁኝ",
    },
    about: {
      eyebrow: "ስለ እኛ",
      heading: "ሥነ ሥርዓቱ",
      origin:
        "ግራጫ ቃጭሎች ግጥም፣ ሙዚቃ እና ቡና በአንድ ላይ የሚያገናኝ ምሽት ነው። ሁሉም ነገር የተጀመረው ቀላል ጥያቄ ይዞ ነው፦ ታሪኮቻችንን በሚገባ ልናከብርበት የምንችለው ቦታ የት ነው? መልሱ የቡና ማዕድ ሆነ — በዙሪያው ግጥም የሚነበብበት፣ ጊታር የሚደመጥበት፣ ቃላት ልክ እንደ ጭስ ወደ ላይ የሚወጡበት።",
      programHeading: "የምሽቱ ፕሮግራም",
      programIntro: "እያንዳንዱ ምሽት ሦስት ክፍሎችን ይይዛል፦",
      segments: [
        {
          key: "readings",
          title: "ንባብ እና ውይይት",
          body: "እንግዳ ደራሲያን ስራቸውን ያካፍላሉ፣ ከተሰብሳቢው ጋር ቀጥታ ውይይት ይደረጋል።",
        },
        {
          key: "poetry",
          title: "ግጥም",
          body: "ገጣሚዎች ስንኞቻቸውን ጮክ ብለው ያነባሉ፤ ቃላቱ በክፍሉ ውስጥ ይሰራጫሉ።",
        },
        {
          key: "acoustic",
          title: "አኮስቲክ ሙዚቃ",
          body: "ጊታር በንባቦች መካከል ይደመጣል፣ ምሽቱን በሙዚቃ ያሞቀዋል።",
        },
      ],
    },
    pastNights: {
      eyebrow: "ከመዝገብ ቤታችን",
      heading: "ያለፉ ምሽቶች",
      seeAll: "ሁሉንም ይመልከቱ",
    },
    books: {
      eyebrow: "ከመጽሐፍ መደርደሪያችን",
      heading: "በእጃችን ያሉ መጽሐፍት",
      seeAll: "ሁሉንም መጽሐፍት ይመልከቱ",
      whereToFind: "የት ማግኘት እንደሚቻል",
    },
    community: {
      eyebrow: "ተቀላቀሉን",
      heading: "ማኅበረሰቡን ይቀላቀሉ",
      body: "ስለ ቀጣዩ ስብሰባ ለማወቅ ኢሜይልዎን ይተውልን። ምንም ተጨማሪ ቅጽ የለም — ቦታ እና ሰዓት ብቻ እናሳውቆታለን።",
      emailPlaceholder: "ኢሜይል አድራሻዎ",
      submit: "ተመዝገቡ",
      follow: "ተከተሉን",
    },
    contact: {
      eyebrow: "ያግኙን",
      heading: "እንነጋገር",
      intro: "ጥያቄ አለዎት? መጽሐፍ ይዘው ይምጡ ወይም በኢሜይል ይጻፉልን — ሁለቱም ደስ ይለናል።",
      emailLabel: "ኢሜይል",
      pressNote: "ለፕሬስ እና ለአጋርነት ጥያቄዎች፣ በኢሜይል ያግኙን።",
      addressLabel: "አድራሻ",
      directions: "አቅጣጫ ያግኙ",
      mapCaption: "ካርታ ላይ ይመልከቱ",
    },
    guestsPage: {
      eyebrow: "ማኅበረሰባችን",
      heading: "ገጣሚያን እና ደራሲያን",
      intro:
        "በግራጫ ቃጭሎች ምሽቶች ላይ የተገኙ ገጣሚያን፣ ደራሲያን እና ጋዜጠኞች — ቃላቶቻቸውን ካካፈሉን መካከል ጥቂቶቹ።",
    },
    booksPage: {
      eyebrow: "የመጽሐፍ መደርደሪያችን",
      heading: "መጽሐፍት",
      intro: "ክለቡ በእጁ ያሉትን መጽሐፍት በየዘርፋቸው ይመልከቱ።",
    },
    footer: {
      location: "ቢሾፍቱ፣ ኢትዮጵያ",
      rights: "ሁሉም መብቶች የተጠበቁ ናቸው።",
    },
    langToggle: "English",
  },
  en: {
    nav: { home: "Home", guests: "Writers & Poets", books: "Books" },
    hero: {
      cta: "Follow the next gathering",
    },
    nextGathering: {
      eyebrow: "Next Gathering",
      notify: "Get notified",
    },
    about: {
      eyebrow: "About",
      heading: "The Ceremony",
      origin:
        "Gracha Book Club is a night that brings poetry, live music, and coffee to the same table. It began with a simple question: where can our stories be given the room they deserve? The answer became a coffee gathering — poetry read aloud around it, a guitar humming underneath, words rising like steam.",
      programHeading: "The Program",
      programIntro: "Every night moves through three parts:",
      segments: [
        {
          key: "readings",
          title: "Readings & Discussion",
          body: "Guest authors share their work and open the floor to the room.",
        },
        {
          key: "poetry",
          title: "Poetry",
          body: "Poets read their verses aloud, letting the words fill the room.",
        },
        {
          key: "acoustic",
          title: "Acoustic Music",
          body: "A guitar plays between readings, warming the night with live music.",
        },
      ],
    },
    pastNights: {
      eyebrow: "From the Archive",
      heading: "Past Nights",
      seeAll: "See all",
    },
    books: {
      eyebrow: "From Our Bookshelf",
      heading: "Books in hand",
      seeAll: "See all books",
      whereToFind: "Where to find this book",
    },
    community: {
      eyebrow: "Join Us",
      heading: "Join the Community",
      body: "Leave your email to hear about the next gathering. No extra forms — just the place and the time.",
      emailPlaceholder: "Your email address",
      submit: "Sign up",
      follow: "Follow along",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Get in touch",
      intro: "Have a question? Bring a book, or write to us — either works.",
      emailLabel: "Email",
      pressNote: "For press and partnership inquiries, reach us by email.",
      addressLabel: "Address",
      directions: "Get directions",
      mapCaption: "View on the map",
    },
    guestsPage: {
      eyebrow: "Our Community",
      heading: "Writers & Poets",
      intro:
        "Poets, authors, and journalists who have joined Gracha Book Club nights — a few of the voices who have shared their words with us.",
    },
    booksPage: {
      eyebrow: "Our Bookshelf",
      heading: "Books",
      intro:
        "Browse the books currently in the club's collection, arranged by category.",
    },
    footer: {
      location: "Bishoftu, Ethiopia",
      rights: "All rights reserved.",
    },
    langToggle: "አማርኛ",
  },
} as const;
