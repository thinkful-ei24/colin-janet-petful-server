const express = require('express');
const Dog = require('../dummy-data/dogs.js');

const router = express.Router();

router.get('/dogs', (req, res, next) => {
  const dog = Dog[0];
  if(!dog) {
    return res.json("ALL DOGS GO TO HEAVEN");
  } else {
    return res.json(dog);
  }
});

router.delete('/dogs', (req, res, next) => {
  const dog = Dog[0];
  Dog.shift();
  return res.sendStatus(204).end();
});


console.log(Dog);

module.exports = router;


