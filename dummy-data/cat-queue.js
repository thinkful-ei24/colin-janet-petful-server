const Cats = require('./cats.js');
const Queue = require('../class-queue.js');

const catQueue = new Queue();

Cats.forEach(cat => {
  console.log(cat.name);
  catQueue.enqueue(cat);
});

//console.log(catQueue.peek());

catQueue.display();
//console.log(Cats);
