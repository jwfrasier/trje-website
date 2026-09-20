// ─────────────────────────────────────────────────────────────────────────
// TRJE START HERE — foundational questions for people new to the Bible.
//
// FOR CHAD (and whoever edits this later):
// This file is the single source of truth for the "Start Here" page
// (served at /resources). Edit the content here; you never have to touch
// layout or styling.
//
// HOW TO EDIT
//   - Each category has an `intro` (always visible), optional `items`
//     (questions, people, or sub-topics), and an optional `outro`.
//   - A body is a list of blocks. A plain string is a paragraph. A
//     `{ list: [...] }` block renders as a bulleted list.
//   - `display: "accordion"` collapses each item behind its heading so the
//     page stays approachable. `display: "open"` shows everything.
//   - To add a category, copy a block and give it a unique `id` (used as the
//     in-page jump-link anchor). To remove one, delete its block.
// ─────────────────────────────────────────────────────────────────────────

export type Block = string | { list: string[] };

export interface Item {
  heading: string;
  body: Block[];
}

export interface Category {
  id: string; // slug, used for the jump-link anchor
  title: string;
  intro: Block[];
  itemsLabel?: string; // small label above the items
  display?: "accordion" | "open";
  items?: Item[];
  outro?: Block[];
}

export const CATEGORIES: Category[] = [
  {
    id: "the-bible",
    title: "What is the Bible?",
    intro: [
      "The Bible is God’s Word given to us through human authors, inspired by the Holy Spirit. It tells one central story: God’s work to rescue us from sin and restore our relationship with Him through His Son, Jesus Christ.",
    ],
    itemsLabel: "Foundational questions",
    display: "accordion",
    items: [
      {
        heading: "Is the Bible one book or many books?",
        body: [
          "The Bible is one collection made up of many books. Most Protestant Bibles contain 66 books: 39 in the Old Testament and 27 in the New Testament.",
          "These books include history, poetry, letters, and teachings written by different people over many centuries. Together, they tell one connected story of God’s love and His plan to bring us into a relationship with Him through Jesus.",
        ],
      },
      {
        heading: "Who wrote it?",
        body: [
          "Kings, prophets, fishermen, and others wrote the words we have, spanning about 1,500 years across three continents—Asia, Africa, and Europe. Nearly forty persons authored the Bible, including Moses, Joshua, Samuel, David, Solomon, Isaiah, Jeremiah, Ezekiel, Daniel, Matthew, Mark, Luke, John, Paul, James, Peter, and Jude, along with unknown human authors of Job, Esther, and Hebrews.",
        ],
      },
      {
        heading: "What does “inspired by God” mean?",
        body: [
          "“Inspired by God” means that God guided the people who wrote the Bible through His Holy Spirit. They wrote using their own personalities, experiences, and styles, while God worked through them to communicate His message. The Bible is more than a collection of human thoughts about God—it is God’s Word to us.",
        ],
      },
      {
        heading: "Are all Bible translations the same?",
        body: [
          "No. Bible translations use different approaches to bring the original languages into English. Some, like the ESV and NASB, stay closer to the original wording. Others, like the NLT, focus more on expressing the meaning in clear, everyday language.",
          "Many translations blend both approaches. Comparing translations can help you understand a passage more clearly.",
        ],
      },
      {
        heading: "Who decided which books belonged in the Bible?",
        body: [
          "No single person or council decided which books belong in the Bible. Over centuries, Jewish and Christian communities recognized certain writings as sacred and authoritative because they believed God had inspired them.",
          "From this faith perspective, God inspired the books, and His people recognized their authority. Church councils later formally affirmed collections already widely accepted, though Christian traditions still differ on some books.",
        ],
      },
      {
        heading: "What does “canon” mean?",
        body: [
          "“Canon” originally referred to a reed or measuring rod and came to mean a standard or authoritative list.",
          "The biblical canon is the collection of books recognized as God’s Word—the standard for faith and practice. Different religious traditions recognize slightly different collections of books, but Protestant Bibles contain sixty-six books: thirty-nine in the Old Testament and twenty-seven in the New Testament.",
        ],
      },
      {
        heading: "How were the writings preserved?",
        body: [
          "Biblical writings were preserved by generations of scribes who copied them by hand, replacing worn manuscripts with new copies. Jewish scribes followed strict copying rules, while Christian scribes and monks collected, copied, and protected manuscripts in churches and monasteries.",
          "Although copying mistakes occurred, thousands of surviving manuscripts allow scholars to compare copies, identify differences, and work to establish the original wording.",
        ],
      },
      {
        heading: "Has the Bible been changed over time?",
        body: [
          "The Bible has been preserved with remarkable consistency, though differences exist among ancient copies. Most are minor, such as spelling differences, while some involve whole verses or passages. Modern Bibles often flag these in footnotes.",
          "Most modern translations work from Hebrew, Aramaic, and Greek texts informed by ancient manuscripts—not a chain of previous translations. Differences in English wording often reflect translation choices rather than changes to the underlying text.",
        ],
      },
      {
        heading: "Why are there different versions of the Bible?",
        body: [
          "Different Bible versions exist because translators balance staying close to the original wording with making the meaning clear in English. Some follow the Hebrew and Greek wording closely; others focus on expressing the meaning in natural, everyday language.",
          "New translations also reflect changes in English, helping readers understand words and expressions that have become unfamiliar.",
        ],
      },
      {
        heading: "What is a Gospel?",
        body: [
          "“Gospel” means “good news.” It is the message that Jesus died for our sins and rose again, offering forgiveness and new life to those who believe in Him.",
          "The four Gospels (Matthew, Mark, Luke, and John) are the Bible’s accounts of Jesus’s life, teachings, death, and resurrection.",
        ],
      },
      {
        heading: "What is an epistle?",
        body: [
          "An epistle is a letter. The New Testament contains 21 epistles written to churches, groups of believers, or individuals to explain Christian teachings, address problems, and encourage faithful living.",
          "Although written for specific people and situations, they continue to guide Christians in understanding and living out our faith.",
        ],
      },
      {
        heading: "What’s the overarching story of the Bible?",
        body: [
          "Creation → Fall → Redemption → Restoration",
          "The Bible tells the story of God creating the world, humanity turning away from Him, and His plan to rescue and restore what was broken.",
          "That story centers on Jesus, whose life, death, and resurrection bring salvation, and looks forward to His return, when believers will live forever with God in His restored creation (referred to as heaven).",
          "Each smaller story in the Bible fits within this larger story of God’s love and redemption.",
        ],
      },
      {
        heading: "Where should I start reading?",
        body: [
          "There are many opinions about the best place to begin reading Scripture, but most would agree the gospels are the best starting point. Matthew, Mark, and Luke are all good options. Then move on to the book of Acts.",
          "John is also a wonderful gospel, but John leans heavily into the spiritual part of the story, which may be a little confusing until you’re more familiar with the other gospels.",
          "All of the gospels tell the story of Jesus, and Acts continues with His followers, showing how the Holy Spirit helped them share the good news and build the early church.",
        ],
      },
      {
        heading: "Do I read every book the same way?",
        body: [
          "No. Different parts of the Bible should be read according to their style and purpose. History tells what happened, poetry uses imagery, and letters offer teaching and guidance.",
          "Understanding the type of writing and its context helps us recognize what is literal or figurative and understand the intended meaning.",
        ],
      },
    ],
  },

  {
    id: "old-testament",
    title: "The Old Testament",
    intro: [
      "The Old Testament helps us understand who God is and the story that leads to Jesus. It was the Scripture Jesus and the apostles read and taught, and it provides the background for His teachings and mission.",
      "Its accounts of faith, failure, mercy, and hope still guide Christians today. Together, the Old and New Testaments tell one connected story of God’s work to rescue and restore His people.",
    ],
    itemsLabel: "Foundational questions",
    display: "accordion",
    items: [
      {
        heading: "What is the Law? Do Christians have to follow it?",
        body: [
          "The Law is God’s instruction to Israel (the people), given through Moses to guide their worship and daily life, and includes the well-known Ten Commandments. The laws given to the Israelites fall generally into the categories of moral law, civil law, and ceremonial law.",
          "Christians follow Jesus under the new covenant and do not observe all of the laws ancient Israel did. Many Christian traditions distinguish between moral commands that continue to guide us, the civil laws for ancient Israel, and ceremonial laws fulfilled in Jesus.",
        ],
      },
      {
        heading: "Why does the Old Testament contain so many laws?",
        body: [
          "The Old Testament contains many laws because they guided every part of Israel’s life—from worship to how people treated one another. They taught Israel to reflect God’s character and be a blessing to other nations.",
          "God had already rescued them from slavery. Obeying His laws was a response to His love and mercy, an expression of devotion to Him.",
        ],
      },
      {
        heading: "What is the purpose of sacrifices?",
        body: [
          "God gave Israel sacrifices as part of their worship, including offerings connected with sin and forgiveness. These pointed forward to Jesus, whose sacrifice alone fully takes away sin.",
        ],
      },
      {
        heading: "Why did God choose Israel?",
        body: [
          "God chose Israel because of His love and His faithfulness to His promise to Abraham. His choice was a gift of grace, not something Israel earned through greatness or achievement.",
          "He called Israel (the people) to represent Him in the world, reflect His character, and be a blessing to other nations. That calling brought both privilege and responsibility.",
        ],
      },
      {
        heading: "Does the Old Testament still apply to Christians?",
        body: [
          "While Christians are not bound to observe the ritual, ceremonial, and civil laws, the Old Testament remains an essential part of the whole story God tells through Scripture, from creation and humanity’s rebellion to His work of rescue and restoration through Jesus.",
          "The Old Testament reveals God’s character and introduces the promises that unfold in the New Testament.",
          "Christians read it in light of Jesus’s fulfillment of the Law and the new covenant. Animal sacrifices are no longer required, while its teachings about love, justice, and faithfulness continue to guide us. Together, both Testaments help us understand who God is and how we belong in His story.",
        ],
      },
      {
        heading: "What are the Ten Commandments?",
        body: [
          "The Ten Commandments are God’s instructions for loving Him and treating others rightly:",
          {
            list: [
              "Worship God alone.",
              "Do not make or worship idols.",
              "Do not misuse God’s name.",
              "Keep the Sabbath holy.",
              "Honor your father and mother.",
              "Do not murder.",
              "Do not commit adultery.",
              "Do not steal.",
              "Do not give false testimony against others.",
              "Do not covet what belongs to others.",
            ],
          },
          "God gave them to Israel (the people) after rescuing them from slavery. They are part of the covenant God made with Israel. The commandments address our hearts as well as our actions, calling us to love God and others sincerely.",
        ],
      },
    ],
  },

  {
    id: "new-testament",
    title: "The New Testament",
    intro: [
      "The New Testament begins with the four gospels that introduce us to Jesus, who He is, His teachings, and how His life, death, and return to life make it possible for us to be forgiven and have a lasting relationship with God.",
      "The New Testament also shows how Jesus fulfills the promises of the Old Testament and looks forward to His return, when God’s plan of redemption and restoration will be complete.",
      "It is made up of twenty-seven books that include:",
      {
        list: [
          "The four Gospels—Matthew, Mark, Luke, and John—tell us about Jesus. They describe Jesus’ actions, teachings, death, and return to life.",
          "Acts continues on from the gospels, documenting the growth of the early church and Christian communities through the apostles’ mission and the work of the Holy Spirit. We also see the addition of a new apostle, Paul, to whom Jesus appears and whom He commissions to bring the gospel to non-Jewish people of the world.",
          "The letters (also referred to as epistles) written by Jesus’ brothers James and Jude, and by the apostles Peter, John, and Paul, explain how to follow Jesus in everyday life. Written to communities and individuals, they address real questions and struggles, including relationships, disagreements, suffering, forgiveness, and caring for others.",
          "Revelation offers hope for the future. Through vivid visions, it points to God’s final defeat of evil and a future in which His people live with Him.",
        ],
      },
      "The New Testament also helps us understand God as Father, Son, and Holy Spirit. It explains that forgiveness is a gift made possible by Jesus, whose death dealt fully with our sin, and the vital truth that we do not have to earn God’s acceptance. It shows how the Holy Spirit empowers us to live the life that God calls us to, and that Jesus demonstrated for us.",
      "Finally, the New Testament gives Jesus’ followers a purpose: to share His message with people everywhere, creating new disciples of Jesus.",
      "It helps us move from knowing about Jesus to living for Him and for the plans that God has for each of our lives.",
    ],
    itemsLabel: "Foundational questions",
    display: "accordion",
    items: [
      {
        heading: "Why are there four accounts of Jesus’ life (gospels)?",
        body: [
          "Each gospel is written from the perspective of a different writer. This gives us a more complete description of Jesus’ life and ministry, and the accounts also overlap in important ways. This, along with other factors, means by the standards applied to ancient writings, the gospel stories are considered extremely trustworthy.",
          "As for the writers of each gospel:",
          "Matthew writes to an audience of Jewish Christians and emphasizes things that would be most important to that group, considering their cultural heritage and knowledge of the Old Testament.",
          "Mark’s gospel is to the point, focusing on Jesus’ actions and suffering. Most likely written for non-Jewish readers who were unfamiliar with Jewish customs and history.",
          "Luke, being a doctor, is very detail oriented. His carefully researched account of Jesus as the Savior of all humanity is the longest of all the gospels. His account would have been of the most interest to educated Greek readers.",
          "John focuses on Jesus’ identity and divinity, illustrating theological truths and unpacking why who He is matters when it comes to the statements He makes about Himself and His relationship to God the Father.",
        ],
      },
      {
        heading: "Who wrote its books, and who were they writing to?",
        body: [
          "There are at least eight authors who are connected to the writings found in the New Testament. The writer of the Book of Hebrews has not been decisively identified.",
          "Those writers are, of course, Matthew, Mark, Luke, and John, as well as Paul, Peter, and two of Jesus’ brothers, James and Jude.",
          "All except Luke were Jewish, and their backgrounds were very different. As mentioned, Luke was a physician, while John and Peter were fishermen. Matthew was a tax collector (a very unpopular position to hold among the Jewish people). Paul was a Pharisee (a member of a Jewish religious group), and tentmaker while the occupations of Jesus’ half-brothers are unknown.",
        ],
      },
      {
        heading: "What is the Church?",
        body: [
          "When someone refers to “the Church” rather than “a church”, they’re most likely referring to the entire community of Christians as a whole.",
          "Another term that refers to this group is “the body of Christ”, which the apostle Paul used very effectively as a metaphor to describe how every believer is connected to Christ and how, like the members of a body, we all serve different functions.",
        ],
      },
      {
        heading: "Why do I need to go to church?",
        body: [
          "Being part of a local church body is actually so important in the life of a believer that it is hard to overstate.",
          "Maybe most importantly, it’s what God models for us in the Trinity. God the Father, Jesus, and the Holy Spirit have existed for eternity in a loving relationship that is so good, God decided He wanted more beings to experience it, and that’s why we exist!",
          "Also, in a healthy church, believers can experience the love of Christ, given by the Holy Spirit, through other church members. That might sound corny or uncomfortable, but just for a minute, think about what it would be like for you to be loved. I don’t mean a superficial feeling; I mean a love that looks past all of your sin, your fears, your past…I mean really sees all of you and loves you anyway. To be completely seen, and still loved? That is worth the price of admission friend!",
          "It’s a place where we can start to practice what it means to be a Christian. As we learn more about God and the example Jesus lived for us on the earth, we begin serving. Joining the rest of the body (the church) in practicing the things Jesus told us to do and having others there to help guide us when we have questions is so helpful!",
          "Church is where we can practice being the people Jesus tells us to be to the rest of the world.",
        ],
      },
      {
        heading: "What does following Jesus look like in everyday life?",
        body: [
          "Well, it looks a little different for everyone, but there are some foundational things all believers should be doing that will help them be a whole lot more successful trying to imitate Jesus.",
          "Most importantly, spend time with God. That includes reading and studying the Bible and just spending time listening to God. These are the things that will start to transform a person, and I can speak from experience, both my own and that of people I have interviewed: the transformation can be quick and extensive. The Bible has the power to radically change people’s hearts and minds!",
          "If you have no idea how to study the Bible or listen to God, that’s another great reason to find a church that teaches those things. Learning together with others is very successful.",
        ],
      },
      {
        heading: "What is “discipleship”?",
        body: [
          "Discipleship is the lifelong process of being a student and follower of Jesus, learning to live like Him, and helping others do the same.",
          "If this sounds relational, it’s because it is.",
          "One of the best ways I’ve heard discipleship described is for me as a believer to find someone who is a little further along in their Christian walk than I am to help me identify the areas I need to grow in and offer biblical guidance.",
          "The other half of the description is for me to do the same for someone who is not as far along in their Christian walk as I am.",
        ],
      },
    ],
  },

  {
    id: "people",
    title: "People of the Bible",
    intro: [
      "Rather than drowning in names, here are a few landmark individuals. This list by no means covers all of the characters of the Bible who played a major part in God’s telling of His story. Rather, the people listed below are connected to major movements that make up large parts of the Old and New Testaments.",
    ],
    itemsLabel: "Landmark individuals",
    display: "accordion",
    items: [
      {
        heading: "Adam and Eve",
        body: [
          "It all began with them. God created them both, and in doing so, showed us His will for the union of a man and woman and established that they (and we) are made in His image. Their desire to make themselves like God by disobeying Him (sin) kicks off the story that will reveal who God is, and how He will make a way for His people to be in relationship with Him again.",
        ],
      },
      {
        heading: "Noah",
        body: [
          "Noah was a man of faith who obeyed God by building an ark, preserving his family and the animals of the earth through a flood that brought judgment on a wicked world. Afterward, God promised never again to destroy the earth by a flood, giving the rainbow as the sign of His promise.",
        ],
      },
      {
        heading: "Abraham",
        body: [
          "Abraham was called by God to become the father of a special nation, with the promise that all nations would be blessed through his descendants, a promise Christians understand as fulfilled in Jesus. His trust in God, even through difficult tests, made him a lasting example of faith.",
        ],
      },
      {
        heading: "Jacob (Israel)",
        body: [
          "Jacob was Abraham’s grandson. God renamed him Israel after taking him to the woodshed, and his twelve sons became the twelve tribes of Israel. Despite his flaws and struggles, God worked through his life to carry forward His promise to Abraham to bless all nations.",
        ],
      },
      {
        heading: "Joseph",
        body: [
          "Joseph was Jacob’s son who was sold into slavery by his jealous brothers but rose to become a powerful leader in Egypt, where God used him to save many lives during a famine. Joseph forgave his brothers, recognizing that God had turned their intended harm into good. Joseph is one of the characters of the Bible who foreshadows Jesus.",
        ],
      },
      {
        heading: "Moses",
        body: [
          "Moses was chosen by God to lead the Israelites out of slavery after 430 years in Egypt and guide them to the Promised Land that was part of God’s covenant with Abraham. As a prophet and leader, he received God’s Law, including the Ten Commandments, and taught the people how to live in relationship with God.",
        ],
      },
      {
        heading: "David",
        body: [
          "David was a shepherd who is known for defeating the giant Goliath and became Israel’s second king. David is known for his faith, writing many of the psalms, and repentance after serious failures. God promised that his royal line would endure forever, a promise Christians understand as being fulfilled in Jesus, his descendant and the eternal King.",
        ],
      },
      {
        heading: "The Prophets",
        body: [
          "Prophets were men and women called by God to deliver His message, confront wrongdoing, guide leaders, and call His people back to Himself.",
          "Delivering God’s message often resulted in them facing persecution for speaking faithfully.",
        ],
      },
      {
        heading: "John the Baptist",
        body: [
          "John the Baptist was a prophet who prepared people for the arrival of Jesus by calling them to turn from sin and be baptized. He pointed to Jesus as the Savior, directing attention to Him, and was later executed after confronting King Herod’s wrongdoing.",
        ],
      },
      {
        heading: "The Disciples / Apostles",
        body: [
          "Jesus chose twelve men for a special responsibility: to share His message and teach others about Him. He called them apostles, meaning “those who are sent.” They became apostles because Jesus chose and sent them—not simply because they had followed Him for a certain amount of time.",
          "After Jesus rose from the dead, the Holy Spirit empowered them to spread His message and help establish the early church.",
          "Jesus also called Paul to be an apostle, sending him especially to people who were not Jewish, called the Gentiles.",
        ],
      },
      {
        heading: "Jesus",
        body: [
          "Jesus is the Son of God, fully God and fully human (wrap your head around that!), who came to reveal God’s plan of salvation, and bring people into a healed relationship with Him.",
          "He willingly died for our sins, rose from the dead, and reigns in heaven, over heaven and earth as the Savior at the center of Christian faith.",
        ],
      },
    ],
  },

  {
    id: "salvation",
    title: "Jesus and Salvation",
    intro: [
      "Salvation means being rescued by God from the sin that separates us from Him and being welcomed into a relationship with Him that lasts forever.",
      "Every one of us has sinned. In our actions, our words, and even our thoughts. This “sin” hurts us and others, and it damages our relationship with God. We cannot undo that damage simply by trying harder or doing enough good things.",
      "But God loves us. Rather than leaving us to fix what we cannot fix ourselves, He came to us through Jesus. Although Jesus never did anything wrong (sin), He willingly died on a cross and took the penalty in our place.",
      "He then rose from the dead, and He was able to do this because death is the punishment for sin, and since Jesus was and is God, equal and one with the Father, He is without sin.",
      "Because of what Jesus did (taking our sin upon himself), we can be forgiven and have a close, personal relationship with God.",
      "This is a gift, not something we earn by being good, following religious rules, or proving somehow that we deserve it.",
      "We receive it by trusting Jesus: believing that He died for us and came back to life, openly acknowledging Him as the one who has the right to lead our lives, and choosing to repent (turn away from our sin) and follow Him. This means more than believing facts about Him; it means depending on Him for forgiveness and trusting His guidance.",
      "Salvation begins a lifelong process of change. It does not mean we suddenly become perfect or never struggle again - not at all! God helps us turn away from harmful ways of living and grow into people who love Him and others more deeply.",
    ],
  },

  {
    id: "trinity",
    title: "What is the Trinity?",
    intro: [
      "While the term “Trinity” does not appear in Scripture, it is the term Christians use to define the relationship between the three “persons” of God as described in the Bible.",
      "Scripture is very clear however, that these three persons are one God. For example, in Matthew 28:19, Jesus tells his disciples to baptize in the name of the Father and of the Son and of the Holy Spirit…",
      "Through Scripture, we also see that each person of the Trinity is distinct, with specific “roles”. Let’s look at the Father, the Son, and the Holy Spirit.",
    ],
    display: "open",
    items: [
      {
        heading: "God the Father",
        body: [
          "The Father is the head of the Trinity (but don’t forget they’re all equal!). It is the Father’s will (or you could say, His plans) that causes things to be. He is the reason for creation, the existence of mankind, and the plan for mankind’s redemption.",
          "He is our loving Father, whose mercy and desire to have a relationship with us are the reasons salvation is offered to us.",
        ],
      },
      {
        heading: "Jesus the Son",
        body: [
          "In the first three verses of the Gospel of John, we are told that Jesus is the Word. What in the world does that mean?",
          "Simply put, it means that when God “speaks”, it is through Jesus that those things are accomplished, and that He perfectly reveals God and God’s plans. Jesus makes stuff happen.",
          "For instance, God’s plan to conquer sin so the relationship between us and Him could be redeemed, was fulfilled by Jesus on the cross. On top of that, Jesus provided us with every example we need in order to understand what it looks like to walk in obedience to the Father.",
        ],
      },
      {
        heading: "The Holy Spirit",
        body: [
          "In the Gospel of John, chapter 14, verse 26, Jesus says, “But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all that I said to you.”",
          "That tells us something very important.",
          "The Spirit is coming in the name of Jesus. That means the Spirit’s mission and work are authorized and connected to Jesus’ purpose. What did we say Jesus revealed and accomplished? God’s plan for salvation. So, the Spirit comes to continue that work in all believers.",
          "Friends, that is some amazing news, because on our own, we could never hope to walk in obedience to God. BUT, with the Spirit living in us, the same Spirit who empowered Jesus’ earthly ministry, we are capable of becoming more like the example Jesus lived out for us.",
        ],
      },
    ],
    outro: [
      "What we’ve discussed just scratches the surface of what the Trinity is, but hopefully it is enough of an explanation to clear away some of the fog surrounding the mystery that is the triune nature of God.",
    ],
  },
];
