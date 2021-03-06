const questions = [
  //BIRTH//
  {
    question: 'When was Camille Pissarro born?',
    choice1: 1830,
    choice2: 1832,
    choice3: 1834,
    choice4: 1836,
    answer: 1,
  },
  {
    question: 'When was Edouard Manet born?',
    choice1: 1830,
    choice2: 1832,
    choice3: 1834,
    choice4: 1836,
    answer: 2,
  },
  {
    question: 'When was Edgar Degas born?',
    choice1: 1830,
    choice2: 1832,
    choice3: 1834,
    choice4: 1836,
    answer: 3,
  },
  {
    question: 'When was Paul Cezanne born?',
    choice1: 1830,
    choice2: 1834,
    choice3: 1839,
    choice4: 1840,
    answer: 3,
  },
  {
    question: 'When was Claude Monet born?',
    choice1: 1830,
    choice2: 1834,
    choice3: 1837,
    choice4: 1840,
    answer: 4,
  },
  {
    question: 'When was Auguste Renoir born?',
    choice1: 1839,
    choice2: 1840,
    choice3: 1842,
    choice4: 1846,
    answer: 3,
  },
  {
    question: 'What nationality was Aldred Sisley?',
    choice1: 'French',
    choice2: 'Belgian',
    choice3: 'Dutch',
    choice4: 'British',
    answer: 4,
  },
  {
    question:
      'What nationality was Mary Cassatt, one of the leading female impressionists?',
    choice1: 'French',
    choice2: 'British',
    choice3: 'American',
    choice4: 'Italian',
    answer: 4,
  },
  {
    question: 'Where was Paul Cezanne born?',
    choice1: 'Aix-en-Provence',
    choice2: 'Giverny',
    choice3: 'Paris',
    choice4: 'Guinea',
    answer: 1,
  },
  {
    question: 'Where was Camille Pissarro born?',
    choice1: 'Paris',
    choice2: 'Aix-en-Provence',
    choice3: 'The Island of St Thomas',
    choice4: 'Tuscany, Italy',
    answer: 3,
  },
  {
    question: 'Where was August Renoir born?',
    choice1: 'Paris',
    choice2: 'Aix-en-Provence',
    choice3: 'Limoges',
    choice4: 'Geneva',
    answer: 3,
  },

  //EARLY LIFE

  {
    question:
      'Which impressionist worked in a porcelain factory painting cups?',
    choice1: 'Auguste Renoir',
    choice2: 'Frederic Bazille',
    choice3: 'Alfred Sisley',
    choice4: 'Paul Cezanne',
    answer: 1,
  },
  {
    question:
      'Which impressionist studied law before turning to full-time painting?',
    choice1: 'Auguste Renoir',
    choice2: 'Edgar Degas',
    choice3: 'Edouard Manet',
    choice4: 'Paul Cezanne',
    answer: 2,
  },
  {
    question:
      'Which impressionist served in the merchant navy on a vogage to Rio de Jainero?',
    choice1: 'Auguste Renoir',
    choice2: 'Frederic Bazille',
    choice3: 'Edouard Manet',
    choice4: 'Paul Cezanne',
    answer: 3,
  },
  {
    question:
      'Who was conscripted and caught typhoid fever when serving in Algeria?',
    choice1: 'Auguste Renoir',
    choice2: 'Frederic Bazille',
    choice3: 'Alfred Sisley',
    choice4: 'Claude Monet',
    answer: 4,
  },
  {
    question:
      "Which impressionist worked as a bank clerk in his father's bank?",
    choice1: 'Paul Cezanne',
    choice2: 'Frederic Bazille',
    choice3: 'Alfred Sisley',
    choice4: 'Claude Monet',
    answer: 1,
  },
  {
    question:
      "Which impressionist worked as a cargo clerk in his father's business?",
    choice1: 'Paul Cezanne',
    choice2: 'Camille Pissarro',
    choice3: 'Alfred Sisley',
    choice4: 'Claude Monet',
    answer: 2,
  },
  {
    question: "The Absinthe Drinker was which artist's first major work?",
    choice1: 'Paul Cezanne',
    choice2: 'Camille Pissarro',
    choice3: 'Edouard Manet',
    choice4: 'Claude Monet',
    answer: 3,
  },

  //EARLY CAREER
  {
    question:
      'What painting did Manet famously exhibit in the Salon des Refuses?',
    choice1: 'Bar at the Folies Bergere',
    choice2: "Dejuner Sur l'Herbe",
    choice3: 'Le Bon Boc',
    choice4: 'Olympia',
    answer: 2,
  },
  {
    question:
      'What was the name of the Manet nude accepted by the Salon in 1865?',
    choice1: 'Venus',
    choice2: 'Aphrodite',
    choice3: 'Olympia',
    choice4: 'Gabrielle',
    answer: 3,
  },
  {
    question:
      "Who said this in 1865: 'Insults are beating down on me like hail. I have never been through anything like it.'",
    choice1: 'Edouard Manet',
    choice2: 'Claude Monet',
    choice3: 'Paul Cezanne',
    choice4: 'Edgar Degas',
    answer: 1,
  },
  {
    question:
      'After being rejected by the jury for the 1867 World Exhibition, who built his own pavillion at a cost of 20,000 francs?',
    choice1: 'Edouard Manet',
    choice2: 'Claude Monet',
    choice3: 'Paul Cezanne',
    choice4: 'Edgar Degas',
    answer: 1,
  },
  {
    question: 'Who faught a duel with the journalist Louis Duranty in 1870?',
    choice1: 'Claude Monet',
    choice2: 'Camille Pissarro',
    choice3: 'Edgar Degas',
    choice4: 'Edouard Manet',
    answer: 4,
  },
  {
    question: 'Who spent the Franco-Prussian war in Paris?',
    choice1: 'Paul Cezanne',
    choice2: 'Alfred Sisley',
    choice3: 'Camille Pissarro',
    choice4: 'Edouard Manet',
    answer: 4,
  },
  {
    question: 'Who died while fighting in the Franco-Prussian war?',
    choice1: 'Frederic Bazille',
    choice2: 'Alfred Sisley',
    choice3: 'Camille Pissarro',
    choice4: 'Edouard Manet',
    answer: 1,
  },
  {
    question: 'Who spent the Franco-Prussian hiding in southern France?',
    choice1: 'Edouard Manet',
    choice2: 'Alfred Sisley',
    choice3: 'Camille Pissarro',
    choice4: 'Paul Cezanne',
    answer: 4,
  },

  //IMPRESSIONIST EXHIBITIONS
  {
    question: 'Where was the first impressionist exhibition held?',
    choice1: 'Cafe Guerbois',
    choice2: 'Rue du Capucines',
    choice3: 'Cafe Nouvelle-Athens',
    choice4: 'Rue Le Peletier',
    answer: 2,
  },
  {
    question:
      'Who refused to participate in the first impressionist exhibition?',
    choice1: 'Edouard Manet',
    choice2: 'Claude Monet',
    choice3: 'Camille Pissarro',
    choice4: 'Paul Cezanne',
    answer: 1,
  },
  {
    question:
      'When did the first independent impressionist exhibition take place?',
    choice1: 1869,
    choice2: 1870,
    choice3: 1874,
    choice4: 1876,
    answer: 3,
  },
  {
    question:
      'Who painted Impression: Sunrise, the work that helped get the impressionists their name?',
    choice1: 'Edgar Degas',
    choice2: 'Alfred Sisley',
    choice3: 'Paul Cezanne',
    choice4: 'Claude Monet',
    answer: 4,
  },
  {
    question:
      "Of what painting did a critic write: 'Wallpaper in its early stages is much more finished than that.' ",
    choice1: 'Olympia',
    choice2: 'A Modern Olympia',
    choice3: 'Impression: Sunrise',
    choice4: 'The Card Players',
    answer: 3,
  },
  {
    question: 'Who painted Lunch at the Boating Lake?',
    choice1: 'Auguste Renoir',
    choice2: 'Alfred Sisley',
    choice3: 'Paul Cezanne',
    choice4: 'Claude Monet',
    answer: 1,
  },
  {
    question: 'Who painted La Loge (the Theatre Box)?',
    choice1: 'Auguste Renoir',
    choice2: 'Alfred Sisley',
    choice3: 'Paul Cezanne',
    choice4: 'Claude Monet',
    answer: 1,
  },
  {
    question:
      "Who did a critic describe as a 'madman' after the first impressionist exhibition?",
    choice1: 'Claude Monet',
    choice2: 'Paul Cezanne',
    choice3: 'Edgar Degas',
    choice4: 'Edouard Manet',
    answer: 2,
  },
  {
    question:
      'When did the final independent impressionist exhibition take place?',
    choice1: 1880,
    choice2: 1882,
    choice3: 1884,
    choice4: 1886,
    answer: 4,
  },
  {
    question: 'How many independent exhibitions did the impressionists hold?',
    choice1: 6,
    choice2: 7,
    choice3: 8,
    choice4: 9,
    answer: 3,
  },

  //MONET
  {
    question: 'Who painted Woman in the Green Dress?',
    choice1: 'Claude Monet',
    choice2: 'Camille Pissarro',
    choice3: 'Edgar Degas',
    choice4: 'Vincent van Gogh',
    answer: 1,
  },
  {
    question: 'Who married Camille Doncieux?',
    choice1: 'Edouard Manet',
    choice2: 'Camille Pissarro',
    choice3: 'Edgar Degas',
    choice4: 'Claude Monet',
    answer: 4,
  },
  {
    question: 'Who sent scores of begging letters in the late 1860s/1870s?',
    choice1: 'Edgar Degas',
    choice2: 'Camille Pissarro',
    choice3: 'Claude Monet',
    choice4: 'Edouard Manet',
    answer: 3,
  },
  {
    question: 'Who tried to drown himself in the Seine in 1868?',
    choice1: 'Edouard Manet',
    choice2: 'Claude Monet',
    choice3: 'Edgar Degas',
    choice4: 'Alfred Sisley',
    answer: 2,
  },
  {
    question: 'Who painted the Haystacks series?',
    choice1: 'Edgar Degas',
    choice2: 'Camille Pissarro',
    choice3: 'Claude Monet',
    choice4: 'Vincent van Gogh',
    answer: 3,
  },
  {
    question: 'Who painted the Rouen Cathedral series?',
    choice1: 'Claude Monet',
    choice2: 'Camille Pissarro',
    choice3: 'Edgar Degas',
    choice4: 'Vincent van Gogh',
    answer: 1,
  },
  {
    question: 'Who painted the Poplars series?',
    choice1: 'Camille Pissarro',
    choice2: 'Claude Monet',
    choice3: 'Edgar Degas',
    choice4: 'Vincent van Gogh',
    answer: 2,
  },
  {
    question: 'When did Monet move to Giverny',
    choice1: 1875,
    choice2: 1883,
    choice3: 1894,
    choice4: 1901,
    answer: 2,
  },
  {
    question:
      'Who refused to leave his house in Giverny when the Germans invaded France at the start of World War One?',
    choice1: 'Alfred Sisley',
    choice2: 'Frederic Bazille',
    choice3: 'Claude Monet',
    choice4: 'Paul Cezanne',
    answer: 3,
  },

  //GENERAL
  {
    question:
      'In what year did Manet, after 20 years of trying, finally win a medal at the Salon des Beaux Arts?',
    choice1: 1876,
    choice2: 1881,
    choice3: 1885,
    choice4: 1887,
    answer: 2,
  },
  {
    question: 'Who is famous for works of ballerinas and jockeys?',
    choice1: 'Edgar Degas',
    choice2: 'Alfred Sisley',
    choice3: 'Paul Cezanne',
    choice4: 'Mary Cassatt',
    answer: 1,
  },
  {
    question: 'What is the most expensive impressionist work ever sold?',
    choice1: "Cezanne's Card Players",
    choice2: "Monet's Japanese Footbridge",
    choice3: "Renoir's Moulin de la Galette",
    choice4: "Degas' Ballet Practice",
    answer: 1,
  },
  {
    question: 'Who painted the Dance Class series?',
    choice1: 'Camille Pissarro',
    choice2: 'Claude Monet',
    choice3: 'Edgar Degas',
    choice4: 'Vincent van Gogh',
    answer: 3,
  },
  {
    question: 'Who painted the Moulin de la Gallette?',
    choice1: 'Edgar Degas',
    choice2: 'Camille Pissarro',
    choice3: 'Claude Monet',
    choice4: 'Auguste Renoir',
    answer: 4,
  },
  {
    question: 'Whose brother did impressionist Berthe Morisot marry?',
    choice1: "Edgar Degas'",
    choice2: "Edouard Manet's",
    choice3: "Claude Monet's",
    choice4: "Auguste Renoir's",
    answer: 2,
  },
  {
    question: 'Who did Manet later marry?',
    choice1: 'His piano tutor',
    choice2: 'His English teacher',
    choice3: "His brother's former fiancee",
    choice4: 'His cousin',
    answer: 1,
  },
  {
    question: 'Who painted the Boulevard Monmartre series?',
    choice1: 'Alfred Sisley',
    choice2: 'Mary Cassatt',
    choice3: 'Camille Pissarro',
    choice4: 'Paul Cezanne',
    answer: 3,
  },
  {
    question: "Who did Cezanne describe as 'a father to me'?",
    choice1: 'Edgar Degas',
    choice2: 'Paul Durand-Ruel',
    choice3: 'Edouard Manet',
    choice4: 'Camille Pissarro',
    answer: 4,
  },
  {
    question:
      "Who abandoned the impressionist style during his 'dry period' between 1883-1887?",
    choice1: 'Edgar Degas',
    choice2: 'Auguste Renoir',
    choice3: 'Edouard Manet',
    choice4: 'Camille Pissarro',
    answer: 2,
  },
  {
    question:
      'Who abandoned the impressionist style in favour of pointillism in the 1880s',
    choice1: 'Edgar Degas',
    choice2: 'Auguste Renoir',
    choice3: 'Edouard Manet',
    choice4: 'Camille Pissarro',
    answer: 4,
  },
  {
    question:
      "Which fellow impressionist did Caillebotte describe as 'quite intolerable'?",
    choice1: 'Edgar Degas',
    choice2: 'Auguste Renoir',
    choice3: 'Edouard Manet',
    choice4: 'Camille Pissarro',
    answer: 1,
  },
  {
    question:
      "Of whom did van Gogh say: 'he lives like a little notary who dislikes women?'",
    choice1: 'Camille Pissarro',
    choice2: 'Auguste Renoir',
    choice3: 'Edouard Manet',
    choice4: 'Edgar Degas',
    answer: 4,
  },
  {
    question: 'Where did Degas paint The Cotton Exchange?',
    choice1: 'Yorkshire, England',
    choice2: 'Rouen, France',
    choice3: 'New Orleans, USA',
    choice4: 'Paris, France',
    answer: 3,
  },
  {
    question:
      'Who revealed himself as an anti-semite during the Dreyfus affair?',
    choice1: 'Edgar Degas',
    choice2: 'Edouard Manet',
    choice3: 'Claude Monet',
    choice4: 'Camille Pissarro',
    answer: 1,
  },
  {
    question:
      "Who fell out with his childhood friend Emile Zola over the publication of l'Oeuvre?",
    choice1: 'Auguste Renoir',
    choice2: 'Edgar Degas',
    choice3: 'Claude Monet',
    choice4: 'Paul Cezanne',
    answer: 4,
  },
  {
    question: 'Who was finally awarded a Salon medal in 1881?',
    choice1: 'Auguste Renoir',
    choice2: 'Edouard Manet',
    choice3: 'Claude Monet',
    choice4: 'Paul Cezanne',
    answer: 2,
  },

  //DEATHS
  {
    question: 'In which year did Edouard Manet die?',
    choice1: 1879,
    choice2: 1883,
    choice3: 1889,
    choice4: 1895,
    answer: 2,
  },
  {
    question: 'In which year did Berthe Morisot die?',
    choice1: 1889,
    choice2: 1895,
    choice3: 1900,
    choice4: 1904,
    answer: 2,
  },
  {
    question: 'In which year did Camille Pissarro die?',
    choice1: 1899,
    choice2: 1902,
    choice3: 1903,
    choice4: 1907,
    answer: 3,
  },
  {
    question: 'In which year did Paul Cezanne die?',
    choice1: '1897',
    choice2: '1900',
    choice3: '1906',
    choice4: '1910',
    answer: 3,
  },
  {
    question: 'In which year did Edgar Degas die?',
    choice1: '1814',
    choice2: '1915',
    choice3: '1917',
    choice4: '1919',
    answer: 3,
  },
  {
    question: 'In which year did Auguste Renoir die?',
    choice1: '1814',
    choice2: '1915',
    choice3: '1917',
    choice4: '1919',
    answer: 4,
  },
  {
    question: 'In which year did Claude Monet die?',
    choice1: '1926',
    choice2: '1916',
    choice3: '1901',
    choice4: '1874',
    answer: 1,
  },
  {
    question: "In which year was Manet's Olympia finally hung in the Louvre?",
    choice1: '1883',
    choice2: '1907',
    choice3: '1920',
    choice4: '1964',
    answer: 2,
  },
  {
    question: 'Which impressionist died of syphilis?',
    choice1: 'Alfred Sisley',
    choice2: 'Frederic Bazille',
    choice3: 'Edouard Manet',
    choice4: 'Auguste Renoir',
    answer: 3,
  },
  {
    question: 'Who suffered from debilitating arthritis in his old age',
    choice1: 'Auguste Renoir',
    choice2: 'Frederic Bazille',
    choice3: 'Edouard Manet',
    choice4: 'Alfred Sisley',
    answer: 1,
  },
  {
    question:
      'Which impressionist died of pneumonia after being caught in a storm while painting?',
    choice1: 'Alfred Sisley',
    choice2: 'Frederic Bazille',
    choice3: 'Edouard Manet',
    choice4: 'Paul Cezanne',
    answer: 4,
  },
]

exports.questions = questions
