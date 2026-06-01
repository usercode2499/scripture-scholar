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
      q: '"...when ye are in the service of your fellow beings ye are only in the service of your God."',
      options: ['King Benjamin', 'King Mosiah', 'Alma', 'Abinadi'], correct: 0,
      ref: 'Mosiah 2:17',
      note: 'King Benjamin taught this from his tower, near the end of his life, to his gathered people.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...I have been born of God." (spoken after an angel\'s rebuke and three days unconscious)',
      options: ['Alma the Younger', 'King Lamoni', 'Corianton', 'Helaman'], correct: 0,
      ref: 'Mosiah 27 / Alma 36',
      note: 'Alma the Younger, after being struck down by an angel, repented and was "born of God," then preached all his days.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"...I would that ye should remember, and always retain in remembrance, the greatness of God..."',
      options: ['King Benjamin', 'Lehi', 'Nephi', 'King Mosiah'], correct: 0,
      ref: 'Mosiah 4:11',
      note: 'King Benjamin counseled his people to always remember God\'s greatness and their own nothingness before Him.'
    },
    {
      type: 'who_spoke', category: 'who_spoke',
      q: '"Behold, I am Jesus Christ, whom the prophets testified shall come into the world."',
      options: ['Jesus Christ', 'An angel', 'Nephi', 'Moroni'], correct: 0,
      ref: '3 Nephi 11:10',
      note: 'The resurrected Savior declared this as He descended to the Nephites at the temple in Bountiful.'
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
      q: '"...by small and simple things are great things brought to pass..."',
      options: ['Alma 37:6', '1 Nephi 3:7', 'Mosiah 4:11', 'Ether 12:27'], correct: 0,
      ref: 'Alma 37:6',
      note: 'Alma taught his son Helaman this principle while entrusting him with the sacred records.'
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
      before: 'For behold, this is my work and my glory—to bring to pass the immortality and eternal',
      after: ' of man.',
      answer: 'life',
      acceptable: ['life'],
      distractors: ['joy', 'glory', 'salvation'],
      ref: 'Moses 1:39',
      note: 'Though from the Pearl of Great Price, this is one of the most beloved scriptures on God\'s purpose. (Bonus verse)'
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
    }

  ];

  // Category metadata for the UI
  const TRIVIA_CATEGORIES = [
    { id: 'facts',          label: 'Facts & Events',   icon: '📖', desc: 'People, places, and events' },
    { id: 'who_spoke',      label: 'Who Spoke It?',    icon: '🗣️', desc: 'Identify who said the words' },
    { id: 'verse_location', label: 'Where\u2019s the Verse?', icon: '🔎', desc: 'Find the reference' },
    { id: 'complete_verse', label: 'Complete the Verse', icon: '✍️', desc: 'Fill in the missing word' }
  ];

  // Build a randomized set of questions for a game, drawing only from the
  // selected category ids (or all if none specified). Each is normalized
  // with shuffled options where applicable.
  function buildTriviaSet(count, categoryIds) {
    let pool = TRIVIA_BANK.slice();
    if (categoryIds && categoryIds.length) {
      pool = pool.filter(q => categoryIds.indexOf(q.category) !== -1);
    }
    // shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const chosen = pool.slice(0, count || 10);
    return chosen.map(normalizeTriviaItem);
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
