const router = require('express').Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Our Cool Tarot Card Thing' });
});

module.exports = router;
