const express = require('express');
const Cat = require('../dummy-data/cats.js');

const router = express.Router();

router.get('/cats', (req, res, next) => {
  const cat = Cat[0];
  if (!cat) {
    return res.json("ALL THE CATS HAVE A HOME");
  } else {
    return res.json(cat);
  }
});

router.delete('/cats', (req, res, next) => {
  const cat = Cat[0];
  Cat.shift();
  return res.sendStatus(204).end();
});


console.log(Cat);

module.exports = router;



