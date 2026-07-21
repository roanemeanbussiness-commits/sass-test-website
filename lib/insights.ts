/**
 * Long-form articles for the Insights section. Content is original sample
 * writing — deliberately rich, well-structured and citable so the site is a
 * meaningful target for SEO / GEO / AEO analysis.
 *
 * `body` is a small set of block primitives rendered by the article template,
 * which keeps the content portable and easy to extend.
 */

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  author: string;
  authorRole: string;
  date: string; // ISO
  readingTime: string;
  keywords: string[];
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "geo-vs-seo-vs-aeo",
    title: "GEO vs. SEO vs. AEO: the new search stack, explained",
    dek: "Search fractured into three surfaces — rankings, answers and AI recommendations. Here's how they differ, why you need all three, and how they compound.",
    category: "Strategy",
    author: "Daniel Osei",
    authorRole: "Director of Search & AI",
    date: "2026-05-14",
    readingTime: "8 min read",
    keywords: [
      "GEO vs SEO",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "AI search",
    ],
    body: [
      {
        type: "p",
        text: "For twenty years, 'being found online' meant one thing: ranking in Google's list of blue links. That era is over. Today a single buyer might discover you through a classic search result, a featured snippet that answers their question without a click, or a recommendation from an AI assistant they never expected to shop from. Three different surfaces, three different disciplines — SEO, AEO and GEO.",
      },
      {
        type: "p",
        text: "They're often confused, sometimes treated as interchangeable, and rarely run together well. This guide breaks down exactly what each one is, how they differ, and why the brands winning right now treat them as a single, compounding system.",
      },
      { type: "h2", text: "The short version" },
      {
        type: "callout",
        title: "SEO, AEO and GEO at a glance",
        text: "SEO earns you a ranked position in the list of results. AEO wins the single direct answer inside search — snippets, People Also Ask and AI Overviews. GEO makes AI assistants like ChatGPT, Gemini and Perplexity recommend and cite you. You need all three because buyers now move between all three.",
      },
      { type: "h2", text: "SEO: earning the ranking" },
      {
        type: "p",
        text: "Search Engine Optimization is the discipline you already know: making your site rank in the organic results of engines like Google and Bing. It rests on three pillars — a clean technical foundation, content mapped to real search intent, and authority signals like links and mentions that tell the engine you can be trusted.",
      },
      {
        type: "p",
        text: "SEO isn't going anywhere. Even as answers and AI take share, the ranked list still drives enormous high-intent traffic, and — crucially — the same authority and content signals that rank you also feed the answer and AI surfaces. SEO is the foundation the other two build on.",
      },
      { type: "h2", text: "AEO: winning the answer" },
      {
        type: "p",
        text: "Answer Engine Optimization targets the moment search stops returning a list and returns a single answer instead. That includes featured snippets, the People Also Ask box, voice-assistant responses, and Google's AI Overviews. The goal isn't just a high ranking — it's to be the source the engine extracts its answer from.",
      },
      {
        type: "p",
        text: "Winning answers takes a specific content shape: a concise, direct response to a real question, immediately backed by depth, and marked up with structured data so the engine can parse and trust it.",
      },
      {
        type: "ul",
        items: [
          "Lead with a clear, 40–55 word answer to the exact question.",
          "Back it with depth — the engine rewards pages that go beyond the snippet.",
          "Add FAQ, HowTo and Article schema so answers are machine-readable.",
          "Structure content around the real questions buyers ask, not just keywords.",
        ],
      },
      { type: "h2", text: "GEO: earning the AI recommendation" },
      {
        type: "p",
        text: "Generative Engine Optimization is the newest discipline and the least understood. It's the practice of making your brand something generative AI models will surface, recommend and cite when a user asks them a question — inside ChatGPT, Gemini, Perplexity, Claude and the growing set of assistants people now treat as a first stop.",
      },
      {
        type: "p",
        text: "You can't program a model, but you can shape what it retrieves and how confidently it resolves your brand. That means consistent facts across the web, strong entity and knowledge-graph presence, and content engineered to be quotable: clear claims, real statistics, and sources a model can lean on.",
      },
      {
        type: "quote",
        text: "SEO optimizes for a list. AEO optimizes for an answer. GEO optimizes for a recommendation. The brands that win the next decade will do all three at once.",
      },
      { type: "h2", text: "Why they compound" },
      {
        type: "p",
        text: "Here's the part most teams miss: these disciplines aren't competing budgets — they reinforce each other. The authority you build for SEO makes you more citable in GEO. The structured, answer-first content you write for AEO is exactly the quotable content models prefer. The entity clarity you build for GEO helps engines trust your answers. Run them separately and you leave most of the value on the table; run them as one program and each surface makes the others stronger.",
      },
      { type: "h3", text: "A simple way to sequence it" },
      {
        type: "ol",
        items: [
          "Fix the technical and content foundation (SEO) so everything downstream can be crawled and trusted.",
          "Restructure your highest-intent content answer-first and add schema (AEO).",
          "Build entity clarity, citations and quotable assets so models recommend you (GEO).",
          "Measure all three together — rankings, answer ownership and AI citations — against revenue.",
        ],
      },
      { type: "h2", text: "The takeaway" },
      {
        type: "p",
        text: "Search didn't disappear — it multiplied. Your buyers now discover you across ranked results, direct answers and AI recommendations, often in the same journey. Treating SEO, AEO and GEO as one compounding system is no longer an edge; it's the new baseline for being found. If you're only doing one, you're visible on one surface while your competitors show up on all three.",
      },
    ],
  },
  {
    slug: "aeo-playbook-get-cited-by-ai",
    title: "The AEO playbook: how to get your brand cited by AI answer engines",
    dek: "A practical, repeatable framework for winning featured snippets, People Also Ask and AI Overviews — the answers that put your brand at the top of the funnel.",
    category: "Playbook",
    author: "Hana Kim",
    authorRole: "Head of Content",
    date: "2026-06-02",
    readingTime: "9 min read",
    keywords: [
      "AEO playbook",
      "featured snippets",
      "AI Overviews",
      "get cited by AI",
      "answer engine optimization",
    ],
    body: [
      {
        type: "p",
        text: "When search returns a single answer instead of ten links, there's only one winner. This is the playbook we use at TextureR to make that winner our clients — the repeatable system behind hundreds of snippets, People Also Ask placements and AI Overview citations.",
      },
      { type: "h2", text: "Step 1 — Mine the questions your buyers actually ask" },
      {
        type: "p",
        text: "Answer engines are triggered by questions, so your work starts with real ones. Go beyond keyword tools: read sales-call transcripts, support tickets, Reddit threads and the People Also Ask boxes already showing for your topics. You're looking for the exact phrasing a human uses when they're stuck.",
      },
      {
        type: "callout",
        title: "The question inventory",
        text: "Build a living list of every question a buyer asks across their journey — awareness, consideration and decision. This inventory becomes the backbone of both your AEO and GEO content programs.",
      },
      { type: "h2", text: "Step 2 — Answer first, then go deep" },
      {
        type: "p",
        text: "The single biggest AEO mistake is burying the answer. Engines extract concise, self-contained responses, so lead with one. Give the direct answer in the first 40–55 words, then earn your ranking with the depth underneath it.",
      },
      {
        type: "ul",
        items: [
          "Open each target section with the question as a heading.",
          "Follow immediately with a crisp, standalone answer.",
          "Then expand: context, examples, nuance, evidence.",
          "Use lists and tables — engines love extractable structure.",
        ],
      },
      { type: "h2", text: "Step 3 — Make it machine-readable with schema" },
      {
        type: "p",
        text: "Structured data is how you hand the engine a parsed, trustworthy version of your answer. FAQ schema, HowTo schema, Article and Organization markup all help engines understand not just what your page says, but what kind of answer it contains.",
      },
      {
        type: "p",
        text: "This matters even more for AI Overviews and generative engines, which lean heavily on structured, well-attributed content when deciding what to synthesize and cite.",
      },
      { type: "h2", text: "Step 4 — Build the authority that earns trust" },
      {
        type: "p",
        text: "Engines don't pull answers from just anyone. They favor sources with topical authority — sites that clearly, repeatedly and credibly cover a subject. That means depth of coverage, real expertise signals, citations to primary sources, and earned mentions from other trusted sites.",
      },
      {
        type: "quote",
        text: "You don't win the answer by being loud. You win it by being the most trustworthy, extractable source on the exact question.",
      },
      { type: "h2", text: "Step 5 — Track answers, not just rankings" },
      {
        type: "p",
        text: "Traditional rank tracking misses the point of AEO. You need to monitor answer ownership: which snippets you hold, which People Also Ask questions you appear in, and whether you're cited in AI Overviews and assistant responses. What you can't see, you can't systematically win.",
      },
      {
        type: "ol",
        items: [
          "Track featured snippet and PAA ownership for your question inventory.",
          "Monitor AI Overview inclusion for high-value queries.",
          "Watch how assistants answer your category's key questions over time.",
          "Tie answer wins back to branded search and pipeline.",
        ],
      },
      { type: "h2", text: "Why zero-click still wins" },
      {
        type: "p",
        text: "A common objection: if the engine answers without a click, what's the point? The point is authority and presence. Owning the answer builds brand recognition, feeds voice results, captures the highest-intent moment in the journey, and sends a strong signal that carries into generative engines. The click is only one part of the value — and often, the branded search that follows is worth more than the click you 'lost.'",
      },
      { type: "h2", text: "Put it together" },
      {
        type: "p",
        text: "AEO isn't a trick; it's a discipline. Mine the questions, answer first, mark it up, build authority, and measure answer ownership. Do it consistently and you'll occupy the most valuable real estate in search: the single answer everyone sees. That's the position we build for every client — and it's the foundation the AI-recommendation layer sits on top of.",
      },
    ],
  },
  {
    slug: "brand-scaling-framework",
    title: "The brand scaling framework we use to 3x small businesses",
    dek: "Growth isn't a traffic problem — it's a clarity problem. Here's the five-part framework we use to turn overlooked small businesses into category leaders.",
    category: "Framework",
    author: "Sofia Marchetti",
    authorRole: "Head of Brand",
    date: "2026-06-24",
    readingTime: "7 min read",
    keywords: [
      "brand scaling",
      "brand strategy for small business",
      "positioning framework",
      "grow a small business",
    ],
    body: [
      {
        type: "p",
        text: "After scaling 140+ brands, we've learned that most small businesses don't have a growth problem — they have a clarity problem. They're pouring money into traffic for a brand that hasn't decided what it stands for. This is the framework we use to fix that, in order, so growth actually compounds.",
      },
      { type: "h2", text: "1. Position: find the ground only you can own" },
      {
        type: "p",
        text: "Everything starts with position. Not a tagline — a genuinely defensible answer to 'why you, and not the alternative?' We map the competitive landscape, find the space your rivals have left open, and narrow your promise until it's sharp enough to be memorable and true enough to be credible.",
      },
      {
        type: "callout",
        title: "The narrowing test",
        text: "If your positioning could be lifted onto a competitor's site without anyone noticing, it isn't positioning — it's wallpaper. Keep narrowing until it could only be yours.",
      },
      { type: "h2", text: "2. Express: build an identity that scales" },
      {
        type: "p",
        text: "Once the position is clear, we express it — verbally and visually. That's a message architecture your whole team can use and an identity system flexible enough to hold up across a homepage, a shipping box and an AI-generated summary of your brand. The goal is coherence: every touchpoint should feel unmistakably like you.",
      },
      { type: "h2", text: "3. Be findable: engineer discovery" },
      {
        type: "p",
        text: "A sharp brand no one can find still starves. This is where positioning meets the modern search stack. We make you discoverable across every surface a buyer might use — ranked search results (SEO), direct answers (AEO) and AI recommendations (GEO).",
      },
      {
        type: "ul",
        items: [
          "Capture high-intent search demand with intent-mapped content.",
          "Win the direct answers your buyers ask for.",
          "Become a brand AI assistants surface and cite.",
        ],
      },
      { type: "h2", text: "4. Convert: turn attention into revenue" },
      {
        type: "p",
        text: "Visibility without conversion is a vanity metric. We tune the journey from first touch to purchase — landing pages, proof, offers and calls to action — so the attention you earn turns into revenue instead of leaking away.",
      },
      {
        type: "quote",
        text: "Clarity compounds. A brand that knows exactly what it stands for gets cheaper to grow every single month.",
      },
      { type: "h2", text: "5. Compound: double down on what works" },
      {
        type: "p",
        text: "Scaling isn't a launch; it's a loop. Every month we measure what moved revenue, cut what didn't, and reinvest in what compounds. Search assets appreciate, authority builds on itself, and brand recognition lowers the cost of every future sale. That's the flywheel — and it's why our clients' growth accelerates over time rather than plateauing.",
      },
      { type: "h2", text: "The order matters" },
      {
        type: "p",
        text: "The reason this framework works is the sequence. Skip positioning and you scale confusion. Skip findability and clarity goes unseen. Skip conversion and you fund everyone's growth but your own. Run them in order and each stage makes the next one cheaper — which is exactly how a small business becomes the obvious choice in its category.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

/** Human-friendly date, deterministic (no locale surprises across builds). */
export function formatDate(iso: string): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `${months[m - 1]} ${d}, ${y}`;
}
