// ============================================================
// Scripture Scholar — Fact Bank (100+ verified Book of Mormon facts)
// ============================================================
// Shared question pool for the Fact Game (mini-game) and Group Trivia
// (multiplayer). Each entry:
//   { id, q, answer, answerType, ref, note }
// - answer: the correct answer text
// - answerType: groups answers so distractors are pulled from the SAME
//   type (person, place, group, number, object, event, title) — so wrong
//   options are always real Book of Mormon answers, never obvious fakes.
//
// The selection algorithm (in feature-fact-game.js) builds each question's
// options at runtime: the correct answer + 3 same-type distractors drawn
// from the bank, all shuffled. A no-repeat tracker ensures questions don't
// recur within a cycle until the whole bank has been seen.
//
// ALL facts verified against official Book of Mormon text / Church sources.
// ============================================================

  const FACT_BANK = [
    // ---------- 1 NEPHI ----------
    { id: 'f001', q: 'Who was the prophet father of Nephi who led his family out of Jerusalem?', answer: 'Lehi', answerType: 'person', ref: '1 Nephi 1', note: 'Lehi was warned of God to flee Jerusalem with his family before its destruction.' },
    { id: 'f002', q: 'What was the name of Nephi\u2019s mother?', answer: 'Sariah', answerType: 'person', ref: '1 Nephi 2:5', note: 'Sariah was the wife of Lehi and mother of Nephi and his brothers.' },
    { id: 'f003', q: 'Whose family did Nephi and his brothers bring with them into the wilderness?', answer: 'Ishmael', answerType: 'person', ref: '1 Nephi 7:2', note: 'The Lord commanded Lehi\u2019s sons to bring Ishmael and his family so they could marry and raise families.' },
    { id: 'f004', q: 'Who were the two eldest, rebellious sons of Lehi?', answer: 'Laman and Lemuel', answerType: 'person', ref: '1 Nephi 2:5', note: 'Laman and Lemuel often murmured against their father and Nephi.' },
    { id: 'f005', q: 'What did Lehi find that guided his family through the wilderness?', answer: 'The Liahona', answerType: 'object', ref: '1 Nephi 16:10', note: 'A round brass ball with spindles that worked by faith, found outside Lehi\u2019s tent.' },
    { id: 'f006', q: 'What did Nephi break while hunting, causing his family to suffer hunger?', answer: 'His bow', answerType: 'object', ref: '1 Nephi 16:18', note: 'Nephi made a new bow of wood and asked his father where to hunt.' },
    { id: 'f007', q: 'What did the Lord command Nephi to build to cross the ocean?', answer: 'A ship', answerType: 'object', ref: '1 Nephi 17:8', note: 'Nephi built a ship after the manner shown him by the Lord, not after the manner of men.' },
    { id: 'f008', q: 'What record did Nephi and his brothers return to Jerusalem to obtain?', answer: 'The brass plates', answerType: 'object', ref: '1 Nephi 3:3', note: 'The brass plates held the scriptures and the genealogy of their fathers.' },
    { id: 'f009', q: 'Whom did Nephi slay in order to obtain the brass plates?', answer: 'Laban', answerType: 'person', ref: '1 Nephi 4:18', note: 'Constrained by the Spirit, Nephi slew Laban that a nation might not dwindle in unbelief.' },
    { id: 'f010', q: 'Who was Laban\u2019s servant that joined Lehi\u2019s family?', answer: 'Zoram', answerType: 'person', ref: '1 Nephi 4:35', note: 'Zoram agreed to join the family and was promised freedom; his descendants were the Zoramites.' },
    { id: 'f011', q: 'What did Lehi see in his great vision, with fruit most sweet and white?', answer: 'The tree of life', answerType: 'object', ref: '1 Nephi 8:10', note: 'The tree represented the love of God; the fruit was desirable above all.' },
    { id: 'f012', q: 'In Lehi\u2019s dream, what led to the tree of life that people held to?', answer: 'An iron rod', answerType: 'object', ref: '1 Nephi 8:19', note: 'The rod of iron represented the word of God, guiding through the mists of darkness.' },
    { id: 'f013', q: 'What were the two youngest sons of Lehi, born in the wilderness?', answer: 'Jacob and Joseph', answerType: 'person', ref: '2 Nephi 2:1; 3:1', note: 'Jacob and Joseph were born during the family\u2019s journey through the wilderness.' },
    { id: 'f014', q: 'What did the family name the bountiful land by the sea where they camped?', answer: 'Bountiful', answerType: 'place', ref: '1 Nephi 17:5', note: 'They called the fruitful seashore land Bountiful because of its much fruit and honey.' },

    // ---------- 2 NEPHI / JACOB ----------
    { id: 'f015', q: 'After Lehi\u2019s death, which brother did the Lord make a ruler and teacher over his people?', answer: 'Nephi', answerType: 'person', ref: '2 Nephi 5:19', note: 'Nephi led the righteous away from Laman and Lemuel, founding the Nephites.' },
    { id: 'f016', q: 'What were the followers of Nephi\u2019s rebellious brothers called?', answer: 'Lamanites', answerType: 'group', ref: '2 Nephi 5:14', note: 'The Lamanites descended from Laman and those who followed him.' },
    { id: 'f017', q: 'Who was Nephi\u2019s younger brother that became a great priest and teacher?', answer: 'Jacob', answerType: 'person', ref: '2 Nephi 6:2', note: 'Jacob was consecrated a priest and teacher and recorded powerful sermons.' },
    { id: 'f018', q: 'What anti-Christ did Jacob confront who denied that Christ would come?', answer: 'Sherem', answerType: 'person', ref: 'Jacob 7:1', note: 'Sherem sought to lead the people astray but was confounded and confessed the truth.' },
    { id: 'f019', q: 'What allegory did Jacob preserve from the prophet Zenos?', answer: 'The allegory of the olive trees', answerType: 'event', ref: 'Jacob 5', note: 'The tame and wild olive trees represent the scattering and gathering of Israel.' },

    // ---------- ENOS / OMNI / MOSIAH ----------
    { id: 'f020', q: 'Which son of Jacob prayed all day and into the night for forgiveness?', answer: 'Enos', answerType: 'person', ref: 'Enos 1:4', note: 'Enos wrestled in mighty prayer and received a remission of his sins.' },
    { id: 'f021', q: 'What people did King Mosiah discover who had come from Jerusalem?', answer: 'The people of Zarahemla', answerType: 'group', ref: 'Omni 1:14', note: 'Also called Mulekites, they had come from Jerusalem and joined the Nephites.' },
    { id: 'f022', q: 'Which king gathered his people at the temple for a final great address?', answer: 'King Benjamin', answerType: 'person', ref: 'Mosiah 2:1', note: 'King Benjamin taught that serving others is serving God.' },
    { id: 'f023', q: 'What did King Benjamin build so all his people could hear his address?', answer: 'A tower', answerType: 'object', ref: 'Mosiah 2:7', note: 'A tower was built, and his words were also written and sent among those too far to hear.' },
    { id: 'f024', q: 'Who was the wicked king served by corrupt priests who taxed his people heavily?', answer: 'King Noah', answerType: 'person', ref: 'Mosiah 11:1', note: 'King Noah lived in riotous luxury and put the prophet Abinadi to death.' },
    { id: 'f025', q: 'Which prophet boldly testified before King Noah and was put to death by fire?', answer: 'Abinadi', answerType: 'person', ref: 'Mosiah 17:20', note: 'Abinadi sealed his testimony of Christ with his death rather than recall his words.' },
    { id: 'f026', q: 'Which young priest of King Noah believed Abinadi and recorded his words?', answer: 'Alma', answerType: 'person', ref: 'Mosiah 17:2', note: 'Alma (the elder) believed, fled, and later established the Lord\u2019s church.' },
    { id: 'f027', q: 'At what place did Alma baptize believers and organize the church?', answer: 'The waters of Mormon', answerType: 'place', ref: 'Mosiah 18:8', note: 'About 450 souls were baptized at the waters of Mormon.' },
    { id: 'f028', q: 'Who led the first group of Nephites back to the land of Nephi?', answer: 'Zeniff', answerType: 'person', ref: 'Mosiah 9:1', note: 'Zeniff led a group back, beginning the record that Limhi\u2019s people preserved.' },
    { id: 'f029', q: 'Who was the king of Limhi\u2019s people, found in bondage to the Lamanites?', answer: 'Limhi', answerType: 'person', ref: 'Mosiah 7:9', note: 'Ammon found Limhi\u2019s people in bondage; they later escaped to Zarahemla.' },

    // ---------- ALMA THE YOUNGER ----------
    { id: 'f030', q: 'What appeared to Alma the Younger and the sons of Mosiah, causing Alma to be struck dumb?', answer: 'An angel', answerType: 'object', ref: 'Mosiah 27:11', note: 'An angel spoke with a voice of thunder; Alma fell to the earth, unable to speak for three days.' },
    { id: 'f031', q: 'For how many days and nights was Alma the Younger unable to speak or move?', answer: 'Three', answerType: 'number', ref: 'Mosiah 27:23', note: 'After three days, Alma cried to Christ and was filled with joy — a mighty change of heart.' },
    { id: 'f032', q: 'How many sons of Mosiah went on missions to the Lamanites?', answer: 'Four', answerType: 'number', ref: 'Mosiah 27:34', note: 'Ammon, Aaron, Omner, and Himni became great missionaries to the Lamanites.' },
    { id: 'f033', q: 'What form of government did King Mosiah establish before his death?', answer: 'Reign of the judges', answerType: 'event', ref: 'Mosiah 29:11', note: 'Judges chosen by the voice of the people replaced the line of kings.' },
    { id: 'f034', q: 'Who introduced priestcraft among the Nephites and killed the righteous Gideon?', answer: 'Nehor', answerType: 'person', ref: 'Alma 1:7', note: 'Nehor preached for money and slew Gideon, who withstood him.' },
    { id: 'f035', q: 'Who led a rebellion seeking to be made king over the Nephites?', answer: 'Amlici', answerType: 'person', ref: 'Alma 2:2', note: 'Amlici sought the throne and led the Amlicites in war against the Nephites.' },
    { id: 'f036', q: 'Who became the missionary companion of Alma the Younger in Ammonihah?', answer: 'Amulek', answerType: 'person', ref: 'Alma 8:21', note: 'Amulek took Alma into his home and testified with him in the wicked city.' },
    { id: 'f037', q: 'Which lawyer in Ammonihah tried to trap Amulek but was later converted?', answer: 'Zeezrom', answerType: 'person', ref: 'Alma 11:21', note: 'Zeezrom offered Amulek money to deny God, but was converted and later baptized.' },
    { id: 'f038', q: 'Who became chief judge in Alma the Younger\u2019s stead when Alma gave up the seat?', answer: 'Nephihah', answerType: 'person', ref: 'Alma 4:18', note: 'Alma appointed Nephihah as chief judge so he could devote himself to preaching.' },

    // ---------- AMMON & THE SONS OF MOSIAH ----------
    { id: 'f039', q: 'Which son of Mosiah served King Lamoni and defended his flocks at the waters of Sebus?', answer: 'Ammon', answerType: 'person', ref: 'Alma 17:26', note: 'Ammon smote off the arms of those who scattered the king\u2019s flocks.' },
    { id: 'f040', q: 'Over what land did King Lamoni rule among the Lamanites?', answer: 'The land of Ishmael', answerType: 'place', ref: 'Alma 17:19', note: 'Aaron taught Lamoni was king of the land of Ishmael, part of Lamanite territory.' },
    { id: 'f041', q: 'What was the name of the Lamanite woman who ran house to house to proclaim King Lamoni\u2019s experience?', answer: 'Abish', answerType: 'person', ref: 'Alma 19:16', note: 'Abish, already converted, gathered the people to witness the miracle at Lamoni\u2019s court.' },
    { id: 'f042', q: 'What did the converted Lamanites call themselves after burying their weapons of war?', answer: 'Anti-Nephi-Lehies', answerType: 'group', ref: 'Alma 23:17', note: 'They covenanted never to shed blood again and buried their swords deep in the earth.' },
    { id: 'f043', q: 'What did the people of Ammon (converted Lamanites) bury as a covenant of peace?', answer: 'Their weapons of war', answerType: 'object', ref: 'Alma 24:17', note: 'They buried their swords rather than risk shedding blood again.' },

    // ---------- WAR CHAPTERS ----------
    { id: 'f044', q: 'Who was the Nephite captain who raised the title of liberty?', answer: 'Captain Moroni', answerType: 'person', ref: 'Alma 46:12', note: 'Moroni tore his coat and wrote on it to rally the Nephites to defend their freedom.' },
    { id: 'f045', q: 'What did Captain Moroni make from his torn coat to rally his people?', answer: 'The title of liberty', answerType: 'object', ref: 'Alma 46:12', note: 'It bore the words: In memory of our God, our religion, and freedom, and our peace, our wives, and our children.' },
    { id: 'f046', q: 'Which Nephite leader stole into the enemy camp and put a javelin through Amalickiah\u2019s heart?', answer: 'Teancum', answerType: 'person', ref: 'Alma 51:34', note: 'Teancum killed the Lamanite king Amalickiah by night, and later his brother Ammoron.' },
    { id: 'f047', q: 'Who was the Nephite dissenter that became king of the Lamanites and warred against the Nephites?', answer: 'Amalickiah', answerType: 'person', ref: 'Alma 47', note: 'Amalickiah seized the Lamanite throne by treachery and sought to enslave the Nephites.' },
    { id: 'f048', q: 'How many stripling warriors did Helaman first lead into battle?', answer: 'Two thousand', answerType: 'number', ref: 'Alma 53:22', note: 'Two thousand young men (later 2,060); not one was lost, because of their great faith.' },
    { id: 'f049', q: 'Who led the two thousand young stripling warriors?', answer: 'Helaman', answerType: 'person', ref: 'Alma 53:19', note: 'Helaman, son of Alma the Younger, led the faithful young warriors.' },
    { id: 'f050', q: 'The stripling warriors had been taught by their mothers that if they did not doubt, what would happen?', answer: 'God would deliver them', answerType: 'event', ref: 'Alma 56:47', note: 'Taught by their mothers that if they did not doubt, God would deliver them \u2014 and not one of them was slain.' },
    { id: 'f051', q: 'Who was the chief judge falsely accused, whom Captain Moroni marched to assist?', answer: 'Pahoran', answerType: 'person', ref: 'Alma 59\u201362', note: 'Moroni learned Pahoran had been driven from the judgment seat by the king-men.' },

    // ---------- HELAMAN ----------
    { id: 'f052', q: 'Who were the two righteous sons of Helaman named after their forefathers?', answer: 'Nephi and Lehi', answerType: 'person', ref: 'Helaman 5:6', note: 'Helaman named his sons Nephi and Lehi to remember the works of their first fathers.' },
    { id: 'f053', q: 'What secret band of robbers troubled the Nephites and Lamanites?', answer: 'The Gadianton robbers', answerType: 'group', ref: 'Helaman 6:18', note: 'A secret combination founded by Gadianton, bound by oaths to murder and gain power.' },
    { id: 'f054', q: 'Who founded the secret band of robbers among the Nephites?', answer: 'Gadianton', answerType: 'person', ref: 'Helaman 2:4', note: 'Gadianton was an expert in secret works of murder and robbery.' },
    { id: 'f055', q: 'Which Lamanite prophet stood on a wall and prophesied of Christ\u2019s birth?', answer: 'Samuel the Lamanite', answerType: 'person', ref: 'Helaman 13:4', note: 'When the people would not let him in the city, Samuel preached from the wall.' },
    { id: 'f056', q: 'From where did Samuel the Lamanite preach when cast out of the city?', answer: 'The city wall', answerType: 'place', ref: 'Helaman 13:4', note: 'Arrows and stones could not hit him as he prophesied from the wall.' },

    // ---------- 3 NEPHI / CHRIST ----------
    { id: 'f057', q: 'What sign was given of Christ\u2019s birth, with no darkness at night?', answer: 'A night without darkness', answerType: 'event', ref: '3 Nephi 1:15', note: 'A day, a night, and a day were as one day with no darkness, as Samuel had prophesied.' },
    { id: 'f058', q: 'At what temple-land did the resurrected Jesus Christ appear to the Nephites?', answer: 'Bountiful', answerType: 'place', ref: '3 Nephi 11:1', note: 'A multitude was gathered at the temple in the land Bountiful when Christ descended.' },
    { id: 'f059', q: 'How many disciples did Jesus choose among the Nephites?', answer: 'Twelve', answerType: 'number', ref: '3 Nephi 12:1', note: 'Jesus chose twelve disciples and gave them power to baptize.' },
    { id: 'f060', q: 'What did Jesus do for the Nephite children after teaching the people?', answer: 'He blessed them one by one', answerType: 'event', ref: '3 Nephi 17:21', note: 'Jesus wept, blessed the children one by one, and angels descended to encircle them.' },
    { id: 'f061', q: 'What ordinance did Jesus institute among the Nephites with bread and wine?', answer: 'The sacrament', answerType: 'event', ref: '3 Nephi 18:1', note: 'Jesus instituted the sacrament in remembrance of His body and blood.' },
    { id: 'f062', q: 'How many of the twelve Nephite disciples desired to remain on earth until Christ returns?', answer: 'Three', answerType: 'number', ref: '3 Nephi 28:4', note: 'Three disciples desired to tarry; their names were withheld from the record.' },

    // ---------- MORMON / MORONI / ETHER ----------
    { id: 'f063', q: 'Who abridged the large plates and led the Nephites in their final wars?', answer: 'Mormon', answerType: 'person', ref: 'Mormon 1:1', note: 'Mormon was a prophet, military leader, and the abridger of the record that bears his name.' },
    { id: 'f064', q: 'At what hill did the final great battle of the Nephites take place?', answer: 'Cumorah', answerType: 'place', ref: 'Mormon 6:2', note: 'The Nephites gathered to the land of Cumorah for their last battle.' },
    { id: 'f065', q: 'Who was the last Nephite prophet, who finished and buried the record?', answer: 'Moroni', answerType: 'person', ref: 'Mormon 8:1', note: 'Moroni, son of Mormon, finished the record and later delivered it to Joseph Smith as an angel.' },
    { id: 'f066', q: 'What ancient people\u2019s record did Moroni abridge into the book of Ether?', answer: 'The Jaredites', answerType: 'group', ref: 'Ether 1:1', note: 'The Jaredites came from the great tower and were destroyed by civil war.' },
    { id: 'f067', q: 'At what event were the Jaredites\u2019 languages confounded, prompting their journey?', answer: 'The Tower of Babel', answerType: 'event', ref: 'Ether 1:33', note: 'The brother of Jared prayed that his people\u2019s language not be confounded.' },
    { id: 'f068', q: 'What did the brother of Jared ask the Lord to touch to give light in the barges?', answer: 'Sixteen small stones', answerType: 'object', ref: 'Ether 3:1', note: 'The Lord touched the stones with His finger so they would shine in the dark vessels.' },
    { id: 'f069', q: 'What did the Jaredites build to cross the great waters?', answer: 'Barges', answerType: 'object', ref: 'Ether 2:16', note: 'They built tight barges, lighted by stones the Lord touched.' },
    { id: 'f070', q: 'Who was the last Jaredite king, who survived to see his people destroyed?', answer: 'Coriantumr', answerType: 'person', ref: 'Ether 12:1; 15:29', note: 'Coriantumr lived to see every other Jaredite slain in the final battle.' },

    // ---------- DOCTRINE / TEACHINGS ----------
    { id: 'f071', q: 'According to Moroni\u2019s promise, how should we learn the truth of the Book of Mormon?', answer: 'Ask God with a sincere heart', answerType: 'event', ref: 'Moroni 10:4', note: 'If we ask in faith with real intent, the Holy Ghost will manifest the truth.' },
    { id: 'f072', q: 'What did Alma teach we should plant and nourish to grow faith?', answer: 'The seed (the word)', answerType: 'object', ref: 'Alma 32:28', note: 'Alma compared the word to a seed that, if nourished, grows into a tree of life.' },
    { id: 'f073', q: 'What is the pure love of Christ, which Mormon said endureth forever?', answer: 'Charity', answerType: 'event', ref: 'Moroni 7:47', note: 'Charity is the pure love of Christ; whoever possesses it at the last day will be well.' },
    { id: 'f074', q: 'What two records did the Lord prepare so the truth could be established by witnesses?', answer: 'The Bible and the Book of Mormon', answerType: 'object', ref: '1 Nephi 13:39\u201340', note: 'The Book of Mormon was written to establish the truth of the Bible and testify of Christ.' },

    // ---------- MORE PEOPLE & DETAILS ----------
    { id: 'f075', q: 'Who was Nephi\u2019s faithful older brother who did not rebel?', answer: 'Sam', answerType: 'person', ref: '1 Nephi 2:17', note: 'Sam believed Nephi\u2019s words and was blessed for his faithfulness.' },
    { id: 'f076', q: 'Who was the daughter of Jared whose dancing pleased a man into a wicked oath?', answer: 'The daughter of Jared', answerType: 'person', ref: 'Ether 8:10', note: 'She revived the secret combinations of old through a wicked plan to gain the kingdom.' },
    { id: 'f077', q: 'Which anti-Christ demanded a sign and was struck dumb by Alma?', answer: 'Korihor', answerType: 'person', ref: 'Alma 30:50', note: 'Korihor was struck dumb for demanding a sign and denying Christ.' },
    { id: 'f078', q: 'What was the wicked, proud order of the Zoramites\u2019 prayer tower called?', answer: 'The Rameumptom', answerType: 'object', ref: 'Alma 31:21', note: 'The Zoramites offered a set, prideful prayer atop a high stand called the Rameumptom.' },
    { id: 'f079', q: 'Which son of Alma the Younger sinned and was called to repentance regarding Isabel?', answer: 'Corianton', answerType: 'person', ref: 'Alma 39:3', note: 'Alma counseled his son Corianton, teaching that wickedness never was happiness.' },
    { id: 'f080', q: 'Which faithful son of Alma did Alma entrust with the sacred records?', answer: 'Helaman', answerType: 'person', ref: 'Alma 37:1', note: 'Alma gave the plates and sacred objects to his son Helaman.' },
    { id: 'f081', q: 'What sacred interpreters, with the breastplate, were used to translate?', answer: 'The Urim and Thummim', answerType: 'object', ref: 'Mosiah 8:13', note: 'A seer uses interpreters (Urim and Thummim) to translate ancient records.' },
    { id: 'f082', q: 'What did Lehi prophesy would be destroyed because of its wickedness?', answer: 'Jerusalem', answerType: 'place', ref: '1 Nephi 1:13', note: 'Lehi prophesied of the destruction of Jerusalem, for which the people sought his life.' },
    { id: 'f083', q: 'Where was Ishmael buried after he died in the wilderness?', answer: 'Nahom', answerType: 'place', ref: '1 Nephi 16:34', note: 'Ishmael died and was buried in the place called Nahom.' },
    { id: 'f084', q: 'Who was the king over all the Lamanites who was later taught and converted by Aaron?', answer: 'The father of Lamoni', answerType: 'person', ref: 'Alma 22:1', note: 'Aaron taught the father of Lamoni, the king over all the land, who was converted to the Lord.' },
    { id: 'f085', q: 'Which son of Mosiah taught and converted Lamoni\u2019s father, the king over all the land?', answer: 'Aaron', answerType: 'person', ref: 'Alma 22:1', note: 'Aaron taught the great king the plan of redemption, and the king was converted.' },
    { id: 'f086', q: 'What did Nephi build for his people in the new land, patterned after Solomon\u2019s?', answer: 'A temple', answerType: 'object', ref: '2 Nephi 5:16', note: 'Nephi built a temple like Solomon\u2019s, though not with so many precious things.' },
    { id: 'f087', q: 'What name did the people give themselves who followed Nephi?', answer: 'Nephites', answerType: 'group', ref: '2 Nephi 5:9', note: 'Those who followed Nephi were called the people of Nephi, or Nephites.' },
    { id: 'f088', q: 'Who was the brother of Amalickiah who continued the war after his death?', answer: 'Ammoron', answerType: 'person', ref: 'Alma 52:3', note: 'Ammoron took up the Lamanite throne after Teancum slew his brother Amalickiah.' },
    { id: 'f089', q: 'What was the name of the narrow strip of wilderness dividing Nephite and Lamanite lands?', answer: 'The narrow neck of land', answerType: 'place', ref: 'Alma 22:32', note: 'A narrow neck of land divided the land northward from the land southward.' },
    { id: 'f090', q: 'Which prophet in Zarahemla was preserved when the more wicked part of the people were destroyed?', answer: 'Nephi (son of Helaman)', answerType: 'person', ref: 'Helaman 7\u201311', note: 'Nephi prayed for a famine instead of war to bring the people to repentance.' },
    { id: 'f091', q: 'What did the Nephites and Lamanites await as a sign of Christ\u2019s death?', answer: 'Three days of darkness', answerType: 'event', ref: '3 Nephi 8:23', note: 'Great destruction and three days of thick darkness marked the crucifixion of Christ.' },
    { id: 'f092', q: 'Who was the wicked king who condemned the prophet Abinadi to death by fire?', answer: 'King Noah', answerType: 'person', ref: 'Mosiah 17:1', note: 'King Noah ordered Abinadi slain and Alma cast out after Abinadi testified of Christ.' },
    { id: 'f093', q: 'What is the name of the record-keeper who wrote the small plates after Enos?', answer: 'Jarom', answerType: 'person', ref: 'Jarom 1:1', note: 'Jarom, son of Enos, kept the record briefly and passed it to Omni.' },
    { id: 'f094', q: 'What did the brother of Jared see because of his exceeding faith?', answer: 'The finger of the Lord', answerType: 'event', ref: 'Ether 3:6', note: 'His faith was so great he saw the Lord\u2019s finger, then the Lord showed Himself fully.' },
    { id: 'f095', q: 'Who was the Nephite dissenter and Zoramite leader Alma sought to reclaim by the word?', answer: 'The Zoramites', answerType: 'group', ref: 'Alma 31:1', note: 'Alma led a mission to reclaim the apostate Zoramites through preaching.' },
    { id: 'f096', q: 'What did King Benjamin say we are all, in relation to God, to teach humility?', answer: 'Beggars', answerType: 'group', ref: 'Mosiah 4:19', note: 'Are we not all beggars? — all depend on God, so we should give to the poor.' },
    { id: 'f097', q: 'Who buried the Nephite records in the hill before becoming a ministering angel?', answer: 'Moroni', answerType: 'person', ref: 'Mormon 8; Moroni 10', note: 'Moroni sealed up the record and later delivered it to Joseph Smith.' },
    { id: 'f098', q: 'What did Lehi\u2019s family eat that was made sweet, sustaining them in the wilderness?', answer: 'Raw meat', answerType: 'object', ref: '1 Nephi 17:12', note: 'The Lord made their raw food sweet so they did not need much fire.' },
    { id: 'f099', q: 'What was the promised land described as, choice above all other lands?', answer: 'A land of promise', answerType: 'place', ref: '1 Nephi 2:20', note: 'The Lord led Lehi\u2019s family to a land choice above all others, if they kept His commandments.' },
    { id: 'f100', q: 'What must we do, according to Nephi, after we are baptized, to endure to the end?', answer: 'Press forward with steadfastness in Christ', answerType: 'event', ref: '2 Nephi 31:20', note: 'Feasting on the word of Christ and enduring to the end leads to eternal life.' },
    // ---------- GENERAL KNOWLEDGE: CHURCH HISTORY (beyond the Book of Mormon) ----------
    { id: 'g001', q: 'On what date was the Church organized?', answer: 'April 6, 1830', answerType: 'gk_date', ref: 'Church history', note: 'The Church was formally organized on April 6, 1830, in Fayette, New York.' },
    { id: 'g002', q: 'How old was Joseph Smith at the time of the First Vision?', answer: '14', answerType: 'gk_number', ref: 'Church history', note: 'Joseph Smith was 14 in the spring of 1820 when he received the First Vision.' },
    { id: 'g003', q: 'Which angel appeared to Joseph Smith in his bedroom and told him of the gold plates?', answer: 'Moroni', answerType: 'gk_person', ref: 'Church history', note: 'The angel Moroni appeared on the night of September 21\u201322, 1823.' },
    { id: 'g004', q: 'In what year did the First Vision occur?', answer: '1820', answerType: 'gk_date', ref: 'Church history', note: 'The First Vision occurred in the spring of 1820.' },
    { id: 'g005', q: 'Who restored the Aaronic Priesthood to Joseph Smith and Oliver Cowdery?', answer: 'John the Baptist', answerType: 'gk_person', ref: 'Church history', note: 'John the Baptist conferred the Aaronic Priesthood on May 15, 1829.' },
    { id: 'g006', q: 'Who restored the Melchizedek Priesthood?', answer: 'Peter, James, and John', answerType: 'gk_person', ref: 'Church history', note: 'The ancient Apostles Peter, James, and John conferred the Melchizedek Priesthood in 1829.' },
    { id: 'g007', q: 'On what date were priesthood keys restored in the Kirtland Temple by Moses, Elias, and Elijah?', answer: 'April 3, 1836', answerType: 'gk_date', ref: 'Church history', note: 'On April 3, 1836, in the Kirtland Temple, Moses, Elias, and Elijah restored important priesthood keys.' },
    { id: 'g008', q: 'What was the first temple completed in this dispensation?', answer: 'Kirtland Temple', answerType: 'gk_thing', ref: 'Church history', note: 'The Kirtland Temple, dedicated in 1836, was the first temple completed in this dispensation.' },
    { id: 'g009', q: 'In what U.S. state did Joseph Smith receive the First Vision?', answer: 'New York', answerType: 'gk_place', ref: 'Church history', note: 'The First Vision took place near Palmyra, New York.' },
    { id: 'g010', q: 'From what hill did Joseph Smith obtain the gold plates?', answer: 'Hill Cumorah', answerType: 'gk_place', ref: 'Church history', note: 'Joseph obtained the plates from the Hill Cumorah on September 22, 1827.' },
    { id: 'g011', q: 'How many witnesses (besides Joseph Smith) testified of seeing the gold plates?', answer: 'Eleven', answerType: 'gk_number', ref: 'Church history', note: 'Three Witnesses and Eight Witnesses\u201411 in all\u2014testified of the plates.' },
    { id: 'g012', q: 'To what valley did Brigham Young lead the pioneers in 1847?', answer: 'Salt Lake Valley', answerType: 'gk_place', ref: 'Church history', note: 'The pioneers entered the Salt Lake Valley in July 1847.' },
    { id: 'g013', q: 'Who succeeded Joseph Smith as President of the Church?', answer: 'Brigham Young', answerType: 'gk_person', ref: 'Church history', note: 'Brigham Young led the Church after the martyrdom of Joseph Smith in 1844.' },
    { id: 'g014', q: 'In what city is the worldwide headquarters of the Church?', answer: 'Salt Lake City', answerType: 'gk_place', ref: 'Church history', note: 'The Church is headquartered in Salt Lake City, Utah.' },
    { id: 'g015', q: 'How many members are in a full Quorum of the Twelve Apostles?', answer: 'Twelve', answerType: 'gk_number', ref: 'Church doctrine', note: 'Twelve Apostles, plus the First Presidency, total 15 prophets, seers, and revelators.' },
    { id: 'g016', q: 'Who became President of the Church in 2018?', answer: 'Russell M. Nelson', answerType: 'gk_person', ref: 'Church history', note: 'Russell M. Nelson became the 17th President of the Church in January 2018.' },
    { id: 'g017', q: 'How many official Articles of Faith did Joseph Smith write?', answer: 'Thirteen', answerType: 'gk_number', ref: 'Articles of Faith', note: 'The Articles of Faith, written in 1842, number thirteen.' },
    { id: 'g018', q: 'What worldwide meeting is held each April and October for members?', answer: 'General Conference', answerType: 'gk_thing', ref: 'Church practice', note: 'General Conference is broadcast worldwide twice a year.' },
    { id: 'g019', q: 'In what year did Joseph Smith obtain the gold plates from the hill?', answer: '1827', answerType: 'gk_date', ref: 'Church history', note: 'Joseph received the plates on September 22, 1827.' },
    { id: 'g020', q: 'What book was published in 1830 as another testament of Jesus Christ?', answer: 'The Book of Mormon', answerType: 'gk_thing', ref: 'Church history', note: 'About 5,000 copies of the Book of Mormon were printed in Palmyra in March 1830.' }

  ];
