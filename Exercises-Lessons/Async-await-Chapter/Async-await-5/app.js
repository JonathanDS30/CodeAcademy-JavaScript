let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

// Write your code below:

async function serveDinner() {
  vegetablePromise = steamBroccoli();
  starchPromise = cookRice();
  proteinPromise = bakeChicken();
  sidePromise = cookBeans();

  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();