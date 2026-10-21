export type Lang = "am" | "en";

export const dictionary = {
  am: {
    nav: {
      home: "መግቢያ",
      guests: "ገጣሚያን እና ደራሲያን",
      books: "መጽሐፍት",
      support: "ድጋፍ",
      supportLong: "የንባብ ቤቱን ይደግፉ",
    },
    programme: {
      heading: "በምሽቱ ምን ይካሄዳል",
      parts: [
        {
          key: "discussion",
          title: "ከእንግዳ ደራሲ ጋር ውይይት",
          body: "እንግዳ ደራሲ ወይም ገጣሚ ስራቸውን ያካፍላሉ፤ ከታዳሚው ጋር በግልጽ ይወያያሉ። የእያንዳንዱ ምሽት ዋና ክፍል ነው።",
        },
        {
          key: "members",
          title: "የአባላት መድረክ",
          body: "አባላት ግጥሞቻቸውን እና የራሳቸውን ጽሑፍ ያነባሉ። አዲስ መጪዎችም ማንበብ ይችላሉ።",
        },
        {
          key: "songs",
          title: "ዘፈን እና ሙዚቃ",
          body: "በንባቦች መካከል ዘፈን እና የጊታር ሙዚቃ።",
        },
      ],
      coffee: "ቡና በምሽቱ ሁሉ ይቀርባል።",
    },
    info: {
      usually: "ብዙውን ጊዜ",
      when: "ቅዳሜ · 11:30",
      where: "የት",
    },
    about: {
      heading: "ታሪካችን",
      origin:
        "ግራጫ ቃጭሎች ግጥም፣ ሙዚቃ እና ቡና በአንድ ላይ የሚያገናኝ ምሽት ነው። ሁሉም ነገር የተጀመረው ቀላል ጥያቄ ይዞ ነው፦ ታሪኮቻችንን በሚገባ ልናከብርበት የምንችለው ቦታ የት ነው? መልሱ የቡና ማዕድ ሆነ — በዙሪያው ግጥም የሚነበብበት፣ ጊታር የሚደመጥበት፣ ቃላት ልክ እንደ ጭስ ወደ ላይ የሚወጡበት።",
      photoCaption: "Carmel Kitchen፣ ቢሾፍቱ",
    },
    pastNights: {
      heading: "ያለፉ ምሽቶች",
      intro: "ከዚህ በፊት የተገኙ እንግዶች ፖስተሮች። ፖስተሩን በሙሉ መጠን ለማየት ይጫኑ።",
      prev: "ቀዳሚ ፖስተሮች",
      next: "ቀጣይ ፖስተሮች",
      pause: "እንቅስቃሴውን አቁም",
      play: "እንቅስቃሴውን ቀጥል",
      allGuests: "ሁሉንም ገጣሚያን እና ደራሲያን ይመልከቱ",
    },
    shelf: {
      heading: "መደርደሪያችን",
      body: "አባላት ከክለቡ መደርደሪያ መጽሐፍ መዋስ ይችላሉ። ያሉትን መጽሐፍት በዘርፍ ይመልከቱ።",
      seeAll: "ሙሉውን መደርደሪያ ይመልከቱ",
    },
    visit: {
      heading: "ወደ ምሽታችን ይምጡ",
      body: "የቀጣዩን ምሽት ቦታ እና ሰዓት ለመስማት የቴሌግራም ቻናላችንን ይቀላቀሉ።",
      join: "በቴሌግራም ይቀላቀሉ",
      instagram: "በኢንስታግራም ይከተሉን",
      directions: "አቅጣጫ ያግኙ",
    },
    contact: {
      emailLabel: "ኢሜይል",
      pressNote: "ለፕሬስ እና ለአጋርነት ጥያቄዎች፣ በኢሜይል ያግኙን።",
    },
    guestsPage: {
      heading: "ገጣሚያን እና ደራሲያን",
      intro:
        "በግራጫ ቃጭሎች ምሽቶች ላይ የተገኙ ገጣሚያን፣ ደራሲያን እና ጋዜጠኞች — ቃላቶቻቸውን ካካፈሉን መካከል ጥቂቶቹ።",
      poster: "የምሽቱን ፖስተር ይመልከቱ",
    },
    booksPage: {
      heading: "መጽሐፍት",
      intro:
        "ክለቡ በእጁ ያሉትን መጽሐፍት በየዘርፋቸው ይመልከቱ። እያንዳንዱ ሉህ የአንድ መደርደሪያ መጽሐፍትን ይዘረዝራል፤ አባላት መዋስ ይችላሉ።",
      categories: "ዘርፎች",
      shelf: "መደርደሪያ",
      shelves: "መደርደሪያ",
      viewFull: "በሙሉ መጠን ይመልከቱ",
    },
    supportPage: {
      heading: "የንባብ ቤታችንን ይደግፉ",
      intro:
        "ግራጫ ቃጭሎች ለማኅበረሰቡ የተፈጠረ የማኅበረሰብ ተነሳሽነት ነው። ለንባብ፣ ለፈጠራ፣ ለባህል እና ለጋራ ውይይት የሚያምኑ ሰዎች በሚሰጡት ልግስና፣ ጊዜ፣ ክህሎት፣ መጽሐፍ እና ሀሳብ እንደጋፋለን።",
      note: "ሁሉም ድጋፍ ትርጉም አለው።",
      photoAlt: "በካርሜል ኪችን ከእንግዳ ደራሲ ጋር ውይይት የሚያደርጉ ታዳሚዎች የሞሉት ክፍል",
      photoCaption: "ድጋፍዎ የሚያስቀጥለው ይህንን ነው፤ በቢሾፍቱ፣ ካርሜል ኪችን አንድ ምሽት።",
      cta: "በቴሌግራም መልዕክት ይላኩ",
      waysHeading: "የመደገፊያ መንገዶች",
      ways: [
        {
          key: "financial",
          title: "በገንዘብ ይደግፉ",
          body: "በባንክ፣ በሞባይል ገንዘብ ወይም በቴሌብር ለመደገፍ ያግኙን።",
        },
        {
          key: "skills",
          title: "ክህሎትዎን ይስጡ",
          body: "ፎቶግራፍ፣ ቪዲዮ ምርት፣ ዲዛይን ወይም ሌላ ክህሎት በማጋራት ይርዱን።",
        },
        {
          key: "books",
          title: "መጽሐፍ ያበርክቱ",
          body: "ለጋራ መደርደሪያችን አዲስ ወይም በጥሩ ሁኔታ ያሉ መጽሐፍትን ያካፍሉ።",
        },
        {
          key: "materials",
          title: "የምርት ዕቃዎች",
          body: "ካሜራ፣ ማይክሮፎን፣ ህትመት ወይም ሌላ የምርት ዕቃ ያበርክቱ።",
        },
      ],
      message:
        "ድጋፍዎ ስብሰባዎቻችንን እንድንቀጥል፣ ብዙ ሰዎችን እንድናገናኝ፣ ሥራችንን እንድንመዘግብ እና ለጸሐፊዎች፣ ለአንባቢዎች፣ ለሙዚቀኞች እና ለመላው ማኅበረሰብ አቀባበል ያለው ቦታ እንድንፈጥር ይረዳናል።",
    },
    common: {
      close: "ዝጋ",
    },
    footer: {
      location: "ቢሾፍቱ፣ ኢትዮጵያ",
      rights: "ሁሉም መብቶች የተጠበቁ ናቸው።",
    },
    langToggle: "English",
  },
  en: {
    nav: {
      home: "Home",
      guests: "Writers & Poets",
      books: "Books",
      support: "Support",
      supportLong: "Support the House",
    },
    programme: {
      heading: "What happens on the night",
      parts: [
        {
          key: "discussion",
          title: "A guest writer, in conversation",
          body: "A guest author or poet shares their work and talks it through openly with the audience. It is the heart of every night.",
        },
        {
          key: "members",
          title: "Members take the floor",
          body: "Members read poems and their own writing. Newcomers are welcome to read too.",
        },
        {
          key: "songs",
          title: "Songs and music",
          body: "Voices and a guitar between the readings.",
        },
      ],
      coffee: "Coffee is poured all evening.",
    },
    info: {
      usually: "Usually",
      when: "Saturdays · 11:30 Ethiopian time",
      where: "Where",
    },
    about: {
      heading: "How it began",
      origin:
        "Giracha Kachiloch House of Reading is a night that brings poetry, live music, and coffee to the same table. It began with a simple question: where can our stories be given the room they deserve? The answer became a coffee gathering — poetry read aloud around it, a guitar humming underneath, words rising like steam.",
      photoCaption: "Carmel Kitchen, Bishoftu",
    },
    pastNights: {
      heading: "Past nights",
      intro: "Posters from the nights our guests joined us. Tap one to see it full size.",
      prev: "Previous posters",
      next: "More posters",
      pause: "Pause the posters",
      play: "Play the posters",
      allGuests: "Meet all the writers & poets",
    },
    shelf: {
      heading: "The shelf",
      body: "Members can borrow from the club's shelf. Browse what's on it by category.",
      seeAll: "See the whole shelf",
    },
    visit: {
      heading: "Come to a night",
      body: "Join our Telegram channel to hear the place and time of the next night.",
      join: "Join on Telegram",
      instagram: "Follow on Instagram",
      directions: "Get directions",
    },
    contact: {
      emailLabel: "Email",
      pressNote: "For press and partnership inquiries, reach us by email.",
    },
    guestsPage: {
      heading: "Writers & Poets",
      intro:
        "Poets, authors, and journalists who have joined Giracha Kachiloch House of Reading nights — a few of the voices who have shared their words with us.",
      poster: "See the night's poster",
    },
    booksPage: {
      heading: "Books",
      intro:
        "The club's collection by category. Each printed sheet lists the books on one shelf, and members can borrow them.",
      categories: "Categories",
      shelf: "shelf",
      shelves: "shelves",
      viewFull: "View full size",
    },
    supportPage: {
      heading: "Support the House",
      intro:
        "Giracha Kachiloch is a community initiative created for the community. We depend on the generosity, time, skills, books, and ideas of people who believe in reading, creativity, culture, and shared conversation.",
      note: "Every kind of support matters.",
      photoAlt: "A full room in discussion with a guest writer at Carmel Kitchen",
      photoCaption: "This is what your support keeps going: a night at Carmel Kitchen, Bishoftu.",
      cta: "Message us on Telegram",
      waysHeading: "Ways to help",
      ways: [
        {
          key: "financial",
          title: "Give financially",
          body: "Contact us for bank, mobile-money, and Telebirr support options.",
        },
        {
          key: "skills",
          title: "Share your skills",
          body: "Help with photography, video production, design, or another skill you can offer.",
        },
        {
          key: "books",
          title: "Give books",
          body: "Share new or well-kept books for our community bookshelf.",
        },
        {
          key: "materials",
          title: "Give production materials",
          body: "Support our outreach with cameras, microphones, printing, or other useful materials.",
        },
      ],
      message:
        "Your support helps us continue our gatherings, reach more people, document our work, and create welcoming spaces for writers, readers, musicians, and the wider community.",
    },
    common: {
      close: "Close",
    },
    footer: {
      location: "Bishoftu, Ethiopia",
      rights: "All rights reserved.",
    },
    langToggle: "አማርኛ",
  },
} as const;
