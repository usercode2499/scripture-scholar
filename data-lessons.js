// ============================================================
// Scripture Scholar — Lesson & Verse Data
// ============================================================
// Content sourced from the Book of Mormon Teacher Manual
// published by The Church of Jesus Christ of Latter-day Saints
// https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual
//
// This file defines: LESSONS, LESSON_ORDER, DAILY_VERSES
// Loaded BEFORE the main index.html script.
// ============================================================

  // ============ LESSON DATA ============
  // All content sourced from the Book of Mormon Teacher Manual
  // published by The Church of Jesus Christ of Latter-day Saints
  // https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual
  const LESSONS = {
    ch1: {
      id: 'ch1',
      chapter: 1,
      range: 'Introduction',
      title: "The Keystone of Our Religion",
      subtitle: "Why the Book of Mormon matters",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-1?lang=eng',
      reading: {
        body: [
          "Before we journey through the Book of Mormon, we pause to ask: why does this book matter?",
          "The Prophet Joseph Smith taught that the Book of Mormon is the keystone of our religion — and that a person would get nearer to God by abiding by its precepts than by any other book. A keystone is the central wedge of an arch. Remove it, and the structure falls. So too with the Book of Mormon: it holds together our testimony of Jesus Christ, of Joseph Smith as a prophet, and of the restored gospel.",
          "The book bears the subtitle 'Another Testament of Jesus Christ.' Eleven witnesses — three who saw an angel with the plates, and eight who handled the plates with their own hands — testified that it is true. Their testimonies still stand printed in the front of every copy.",
          "Today's lesson explores why the Book of Mormon is essential, who witnessed its truth, and how prayerful study draws us closer to the Lord."
        ],
        principles: [
          "The Book of Mormon is another testament of Jesus Christ",
          "It is the keystone of our religion",
          "Many witnesses have testified of its truthfulness",
          "We draw closer to God as we prayerfully study it"
        ]
      },
      reflection: '"What passage from the Book of Mormon has most strengthened your testimony of Jesus Christ?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'What is the subtitle of the Book of Mormon?',
          options: ['The Sealed Record', 'A History of Ancient America', 'Another Testament of Jesus Christ', 'The Word of the Prophets'],
          correct: 2,
          reference: 'Title Page of the Book of Mormon',
          explanation: "The subtitle declares the book's central purpose: to stand as another witness, alongside the Bible, that Jesus is the Christ."
        },
        {
          type: 'multiple_choice',
          prompt: 'What does the word "Christ" (or "Messiah" in Hebrew) mean?',
          options: ['Son of God', 'Anointed One', 'Savior', 'Redeemer'],
          correct: 1,
          reference: '1 Nephi 10:4',
          explanation: "When we say Jesus is the Christ, we testify that He is the One anointed by God to save us."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete Joseph Smith\'s famous declaration:\n"The Book of Mormon is the ______ of our religion."',
          answer: 'keystone',
          acceptable: ['keystone'],
          reference: 'Introduction to the Book of Mormon',
          explanation: "A keystone is the central wedge of an arch — remove it, and the structure falls. So too is the Book of Mormon to the restored gospel."
        },
        {
          type: 'multiple_choice',
          prompt: 'How many witnesses (besides Joseph Smith) formally testified of the gold plates?',
          options: ['Three', 'Eight', 'Eleven (three plus eight)', 'Twelve'],
          correct: 2,
          reference: 'Testimony of Three Witnesses; Testimony of Eight Witnesses',
          explanation: "Three witnesses saw an angel and the plates; eight more handled and examined them. Their testimonies appear at the front of every Book of Mormon."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to the title page, what did the writers of the Book of Mormon want to convince readers of?',
          options: ['That America is a promised land', 'That Jesus is the Christ, the Eternal God', 'That Joseph Smith was a prophet', 'That ancient prophets existed'],
          correct: 1,
          reference: 'Title Page of the Book of Mormon',
          explanation: "The title page states the book was written to convince Jew and Gentile that Jesus is the Christ, the Eternal God, manifesting Himself to all nations."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this quote from Joseph Smith:\n"A man would get nearer to God by abiding by its ______ than by any other book."',
          answer: 'precepts',
          acceptable: ['precepts'],
          reference: 'Introduction to the Book of Mormon',
          explanation: "Joseph Smith's testimony of the Book of Mormon's power: more than reading — living its teachings — brings us closer to God."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to D&C 6:28 and Matthew 18:16, in the mouth of how many witnesses shall every word be established?',
          options: ['One', 'Two or three', 'Seven', 'Twelve'],
          correct: 1,
          reference: 'D&C 6:28; Matthew 18:16',
          explanation: "This is the Lord's pattern: He provides multiple witnesses to establish His word. The Bible and the Book of Mormon together fulfill this pattern."
        }
      ]
    },

    ch2: {
      id: 'ch2',
      chapter: 2,
      range: '1 Nephi 1–5',
      title: "Lehi's Vision",
      subtitle: "The Vision and the Brass Plates",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-2?lang=eng',
      reading: {
        body: [
          "The opening chapters of 1 Nephi follow a sacred pattern that runs through scripture: a prophet prays, receives revelation, warns the people, and is rejected. Lehi lived this pattern. He prayed earnestly for the people of Jerusalem, then saw God on His throne and a coming Messiah in vision. When he went out to warn the city, many mocked him — and some sought to take his life.",
          "The Lord commanded Lehi to take his family — his wife Sariah and their sons Laman, Lemuel, Sam, and Nephi — into the wilderness. Along the way the family received the Lord's tender mercies. They were soon sent back to Jerusalem on a difficult errand: to obtain the brass plates, a sacred record containing the scriptures and their family's lineage.",
          "It is in this story that Nephi delivers his famous declaration of faith — a verse memorized by Latter-day Saints around the world."
        ],
        principles: [
          "The Lord calls prophets to warn and testify",
          "The Lord extends tender mercies to those of faith",
          "The Lord prepares a way to keep His commandments",
          "The scriptures preserve God's word for generations"
        ]
      },
      reflection: '"Like Nephi, where in your own life is the Lord asking you to \'go and do\' something that feels difficult?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'Why did Lehi go out and warn the people of Jerusalem?',
          options: ['He wanted political power', 'He had received revelation from the Lord', 'His sons urged him to', 'He was a city official'],
          correct: 1,
          reference: '1 Nephi 1:4–20',
          explanation: 'True to his prophetic calling, Lehi warned the people of Jerusalem according to the revelations he had received from the Lord.'
        },
        {
          type: 'multiple_choice',
          prompt: "According to 1 Nephi 1:20, who receives the Lord's tender mercies?",
          options: ['Only prophets', 'Those born into the covenant', 'All those whom He has chosen', 'Only those who live in Jerusalem'],
          correct: 2,
          reference: '1 Nephi 1:20',
          explanation: "Nephi shows that the Lord's tender mercies are over all those whom He has chosen, because of their faith."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this scripture mastery verse:\n"I will go and do the things which the Lord hath ______..."',
          answer: 'commanded',
          acceptable: ['commanded'],
          reference: '1 Nephi 3:7',
          explanation: "Nephi's declaration of faith — the Lord prepares a way for His children to accomplish what He commands.",
          scriptureMastery: true
        },
        {
          type: 'multiple_choice',
          prompt: "What did Lehi and his sons return to Jerusalem to obtain from Laban?",
          options: ['Food and provisions', 'The brass plates', 'Their belongings', 'Sacred relics'],
          correct: 1,
          reference: '1 Nephi 3:2–4',
          explanation: "The brass plates contained the scriptures and their family genealogy. The Lord commanded them to obtain this sacred record."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did Nephi mean when he said the Lord would "prepare a way" for him?',
          options: ['God would send angels to do the work', 'God would provide means to keep His commandments', 'God would remove all difficulty', 'God would make him wealthy'],
          correct: 1,
          reference: '1 Nephi 3:7',
          explanation: "Nephi understood that the Lord provides the means and strength to accomplish what He commands — even when the task seems impossible."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 1 Nephi 5:10–16, what did the brass plates contain?',
          options: ["A history of Lehi's family only", 'Maps to a promised land', 'Five books of Moses, prophets, and a genealogy', 'Prophecies about Jerusalem only'],
          correct: 2,
          reference: '1 Nephi 5:10–16',
          explanation: "The plates held the five books of Moses, a record of the Jews from the beginning, prophecies of holy prophets, and Lehi's family genealogy."
        },
        {
          type: 'multiple_choice',
          prompt: 'What happened to the people of Zarahemla, who had fled Jerusalem without scriptures?',
          options: ['They built a great temple', 'They prospered as a mighty nation', 'Their language and faith deteriorated', 'They returned to Jerusalem within a generation'],
          correct: 2,
          reference: 'Omni 1:14–17',
          explanation: "Without written scripture, their language was corrupted and they denied the existence of their Creator. This shows why the brass plates mattered so deeply."
        }
      ]
    },

    ch3: {
      id: 'ch3',
      chapter: 3,
      range: '1 Nephi 6–11',
      title: "Tree of Life Vision",
      subtitle: "Coming unto Christ",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-3?lang=eng',
      reading: {
        body: [
          "In 1 Nephi 6, Nephi pauses to tell us why he writes. Not to record genealogy. Not to keep a wilderness journal. But to persuade his readers — including you, today — to come unto Jesus Christ and be saved.",
          "The chapters that follow contain one of the most beloved visions in all of scripture: the Tree of Life. Lehi sees a tree whose fruit is delicious above all. He calls his family to partake. Some come. Some never start. Some begin the journey but lose their way in mists of darkness.",
          "When Nephi prays to understand his father's vision, the Spirit reveals the meaning of each symbol — and shows him the birth, ministry, and Atonement of Christ. The tree is the love of God. The fruit is eternal life. The iron rod is the word of God. The path is the same one we walk today."
        ],
        principles: [
          "The Book of Mormon was written to bring us to Christ",
          "Marriage in the covenant raises up children to the Lord",
          "To receive eternal life, we must come unto Christ",
          "God reveals truth to those who diligently seek Him"
        ]
      },
      reflection: '"What is one specific \'mist of darkness\' in your life today? What does the iron rod look like for you this week?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'According to 1 Nephi 6:4, what is the primary purpose of the Book of Mormon?',
          options: ['To preserve a family record', 'To persuade people to come unto Christ', 'To document the wilderness journey', 'To teach the law of Moses'],
          correct: 1,
          reference: '1 Nephi 6:4',
          explanation: "Nephi declares his intent: to persuade his readers to come unto the God of Abraham, Isaac, and Jacob, and be saved."
        },
        {
          type: 'multiple_choice',
          prompt: "Before continuing into the wilderness, what did the Lord command Lehi's sons to do?",
          options: ['Build an altar', "Return for Ishmael's daughters as wives", 'Make sacrifice for sin', 'Gather more provisions'],
          correct: 1,
          reference: '1 Nephi 7:1–2',
          explanation: "The Lord commanded the sons to take wives so they could raise up seed unto Him in the promised land."
        },
        {
          type: 'multiple_choice',
          prompt: "In Lehi's vision, what does the tree of life represent?",
          options: ['Wisdom', 'The love of God', 'Eternal life', 'The covenant of Abraham'],
          correct: 1,
          reference: '1 Nephi 11:21–22',
          explanation: "When Nephi asked the Spirit, he was shown that the tree represents the love of God — most desirable above all things."
        },
        {
          type: 'multiple_choice',
          prompt: 'In the Tree of Life vision, what does the iron rod represent?',
          options: ['The word of God', 'The priesthood', 'Faith in Christ', 'The Holy Ghost'],
          correct: 0,
          reference: '1 Nephi 11:25',
          explanation: "The rod of iron is the word of God — by holding fast to it, we can press forward safely through the mists of darkness."
        },
        {
          type: 'multiple_choice',
          prompt: 'What does the great and spacious building represent?',
          options: ['The temple', 'Jerusalem', 'The pride and vain imaginations of the world', 'The kingdom of God'],
          correct: 2,
          reference: '1 Nephi 11:36; 12:18',
          explanation: "The building, filled with mocking people, represents the pride and vain imaginations of the children of men."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this scripture mastery verse:\n"And, if you keep my commandments and endure to the end you shall have ______ life, which gift is the greatest of all the gifts of God."',
          answer: 'eternal',
          acceptable: ['eternal'],
          reference: 'D&C 14:7',
          explanation: "Eternal life — the greatest of all God's gifts — is the fruit of the tree of life and the goal of the gospel.",
          scriptureMastery: true
        },
        {
          type: 'multiple_choice',
          prompt: 'What does the word "condescension" mean in 1 Nephi 11:16, 26?',
          options: ['A voluntary descent from rank or dignity', 'A divine judgment', 'A prophetic vision', 'A revelation of glory'],
          correct: 0,
          reference: '1 Nephi 11:16, 26',
          explanation: "Christ's condescension — His willingness to come down from glory to suffer for us — is one of the great evidences of God's love."
        }
      ]
    },

    // Future lessons (placeholders — content not yet built)
    ch4: {
      id: 'ch4',
      chapter: 4,
      range: '1 Nephi 12–15',
      title: "Nephi's Vision of the Last Days",
      subtitle: "Plain and precious truths restored",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-4?lang=eng',
      reading: {
        body: [
          "Nephi's vision continues, expanding into a sweeping view of the future. He sees the land of promise where his family will settle. He sees periods of war and peace among his descendants. He sees the Savior's ministry in the Americas. And he sees something more sobering: the Great Apostasy — a time when 'plain and precious' truths would be lost from the Bible.",
          "But the vision does not end in darkness. Nephi sees the Restoration of the gospel. He sees God's kingdom growing small but mighty in the last days — armed not with weapons but with righteousness and the power of God. He sees Satan's kingdom rage against the Saints, and God's kingdom ultimately triumph.",
          "When Nephi returns from this overwhelming vision, his older brothers Laman and Lemuel are arguing over their father's words. They had not understood — because they had not asked. Nephi teaches them four conditions for receiving revelation, conditions that still apply to us today."
        ],
        principles: [
          "Satan organizes to pervert the right ways of the Lord",
          "The Lord has restored plain and precious truths",
          "Prayer leads to personal revelation",
          "The Lord remembers His covenants with Israel"
        ]
      },
      reflection: '"Which \'plain and precious\' truth restored through the Book of Mormon means the most to you?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'According to 1 Nephi 14:10, the angel told Nephi there are how many churches?',
          options: ['One', 'Two', 'Three', 'Twelve'],
          correct: 1,
          reference: '1 Nephi 14:10',
          explanation: "The Church of the Lamb of God and the church of the devil. This is about allegiance — every soul ultimately belongs to one or the other."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to Nephi\'s vision in 1 Nephi 13:26–28, what happened to the Bible as it passed through history?',
          options: ['It was destroyed entirely', 'Many plain and precious truths were taken away', 'It was perfectly preserved', 'It was rewritten in modern English'],
          correct: 1,
          reference: '1 Nephi 13:26–28',
          explanation: "Nephi saw that plain and precious truths were removed from the Bible, causing many to stumble. The Restoration brings these truths back."
        },
        {
          type: 'multiple_choice',
          prompt: 'In Nephi\'s vision of the last days, what was the Church of the Lamb of God armed with? (1 Nephi 14:14)',
          options: ['Swords and armor', 'Righteousness and the power of God', 'Wisdom and learning', 'Faith and patience'],
          correct: 1,
          reference: '1 Nephi 14:14',
          explanation: "Though small in number compared to the world, God's people are armed with righteousness and the power of God in great glory."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this scripture mastery verse:\n"If any of you lack wisdom, let him ask of God ... and it shall be given ____."',
          answer: 'him',
          acceptable: ['him'],
          reference: 'James 1:5',
          explanation: "The verse that inspired Joseph Smith's First Vision. The Lord promises wisdom to all who ask Him in faith.",
          scriptureMastery: true
        },
        {
          type: 'multiple_choice',
          prompt: 'What four things did Nephi say Laman and Lemuel must do to receive spiritual understanding? (1 Nephi 15:10–11)',
          options: [
            'Travel to the temple, pray often, study scriptures, give offerings',
            'Not harden hearts, ask in faith, believe they will receive, keep the commandments',
            'Memorize scripture, fast weekly, attend meetings, pay tithing',
            'Build an altar, offer sacrifice, journey to Jerusalem, rest'
          ],
          correct: 1,
          reference: '1 Nephi 15:10–11',
          explanation: "These four conditions still apply today: a soft heart, faith, belief in answers, and obedience open the way for personal revelation."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 1 Nephi 15:12, what does the olive tree represent?',
          options: ['The Tree of Life', 'Eternal life', 'The house of Israel', 'The Garden of Eden'],
          correct: 2,
          reference: '1 Nephi 15:12',
          explanation: "The olive tree symbolizes the covenant people, the house of Israel. This imagery returns in Jacob's grand allegory in Jacob 5."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 1 Nephi 15:24, what protects us from the "fiery darts" of the adversary?',
          options: ['The shield of faith only', 'Holding fast to the word of God', 'Praying always', 'Wearing the helmet of salvation'],
          correct: 1,
          reference: '1 Nephi 15:24',
          explanation: "Those who hearken to and hold fast to the word of God — the iron rod from Lehi's vision — cannot be overpowered by Satan's temptations."
        }
      ]
    },
    ch5: {
      id: 'ch5',
      chapter: 5,
      range: '1 Nephi 16–18',
      title: "The Liahona & The Journey",
      subtitle: "Following the Lord across wilderness and sea",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-5?lang=eng',
      reading: {
        body: [
          "After the family received their commission from the Lord, they continued their journey through the wilderness — guided by a remarkable gift. One morning, Lehi found a round ball of curious workmanship by his tent door. It had two spindles, and one pointed the way they should travel. This was the Liahona.",
          "The Liahona worked according to the faith and diligence of the family. When they were faithful, the pointers worked and even displayed writing 'plain to be read' that gave them understanding. When they were faithless, it ceased to work. It led them through 'the more fertile parts of the wilderness' — small means producing great results.",
          "Their journey continued with trials: Nephi's bow broke and the family hungered. Even Lehi murmured. But Nephi made a new bow, asked his father where to hunt, and the Lord provided. Later, when commanded to build a ship to cross the ocean, Nephi did not know how. He prayed, was shown patterns 'from time to time,' and built a ship that was 'exceedingly fine' in the eyes of the Lord.",
          "When his brothers tied him during the voyage, the Liahona ceased to work and a terrible storm threatened to swallow them. Only when Laman and Lemuel repented and freed Nephi did the storm subside. The family reached the promised land."
        ],
        principles: [
          "The Lord guides His faithful servants",
          "The Lord blesses those who keep His commandments",
          "Becoming 'past feeling' cuts us off from God's voice",
          "Revelation comes line upon line, as we are ready"
        ]
      },
      reflection: '"What is a \'Liahona\' in your own life — what guides you according to your faith and diligence?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'According to 1 Nephi 16:10, what was the Liahona?',
          options: [
            'A type of weapon',
            'A round ball of curious workmanship that pointed the way',
            'A scroll of scriptures',
            'A ceremonial vessel'
          ],
          correct: 1,
          reference: '1 Nephi 16:10',
          explanation: "Lehi found this brass ball with two spindles by his tent door. It guided the family through the wilderness toward the promised land."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 1 Nephi 16:28, how did the Liahona work?',
          options: [
            'Through mechanical springs',
            'According to the faith and diligence of those who used it',
            'Whenever the sun shone',
            'Only when Lehi held it'
          ],
          correct: 1,
          reference: '1 Nephi 16:28',
          explanation: "The pointers worked by faith and diligence. When the family was faithful, the Liahona guided them. When they murmured, it ceased to work."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this verse:\n"The ball ... led us in the more ______ parts of the wilderness."',
          answer: 'fertile',
          acceptable: ['fertile'],
          reference: '1 Nephi 16:16',
          explanation: "By 'small and simple means,' the Lord led them to fertile places — symbolic of how the Holy Ghost still leads us to spiritual nourishment today."
        },
        {
          type: 'multiple_choice',
          prompt: "What happened when Nephi's bow broke?",
          options: [
            'The family turned back toward Jerusalem',
            'Laman, Lemuel — and even Lehi — murmured; Nephi made a new bow and asked his father where to hunt',
            'They prayed and a herd of animals appeared',
            'Lehi disciplined Laman and Lemuel for their lack of faith'
          ],
          correct: 1,
          reference: '1 Nephi 16:18–32',
          explanation: "Even Lehi murmured under hunger. But Nephi made a new bow from wood, then sustained his father as prophet by asking him to inquire of the Lord. Lehi was humbled, prayed, and was answered."
        },
        {
          type: 'multiple_choice',
          prompt: 'What does it mean that Laman and Lemuel were "past feeling" (1 Nephi 17:45)?',
          options: [
            'They were physically exhausted',
            'They had lost hope of returning home',
            "They had hardened their hearts so they could not feel the Spirit's words",
            'They no longer trusted Lehi'
          ],
          correct: 2,
          reference: '1 Nephi 17:45',
          explanation: "Repeated wickedness deadens our spiritual senses. We feel the Holy Ghost more than we hear Him — so 'past feeling' means cut off from divine guidance."
        },
        {
          type: 'multiple_choice',
          prompt: 'How did the Lord teach Nephi to build the ship?',
          options: [
            'He sent angels with detailed instructions',
            'He gave Nephi all the plans at once',
            'From time to time — line upon line, as Nephi was ready',
            'He provided plans on the brass plates'
          ],
          correct: 2,
          reference: '1 Nephi 18:1; 2 Nephi 28:30',
          explanation: "The Lord showed Nephi 'from time to time' how to build the ship. This is how revelation often works — step by step, as we act in faith on what we already know."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 1 Nephi 17:13, what is the recurring "if-then" promise the Lord makes throughout the Book of Mormon?',
          options: [
            'If we obey, He will make us a great nation',
            'If we keep His commandments, He will prosper us in the promised land',
            'If we pray, He will deliver us from enemies',
            'If we are faithful, He will bless our children'
          ],
          correct: 1,
          reference: '1 Nephi 17:13',
          explanation: "This 'if-then' promise — obedience leads to prosperity in the land — is one of the central themes of the entire Book of Mormon."
        }
      ]
    },
    ch6: {
      id: 'ch6',
      chapter: 6,
      range: '1 Nephi 19–22',
      title: "Isaiah's Prophecies",
      subtitle: "Remembering our Redeemer",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-6?lang=eng',
      reading: {
        body: [
          "Nephi continued his record with great care, writing on two sets of plates: large plates for the history of his people, and small plates 'for the special purpose' of preserving the things of God. Why? 'To persuade [his people] to believe in the Lord their Redeemer' (1 Nephi 19:23).",
          "To strengthen his people's faith, Nephi turned to the words of the prophet Isaiah, copying his prophecies into the record. He urged them — and us — to 'liken all scriptures unto us, that it might be for our profit and learning.' The scriptures are not just history. They speak directly to our lives when we read them that way.",
          "In Isaiah's words, the Lord declared that He refines His people 'in the furnace of affliction' (1 Nephi 20:10). And though Israel had been scattered and humbled, He had not forgotten them: 'Behold, I have graven thee upon the palms of my hands' (1 Nephi 21:16). The marks of nails would later make that promise literal.",
          "Nephi closed his first book by prophesying of the latter days: the gospel would be restored, Israel would be gathered, and the righteous 'need not fear, for the Lord will preserve them by his power' (1 Nephi 22:17)."
        ],
        principles: [
          "Nephi wrote to persuade us to remember our Redeemer",
          "We should liken the scriptures to ourselves for our profit and learning",
          "The Lord refines His people through the furnace of affliction",
          "The Lord will gather Israel and preserve the righteous in the latter days"
        ]
      },
      reflection: '"How would your scripture study change if you read each passage as if the Lord were speaking directly to you?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: "According to 1 Nephi 19:18, what was Nephi's primary purpose in writing his record?",
          options: [
            'To document family history',
            'To prove that Lehi was a true prophet',
            'That his people might know and remember the Lord their Redeemer',
            'To explain ancient customs and prophecies'
          ],
          correct: 2,
          reference: '1 Nephi 19:18',
          explanation: "Nephi wrote 'for the more part of all these things have I written for the intent that ye may learn to be more wise than we have been... and that ye may remember the Lord your Redeemer.'"
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this scripture mastery passage (1 Nephi 19:23):\n"I did read many things unto them... that I might more fully persuade them to believe in the Lord their ______."',
          answer: 'Redeemer',
          acceptable: ['Redeemer', 'redeemer'],
          reference: '1 Nephi 19:23',
          explanation: "Nephi shared Isaiah's words to point his people to Christ. This is the central purpose of all the scriptures: to testify of the Redeemer."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 1 Nephi 19:23, what does Nephi teach us to do with the scriptures?',
          options: [
            'Memorize them word for word',
            'Liken them unto ourselves for our profit and learning',
            'Read them only on the Sabbath',
            'Keep them hidden from outsiders'
          ],
          correct: 1,
          reference: '1 Nephi 19:23',
          explanation: "To 'liken' the scriptures is to apply them personally — to read them as if the Lord were speaking directly to us about our own lives."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 1 Nephi 20:10, what phrase does the Lord use to describe how He refines His people?',
          options: [
            'The fire of testing',
            'The crucible of trial',
            'The furnace of affliction',
            'The mill of obedience'
          ],
          correct: 2,
          reference: '1 Nephi 20:10',
          explanation: "The Lord said, 'I have refined thee... I have chosen thee in the furnace of affliction.' Trials are how He refines and prepares His people."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 1 Nephi 21:16, what powerful image does the Lord use to show He will never forget His people?',
          options: [
            'He has written their names upon the stars',
            'He has graven them upon the palms of His hands',
            'He has built a temple of remembrance for them',
            'He has placed them deep within His heart'
          ],
          correct: 1,
          reference: '1 Nephi 21:16',
          explanation: "'Behold, I have graven thee upon the palms of my hands.' Elder Holland taught that the marks of the Roman nails in Christ's hands are the literal fulfillment of this promise."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this verse:\n"Behold, I have graven thee upon the palms of my ______." (1 Nephi 21:16)',
          answer: 'hands',
          acceptable: ['hands', 'hand'],
          reference: '1 Nephi 21:16',
          explanation: "A constant reminder that Christ remembers each of His covenant people — even when we feel forgotten."
        },
        {
          type: 'multiple_choice',
          prompt: "According to 1 Nephi 22:17, what is the Lord's promise to the righteous in the last days?",
          options: [
            'They will not face any trials',
            'They need not fear, for the Lord will preserve them by His power',
            'They will be made wealthy in the world',
            'They will be hidden away from the world'
          ],
          correct: 1,
          reference: '1 Nephi 22:17',
          explanation: "Nephi prophesied that though calamities will come to the world, 'the righteous need not fear... for the Lord will preserve [them] by his power.' Righteousness is our protection."
        }
      ]
    },
    ch7: {
      id: 'ch7',
      chapter: 7,
      range: '2 Nephi 1–3',
      title: "Lehi's Final Counsel",
      subtitle: "Creation, Fall, and Atonement",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-7?lang=eng',
      reading: {
        body: [
          "As Lehi prepared to die, he gathered his children and gave them his final counsel. His words in 2 Nephi 1–3 contain some of the most profound doctrine in all of scripture.",
          "To his sons born in the wilderness — Jacob and Joseph — Lehi taught the great connected truths of the plan of salvation: the Creation, the Fall, and the Atonement. He explained, 'It must needs be, that there is an opposition in all things' (2 Nephi 2:11). Without bitter, no sweet. Without misery, no joy.",
          "The Fall was not a disaster, Lehi taught. It was a deliberate part of the plan: 'Adam fell that men might be; and men are, that they might have joy' (2 Nephi 2:25). And God has given each of us agency: 'They are free to choose liberty and eternal life... or to choose captivity and death' (2 Nephi 2:27).",
          "Then, in 2 Nephi 3, Lehi shared an astonishing prophecy from Joseph who was sold into Egypt — recorded thousands of years before its fulfillment. Joseph foretold that a 'choice seer' would be raised up in the latter days to restore the gospel, and that his name, like his father's, would be Joseph (2 Nephi 3:15). That seer was Joseph Smith Jr."
        ],
        principles: [
          "The righteous are blessed in the land of promise",
          "The Creation, Fall, and Atonement are essential parts of God's plan",
          "Adam fell that men might be; men are, that they might have joy",
          "We are free to choose liberty and eternal life, or captivity and death",
          "Joseph Smith's calling was prophesied by Joseph of Egypt"
        ]
      },
      reflection: '"Lehi taught we are free to act, not be acted upon. In what part of your life today are you most invited to act for yourself?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 1:7, what kind of land did Lehi prophesy the promised land would be?',
          options: [
            'A land of wealth and power',
            'A land of liberty, never brought into captivity (if its people serve God)',
            'A land of secrets, hidden from all nations forever',
            'A land of warriors and conquest'
          ],
          correct: 1,
          reference: '2 Nephi 1:7',
          explanation: "Lehi prophesied it would be 'a land of liberty' for the righteous — but if iniquity abounded, the Lord's protection would be withdrawn."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 2:11, what is necessary in all things?',
          options: [
            'Faith and obedience',
            'Opposition in all things',
            'Patience and trial',
            'Wisdom and study'
          ],
          correct: 1,
          reference: '2 Nephi 2:11',
          explanation: "Lehi taught that without opposition, there is no joy, no good, no holiness. The bitter is what makes us know the sweet."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this scripture mastery passage (2 Nephi 2:25):\n"Adam fell that men might be; and men are, that they might have ______."',
          answer: 'joy',
          acceptable: ['joy'],
          reference: '2 Nephi 2:25',
          explanation: "The Fall was not a disaster — it was a deliberate part of the plan. Mortality, with all its trials, is the path to authentic joy."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 2:27, what are men "free to choose"?',
          options: [
            'Wealth or poverty',
            'Liberty and eternal life, or captivity and death',
            'Friends or enemies',
            'Light or only darkness'
          ],
          correct: 1,
          reference: '2 Nephi 2:27',
          explanation: "Agency is the foundation of God's plan. Each of us must choose between two paths — and the Atonement makes the better path possible."
        },
        {
          type: 'multiple_choice',
          prompt: 'Why was the Fall of Adam and Eve necessary in the plan of salvation?',
          options: [
            'It was a tragic mistake the Lord later corrected',
            'It enabled humanity to exist, experience opposition, and require the Atonement',
            'It only affected Adam and Eve, not their descendants',
            'It was caused by Satan against God\'s plan'
          ],
          correct: 1,
          reference: '2 Nephi 2:22–25',
          explanation: "Without the Fall, Adam and Eve would have remained childless, knowing neither joy nor misery, doing neither good nor evil. The Fall opened the way to all that mortality teaches us."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 3, whose ancient prophecy foretold the calling of the Prophet Joseph Smith?',
          options: [
            'Moses',
            'Abraham',
            'Joseph of Egypt (son of Jacob who was sold by his brothers)',
            'Isaiah'
          ],
          correct: 2,
          reference: '2 Nephi 3:6–18',
          explanation: "Joseph who was sold into Egypt prophesied of a 'choice seer' the Lord would raise up — Joseph Smith — to restore the gospel in the latter days."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 3:15, the latter-day seer would be:',
          options: [
            'Called Joseph, after the name of his father',
            'Called Moroni, after the angel',
            'Called Lehi, like Nephi\'s father',
            'Called Mormon, the compiler'
          ],
          correct: 0,
          reference: '2 Nephi 3:15',
          explanation: "The prophecy said his name would be Joseph, 'and it shall be after the name of his father' — fulfilled exactly in Joseph Smith Jr. and his father Joseph Smith Sr."
        }
      ]
    },
    ch8: {
      id: 'ch8',
      chapter: 8,
      range: '2 Nephi 4–8',
      title: "The Psalm of Nephi",
      subtitle: "Trusting the Lord through weakness",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-8?lang=eng',
      reading: {
        body: [
          "After Lehi died, his family fractured again — Laman and Lemuel sought to take Nephi's life, and the Lord commanded Nephi to flee with all who would go with him into the wilderness.",
          "But before that journey, Nephi wrote one of the most personal passages in all scripture, often called 'the Psalm of Nephi' (2 Nephi 4:15–35). In it he moves between exultation and anguish — 'My soul delighteth in the things of the Lord' (v. 16), then 'O wretched man that I am!' (v. 17) — and finally lands on a settled truth: 'I have trusted in thee, and I will trust in thee forever' (v. 34). Even the great prophets feel weakness. Even they must choose to trust.",
          "Once safe in their new land, Nephi's people 'did observe to keep the judgments, and the statutes, and the commandments of the Lord in all things... And it came to pass that we lived after the manner of happiness' (2 Nephi 5:27). Happiness, Nephi teaches, has a manner — a way of living that produces it.",
          "Chapters 6 through 8 record a sermon by Nephi's brother Jacob, who quoted Isaiah to teach that Israel will be gathered when 'they shall come to the knowledge of their Redeemer' (2 Nephi 6:11). The gathering is not just geographical — it is a turning of the heart toward Christ."
        ],
        principles: [
          "Trusting in the Lord gives us reason to rejoice",
          "Even the faithful experience weakness — the answer is to keep trusting",
          "Separating from wickedness preserves spiritual life",
          "We can live 'after the manner of happiness' by keeping the commandments",
          "Israel is gathered as they come to know their Redeemer"
        ]
      },
      reflection: '"Nephi felt both spiritual delight and personal anguish in the same psalm. When have you experienced both — and how did trusting the Lord help?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'What is 2 Nephi 4:15–35 commonly called?',
          options: [
            "Nephi's lamentation",
            "The psalm of Nephi",
            "Nephi's farewell",
            "The song of the wilderness"
          ],
          correct: 1,
          reference: '2 Nephi 4:15–35',
          explanation: "It's called a psalm because of its poetic, deeply personal expression of both worship and struggle — much like the psalms of David."
        },
        {
          type: 'multiple_choice',
          prompt: "In 2 Nephi 4:16, what does Nephi say his soul delights in?",
          options: [
            'In the wealth of his people',
            'In the things of the Lord, and his heart pondereth continually upon them',
            'In the safety of his family',
            'In the building of the temple'
          ],
          correct: 1,
          reference: '2 Nephi 4:16',
          explanation: "'My soul delighteth in the things of the Lord; and my heart pondereth continually upon the things which I have seen and heard.' Delight in scripture fueled Nephi's faith."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this verse from the Psalm of Nephi:\n"I have trusted in thee, and I will trust in thee ______." (2 Nephi 4:34)',
          answer: 'forever',
          acceptable: ['forever'],
          reference: '2 Nephi 4:34',
          explanation: "Even after expressing his weaknesses, Nephi anchored himself in trust. Faith is a decision repeated daily."
        },
        {
          type: 'multiple_choice',
          prompt: 'Why did the Lord command Nephi to flee with his people into the wilderness (2 Nephi 5:5–7)?',
          options: [
            'To find better farmland',
            'To preserve their lives and separate them from the wickedness of Laman, Lemuel, and their followers',
            'To search for the promised land',
            'To meet with other tribes of Israel'
          ],
          correct: 1,
          reference: '2 Nephi 5:5–7',
          explanation: "The Lord warned Nephi that his brothers sought his life. Fleeing wickedness — both physical and spiritual — is sometimes the Lord's protection."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this verse (2 Nephi 5:27):\n"And it came to pass that we lived after the manner of ______."',
          answer: 'happiness',
          acceptable: ['happiness'],
          reference: '2 Nephi 5:27',
          explanation: "Happiness is a way of living, not an accident. Nephi's people kept the commandments, worked diligently, built a temple, and walked uprightly — and joy followed."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 6:11, what will lead to the gathering of the house of Israel?',
          options: [
            'When they return to the land of Jerusalem',
            'When they come to the knowledge of their Redeemer',
            'When they become a great nation',
            'When they build a new temple'
          ],
          correct: 1,
          reference: '2 Nephi 6:11',
          explanation: "Jacob taught that the gathering is fundamentally a return to Christ. Knowing the Redeemer is what gathers Israel — geography follows."
        },
        {
          type: 'multiple_choice',
          prompt: 'Whose sermon is recorded in 2 Nephi 6–8?',
          options: [
            'Nephi',
            'Lehi (recorded posthumously)',
            'Jacob, the brother of Nephi',
            'Sam, the brother of Nephi'
          ],
          correct: 2,
          reference: '2 Nephi 6:1–4',
          explanation: "Jacob, born in the wilderness, became a powerful teacher. He used Isaiah's words to testify of the Messiah and the gathering of Israel."
        }
      ]
    },
    ch9: {
      id: 'ch9',
      chapter: 9,
      range: '2 Nephi 9–10',
      title: "The Infinite Atonement",
      subtitle: "Jacob's sermon on the Savior's grace",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-9?lang=eng',
      reading: {
        body: [
          "2 Nephi 9 is one of the most descriptive chapters on the Atonement in all of scripture. Jacob taught with urgency: without an 'infinite atonement,' he said, our bodies would never rise again, and our spirits would be subject to 'that awful monster, death and hell' (2 Nephi 9:7, 10). But because of Jesus Christ, both physical death and spiritual death are conquered.",
          "Jacob then warned that the blessings of the Atonement are not automatic — our attitudes and actions determine whether we receive its full power. He named obstacles: pride in learning, idol worship, being 'carnally-minded,' and wasting 'the days of [our] probation.' 'To be carnally-minded is death, and to be spiritually-minded is life eternal' (2 Nephi 9:39).",
          "He warned the learned in particular: 'When they are learned they think they are wise, and they hearken not unto the counsel of God... wherefore, their wisdom is foolishness... But to be learned is good if they hearken unto the counsels of God' (2 Nephi 9:28–29).",
          "In 2 Nephi 10, Jacob closed with a message of hope. Despite Israel's scattering and our personal struggles, 'we are not cast off' (2 Nephi 10:20). He invited us to 'cheer up [our] hearts' and 'reconcile [our]selves to the will of God' (2 Nephi 10:23–24) — bringing our wills into harmony with His."
        ],
        principles: [
          "The Atonement is infinite — it conquers both physical and spiritual death",
          "Our attitudes and actions determine how much of the Atonement's power we receive",
          "Learning is good IF we hearken to the counsels of God",
          "To be carnally-minded is death; to be spiritually-minded is life eternal",
          "We can reconcile ourselves to God's will and cheer up our hearts"
        ]
      },
      reflection: '"Jacob taught that we must \'reconcile yourselves to the will of God.\' What is one area of your life where you sense the Lord inviting your will to align with His?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 9:7, what kind of atonement was needed to overcome the Fall?',
          options: [
            'A partial atonement',
            'A symbolic atonement',
            'An infinite atonement',
            'A temporary atonement'
          ],
          correct: 2,
          reference: '2 Nephi 9:7',
          explanation: "Jacob taught the atonement 'must needs be an infinite atonement' — infinite in scope, in power, and in mercy."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 9:10, what does Jacob call physical death and spiritual death?',
          options: [
            'A heavy burden',
            'That awful monster, death and hell',
            'A long darkness',
            'A great mystery'
          ],
          correct: 1,
          reference: '2 Nephi 9:10',
          explanation: "'O how great the goodness of our God, who prepareth a way for our escape from the grasp of this awful monster!' The Atonement is what rescues us."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this verse (2 Nephi 9:39):\n"To be carnally-minded is death, and to be spiritually-minded is ______."',
          answer: 'life eternal',
          acceptable: ['life eternal', 'eternal life'],
          reference: '2 Nephi 9:39',
          explanation: "What we set our hearts on shapes us. Spiritually-minded living invites the very life of God to flow into ours."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 9:28–29, when is being learned a good thing?',
          options: [
            'When it brings worldly success',
            'When it earns respect from others',
            'When the learned hearken unto the counsels of God',
            'When learning is shared widely'
          ],
          correct: 2,
          reference: '2 Nephi 9:28–29',
          explanation: "'To be learned is good IF they hearken unto the counsels of God.' Knowledge becomes wisdom only when humbled before the Lord."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 9:41, who is "the keeper of the gate"?',
          options: [
            'An angel of the Lord',
            'The Holy One of Israel — He employeth no servant there',
            'The prophet of His Church',
            'The Father, who alone admits the worthy'
          ],
          correct: 1,
          reference: '2 Nephi 9:41',
          explanation: "'The keeper of the gate is the Holy One of Israel; and he employeth no servant there.' Christ Himself receives those who come unto Him."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 10:20, what reassurance does Jacob give to those who feel discouraged?',
          options: [
            'Trials will end quickly',
            'We are not cast off',
            'Wealth will come to the faithful',
            'God will remove our challenges'
          ],
          correct: 1,
          reference: '2 Nephi 10:20',
          explanation: "'Let us remember him, and lay aside our sins, and not hang down our heads, for we are not cast off.' However far we feel from Christ, He is not far from us."
        },
        {
          type: 'multiple_choice',
          prompt: 'What does Jacob mean when he tells us to "reconcile yourselves to the will of God" (2 Nephi 10:24)?',
          options: [
            'Accept that bad things happen and move on',
            'Make our will consistent with God\'s will and submit to Him',
            'Apologize for our mistakes once a year',
            'Stop praying for things we want'
          ],
          correct: 1,
          reference: '2 Nephi 10:24',
          explanation: "Reconciling means aligning our will with God's. Even with all our diligence, we are saved 'only in and through the grace of God.'"
        }
      ]
    },
    ch10: {
      id: 'ch10',
      chapter: 10,
      range: '2 Nephi 11–16',
      title: "All Things Typify Christ",
      subtitle: "Isaiah's testimony begins",
      available: true,
      xpReward: 25,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-10?lang=eng',
      reading: {
        body: [
          "Before Nephi quoted extensive chapters from Isaiah, he gave us a key for reading them. 'My soul delighteth in proving unto my people the truth of the coming of Christ,' he wrote, 'for, for this end hath the law of Moses been given; and all things which have been given of God from the beginning of the world, unto man, are the typifying of him' (2 Nephi 11:4).",
          "All things typify Christ. The whole creation, every ordinance, every prophet's life — all of it points to the Savior. This is the lens Isaiah uses too. Nephi joins his testimony with that of his brother Jacob and the prophet Isaiah, giving us three witnesses of Christ in the small plates: 'by the words of three, God hath said, I will establish my word' (2 Nephi 11:3).",
          "Isaiah's prophecies in 2 Nephi 12–15 describe both judgment and peace in the last days. The 'house of Jacob' would suffer for their idols. The 'daughters of Zion' — members of the Church grown prideful and worldly — would lose their adornments. But 'them that are escaped' — the righteous remnant cleansed by the Atonement — would be 'beautiful and glorious,' protected by the Lord (2 Nephi 14:2–6).",
          "Isaiah prophesied that 'the mountain of the Lord's house' would be established in the tops of the mountains in the last days, and that the Lord would 'lift up an ensign to the nations' (2 Nephi 12:2; 15:26). Latter-day temples and the restored Church fulfill these prophecies — a signal calling Israel home.",
          "In 2 Nephi 16, we read Isaiah's own call to be a prophet. After his sins are purged with a live coal from the altar, the Lord asks, 'Whom shall I send, and who will go for us?' Isaiah replies, 'Here am I; send me' (2 Nephi 16:8)."
        ],
        principles: [
          "All things given of God typify Jesus Christ",
          "Three witnesses (Nephi, Jacob, Isaiah) establish the testimony of Christ",
          "God brings both judgment and peace in the last days",
          "The Lord lifts an ensign — His temples and Church — to gather Israel",
          "Isaiah is the great messianic prophet of the Old Testament"
        ]
      },
      reflection: '"Isaiah\'s answer to the Lord was \'Here am I; send me.\' What is one small \'send me\' moment the Lord may be inviting from you this week?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 11:4, what do all things that God has given testify of?',
          options: [
            'The covenants of Abraham',
            'Jesus Christ (they typify Him)',
            'The Creation of the world',
            'The faithfulness of prophets'
          ],
          correct: 1,
          reference: '2 Nephi 11:4',
          explanation: "Nephi teaches that 'all things which have been given of God from the beginning of the world, unto man, are the typifying of him' — Christ is the center of everything God has revealed."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 11:1–3, who are the three witnesses of Christ in the small plates of the Book of Mormon?',
          options: [
            'Lehi, Nephi, and Jacob',
            'Nephi, Jacob, and Isaiah',
            'Nephi, Joseph, and Isaiah',
            'Jacob, Joseph, and Sam'
          ],
          correct: 1,
          reference: '2 Nephi 11:1–3',
          explanation: "Three prophets — Nephi, Jacob, and Isaiah — each saw the Redeemer. Their combined testimony establishes the truth of Christ early in the Book of Mormon."
        },
        {
          type: 'multiple_choice',
          prompt: 'What does it mean that something "typifies" Christ?',
          options: [
            'It represents, foreshadows, or points to Christ as a type or symbol',
            'It is a copy of Christ\'s exact words',
            'It is a written prophecy about Christ',
            'It is identical to Christ in every way'
          ],
          correct: 0,
          reference: '2 Nephi 11:4',
          explanation: "A 'type' is a likeness — a symbol or shadow that teaches us about Christ. The brass serpent, the manna, sacrificial offerings — all typified Him."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this verse where Isaiah accepts his call from the Lord:\n"Here am I; send ______." (2 Nephi 16:8)',
          answer: 'me',
          acceptable: ['me'],
          reference: '2 Nephi 16:8',
          explanation: "After his lips were purged with a coal from the altar, Isaiah heard the Lord ask, 'Whom shall I send?' His willing answer became the model of every called prophet."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 15:26, Isaiah prophesied the Lord would "lift up an ensign to the nations." What is an ensign?',
          options: [
            'A military uniform',
            'A signal or banner to gather the nations',
            'A type of priesthood office',
            'A foreign language translation'
          ],
          correct: 1,
          reference: '2 Nephi 15:26',
          explanation: "An ensign is a signal to assemble — a banner lifted high to call people together. Latter-day prophets have taught that the restored Church and its temples fulfill this prophecy."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 12:2–3, Isaiah prophesied that "the mountain of the Lord\'s house" would be established in the last days. What is this generally understood to refer to?',
          options: [
            'The original temple in Jerusalem rebuilt',
            'Latter-day temples — including those built on mountains in the West',
            'A specific mountain in Israel',
            'The Garden of Eden'
          ],
          correct: 1,
          reference: '2 Nephi 12:2–3',
          explanation: "President Hinckley taught that this prophecy is fulfilled in latter-day temples — sacred mountains of the Lord drawing people from every nation to learn His ways."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 14:2–6, what blessings does Isaiah prophesy for "them that are escaped" of Israel?',
          options: [
            'Wealth, power, and political control',
            'They will be beautiful and glorious, called holy, with filth washed away, protected by the Lord',
            'A return to their original lands without trial',
            'Recognition by all worldly nations'
          ],
          correct: 1,
          reference: '2 Nephi 14:2–6',
          explanation: "The righteous remnant — cleansed through the Atonement — receive sanctification, protection, and the Lord's continual presence. The 'escape' is from sin, not just from circumstance."
        }
      ]
    }
  };

  // Order in which lessons appear on the path
  const LESSON_ORDER = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch9', 'ch10'];

  // ============ DAILY VERSES ============
  // 14 verses that rotate daily based on day-of-year
  // ============ DAILY VERSES ============
  // Full verse text from the Book of Mormon, sourced from
  // The Church of Jesus Christ of Latter-day Saints (churchofjesuschrist.org).
  // The verse shown rotates daily based on the day of the year.
  const DAILY_VERSES = [
    {
      text: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.",
      ref: "1 Nephi 3:7"
    },
    {
      text: "Adam fell that men might be; and men are, that they might have joy.",
      ref: "2 Nephi 2:25"
    },
    {
      text: "For we labor diligently to write, to persuade our children, and also our brethren, to believe in Christ, and to be reconciled to God; for we know that it is by grace that we are saved, after all we can do.",
      ref: "2 Nephi 25:23"
    },
    {
      text: "Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life.",
      ref: "2 Nephi 31:20"
    },
    {
      text: "And now as I said concerning faith — faith is not to have a perfect knowledge of things; therefore if ye have faith ye hope for things which are not seen, which are true.",
      ref: "Alma 32:21"
    },
    {
      text: "Now ye may suppose that this is foolishness in me; but behold I say unto you, that by small and simple things are great things brought to pass; and small means in many instances doth confound the wise.",
      ref: "Alma 37:6"
    },
    {
      text: "And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.",
      ref: "Helaman 5:12"
    },
    {
      text: "And now, I, Moroni, would speak somewhat concerning these things; I would show unto the world that faith is things which are hoped for and not seen; wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith.",
      ref: "Ether 12:6"
    },
    {
      text: "And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.",
      ref: "Ether 12:27"
    },
    {
      text: "And charity suffereth long, and is kind, and envieth not, and is not puffed up, seeketh not her own, is not easily provoked, thinketh no evil, and rejoiceth not in iniquity but rejoiceth in the truth, beareth all things, believeth all things, hopeth all things, endureth all things.",
      ref: "Moroni 7:45"
    },
    {
      text: "But behold, I, Nephi, will show unto you that the tender mercies of the Lord are over all those whom he hath chosen, because of their faith, to make them mighty even unto the power of deliverance.",
      ref: "1 Nephi 1:20"
    },
    {
      text: "And now I would that ye should be humble, and be submissive and gentle; easy to be entreated; full of patience and long-suffering; being temperate in all things; being diligent in keeping the commandments of God at all times; asking for whatsoever things ye stand in need, both spiritual and temporal; always returning thanks unto God for whatsoever things ye do receive.",
      ref: "Alma 7:23"
    },
    {
      text: "Do not suppose, because it has been spoken concerning restoration, that ye shall be restored from sin to happiness. Behold, I say unto you, wickedness never was happiness.",
      ref: "Alma 41:10"
    },
    {
      text: "And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God.",
      ref: "Mosiah 2:17"
    }
  ];

  function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  function getTodaysVerse() {
    return DAILY_VERSES[getDayOfYear() % DAILY_VERSES.length];
  }
