const express = require('express');
const dogQueue = require('../dummy-data/dog-queue');

const router = express.Router();

router.get('/dogs', (req, res, next) => {


  const dog = dogQueue.peek();
  if(!dog){
    return res.json ({name:null,
      age:null,
      breed:null,
      imageDescription: null,
      imageUrl: null,
      sex: null,
      story: null});
  }
  return res.json(dog);

});

router.delete('/dogs', (req, res, next) => {
  dogQueue.dequeue();
  return res.sendStatus(204).end();
});




module.exports = router;


