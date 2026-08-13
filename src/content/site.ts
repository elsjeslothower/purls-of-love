export const orgName = "Purls of Love";

export const site = {
  orgName,
  tagline: "Handmade warmth, stitched by volunteers, given freely.",
  description:
    "Purls of Love is a volunteer-run nonprofit connecting knitters and crocheters with people who need a little extra warmth and comfort.",

  nav: {
    links: [
      { href: "/#about", label: "About" },
      { href: "/#partners", label: "Partners" },
      { href: "/patterns/", label: "Patterns" },
      { href: "/#gallery", label: "Gallery" },
      { href: "/#contact", label: "Contact" },
    ],
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  about: {
    eyebrow: "About Us",
    heading: "Every stitch is a small act of care.",
    paragraphs: [
      "Purls of Love started with a single skein of yarn and a simple idea: handmade things carry a warmth that store-bought ones can't. Today we're a community of volunteer knitters and crocheters who make blankets, hats, and blankets for people going through hard seasons — new babies in the NICU, families in shelters, seniors in care homes, and anyone who could use a reminder that someone out there is thinking of them.",
      "We're entirely volunteer-run and donation-funded. Every pattern we share, every partnership we build, and every finished piece we deliver is powered by people who believe that kindness, made by hand, still matters.",
    ],
    founderName: "Sara Keck",
    founderRole: "Knitter. Crocheter. Founder.",
    founderQuote:
      "“The goal of Purls of Love is to bring warmth and love to individuals in need of support.”",
    // TODO: replace with a real photo (e.g. /about/founder.jpg) and update this path.
    photo: "/about/founder.svg",
    photoAlt: "Sara Keck, founder of Purls of Love",
  },

  partners: {
    eyebrow: "Partners",
    heading: "Organizations we work alongside.",
    paragraph:
      "We partner with hospitals, shelters, and community groups to make sure every handmade piece reaches someone who needs it.",
    items: [
      {
        name: "Riverbend Children's Hospital",
        blurb: "NICU hats and preemie blankets delivered monthly to new families.",
        href: "https://example.org",
      },
      {
        name: "Harborlight Family Shelter",
        blurb: "Seasonal blanket and scarf drives for families in transitional housing.",
        href: "https://example.org",
      },
      {
        name: "Maplewood Senior Center",
        blurb: "Lap blankets and companionship visits for long-term residents.",
        href: "https://example.org",
      },
      {
        name: "Stitches for Veterans",
        blurb: "Warm accessories distributed through regional VA outreach events.",
        href: "https://example.org",
      },
      {
        name: "Willow Creek Women's Shelter",
        blurb: "Care packages with handmade wearables for residents rebuilding their lives.",
        href: "https://example.org",
      },
      {
        name: "Foothill Community Fridge Network",
        blurb: "Weatherproof accessories distributed alongside food resources.",
        href: "https://example.org",
      },
    ],
  },

  patterns: {
    eyebrow: "Patterns",
    heading: "Free patterns for our volunteer makers.",
    intro:
      "Every pattern below has been tested by our community and approved for donation projects. Beginner-friendly options are marked, so new volunteers always have a place to start.",
    items: [
      {
        title: "Comfort Blanket (Preemie size)",
        level: "Beginner",
        description: "A simple garter-stitch blanket sized for NICU bassinets.",
        format: "PDF · knit or crochet",
      },
      {
        title: "Every-Season Beanie",
        level: "Beginner",
        description: "A stretchy ribbed hat that works for kids and adults alike.",
        format: "PDF · knit",
      },
      {
        title: "Lap Blanket for Care Homes",
        level: "Intermediate",
        description: "A cozy textured throw sized for wheelchairs and recliners.",
        format: "PDF · crochet",
      },
      {
        title: "Quick Scarf",
        level: "Beginner",
        description: "A one-skein scarf that knits up in a weekend.",
        format: "PDF · knit or crochet",
      },
      {
        title: "Granny Square Blanket",
        level: "Intermediate",
        description: "Our most-donated pattern — modular, portable, and endlessly customizable.",
        format: "PDF · crochet",
      },
      {
        title: "Fingerless Mitts",
        level: "Beginner",
        description: "Quick handwarmers for shelter and outreach donations.",
        format: "PDF · knit",
      },
    ],
  },

  gallery: {
    eyebrow: "Gallery",
    heading: "Fresh off the needles.",
    paragraph:
      "We post finished pieces, drop-off days, and behind-the-scenes stitching straight from our Instagram.",
    instagramHandle: "purlsoflove",
    instagramUrl: "https://www.instagram.com/purlsoflove/",
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in touch.",
    tagline: "Questions about volunteering, donating yarn, or partnering with us? We'd love to hear from you.",
    email: "purlsoflovebysara@gmail.com",
    presetSubject: "You have a message from the website about {}",
    reasonLabel: "I'm reaching out about",
    reasons: [
      { value: "volunteering", label: "Volunteering" },
      { value: "donating materials", label: "Donating materials" },
      { value: "partnering", label: "Partnering" },
      { value: "other", label: "Other" },
    ],
    otherPlaceholder: "Tell us in a few words",
    messageLabel: "Message",
    submitLabel: "Send",
    helperText: "This opens your email app with the message filled in, addressed to the founder.",
  },

  footer: {
    builtWith: "Made with care by volunteers.",
  },
} as const;
