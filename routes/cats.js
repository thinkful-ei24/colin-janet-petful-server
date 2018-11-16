const express = require('express');
const catQueue = require('../dummy-data/cat-queue');

const router = express.Router();

router.get('/cats', (req, res, next) => {
  const cat = catQueue.peek();
  return res.json(cat);
  
});

router.delete('/cats', (req, res, next) => {
  catQueue.dequeue();
  return res.sendStatus(204).end();
});




module.exports = router;



