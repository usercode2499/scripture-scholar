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

    {
      type: 'multiple_choice', category: 'facts',
      q: 'How were Nephi and Lehi protected when an army came to slay them in a Lamanite prison?',
      options: ['They were encircled by fire', 'An angel freed them', 'The walls fell down', 'They turned invisible'], correct: 0,
      ref: 'Helaman 5:23', note: 'Nephi and Lehi stood as if in the midst of fire, unburned, and the Lamanites dared not touch them.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'About how many Lamanites were baptized after Nephi and Lehi preached in Zarahemla?',
      options: ['Eight thousand', 'Two thousand', 'Five hundred', 'Twelve'], correct: 0,
      ref: 'Helaman 5:19', note: 'Eight thousand Lamanites were baptized, convinced of the wickedness of their fathers\u2019 traditions.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Which Nephite dissenter, imprisoned with the Lamanites, told them to cry unto the voice to remove the darkness?',
      options: ['Aminadab', 'Amalickiah', 'Zeezrom', 'Korihor'], correct: 0,
      ref: 'Helaman 5:39', note: 'Aminadab, a former Nephite, saw the angels and taught the Lamanites to repent and cry to God.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What overshadowed the people while Nephi and Lehi were protected in prison?',
      options: ['A cloud of darkness', 'A great flood', 'A swarm of insects', 'A pillar of smoke'], correct: 0,
      ref: 'Helaman 5:28', note: 'A cloud of darkness overshadowed the people until they repented and were filled with the Holy Ghost.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who was the first person Alma baptized at the waters of Mormon?',
      options: ['Helam', 'Limhi', 'Gideon', 'Amulek'], correct: 0,
      ref: 'Mosiah 18:12\u201314', note: 'Alma baptized Helam first, and Alma himself was buried in the water with him.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What did Lehi see in his dream that was filthy, leading to the great and spacious building?',
      options: ['A river of filthy water', 'A pit of fire', 'A field of thorns', 'A dark forest'], correct: 0,
      ref: '1 Nephi 8:32', note: 'A river of filthy water ran along the rod of iron; many were drowned or wandered off in forbidden paths.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What was the great and spacious building in Lehi\u2019s dream a symbol of?',
      options: ['The pride of the world', 'The temple of God', 'The city of Jerusalem', 'The kingdom of heaven'], correct: 0,
      ref: '1 Nephi 11:36', note: 'The great and spacious building represented the pride and vain imaginations of the world; it fell.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'How long did the Jaredite barges travel upon the waters to reach the promised land?',
      options: ['344 days', '40 days', '8 years', '120 days'], correct: 0,
      ref: 'Ether 6:11', note: 'The Jaredites were upon the water 344 days, driven by the wind toward the promised land.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who were the last two Jaredite leaders whose armies destroyed each other?',
      options: ['Coriantumr and Shiz', 'Nephi and Laman', 'Amlici and Alma', 'Teancum and Ammoron'], correct: 0,
      ref: 'Ether 15', note: 'The Jaredite nation was destroyed in civil war; Coriantumr finally beheaded Shiz.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What did the people build at the time the Jaredites\u2019 languages were confounded?',
      options: ['A great tower', 'A great ship', 'A temple', 'A wall'], correct: 0,
      ref: 'Ether 1:33', note: 'At the great tower the Lord confounded the language of the people; the brother of Jared was spared.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who was the chief captain over the Lamanites that Moroni\u2019s forces defeated, a Nephite dissenter?',
      options: ['Zerahemnah', 'Lamoni', 'Antipus', 'Pahoran'], correct: 0,
      ref: 'Alma 43:5', note: 'Zerahemnah led the Lamanite armies; Moroni\u2019s armor-clad soldiers prevailed at the river Sidon.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What two things did Moroni\u2019s armies wear that the Lamanites did not, giving them advantage?',
      options: ['Armor and shields', 'Swords and bows', 'Helmets only', 'Cloaks and sandals'], correct: 0,
      ref: 'Alma 43:19', note: 'Moroni had prepared his people with breastplates, arm-shields, and head-shields against the naked Lamanites.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who was the Lamanite servant-king whom Ammon served, later struck down as if dead by the Spirit?',
      options: ['Lamoni', 'Amalickiah', 'Lehonti', 'Ammoron'], correct: 0,
      ref: 'Alma 18:42', note: 'King Lamoni fell as if dead under the power of God after Ammon taught him, then rose converted.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Whom did Amalickiah have poisoned by degrees to seize the Lamanite throne?',
      options: ['Lehonti', 'Lamoni', 'Ammoron', 'Zerahemnah'], correct: 0,
      ref: 'Alma 47:18', note: 'Amalickiah had Lehonti poisoned little by little, then took command and the throne by treachery.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What did the people of Limhi discover that recorded a destroyed people (the Jaredites)?',
      options: ['Twenty-four gold plates', 'A brass ball', 'A stone altar', 'A sealed book'], correct: 0,
      ref: 'Mosiah 8:9', note: 'A search party found 24 gold plates among ruins and bones; Mosiah later translated them (book of Ether).'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Who translated the 24 gold plates using the interpreters, becoming a seer?',
      options: ['King Mosiah', 'King Benjamin', 'Alma', 'Limhi'], correct: 0,
      ref: 'Mosiah 28:11\u201317', note: 'King Mosiah translated the Jaredite record by means of the two seer stones (interpreters).'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'After Christ\u2019s visit, how many years did the people live in peace with all things common among them?',
      options: ['About 200 years', 'About 40 years', 'About 1000 years', 'About 10 years'], correct: 0,
      ref: '4 Nephi 1:22', note: 'For about two hundred years the Nephites and Lamanites lived in righteousness with no contention.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'Which prophet-leader gathered the Nephites to the land of Cumorah for the final battle?',
      options: ['Mormon', 'Moroni', 'Nephi', 'Helaman'], correct: 0,
      ref: 'Mormon 6:2', note: 'Mormon gathered all his people to the land of Cumorah for the last great battle against the Lamanites.'
    },
    {
      type: 'multiple_choice', category: 'facts',
      q: 'What did the Nephites name the place where they first pitched tents after crossing the sea?',
      options: ['The land of first inheritance', 'Bountiful', 'Zarahemla', 'Nephi'], correct: 0,
      ref: '2 Nephi 5 / Alma 22:28', note: 'The place of their first landing was later called the land of their first inheritance.'
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

    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...we will be true at all times... even if it so be that we die..."',
      options: ['The stripling warriors', 'The sons of Mosiah', 'The people of Ammon', 'The Three Nephites'], correct: 0,
      ref: 'Alma 53:20', note: 'Helaman\u2019s two thousand young warriors were exceedingly valiant, true, and faithful.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...I have lived to fulfil the commandment of God... do as ye have done."',
      options: ['Lehi', 'King Benjamin', 'Mormon', 'Alma the Elder'], correct: 1,
      ref: 'Mosiah 2:31', note: 'King Benjamin counseled his people to keep the commandments and be blessed.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...as the Lord liveth, and as we live, we will not deliver up our brethren to be slain..."',
      options: ['The people of Ammon', 'The Nephite judges', 'The Lamanite kings', 'The Gadianton robbers'], correct: 0,
      ref: 'Alma 27:7', note: 'Ammon\u2019s converts (people of Anti-Nephi-Lehi) were offered protection in the land of Jershon.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"Yea, come unto Christ, and be perfected in him..."',
      options: ['Moroni', 'Mormon', 'Nephi', 'Jacob'], correct: 0,
      ref: 'Moroni 10:32', note: 'Moroni\u2019s final exhortation to deny ungodliness and be perfected in Christ.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...I, Nephi, was constrained by the Spirit that I should slay Laban..."',
      options: ['Nephi', 'Sam', 'Zoram', 'Lehi'], correct: 0,
      ref: '1 Nephi 4:10', note: 'Nephi recounted how the Spirit constrained him to slay Laban to obtain the brass plates.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...he hath given them knowledge... and they have waxed strong in battle..."',
      options: ['Mormon (of his soldiers)', 'Moroni', 'Helaman', 'Captain Teancum'], correct: 0,
      ref: 'Mormon 2:24', note: 'Mormon led the Nephite armies and recorded their struggles in the final wars.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"And now my son, I have somewhat to say concerning the thing which our fathers call a ball, or director..."',
      options: ['Alma (to Helaman)', 'Lehi (to Nephi)', 'King Mosiah', 'Nephi (to Sam)'], correct: 0,
      ref: 'Alma 37:38', note: 'Alma taught Helaman that the Liahona worked by faith, a type of the word of Christ.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...there shall be no more disputations among you..."',
      options: ['Jesus Christ', 'Nephi', 'Mormon', 'King Benjamin'], correct: 0,
      ref: '3 Nephi 11:28', note: 'The risen Christ taught the Nephites to end contention over points of doctrine.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...this is the desires which I desired of him \u2014 that I might be an instrument in the hands of God..."',
      options: ['Ammon', 'Aaron', 'Alma', 'Omner'], correct: 0,
      ref: 'Alma 29:9', note: 'Ammon rejoiced in being an instrument to bring souls to repentance.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...we talk of Christ, we rejoice in Christ, we preach of Christ..."',
      options: ['Nephi', 'Jacob', 'Lehi', 'Enos'], correct: 0,
      ref: '2 Nephi 25:26', note: 'Nephi taught that they wrote and prophesied of Christ so their children would know the source of forgiveness.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...wickedness never was happiness." (counsel to a wayward son)',
      options: ['Alma (to Corianton)', 'Lehi (to Laman)', 'Mosiah', 'Helaman'], correct: 0,
      ref: 'Alma 41:10', note: 'Alma corrected his son Corianton, teaching the plan of restoration and justice.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...by small and simple things are great things brought to pass..."',
      options: ['Alma (to Helaman)', 'Nephi', 'King Benjamin', 'Moroni'], correct: 0,
      ref: 'Alma 37:6', note: 'Alma taught Helaman the power of small means while entrusting him with the records.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"O Lord, wilt thou comfort my soul... that I may have success in bringing them again unto thee in Christ."',
      options: ['Alma', 'Ammon', 'Nephi', 'Mormon'], correct: 0,
      ref: 'Alma 31:31\u201332', note: 'Alma prayed for strength as he led the mission to the apostate Zoramites.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...he that diligently seeketh shall find; and the mysteries of God shall be unfolded unto them..."',
      options: ['Nephi', 'Alma', 'Jacob', 'Mormon'], correct: 1,
      ref: 'Alma 12:9 (theme)', note: 'Alma taught that those who harden not their hearts receive the greater portion of the word.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...nevertheless, Lord, thy will be done, and not ours."',
      options: ['The brother of Jared', 'Nephi', 'Lehi', 'Jared'], correct: 0,
      ref: 'Ether 3:2 (theme)', note: 'The brother of Jared approached the Lord with humility before the sixteen stones were touched.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...ye are eternally indebted to your heavenly Father..."',
      options: ['King Benjamin', 'King Mosiah', 'Alma', 'Lehi'], correct: 0,
      ref: 'Mosiah 2:34', note: 'King Benjamin taught the people of their debt to God for life and blessings.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"Behold, I am Nephi. I am a man of God, being commanded of him..."',
      options: ['Nephi (son of Helaman)', 'Nephi (son of Lehi)', 'Mormon', 'Samuel'], correct: 0,
      ref: 'Helaman 7\u20138', note: 'Nephi, son of Helaman, prayed on his tower and revealed the murder of the chief judge.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...for behold, this life is the time for men to prepare to meet God..."',
      options: ['Amulek', 'Alma', 'Abinadi', 'Nephi'], correct: 0,
      ref: 'Alma 34:32', note: 'Amulek pleaded with the Zoramites not to procrastinate the day of their repentance.'
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

    {
      type: 'verse_location', category: 'verse_location',
      q: '"...he that hath eternal life is rich..."',
      options: ['2 Nephi 9:18', 'Jacob 2:18', 'Alma 1:30', 'Mosiah 4:19'], correct: 1,
      ref: 'Jacob 2:18', note: 'Jacob taught the Nephites to seek the kingdom of God before riches.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...the Spirit of the Lord doth not dwell in unholy temples..."',
      options: ['Helaman 4:24', 'Alma 7:21', 'Mosiah 2:37', '1 Nephi 17:34'], correct: 0,
      ref: 'Helaman 4:24', note: 'The Nephites lost strength as they drove the Spirit from among them.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...come unto Christ, and lay hold upon every good gift..."',
      options: ['Moroni 10:30', 'Moroni 7:19', 'Ether 12:4', 'Mosiah 5:2'], correct: 0,
      ref: 'Moroni 10:30', note: 'Part of Moroni\u2019s closing exhortation in the Book of Mormon.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...all things which are good cometh of God..."',
      options: ['Moroni 7:12', 'Alma 5:40', 'Moroni 7:16', '2 Nephi 2:27'], correct: 0,
      ref: 'Moroni 7:12', note: 'Mormon taught how to discern that which is of God from that which is of the devil.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...they were desirous to be baptized as a witness... that they had entered into a covenant..."',
      options: ['Mosiah 18:10', 'Alma 7:15', '3 Nephi 11:23', 'Moroni 6:2'], correct: 0,
      ref: 'Mosiah 18:10', note: 'Alma taught the people at the waters of Mormon about the baptismal covenant.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...the worth of souls is great in the sight of God..."',
      options: ['Alma 39:17 (theme)', 'Mosiah 28:3', '2 Nephi 26:24', 'Jacob 5:74'], correct: 0,
      ref: 'Alma 39 / theme', note: 'The Book of Mormon repeatedly affirms God\u2019s concern for every soul.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...whatsoever thing persuadeth men to do good is of me..."',
      options: ['Ether 4:12', 'Moroni 7:16', '2 Nephi 33:10', 'Alma 5:40'], correct: 0,
      ref: 'Ether 4:12', note: 'The Lord declared that all good persuasion comes from Him.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...I would that ye should impart of your substance to the poor..."',
      options: ['Mosiah 4:26', 'Mosiah 18:27', 'Alma 1:27', '3 Nephi 13:1'], correct: 0,
      ref: 'Mosiah 4:26', note: 'King Benjamin taught retaining a remission of sins by caring for the poor.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...they were called the people of God from that time forward..."',
      options: ['Mosiah 18:17', 'Alma 5:62', '3 Nephi 26:21', 'Moroni 6:4'], correct: 0,
      ref: 'Mosiah 18:17', note: 'Those baptized at the waters of Mormon were called the church and people of God.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...I will prepare the way before you, if it so be that ye shall keep my commandments..."',
      options: ['1 Nephi 17:13', '1 Nephi 3:7', '2 Nephi 1:20', 'Mosiah 2:22'], correct: 0,
      ref: '1 Nephi 17:13', note: 'The Lord promised to be the Nephites\u2019 light and guide in the wilderness.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...inasmuch as ye shall keep my commandments ye shall prosper in the land..."',
      options: ['2 Nephi 1:20', 'Mosiah 1:7', 'Alma 9:13', 'Omni 1:6'], correct: 0,
      ref: '2 Nephi 1:20', note: 'A recurring Book of Mormon promise, first given to Lehi\u2019s family.'
    },

    {
      type: 'verse_location', category: 'verse_location',
      q: '"...he that is filthy shall be filthy still..."',
      options: ['Mormon 9:14', '2 Nephi 9:16', 'Alma 7:21', 'Moroni 10:34'], correct: 0,
      ref: 'Mormon 9:14', note: 'Moroni on the unchanging state of souls at the final judgment.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...are ye stripped of pride? I say unto you, if ye are not ye are not prepared to meet God."',
      options: ['Alma 5:28', 'Alma 5:14', 'Mosiah 3:19', 'Moroni 7:6'], correct: 0,
      ref: 'Alma 5:28', note: 'Alma\u2019s probing questions to the people of Zarahemla.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...the Lord cannot look upon sin with the least degree of allowance..."',
      options: ['Alma 45:16', '1 Nephi 10:21', 'Mosiah 2:38', 'Moroni 9:6'], correct: 0,
      ref: 'Alma 45:16', note: 'Alma\u2019s prophecy and blessing upon the land.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...they were firm, and steadfast, and immovable in keeping the commandments of God..."',
      options: ['Alma 1:25', '3 Nephi 6:14', 'Mosiah 5:15', 'Helaman 15:8'], correct: 0,
      ref: 'Alma 1:25', note: 'The faithful endured persecution after Nehor\u2019s influence.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...the Lord God doth work by means to bring about his great and eternal purposes..."',
      options: ['Alma 37:7', 'Alma 37:6', '1 Nephi 9:6', '2 Nephi 27:23'], correct: 0,
      ref: 'Alma 37:7', note: 'Alma taught Helaman that the Lord works through small and simple means.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...do not suppose... that ye shall be carried to heaven... and there sit down..."',
      options: ['Alma 5:6 (theme)', 'Alma 34:32', '2 Nephi 9:27', 'Mosiah 4:30'], correct: 0,
      ref: 'Alma 5 / theme', note: 'Alma warned against complacency in seeking salvation.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...the Lord granteth unto all nations... to teach his word..."',
      options: ['Alma 29:8', '2 Nephi 29:12', 'Mosiah 28:3', 'Moroni 7:16'], correct: 0,
      ref: 'Alma 29:8', note: 'Alma taught the Lord\u2019s word goes to all nations in their own tongue.'
    },
    {
      type: 'verse_location', category: 'verse_location',
      q: '"...by their fruits ye shall know them..." (as taught at the temple in Bountiful)',
      options: ['3 Nephi 14:20', '3 Nephi 11:10', 'Moroni 7:5', 'Alma 5:40'], correct: 0,
      ref: '3 Nephi 14:20', note: 'The risen Christ taught the Nephites as in the Sermon on the Mount.'
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

    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'But behold, I say unto you that ye must pray always, and not',
      after: '...',
      answer: 'faint',
      acceptable: ['faint'],
      distractors: ['cease', 'doubt', 'tire'],
      ref: '2 Nephi 32:9', note: 'Nephi taught to pray always so the Lord will consecrate our performance.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'Behold, I am Jesus Christ, whom the prophets testified shall come into the',
      after: '.',
      answer: 'world',
      acceptable: ['world'],
      distractors: ['flesh', 'temple', 'land'],
      ref: '3 Nephi 11:10', note: 'The risen Christ announced Himself to the Nephites at the temple in Bountiful.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'O remember, my son, and learn wisdom in thy',
      after: '...',
      answer: 'youth',
      acceptable: ['youth'],
      distractors: ['heart', 'days', 'home'],
      ref: 'Alma 37:35', note: 'Alma\u2019s counsel to Helaman.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'See that ye bridle all your',
      after: ', that ye may be filled with love...',
      answer: 'passions',
      acceptable: ['passions'],
      distractors: ['desires', 'thoughts', 'fears'],
      ref: 'Alma 38:12', note: 'Alma\u2019s counsel to his son Shiblon.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And ye shall offer for a sacrifice unto me a broken heart and a contrite',
      after: '.',
      answer: 'spirit',
      acceptable: ['spirit'],
      distractors: ['soul', 'mind', 'offering'],
      ref: '3 Nephi 9:20', note: 'The Lord taught the new covenant sacrifice after His crucifixion.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'Behold, I have given unto you my gospel, and this is the gospel which I have given unto you \u2014 that I came into the world to do the will of my',
      after: '.',
      answer: 'Father',
      acceptable: ['father'],
      distractors: ['God', 'people', 'Maker'],
      ref: '3 Nephi 27:13', note: 'Christ declared His gospel to the Nephite disciples.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And whatsoever thing persuadeth men to do good is of',
      after: '.',
      answer: 'me',
      acceptable: ['me'],
      distractors: ['God', 'heaven', 'Christ'],
      ref: 'Ether 4:12', note: 'The Lord declared that all good persuasion comes from Him.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And it came to pass that I, Nephi, did make many',
      after: ' out of wood...',
      answer: 'arrows',
      acceptable: ['arrows'],
      distractors: ['ships', 'tools', 'plates'],
      ref: '1 Nephi 16:23', note: 'After breaking his bow, Nephi made a new bow and arrows to obtain food.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And he commanded them that they should teach nothing save it were the things which he had',
      after: '...',
      answer: 'taught',
      acceptable: ['taught'],
      distractors: ['written', 'spoken', 'commanded'],
      ref: 'Mosiah 18:19', note: 'Alma instructed the priests at the waters of Mormon.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And now, my beloved brethren, I would that ye should come unto Christ, who is the Holy One of',
      after: '...',
      answer: 'Israel',
      acceptable: ['israel'],
      distractors: ['God', 'heaven', 'Zion'],
      ref: 'Omni 1:26', note: 'Amaleki exhorted all to come unto Christ and offer their whole souls.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And now I would that ye should be humble, and be submissive and',
      after: '...',
      answer: 'gentle',
      acceptable: ['gentle'],
      distractors: ['patient', 'meek', 'kind'],
      ref: 'Alma 7:23', note: 'Alma listed the virtues the people of Gideon should cultivate.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And they did all declare unto the people the selfsame thing \u2014 that their hearts had been changed; that they had no more desire to do',
      after: '.',
      answer: 'evil',
      acceptable: ['evil'],
      distractors: ['sin', 'wrong', 'harm'],
      ref: 'Mosiah 5:2', note: 'King Benjamin\u2019s people experienced a mighty change of heart.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'For behold, my brethren, it is given unto you to',
      after: ' good from evil...',
      answer: 'judge',
      acceptable: ['judge'],
      distractors: ['know', 'discern', 'tell'],
      ref: 'Moroni 7:15', note: 'Mormon taught that the Light of Christ helps us judge good from evil.'
    },

    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And now... are ye stripped of',
      after: '? I say unto you, if ye are not ye are not prepared to meet God.',
      answer: 'pride',
      acceptable: ['pride'],
      distractors: ['envy', 'sin', 'fear'],
      ref: 'Alma 5:28', note: 'Alma\u2019s searching question to the people of Zarahemla.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'For behold, the Lord God doth work by',
      after: ' to bring about his great and eternal purposes...',
      answer: 'means',
      acceptable: ['means'],
      distractors: ['power', 'wonders', 'angels'],
      ref: 'Alma 37:7', note: 'Alma to Helaman on small and simple means.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And they were firm, and steadfast, and',
      after: ' in keeping the commandments of God...',
      answer: 'immovable',
      acceptable: ['immovable'],
      distractors: ['faithful', 'diligent', 'humble'],
      ref: 'Alma 1:25', note: 'The faithful Nephites endured persecution.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'And whoso believeth in me, and is',
      after: ', the same shall be saved...',
      answer: 'baptized',
      acceptable: ['baptized'],
      distractors: ['faithful', 'humble', 'cleansed'],
      ref: '3 Nephi 11:33', note: 'Christ declared His doctrine of faith and baptism to the Nephites.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'For we labor diligently to write, to persuade our children... to believe in',
      after: '...',
      answer: 'Christ',
      acceptable: ['christ'],
      distractors: ['God', 'him', 'truth'],
      ref: '2 Nephi 25:23', note: 'Nephi: it is by grace we are saved, after all we can do.'
    },
    {
      type: 'complete_verse', category: 'complete_verse',
      before: 'Behold, I would exhort you that when ye shall read these things... that ye would remember how',
      after: ' the Lord hath been unto the children of men...',
      answer: 'merciful',
      acceptable: ['merciful'],
      distractors: ['good', 'patient', 'gracious'],
      ref: 'Moroni 10:3', note: 'Moroni\u2019s preface to his promise about the Book of Mormon.'
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
,
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "O remember, my son, and learn wisdom in thy youth."',
      options: ['Alma 37:35', 'Alma 38:12', 'Mosiah 1:16', 'Helaman 5:9'], correct: 0,
      ref: 'Alma 37:35', note: 'Alma to Helaman.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "See that ye bridle all your passions, that ye may be filled with love."',
      options: ['Alma 38:12', 'Alma 37:35', 'Moroni 7:48', '2 Nephi 9:51'], correct: 0,
      ref: 'Alma 38:12', note: 'Alma to his son Shiblon.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Behold, I am Jesus Christ, whom the prophets testified shall come into the world."',
      options: ['3 Nephi 11:10', '3 Nephi 27:13', 'Mosiah 15:1', 'Alma 7:11'], correct: 0,
      ref: '3 Nephi 11:10', note: 'Christ\u2019s appearance to the Nephites.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "He that hath eternal life is rich."',
      options: ['Jacob 2:18', '2 Nephi 9:18', 'Mosiah 4:19', 'Alma 1:30'], correct: 0,
      ref: 'Jacob 2:18', note: 'Jacob taught to seek the kingdom of God before riches.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Whatsoever thing persuadeth men to do good is of me."',
      options: ['Ether 4:12', 'Moroni 7:16', '2 Nephi 33:10', 'Alma 5:40'], correct: 0,
      ref: 'Ether 4:12', note: 'The Lord on all good coming from Him.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Inasmuch as ye shall keep my commandments ye shall prosper in the land."',
      options: ['2 Nephi 1:20', '1 Nephi 2:20', 'Mosiah 1:7', 'Alma 9:13'], correct: 0,
      ref: '2 Nephi 1:20', note: 'A recurring promise to Lehi\u2019s descendants.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "I, Nephi, was constrained by the Spirit that I should slay Laban."',
      options: ['1 Nephi 4:10', '1 Nephi 3:7', '1 Nephi 16:23', '2 Nephi 5:19'], correct: 0,
      ref: '1 Nephi 4:10', note: 'Nephi obtaining the brass plates.'
    },

    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "Behold, here are the waters of Mormon... what have you against being baptized?"',
      options: ['Mosiah 18:8', 'Mosiah 18:17', 'Alma 5:14', '3 Nephi 11:23'], correct: 0,
      ref: 'Mosiah 18:8', note: 'Alma invited believers to baptism at the waters of Mormon.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "And now... are ye stripped of pride? ...are ye stripped of envy?"',
      options: ['Alma 5:28', 'Alma 5:14', 'Mosiah 3:19', 'Moroni 7:45'], correct: 0,
      ref: 'Alma 5:28', note: 'Alma\u2019s searching questions to the people of Zarahemla.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...the Lord God prepareth the way..." (small means)',
      options: ['1 Nephi 3:7', '1 Nephi 17:3', '2 Nephi 5:19', 'Mosiah 1:7'], correct: 1,
      ref: '1 Nephi 17:3', note: 'The Lord nourishes and strengthens those who keep His commandments.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...they did look forward to the coming of Christ..."',
      options: ['Jarom 1:11', 'Enos 1:8', 'Omni 1:26', 'Jacob 4:4'], correct: 3,
      ref: 'Jacob 4:4', note: 'The Nephite prophets knew of Christ and rejoiced in His coming.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...feast upon his love..." (Jacob exhorting his people)',
      options: ['Jacob 3:2', 'Jacob 2:18', '2 Nephi 9:51', 'Alma 5:14'], correct: 0,
      ref: 'Jacob 3:2', note: 'Jacob comforted the pure in heart to receive the pleasing word of God.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...the Lord cannot look upon sin with the least degree of allowance."',
      options: ['Alma 45:16', 'Mosiah 3:19', '1 Nephi 10:21', 'Moroni 9:6'], correct: 0,
      ref: 'Alma 45:16', note: 'Alma blessed the land and warned of the consequences of sin.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...they were firm, and steadfast, and immovable in keeping the commandments..."',
      options: ['Alma 1:25', '3 Nephi 6:14', 'Helaman 15:8', 'Mosiah 5:15'], correct: 0,
      ref: 'Alma 1:25', note: 'The faithful Nephites remained steadfast amid persecution.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...there was a strict command throughout all the churches that there should be no persecutions..."',
      options: ['Alma 1:21', 'Mosiah 27:2', '4 Nephi 1:2', 'Alma 4:8'], correct: 1,
      ref: 'Mosiah 27:2', note: 'King Mosiah commanded equality and an end to persecutions among the people.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...the Lord doth grant unto all nations... to teach his word..."',
      options: ['Alma 29:8', 'Moroni 7:16', '2 Nephi 29:12', 'Jacob 5:3'], correct: 0,
      ref: 'Alma 29:8', note: 'Alma taught that the Lord grants His word to all nations.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...and thus we see..." (the watchword of Mormon\u2019s lessons)',
      options: ['Alma 30:60', 'Helaman 3:27', 'Alma 24:27', '3 Nephi 5:13'], correct: 2,
      ref: 'Alma 24:27', note: 'Mormon often drew lessons with the phrase \u201cthus we see.\u201d'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...he that is filthy shall be filthy still..."',
      options: ['Mormon 9:14', '2 Nephi 9:16', 'Alma 7:21', 'Moroni 10:34'], correct: 0,
      ref: 'Mormon 9:14', note: 'Moroni declared the unchanging state of the righteous and the filthy at judgment.'
    },
    {
      type: 'multiple_choice', category: 'reference_match',
      q: 'Match: "...I, Mormon, ...began to be old..." (handing the record to his son)',
      options: ['Mormon 6:6', 'Words of Mormon 1:1', 'Mormon 1:1', 'Moroni 1:1'], correct: 1,
      ref: 'Words of Mormon 1:1', note: 'Mormon wrote a few words and delivered the plates to his son Moroni.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'On what date was the Church organized?',
      options: ['April 6, 1830', 'July 24, 1847', 'April 3, 1836', 'September 22, 1827'], correct: 0,
      ref: 'Church history', note: 'The Church was formally organized on April 6, 1830, in Fayette, New York.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'How old was Joseph Smith at the time of the First Vision?',
      options: ['14', '17', '21', '12'], correct: 0,
      ref: 'Church history', note: 'Joseph Smith was 14 years old in the spring of 1820 when he received the First Vision.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'Which angel appeared to Joseph Smith in his bedroom and told him of the gold plates?',
      options: ['Moroni', 'Gabriel', 'Nephi', 'John the Baptist'], correct: 0,
      ref: 'Church history', note: 'The angel Moroni appeared to Joseph Smith on the night of September 21\u201322, 1823.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'In what year was the First Vision?',
      options: ['1820', '1830', '1805', '1844'], correct: 0,
      ref: 'Church history', note: 'The First Vision occurred in the spring of 1820 in a grove near Joseph Smith\u2019s home.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'Who restored the Aaronic Priesthood to Joseph Smith and Oliver Cowdery?',
      options: ['John the Baptist', 'Peter, James, and John', 'Moroni', 'Elijah'], correct: 0,
      ref: 'Church history', note: 'John the Baptist conferred the Aaronic Priesthood on May 15, 1829.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'Who restored the Melchizedek Priesthood?',
      options: ['Peter, James, and John', 'John the Baptist', 'Moses', 'Elias'], correct: 0,
      ref: 'Church history', note: 'The ancient Apostles Peter, James, and John conferred the Melchizedek Priesthood in 1829.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'On what date were priesthood keys restored in the Kirtland Temple by Moses, Elias, and Elijah?',
      options: ['April 3, 1836', 'April 3, 1936', 'April 6, 1830', 'May 15, 1829'], correct: 0,
      ref: 'Church history', note: 'On April 3, 1836, in the Kirtland Temple, Moses, Elias, and Elijah restored important priesthood keys.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'What was the first temple completed in this dispensation?',
      options: ['Kirtland Temple', 'Salt Lake Temple', 'Nauvoo Temple', 'St. George Temple'], correct: 0,
      ref: 'Church history', note: 'The Kirtland Temple (Ohio), dedicated in 1836, was the first temple completed in this dispensation.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'In what U.S. state did Joseph Smith receive the First Vision?',
      options: ['New York', 'Utah', 'Ohio', 'Illinois'], correct: 0,
      ref: 'Church history', note: 'The First Vision took place in a grove of trees near Palmyra, New York.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'From what hill did Joseph Smith obtain the gold plates?',
      options: ['Hill Cumorah', 'Hill Onidah', 'Mount Zion', 'Ensign Peak'], correct: 0,
      ref: 'Church history', note: 'Joseph Smith obtained the plates from the Hill Cumorah on September 22, 1827.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'About how long did it take to translate the Book of Mormon (the surviving text)?',
      options: ['About 3 months', 'About 10 years', 'About 1 week', 'About 5 years'], correct: 0,
      ref: 'Church history', note: 'The bulk of the Book of Mormon was translated in roughly three months in early 1829.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'How many witnesses (besides Joseph Smith) testified of seeing the gold plates?',
      options: ['Eleven (Three and Eight)', 'Three', 'Eight', 'Twelve'], correct: 0,
      ref: 'Church history', note: 'Three Witnesses and Eight Witnesses\u201411 in all\u2014testified of the plates.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'To which valley did Brigham Young lead the pioneers in 1847?',
      options: ['Salt Lake Valley', 'San Joaquin Valley', 'Jackson County', 'Nauvoo'], correct: 0,
      ref: 'Church history', note: 'The pioneers entered the Salt Lake Valley in July 1847 under Brigham Young.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'Who succeeded Joseph Smith as President of the Church?',
      options: ['Brigham Young', 'John Taylor', 'Wilford Woodruff', 'Joseph F. Smith'], correct: 0,
      ref: 'Church history', note: 'Brigham Young led the Church after the martyrdom of Joseph Smith in 1844.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'In what city is the worldwide headquarters of the Church?',
      options: ['Salt Lake City, Utah', 'Independence, Missouri', 'Nauvoo, Illinois', 'Palmyra, New York'], correct: 0,
      ref: 'Church history', note: 'The Church is headquartered in Salt Lake City, Utah.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'How many members are in the Quorum of the Twelve Apostles when it is full?',
      options: ['Twelve', 'Three', 'Seven', 'Fifteen'], correct: 0,
      ref: 'Church doctrine', note: 'The Quorum of the Twelve Apostles has twelve members; with the First Presidency there are 15 prophets, seers, and revelators.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'Who became President of the Church in 2018?',
      options: ['Russell M. Nelson', 'Thomas S. Monson', 'Dallin H. Oaks', 'Gordon B. Hinckley'], correct: 0,
      ref: 'Church history', note: 'Russell M. Nelson became the 17th President of the Church in January 2018.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'What is the name of the Church\u2019s worldwide service program for young members and others?',
      options: ['Missionary service', 'Pioneer trek', 'Pony Express', 'Handcart company'], correct: 0,
      ref: 'Church practice', note: 'The Church operates one of the largest volunteer missionary programs in the world.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'How many official Articles of Faith did Joseph Smith write?',
      options: ['Thirteen', 'Ten', 'Twelve', 'Seven'], correct: 0,
      ref: 'Articles of Faith', note: 'The Articles of Faith, written by Joseph Smith in 1842, number thirteen.'
    },
    {
      type: 'multiple_choice', category: 'general_knowledge',
      q: 'What sacred meeting is held twice a year where Church leaders address members worldwide?',
      options: ['General Conference', 'Stake conference', 'Ward council', 'Family home evening'], correct: 0,
      ref: 'Church practice', note: 'General Conference is held each April and October and is broadcast worldwide.'
    }

  ];





  // Category metadata for the UI
  const TRIVIA_CATEGORIES = [
    { id: 'facts',          label: 'Facts & Events',   icon: '📖', desc: 'People, places, and events' },
    { id: 'who_spoke',      label: 'Who Spoke It?',    icon: '🗣️', desc: 'Identify who said the words' },
    { id: 'verse_location', label: 'Where\u2019s the Verse?', icon: '🔎', desc: 'Find the reference' },
    { id: 'complete_verse', label: 'Complete the Verse', icon: '✍️', desc: 'Fill in the missing word' },
    { id: 'reference_match', label: 'Reference Match', icon: '🎯', desc: 'Match the statement to its reference' },
    { id: 'general_knowledge', label: 'General Knowledge', icon: '🏛️', desc: 'Church history facts (beyond the Book of Mormon)' }
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
