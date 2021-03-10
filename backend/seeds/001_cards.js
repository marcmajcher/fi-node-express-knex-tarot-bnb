exports.seed = (knex) =>
  knex('cards')
    .del()
    .then(() =>
      knex('cards').insert([
        {
          number: 0,
          name: 'The Fool',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-fool.jpg',
        },
        {
          number: 1,
          name: 'The Magician',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-magician.jpg',
        },
        {
          number: 2,
          name: 'The High Priestess',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg',
        },
        {
          number: 3,
          name: 'The Empress',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-empress.jpg',
        },
        {
          number: 4,
          name: 'The Emperor',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-emperor.jpg',
        },
        {
          number: 5,
          name: 'The Hierophant',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-hierophant.jpg',
        },
        {
          number: 6,
          name: 'The Lovers',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-lovers.jpg',
        },
        {
          number: 7,
          name: 'The Chariot',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-chariot.jpg',
        },
        {
          number: 8,
          name: 'Strength',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-strength.jpg',
        },
        {
          number: 9,
          name: 'The Hermit',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-hermit.jpg',
        },
        {
          number: 10,
          name: 'Wheel of Fortune',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-wheeloffortune.jpg',
        },
        {
          number: 11,
          name: 'Justice',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-justice.jpg',
        },
        {
          number: 12,
          name: 'The Hanged Man',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-hangedman.jpg',
        },
        {
          number: 13,
          name: 'Death',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-death.jpg',
        },
        {
          number: 14,
          name: 'Temperance',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-temperance.jpg',
        },
        {
          number: 15,
          name: 'The Devil',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-devil.jpg',
        },
        {
          number: 16,
          name: 'The Tower',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-tower.jpg',
        },
        {
          number: 17,
          name: 'The Star',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-star.jpg',
        },
        {
          number: 18,
          name: 'The Moon',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-moon.jpg',
        },
        {
          number: 19,
          name: 'The Sun',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-sun.jpg',
        },
        {
          number: 20,
          name: 'Judgement',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-judgement.jpg',
        },
        {
          number: 21,
          name: 'The World',
          image:
            'https://www.tarotcardmeanings.net/images/tarotcards/tarot-world.jpg',
        },
      ])
    );
