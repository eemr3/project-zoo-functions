const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countResidents(parmas) {
  const residents = species.reduce((acc, specie) =>
    (specie.name === parmas.specie ? specie.residents : acc));
  if (!parmas.sex) return residents.length;

  return residents.reduce(
    (acc, currentSpecie) => (currentSpecie.sex === parmas.sex ? acc + 1 : acc),
    0,
  );
}

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  return countResidents(animal);
}

module.exports = countAnimals;
