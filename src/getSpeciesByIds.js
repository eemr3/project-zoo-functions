const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) =>
    data.species.reduce((acc, curr) => {
      if (curr.id === id) return curr;
      return acc;
    }));
}

module.exports = getSpeciesByIds;
