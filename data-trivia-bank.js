// ============================================================
// Scripture Scholar — Trivia Bank (multi-format)
// ============================================================
// A verified bank of Book of Mormon trivia across 4 formats/categories.
// Every item is drawn from the Book of Mormon text with a real reference.
// Accuracy rule: only facts the text states plainly. Where a detail is
// commonly assumed but NOT in scripture (e.g. the names of the Three
// Nephites, which are withheld — 3 Nephi 28:25), we do NOT assert it.
//
// Categories:
//   'facts'         — multiple choice about people/places/events
//   'verse_location'— "Where is this verse found?" (pick the reference)
//   'who_spoke'     — "Who spoke these words?"
//   'complete_verse'— complete the verse (word cards OR typing)
//
// Item shapes:
//   facts / verse_location / who_spoke:
//     { type, category, q, options:[4], correct, ref, note }
//   complete_verse:
//     { type:'complete_verse', category, before, after, answer,
//       acceptable:[...], distractors:[...], ref, note }
//     (UI builds word-cards from answer words + distractors, OR accepts typing)
// ============================================================

  const TRIVIA_BANK = [

    // ============ CATEGORY: FACTS (multiple choice) ============
    {
      type: 'multiple_choice', category: 'facts',
      q: 'How many sons of Mosiah went on missions to the Lamanites?',
      options: ['Two', 'Four', 'Six', 'Twelve'], correct: 1,
      ref: 'Mosiah 27:34',
      note: 'Ammon, Aaron, Omner, and Himni — the four sons of Mosiah — became missionaries to the Lamanites.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who took Alma into his home and became his missionary companion in Ammonihah?',
      options: ['Amulek', 'Amlici', 'Antionah', 'Zeezrom'], correct: 0,
      ref: 'Alma 8:21',
      note: 'Amulek received Alma into his house and became his companion in preaching to the wicked city of Ammonihah.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'How many young warriors did Helaman lead (later joined by more)?',
      options: ['1,000', '2,000 (later 2,060)', '5,000', '10,000'], correct: 1,
      ref: 'Alma 53:22; 57:6',
      note: 'Helaman led 2,000 stripling warriors, later joined by 60 more. Not one of them perished, because of their faith.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Which prophet did King Noah have put to death by fire?',
      options: ['Alma', 'Abinadi', 'Amulon', 'Gideon'], correct: 1,
      ref: 'Mosiah 17:20',
      note: 'Abinadi sealed his testimony by fire — but his words converted Alma, who had been one of Noah\'s priests.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What guided Lehi\'s family through the wilderness?',
      options: ['A pillar of fire', 'The Liahona', 'A bright star', 'An angel'], correct: 1,
      ref: '1 Nephi 16:10',
      note: 'The Liahona, a round brass ball with spindles, pointed the way — working by faith and diligence.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'How many years did Lehi\'s family travel in the wilderness before crossing the ocean?',
      options: ['Forty years', 'Eight years', 'Three years', 'Twelve years'], correct: 1,
      ref: '1 Nephi 17:4',
      note: 'They "did sojourn... even eight years in the wilderness" before reaching the land they called Bountiful.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'From whom did Nephi obtain the plates of brass in Jerusalem?',
      options: ['King Zedekiah', 'Laban', 'Ishmael', 'Zoram'], correct: 1,
      ref: '1 Nephi 4',
      note: 'Nephi obtained the brass plates from Laban. Laban\'s servant Zoram then joined Lehi\'s family.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'How many days of darkness covered the land after the Savior\'s crucifixion?',
      options: ['One day', 'Three days', 'Seven days', 'Forty days'], correct: 1,
      ref: '3 Nephi 8:23',
      note: 'Three days of thick darkness covered the land before the resurrected Christ appeared to the Nephites.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'How many disciples did Jesus choose among the Nephites?',
      options: ['Three', 'Twelve', 'Seventy', 'Forty'], correct: 1,
      ref: '3 Nephi 12:1',
      note: 'Jesus chose twelve disciples to lead His church among the Nephites.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'According to 3 Nephi 28, what is true of the three disciples who wished to tarry?',
      options: ['Their names are Nephi, Timothy, and Jonas', 'Their names were withheld from the record', 'They were the sons of Helaman', 'They were brothers'],
      correct: 1,
      ref: '3 Nephi 28:25',
      note: 'Scripture says the names of the three were NOT written — they were withheld. The Book of Mormon never names them.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who was the last Nephite prophet, who buried the plates?',
      options: ['Mormon', 'Moroni', 'Ether', 'Nephi'], correct: 1,
      ref: 'Moroni 10:1–2',
      note: 'Moroni, son of Mormon, finished the record and later delivered the plates to Joseph Smith.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Which Nephite leader raised the title of liberty?',
      options: ['Captain Moroni', 'Helaman', 'Teancum', 'Pahoran'], correct: 0,
      ref: 'Alma 46:12–13',
      note: 'Captain Moroni tore his coat and wrote on it "In memory of our God, our religion, and freedom..." as a standard.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'How old was Mormon when he was first visited by the Lord?',
      options: ['Ten', 'Fifteen', 'Twenty', 'Twenty-five'], correct: 1,
      ref: 'Mormon 1:15',
      note: 'Mormon was fifteen years old when he was visited of the Lord and tasted of His goodness.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Where did the brother of Jared see the finger of the Lord?',
      options: ['On a mountain', 'When the Lord touched 16 stones', 'In a dream', 'On the sea'], correct: 1,
      ref: 'Ether 3:6',
      note: 'The Lord touched sixteen small stones the brother of Jared had made; he then beheld the Lord because of his great faith.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'About how many people did Alma baptize at the Waters of Mormon?',
      options: ['About 200', 'About 450', 'About 1,000', 'About 2,000'], correct: 1,
      ref: 'Mosiah 18:16',
      note: 'Alma baptized about 204 souls at the Waters of Mormon, establishing the church of Christ.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'How did the people of Limhi escape Lamanite bondage?',
      options: ['They built a wall', 'They got the guards drunk on wine', 'They tunneled out', 'They won a battle'], correct: 1,
      ref: 'Mosiah 22:10',
      note: 'Gideon\'s plan: extra wine made the Lamanite guards drunk, and the people slipped away with their flocks.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'From where did Samuel the Lamanite preach to the Nephites?',
      options: ['The temple steps', 'The wall of the city', 'A mountaintop', 'A boat'], correct: 1,
      ref: 'Helaman 13:4',
      note: 'When the Nephites would not let him enter Zarahemla, Samuel preached repentance from the city wall.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What did Korihor teach that made him an "anti-Christ"?',
      options: ['That there would be no Christ', 'That he was the Messiah', 'That riches were evil', 'That the law was ended'], correct: 0,
      ref: 'Alma 30:12',
      note: 'Korihor denied that any Christ would come. He was later struck dumb and confessed he had been deceived.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What did Nephi build at the Lord\'s command in Bountiful?',
      options: ['A temple', 'A ship', 'A tower', 'A city'], correct: 1,
      ref: '1 Nephi 17:8',
      note: 'The Lord commanded Nephi to build a ship to carry his family to the promised land.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'According to Moroni 10:4, how can we know the truth of the Book of Mormon?',
      options: ['Memorize it', 'Ask God with a sincere heart and real intent', 'Debate it', 'Read it seven times'], correct: 1,
      ref: 'Moroni 10:4',
      note: 'Moroni promises that if we ask God in faith, "with a sincere heart, with real intent," the Holy Ghost will reveal its truth.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What did Captain Moroni write upon the title of liberty?',
      options: ['A battle plan', 'In memory of our God, our religion, and freedom', 'A list of laws', 'A prayer of thanks'], correct: 1,
      ref: 'Alma 46:12',
      note: 'Moroni tore his coat and wrote on it to rally the Nephites to defend their faith and freedom.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'How many Nephites and Lamanites were converted and buried their weapons, becoming the people of Ammon?',
      options: ['The anti-Nephi-Lehies', 'The Gadianton robbers', 'The Mulekites', 'The Zoramites'], correct: 0,
      ref: 'Alma 23–24',
      note: 'The converted Lamanites called themselves Anti-Nephi-Lehies and buried their weapons, vowing never to shed blood again.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who was the wicked king that had the prophet Abinadi put to death?',
      options: ['King Noah', 'King Laman', 'King Lamoni', 'King Mosiah'], correct: 0,
      ref: 'Mosiah 17',
      note: 'King Noah condemned Abinadi to death by fire, but one priest, Alma, believed and fled to record his words.'
    },

    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who led the people of Limhi to freedom by making the Lamanite guards drunk with wine?',
      options: ['Gideon', 'Ammon', 'Alma', 'Zeniff'], correct: 0,
      ref: 'Mosiah 22:7',
      note: 'Gideon proposed the plan to send extra wine to the guards so the people could escape.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What anti-Christ was struck dumb after demanding a sign from Alma?',
      options: ['Korihor', 'Sherem', 'Nehor', 'Zeezrom'], correct: 0,
      ref: 'Alma 30:50',
      note: 'Korihor denied Christ and demanded a sign; he was struck dumb and later trampled to death.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'On what high stand did the proud Zoramites offer their set prayer?',
      options: ['The Rameumptom', 'The title of liberty', 'The tower of Sherrizah', 'The seat of judgment'], correct: 0,
      ref: 'Alma 31:21',
      note: 'The Zoramites climbed the Rameumptom one at a time to recite the same boastful prayer.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Across what river did Captain Moroni and Alma\u2019s armies often battle the Lamanites?',
      options: ['The river Sidon', 'The river Jordan', 'The river Laman', 'The waters of Mormon'], correct: 0,
      ref: 'Alma 2:34',
      note: 'The river Sidon was the major river of Nephite lands and the site of several battles.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What did Ammon cut off to defend King Lamoni\u2019s flocks at the waters of Sebus?',
      options: ['The arms of the attackers', 'Their banners', 'The heads of the sheep', 'The bridge'], correct: 0,
      ref: 'Alma 17:37',
      note: 'Ammon smote off the arms of those who tried to scatter the king\u2019s flocks, astonishing the servants.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who was the high priest and chief judge in Gideon that Korihor confronted?',
      options: ['Giddonah', 'Pahoran', 'Nephihah', 'Helaman'], correct: 0,
      ref: 'Alma 30:21',
      note: 'Giddonah was the high priest over the land of Gideon when Korihor came preaching.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'On what hill did Alma teach the poor and humble Zoramites about faith?',
      options: ['The hill Onidah', 'The hill Cumorah', 'The hill Shim', 'The hill Manti'], correct: 0,
      ref: 'Alma 32:4',
      note: 'A multitude of the poor, cast out of their synagogues, gathered to Alma on the hill Onidah.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What land was given to the people of Ammon (Anti-Nephi-Lehies) for their inheritance?',
      options: ['Jershon', 'Bountiful', 'Zarahemla', 'Midian'], correct: 0,
      ref: 'Alma 27:22',
      note: 'The Nephites gave the converted Lamanites the land of Jershon and guarded them.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who slew the prophet Gideon with the sword and was later executed for it?',
      options: ['Nehor', 'Korihor', 'Amlici', 'Amalickiah'], correct: 0,
      ref: 'Alma 1:9',
      note: 'Nehor, who preached priestcraft, killed the aged Gideon and was condemned to death.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What did the Jaredites build to cross the great ocean to the promised land?',
      options: ['Barges', 'A great ship', 'Rafts of reeds', 'A bridge'], correct: 0,
      ref: 'Ether 2:16',
      note: 'The Jaredites built tight barges, lit by stones the Lord touched, to cross the sea.'
    },

    // ============ CATEGORY: WHO SPOKE THESE WORDS ============

    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"I will go and do the things which the Lord hath commanded..."',
      options: ['Nephi', 'Lehi', 'Sam', 'Laman'], correct: 0,
      ref: '1 Nephi 3:7',
      note: 'Nephi\'s great declaration of obedience, trusting the Lord would prepare a way to keep His commandments.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"Adam fell that men might be; and men are, that they might have joy."',
      options: ['Lehi', 'King Benjamin', 'Jacob', 'Nephi'], correct: 0,
      ref: '2 Nephi 2:25',
      note: 'Lehi taught his son Jacob this profound doctrine about the purpose of the Fall and the plan of happiness.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...I have been born of God." (spoken after an angel\'s rebuke and three days unconscious)',
      options: ['Alma the Younger', 'King Lamoni', 'Corianton', 'Helaman'], correct: 0,
      ref: 'Mosiah 27 / Alma 36',
      note: 'Alma the Younger, after being struck down by an angel, repented and was "born of God," then preached all his days.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'Have ye spiritually been',
      after: ' of God? Have ye received his image in your countenances?',
      answer: 'born',
      acceptable: ['born'],
      distractors: ['cleansed', 'healed', 'made'],
      ref: 'Alma 5:14',
      note: 'Alma asked the people of Zarahemla if they had experienced a mighty change of heart.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"Behold, I am Jesus Christ, whom the prophets testified shall come into the world."',
      options: ['Jesus Christ', 'An angel', 'Nephi', 'Moroni'], correct: 0,
      ref: '3 Nephi 11:10',
      note: 'The resurrected Savior declared this as He descended to the Nephites at the temple in Bountiful.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"O remember, remember, my sons... that it is upon the rock of our Redeemer... that ye must build your foundation."',
      options: ['Helaman', 'Alma', 'Nephi', 'King Benjamin'], correct: 0,
      ref: 'Helaman 5:12',
      note: 'Helaman counseled his sons Nephi and Lehi to build their foundation on Christ.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...I give unto men weakness that they may be humble... then will I make weak things become strong unto them."',
      options: ['The Lord (to Moroni)', 'Mormon', 'Ether', 'Nephi'], correct: 0,
      ref: 'Ether 12:27',
      note: 'The Lord spoke these words to Moroni, teaching the purpose of human weakness.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"In memory of our God, our religion, and freedom, and our peace, our wives, and our children." (written on a banner)',
      options: ['Captain Moroni', 'Helaman', 'Teancum', 'Pahoran'], correct: 0,
      ref: 'Alma 46:12',
      note: 'Captain Moroni wrote this on the title of liberty to rally the Nephites to defend their freedom.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...God himself shall come down among the children of men, and shall redeem his people." (spoken before a wicked king)',
      options: ['Abinadi', 'Alma', 'Nephi', 'Samuel the Lamanite'], correct: 0,
      ref: 'Mosiah 15:1',
      note: 'Abinadi boldly testified of Christ before King Noah, sealing his witness with his life.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...ye shall have eternal life." (the voice of the Lord, after a mighty all-day prayer in the forest)',
      options: ['Enos', 'Jacob', 'Jarom', 'Omni'], correct: 0,
      ref: 'Enos 1:5–8',
      note: 'Enos wrestled in mighty prayer and received forgiveness and the assurance of eternal life.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...we will be true at all times and in whatsoever things he shall command us." (spoken by young warriors)',
      options: ['The stripling warriors', 'The sons of Mosiah', 'The Nephite elders', 'The people of Ammon'], correct: 0,
      ref: 'Alma 53:20 / 56:47',
      note: 'Helaman\'s 2,000 stripling warriors had been taught faith by their mothers and did not doubt.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"I know that he loveth his children; nevertheless, I do not know the meaning of all things." (answering an angel)',
      options: ['Nephi', 'Lehi', 'Jacob', 'Sam'], correct: 0,
      ref: '1 Nephi 11:17',
      note: 'Nephi answered the Spirit with humble faith while being shown the vision of the tree of life.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"I know that I am nothing; as to my strength I am weak... but I will boast of my God, for in his strength I can do all things."',
      options: ['Ammon', 'Aaron', 'Alma', 'Nephi'], correct: 0,
      ref: 'Alma 26:12',
      note: 'Ammon rejoiced after the great Lamanite conversions, giving all glory to God rather than himself.'
    },

    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"O that I were an angel, and could have the wish of mine heart..."',
      options: ['Alma', 'Ammon', 'Nephi', 'Mormon'], correct: 0,
      ref: 'Alma 29:1',
      note: 'Alma the Younger longed to declare repentance to every soul, then humbly accepted his calling.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...if ye shall believe on his name... ye shall be brought to stand before the bar of God."',
      options: ['Amulek', 'Alma', 'Abinadi', 'Nephi'], correct: 0,
      ref: 'Alma 11:44',
      note: 'Amulek testified to Zeezrom of the resurrection and judgment of all mankind.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"Believest thou that there is a God?" (asked of a defiant anti-Christ)',
      options: ['Alma', 'Amulek', 'Ammon', 'Korihor'], correct: 0,
      ref: 'Alma 30:37',
      note: 'Alma questioned Korihor, then declared that all things denote there is a God.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...were it not for the prayers of the righteous... ye would even now be visited with utter destruction."',
      options: ['Amulek', 'Alma', 'Abinadi', 'Mosiah'], correct: 0,
      ref: 'Alma 10:22',
      note: 'Amulek warned the people of Ammonihah that the righteous preserved their city.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"Behold, are we not all beggars?"',
      options: ['King Benjamin', 'King Mosiah', 'Alma', 'Nephi'], correct: 0,
      ref: 'Mosiah 4:19',
      note: 'King Benjamin taught that all people depend on God, so we should give to those in need.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"I am Abinadi; and... God has sent me." (before a wicked king)',
      options: ['Abinadi', 'Alma', 'Samuel the Lamanite', 'Nephi'], correct: 0,
      ref: 'Mosiah 12:1',
      note: 'Abinadi returned in disguise to prophesy against King Noah and his people.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...whatsoever ye do unto these little ones, ye do it unto me." (taught at the temple in Bountiful)',
      options: ['Jesus Christ', 'Nephi', 'Mormon', 'Moroni'], correct: 0,
      ref: '3 Nephi 17',
      note: 'The risen Christ blessed the Nephite children one by one and wept over them.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...the Lord said unto me: They have not sinned..." (about little children)',
      options: ['Mormon', 'Moroni', 'Nephi', 'Alma'], correct: 0,
      ref: 'Moroni 8:8',
      note: 'Mormon recorded the Lord\u2019s words to him that little children need no baptism, being alive in Christ.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...come unto Christ, and lay hold upon every good gift..."',
      options: ['Moroni', 'Mormon', 'Nephi', 'Jacob'], correct: 0,
      ref: 'Moroni 10:30',
      note: 'Moroni\u2019s farewell exhortation near the very end of the Book of Mormon.'
    },

    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...I have prayed continually for them by day, and have wept... yet the Lord said unto me..."',
      options: ['Mormon', 'Moroni', 'Nephi', 'Alma'], correct: 0,
      ref: 'Mormon 3:12',
      note: 'Mormon grieved over his people\u2019s wickedness even as he led their armies.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...for the Lord shall redeem my soul from hell..." (after an all-day wrestle in prayer)',
      options: ['Enos', 'Jacob', 'Jarom', 'Omni'], correct: 0,
      ref: 'Enos 1:6',
      note: 'Enos received assurance of forgiveness after mighty prayer for his soul.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...he hath heard my cry... and given unto me knowledge concerning that which is just and true."',
      options: ['Zeniff', 'Limhi', 'King Noah', 'Gideon'], correct: 1,
      ref: 'Mosiah 7:33',
      note: 'King Limhi exhorted his people to turn to the Lord for deliverance from bondage.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...how blessed are they... they shall sit down in the kingdom of God... and ye shall be cast out."',
      options: ['Samuel the Lamanite', 'Abinadi', 'Nephi', 'Alma'], correct: 0,
      ref: 'Helaman 13:18',
      note: 'Samuel the Lamanite prophesied from the city wall of blessings and judgments to come.'
    },

    // ============ CATEGORY: WHERE IS THIS VERSE FOUND ============


    {
      type: 'verse_location', category: 'verse_location',
      q: '"And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded..."',
      options: ['1 Nephi 3:7', 'Alma 5:7', 'Mosiah 2:17', 'Moroni 10:4'], correct: 0,
      ref: '1 Nephi 3:7',
      note: 'One of the most quoted verses in the Book of Mormon — Nephi\'s pledge of obedience.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"Adam fell that men might be; and men are, that they might have joy."',
      options: ['2 Nephi 2:25', '1 Nephi 1:1', 'Alma 32:21', 'Ether 12:6'], correct: 0,
      ref: '2 Nephi 2:25',
      note: 'Lehi\'s teaching to Jacob about the purpose of mortality.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...when ye are in the service of your fellow beings ye are only in the service of your God."',
      options: ['Mosiah 2:17', 'Alma 37:6', '3 Nephi 11:10', 'Helaman 5:12'], correct: 0,
      ref: 'Mosiah 2:17',
      note: 'King Benjamin\'s address — service to others is service to God.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...remember that it is upon the rock of our Redeemer, who is Christ... that ye must build your foundation..."',
      options: ['Helaman 5:12', '2 Nephi 2:25', 'Mosiah 3:19', 'Moroni 7:45'], correct: 0,
      ref: 'Helaman 5:12',
      note: 'Helaman\'s counsel to his sons Nephi and Lehi about building upon the sure foundation of Christ.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...the natural man is an enemy to God... unless he yields to the enticings of the Holy Spirit..."',
      options: ['Mosiah 3:19', 'Alma 32:21', '1 Nephi 19:23', 'Jacob 2:18'], correct: 0,
      ref: 'Mosiah 3:19',
      note: 'King Benjamin taught how to put off the natural man and become a saint through the Atonement of Christ.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...faith is not to have a perfect knowledge of things; therefore if ye have faith ye hope for things which are not seen, which are true."',
      options: ['Alma 32:21', 'Ether 12:6', 'Moroni 7:45', 'Mosiah 2:17'], correct: 0,
      ref: 'Alma 32:21',
      note: 'Alma\'s discourse on faith, given to the poor among the Zoramites.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...charity is the pure love of Christ, and it endureth forever..."',
      options: ['Moroni 7:47', 'Alma 7:11', '2 Nephi 31:20', 'Mosiah 4:11'], correct: 0,
      ref: 'Moroni 7:47',
      note: 'Mormon\'s sermon on charity, recorded by his son Moroni.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"I, Nephi, having been born of goodly parents, therefore I was taught somewhat in all the learning of my father..."',
      options: ['1 Nephi 1:1', '2 Nephi 1:1', 'Mosiah 1:1', 'Alma 1:1'], correct: 0,
      ref: '1 Nephi 1:1',
      note: 'The opening verse of the Book of Mormon.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"And when ye shall receive these things... ask God, the Eternal Father, in the name of Christ, if these things are not true..."',
      options: ['Moroni 10:4', 'Moroni 7:47', '2 Nephi 33:1', 'Ether 12:6'], correct: 0,
      ref: 'Moroni 10:4',
      note: 'Moroni\'s promise — the invitation to ask God about the truth of the Book of Mormon.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"And by the power of the Holy Ghost ye may know the truth of all things."',
      options: ['Moroni 10:5', 'Moroni 10:4', '1 Nephi 10:19', 'Alma 5:46'], correct: 0,
      ref: 'Moroni 10:5',
      note: 'The companion to Moroni\'s promise in the verse just before it.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...wickedness never was happiness."',
      options: ['Alma 41:10', 'Alma 5:10', 'Mosiah 2:41', 'Helaman 13:38'], correct: 0,
      ref: 'Alma 41:10',
      note: 'Alma counseling his son Corianton.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"And charity suffereth long, and is kind, and envieth not... beareth all things, believeth all things, hopeth all things, endureth all things."',
      options: ['Moroni 7:45', 'Moroni 7:47', '1 Nephi 11:22', 'Mosiah 4:11'], correct: 0,
      ref: 'Moroni 7:45',
      note: 'Mormon\'s description of the qualities of charity, echoed by the Apostle Paul in 1 Corinthians 13.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...I give unto men weakness that they may be humble... then will I make weak things become strong unto them."',
      options: ['Ether 12:27', 'Ether 12:6', 'Alma 32:21', 'Moroni 7:33'], correct: 0,
      ref: 'Ether 12:27',
      note: 'The Lord speaking to Moroni about the purpose of weakness.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...faith is things which are hoped for and not seen; wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith."',
      options: ['Ether 12:6', 'Alma 32:21', 'Moroni 7:26', 'Hebrews 11:1'], correct: 0,
      ref: 'Ether 12:6',
      note: 'Moroni teaching that faith is tested before its reward.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"Therefore I would that ye should be perfect even as I, or your Father who is in heaven is perfect."',
      options: ['3 Nephi 12:48', 'Moroni 10:32', '2 Nephi 31:20', 'Matthew 5:48'], correct: 0,
      ref: '3 Nephi 12:48',
      note: 'The risen Christ teaching the Nephites, paralleling the Sermon on the Mount.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...see that ye refrain from your iniquities... go no more after the lusts of your eyes..."',
      options: ['Alma 39:9', 'Alma 38:12', 'Mosiah 4:30', 'Jacob 2:28'], correct: 0,
      ref: 'Alma 39:9',
      note: 'Alma\'s counsel to his son Corianton to turn from sin.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...ye must press forward with a steadfastness in Christ, having a perfect brightness of hope..."',
      options: ['2 Nephi 31:20', 'Moroni 7:47', 'Alma 32:21', 'Mosiah 4:11'], correct: 0,
      ref: '2 Nephi 31:20',
      note: 'Nephi describing the doctrine of Christ and the path to eternal life.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...he will take upon him the pains and the sicknesses of his people."',
      options: ['Alma 7:11', 'Mosiah 3:19', '2 Nephi 9:21', 'Isaiah 53:4'], correct: 0,
      ref: 'Alma 7:11',
      note: 'Alma prophesying of the Savior\'s atonement at Gideon.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"O remember, remember, my sons, the words which king Benjamin spake unto his people..."',
      options: ['Helaman 5:9', 'Mosiah 2:17', 'Alma 37:35', '3 Nephi 5:13'], correct: 0,
      ref: 'Helaman 5:9',
      note: 'Helaman reminding his sons of King Benjamin\'s teaching about salvation through Christ.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...learn wisdom in thy youth; yea, learn in thy youth to keep the commandments of God."',
      options: ['Alma 37:35', 'Alma 37:6', 'Mosiah 4:15', 'Proverbs 22:6'], correct: 0,
      ref: 'Alma 37:35',
      note: 'Alma\'s counsel to his son Helaman.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"And now, my son, I would say... see that ye refrain from idleness."',
      options: ['Alma 38:12', 'Alma 37:35', 'Mosiah 2:17', '2 Nephi 5:17'], correct: 0,
      ref: 'Alma 38:12',
      note: 'Alma\'s counsel to his son Shiblon, also teaching to "bridle all your passions."'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"Behold, I am Jesus Christ, whom the prophets testified shall come into the world."',
      options: ['3 Nephi 11:10', '3 Nephi 9:15', '1 Nephi 11:7', 'Mosiah 3:8'], correct: 0,
      ref: '3 Nephi 11:10',
      note: 'The risen Christ introducing Himself to the Nephites at the temple in Bountiful.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...there is no other name given whereby salvation cometh; therefore... take upon you the name of Christ..."',
      options: ['Mosiah 5:8', 'Mosiah 3:17', '2 Nephi 25:23', 'Acts 4:12'], correct: 0,
      ref: 'Mosiah 5:8',
      note: 'King Benjamin\'s people covenanting to take upon them the name of Christ.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...for we know that it is by grace that we are saved, after all we can do."',
      options: ['2 Nephi 25:23', 'Moroni 10:32', 'Alma 24:11', 'Ephesians 2:8'], correct: 0,
      ref: '2 Nephi 25:23',
      note: 'Nephi teaching about grace and the labor of the Nephites to persuade their children to believe in Christ.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...come unto Christ, and be perfected in him, and deny yourselves of all ungodliness..."',
      options: ['Moroni 10:32', 'Moroni 7:47', '3 Nephi 12:48', '2 Nephi 31:20'], correct: 0,
      ref: 'Moroni 10:32',
      note: 'Moroni\'s closing invitation near the very end of the Book of Mormon.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...watch yourselves, and your thoughts, and your words, and your deeds..."',
      options: ['Mosiah 4:30', 'Alma 37:35', 'Mosiah 2:17', '3 Nephi 18:15'], correct: 0,
      ref: 'Mosiah 4:30',
      note: 'King Benjamin\'s closing counsel to his people.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"For behold, this life is the time for men to prepare to meet God..."',
      options: ['Alma 34:32', 'Alma 5:28', '2 Nephi 9:27', 'Mosiah 3:19'], correct: 0,
      ref: 'Alma 34:32',
      note: 'Amulek preaching to the Zoramites about not procrastinating repentance.'
    },

    {
      type: 'verse_location', category: 'verse_location',
      q: '"...by small and simple things are great things brought to pass..."',
      options: ['Alma 37:6', '1 Nephi 16:29', 'Mosiah 4:27', 'Helaman 3:29'], correct: 0,
      ref: 'Alma 37:6',
      note: 'Alma counseled his son Helaman about the power of small means.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...I would that ye should be steadfast and immovable, always abounding in good works..."',
      options: ['Mosiah 5:15', 'Alma 1:25', '2 Nephi 31:20', 'Moroni 7:3'], correct: 0,
      ref: 'Mosiah 5:15',
      note: 'King Benjamin\u2019s closing exhortation to his covenant people.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...he doth grant unto you that ye may live in peace one with another."',
      options: ['Mosiah 4:13', 'Alma 7:11', 'Helaman 5:12', '4 Nephi 1:2'], correct: 0,
      ref: 'Mosiah 4:13',
      note: 'King Benjamin taught how knowing God leads to peaceful, generous living.'
    },

    {
      type: 'verse_location', category: 'verse_location',
      q: '"...there is no other name given... whereby salvation can come unto the children of men..."',
      options: ['Mosiah 3:17', '2 Nephi 25:23', 'Alma 38:9', 'Helaman 5:9'], correct: 0,
      ref: 'Mosiah 3:17',
      note: 'King Benjamin, quoting an angel, testified that salvation comes only through Christ.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...he that hath the spirit of contention is not of me, but is of the devil..."',
      options: ['3 Nephi 11:29', 'Moroni 7:45', 'Alma 4:9', 'Mosiah 2:32'], correct: 0,
      ref: '3 Nephi 11:29',
      note: 'The risen Christ taught the Nephites to do away with disputations and contention.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...the words of Christ will tell you all things what ye should do."',
      options: ['2 Nephi 32:3', '2 Nephi 31:20', 'Alma 37:35', 'Moroni 10:5'], correct: 0,
      ref: '2 Nephi 32:3',
      note: 'Nephi taught his people to feast upon the words of Christ.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...after ye have received so many witnesses... ye will sin against the light..."',
      options: ['Mosiah 2:36', 'Alma 12:10', 'Helaman 14:31', 'Mosiah 4:14'], correct: 0,
      ref: 'Mosiah 2:36',
      note: 'King Benjamin warned about withdrawing from the Spirit after receiving knowledge.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...when we did hide up our treasures... they became slippery..."',
      options: ['Helaman 13:35', 'Mormon 1:18', 'Ether 14:1', 'Alma 11:1'], correct: 0,
      ref: 'Helaman 13:35',
      note: 'Samuel the Lamanite prophesied of a curse upon the land for the people\u2019s wickedness.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...whoso would hearken unto the word of God... was caught away in a strait and narrow course..."',
      options: ['1 Nephi 8:24', '1 Nephi 8:19', '1 Nephi 11:25', 'Alma 32:42'], correct: 0,
      ref: '1 Nephi 8:24',
      note: 'In Lehi\u2019s dream, people pressed forward holding the rod of iron to the tree of life.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...the keeper of the gate is the Holy One of Israel..."',
      options: ['2 Nephi 9:41', '2 Nephi 31:9', 'Jacob 4:11', 'Mosiah 16:9'], correct: 0,
      ref: '2 Nephi 9:41',
      note: 'Jacob taught that the Lord Himself keeps the gate and cannot be deceived.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...and they all cried with one voice, saying: Yea, we believe all the words which thou hast spoken."',
      options: ['Mosiah 5:2', 'Alma 19:30', '3 Nephi 4:30', 'Mosiah 4:2'], correct: 0,
      ref: 'Mosiah 5:2',
      note: 'King Benjamin\u2019s people experienced a mighty change of heart through the Spirit.'
    },

    // ============ CATEGORY: COMPLETE THE VERSE ============


    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'I will go and do the things which the Lord hath',
      after: ', for I know that the Lord giveth no commandments unto the children of men...',
      answer: 'commanded',
      acceptable: ['commanded'],
      distractors: ['spoken', 'promised', 'given'],
      ref: '1 Nephi 3:7',
      note: 'Nephi trusted the Lord would prepare a way to accomplish what He commands.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'Adam fell that men might be; and men are, that they might have',
      after: '.',
      answer: 'joy',
      acceptable: ['joy'],
      distractors: ['life', 'peace', 'hope'],
      ref: '2 Nephi 2:25',
      note: 'Lehi\'s teaching on the purpose of the Fall and mortal life.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: '...when ye are in the service of your fellow beings ye are only in the service of your',
      after: '.',
      answer: 'God',
      acceptable: ['god'],
      distractors: ['king', 'family', 'neighbor'],
      ref: 'Mosiah 2:17',
      note: 'King Benjamin\'s timeless teaching on service.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is',
      after: ', the Son of God, that ye must build your foundation...',
      answer: 'Christ',
      acceptable: ['christ'],
      distractors: ['Jesus', 'God', 'Jehovah'],
      ref: 'Helaman 5:12',
      note: 'Helaman taught his sons to build on the unshakeable foundation of Christ.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: '...by small and simple things are great things brought to',
      after: '...',
      answer: 'pass',
      acceptable: ['pass'],
      distractors: ['light', 'life', 'mind'],
      ref: 'Alma 37:6',
      note: 'Alma\'s counsel to Helaman about the power of small things.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: '...charity is the pure love of',
      after: ', and it endureth forever...',
      answer: 'Christ',
      acceptable: ['christ'],
      distractors: ['God', 'man', 'heaven'],
      ref: 'Moroni 7:47',
      note: 'Mormon taught that charity is the pure love of Christ.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And if men come unto me I will show unto them their',
      after: '... my grace is sufficient for all men that humble themselves...',
      answer: 'weakness',
      acceptable: ['weakness', 'weaknesses'],
      distractors: ['strength', 'sins', 'hearts'],
      ref: 'Ether 12:27',
      note: 'The Lord taught Moroni that weak things can become strong through humility and grace.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And charity suffereth long, and is',
      after: ', and envieth not...',
      answer: 'kind',
      acceptable: ['kind'],
      distractors: ['meek', 'gentle', 'patient'],
      ref: 'Moroni 7:45',
      note: 'Mormon\'s description of the qualities of charity, the pure love of Christ.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'For the natural man is an enemy to God... and will be, forever and ever, unless he yields to the enticings of the Holy',
      after: '.',
      answer: 'Spirit',
      acceptable: ['spirit'],
      distractors: ['Ghost', 'word', 'voice'],
      ref: 'Mosiah 3:19',
      note: 'King Benjamin taught how to put off the natural man and become a saint through Christ.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'Wickedness never was',
      after: '.',
      answer: 'happiness',
      acceptable: ['happiness'],
      distractors: ['righteousness', 'peace', 'joy'],
      ref: 'Alma 41:10',
      note: 'Alma corrected his son Corianton\'s mistaken thinking about sin and happiness.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: '...press forward with a steadfastness in Christ, having a perfect brightness of',
      after: ', and a love of God and of all men.',
      answer: 'hope',
      acceptable: ['hope'],
      distractors: ['faith', 'light', 'joy'],
      ref: '2 Nephi 31:20',
      note: 'Nephi describing the path to eternal life through the doctrine of Christ.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: '...if ye do not watch yourselves, and your thoughts, and your words, and your',
      after: ', and observe the commandments of God... ye must perish.',
      answer: 'deeds',
      acceptable: ['deeds'],
      distractors: ['ways', 'works', 'hearts'],
      ref: 'Mosiah 4:30',
      note: 'King Benjamin\'s closing counsel to watch ourselves in thought, word, and deed.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: '...feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should',
      after: '.',
      answer: 'do',
      acceptable: ['do'],
      distractors: ['know', 'say', 'seek'],
      ref: '2 Nephi 32:3',
      note: 'Nephi taught his people to feast upon the words of Christ for guidance.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'For behold, this life is the time for men to prepare to meet',
      after: '.',
      answer: 'God',
      acceptable: ['god'],
      distractors: ['Christ', 'death', 'judgment'],
      ref: 'Alma 34:32',
      note: 'Amulek pleaded with the Zoramites not to procrastinate the day of their repentance.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: '...I will not boast of myself, but I will boast of my God, for in his strength I can do all',
      after: '.',
      answer: 'things',
      acceptable: ['things'],
      distractors: ['miracles', 'works', 'good'],
      ref: 'Alma 26:12',
      note: 'Ammon\'s declaration of faith after the great Lamanite conversions.'
    },

    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And now, my brethren, I would that ye should',
      after: ' him who has created you...',
      answer: 'remember',
      acceptable: ['remember'],
      distractors: ['serve', 'thank', 'follow'],
      ref: 'Mosiah 4:11',
      note: 'King Benjamin urged his people to always remember God\u2019s greatness and their own nothingness.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And it came to pass that Jesus said unto them: I will try the',
      after: ' of my people.',
      answer: 'faith',
      acceptable: ['faith'],
      distractors: ['patience', 'hearts', 'strength'],
      ref: '3 Nephi 26:11',
      note: 'The Lord tries the faith of His people before giving greater things.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And he that is baptized in my name... shall',
      after: ' upon the rock... and the gates of hell shall not prevail against them.',
      answer: 'build',
      acceptable: ['build'],
      distractors: ['stand', 'rest', 'kneel'],
      ref: '3 Nephi 11:39',
      note: 'Christ taught the Nephites His doctrine and the rock of His gospel.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And ye will not have a mind to injure one another, but to live',
      after: ' one with another...',
      answer: 'peaceably',
      acceptable: ['peaceably'],
      distractors: ['righteously', 'humbly', 'gently'],
      ref: 'Mosiah 4:13',
      note: 'King Benjamin described how those who know God live together in peace.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'But behold, the',
      after: ' of God was not altogether destroyed among them...',
      answer: 'church',
      acceptable: ['church'],
      distractors: ['word', 'faith', 'gospel'],
      ref: 'Alma 46:38',
      note: 'Despite war and dissension, the church of God endured among the Nephites.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And it came to pass that there was no',
      after: ' in the land, because of the love of God which did dwell in the hearts of the people.',
      answer: 'contention',
      acceptable: ['contention'],
      distractors: ['war', 'sorrow', 'poverty'],
      ref: '4 Nephi 1:15',
      note: 'After Christ\u2019s visit, the people lived in peace and unity for generations.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'O remember, remember, my sons, the words which king Benjamin spake... that there is no other',
      after: ' nor means whereby man can be saved, only... through Christ.',
      answer: 'way',
      acceptable: ['way'],
      distractors: ['path', 'name', 'power'],
      ref: 'Helaman 5:9',
      note: 'Helaman reminded his sons of King Benjamin\u2019s testimony of Christ.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And whoso shall declare more or less than this... the same cometh of',
      after: ', and is not built upon my rock.',
      answer: 'evil',
      acceptable: ['evil'],
      distractors: ['men', 'pride', 'darkness'],
      ref: '3 Nephi 11:40',
      note: 'Christ warned against adding to or taking from His doctrine.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'Therefore, whatsoever thing is good, and inviteth to do good... is sent forth by the power and gift of',
      after: '.',
      answer: 'Christ',
      acceptable: ['christ'],
      distractors: ['God', 'heaven', 'angels'],
      ref: 'Moroni 7:16',
      note: 'Mormon taught how to judge between good and evil by the Light of Christ.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And ye shall not suffer your children that they go',
      after: ' and naked...',
      answer: 'hungry',
      acceptable: ['hungry'],
      distractors: ['astray', 'alone', 'cold'],
      ref: 'Mosiah 4:14',
      note: 'King Benjamin taught parents to teach and provide for their children in righteousness.'
    },

    // ============ CATEGORY: REFERENCE MATCH (statement → reference) ============

    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: Nephi pledges "I will go and do the things which the Lord hath commanded."',
      options: ['1 Nephi 3:7', 'Mosiah 2:17', 'Alma 32:21', 'Moroni 10:4'], correct: 0,
      ref: '1 Nephi 3:7', note: 'Nephi\u2019s pledge of obedience.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Adam fell that men might be; and men are, that they might have joy."',
      options: ['2 Nephi 2:25', '1 Nephi 1:1', 'Alma 41:10', 'Ether 12:27'], correct: 0,
      ref: '2 Nephi 2:25', note: 'Lehi teaching Jacob about the purpose of mortality.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "When ye are in the service of your fellow beings ye are only in the service of your God."',
      options: ['Mosiah 2:17', 'Alma 37:6', 'Helaman 5:12', '3 Nephi 11:10'], correct: 0,
      ref: 'Mosiah 2:17', note: 'King Benjamin\u2019s address.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "By small and simple things are great things brought to pass."',
      options: ['Alma 37:6', '1 Nephi 3:7', 'Mosiah 4:11', 'Ether 12:27'], correct: 0,
      ref: 'Alma 37:6', note: 'Alma to his son Helaman.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Charity is the pure love of Christ, and it endureth forever."',
      options: ['Moroni 7:47', 'Alma 7:11', '2 Nephi 31:20', 'Mosiah 4:11'], correct: 0,
      ref: 'Moroni 7:47', note: 'Mormon\u2019s sermon on charity.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Ask God, the Eternal Father, in the name of Christ, if these things are not true."',
      options: ['Moroni 10:4', 'Moroni 7:47', 'Ether 12:6', '2 Nephi 33:1'], correct: 0,
      ref: 'Moroni 10:4', note: 'Moroni\u2019s promise.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "By the power of the Holy Ghost ye may know the truth of all things."',
      options: ['Moroni 10:5', 'Moroni 10:4', '1 Nephi 10:19', 'Alma 5:46'], correct: 0,
      ref: 'Moroni 10:5', note: 'The companion to Moroni\u2019s promise.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Wickedness never was happiness."',
      options: ['Alma 41:10', 'Alma 5:10', 'Mosiah 2:41', 'Helaman 13:38'], correct: 0,
      ref: 'Alma 41:10', note: 'Alma counseling his son Corianton.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "The natural man is an enemy to God."',
      options: ['Mosiah 3:19', 'Mosiah 2:17', 'Alma 41:10', '2 Nephi 2:25'], correct: 0,
      ref: 'Mosiah 3:19', note: 'From King Benjamin\u2019s address, quoting an angel.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "I will make weak things become strong unto them."',
      options: ['Ether 12:27', 'Ether 12:6', 'Alma 32:21', 'Moroni 7:33'], correct: 0,
      ref: 'Ether 12:27', note: 'The Lord speaking to Moroni.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Ye receive no witness until after the trial of your faith."',
      options: ['Ether 12:6', 'Alma 32:21', 'Moroni 7:26', 'Mosiah 3:19'], correct: 0,
      ref: 'Ether 12:6', note: 'Moroni teaching that faith is tested before its reward.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Faith is not to have a perfect knowledge of things."',
      options: ['Alma 32:21', 'Ether 12:6', 'Moroni 7:47', '2 Nephi 31:20'], correct: 0,
      ref: 'Alma 32:21', note: 'Alma\u2019s sermon on faith to the Zoramites.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Build your foundation upon the rock of our Redeemer."',
      options: ['Helaman 5:12', 'Mosiah 2:17', 'Alma 37:6', '3 Nephi 11:39'], correct: 0,
      ref: 'Helaman 5:12', note: 'Helaman\u2019s counsel to his sons.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Press forward with a steadfastness in Christ, having a perfect brightness of hope."',
      options: ['2 Nephi 31:20', 'Moroni 7:47', 'Alma 32:21', 'Mosiah 4:11'], correct: 0,
      ref: '2 Nephi 31:20', note: 'Nephi on the doctrine of Christ.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: Christ "will take upon him the pains and the sicknesses of his people."',
      options: ['Alma 7:11', 'Mosiah 3:19', '2 Nephi 9:21', 'Moroni 8:8'], correct: 0,
      ref: 'Alma 7:11', note: 'Alma prophesying of the Atonement at Gideon.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "This life is the time for men to prepare to meet God."',
      options: ['Alma 34:32', 'Alma 5:28', '2 Nephi 9:27', 'Mosiah 3:19'], correct: 0,
      ref: 'Alma 34:32', note: 'Amulek preaching to the Zoramites.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "It is by grace that we are saved, after all we can do."',
      options: ['2 Nephi 25:23', 'Moroni 10:32', 'Alma 24:11', 'Mosiah 3:17'], correct: 0,
      ref: '2 Nephi 25:23', note: 'Nephi teaching about grace.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Come unto Christ, and be perfected in him."',
      options: ['Moroni 10:32', 'Moroni 7:47', '3 Nephi 12:48', '2 Nephi 31:20'], correct: 0,
      ref: 'Moroni 10:32', note: 'Moroni\u2019s closing invitation.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "In his strength I can do all things." (spoken after the Lamanite conversions)',
      options: ['Alma 26:12', 'Mosiah 2:17', 'Alma 36:3', 'Philippians 4:13'], correct: 0,
      ref: 'Alma 26:12', note: 'Ammon rejoicing in the Lord.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Feast upon the words of Christ; for behold, the words of Christ will tell you all things."',
      options: ['2 Nephi 32:3', '2 Nephi 31:20', 'Moroni 10:4', 'Alma 37:35'], correct: 0,
      ref: '2 Nephi 32:3', note: 'Nephi teaching his people to feast on the word.'
    }
,
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Are we not all beggars?"',
      options: ['Mosiah 4:19', 'Mosiah 2:17', 'Alma 34:32', 'Moroni 7:47'], correct: 0,
      ref: 'Mosiah 4:19', note: 'King Benjamin on our dependence on God.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "O that I were an angel, and could have the wish of mine heart."',
      options: ['Alma 29:1', 'Alma 5:46', 'Mosiah 28:3', '2 Nephi 4:17'], correct: 0,
      ref: 'Alma 29:1', note: 'Alma\u2019s desire to cry repentance to all the world.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...there was no contention in the land, because of the love of God."',
      options: ['4 Nephi 1:15', '3 Nephi 11:29', 'Mosiah 18:21', 'Moroni 7:47'], correct: 0,
      ref: '4 Nephi 1:15', note: 'The peaceful Nephite society after Christ\u2019s visit.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...all things which are good cometh of God..."',
      options: ['Moroni 7:12', 'Moroni 10:4', 'Alma 32:21', 'Ether 12:27'], correct: 0,
      ref: 'Moroni 7:12', note: 'Mormon teaching how to discern good from evil.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...ye shall have these things, and the greater things shall be made manifest."',
      options: ['3 Nephi 26:9', 'Ether 4:7', 'Mormon 9:21', 'Alma 12:10'], correct: 0,
      ref: '3 Nephi 26:9', note: 'The Lord reveals greater things to those who believe the lesser.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...I would that ye should be steadfast and immovable, always abounding in good works."',
      options: ['Mosiah 5:15', 'Alma 1:25', '2 Nephi 31:20', 'Moroni 7:3'], correct: 0,
      ref: 'Mosiah 5:15', note: 'King Benjamin\u2019s closing exhortation.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...nourish the word... it will get root..." (the seed of faith)',
      options: ['Alma 32:41', 'Alma 32:21', 'Jacob 5:71', '1 Nephi 8:11'], correct: 0,
      ref: 'Alma 32:41', note: 'Alma\u2019s allegory of nourishing the seed (the word) into a tree of life.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...the Spirit of the Lord doth not dwell in unholy temples."',
      options: ['Alma 7:21', 'Helaman 4:24', 'Mosiah 2:37', '1 Corinthians 3:16'], correct: 0,
      ref: 'Helaman 4:24', note: 'A warning that the Nephites lost strength as they lost the Spirit.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...he shall rise from the dead... that he may bring salvation unto all."',
      options: ['2 Nephi 2:8', 'Alma 7:11', 'Mosiah 15:20', '3 Nephi 27:14'], correct: 0,
      ref: '2 Nephi 2:8', note: 'Lehi testifies of the resurrection and grace of the Holy Messiah.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...they were called the people of God..." (after baptism at the waters of Mormon)',
      options: ['Mosiah 18:17', 'Alma 5:62', '3 Nephi 12:1', 'Moroni 6:4'], correct: 0,
      ref: 'Mosiah 18:17', note: 'Alma baptized believers at the waters of Mormon and organized the church.'
    }

  ];



  // Category metadata for the UI
  const TRIVIA_CATEGORIES = [
    { id: 'facts',          label: 'Facts & Events',   icon: '📖', desc: 'People, places, and events' },
    { id: 'who_spoke',      label: 'Who Spoke It?',    icon: '🗣️', desc: 'Identify who said the words' },
    { id: 'verse_location', label: 'Where\u2019s the Verse?', icon: '🔎', desc: 'Find the reference' },
    { id: 'complete_verse', label: 'Complete the Verse', icon: '✍️', desc: 'Fill in the missing word' },
    { id: 'reference_match', label: 'Reference Match', icon: '🎯', desc: 'Match the statement to its reference' }
  ];

  // Build a randomized set of questions for a game, drawing only from the
  // selected category ids (or all if none specified). Each is normalized
  // with shuffled options where applicable.
  // Stable id for a trivia item (so the no-repeat tracker can remember it).
  function triviaItemId(item, idx) {
    return item.category + ':' + idx;
  }

  // No-repeat tracking, scoped per category so each category cycles through all
  // of its questions before any repeat (anti-memorization). Stored in
  // localStorage under scripture-scholar-trivseen-<scope>-<category>.
  function trivSeenKey(scope, category) {
    return 'scripture-scholar-trivseen-' + (scope || 'mp') + '-' + category;
  }
  function trivGetSeen(scope, category) {
    try { const raw = localStorage.getItem(trivSeenKey(scope, category)); return raw ? JSON.parse(raw) : []; }
    catch (e) { return []; }
  }
  function trivSetSeen(scope, category, ids) {
    try { localStorage.setItem(trivSeenKey(scope, category), JSON.stringify(ids)); } catch (e) {}
  }

  // Picks `count` questions, applying no-repeat per category. `scope` separates
  // trackers (e.g. 'mp' for multiplayer, 'refmatch' for the mini-game) so the
  // same category can cycle independently in different games.
  function buildTriviaSet(count, categoryIds, scope) {
    scope = scope || 'mp';
    const n = count || 10;
    // Group the eligible pool by category, each item tagged with its stable id.
    const wantCats = (categoryIds && categoryIds.length) ? categoryIds : null;
    const byCat = {};
    TRIVIA_BANK.forEach((q, idx) => {
      if (wantCats && wantCats.indexOf(q.category) === -1) return;
      (byCat[q.category] = byCat[q.category] || []).push({ item: q, id: triviaItemId(q, idx) });
    });
    const cats = Object.keys(byCat);
    if (!cats.length) return [];

    // For each category, pick its share of fresh (unseen) questions.
    // Distribute `n` across the chosen categories as evenly as possible.
    const perCat = {};
    cats.forEach((c, i) => { perCat[c] = Math.floor(n / cats.length); });
    let remainder = n - cats.length * Math.floor(n / cats.length);
    // hand out the remainder to random categories
    const shuffledCats = trivShuffle(cats.slice());
    for (let i = 0; i < remainder; i++) perCat[shuffledCats[i % shuffledCats.length]]++;

    let picked = [];
    cats.forEach(c => {
      picked = picked.concat(trivPickFromCategory(byCat[c], perCat[c], scope, c));
    });
    // Final shuffle so categories are interleaved, not grouped.
    picked = trivShuffle(picked);
    return picked.slice(0, n).map(p => normalizeTriviaItem(p.item));
  }

  // Picks `count` unseen items from one category's pool, with cycle restart
  // and seam smoothing (carries over the last batch so it can't repeat right
  // across the restart boundary) — same proven pattern as the fact bank.
  function trivPickFromCategory(poolWithIds, count, scope, category) {
    if (count <= 0 || !poolWithIds.length) return [];
    let seen = trivGetSeen(scope, category);
    let remaining = poolWithIds.filter(p => seen.indexOf(p.id) === -1);
    if (remaining.length < count) {
      // Exhausted — restart the cycle, carrying over the last batch as excluded.
      const carryCount = Math.min(count, Math.max(0, seen.length));
      const carryOver = seen.slice(-carryCount);
      seen = carryOver.slice();
      remaining = poolWithIds.filter(p => carryOver.indexOf(p.id) === -1);
    }
    const chosen = trivShuffle(remaining).slice(0, Math.min(count, remaining.length));
    trivSetSeen(scope, category, seen.concat(chosen.map(c => c.id)));
    return chosen;
  }

  function trivShuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Normalize an item into a consistent runtime shape with shuffled options.
  function normalizeTriviaItem(item) {
    if (item.type === 'complete_verse') {
      // Build word-card choices: the answer + distractors, shuffled
      const words = [item.answer].concat(item.distractors || []);
      for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
      }
      return {
        type: 'complete_verse', category: item.category,
        before: item.before, after: item.after,
        answer: item.answer, acceptable: (item.acceptable || [item.answer.toLowerCase()]),
        words: words, correctWord: item.answer,
        ref: item.ref, note: item.note
      };
    }
    // multiple_choice, who_spoke, verse_location all share the options shape
    const opts = item.options.map((text, i) => ({ text, isCorrect: i === item.correct }));
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return {
      type: item.type, category: item.category,
      q: item.q,
      options: opts.map(o => o.text),
      correct: opts.findIndex(o => o.isCorrect),
      ref: item.ref, note: item.note
    };
  }
