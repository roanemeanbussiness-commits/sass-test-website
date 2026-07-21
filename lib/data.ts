/**
 * Mock content for the TextureR marketing site.
 *
 * Everything here is illustrative sample data — client names, metrics and
 * quotes are fictional and exist to make the site feel real for demos and for
 * exercising SEO / GEO / AEO tooling against a content-rich target.
 */

/* ----------------------------------------------------------------- Metrics */

export const companyStats = [
  { figure: "$600K", label: "Monthly agency revenue — we scale ourselves the way we scale you" },
  { figure: "140+", label: "Brands scaled since 2019" },
  { figure: "312%", label: "Average revenue growth in the first 12 months" },
  { figure: "94%", label: "Client retention across active engagements" },
];

export const trustStats = [
  { figure: "$480M+", label: "Client revenue influenced" },
  { figure: "6 yrs", label: "Compounding what works" },
  { figure: "4.9/5", label: "Average client rating" },
  { figure: "38", label: "Specialists across brand, search & AI" },
];

/* ------------------------------------------------------------- Client logos */
// Fictional client wordmarks rendered as text in the marquee.
export const clientLogos = [
  "Lumen & Co.",
  "Northwind",
  "Cedar & Stone",
  "Halcyon Foods",
  "Veranda Home",
  "Atlas Freight",
  "Bright Meridian",
  "Fieldnote",
  "Cove Financial",
  "Marigold Studio",
];

/* --------------------------------------------------------------- Services */

export type Service = {
  slug: string;
  name: string;
  abbr?: string;
  tagline: string;
  summary: string;
  // Longer intro used on the detail page hero.
  intro: string;
  outcomes: string[];
  deliverables: { title: string; body: string }[];
  process?: string[];
  faqs?: { q: string; a: string }[];
  metric: { figure: string; label: string };
};

export const services: Service[] = [
  {
    slug: "brand-scaling",
    name: "Brand Scaling",
    tagline: "Positioning and identity that give a brand room to grow.",
    summary:
      "We sharpen what you stand for, then build the identity, messaging and growth system that lets it scale without losing its texture.",
    intro:
      "Most small businesses don't have a growth problem — they have a clarity problem. Brand Scaling is our flagship engagement: we find the position only you can own, express it through a coherent identity and message architecture, and wire it into a demand engine that compounds month over month.",
    outcomes: [
      "A defensible position your competitors can't copy",
      "A message architecture your whole team can use",
      "A visual and verbal identity that scales across every channel",
      "A growth model with clear, measurable levers",
    ],
    deliverables: [
      {
        title: "Positioning & Strategy",
        body: "Category design, competitive mapping, ICP definition and the single differentiated promise your brand will own.",
      },
      {
        title: "Identity System",
        body: "Logo, type, color, motion and imagery guidelines — a flexible system, not a static logo file.",
      },
      {
        title: "Message Architecture",
        body: "Value proposition, narrative, proof points and a messaging matrix mapped to every stage of the funnel.",
      },
      {
        title: "Growth Model",
        body: "A quarter-by-quarter roadmap with named channels, targets and the metrics we'll hold ourselves to.",
      },
    ],
    process: [
      "Immersion & audit",
      "Positioning workshops",
      "Identity & message design",
      "Rollout & enablement",
    ],
    faqs: [
      {
        q: "How is brand scaling different from a rebrand?",
        a: "A rebrand changes how you look. Brand scaling changes how you grow — we treat identity as one input into a system that also includes positioning, messaging and a demand engine built to compound.",
      },
      {
        q: "How long before we see results?",
        a: "Positioning and identity ship inside the first 6–8 weeks. Compounding growth from the demand engine typically shows in months 3–6 as content, search and authority mature.",
      },
    ],
    metric: { figure: "312%", label: "Average 12-month revenue growth" },
  },
  {
    slug: "seo",
    name: "Search Engine Optimization",
    abbr: "SEO",
    tagline: "Rank for what your buyers actually search — and hold it.",
    summary:
      "Technical foundations, content that earns its keep and authority that compounds. Durable organic growth, not rented traffic.",
    intro:
      "Search is still where high-intent demand begins. Our SEO practice combines a clean technical foundation, a content system mapped to real buyer intent, and a link and authority program that builds the kind of trust both Google and AI models reward. The result is organic visibility that keeps paying you back.",
    outcomes: [
      "First-page rankings for high-intent, commercial keywords",
      "A technically flawless, fast, crawlable site",
      "A content engine that turns topics into pipeline",
      "Authority signals that carry into AI and answer engines",
    ],
    deliverables: [
      {
        title: "Technical SEO",
        body: "Core Web Vitals, crawl architecture, indexation, structured data and a clean, machine-readable site.",
      },
      {
        title: "Content Strategy",
        body: "Keyword and topic clustering mapped to intent, plus editorial calendars and briefs your team can execute.",
      },
      {
        title: "On-Page Optimization",
        body: "Titles, metadata, internal linking, schema and entity coverage tuned page by page.",
      },
      {
        title: "Digital PR & Authority",
        body: "Earned links and mentions that build the topical authority modern ranking depends on.",
      },
    ],
    process: ["Technical audit", "Keyword & intent map", "Content build", "Authority & reporting"],
    faqs: [
      {
        q: "How long does SEO take to work?",
        a: "Expect early movement in 8–12 weeks and meaningful compounding traffic by months 4–6. SEO is an asset that appreciates — the longer it runs, the cheaper each visit becomes.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No credible partner guarantees a specific position, because no one controls the algorithm. We guarantee the work, the transparency and a program built on what durably moves rankings.",
      },
    ],
    metric: { figure: "5.4x", label: "Median organic traffic lift in year one" },
  },
  {
    slug: "geo",
    name: "Generative Engine Optimization",
    abbr: "GEO",
    tagline: "Be the brand AI models recommend and cite.",
    summary:
      "As buyers ask ChatGPT, Gemini and Perplexity instead of Google, GEO makes sure your brand is the one the models surface, trust and quote.",
    intro:
      "A growing share of buying journeys now start — and sometimes end — inside an AI assistant. Generative Engine Optimization is the discipline of making your brand legible, credible and quotable to large language models, so when a prospect asks an AI for a recommendation, your name is in the answer.",
    outcomes: [
      "Presence in AI-generated recommendations and comparisons",
      "Citations and links inside Perplexity, ChatGPT and Gemini answers",
      "Consistent, accurate brand facts across the models' training and retrieval",
      "A measurable share of the AI answer for your category",
    ],
    deliverables: [
      {
        title: "AI Visibility Audit",
        body: "We map how leading models currently describe your brand and category — and where you're missing or misrepresented.",
      },
      {
        title: "Entity & Knowledge Optimization",
        body: "Structured data, knowledge-graph presence and consistent citations so models resolve your brand as a trusted entity.",
      },
      {
        title: "Quotable Content",
        body: "Content engineered to be retrieved and cited: clear claims, sources, statistics and the passage structure models prefer.",
      },
      {
        title: "Model Monitoring",
        body: "Ongoing tracking of how you appear across assistants, with prompts, share-of-voice and citation reporting.",
      },
    ],
    process: ["AI visibility audit", "Entity optimization", "Quotable content", "Monitor & iterate"],
    faqs: [
      {
        q: "What exactly is Generative Engine Optimization?",
        a: "GEO is the practice of optimizing your brand, content and structured data so that generative AI models (like ChatGPT, Gemini and Perplexity) surface, recommend and cite you when users ask them questions in your category.",
      },
      {
        q: "How is GEO different from SEO?",
        a: "SEO optimizes for a ranked list of blue links. GEO optimizes for a synthesized answer — earning your place inside the response itself through entity clarity, citations and quotable, well-sourced content.",
      },
      {
        q: "Can you actually influence what an AI says about my brand?",
        a: "You can't program a model, but you can strongly shape its inputs: the structured data, authoritative sources, consistent facts and citable content it retrieves from. That's what a GEO program systematically improves.",
      },
    ],
    metric: { figure: "3.8x", label: "More AI-assistant citations in 90 days" },
  },
  {
    slug: "aeo",
    name: "Answer Engine Optimization",
    abbr: "AEO",
    tagline: "Own the answer — in snippets, voice and AI overviews.",
    summary:
      "When search returns a single answer instead of ten links, AEO makes sure that answer is yours: featured snippets, People Also Ask, voice and AI overviews.",
    intro:
      "Search has shifted from a list of links to a single, direct answer — in featured snippets, People Also Ask, voice assistants and Google's AI Overviews. Answer Engine Optimization structures your content and data so that answer is drawn from your site, putting your brand at the very top of the intent funnel.",
    outcomes: [
      "Featured snippets and People Also Ask coverage",
      "Inclusion in Google AI Overviews for your key questions",
      "Voice-assistant answers sourced from your content",
      "Higher zero-click brand visibility and authority",
    ],
    deliverables: [
      {
        title: "Question Research",
        body: "We map the real questions your buyers ask — and the answer formats each surface rewards.",
      },
      {
        title: "Answer-First Content",
        body: "Concise, well-structured answers backed by depth, formatted for snippet and overview extraction.",
      },
      {
        title: "Structured Data",
        body: "FAQ, HowTo, Article and Organization schema so engines can parse and trust your answers.",
      },
      {
        title: "SERP Feature Tracking",
        body: "Ongoing monitoring of snippets, PAA and AI Overview inclusion with clear win reporting.",
      },
    ],
    process: ["Question mapping", "Answer-first content", "Schema & structure", "Track & expand"],
    faqs: [
      {
        q: "What is Answer Engine Optimization?",
        a: "AEO is the practice of structuring content and data so search and voice engines pull a direct answer from your site — winning featured snippets, People Also Ask, AI Overviews and voice results.",
      },
      {
        q: "Is AEO the same as GEO?",
        a: "They overlap but differ. AEO targets answer surfaces inside search engines (snippets, PAA, AI Overviews). GEO targets standalone generative assistants (ChatGPT, Perplexity, Gemini). Most brands need both, and we run them together.",
      },
      {
        q: "Does winning a snippet actually help if it's zero-click?",
        a: "Yes. Snippet and overview ownership builds brand authority, captures high-intent queries, feeds voice results, and is a strong signal that carries into generative engines — it compounds well beyond the single click.",
      },
    ],
    metric: { figure: "210+", label: "Featured snippets & answers won per client" },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/* ------------------------------------------------------------- Case studies */

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  services: string[];
  duration: string;
  hero: string;
  challenge: string;
  approach: { title: string; body: string }[];
  results: { figure: string; label: string }[];
  quote: { text: string; name: string; role: string };
  color: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lumen-skincare",
    client: "Lumen & Co.",
    industry: "DTC Skincare",
    title: "From founder-led hustle to a $210K/month skincare brand",
    summary:
      "A clean-skincare startup stuck at $40K/month. We rebuilt the brand, owned their category in search, and made them the skincare line AI assistants recommend.",
    services: ["Brand Scaling", "SEO", "GEO"],
    duration: "9 months",
    hero: "Lumen & Co. sold a genuinely great product to a tiny, hard-won audience. Growth had plateaued because the brand couldn't be found and couldn't be remembered.",
    challenge:
      "Lumen was doing $40K/month almost entirely through paid social — rising costs, thin margins and a brand that blended into a crowded shelf. Organic discovery was near zero, and when prospects asked AI assistants for 'clean skincare for sensitive skin,' Lumen never came up.",
    approach: [
      {
        title: "Repositioned around a single promise",
        body: "We narrowed Lumen from 'clean skincare' to 'dermatologist-formulated care for reactive skin' — a position they could own and defend, backed by a refreshed identity.",
      },
      {
        title: "Built a search moat",
        body: "A technical rebuild plus 60+ intent-mapped articles and product pages captured the ingredient and concern queries their buyers actually search.",
      },
      {
        title: "Won the AI recommendation",
        body: "Entity optimization, review seeding and quotable, well-sourced content made Lumen a name assistants surface for sensitive-skin routines.",
      },
    ],
    results: [
      { figure: "$210K", label: "Monthly revenue, up from $40K" },
      { figure: "5.2x", label: "Organic sessions in 9 months" },
      { figure: "41%", label: "Of revenue now from non-paid channels" },
      { figure: "#1", label: "Ranked for 'skincare for reactive skin'" },
    ],
    quote: {
      text: "TextureR didn't just make us look better — they made us findable. Half our growth this year came from channels we weren't even in before.",
      name: "Priya Anand",
      role: "Founder & CEO, Lumen & Co.",
    },
    color: "#8a6d3b",
  },
  {
    slug: "northwind-analytics",
    client: "Northwind Analytics",
    industry: "B2B SaaS",
    title: "5x organic pipeline for a category-defining analytics platform",
    summary:
      "A B2B analytics startup fighting for attention against funded incumbents. We made them the answer buyers — and AI models — reach for first.",
    services: ["SEO", "AEO", "GEO"],
    duration: "12 months",
    hero: "Northwind had a sharper product than its better-funded rivals, but the market didn't know the category existed — let alone that Northwind led it.",
    challenge:
      "Competing against incumbents with 10x the budget, Northwind's paid pipeline was expensive and shallow. They needed durable, defensible demand and a way to be the default answer when buyers researched their emerging category.",
    approach: [
      {
        title: "Designed the category",
        body: "We named and framed the category, then built the definitive content library that made Northwind its reference point.",
      },
      {
        title: "Won the answer surfaces",
        body: "Answer-first content and structured data captured snippets, People Also Ask and AI Overviews for the questions buyers ask early.",
      },
      {
        title: "Became the model's default",
        body: "A GEO program earned Northwind consistent citations in ChatGPT and Perplexity comparisons within their category.",
      },
    ],
    results: [
      { figure: "5.1x", label: "Organic-sourced pipeline" },
      { figure: "148", label: "Featured snippets & PAA answers won" },
      { figure: "#1", label: "AI-cited vendor for their category" },
      { figure: "-34%", label: "Blended customer acquisition cost" },
    ],
    quote: {
      text: "We stopped renting demand. Now when someone asks an AI which platform to use, we're in the answer — and that pipeline closes faster than anything from ads.",
      name: "Marcus Bell",
      role: "VP Marketing, Northwind Analytics",
    },
    color: "#3f5a6b",
  },
  {
    slug: "cedar-stone-interiors",
    client: "Cedar & Stone Interiors",
    industry: "Local Services",
    title: "3x qualified leads for a premium interior design studio",
    summary:
      "A boutique design studio invisible outside referrals. We built local and AI visibility that filled their calendar with the right clients.",
    services: ["Brand Scaling", "SEO", "AEO"],
    duration: "7 months",
    hero: "Cedar & Stone did beautiful work for a handful of clients who found them by word of mouth. Beyond that circle, they were invisible.",
    challenge:
      "Nearly all of Cedar & Stone's business came from referrals — unpredictable and capped. They wanted a premium, steady stream of qualified project inquiries without cheapening the brand.",
    approach: [
      {
        title: "Elevated the brand",
        body: "A refined identity and portfolio-forward site expressed the studio's premium positioning and made every touchpoint feel considered.",
      },
      {
        title: "Owned local search",
        body: "Local SEO, service-area pages and reviews put Cedar & Stone at the top of high-intent local queries.",
      },
      {
        title: "Answered the buyer's questions",
        body: "AEO content captured the 'how much does an interior designer cost' style questions that start a project search.",
      },
    ],
    results: [
      { figure: "3.1x", label: "Qualified project inquiries" },
      { figure: "62%", label: "Of new leads from organic search" },
      { figure: "2.4x", label: "Average project value" },
      { figure: "18", label: "Local queries ranked #1–3" },
    ],
    quote: {
      text: "For the first time we can choose our projects instead of waiting for a referral. The inquiries we get now already understand — and want — what we do.",
      name: "Elena Ruiz",
      role: "Principal, Cedar & Stone Interiors",
    },
    color: "#6b6250",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/* --------------------------------------------------------------- Process */

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    body: "We immerse in your business, market and numbers — interviews, analytics, competitive and AI-visibility audits — to find the truth about where growth is stuck.",
    detail: [
      "Stakeholder & customer interviews",
      "Analytics, search & AI-visibility audit",
      "Competitive and category mapping",
    ],
  },
  {
    n: "02",
    title: "Diagnose",
    body: "We turn the audit into a clear diagnosis and a prioritized plan: the position to own, the levers to pull and the metrics we'll move first.",
    detail: [
      "Positioning & opportunity thesis",
      "Prioritized growth roadmap",
      "Targets, forecasts and KPIs",
    ],
  },
  {
    n: "03",
    title: "Design",
    body: "We build the assets — identity, messaging, content systems and structured data — engineered for both human buyers and the engines that recommend you.",
    detail: [
      "Identity & message architecture",
      "Content & SEO/GEO/AEO systems",
      "Structured data & technical foundation",
    ],
  },
  {
    n: "04",
    title: "Deploy",
    body: "We ship in tight cycles, instrument everything, and enable your team so momentum doesn't depend on us being in the room.",
    detail: ["Phased rollout", "Instrumentation & tracking", "Team enablement & handbooks"],
  },
  {
    n: "05",
    title: "Scale",
    body: "We double down on what compounds. Monthly reporting ties every activity to revenue, and each quarter we reset targets higher.",
    detail: ["Monthly revenue reporting", "Experiment & iterate", "Quarterly business reviews"],
  },
];

/* --------------------------------------------------------------- Pricing */

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  best: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Foundations",
    price: "$3,500",
    cadence: "/ month",
    best: "Early-stage brands ready to build a real growth base.",
    features: [
      "Positioning & messaging tune-up",
      "Technical SEO foundation",
      "4 optimized content pieces / month",
      "Core structured data (AEO-ready)",
      "Monthly reporting dashboard",
      "Async support",
    ],
    cta: "Start with Foundations",
  },
  {
    name: "Growth",
    price: "$7,500",
    cadence: "/ month",
    best: "Scaling businesses that want compounding search + AI visibility.",
    featured: true,
    features: [
      "Everything in Foundations",
      "Full SEO + AEO program",
      "GEO / AI-visibility optimization",
      "8 content pieces + digital PR / month",
      "Conversion & landing-page optimization",
      "Bi-weekly strategy calls",
    ],
    cta: "Scale with Growth",
  },
  {
    name: "Scale",
    price: "$15,000",
    cadence: "/ month",
    best: "Market leaders going all-in across brand, search and AI.",
    features: [
      "Everything in Growth",
      "Dedicated brand + growth pod",
      "Full brand scaling engagement",
      "Advanced GEO across all major models",
      "Digital PR & authority program",
      "Weekly calls + quarterly reviews",
    ],
    cta: "Go all-in with Scale",
  },
];

/* --------------------------------------------------------------- Team */

export type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: Member[] = [
  {
    name: "Jordan Vance",
    role: "Founder & CEO",
    bio: "Former brand strategist turned growth operator. Founded TextureR in 2019 to prove small businesses can out-position anyone.",
    initials: "JV",
  },
  {
    name: "Sofia Marchetti",
    role: "Head of Brand",
    bio: "Identity and positioning lead. Believes the strongest brands are the ones with the sharpest point of view.",
    initials: "SM",
  },
  {
    name: "Daniel Osei",
    role: "Director of Search & AI",
    bio: "Runs our SEO, GEO and AEO practice. Obsessed with the shift from ten blue links to a single trusted answer.",
    initials: "DO",
  },
  {
    name: "Hana Kim",
    role: "Head of Content",
    bio: "Turns strategy into content systems that rank, get cited, and actually sound like your brand.",
    initials: "HK",
  },
  {
    name: "Theo Larsson",
    role: "Growth Engineer",
    bio: "Builds the technical foundation and structured data that make brands legible to search and AI alike.",
    initials: "TL",
  },
  {
    name: "Amara Okafor",
    role: "Client Partner",
    bio: "Keeps every engagement tied to revenue and makes sure the work actually gets adopted.",
    initials: "AO",
  },
];

export const values = [
  {
    title: "Revenue is the only vanity metric that matters",
    body: "Rankings, impressions and awards are nice. We report on the number that pays your team.",
  },
  {
    title: "Position before promotion",
    body: "We refuse to pour traffic into a brand that hasn't decided what it stands for. Clarity first, always.",
  },
  {
    title: "Build for humans and machines",
    body: "The best content earns a click and a citation. We design for the buyer and the model at once.",
  },
  {
    title: "Own it, don't rent it",
    body: "Paid gets you traffic today. We build organic and AI visibility you'll still own in three years.",
  },
];

/* --------------------------------------------------------------- Testimonials */

export const testimonials = [
  {
    text: "In six months TextureR did what two prior agencies couldn't: they made us the obvious choice in our category. Our close rate on inbound nearly doubled.",
    name: "Marcus Bell",
    role: "VP Marketing, Northwind Analytics",
  },
  {
    text: "They treat our P&L like their own. Every recommendation comes back to revenue, and the reporting is the clearest I've had from any partner.",
    name: "Priya Anand",
    role: "Founder & CEO, Lumen & Co.",
  },
  {
    text: "We're a small studio, but TextureR made us feel like the biggest name in our city. The inquiries we get now are exactly the clients we want.",
    name: "Elena Ruiz",
    role: "Principal, Cedar & Stone Interiors",
  },
];

/* --------------------------------------------------------------- FAQ */

export const faqs = [
  {
    q: "What does TextureR actually do?",
    a: "We're a brand scaling agency for ambitious small businesses. We sharpen your positioning, then grow you through search (SEO), Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) — so you're the brand buyers and AI assistants recommend.",
  },
  {
    q: "What size businesses do you work with?",
    a: "Most of our clients are doing between $500K and $10M in annual revenue and are ready to invest in compounding, durable growth. If you're pre-revenue, our Foundations tier or a one-time positioning sprint may be a better fit.",
  },
  {
    q: "What's the difference between SEO, AEO and GEO?",
    a: "SEO earns you rankings in the list of search results. AEO wins the direct answer inside search — featured snippets, People Also Ask and AI Overviews. GEO makes AI assistants like ChatGPT, Gemini and Perplexity recommend and cite you. Modern visibility needs all three, and we run them as one program.",
  },
  {
    q: "How quickly will I see results?",
    a: "Brand and positioning work ships in the first 6–8 weeks. Search and AI visibility compound over 3–6 months, then keep accelerating. We share a dashboard from week one so you can watch the leading indicators move before revenue does.",
  },
  {
    q: "Do you require a long contract?",
    a: "We work on rolling monthly engagements with a 90-day initial commitment — long enough for the work to compound, with no multi-year lock-in. 94% of clients choose to stay well beyond it.",
  },
  {
    q: "How do you price your services?",
    a: "We offer three transparent monthly tiers — Foundations ($3,500), Growth ($7,500) and Scale ($15,000) — plus custom engagements for larger brands. Each tier is a bundle of strategy, execution and reporting, not billable hours.",
  },
  {
    q: "How do you measure success?",
    a: "Revenue first, then the leading indicators that drive it: organic pipeline, qualified inquiries, rankings, snippet ownership and AI-assistant citations. Every engagement has agreed KPIs and a monthly report that ties activity to outcomes.",
  },
  {
    q: "Where are you located, and do you work remotely?",
    a: "We're headquartered in Austin, Texas and work with clients across North America and beyond. Engagements run remote-first, with on-site workshops available for Scale clients.",
  },
];
