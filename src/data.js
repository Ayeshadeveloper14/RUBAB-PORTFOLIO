/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SERVICES = [
  {
    id: "fb-ads",
    title: "Meta Ads & Social Advertising",
    description: "End-to-end management of Facebook, Instagram, and Messenger campaigns. Specialized in pixel tracking, high-converting copy, design briefs, custom audiences, custom events, and heavy scaling.",
    benefits: [
      "Advanced custom & lookalike audience building",
      "Dynamic Product Ads (DPA) for Catalog E-commerce",
      "A/B split testing for creatives, angles, and copies",
      "Meta Pixel, Custom Conversions & Conversions API (CAPI) setup"
    ],
    iconName: "Facebook",
    category: "Paid Advertising",
    typicalDeliverable: "Complete Campaign Setup, Copywriting, Weekly Opts & Monthly Report",
    startingPrice: "$500 / month"
  },
  {
    id: "google-ads",
    title: "Google Search & Shopping Ads",
    description: "High-intent PPC campaigns that capture customers exactly when they are searching for your service. Focuses on quality score optimization, negative keyword curation, and Maximizing Conversions.",
    benefits: [
      "Granular keyword research & intent segregation",
      "Precision negative keyword optimization to reduce wasteful ad spend",
      "Performance Max (PMax) & Shopping ads scaling",
      "Search, Display, YouTube, and Local Discovery networks"
    ],
    iconName: "Search",
    category: "Paid Advertising",
    typicalDeliverable: "Keyword Matrix, Campaign Blueprint, Ad Copy Drafts & Bi-weekly Optimizations",
    startingPrice: "$600 / month"
  },
  {
    id: "instagram-smm",
    title: "Organic Instagram & TikTok Marketing",
    description: "Strategic content planning, growth optimization, aesthetics curation, and real follower engagement to build a community that trusts your brand.",
    benefits: [
      "Monthly content calendars & aesthetic Grid design",
      "Viral reel/short-form content conceptualization & scripts",
      "Hashtag strategy & SEO optimization for platform search",
      "Proactive outreach & localized community management"
    ],
    iconName: "Instagram",
    category: "Content & Social",
    typicalDeliverable: "15 Custom Posts/Reels, Caption Drafts, Hashtag Guide & Engagement Hours",
    startingPrice: "$450 / month"
  },
  {
    id: "seo-optimization",
    title: "Search Engine Optimization (SEO)",
    description: "Dominating Google Search organically. Technical audits, high-impact on-page optimizations, and structured content roadmaps targeting commercially viable queries.",
    benefits: [
      "Deep technical audits (Core Web Vitals, crawl errors, indexation)",
      "High-intent keyword discovery & competitor analysis",
      "On-page optimization (Meta tags, URL schema, internal linking)",
      "Content authority architecture and backlink planning"
    ],
    iconName: "Globe",
    category: "Organic & SEO",
    typicalDeliverable: "Comprehensive Technical Audit, On-page Optimization of 10 pages, Keyword Roadmap",
    startingPrice: "$700 / month"
  },
  {
    id: "lead-generation",
    title: "High-Converting Lead Funnels",
    description: "Constructing high-converting, fully responsive landing pages, leads magnets, and automated email follow-ups to turn cold traffic into qualified sales inquiries.",
    benefits: [
      "Landing page wireframing and conversion copywriting",
      "Lead magnet development & interactive quizzes",
      "Email automation triggers & welcome drip sequences",
      "CRM migrations (HubSpot, LeadConnector, Mailchimp)"
    ],
    iconName: "TrendingUp",
    category: "Strategy & Analytics",
    typicalDeliverable: "Ad Funnel Copy, Landing Page Design Consultation, 5-Part Email Drip Sequence",
    startingPrice: "$800 / campaign"
  },
  {
    id: "content-marketing",
    title: "Content & Copywriting Strategy",
    description: "Crafting narratives that convert. Blog posts, persuasive landing page copy, sales email newsletters, and ad creatives designed to resonate with buyer psychology.",
    benefits: [
      "Persuasive ad copy aligning with customer pain points",
      "SEO-friendly long-form blog articles (1500+ words)",
      "Newsletter calendar designed for engagement & retention",
      "Brand voice design & content standard guides"
    ],
    iconName: "FileText",
    category: "Content & Social",
    typicalDeliverable: "4 SEO Articles, 10 Ad Copies, 4 Newsletter Campaigns",
    startingPrice: "$350 / project"
  }
];

export const SKILLS = [
  { name: "Meta Ads Manager", category: "Paid Advertising", percentage: 95, level: "Expert", yearsExperience: 5 },
  { name: "Google Ads (PPC / Shopping)", category: "Paid Advertising", percentage: 90, level: "Expert", yearsExperience: 4 },
  { name: "On-Page & Technical SEO", category: "Organic & SEO", percentage: 88, level: "Expert", yearsExperience: 4 },
  { name: "Social Media Strategy & Reels Curation", category: "Content & Social", percentage: 92, level: "Expert", yearsExperience: 5 },
  { name: "Conversion Rate Optimization (CRO)", category: "Strategy & Analytics", percentage: 85, level: "Expert", yearsExperience: 3 },
  { name: "Google Analytics (GA4) & Tag Manager", category: "Strategy & Analytics", percentage: 90, level: "Expert", yearsExperience: 4 },
  { name: "Competitor Research & Keyword Discovery", category: "Organic & SEO", percentage: 93, level: "Expert", yearsExperience: 4 },
  { name: "Email Copywriting & Automation Flows", category: "Content & Social", percentage: 86, level: "Expert", yearsExperience: 3 }
];

export const PROJECTS = [
  {
    id: "modest-apparel",
    title: "Sovereign Modest - $12k Spend to $98k Revenue in 90 Days",
    client: "Sovereign Modest",
    industry: "E-commerce - Female Apparel",
    adSpend: "$12,350",
    revenueGenerated: "$98,420",
    roas: "7.96x",
    impressions: "1.4M",
    tags: ["Meta Ads", "Retargeting", "Catalog Ads", "Copywriting"],
    description: "An elegant modest apparel brand was struggling with inconsistent sales and a low lifetime customer value. We overhauled their Meta pixel tracking, structured their ad funnel into three key temperature categories (Cold prospecting, Warm consideration, Hot catalog retargeting), and tested five creative angles.",
    challenge: "Low CTR (under 0.8%) and a disjointed sales flow that left over 75% of cart-adders without a follow-up offer.",
    strategy: [
      "Transitioned static product ads into dynamic, user-generated-style reels focused on fabric flow and material styling.",
      "Engineered automated Catalog Dynamic Product Ads (DPA) with custom overlay styling offering seasonal perks.",
      "Implemented standard Conversions API (CAPI) to bypass Safari tracking limitations, capturing 22% more conversion data."
    ],
    results: [
      "7.96x Overall ROAS (Return on Ad Spend) across the 90-day scaling period.",
      "+240% Increase in online transactions compared to the preceding quarter.",
      "Reduced Cost-per-Acquisition (CPA) from average $28.50 down to a profitable $10.12."
    ],
    category: "Paid Ads",
    duration: "3 Months (Q1 2026)",
    statusMetrics: [
      { label: "ROAS Reached", value: "7.96x", trend: "up" },
      { label: "Revenue Growth", value: "+340%", trend: "up" },
      { label: "CPA Reduction", value: "-64%", trend: "up" }
    ]
  },
  {
    id: "real-estate-usa",
    title: "US West-Coast Real Estate - 240+ High-Value Buyer Leads",
    client: "Elite Living Properties",
    industry: "Real Estate Brokerage",
    adSpend: "$8,200",
    leadsGenerated: "246 Qualified Leads",
    roas: "N/A (Lead Generation)",
    impressions: "420K",
    tags: ["Google PPC", "Local SEO", "Landing Page", "Lead Gen"],
    description: "A prominent West Coast real estate team was paying over $120 per lead on legacy platforms (Zillow and Realtor) with poor quality. We developed a highly tailored local search funnel on Google Search and built direct-response interactive single-property landing pages accompanied by text alerts for realtors.",
    challenge: "Lead dilution, where 90% of contacts had invalid numbers or weren't commercially qualified to obtain pre-approval.",
    strategy: [
      "Built multi-step qualifying forms requiring users to state their targeted home-buying timeline and mortgage pre-approval status.",
      "Wrote high-intent, long-tail search ads dynamically capturing suburbs keywords and local school districts.",
      "Created instant SMS lead-routing webhook connecting leads with active realtors within 90 seconds of submission."
    ],
    results: [
      "246 highly-qualified, detailed buyer lead inquiries generated with verified local contact numbers.",
      "Brought Cost-Per-Lead (CPL) down from $120 to just $33.33.",
      "Resulted in 4 closed premium property contracts within 45 days of campaign initiation."
    ],
    category: "Lead Gen",
    duration: "2 Months",
    statusMetrics: [
      { label: "Verified Leads", value: "246", trend: "up" },
      { label: "Cost Per Lead", value: "$33.33", trend: "up" },
      { label: "Contact Match Rate", value: "94%", trend: "up" }
    ]
  },
  {
    id: "saas-seo",
    title: "B2B SaaS - 180% Organic Traffic Growth in 6 Months",
    client: "FormulateHR Solutions",
    industry: "B2B Software - HR & Payroll",
    adSpend: "$0 (Organic Growth)",
    trafficGenerated: "+180% Monthly Unique Visitors",
    roas: "Invaluable Strategy",
    impressions: "3.2M (Search Console)",
    tags: ["SEO Audit", "On-page Optimizer", "Link Architecture", "Content Strategy"],
    description: "An emerging HR SaaS platform had a technologically sound product but zero organic presence for commercially viable search terms. We performed a systematic technical SEO audit, resolved critical crawl errors, restructured their silo internal linking architecture, and executed a 24-article key informational topical cluster.",
    challenge: "Zero keywords ranking on page 1 of Google, zero trust flow, and major indexation blockages caused by bad javascript rendering.",
    strategy: [
      "Resolved server-side indexation, XML sitemap leaks, and schema-markup layouts for software reviews.",
      "Architected three core clusters targeting 'Automated Timesheet Compliance' and 'HR software for multi-state systems'.",
      "Acquired high-quality niche placements and context-rich editorial links to raise Domain Rating from 20 to 42."
    ],
    results: [
      "+180% organic monthly search traffic within 6 months, growing from 4k to over 11.2k monthly clicks.",
      "42 commercially crucial keywords ranking on Google Top 3 positions.",
      "320+ organic SaaS software trial signups directly credited to content marketing pages."
    ],
    category: "SEO",
    duration: "6 Months",
    statusMetrics: [
      { label: "Traffic Boost", value: "+180%", trend: "up" },
      { label: "Google Top 3", value: "42 keywords", trend: "up" },
      { label: "SaaS Conversions", value: "+215%", trend: "up" }
    ]
  },
  {
    id: "skincare-social",
    title: "Organic Beauty Brand - 45k Followers & Social Commerce Funnel",
    client: "Sage & Herb Co.",
    industry: "D2C Cosmetics & Skincare",
    adSpend: "$4,500 Ads + Organic",
    revenueGenerated: "$35,800 Sales",
    roas: "7.9x",
    impressions: "2.8M Visited",
    tags: ["Instagram Reels", "Influencer Seed", "Social Shop", "Aesthetic Curation"],
    description: "A cruelty-free botanical skincare startup wanted to capture Gen-Z and Millennial buyers. We overhauled their visual aesthetic, established high-retention reel guidelines, built an micro-influencer product-seeding routine (zero fee, product-exchange only), and configured direct social shop integrations.",
    challenge: "Low online brand awareness, a chaotic, non-cohesive grid aesthetic, and an empty profile with zero consumer trust proofs.",
    strategy: [
      "Formulated a clean, high-contrast, premium dark/beige grid aesthetic featuring high-resolution texture swatches and interactive customer unboxings.",
      "Introduced educational hooks explaining 'the science of clay ingredients', boosting average reel view times from 2s to 12s.",
      "Seeded products to 65 micro-influencers (1k-10k followers) yielding 52 user-generated reviews and dynamic aesthetic videos."
    ],
    results: [
      "Gained +45,000 highly active, engaged instagram followers across a 60-day campaign.",
      "Direct brand engagement rate raised to 6.8% (well above the 1.5% industry standard).",
      "Attributed $35,800 online shop revenue directly to social messaging links and bio link-in-bio clicks."
    ],
    category: "Social Media",
    duration: "60 Days",
    statusMetrics: [
      { label: "Followers Gained", value: "+45K", trend: "up" },
      { label: "Engagement", value: "6.8%", trend: "up" },
      { label: "Sales Attributed", value: "$35.8k", trend: "up" }
    ]
  }
];

export const EXPERIENCES = [
  {
    id: "exp-freelance",
    role: "Lead Digital Marketing Specialist (Freelance Portfolio)",
    company: "Upwork & Fiverr (Top Rated Plus Freelancer)",
    period: "2023 - Present",
    description: [
      "Independently consulted 60+ global brands in the E-commerce, Real Estate, and SaaS verticals.",
      "Personally managed and optimized over $350k in active paid advertising budgets across Meta, Google, and Pinterest platforms.",
      "Constructed custom end-to-end user growth frameworks, lowering average customer Acquisition cost (CAC) by up to 45%.",
      "Maintained 100% job success rating with repeated 5-star direct reviews on elite freelance platforms."
    ],
    type: "Freelance",
    skillsApplied: ["Meta Ads", "Google Ads", "Conversion Rate Optimization", "Growth Auditing", "Client Relations"]
  },
  {
    id: "exp-agency",
    role: "Senior Growth & Campaign Manager",
    company: "Vanguard Digital Agency (Dubai Branch)",
    period: "2021 - 2023",
    description: [
      "Led a multidisciplinary campaign execution team of 4 expert graphic designers, video editors, and junior copywriters.",
      "Ran omni-channel campaigns for leading Middle-Eastern fashion brands bringing in over $1.5M in trackable digital revenues.",
      "Collaborated direct with brand owners to execute comprehensive conversion growth projects and local landing page speed designs.",
      "Negotiated creative deals with micro-influencers and managed physical product fulfillment for UGC sourcing."
    ],
    type: "Agency",
    skillsApplied: ["Team Leadership", "Omni-channel Strategy", "Meta CAPI Integration", "Brand Positioning"]
  },
  {
    id: "exp-corp",
    role: "Junior Search Analyst & PPC Executive",
    company: "Nexus Media Corporations",
    period: "2019 - 2021",
    description: [
      "Monitored, analyzed, and optimized Google Search, Display & Performance Max accounts for corporate local utility companies.",
      "Executed granular technical search audits and targeted high-intent landing page copy strategies.",
      "Handled daily bids management, budget pacing trackers, negative keyword additions, and search term analysis reports.",
      "Interpreted web log trends in Google Analytics (UA/GA4) with custom conversions setup."
    ],
    type: "Corporate",
    skillsApplied: ["Google Ads", "Keyword Mapping", "Google Analytics", "Budget Pacing", "Technical Auditing"]
  }
];

export const CERTIFICATIONS = [
  {
    id: "meta-buyer",
    title: "Meta Certified Media Buying Professional",
    issuer: "Meta",
    year: "2024",
    credentialId: "META-MBP-98012X",
    badgeColor: "bg-blue-600/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "meta-creative",
    title: "Meta Certified Creative Strategy Expert",
    issuer: "Meta",
    year: "2025",
    credentialId: "META-CSE-11204X",
    badgeColor: "bg-blue-600/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "google-search",
    title: "Google Ads Search Certified Specialist",
    issuer: "Google",
    year: "2024",
    credentialId: "G-SCH-75129",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  {
    id: "google-shopping",
    title: "Google Ads Shopping & E-Commerce Campaign Certified",
    issuer: "Google",
    year: "2025",
    credentialId: "G-SHOP-88231",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  {
    id: "google-analytics",
    title: "Google Analytics 4 (GA4) Individual Qualification",
    issuer: "Google",
    year: "2024",
    credentialId: "G-GA4-00129",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  {
    id: "semrush-seo",
    title: "SEMrush Technical SEO & Competitor Analysis Expert",
    issuer: "SEMrush",
    year: "2024",
    credentialId: "SEM-SEO-87103",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    id: "hubspot-inbound",
    title: "Inbound Marketing & Lead Generation Certification",
    issuer: "HubSpot",
    year: "2023",
    credentialId: "HS-INB-66230",
    badgeColor: "bg-orange-600/10 text-orange-400 border-orange-600/20"
  }
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Aisha Al-Hashimi",
    role: "Creative Director",
    company: "Sovereign Modest Co.",
    review: "Rubab engineered a high-performance paid ads acquisition machine that achieved an incredible 7.96x ROAS.",
    rating: 5,
    platform: "Direct Client",
    country: "United Arab Emirates"
  },
  {
    id: "t-2",
    name: "Marcus Vance",
    role: "Principal Broker & Founder",
    company: "Vance Real Estate Partners",
    review: "Her search campaign optimizations and custom landing pages cut our customer acquisition costs by 72%.",
    rating: 5,
    platform: "Upwork",
    country: "United States"
  },
  {
    id: "t-3",
    name: "Elena Rostova",
    role: "Brand & Product Lead",
    company: "Sage & Herb Cosmetics",
    review: "An exceptional blend of data science and creative taste that doubled our online social commerce conversions.",
    rating: 5,
    platform: "Fiverr",
    country: "Canada"
  }
];

export const MARKETING_TOOLS = [
  { name: "Meta Ads Manager", category: "Campaigns", proficiency: "Guru", iconName: "Layers", accentColor: "from-blue-600 to-indigo-500" },
  { name: "Google Ads Center", category: "Campaigns", proficiency: "Guru", iconName: "Search", accentColor: "from-amber-500 to-orange-500" },
  { name: "Google Analytics (GA4)", category: "Analytics", proficiency: "Expert", iconName: "BarChart3", accentColor: "from-yellow-500 to-yellow-600" },
  { name: "Google Tag Manager", category: "Analytics", proficiency: "Expert", iconName: "Tag", accentColor: "from-teal-500 to-emerald-600" },
  { name: "SEMrush", category: "Research", proficiency: "Expert", iconName: "LineChart", accentColor: "from-orange-500 to-red-600" },
  { name: "Canva Pro", category: "Design", proficiency: "Advanced", iconName: "Sparkles", accentColor: "from-purple-500 to-pink-500" },
  { name: "WordPress & Elementor", category: "Design", proficiency: "Expert", iconName: "Layout", accentColor: "from-blue-400 to-indigo-600" },
  { name: "ChatGPT & AI Prompting", category: "Automation", proficiency: "Guru", iconName: "Cpu", accentColor: "from-emerald-400 to-teal-500" }
];

export const FAQS = [
  {
    id: "f-1",
    question: "How does the onboarding phase work?",
    answer: "Our collaboration begins with a comprehensive 45-minute discovery zoom call where we review your current ad performance, pixel settings, customer lifetime values, and commercial goals. Following that, I conduct a targeted Competitor & Creative Audit, creating your setup sheet inside 5 working days before any campaigns go live.",
    category: "Onboarding"
  },
  {
    id: "f-2",
    question: "Do you include ad creatives or should we provide them?",
    answer: "A great ad thrives on native, high-converting creatives. I construct descriptive Creative Briefs specifying angles, visual hooks, copy layers, and typography. If we run organic social curation or Reels, I write exact visual scripts. Clients typically provide basic product shots/videos, and I combine, design, and overlay copy to make them optimal for high CTR.",
    category: "Strategy"
  },
  {
    id: "f-3",
    question: "Is ad budget included in your monthly packages?",
    answer: "No, all media ad spend is paid directly to the traffic platforms (Meta, Google, TikTok) using your integrated billing credentials. My fee is strictly for campaign architecture, technical tracking, conversion copy, ongoing optimizations, and daily performance scaling.",
    category: "Pricing"
  },
  {
    id: "f-4",
    question: "How do you track campaign successes?",
    answer: "We avoid vanity metrics like simple 'likes' or 'impressions' (unless brand awareness is the exact goal). We focus on key revenue metrics: Trackable Purchase Value, Quality Lead Volume, Cost-per-Acquisition (CPA), Return on Ad Spend (ROAS), and Marketing Efficiency Ratio (MER). I provide a custom real-time Looker Studio Dashboard for absolute transparency.",
    category: "Reporting"
  },
  {
    id: "f-5",
    question: "Do you offer a performance guarantee?",
    answer: "While it is unethical to guarantee exact sales volume because product-market fit, shipping times, customer service, and website speed are outside an advertiser's direct controls, I guarantee precision execution. We deploy scientific campaign patterns, strict testing structures, and real-time budget protection parameters to eliminate waste and maximize your probability of high scaling.",
    category: "Strategy"
  }
];
