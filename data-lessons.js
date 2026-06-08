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
      xpReward: 50,
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
      xpReward: 55,
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
      xpReward: 60,
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
      xpReward: 60,
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
      xpReward: 55,
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
      xpReward: 65,
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
      xpReward: 70,
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
      xpReward: 65,
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
      xpReward: 75,
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
      xpReward: 70,
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
    },
    ch11: {
      id: 'ch11',
      chapter: 11,
      range: '2 Nephi 17–24',
      title: "The Prince of Peace",
      subtitle: "Isaiah's prophecies of Christ's birth and Second Coming",
      available: true,
      xpReward: 60,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-11?lang=eng',
      reading: {
        body: [
          "Through a series of remarkable revelations, Isaiah learned about the Savior's birth and Second Coming, the conditions of the last days, the peace and joy of the Millennium, and the ultimate failure of the adversary. Though these prophecies also spoke to events in Isaiah's own day, we can read them with confidence that they hold messages for us — messages of warning, peace, and hope.",
          "Isaiah prophesied of a sign: 'a virgin shall conceive, and shall bear a son, and shall call his name Immanuel' (2 Nephi 17:14). Immanuel means 'God with us.' This prophecy found its ultimate fulfillment in the birth of Jesus Christ (see Matthew 1:18–25).",
          "One of the best-loved prophecies of the Savior is found in 2 Nephi 19:6: 'For unto us a child is born, unto us a son is given... and his name shall be called Wonderful, Counselor, The Mighty God, The Everlasting Father, The Prince of Peace.' Five titles, each revealing a role Christ fills in our lives now and in the world to come.",
          "Isaiah warned that the wicked would be destroyed at the Second Coming. Using the destruction of ancient Assyria as a type, he described the pride, hypocrisy, and greed that bring judgment — and counseled the people to 'stay upon the Lord,' to fix their reliance and confidence on Him (2 Nephi 20:20).",
          "Isaiah also saw the Millennium — a thousand years of peace when people would praise God for His goodness (2 Nephi 22) — and foresaw the final fall of Lucifer, whose pride led to his being cast down (2 Nephi 24:12–15). Satan's opposition to God will ultimately fail."
        ],
        principles: [
          "Jesus Christ was born to reign as the Prince of Peace",
          "Immanuel means 'God with us' — the Lord is with those who trust Him",
          "The wicked will be destroyed at the Second Coming",
          "We are to 'stay upon' the Lord — rely on Him completely",
          "Satan's opposition to God will ultimately fail"
        ]
      },
      reflection: '"Of the five titles in 2 Nephi 19:6 — Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace — which one do you most need the Savior to be for you right now?"',
      questions: [
        {
          type: 'fill_blank',
          prompt: 'Complete the name given in Isaiah\'s prophecy of the Savior\'s birth:\n"a virgin shall conceive... and shall call his name ______." (2 Nephi 17:14)',
          answer: 'Immanuel',
          acceptable: ['immanuel', 'emmanuel'],
          reference: '2 Nephi 17:14',
          explanation: "Immanuel means 'God with us.' Isaiah's sign pointed to the birth of Jesus Christ, fulfilled centuries later as recorded in Matthew 1."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 19:6, Isaiah lists five titles of the coming Messiah. Which set is correct?',
          options: [
            'Shepherd, King, Servant, Teacher, Friend',
            'Wonderful, Counselor, The Mighty God, The Everlasting Father, The Prince of Peace',
            'Redeemer, Savior, Master, Lord, Creator',
            'Alpha, Omega, First, Last, Beginning'
          ],
          correct: 1,
          reference: '2 Nephi 19:6',
          explanation: "'His name shall be called Wonderful, Counselor, The Mighty God, The Everlasting Father, The Prince of Peace.' Each title reveals a role Christ fills."
        },
        {
          type: 'multiple_choice',
          prompt: 'What does the title "Immanuel" mean?',
          options: [
            'King of Kings',
            'God with us',
            'The Anointed One',
            'Light of the World'
          ],
          correct: 1,
          reference: '2 Nephi 17:14',
          explanation: "Immanuel means 'God with us' — a reminder that the Lord is present with those who trust in Him, even in times of difficulty and fear."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 20:20, Isaiah counsels Israel to "stay upon the Lord." What does "stay upon" mean in this context?',
          options: [
            'To wait patiently without acting',
            'To fix reliance and confidence on Him as a foundation',
            'To remain physically in one place',
            'To delay until commanded'
          ],
          correct: 1,
          reference: '2 Nephi 20:20',
          explanation: "To 'stay upon' the Lord means to place your reliance, confidence, and foundation in Him — rather than in worldly alliances or your own strength."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 24:12–15, what ultimately happens to Lucifer (Satan)?',
          options: [
            'He wins control of the earth for a time',
            'He is cast down; his opposition to God ultimately fails',
            'He repents at the last day',
            'He is given a kingdom of his own'
          ],
          correct: 1,
          reference: '2 Nephi 24:12–15',
          explanation: "Isaiah foresaw Lucifer's fall — brought down by his own pride. However fierce his opposition, Satan's efforts against God will ultimately fail."
        },
        {
          type: 'multiple_choice',
          prompt: 'What is 2 Nephi 22 primarily about?',
          options: [
            'The destruction of Jerusalem',
            'The Millennium — a period of peace when people praise the Lord',
            'The journey through the wilderness',
            'The building of the temple'
          ],
          correct: 1,
          reference: '2 Nephi 22',
          explanation: "2 Nephi 22 describes the Millennium. Even after the cataclysmic events preceding the Second Coming, people will praise the Lord for His goodness and loving-kindness."
        }
      ]
    },
    ch12: {
      id: 'ch12',
      chapter: 12,
      range: '2 Nephi 25–27',
      title: "Nephi's Plainness",
      subtitle: "Salvation in Christ and the coming forth of the Book of Mormon",
      available: true,
      xpReward: 65,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-12?lang=eng',
      reading: {
        body: [
          "After quoting many chapters of Isaiah, Nephi offered his own inspired commentary. He acknowledged that Isaiah's words are hard for many to understand, but said, 'I glory in plainness; I glory in truth' (2 Nephi 33:6). Nephi's insights fall into three categories: the role of Christ as the source of salvation, a warning about the evils of the last days, and a prophecy of the Restoration.",
          "First, Nephi testified plainly of Christ: 'we labor diligently to write, to persuade our children, and also our brethren, to believe in Christ, and to be reconciled to God; for we know that it is by grace that we are saved, after all we can do' (2 Nephi 25:23). Salvation comes only through Jesus Christ. 'There is none other name given under heaven save it be this Jesus Christ... whereby man can be saved' (2 Nephi 25:20).",
          "Second, Nephi warned of stumbling blocks in the last days: pride, priestcraft, and secret combinations. 'Priestcrafts are that men preach and set themselves up for a light unto the world, that they may get gain and praise of the world; but they seek not the welfare of Zion' (2 Nephi 26:29).",
          "Nephi taught that 'the Lord God worketh not in darkness... he doeth nothing save it be plain unto the children of men... all are alike unto God' (2 Nephi 26:33). The Lord invites all to come to Him — black and white, bond and free, male and female.",
          "Third, Nephi quoted Isaiah's prophecy of a sealed book that would come forth — words of a book delivered to the learned and the unlearned, a 'marvelous work and a wonder' (2 Nephi 27:26). This prophecy describes the coming forth of the Book of Mormon, including the experience of Martin Harris with Professor Charles Anthon."
        ],
        principles: [
          "Salvation comes only through Jesus Christ",
          "We are saved by grace, after all we can do",
          "Pride, priestcraft, and secret combinations are stumbling blocks of the last days",
          "The Lord works in plainness — all are alike unto God",
          "Isaiah and Nephi prophesied of the coming forth of the Book of Mormon"
        ]
      },
      reflection: '"Nephi said he gloried in plainness. What is one truth of the gospel that feels simple and plain to you — and how does that plainness strengthen your faith?"',
      questions: [
        {
          type: 'fill_blank',
          prompt: 'Complete this central verse on grace:\n"for we know that it is by grace that we are saved, after all we can ______." (2 Nephi 25:23)',
          answer: 'do',
          acceptable: ['do'],
          reference: '2 Nephi 25:23',
          explanation: "Nephi teaches the relationship between grace and effort: we are saved by the grace of Christ, after we have done all we can do to come unto Him."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 25:20, how can mankind be saved?',
          options: [
            'Through obedience to the law of Moses',
            'Through no other name than Jesus Christ',
            'Through the wisdom of the learned',
            'Through their own good works alone'
          ],
          correct: 1,
          reference: '2 Nephi 25:20',
          explanation: "'There is none other name given under heaven save it be this Jesus Christ... whereby man can be saved.' Salvation comes only through Him."
        },
        {
          type: 'multiple_choice',
          prompt: 'How does Nephi define "priestcraft" in 2 Nephi 26:29?',
          options: [
            'The proper ordination of priests',
            'Men preaching and setting themselves up as a light to get gain and praise, not seeking the welfare of Zion',
            'The building of temples',
            'Teaching the scriptures to children'
          ],
          correct: 1,
          reference: '2 Nephi 26:29',
          explanation: "Priestcraft is preaching for personal gain and the praise of the world rather than for the welfare of Zion and the good of others."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 26:33, Nephi teaches that the Lord invites all to come unto Him. What phrase captures this?',
          options: [
            '"Many are called, but few are chosen"',
            '"All are alike unto God"',
            '"The first shall be last"',
            '"Strait is the gate"'
          ],
          correct: 1,
          reference: '2 Nephi 26:33',
          explanation: "'All are alike unto God' — black and white, bond and free, male and female. The Lord denies none who come unto Him."
        },
        {
          type: 'multiple_choice',
          prompt: 'The prophecy of a sealed book and a "marvelous work and a wonder" in 2 Nephi 27 refers to what?',
          options: [
            'The rebuilding of the temple in Jerusalem',
            'The coming forth of the Book of Mormon',
            'The writings of Isaiah',
            'The creation of the world'
          ],
          correct: 1,
          reference: '2 Nephi 27:26',
          explanation: "Nephi quotes and expands Isaiah's prophecy of a sealed book delivered to the learned and unlearned — fulfilled in the coming forth of the Book of Mormon."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to Nephi, why does the Lord do "nothing save it be plain" (2 Nephi 26:33)?',
          options: [
            'Because He wants to test only the wise',
            'Because He loves all His children and invites all to partake of His goodness',
            'Because plainness hides deeper secrets',
            'Because only prophets can understand Him'
          ],
          correct: 1,
          reference: '2 Nephi 26:33',
          explanation: "The Lord works in plainness out of love — He doeth nothing save it be for the benefit of the world, inviting all to come unto Him and be saved."
        }
      ]
    },
    ch13: {
      id: 'ch13',
      chapter: 13,
      range: '2 Nephi 28–30',
      title: "A Second Witness",
      subtitle: "False doctrines of the last days and the role of scripture",
      available: true,
      xpReward: 65,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-13?lang=eng',
      reading: {
        body: [
          "In 2 Nephi 28–30, Nephi describes the challenging conditions of the latter days — and the Lord's response. He warns of 'vain and foolish doctrines' that would deceive many, and points to the Book of Mormon as a second witness that establishes the truth.",
          "Nephi foresaw false teachings of the last days: 'eat, drink, and be merry, for tomorrow we die' (2 Nephi 28:7); 'there is no hell... God will beat us with a few stripes, and at last we shall be saved' (2 Nephi 28:8); and 'all is well in Zion; yea, Zion prospereth, all is well' (2 Nephi 28:21). The devil would lull people away into carnal security.",
          "Nephi warned of pride entering the Lord's churches, and of those who 'rob the poor because of their fine sanctuaries' and 'persecute the meek' (2 Nephi 28:13). He cautioned against trusting in the precepts of men.",
          "To those who would say 'a Bible, a Bible, we have got a Bible, and there cannot be any more Bible' (2 Nephi 29:3), the Lord answers that He speaks to all nations and gathers their words. The Bible and the Book of Mormon 'shall grow together, unto the confounding of false doctrines' (2 Nephi 3:12). The Book of Mormon joins the Bible in bearing witness that the Lord is God.",
          "Finally, 2 Nephi 30 describes the blessings of the covenant people and the conditions of the Millennium — when the Lord's knowledge will cover the earth and there shall be peace among all. Obedience, repentance, and faith in Jesus Christ qualify us to become the Lord's covenant people."
        ],
        principles: [
          "In the last days, many will be deceived by false doctrines",
          "The devil seeks to lull people into carnal security ('all is well in Zion')",
          "The Book of Mormon joins the Bible in witnessing that the Lord is God",
          "Two or more witnesses confound false doctrine and establish truth",
          "Obedience, repentance, and faith in Christ make us the Lord's covenant people"
        ]
      },
      reflection: '"Nephi warned against the comfortable lie \'all is well in Zion.\' Where in your own life might you be tempted toward spiritual complacency — and what is one step toward greater diligence?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'Which of these is one of the false doctrines Nephi warned would be taught in the last days (2 Nephi 28)?',
          options: [
            '"Eat, drink, and be merry, for tomorrow we die"',
            '"Pray always and faint not"',
            '"Seek ye first the kingdom of God"',
            '"Come unto Christ, and be perfected in Him"'
          ],
          correct: 0,
          reference: '2 Nephi 28:7',
          explanation: "Nephi foresaw the false teaching 'eat, drink, and be merry, for tomorrow we die' — a denial of accountability that lulls people into spiritual carelessness."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this false teaching Nephi warned about:\n"All is well in ______; yea, Zion prospereth, all is well." (2 Nephi 28:21)',
          answer: 'Zion',
          acceptable: ['zion'],
          reference: '2 Nephi 28:21',
          explanation: "The devil seeks to lull people into 'carnal security' with the comforting lie that 'all is well in Zion' — discouraging the diligence and repentance that salvation requires."
        },
        {
          type: 'multiple_choice',
          prompt: 'In 2 Nephi 29, how does the Lord respond to those who say "we have got a Bible, and there cannot be any more Bible"?',
          options: [
            'He agrees the Bible is complete',
            'He declares He speaks to all nations and gathers their words as witnesses',
            'He condemns all written scripture',
            'He says only prophets may read scripture'
          ],
          correct: 1,
          reference: '2 Nephi 29:3',
          explanation: "The Lord teaches that He speaks the same words to all nations, and their records will come together as witnesses — He is not limited to one book or one people."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 3:12 (referenced in this lesson), what happens when the records of Judah (Bible) and Joseph (Book of Mormon) grow together?',
          options: [
            'They replace each other',
            'They confound false doctrines, lay down contentions, and establish peace',
            'They create confusion',
            'They prove the Bible false'
          ],
          correct: 1,
          reference: '2 Nephi 3:12',
          explanation: "The two records 'grow together, unto the confounding of false doctrines and laying down of contentions, and establishing peace.' Two witnesses establish truth."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 30:1–2, who becomes the Lord\'s covenant people?',
          options: [
            'Only those born into a certain lineage',
            'All who repent and have faith in Christ, both Jew and Gentile',
            'Only those who lived in ancient times',
            'Only the learned and wise'
          ],
          correct: 1,
          reference: '2 Nephi 30:1–2',
          explanation: "Nephi teaches that being the Lord's covenant people is not about lineage but about repentance and faith in Christ — open to all who come unto Him."
        },
        {
          type: 'multiple_choice',
          prompt: 'Why does Nephi describe the false doctrines of the last days?',
          options: [
            'To frighten people into obedience',
            'To help us recognize and avoid worldly influences that weaken faith',
            'To condemn other religions',
            'To predict exact dates of future events'
          ],
          correct: 1,
          reference: '2 Nephi 28',
          explanation: "Nephi names the false doctrines so we can recognize 'vain and foolish doctrines' for what they are and choose to anchor ourselves in Christ instead."
        }
      ]
    },
    ch14: {
      id: 'ch14',
      chapter: 14,
      range: '2 Nephi 31–33',
      title: "The Doctrine of Christ",
      subtitle: "Nephi's final testimony and the way to eternal life",
      available: true,
      xpReward: 75,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-14?lang=eng',
      reading: {
        body: [
          "In his final chapters, Nephi gives what he calls 'the doctrine of Christ' — the simple, clear path that leads to eternal life. It focuses on faith in the Lord Jesus Christ, repentance, baptism by immersion, receiving the gift of the Holy Ghost, and enduring to the end.",
          "Nephi explains that even Jesus, who was sinless, was baptized to 'fulfil all righteousness' and to show 'the straitness of the path, and the narrowness of the gate, by which they should enter, he having set the example before them' (2 Nephi 31:9). If the Holy One needed baptism, how much more do we?",
          "After baptism comes the baptism of fire and the Holy Ghost. Then, Nephi teaches, comes one of the most beautiful invitations in scripture: 'press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life' (2 Nephi 31:20).",
          "Nephi teaches that after entering the path, we must continue to be nourished: 'feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do' (2 Nephi 32:3). And we should 'pray always, and not faint' (2 Nephi 32:9).",
          "Nephi closes his record with his testimony: 'I glory in plainness; I glory in truth; I glory in my Jesus, for he hath redeemed my soul' (2 Nephi 33:6). His words, he promises, will stand as a witness against us or for us at the last day."
        ],
        principles: [
          "The doctrine of Christ: faith, repentance, baptism, the Holy Ghost, and enduring to the end",
          "Jesus was baptized to fulfil all righteousness and set the example",
          "We must press forward with a perfect brightness of hope and endure to the end",
          "Feasting on the words of Christ tells us all things we should do",
          "We should pray always and not faint"
        ]
      },
      reflection: '"Nephi invites us to \'press forward, feasting upon the word of Christ.\' What is one way you can feast — rather than merely nibble — on the scriptures this week?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 31, what are the elements of "the doctrine of Christ"?',
          options: [
            'Fasting, tithing, temple work, and missionary service',
            'Faith in Christ, repentance, baptism, receiving the Holy Ghost, and enduring to the end',
            'Prayer, scripture study, and church attendance',
            'Charity, humility, and obedience only'
          ],
          correct: 1,
          reference: '2 Nephi 31:13–20',
          explanation: "Nephi's 'doctrine of Christ' is the foundational path: faith in Jesus Christ, repentance, baptism by immersion, the gift of the Holy Ghost, and enduring to the end."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 31:9, why was Jesus — who was sinless — baptized?',
          options: [
            'To be forgiven of sin',
            'To fulfil all righteousness and set the example for us',
            'Because the law of Moses required it',
            'To begin His public ministry only'
          ],
          correct: 1,
          reference: '2 Nephi 31:9',
          explanation: "Jesus was baptized to 'fulfil all righteousness' and to show us the straitness of the path — setting the example we are to follow."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete this beloved verse:\n"Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of ______." (2 Nephi 31:20)',
          answer: 'hope',
          acceptable: ['hope'],
          reference: '2 Nephi 31:20',
          explanation: "We press forward with 'a perfect brightness of hope, and a love of God and of all men' — feasting on the word and enduring to the end leads to eternal life."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to 2 Nephi 32:3, what will the words of Christ do for us?',
          options: [
            'Tell us all things what we should do',
            'Replace the need for prayer',
            'Reveal the date of the Second Coming',
            'Give us power over others'
          ],
          correct: 0,
          reference: '2 Nephi 32:3',
          explanation: "'Feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do.' The scriptures are our daily guide."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete Nephi\'s counsel on prayer:\n"ye must pray always, and not ______." (2 Nephi 32:9)',
          answer: 'faint',
          acceptable: ['faint'],
          reference: '2 Nephi 32:9',
          explanation: "Nephi teaches that we 'must pray always, and not faint' — and that we should consecrate our performance unto the Lord for the welfare of our souls."
        },
        {
          type: 'multiple_choice',
          prompt: 'How does Nephi describe his own writing and testimony in 2 Nephi 33:6?',
          options: [
            '"I glory in plainness; I glory in truth; I glory in my Jesus"',
            '"I write only for the learned"',
            '"My words are too sacred to share"',
            '"I speak in mysteries and dark sayings"'
          ],
          correct: 0,
          reference: '2 Nephi 33:6',
          explanation: "Nephi's closing testimony: 'I glory in plainness; I glory in truth; I glory in my Jesus, for he hath redeemed my soul.' His words witness of Christ."
        }
      ]
    },
    ch15: {
      id: 'ch15',
      chapter: 15,
      range: 'Jacob 1–4',
      title: "Reconciled to Christ",
      subtitle: "Jacob's bold ministry and the call to purity",
      available: true,
      xpReward: 70,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-15?lang=eng',
      reading: {
        body: [
          "When Nephi died, the task of leading the Nephites spiritually fell to Jacob, whom Nephi had consecrated to be a priest and teacher. Jacob took this charge seriously: 'we labored diligently among our people, that we might persuade them to come unto Christ' (Jacob 1:7). To Jacob, teaching the word of God was an 'errand from the Lord.'",
          "Jacob taught a sobering principle of responsibility. He understood that if he 'did not teach them the word of God with all diligence,' he would be partly to blame for their sins (Jacob 1:19). The Lord holds His servants accountable to teach the people and warn them of their sins.",
          "From the temple, Jacob delivered a bold sermon. He reproved his people for three grievous sins: pride, the love and misuse of riches, and sexual immorality (see Jacob 2–3). 'Think of your brethren like unto yourselves,' he taught, 'and be familiar with all and free with your substance, that they may be rich like unto you' (Jacob 2:17).",
          "Jacob also condemned the practice of unauthorized plural marriage, teaching that the Lord delights in the chastity of His people. He spoke tenderly of those wounded by others' sins, whose hearts had been 'pierced with deep wounds' (Jacob 2:35), and pointed both sinner and victim to the healing of the Savior.",
          "At the heart of Jacob's message was an invitation: 'be reconciled unto him through the atonement of Christ, his Only Begotten Son' (Jacob 4:11). Jacob taught us to 'look unto God with firmness of mind, and pray unto him with exceeding faith' (Jacob 3:1) — centering our whole lives in Jesus Christ."
        ],
        principles: [
          "The Lord holds His servants accountable to teach and warn the people",
          "Pride, misuse of riches, and sexual immorality are grievous sins to avoid",
          "Plural marriage is forbidden unless the Lord commands it through His prophet",
          "We should look to God with firmness of mind and seek His kingdom first",
          "We are to be reconciled to God through the Atonement of Christ"
        ]
      },
      reflection: '"Jacob invited his people to \'be reconciled unto God through the atonement of Christ.\' What is one area of your life where you long to feel that reconciliation and healing?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'Who was Jacob, and what was his calling among the Nephites?',
          options: [
            'A king who ruled after Nephi',
            'A priest and teacher consecrated by Nephi to lead the people spiritually',
            'A military captain',
            'A record-keeper only, who never taught'
          ],
          correct: 1,
          reference: 'Jacob 1:18',
          explanation: "Jacob, Nephi's younger brother, was consecrated a priest and teacher. After Nephi's death, the spiritual leadership of the people fell to him."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to Jacob 1:19, what did Jacob understand about his responsibility as a teacher?',
          options: [
            'That teaching was optional',
            'That if he did not teach with diligence, he would be partly responsible for the people\'s sins',
            'That only the prophet could teach',
            'That he should teach only the willing'
          ],
          correct: 1,
          reference: 'Jacob 1:19',
          explanation: "Jacob labored to 'magnify his office,' knowing that failing to teach the word of God with diligence would leave him partly accountable for the people's sins."
        },
        {
          type: 'multiple_choice',
          prompt: 'Which three grievous sins did Jacob reprove his people for in Jacob 2–3?',
          options: [
            'Idleness, gossip, and anger',
            'Pride, the misuse of riches, and sexual immorality',
            'Idolatry, theft, and murder',
            'Doubt, fear, and complaining'
          ],
          correct: 1,
          reference: 'Jacob 2:12–35',
          explanation: "From the temple, Jacob boldly reproved pride, the love and misuse of riches, and sexual impurity — sins much like those people struggle with today."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete Jacob\'s central invitation:\n"be reconciled unto him through the ______ of Christ." (Jacob 4:11)',
          answer: 'atonement',
          acceptable: ['atonement', 'atonment'],
          reference: 'Jacob 4:11',
          explanation: "Jacob's message, like Nephi's, was a call to 'be reconciled unto God through the atonement of Christ' — the source of healing for both the sinner and the wounded."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did Jacob teach about plural marriage in his day (Jacob 2:27–30)?',
          options: [
            'It was always encouraged',
            'It was forbidden unless the Lord commands it through His prophet',
            'It was a matter of personal choice',
            'It was required of all leaders'
          ],
          correct: 1,
          reference: 'Jacob 2:27–30',
          explanation: "Jacob taught that the practice was forbidden among his people; the Lord delights in chastity. Plural marriage is only permitted when the Lord commands it through His prophet."
        },
        {
          type: 'multiple_choice',
          prompt: 'In Jacob 3:1, how does Jacob counsel the "pure in heart" to face their afflictions?',
          options: [
            'To flee from their enemies',
            'To look unto God with firmness of mind and pray with exceeding faith',
            'To demand justice from their leaders',
            'To remain silent and wait'
          ],
          correct: 1,
          reference: 'Jacob 3:1',
          explanation: "Jacob counsels the pure in heart to 'look unto God with firmness of mind, and pray unto him with exceeding faith' — and He will console them in their afflictions."
        }
      ]
    },

    ch16: {
      id: 'ch16',
      chapter: 16,
      range: 'Jacob 5–7',
      title: "The Allegory of the Olive Trees",
      subtitle: "The Lord's long labor to gather Israel",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-16?lang=eng',
      reading: {
        body: [
          "Jacob preserved a prophecy of Zenos — the allegory of the tame and wild olive trees — one of the longest and richest parables in all scripture.",
          "In the allegory, the master of a vineyard labors again and again to save a decaying tame olive tree (the house of Israel). He prunes it, grafts in wild branches (the Gentiles), digs about it, and nourishes it. Branches are scattered to far parts of the vineyard and later gathered again. Through it all, the Lord of the vineyard weeps over the tree and asks, 'What could I have done more for my vineyard?'",
          "The allegory teaches the scattering and gathering of Israel across the long span of history, and above all the Savior's patient, persistent love for His people. He does not give up on the tree.",
          "Jacob closes his record by recounting his encounter with Sherem, an anti-Christ who denied that Christ would come. Sherem was confounded and confessed the truth before he died. Jacob's people, the Nephites, lived out their days seeking to persuade men to come unto Christ."
        ],
        principles: [
          "The allegory of the olive trees teaches the scattering and gathering of Israel",
          "The Lord labors patiently and repeatedly to save His people",
          "The Lord asks, 'What could I have done more for my vineyard?'",
          "We are invited to labor in the vineyard with Him"
        ]
      },
      reflection: '"How have you seen the Lord patiently labor to bless and gather you, even when you wandered?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'In the allegory of Jacob 5, what does the tame olive tree represent?',
          options: ['The Gentiles', 'The house of Israel', 'The city of Jerusalem', 'The Nephites only'],
          correct: 1,
          reference: 'Jacob 5:3',
          explanation: "Zenos likened the house of Israel to a tame olive tree that began to decay, which the Lord of the vineyard labored to save."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did the Lord of the vineyard do to try to save the decaying tree?',
          options: ['He cut it down immediately', 'He pruned, dug about, grafted, and nourished it', 'He ignored it', 'He sold the vineyard'],
          correct: 1,
          reference: 'Jacob 5:4–11',
          explanation: "The master pruned, dug about, grafted in branches, and nourished the tree again and again — a symbol of the Lord's tireless effort to save Israel."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete the Lord of the vineyard\'s sorrowful question:\n"What could I have done more for my ______?"',
          answer: 'vineyard',
          acceptable: ['vineyard'],
          reference: 'Jacob 5:41',
          explanation: "The Lord of the vineyard wept and asked what more He could have done — a tender image of the Savior's love for His people."
        },
        {
          type: 'multiple_choice',
          prompt: 'What do the wild branches grafted into the tame tree represent?',
          options: ['The Gentiles', 'Fallen angels', 'The Lamanites only', 'The Jaredites'],
          correct: 0,
          reference: 'Jacob 5',
          explanation: "Grafting wild branches into the tame tree represents the Gentiles being brought into the covenant house of Israel."
        },
        {
          type: 'multiple_choice',
          prompt: 'Who was the anti-Christ that Jacob confronted, who denied that Christ would come?',
          options: ['Korihor', 'Nehor', 'Sherem', 'Zeezrom'],
          correct: 2,
          reference: 'Jacob 7:1–2',
          explanation: "Sherem sought to lead away the people and denied Christ; he was confounded and confessed the truth before he died."
        },
        {
          type: 'multiple_choice',
          prompt: 'How did the allegory describe the Lord\'s feelings toward the vineyard as it decayed?',
          options: ['Indifferent', 'He wept over it and labored to save it', 'He abandoned it', 'He was amused'],
          correct: 1,
          reference: 'Jacob 5:41',
          explanation: "The Lord of the vineyard wept, showing the Savior's deep, persistent love even when His people wander."
        },
        {
          type: 'fill_blank',
          prompt: 'Jacob invited the people to "come unto Christ" by laboring where?\n"...labor with our might in the ______ of the Lord."',
          answer: 'vineyard',
          acceptable: ['vineyard'],
          reference: 'Jacob 5:71–75',
          explanation: "The servants labored with their might in the vineyard, and we are likewise invited to help gather Israel in our day."
        }
      ]
    },

    ch17: {
      id: 'ch17',
      chapter: 17,
      range: 'Enos – Words of Mormon',
      title: "For a Wise Purpose",
      subtitle: "Enos's mighty prayer and the small plates",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-17-enos-words-of-mormon?lang=eng',
      reading: {
        body: [
          "Enos, the son of Jacob, went to hunt in the forest, but the words of his father about eternal life sank deep into his heart. He knelt and prayed all day and into the night, wrestling before God in mighty prayer.",
          "The voice of the Lord came into his mind: 'Thy sins are forgiven thee.' Enos then prayed not only for himself, but for the Nephites, and even for his enemies the Lamanites — that the records might be preserved for them in a future day. His prayer reveals a heart enlarged by charity.",
          "The short books of Jarom and Omni carry the record across many generations, written by faithful keepers who passed the small plates from father to son. Through Omni we learn how the Nephites under King Mosiah discovered the people of Zarahemla.",
          "The Words of Mormon explain that Mormon included the small plates 'for a wise purpose' known to the Lord. Centuries later, when the first 116 pages of translation were lost, these very plates preserved the record — a quiet testimony that the Lord knows all things from the beginning."
        ],
        principles: [
          "Sincere, mighty prayer brings forgiveness and peace",
          "A converted heart desires the salvation of others",
          "Faithful record-keepers preserved the word across generations",
          "The Lord prepares for our needs 'for a wise purpose'"
        ]
      },
      reflection: '"When has heartfelt prayer brought you the peace that your sins were forgiven, or turned your heart toward others?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'What was Enos doing when his soul hungered and he knelt to pray?',
          options: ['Farming', 'Hunting beasts in the forest', 'Keeping records', 'Traveling by ship'],
          correct: 1,
          reference: 'Enos 1:3–4',
          explanation: "Enos went to hunt, but his father's words about eternal life sank into his heart, leading him to pray mightily."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete the voice of the Lord to Enos:\n"Enos, thy sins are ______ thee."',
          answer: 'forgiven',
          acceptable: ['forgiven'],
          reference: 'Enos 1:5',
          explanation: "After Enos's all-day prayer, the Lord's voice assured him his sins were forgiven, and his guilt was swept away."
        },
        {
          type: 'multiple_choice',
          prompt: 'After praying for himself, for whom else did Enos pray?',
          options: ['Only his family', 'The Nephites and even his enemies the Lamanites', 'No one else', 'The Jaredites'],
          correct: 1,
          reference: 'Enos 1:9–13',
          explanation: "Enos's converted heart led him to pray for the welfare of the Nephites and even the Lamanites, asking that the records be preserved."
        },
        {
          type: 'multiple_choice',
          prompt: 'How long did Enos describe his soul wrestling before God in prayer?',
          options: ['A few minutes', 'All the day long, and into the night', 'Three days', 'One week'],
          correct: 1,
          reference: 'Enos 1:4',
          explanation: "Enos wrestled in mighty prayer all the day long, and when night came he still raised his voice high to the heavens."
        },
        {
          type: 'fill_blank',
          prompt: 'Mormon wrote that he included the small plates for a "______ purpose."',
          answer: 'wise',
          acceptable: ['wise'],
          reference: 'Words of Mormon 1:7',
          explanation: "Mormon said he kept the small plates 'for a wise purpose' known to the Lord — later fulfilled when the 116 manuscript pages were lost."
        },
        {
          type: 'multiple_choice',
          prompt: 'In the book of Omni, what group did the Nephites under Mosiah discover?',
          options: ['The Jaredites', 'The people of Zarahemla (Mulekites)', 'The lost tribes', 'The Lamanites'],
          correct: 1,
          reference: 'Omni 1:14–19',
          explanation: "Mosiah's people discovered the people of Zarahemla, who had come from Jerusalem and united with the Nephites."
        },
        {
          type: 'multiple_choice',
          prompt: 'What does Enos\'s experience teach about the power of prayer?',
          options: ['Prayer must be silent', 'Sincere, mighty prayer brings forgiveness and changes hearts', 'Only prophets can pray', 'Prayer changes nothing'],
          correct: 1,
          reference: 'Enos 1:1–8',
          explanation: "Enos's mighty, sincere prayer brought a remission of sins and turned his heart outward in love for others."
        }
      ]
    },

    ch18: {
      id: 'ch18',
      chapter: 18,
      range: 'Mosiah 1–3',
      title: "King Benjamin's Address",
      subtitle: "In the service of your God",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-18?lang=eng',
      reading: {
        body: [
          "King Benjamin, grown old, gathered his people to the temple to give his final address. So many came that they could not all be taught within the temple walls, so a tower was built, and his words were also written and sent among them.",
          "Benjamin testified that though he was their king, he had labored with his own hands to serve them and had not sought riches. He taught the great principle: 'When ye are in the service of your fellow beings ye are only in the service of your God.'",
          "He then shared the words of an angel, prophesying of Jesus Christ, who would come in a 'tabernacle of clay,' work mighty miracles, and suffer 'blood coming from every pore' as He atoned for the sins of the world. There is no other name given whereby salvation comes.",
          "The angel taught how to put off the 'natural man' — an enemy to God — and become a saint through the Atonement of Christ: becoming as a child, submissive, meek, humble, patient, and full of love."
        ],
        principles: [
          "When we serve others, we are serving God",
          "Salvation comes only in and through the name of Christ",
          "Christ would atone with blood coming from every pore",
          "We put off the natural man and become saints through the Atonement"
        ]
      },
      reflection: '"What does it mean to you that when you serve others, you are serving God?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'Why did King Benjamin gather his people to the temple?',
          options: ['To crown a new king and give his final address', 'To declare war', 'To collect taxes', 'To build a city'],
          correct: 0,
          reference: 'Mosiah 1:10; 2:1',
          explanation: "Benjamin gathered his people to give his final address and to proclaim his son Mosiah as the new king."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete King Benjamin\'s teaching:\n"...when ye are in the service of your fellow beings ye are only in the service of your ______."',
          answer: 'God',
          acceptable: ['God'],
          reference: 'Mosiah 2:17',
          explanation: "This beloved verse teaches that service to others is service to God — one of the central messages of Benjamin's address."
        },
        {
          type: 'multiple_choice',
          prompt: 'Though he was king, how did Benjamin say he had treated his people?',
          options: ['He demanded riches and taxes', 'He labored to serve them with his own hands', 'He ruled from afar', 'He enslaved them'],
          correct: 1,
          reference: 'Mosiah 2:12–14',
          explanation: "Benjamin labored with his own hands to serve his people and did not seek gold or riches from them."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to the angel, how would Christ suffer as He atoned for the sins of the world?',
          options: ['Without any pain', 'With blood coming from every pore', 'Only briefly', 'In a vision only'],
          correct: 1,
          reference: 'Mosiah 3:7',
          explanation: "The angel prophesied that Christ's anguish would be so great that blood would come from every pore as He suffered for our sins."
        },
        {
          type: 'fill_blank',
          prompt: 'Complete the angel\'s teaching:\n"For the natural man is an ______ to God..."',
          answer: 'enemy',
          acceptable: ['enemy'],
          reference: 'Mosiah 3:19',
          explanation: "We overcome the natural man and become saints by yielding to the Holy Spirit and the Atonement of Christ."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to King Benjamin, by what name does salvation come?',
          options: ['By many names', 'Only in and through the name of Christ', 'By the law of Moses alone', 'By the king\'s decree'],
          correct: 1,
          reference: 'Mosiah 3:17',
          explanation: "There is no other name nor means whereby salvation comes, only in and through the name of Christ, the Lord Omnipotent."
        },
        {
          type: 'multiple_choice',
          prompt: 'To become a saint, the angel said we should become as what?',
          options: ['A mighty warrior', 'A child — submissive, meek, humble, patient, full of love', 'A wealthy ruler', 'A learned scholar'],
          correct: 1,
          reference: 'Mosiah 3:19',
          explanation: "We become saints through the Atonement by becoming as a child: submissive, meek, humble, patient, and full of love."
        }
      ]
    },

    ch19: {
      id: 'ch19',
      chapter: 19,
      range: 'Mosiah 4–6',
      title: "Children of Christ",
      subtitle: "A mighty change of heart",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-19?lang=eng',
      reading: {
        body: [
          "Overcome by the Spirit, King Benjamin's people fell to the earth and cried out for the atoning blood of Christ to be applied that they might receive forgiveness. The Spirit came upon them, and they were filled with joy, having received a remission of their sins.",
          "Benjamin taught them how to retain a remission of their sins: by remembering the greatness of God, calling on His name daily, standing steadfast in faith, and caring for the poor — imparting of their substance to those in need, for 'are we not all beggars' before God?",
          "He taught that we must not let the beggar petition in vain, and that all things must be done in wisdom and order. We are not required to run faster than we have strength, but we should be diligent.",
          "The people entered a covenant to do God's will and be obedient. Because of the covenant, Benjamin said they would be called the children of Christ — spiritually begotten, with the name of Christ written in their hearts."
        ],
        principles: [
          "The Atonement brings a remission of sins and great joy",
          "We retain a remission by remembering God and caring for the poor",
          "'Are we not all beggars?' before God",
          "Through covenant we become the children of Christ"
        ]
      },
      reflection: '"How do you retain the joy and peace that come from the Savior\'s forgiveness in your daily life?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'What happened to King Benjamin\'s people after they heard his words?',
          options: ['They rebelled', 'They fell to the earth and cried for the atoning blood of Christ', 'They left the city', 'They demanded a new king'],
          correct: 1,
          reference: 'Mosiah 4:1–2',
          explanation: "Overcome by the Spirit, the people fell to the earth and pleaded for Christ's atoning blood to cleanse them."
        },
        {
          type: 'multiple_choice',
          prompt: 'After pleading for mercy, what did the people receive?',
          options: ['Riches', 'A remission of their sins and great joy', 'A new kingdom', 'Nothing'],
          correct: 1,
          reference: 'Mosiah 4:3',
          explanation: "The Spirit came upon them and they were filled with joy, having received a remission of their sins through faith in Christ."
        },
        {
          type: 'fill_blank',
          prompt: 'King Benjamin taught humility by asking:\n"...are we not all ______?" (before God)',
          answer: 'beggars',
          acceptable: ['beggars'],
          reference: 'Mosiah 4:19',
          explanation: "Benjamin reminded the people that since we all depend on God, we should freely give to those in need."
        },
        {
          type: 'multiple_choice',
          prompt: 'How did Benjamin say the people could retain a remission of their sins?',
          options: ['By doing nothing', 'By remembering God and caring for the poor', 'By becoming wealthy', 'By building temples only'],
          correct: 1,
          reference: 'Mosiah 4:11–26',
          explanation: "They were to remember God's greatness, call on Him daily, and impart of their substance to the poor."
        },
        {
          type: 'multiple_choice',
          prompt: 'Benjamin taught that all things should be done in what manner?',
          options: ['As fast as possible', 'In wisdom and order, not faster than we have strength', 'Only by the rich', 'Without any effort'],
          correct: 1,
          reference: 'Mosiah 4:27',
          explanation: "We are not required to run faster than we have strength; all things should be done in wisdom and order, yet with diligence."
        },
        {
          type: 'fill_blank',
          prompt: 'Because of their covenant, the people would be called the children of ______.',
          answer: 'Christ',
          acceptable: ['Christ'],
          reference: 'Mosiah 5:7',
          explanation: "Through their covenant, the people were spiritually begotten and became the sons and daughters — the children — of Christ."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did Benjamin say should be written in the hearts of the people?',
          options: ['The law of Moses', 'The name of Christ', 'Their family history', 'The king\'s laws'],
          correct: 1,
          reference: 'Mosiah 5:12',
          explanation: "Benjamin urged the people to take upon them the name of Christ and keep it written always in their hearts."
        }
      ]
    },

    ch20: {
      id: 'ch20',
      chapter: 20,
      range: 'Mosiah 7–11',
      title: "A Seer and a Wicked King",
      subtitle: "Limhi's people and the reign of Noah",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-20?lang=eng',
      reading: {
        body: [
          "King Mosiah sent Ammon to learn the fate of a group of Nephites who had returned years earlier to the land of Nephi. Ammon found them in bondage to the Lamanites, ruled by King Limhi.",
          "Limhi rejoiced to learn that Mosiah was a seer who could translate ancient records. Ammon taught that a seer is greater than a prophet — 'a seer is a revelator and a prophet also,' and by seership hidden things are brought to light. This was great news, for Limhi's people had found the records of a destroyed people (the Jaredites).",
          "The record explained how this bondage came about. Zeniff had led a group back to the land of Nephi. His son Noah, however, became a wicked king — he taxed the people heavily, surrounded himself with corrupt priests, and lived in riotous luxury.",
          "Noah's wickedness set the stage for the coming of the prophet Abinadi, who would call the king and his people to repentance."
        ],
        principles: [
          "A seer is a great benefit to his fellow beings",
          "Sin and pride lead a people into bondage",
          "The Lord raises up prophets to call people to repentance",
          "Wicked leaders bring suffering on their people"
        ]
      },
      reflection: '"How have living prophets and seers been a benefit and a guide in your life?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'Why did King Mosiah send Ammon to the land of Nephi?',
          options: ['To wage war', 'To learn the fate of a group of Nephites who had gone there', 'To collect gold', 'To build a temple'],
          correct: 1,
          reference: 'Mosiah 7:1–2',
          explanation: "Ammon was sent to discover what had happened to the people who left Zarahemla years before to return to the land of Nephi."
        },
        {
          type: 'multiple_choice',
          prompt: 'In what condition did Ammon find King Limhi\'s people?',
          options: ['Wealthy and free', 'In bondage to the Lamanites', 'Living in Zarahemla', 'Scattered in the wilderness'],
          correct: 1,
          reference: 'Mosiah 7:21–22',
          explanation: "Limhi's people were in bondage, paying heavy tribute to the Lamanites because of past wickedness."
        },
        {
          type: 'fill_blank',
          prompt: 'Ammon taught that "a seer is a revelator and a ______ also."',
          answer: 'prophet',
          acceptable: ['prophet'],
          reference: 'Mosiah 8:16',
          explanation: "Ammon explained that a seer can know things past and future and is a great benefit to his fellow beings."
        },
        {
          type: 'multiple_choice',
          prompt: 'Who led the first group back to the land of Nephi?',
          options: ['Noah', 'Zeniff', 'Limhi', 'Abinadi'],
          correct: 1,
          reference: 'Mosiah 9:1–3',
          explanation: "Zeniff led a group back to the land of Nephi, beginning the account that Limhi's people preserved."
        },
        {
          type: 'multiple_choice',
          prompt: 'How is King Noah, Zeniff\'s son, described?',
          options: ['A righteous king', 'A wicked king who taxed heavily and lived in luxury', 'A humble servant', 'A prophet'],
          correct: 1,
          reference: 'Mosiah 11:1–15',
          explanation: "Noah was wicked: he taxed his people, surrounded himself with corrupt priests, and lived in riotous, idolatrous luxury."
        },
        {
          type: 'multiple_choice',
          prompt: 'What ancient record had Limhi\'s people discovered?',
          options: ['The brass plates', 'The records of a destroyed people (the Jaredites)', 'The Bible', 'No records'],
          correct: 1,
          reference: 'Mosiah 8:9–12',
          explanation: "Limhi's people found 24 gold plates — the record of the Jaredites — which a seer like Mosiah could translate."
        },
        {
          type: 'multiple_choice',
          prompt: 'Ammon taught that a seer is what to his fellow beings?',
          options: ['A burden', 'A great benefit', 'A danger', 'Unimportant'],
          correct: 1,
          reference: 'Mosiah 8:18',
          explanation: "The Lord provides seers as a great benefit, bringing hidden truths to light for the good of His people."
        }
      ]
    },

    ch21: {
      id: 'ch21',
      chapter: 21,
      range: 'Mosiah 12–17',
      title: "The Courage of Abinadi",
      subtitle: "Sealing his testimony with his life",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-21?lang=eng',
      reading: {
        body: [
          "The prophet Abinadi came among the people of King Noah, calling them to repentance. They bound him and brought him before the king and his priests, who tried to trap him with questions about the scriptures.",
          "Filled with the Spirit, Abinadi's face shone, and the priests could not lay their hands on him until he had delivered his message. He boldly taught the Ten Commandments, the prophecies of Isaiah about the suffering Messiah, and that God Himself would come down to redeem His people.",
          "One young priest named Alma believed Abinadi's words. He pleaded with the king to spare the prophet — and for this, Alma was cast out and hunted. He hid and wrote down the words Abinadi had spoken.",
          "King Noah commanded that Abinadi be put to death. Abinadi suffered death by fire, but he would not deny his testimony, sealing the truth of his words by his death. His courage planted the seeds of a great work through Alma."
        ],
        principles: [
          "Prophets boldly testify of Christ, even at great cost",
          "God Himself came down to redeem His people",
          "One believing heart can change the course of history",
          "Truth is worth more than comfort, acceptance, or life itself"
        ]
      },
      reflection: '"What helps you stand for truth even when it is unpopular or costly?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'Why did Abinadi come among the people of King Noah?',
          options: ['To become king', 'To call them to repentance', 'To collect taxes', 'To build a temple'],
          correct: 1,
          reference: 'Mosiah 12:1',
          explanation: "Abinadi came as a prophet to warn King Noah's people and call them to repent of their wickedness."
        },
        {
          type: 'multiple_choice',
          prompt: 'What happened to Abinadi\'s face as he testified, so the priests could not seize him?',
          options: ['It became pale', 'It shone with the Spirit', 'It was covered', 'Nothing unusual'],
          correct: 1,
          reference: 'Mosiah 13:5',
          explanation: "Abinadi was filled with the Spirit and his face shone, and no one could harm him until he had finished his message."
        },
        {
          type: 'multiple_choice',
          prompt: 'Which young priest believed Abinadi\'s words?',
          options: ['Amulon', 'Alma', 'Limhi', 'Gideon'],
          correct: 1,
          reference: 'Mosiah 17:2',
          explanation: "Alma, a young priest, believed Abinadi and pleaded for his life, then was cast out and hunted by the king."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did Alma do after he was cast out for believing Abinadi?',
          options: ['He gave up', 'He hid and wrote down Abinadi\'s words', 'He joined King Noah', 'He left forever'],
          correct: 1,
          reference: 'Mosiah 17:3–4',
          explanation: "Alma hid himself and wrote the words of Abinadi, preserving the prophet's testimony of Christ."
        },
        {
          type: 'fill_blank',
          prompt: 'Abinadi suffered death by ______ rather than deny his testimony.',
          answer: 'fire',
          acceptable: ['fire'],
          reference: 'Mosiah 17:20',
          explanation: "Abinadi sealed the truth of his words by his death, suffering death by fire rather than recalling his testimony."
        },
        {
          type: 'multiple_choice',
          prompt: 'What central truth did Abinadi teach about God and redemption?',
          options: ['That no Savior would come', 'That God Himself would come down to redeem His people', 'That the law of Moses alone saves', 'That riches bring salvation'],
          correct: 1,
          reference: 'Mosiah 15:1',
          explanation: "Abinadi testified that God Himself — Jesus Christ — would come down among men to redeem His people."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did Abinadi\'s courage ultimately lead to?',
          options: ['Nothing', 'The conversion of Alma and a great work among the people', 'The fall of Zarahemla', 'The end of the records'],
          correct: 1,
          reference: 'Mosiah 17:1–4',
          explanation: "Though Abinadi died, his testimony converted Alma, who would go on to establish the Lord's church among the people."
        }
      ]
    },

    ch22: {
      id: 'ch22',
      chapter: 22,
      range: 'Mosiah 18–24',
      title: "Deliverance from Bondage",
      subtitle: "The waters of Mormon and the Lord's power",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-22?lang=eng',
      reading: {
        body: [
          "Alma, now hiding from King Noah, began to teach the words of Abinadi privately. At a place called the waters of Mormon, he gathered believers and taught them the covenant of baptism: to bear one another's burdens, to mourn with those that mourn, and to stand as witnesses of God at all times.",
          "About 450 souls were baptized and formed into the Lord's church. When the king discovered them, Alma and his people fled into the wilderness.",
          "Both Limhi's people and Alma's people were in bondage to the Lamanites. Limhi's people escaped by getting the Lamanite guards drunk and slipping away. Alma's people, oppressed by the cruel Amulon, cried to the Lord — and He eased their burdens so they could bear them, then delivered them.",
          "The Lord told Alma's people He would ease the burdens on their backs that they could not even feel them, that they might know He visits His people in their afflictions. Both groups were reunited with the Nephites in Zarahemla."
        ],
        principles: [
          "Baptism is a covenant to bear one another's burdens",
          "We covenant to stand as witnesses of God at all times",
          "The Lord eases our burdens so we can bear them",
          "God visits and delivers His people in their afflictions"
        ]
      },
      reflection: '"When has the Lord eased a burden for you — perhaps not removing it, but making it bearable?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'Where did Alma gather and baptize believers?',
          options: ['The temple in Zarahemla', 'The waters of Mormon', 'The river Jordan', 'The land of Nephi'],
          correct: 1,
          reference: 'Mosiah 18:8–16',
          explanation: "At the waters of Mormon, Alma taught the gospel and baptized about 450 believers into the Lord's church."
        },
        {
          type: 'fill_blank',
          prompt: 'Part of the baptismal covenant is to "bear one another\'s ______."',
          answer: 'burdens',
          acceptable: ['burdens'],
          reference: 'Mosiah 18:8',
          explanation: "Alma taught that those baptized covenant to bear one another's burdens, mourn with those that mourn, and comfort those in need."
        },
        {
          type: 'multiple_choice',
          prompt: 'Those baptized covenanted to stand as witnesses of God when?',
          options: ['Only on Sundays', 'At all times and in all things and places', 'Only in the temple', 'Only when convenient'],
          correct: 1,
          reference: 'Mosiah 18:9',
          explanation: "The covenant is to stand as witnesses of God at all times and in all things, and in all places, even until death."
        },
        {
          type: 'multiple_choice',
          prompt: 'How did Limhi\'s people escape the Lamanites?',
          options: ['By fighting a great battle', 'By getting the guards drunk and slipping away', 'By building ships', 'They never escaped'],
          correct: 1,
          reference: 'Mosiah 22:6–11',
          explanation: "Following Gideon's plan, Limhi's people gave extra wine to the Lamanite guards and escaped while they slept."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did the Lord do for Alma\'s people in bondage to Amulon?',
          options: ['Ignored them', 'Eased their burdens so they could bear them, then delivered them', 'Made the burdens heavier', 'Sent them away'],
          correct: 1,
          reference: 'Mosiah 24:14–15',
          explanation: "The Lord strengthened Alma's people so their burdens felt light, then delivered them from bondage."
        },
        {
          type: 'fill_blank',
          prompt: 'The Lord promised to ease the burdens so that they could not even ______ them on their backs.',
          answer: 'feel',
          acceptable: ['feel'],
          reference: 'Mosiah 24:14',
          explanation: "The Lord promised to strengthen them so the burdens would feel light, that they might be witnesses He visits His people."
        },
        {
          type: 'multiple_choice',
          prompt: 'Why did the Lord allow His people to be tried, then deliver them?',
          options: ['To punish them forever', 'That they might know He visits His people in their afflictions', 'For no reason', 'To abandon them'],
          correct: 1,
          reference: 'Mosiah 24:14',
          explanation: "The Lord delivered them so they would stand as witnesses that He is mindful of and visits His covenant people."
        }
      ]
    },

    ch23: {
      id: 'ch23',
      chapter: 23,
      range: 'Mosiah 25–29',
      title: "A Mighty Change",
      subtitle: "The conversion of Alma the Younger",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-23?lang=eng',
      reading: {
        body: [
          "The people were united in Zarahemla, and Alma established the church of God throughout the land. But his son, Alma the Younger, along with the four sons of Mosiah, went about secretly seeking to destroy the church and lead believers away.",
          "As they were doing this, an angel appeared and spoke with a voice that shook the earth. Alma the Younger was struck dumb and helpless, falling to the earth. The angel called him to repent, even if he sought to destroy the church no more.",
          "For three days and nights Alma could not move or speak, racked with the torment of his sins. Then he remembered his father's teachings about Jesus Christ, cried out to Him for mercy, and was filled with joy as exquisite as his pain had been bitter — a mighty change of heart.",
          "Alma and the sons of Mosiah became powerful missionaries, eager to share the gospel. Near the end of his life, King Mosiah established a system of judges so the people would govern themselves by righteous law rather than be ruled by kings."
        ],
        principles: [
          "Even the lost can experience a mighty change of heart",
          "Sincere repentance turns bitter pain into exquisite joy",
          "Remembering Christ is the key to redemption",
          "The converted desire to share the gospel with others"
        ]
      },
      reflection: '"Have you experienced or witnessed a \'mighty change of heart\' through Jesus Christ?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'What were Alma the Younger and the sons of Mosiah doing before the angel appeared?',
          options: ['Preaching the gospel', 'Seeking to destroy the church', 'Building temples', 'Keeping records'],
          correct: 1,
          reference: 'Mosiah 27:8–10',
          explanation: "Alma the Younger and the sons of Mosiah were rebellious, secretly working to lead away members of the church."
        },
        {
          type: 'multiple_choice',
          prompt: 'What happened when the angel appeared to them?',
          options: ['Nothing', 'The angel spoke with a voice that shook the earth, and Alma fell down', 'They ran away', 'They laughed'],
          correct: 1,
          reference: 'Mosiah 27:11–12',
          explanation: "The angel's voice shook the earth, and Alma the Younger fell to the earth, unable to move or speak."
        },
        {
          type: 'fill_blank',
          prompt: 'For how many days and nights was Alma the Younger unable to speak or move?\n"...for the space of ______ days and three nights."',
          answer: 'three',
          acceptable: ['three', '3'],
          reference: 'Mosiah 27:23',
          explanation: "Alma was helpless for three days and nights, racked with torment for his sins, until he called upon Christ."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did Alma remember that led to his deliverance?',
          options: ['His wealth', 'His father\'s teachings about Jesus Christ and the Atonement', 'His own strength', 'His friends'],
          correct: 1,
          reference: 'Alma 36:17–18',
          explanation: "Alma remembered hearing his father prophesy of Jesus Christ, and cried out to Him for mercy."
        },
        {
          type: 'multiple_choice',
          prompt: 'After crying to Christ, what did Alma feel?',
          options: ['More pain', 'Joy as exquisite as his pain had been bitter', 'Nothing', 'Anger'],
          correct: 1,
          reference: 'Alma 36:20–21',
          explanation: "Alma's bitter torment was replaced with joy as exquisite and sweet — a mighty change of heart through Christ."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did Alma and the sons of Mosiah become after their conversion?',
          options: ['Kings', 'Powerful missionaries eager to share the gospel', 'Soldiers', 'Merchants'],
          correct: 1,
          reference: 'Mosiah 27:32–37',
          explanation: "Once converted, they zealously sought to repair the harm they had done and to bring others to Christ."
        },
        {
          type: 'multiple_choice',
          prompt: 'What system did King Mosiah establish before his death?',
          options: ['A line of kings', 'A system of judges to govern by righteous law', 'A council of priests', 'No government'],
          correct: 1,
          reference: 'Mosiah 29:11, 25',
          explanation: "Mosiah established judges chosen by the voice of the people, so they would govern themselves by righteous law."
        }
      ]
    },

    ch24: {
      id: 'ch24',
      chapter: 24,
      range: 'Alma 1–4',
      title: "Standing for the Faith",
      subtitle: "Priestcraft, pride, and the church of God",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-24?lang=eng',
      reading: {
        body: [
          "In the first year of the reign of the judges, a man named Nehor introduced priestcraft — preaching for money and teaching that all would be saved regardless of how they lived. He killed the righteous Gideon, who withstood him, and was executed for his crime. But the false idea of priestcraft spread.",
          "Alma the Younger now served as both the chief judge and the high priest over the church. He faced Amlici, an ambitious man who sought to be king and led a rebellion. The Nephites defeated the Amlicites in great battles, but at heavy cost.",
          "The greatest threat to the church was not war but pride. Many members began to set their hearts on riches and fine clothing, looking down on others. This pride caused great contention and led many to leave the church.",
          "Seeing that the law could not reach the people's hearts, Alma gave up the judgment seat to devote himself wholly to preaching — believing the word of God would do more to change the people than the sword or anything else."
        ],
        principles: [
          "Priestcraft and pride endanger the people of God",
          "Riches and vanity can harden hearts against others",
          "The word of God changes hearts more than the sword",
          "True leaders prioritize preaching the gospel"
        ]
      },
      reflection: '"How can pride or comparison creep in, and how does the word of God soften our hearts?"',
      questions: [
        {
          type: 'multiple_choice',
          prompt: 'What false practice did Nehor introduce?',
          options: ['Honest farming', 'Priestcraft — preaching for money', 'Record keeping', 'Temple building'],
          correct: 1,
          reference: 'Alma 1:3–6',
          explanation: "Nehor preached priestcraft — setting himself up for gain and teaching that everyone would be saved regardless of conduct."
        },
        {
          type: 'multiple_choice',
          prompt: 'Whom did Nehor kill when his false teaching was withstood?',
          options: ['Alma', 'The righteous Gideon', 'King Mosiah', 'Abinadi'],
          correct: 1,
          reference: 'Alma 1:7–9',
          explanation: "Nehor killed Gideon, an aged and faithful servant of God, after Gideon withstood his words."
        },
        {
          type: 'multiple_choice',
          prompt: 'What two roles did Alma the Younger hold at the start of the reign of the judges?',
          options: ['King and soldier', 'Chief judge and high priest', 'Merchant and scribe', 'Farmer and teacher'],
          correct: 1,
          reference: 'Alma 4:18',
          explanation: "Alma served as both the chief judge over the people and the high priest over the church."
        },
        {
          type: 'multiple_choice',
          prompt: 'Who led a rebellion seeking to be made king?',
          options: ['Nehor', 'Amlici', 'Gideon', 'Korihor'],
          correct: 1,
          reference: 'Alma 2:1–2',
          explanation: "Amlici, a cunning and ambitious man, sought to be king and led the Amlicites in war against the Nephites."
        },
        {
          type: 'multiple_choice',
          prompt: 'What became the greatest internal threat to the church?',
          options: ['Famine', 'Pride — setting hearts on riches and fine clothing', 'Weather', 'Lack of records'],
          correct: 1,
          reference: 'Alma 4:6–8',
          explanation: "Members grew proud over their riches and fine apparel, looking down on others, which caused contention in the church."
        },
        {
          type: 'fill_blank',
          prompt: 'Alma believed the ______ of God had a more powerful effect on the people than anything else.',
          answer: 'word',
          acceptable: ['word'],
          reference: 'Alma 31:5',
          explanation: "Alma trusted that preaching the word of God would do more to change hearts than the sword or any other thing."
        },
        {
          type: 'multiple_choice',
          prompt: 'Why did Alma give up the judgment seat?',
          options: ['He was defeated', 'To devote himself wholly to preaching the word of God', 'He retired', 'He became king'],
          correct: 1,
          reference: 'Alma 4:19',
          explanation: "Alma stepped down as chief judge so he could bear pure testimony and reclaim the people through the word of God."
        }
      ]
    },

    ch25: {
      id: 'ch25',
      chapter: 25,
      range: 'Alma 5–7',
      title: "His Image in Your Countenance",
      subtitle: "A call to spiritual rebirth",
      available: true,
      xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-25?lang=eng',
      reading: {
        body: [
          "Having given up the judgment seat, Alma went among the people preaching. In the city of Zarahemla he delivered a searching sermon, asking the members of the church penetrating questions to help them examine their own hearts.",
          "He reminded them how their fathers had been delivered from bondage and experienced a mighty change of heart. Then he asked: 'Have ye spiritually been born of God? Have ye received his image in your countenances? Have ye experienced this mighty change in your hearts?'",
          "Alma invited everyone to come unto Christ, to be humble and submissive, and to bring forth good works. He warned against pride, envy, and mockery, and testified that the good shepherd calls his sheep, who hear his voice and follow him.",
          "Traveling to the city of Gideon, Alma taught of the coming of Jesus Christ, who would 'take upon him the pains and the sicknesses of his people,' and 'take upon him their infirmities,' so His mercy would know how to succor His people. He invited all to prepare the way and walk in the paths of righteousness."
        ],
        principles: [
          "We are invited to be spiritually born of God",
          "Christ's image can be reflected in our countenance",
          "The good shepherd calls, and His sheep know His voice",
          "Christ took upon Himself our pains so He could succor us"
        ]
      },
      reflection: '"What helps you keep \'His image in your countenance\' — Christ reflected in how you live and treat others?"',
      questions: [
        {
          type: 'fill_blank',
          prompt: 'Complete Alma\'s searching question:\n"Have ye received his ______ in your countenances?"',
          answer: 'image',
          acceptable: ['image'],
          reference: 'Alma 5:14',
          explanation: "Alma asked the people whether they had been spiritually reborn and reflected Christ's image in their lives."
        },
        {
          type: 'multiple_choice',
          prompt: 'What kind of change did Alma ask the people if they had experienced?',
          options: ['A change of clothing', 'A mighty change in their hearts', 'A change of location', 'A change of rulers'],
          correct: 1,
          reference: 'Alma 5:14',
          explanation: "Alma asked if they had experienced the mighty change of heart that comes through being born of God."
        },
        {
          type: 'multiple_choice',
          prompt: 'In Alma\'s teaching, what do the sheep of the good shepherd do?',
          options: ['Ignore his voice', 'Hear his voice and follow him', 'Run away', 'Follow strangers'],
          correct: 1,
          reference: 'Alma 5:38–41',
          explanation: "Alma taught that the good shepherd calls his people, and those who are his hear his voice and follow him."
        },
        {
          type: 'multiple_choice',
          prompt: 'What did Alma warn the people against?',
          options: ['Service and humility', 'Pride, envy, and mockery', 'Prayer and fasting', 'Reading scripture'],
          correct: 1,
          reference: 'Alma 5:53–56',
          explanation: "Alma warned against pride, envy, persecution, and mockery, calling the people to repent and be humble."
        },
        {
          type: 'fill_blank',
          prompt: 'Alma prophesied that Christ would "take upon him the pains and the ______ of his people."',
          answer: 'sicknesses',
          acceptable: ['sicknesses'],
          reference: 'Alma 7:11',
          explanation: "Alma taught in Gideon that Christ would take upon Himself our pains, sicknesses, and infirmities through the Atonement."
        },
        {
          type: 'multiple_choice',
          prompt: 'According to Alma 7:11–12, why would Christ take upon Himself our infirmities?',
          options: ['To punish us', 'That He might know how to succor (help) His people', 'For no reason', 'To remain distant'],
          correct: 1,
          reference: 'Alma 7:12',
          explanation: "Christ took upon Himself our pains and infirmities so that His mercy would know how to succor His people in their afflictions."
        },
        {
          type: 'multiple_choice',
          prompt: 'What was the main invitation of Alma\'s sermon?',
          options: ['To gather riches', 'To come unto Christ and be spiritually born of God', 'To wage war', 'To leave Zarahemla'],
          correct: 1,
          reference: 'Alma 5:33–35',
          explanation: "Alma's central invitation was to repent, come unto Christ, and experience a mighty change of heart by being born of God."
        }
      ]
    }


,
    ch26: {
      id: 'ch26', chapter: 26, range: 'Alma 8–12', title: "Amulek and the Word", subtitle: "Two witnesses in Ammonihah", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-26?lang=eng',
      reading: { body: [
        "Alma went to preach in the wicked city of Ammonihah, but the people rejected him and cast him out. As he left, sorrowing, an angel appeared and commanded him to return.",
        "Obeying quickly, Alma re-entered the city and asked a man for food. The man, Amulek, had been told by an angel to receive Alma. Amulek took him into his home, and the two became companions in testifying to the people.",
        "When the lawyer Zeezrom tried to trap Amulek with clever questions and money, Amulek refused the bribe and testified boldly of the resurrection and the judgment. Alma then taught about faith, repentance, and the great plan of redemption through Jesus Christ.",
        "Alma taught that God's word, faith, and repentance prepare us to stand before God, and that we must not procrastinate the day of our repentance."
      ], principles: [
        "When we obey quickly, the Lord prepares the way",
        "The Lord prepares people to receive His servants",
        "Two witnesses strengthen the testimony of truth",
        "We should not procrastinate the day of our repentance"
      ] },
      reflection: '"When has obeying a prompting quickly — even when it was hard — led to a blessing you didn\'t expect?"',
      questions: [
        { type: 'multiple_choice', prompt: 'Why did Alma return to Ammonihah after being cast out?', options: ['He forgot something', 'An angel commanded him to return', 'The people invited him back', 'He lost his way'], correct: 1, reference: 'Alma 8:16', explanation: "An angel appeared and commanded Alma to return and preach again to the city." },
        { type: 'multiple_choice', prompt: 'Who received Alma into his home and became his missionary companion?', options: ['Amulek', 'Zeezrom', 'Gideon', 'Korihor'], correct: 0, reference: 'Alma 8:27', explanation: "Amulek, prepared by an angel, took Alma in and joined him in testifying." },
        { type: 'multiple_choice', prompt: 'What did the lawyer Zeezrom offer Amulek to deny the existence of God?', options: ['A house', 'Money (silver)', 'A position of power', 'Land'], correct: 1, reference: 'Alma 11:22', explanation: "Zeezrom offered Amulek six onties of silver to deny the existence of a Supreme Being, which Amulek refused." },
        { type: 'fill_blank', prompt: 'Amulek and Alma taught about the great plan of ______ through Jesus Christ.', answer: 'redemption', acceptable: ['redemption'], reference: 'Alma 12:25', explanation: "Alma taught about the plan of redemption, prepared from the foundation of the world through Christ." },
        { type: 'multiple_choice', prompt: 'What did Alma teach we should not procrastinate?', options: ['Our meals', 'The day of our repentance', 'Our travels', 'Our work'], correct: 1, reference: 'Alma 13:21 / 34:33', explanation: "Alma and Amulek pleaded with the people not to procrastinate the day of their repentance." }
      ]
    },
    ch27: {
      id: 'ch27', chapter: 27, range: 'Alma 13–16', title: "Faith and Deliverance", subtitle: "The trials of Ammonihah", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-27?lang=eng',
      reading: { body: [
        "Alma taught about the holy order of God — the priesthood — and how those who are faithful may enter into the rest of the Lord. Many believed, including the converted lawyer Zeezrom.",
        "The wicked of Ammonihah, however, gathered the believing women and children and cast them into a fire, along with the scriptures. Amulek wanted to stop it, but Alma said the Lord receives the righteous unto Himself and would judge those who did this.",
        "Alma and Amulek were imprisoned, mocked, smitten, and left without food for many days. Finally, in the strength of the Lord, they stood, and the prison walls collapsed, slaying their persecutors while they were delivered unharmed.",
        "Zeezrom, sick with fever from guilt, was healed by Alma after confessing his faith in Christ. He was baptized and began to preach. Later the city of Ammonihah was destroyed in a single day by the Lamanites."
      ], principles: [
        "The priesthood is the holy order of God",
        "The Lord receives the faithful, even through trials",
        "God can deliver His servants in His own time",
        "Sincere repentance brings healing and peace"
      ] },
      reflection: '"How do you keep faith when the Lord allows trials to continue rather than removing them right away?"',
      questions: [
        { type: 'multiple_choice', prompt: 'What happened to the believers\' scriptures in Ammonihah?', options: ['They were hidden safely', 'They were cast into the fire', 'They were sold', 'They were buried'], correct: 1, reference: 'Alma 14:8', explanation: "The wicked cast the believing women and children, along with their records, into the fire." },
        { type: 'multiple_choice', prompt: 'How were Alma and Amulek delivered from prison?', options: ['An angel freed them', 'The prison walls fell down', 'They dug out', 'The guards released them'], correct: 1, reference: 'Alma 14:27', explanation: "In the strength of the Lord, the prison walls were rent and fell, slaying the persecutors while Alma and Amulek were unharmed." },
        { type: 'multiple_choice', prompt: 'Which converted lawyer was healed of a fever after confessing faith in Christ?', options: ['Zeezrom', 'Korihor', 'Nehor', 'Gideon'], correct: 0, reference: 'Alma 15:11', explanation: "Zeezrom, sick because of his guilt, was healed by Alma after he believed in Christ, and was then baptized." },
        { type: 'fill_blank', prompt: 'Alma taught about the holy ______ of God — the priesthood.', answer: 'order', acceptable: ['order'], reference: 'Alma 13:1', explanation: "Alma taught of the holy order of God by which His servants are called to teach the people." },
        { type: 'multiple_choice', prompt: 'What eventually happened to the city of Ammonihah?', options: ['It prospered', 'It was destroyed in one day by the Lamanites', 'It was abandoned', 'It became the capital'], correct: 1, reference: 'Alma 16:9–10', explanation: "The Lamanites destroyed the whole city of Ammonihah in a single day, fulfilling the words of the prophets." }
      ]
    },
    ch28: {
      id: 'ch28', chapter: 28, range: 'Alma 17–22', title: "The Sons of Mosiah", subtitle: "Missionaries to the Lamanites", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-28?lang=eng',
      reading: { body: [
        "The sons of Mosiah — Ammon, Aaron, Omner, and Himni — refused to be kings and instead went to preach to the Lamanites, having prepared themselves through prayer, fasting, and study.",
        "Ammon served King Lamoni and defended his flocks at the waters of Sebus, smiting off the arms of those who scattered them. Amazed, the king listened as Ammon taught him of God and the plan of redemption; the king and his household were converted.",
        "Abish, a Lamanite woman already converted, gathered the people to witness the miracle at the king's court. Aaron, meanwhile, taught Lamoni's father, the king over all the land, who was also converted and opened his lands to the missionaries.",
        "Through these labors, thousands of Lamanites came to know the Lord and never fell away."
      ], principles: [
        "Preparation through prayer and study precedes powerful service",
        "Faithful service opens hearts to the gospel",
        "One converted person can influence many",
        "The Lord changes hearts through His servants"
      ] },
      reflection: '"How can quiet, faithful service — like Ammon tending flocks — open doors to share what you believe?"',
      questions: [
        { type: 'multiple_choice', prompt: 'What did the sons of Mosiah choose instead of becoming kings?', options: ['To become merchants', 'To preach to the Lamanites', 'To become judges', 'To stay home'], correct: 1, reference: 'Mosiah 28:10 / Alma 17:6', explanation: "They declined the kingdom and chose to preach the gospel to the Lamanites." },
        { type: 'multiple_choice', prompt: 'How did Ammon defend King Lamoni\'s flocks at the waters of Sebus?', options: ['He hid the sheep', 'He smote off the arms of the attackers', 'He built a fence', 'He called for soldiers'], correct: 1, reference: 'Alma 17:37', explanation: "Ammon smote off the arms of those who tried to scatter the king's flocks, astonishing the other servants." },
        { type: 'multiple_choice', prompt: 'Who was the Lamanite woman who gathered the people to see the miracle at Lamoni\'s court?', options: ['Abish', 'Sariah', 'Isabel', 'Sarah'], correct: 0, reference: 'Alma 19:16', explanation: "Abish, already converted to the Lord, ran from house to house to gather the people." },
        { type: 'multiple_choice', prompt: 'Which son of Mosiah taught and converted Lamoni\'s father, the king over all the land?', options: ['Aaron', 'Ammon', 'Omner', 'Himni'], correct: 0, reference: 'Alma 22:1', explanation: "Aaron taught the great king the plan of redemption, and the king was converted." },
        { type: 'fill_blank', prompt: 'Ammon defended the king\'s flocks at the waters of ______.', answer: 'Sebus', acceptable: ['sebus'], reference: 'Alma 17:26', explanation: "The waters of Sebus were where the king's flocks were gathered and where Ammon proved his faithfulness." }
      ]
    },
    ch29: {
      id: 'ch29', chapter: 29, range: 'Alma 23–29', title: "Buried Weapons", subtitle: "The people of Ammon and Korihor", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-28?lang=eng',
      reading: { body: [
        "The converted Lamanites took upon themselves the name Anti-Nephi-Lehies. As a covenant of peace, they buried their weapons of war deep in the earth, vowing never to shed blood again.",
        "When attacked, they would not take up arms; many were slain as they prayed, and the sight of their faith led even more of their attackers to be converted. For their safety, the Nephites gave them the land of Jershon.",
        "Ammon rejoiced in the Lord's goodness, saying he could not boast in himself but would boast of his God, through whom they had done mighty miracles.",
        "Later the anti-Christ Korihor preached that there would be no Christ. He demanded a sign and was struck dumb; he confessed that he had always known there was a God, and was eventually trodden down and killed."
      ], principles: [
        "Covenants can require great sacrifice",
        "Faithful example can convert even enemies",
        "We boast not in ourselves but in God",
        "Denying Christ leads to spiritual ruin"
      ] },
      reflection: '"What \'weapon\' — a habit, grudge, or fear — might the Lord be inviting you to bury for good?"',
      questions: [
        { type: 'multiple_choice', prompt: 'What did the converted Lamanites bury as a covenant of peace?', options: ['Their treasures', 'Their weapons of war', 'Their records', 'Their idols'], correct: 1, reference: 'Alma 24:17', explanation: "They buried their swords deep in the earth as a testimony that they would never shed blood again." },
        { type: 'multiple_choice', prompt: 'What name did these converted Lamanites take upon themselves?', options: ['Nephites', 'Anti-Nephi-Lehies', 'Zoramites', 'Mulekites'], correct: 1, reference: 'Alma 23:17', explanation: "They called themselves Anti-Nephi-Lehies to distinguish themselves from the other Lamanites." },
        { type: 'multiple_choice', prompt: 'What land did the Nephites give the people of Ammon for safety?', options: ['Jershon', 'Bountiful', 'Zarahemla', 'Nephi'], correct: 0, reference: 'Alma 27:22', explanation: "The Nephites granted them the land of Jershon and guarded them with their armies." },
        { type: 'multiple_choice', prompt: 'What happened to the anti-Christ Korihor after he demanded a sign?', options: ['He was forgiven', 'He was struck dumb', 'He became a prophet', 'He fled the land'], correct: 1, reference: 'Alma 30:50', explanation: "Korihor was struck dumb and later confessed he had always known there was a God." },
        { type: 'fill_blank', prompt: 'Ammon declared he would not boast in himself, but would boast of his ______.', answer: 'God', acceptable: ['god'], reference: 'Alma 26:12', explanation: "Ammon rejoiced that in the strength of the Lord they could do all things." }
      ]
    },
    ch30: {
      id: 'ch30', chapter: 30, range: 'Alma 30–31', title: "The Seed of Faith", subtitle: "Korihor and the Zoramites", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-29?lang=eng',
      reading: { body: [
        "After Korihor's downfall, Alma learned that the Zoramites had fallen into apostasy. They had built a high stand called the Rameumptom, where each person recited the same proud, set prayer, thanking God that they were chosen and others were not.",
        "Distressed by their wickedness and pride, Alma led a mission to reclaim them, praying for strength and for success in bringing them back to Christ.",
        "Many of the poor among the Zoramites, cast out of their synagogues because of their humble clothing, came to Alma to learn. He taught them on a hill called Onidah.",
        "These humble poor were prepared to hear the word, showing that humility — even when forced by circumstances — can open the heart to faith."
      ], principles: [
        "Pride and set prayers can replace true worship",
        "The Lord strengthens those who serve in hard places",
        "Humility prepares the heart to receive the word",
        "Affliction can lead us to seek God"
      ] },
      reflection: '"When has being humbled — even unwillingly — made you more open to God than when things were easy?"',
      questions: [
        { type: 'multiple_choice', prompt: 'What was the high stand the Zoramites used for their set prayer?', options: ['The Liahona', 'The Rameumptom', 'The title of liberty', 'The tower of Sherrizah'], correct: 1, reference: 'Alma 31:21', explanation: "The Zoramites climbed the Rameumptom one at a time to recite the same proud prayer." },
        { type: 'multiple_choice', prompt: 'Why were the poor Zoramites cast out of their synagogues?', options: ['They were too loud', 'Because of their coarse, humble clothing', 'They could not read', 'They were foreigners'], correct: 1, reference: 'Alma 32:2–3', explanation: "The poor were despised and cast out because of their poverty and coarse apparel." },
        { type: 'multiple_choice', prompt: 'On what hill did Alma teach the humble poor?', options: ['Onidah', 'Cumorah', 'Manti', 'Shim'], correct: 0, reference: 'Alma 32:4', explanation: "A great multitude of the poor gathered to Alma on the hill Onidah." },
        { type: 'multiple_choice', prompt: 'Why did Alma pray for strength before teaching the Zoramites?', options: ['He was tired', 'He was distressed by their wickedness and pride', 'He was lost', 'He was afraid of the weather'], correct: 1, reference: 'Alma 31:30–33', explanation: "Alma's soul was grieved by the iniquity of the people, and he prayed for comfort and success." },
        { type: 'fill_blank', prompt: 'The Zoramites recited their prayer atop a stand called the ______.', answer: 'Rameumptom', acceptable: ['rameumptom'], reference: 'Alma 31:21', explanation: "The Rameumptom was the holy stand where the Zoramites offered their repetitive, prideful prayer." }
      ]
    },
    ch31: {
      id: 'ch31', chapter: 31, range: 'Alma 32–35', title: "Experiment Upon the Word", subtitle: "Faith as a seed", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-30?lang=eng',
      reading: { body: [
        "Alma taught the humble poor that faith is not a perfect knowledge. He compared the word of God to a seed: if we give place for it and do not cast it out, we can experiment upon the word.",
        "If the seed is good, it will begin to swell, enlarge the soul, and enlighten the understanding — and this is how we know the word is good. By nourishing it with faith and patience, the seed grows into a tree bearing the fruit of eternal life.",
        "Amulek then testified of the Atonement of Jesus Christ — a great and last sacrifice, infinite and eternal — and pleaded with the people not to procrastinate the day of their repentance, for this life is the time to prepare to meet God.",
        "Many of the Zoramite poor believed and were cast out, so the people of Ammon received them into the land of Jershon."
      ], principles: [
        "Faith is not a perfect knowledge",
        "We can experiment upon the word of God",
        "Nourishing faith leads to the fruit of eternal life",
        "This life is the time to prepare to meet God"
      ] },
      reflection: '"What \'seed\' of faith are you nourishing right now, and how have you seen it begin to swell?"',
      questions: [
        { type: 'multiple_choice', prompt: 'To what did Alma compare the word of God?', options: ['A river', 'A seed', 'A sword', 'A mountain'], correct: 1, reference: 'Alma 32:28', explanation: "Alma compared the word to a seed that, if planted and nourished, grows in our hearts." },
        { type: 'fill_blank', prompt: 'Alma said that faith is not a perfect ______.', answer: 'knowledge', acceptable: ['knowledge'], reference: 'Alma 32:21', explanation: "Faith is to hope for things which are not seen but are true; it is not a perfect knowledge." },
        { type: 'multiple_choice', prompt: 'According to Amulek, what is this life the time to do?', options: ['Gather riches', 'Prepare to meet God', 'Travel the world', 'Build cities'], correct: 1, reference: 'Alma 34:32', explanation: "Amulek taught that this life is the time to prepare to meet God and not procrastinate repentance." },
        { type: 'multiple_choice', prompt: 'How did Amulek describe the Atonement of Jesus Christ?', options: ['A small offering', 'A great and last sacrifice, infinite and eternal', 'A temporary fix', 'A symbol only'], correct: 1, reference: 'Alma 34:10', explanation: "Amulek testified that the Atonement is a great and last sacrifice, infinite and eternal." },
        { type: 'multiple_choice', prompt: 'When the believing Zoramites were cast out, who received them?', options: ['The Lamanite king', 'The people of Ammon in Jershon', 'King Noah', 'No one'], correct: 1, reference: 'Alma 35:6–9', explanation: "The people of Ammon received the cast-out believers into the land of Jershon." }
      ]
    },
    ch32: {
      id: 'ch32', chapter: 32, range: 'Alma 36–39', title: "Counsel to His Sons", subtitle: "Alma's testimony of redemption", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-31?lang=eng',
      reading: { body: [
        "Alma gave personal counsel to each of his sons. To Helaman he recounted his own conversion — how, as an angel rebuked him, he was harrowed by the memory of his sins for three days, then cried to Jesus Christ for mercy and was filled with joy.",
        "He entrusted Helaman with the sacred records and the Liahona, teaching that by small and simple means the Lord brings to pass great things, and that the Liahona had worked according to the faith of those who followed it.",
        "To his faithful son Shiblon, Alma counseled steadiness and to bridle his passions that he might be filled with love.",
        "To Corianton, who had sinned, Alma taught the plan of restoration and justice, reminding him that wickedness never was happiness, and calling him to repent and continue preaching."
      ], principles: [
        "Christ can turn our deepest pain into joy",
        "By small and simple things great things come to pass",
        "Bridle your passions to be filled with love",
        "Wickedness never was happiness"
      ] },
      reflection: '"Which of Alma\'s words to his sons speaks most to your life right now — and why?"',
      questions: [
        { type: 'multiple_choice', prompt: 'For how long was Alma harrowed by the memory of his sins?', options: ['One day', 'Three days and three nights', 'A week', 'A year'], correct: 1, reference: 'Alma 36:16', explanation: "Alma was racked with torment for three days and three nights until he called upon Jesus Christ." },
        { type: 'multiple_choice', prompt: 'What did Alma give Helaman along with the records?', options: ['A sword', 'The Liahona (the ball or director)', 'A crown', 'A map'], correct: 1, reference: 'Alma 37:38', explanation: "Alma entrusted Helaman with the sacred records and the Liahona, the director that worked by faith." },
        { type: 'fill_blank', prompt: 'Alma taught that by small and simple things are great things brought to ______.', answer: 'pass', acceptable: ['pass'], reference: 'Alma 37:6', explanation: "Alma taught Helaman that the Lord works mighty purposes through small and simple means." },
        { type: 'multiple_choice', prompt: 'What did Alma counsel his son Shiblon to bridle?', options: ['His horse', 'His passions', 'His tongue only', 'His spending'], correct: 1, reference: 'Alma 38:12', explanation: "Alma counseled Shiblon to bridle all his passions that he might be filled with love." },
        { type: 'multiple_choice', prompt: 'What did Alma teach his son Corianton about wickedness?', options: ['It brings riches', 'Wickedness never was happiness', 'It is sometimes good', 'It has no consequences'], correct: 1, reference: 'Alma 41:10', explanation: "Alma taught Corianton the plan of restoration, reminding him that wickedness never was happiness." }
      ]
    },
    ch33: {
      id: 'ch33', chapter: 33, range: 'Alma 40–42', title: "The Plan of Restoration", subtitle: "Resurrection, justice, and mercy", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-31?lang=eng',
      reading: { body: [
        "Continuing his counsel to Corianton, Alma taught about the resurrection: that the spirits of all people return to God who gave them life, the righteous to a state of happiness called paradise, and the wicked to outer darkness, to await the resurrection.",
        "In the resurrection, the spirit and body are reunited in their perfect form, never to be divided again. This restoration brings each person to be judged according to their works and desires.",
        "Alma explained the plan of restoration: good is restored for good, evil for evil. He taught how justice and mercy both have their claim, and that mercy cannot rob justice — but through the Atonement, Christ satisfies the demands of justice for those who repent.",
        "He pleaded with Corianton not to risk one more offense, but to let these truths trouble him unto repentance, and to come unto Christ."
      ], principles: [
        "The resurrection reunites spirit and body perfectly",
        "We are judged by our works and desires",
        "Justice and mercy both have their claims",
        "The Atonement allows mercy to satisfy justice for the repentant"
      ] },
      reflection: '"How does understanding both the justice and the mercy of God change the way you approach repentance?"',
      questions: [
        { type: 'multiple_choice', prompt: 'In the resurrection, what is reunited never to be divided again?', options: ['Friends and family', 'The spirit and the body', 'Nations', 'Cities'], correct: 1, reference: 'Alma 40:23', explanation: "Alma taught that the soul (spirit and body) is restored to its perfect frame in the resurrection." },
        { type: 'multiple_choice', prompt: 'According to Alma, by what are we judged?', options: ['Our wealth', 'Our works and desires', 'Our age', 'Our birthplace'], correct: 1, reference: 'Alma 41:3', explanation: "Alma taught that people are restored and judged according to their works and the desires of their hearts." },
        { type: 'fill_blank', prompt: 'Alma taught that mercy cannot rob ______.', answer: 'justice', acceptable: ['justice'], reference: 'Alma 42:25', explanation: "Alma taught that mercy cannot rob justice, but through the Atonement Christ satisfies justice for the repentant." },
        { type: 'multiple_choice', prompt: 'What does the plan of restoration mean?', options: ['Good is restored for good, evil for evil', 'Everyone gets the same reward', 'Nothing changes', 'Only the rich are saved'], correct: 0, reference: 'Alma 41:13', explanation: "The plan of restoration means that what we send out — good or evil — returns to us." },
        { type: 'multiple_choice', prompt: 'What did Alma plead with Corianton to let trouble him?', options: ['His enemies', 'These truths, unto repentance', 'The weather', 'His wealth'], correct: 1, reference: 'Alma 42:29', explanation: "Alma urged Corianton to let his sins trouble him only enough to bring him to repentance." }
      ]
    },
    ch34: {
      id: 'ch34', chapter: 34, range: 'Alma 43–52', title: "The Title of Liberty", subtitle: "Captain Moroni defends freedom", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-32?lang=eng',
      reading: { body: [
        "When the Lamanites came to war, the Nephites were led by Captain Moroni, a mighty man of faith. He prepared his people with armor and fought only to defend their families, freedom, and religion.",
        "When the dissenter Amalickiah sought to destroy the freedom of the people, Moroni tore his coat and wrote upon it: 'In memory of our God, our religion, and freedom, and our peace, our wives, and our children.' He fastened it on a pole as the title of liberty and called the people to covenant to defend their liberty.",
        "Amalickiah, through treachery and murder, made himself king of the Lamanites and stirred them to war. The brave Teancum stole into the enemy camp by night and put a javelin through Amalickiah's heart.",
        "Mormon wrote that if all men had been like Moroni, the very powers of hell would have been shaken; he was a man who did not delight in bloodshed but in defending his people."
      ], principles: [
        "We may righteously defend our families and freedom",
        "Standing for liberty requires courage and covenant",
        "Pride and treachery destroy nations",
        "Righteous leaders defend rather than delight in war"
      ] },
      reflection: '"What does it look like to raise your own \'title of liberty\' — to stand for faith and family in your daily life?"',
      questions: [
        { type: 'multiple_choice', prompt: 'Who was the Nephite captain who raised the title of liberty?', options: ['Captain Moroni', 'Teancum', 'Helaman', 'Pahoran'], correct: 0, reference: 'Alma 46:12', explanation: "Captain Moroni tore his coat and made the title of liberty to rally the Nephites." },
        { type: 'fill_blank', prompt: 'The title of liberty read: "In memory of our God, our religion, and ______..."', answer: 'freedom', acceptable: ['freedom'], reference: 'Alma 46:12', explanation: "Moroni wrote of God, religion, freedom, peace, wives, and children on the title of liberty." },
        { type: 'multiple_choice', prompt: 'How did Moroni prepare his armies that gave them advantage?', options: ['With armor and shields', 'With more horses', 'With larger swords', 'With walls'], correct: 0, reference: 'Alma 43:19', explanation: "Moroni had prepared his people with breastplates and shields, which the Lamanites lacked." },
        { type: 'multiple_choice', prompt: 'Who put a javelin through the Lamanite king Amalickiah?', options: ['Teancum', 'Moroni', 'Lehi', 'Helaman'], correct: 0, reference: 'Alma 51:34', explanation: "Teancum crept into the camp by night and slew Amalickiah with a javelin." },
        { type: 'multiple_choice', prompt: 'What did Mormon say would happen if all men were like Moroni?', options: ['The powers of hell would be shaken forever', 'They would be rich', 'There would be no temples', 'Nothing'], correct: 0, reference: 'Alma 48:17', explanation: "Mormon praised Moroni, saying if all men were like him, the powers of hell would have been shaken." }
      ]
    },
    ch35: {
      id: 'ch35', chapter: 35, range: 'Alma 53–63', title: "The Stripling Warriors", subtitle: "Faith taught by their mothers", available: true, xpReward: 50,
      sourceUrl: 'https://www.churchofjesuschrist.org/study/manual/book-of-mormon-teacher-manual/chapter-33?lang=eng',
      reading: { body: [
        "The people of Ammon, who had covenanted not to take up arms, had sons who had made no such covenant. Two thousand of these young men chose to defend their country, and they asked Helaman to be their leader.",
        "These stripling warriors were exceedingly valiant for courage, strength, and activity — but most of all, they were true at all times to whatever they were entrusted. They had been taught by their mothers that if they did not doubt, God would deliver them.",
        "In a fierce battle, all two thousand fought, and though many were wounded, not one of them was slain. They did not doubt that God would deliver them, and He did, according to their faith.",
        "Later, Captain Moroni wrote to the chief judge Pahoran for help, and learned Pahoran had been driven from the judgment seat by rebels. Together they restored order, and through faith and unity the Nephites preserved their freedom."
      ], principles: [
        "Faith taught in the home gives strength in trial",
        "Being true to trust is a mark of true discipleship",
        "God delivers those who do not doubt",
        "Unity and faith preserve a people"
      ] },
      reflection: '"Who first taught you to trust God — and how does that early teaching still strengthen you today?"',
      questions: [
        { type: 'multiple_choice', prompt: 'How many stripling warriors first followed Helaman?', options: ['Two thousand', 'One hundred', 'Ten thousand', 'Five hundred'], correct: 0, reference: 'Alma 53:22', explanation: "Two thousand young men of the people of Ammon went to battle under Helaman." },
        { type: 'fill_blank', prompt: 'The young warriors had been taught by their ______ that if they did not doubt, God would deliver them.', answer: 'mothers', acceptable: ['mothers'], reference: 'Alma 56:47', explanation: "The stripling warriors\' faith came from the teaching of their mothers." },
        { type: 'multiple_choice', prompt: 'After the fierce battle, how many of the stripling warriors were slain?', options: ['Not one', 'Half of them', 'A hundred', 'All but two'], correct: 0, reference: 'Alma 57:25', explanation: "Though many were wounded, not one of the stripling warriors was slain, because of their faith." },
        { type: 'multiple_choice', prompt: 'What was the greatest quality of the stripling warriors?', options: ['Their wealth', 'They were true at all times to whatever was entrusted to them', 'Their height', 'Their speed only'], correct: 1, reference: 'Alma 53:20', explanation: "They were valiant, but above all they were true and faithful in every trust." },
        { type: 'multiple_choice', prompt: 'Who had been driven from the judgment seat, prompting Moroni to march to his aid?', options: ['Pahoran', 'Nephihah', 'Alma', 'Lamoni'], correct: 0, reference: 'Alma 61:1–2', explanation: "Pahoran had been driven from the judgment seat by the king-men; Moroni came to help restore order." }
      ]
    }

  };

  // Order in which lessons appear on the path
  const LESSON_ORDER = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch9', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14', 'ch15', 'ch16', 'ch17', 'ch18', 'ch19', 'ch20', 'ch21', 'ch22', 'ch23', 'ch24', 'ch25', 'ch26', 'ch27', 'ch28', 'ch29', 'ch30', 'ch31', 'ch32', 'ch33', 'ch34', 'ch35'];

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
