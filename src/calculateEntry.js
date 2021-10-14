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
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrant) {
  if (entrant === undefined || Object.keys(entrant).length === 0) return 0;
  const visitants = countEntrants(entrant);
  let total = 0;
  total += visitants.child * prices.child;
  total += visitants.adult * prices.adult;
  total += visitants.senior * prices.senior;

  return total;
}

module.exports = { calculateEntry, countEntrants };
