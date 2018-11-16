const dogs = require('./dogs.js');
const Queue = require('../class-queue.js');

const dogQueue = new Queue();

dogs.forEach(dog => {
  dogQueue.enqueue(dog);
});

dogQueue.display();

module.exports= dogQueue;
