const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrant) {
  let countChild = 0;
  let countAdult = 0;
  let coutSenior = 0;
  return entrant.reduce((acc, currentEntrant) => {
    if (currentEntrant.age < 18) {
      countChild += 1;
      acc.child = countChild;
    }
    if (currentEntrant.age >= 18 && currentEntrant.age < 50) {
      countAdult += 1;
      acc.adult = countAdult;
    }
    if (currentEntrant.age >= 50) {
      coutSenior += 1;
      acc.senior = coutSenior;
    }
    return acc;
  }, {});
}

function calculateEntryTotalThree(params) {
  const valeuEntrants = countEntrants(params);
  const keysEntrants = Object.keys(valeuEntrants);
  let total = 0;
  if (
    keysEntrants.includes('child')
    && keysEntrants.includes('adult')
    && keysEntrants.includes('senior')
  ) {
    total = prices.child * valeuEntrants.child
      + prices.adult * valeuEntrants.adult
      + prices.senior * valeuEntrants.senior;
  }
  return total;
}

function calculateEntryTotalTwo(params) {
  const valeuEntrants = countEntrants(params);
  const keysEntrants = Object.keys(valeuEntrants);
  let total = 0;
  if (keysEntrants.includes('child') && keysEntrants.includes('senior')) {
    total = prices.child * valeuEntrants.child + prices.senior * valeuEntrants.senior;
  }
  return total;
}

function calculateEntryTotal(params) {
  const valeuEntrants = countEntrants(params);
  const keysEntrants = Object.keys(valeuEntrants);
  let total = 0;
  if (keysEntrants.includes('child')) {
    total = prices.child
    * valeuEntrants.child;
  } else if (keysEntrants.includes('adult')) {
    total = prices.adult
    * valeuEntrants.adult;
  } else if (keysEntrants.includes('senior')) {
    total = prices.senior
    * valeuEntrants.senior;
  }
  return total;
}

function selectCalculateEntry(params) {
  let total = 0;
  if (params.length === 1) {
    total = calculateEntryTotal(params);
  } else if (params.length === 2) {
    total = calculateEntryTotalTwo(params);
  } else if (params.length > 3) {
    total = calculateEntryTotalThree(params);
  }
  return total;
}

function calculateEntry(entrant) {
  if (entrant === undefined || Object.keys(entrant).length === 0) return 0;

  return selectCalculateEntry(entrant);
}

module.exports = { calculateEntry, countEntrants };
