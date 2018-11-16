const dogs = require('./dogs.js');
const Queue = require('../class-queue.js');

const dogQueue = new Queue();

dogs.forEach(dog => {
  console.log(dog.name);
  dogQueue.enqueue(dog);
});

dogQueue.display();
