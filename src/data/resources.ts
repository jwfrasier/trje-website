// ─────────────────────────────────────────────────────────────────────────
// TRJE RESOURCES — the audited list.
//
// FOR CHAD (and whoever audits this later):
// This file is the single source of truth for the /resources page. Edit the
// content here; you never have to touch layout or styling.
//
// Curation standard: tried-and-true, historic Christianity. Non-progressive.
// Prefer resources that hold to historic orthodox faith (the creeds, the
// authority of Scripture). When in doubt, leave it out and flag it.
//
// HOW TO EDIT
//   - Each category has `scripture` (always shown, never filtered) and
//     `resources` (filtered by the level a visitor picks).
//   - A resource's `levels` can list more than one: ["new", "growing"].
//   - `cost` is "free" or "paid" and renders as a Free / Paid badge. It is
//     informational only; nothing is sold here.
//   - Scripture links point at the NET Bible reader on bible.org
//     (https://netbible.org/bible/<Book>+<Chapter>).
//   - To add a category, copy a block and give it a unique `id` (used as the
//     in-page jump-link anchor). To remove one, delete its block.
// ─────────────────────────────────────────────────────────────────────────

export type Level = "new" | "growing" | "seasoned";
export type Cost = "free" | "paid";

export interface ScriptureLink {
  ref: string; // display reference, e.g. "1 Peter 3:15"
  url: string; // bible.org / NET Bible reader
}

export interface Resource {
  name: string;
  from: string; // organization or author
  blurb: string; // one line
  url: string;
  cost: Cost;
  levels: Level[];
}

export interface Category {
  id: string; // slug, used for the jump-link anchor
  title: string;
  blurb: string;
  scripture: ScriptureLink[];
  resources: Resource[];
}

// The three faith levels, in order. Used by the level chooser.
export const LEVELS: { id: Level; label: string; who: string }[] = [
  { id: "new", label: "New", who: "New to faith, or just starting to take it seriously." },
  { id: "growing", label: "Growing", who: "Walking it a while, ready to go deeper." },
  { id: "seasoned", label: "Seasoned", who: "Long on the road, after weightier study." },
];

// Helper for NET Bible reader links on bible.org.
const net = (ref: string) =>
  `https://netbible.org/bible/${ref.replace(/\s+/g, "+")}`;

export const CATEGORIES: Category[] = [
  {
    id: "apologetics",
    title: "Apologetics",
    blurb:
      "Honest answers to honest questions, and reasons for the hope we hold.",
    scripture: [
      { ref: "1 Peter 3", url: net("1 Peter 3") },
      { ref: "Acts 17", url: net("Acts 17") },
      { ref: "Romans 1", url: net("Romans 1") },
      { ref: "John 20", url: net("John 20") },
    ],
    resources: [
      { name: "Reasonable Faith", from: "William Lane Craig", blurb: "Careful, philosophical case for the Christian faith.", url: "https://www.reasonablefaith.org", cost: "free", levels: ["growing", "seasoned"] },
      { name: "Stand to Reason", from: "Greg Koukl", blurb: "Clear thinking and gracious answers for everyday conversations.", url: "https://www.str.org", cost: "free", levels: ["new", "growing"] },
      { name: "Cold-Case Christianity", from: "J. Warner Wallace", blurb: "A homicide detective examines the evidence for Jesus.", url: "https://coldcasechristianity.com", cost: "free", levels: ["new", "growing"] },
      { name: "Got Questions", from: "Got Questions Ministries", blurb: "Plain answers to thousands of common faith questions.", url: "https://www.gotquestions.org", cost: "free", levels: ["new"] },
    ],
  },
  {
    id: "theology",
    title: "Theology & Doctrine",
    blurb: "Who God is, what the church has always believed, and why it matters.",
    scripture: [
      { ref: "John 1", url: net("John 1") },
      { ref: "Colossians 1", url: net("Colossians 1") },
      { ref: "Ephesians 2", url: net("Ephesians 2") },
      { ref: "Hebrews 1", url: net("Hebrews 1") },
    ],
    resources: [
      { name: "The Gospel Coalition", from: "TGC", blurb: "Essays, courses, and a confessional grounding in the gospel.", url: "https://www.thegospelcoalition.org", cost: "free", levels: ["new", "growing", "seasoned"] },
      { name: "Ligonier Ministries", from: "R.C. Sproul", blurb: "Teaching on the holiness of God and the core doctrines of the faith.", url: "https://www.ligonier.org", cost: "free", levels: ["growing", "seasoned"] },
      { name: "Got Questions", from: "Got Questions Ministries", blurb: "Short, accessible answers to doctrinal questions.", url: "https://www.gotquestions.org", cost: "free", levels: ["new"] },
      { name: "Desiring God", from: "John Piper", blurb: "God-centered theology written for the heart, not just the head.", url: "https://www.desiringgod.org", cost: "free", levels: ["growing"] },
    ],
  },
  {
    id: "academic",
    title: "Academic & Scholarship",
    blurb: "For the student: biblical studies, languages, and serious study tools.",
    scripture: [
      { ref: "2 Timothy 2", url: net("2 Timothy 2") },
      { ref: "Acts 17", url: net("Acts 17") },
      { ref: "Psalm 119", url: net("Psalm 119") },
      { ref: "Luke 1", url: net("Luke 1") },
    ],
    resources: [
      { name: "BibleProject", from: "BibleProject", blurb: "Free animated videos and classes tracing the Bible's themes and books.", url: "https://bibleproject.com", cost: "free", levels: ["new", "growing"] },
      { name: "NET Bible", from: "bible.org", blurb: "A modern translation with tens of thousands of translators' notes.", url: "https://netbible.org", cost: "free", levels: ["new", "growing", "seasoned"] },
      { name: "Logos Bible Software", from: "Faithlife", blurb: "Deep study library with original-language tools.", url: "https://www.logos.com", cost: "paid", levels: ["growing", "seasoned"] },
      { name: "Zondervan Academic", from: "Zondervan", blurb: "Seminary-level texts and online courses.", url: "https://www.zondervanacademic.com", cost: "paid", levels: ["seasoned"] },
    ],
  },
  {
    id: "church-history",
    title: "Church History",
    blurb: "The long story we are part of: the early church, the creeds, the faith handed down.",
    scripture: [
      { ref: "Hebrews 11", url: net("Hebrews 11") },
      { ref: "Hebrews 12", url: net("Hebrews 12") },
      { ref: "Jude 1", url: net("Jude 1") },
      { ref: "2 Thessalonians 2", url: net("2 Thessalonians 2") },
    ],
    resources: [
      { name: "Christian History Institute", from: "CHI", blurb: "Stories and primary sources from twenty centuries of the church.", url: "https://christianhistoryinstitute.org", cost: "free", levels: ["new", "growing"] },
      { name: "Ligonier: Church History", from: "Ligonier Ministries", blurb: "Teaching series on the early church through the Reformation.", url: "https://www.ligonier.org", cost: "free", levels: ["growing", "seasoned"] },
      { name: "Crossway", from: "Crossway", blurb: "Editions of historic Christian texts and creeds.", url: "https://www.crossway.org", cost: "paid", levels: ["seasoned"] },
    ],
  },
  {
    id: "discipleship",
    title: "Discipleship & Christian Living",
    blurb: "Following Jesus day to day: prayer, the disciplines, and growth.",
    scripture: [
      { ref: "Matthew 28", url: net("Matthew 28") },
      { ref: "John 15", url: net("John 15") },
      { ref: "Galatians 5", url: net("Galatians 5") },
      { ref: "Colossians 3", url: net("Colossians 3") },
    ],
    resources: [
      { name: "Desiring God", from: "John Piper", blurb: "Daily articles on prayer, joy, and walking with God.", url: "https://www.desiringgod.org", cost: "free", levels: ["new", "growing", "seasoned"] },
      { name: "Gospel in Life", from: "Tim Keller", blurb: "Sermons and study on living the gospel in the everyday.", url: "https://gospelinlife.com", cost: "free", levels: ["growing"] },
      { name: "BibleProject", from: "BibleProject", blurb: "Approachable starting points for new disciples.", url: "https://bibleproject.com", cost: "free", levels: ["new"] },
      { name: "RightNow Media", from: "RightNow Media", blurb: "A large library of video Bible studies for groups and families.", url: "https://www.rightnowmedia.org", cost: "paid", levels: ["new", "growing", "seasoned"] },
    ],
  },
  {
    id: "suffering",
    title: "Suffering, Doubt & the Wall",
    blurb:
      "For the hard middle: hardship, lament, and doubt walked through faithfully.",
    scripture: [
      { ref: "Job 1", url: net("Job 1") },
      { ref: "Psalm 13", url: net("Psalm 13") },
      { ref: "Romans 5", url: net("Romans 5") },
      { ref: "2 Corinthians 1", url: net("2 Corinthians 1") },
      { ref: "Lamentations 3", url: net("Lamentations 3") },
    ],
    resources: [
      { name: "Emotionally Healthy Discipleship", from: "Pete Scazzero", blurb: "On the wall, and growth that joins emotional and spiritual maturity.", url: "https://www.emotionallyhealthy.org", cost: "free", levels: ["new", "growing", "seasoned"] },
      { name: "Joni and Friends", from: "Joni Eareckson Tada", blurb: "Hope and ministry in the middle of suffering and disability.", url: "https://www.joniandfriends.org", cost: "free", levels: ["new", "growing", "seasoned"] },
      { name: "CCEF", from: "CCEF", blurb: "Christ-centered counseling for doubt, grief, and the inner life.", url: "https://www.ccef.org", cost: "free", levels: ["growing", "seasoned"] },
      { name: "Desiring God: Suffering", from: "John Piper", blurb: "Writing on enduring pain without losing sight of God.", url: "https://www.desiringgod.org", cost: "free", levels: ["growing"] },
    ],
  },
  {
    id: "culture-politics",
    title: "Culture & Politics",
    blurb: "Faith in public life, engaged from a historic Christian conviction.",
    scripture: [
      { ref: "Romans 13", url: net("Romans 13") },
      { ref: "1 Peter 2", url: net("1 Peter 2") },
      { ref: "Daniel 1", url: net("Daniel 1") },
      { ref: "Micah 6", url: net("Micah 6") },
    ],
    resources: [
      { name: "Colson Center", from: "Colson Center", blurb: "Worldview teaching and the daily Breakpoint commentary.", url: "https://www.colsoncenter.org", cost: "free", levels: ["growing", "seasoned"] },
      { name: "The Gospel Coalition", from: "TGC", blurb: "Thoughtful writing on the church and the public square.", url: "https://www.thegospelcoalition.org", cost: "free", levels: ["new", "growing", "seasoned"] },
      { name: "First Things", from: "First Things", blurb: "A serious journal on religion in public life.", url: "https://www.firstthings.com", cost: "free", levels: ["seasoned"] },
    ],
  },
  {
    id: "marriage-family",
    title: "Marriage, Family & Sexuality",
    blurb: "The biblical vision for marriage, the home, and our bodies.",
    scripture: [
      { ref: "Genesis 2", url: net("Genesis 2") },
      { ref: "Ephesians 5", url: net("Ephesians 5") },
      { ref: "1 Corinthians 7", url: net("1 Corinthians 7") },
      { ref: "Matthew 19", url: net("Matthew 19") },
    ],
    resources: [
      { name: "Focus on the Family", from: "Focus on the Family", blurb: "Practical help for marriage, parenting, and the home.", url: "https://www.focusonthefamily.com", cost: "free", levels: ["new", "growing", "seasoned"] },
      { name: "CCEF", from: "CCEF", blurb: "Counseling resources for marriage and relationships.", url: "https://www.ccef.org", cost: "free", levels: ["growing"] },
      { name: "Gospel in Life: Marriage", from: "Tim Keller", blurb: "Teaching on covenant marriage and self-giving love.", url: "https://gospelinlife.com", cost: "free", levels: ["growing"] },
      { name: "RightNow Media: Marriage", from: "RightNow Media", blurb: "Video studies for couples and families.", url: "https://www.rightnowmedia.org", cost: "paid", levels: ["new", "growing", "seasoned"] },
    ],
  },
];
