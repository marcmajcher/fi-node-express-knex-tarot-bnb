const router = require('express').Router();

const config = require('../knexfile')['development'];
const knex = require('knex')(config);

router.get('/', (req, res) => {
  knex('cards').then((cards) => res.json(cards));
});

router.get('/:number', (req, res) => {
  const { number } = req.params;
  knex('cards')
    .where({ number })
    .first()
    .then((card) => res.json(card));
});

router.post('/', (req, res) => {
  console.log('posting to cards');
});

module.exports = router;
