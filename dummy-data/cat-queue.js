const Cats = require('./cats.js');
const Queue = require('../class-queue.js');

const catQueue = new Queue();

Cats.forEach(cat => {
  catQueue.enqueue(cat);
});

module.exports= catQueue;
