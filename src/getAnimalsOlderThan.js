const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.some(
    (nameAnimal) =>
      nameAnimal.name === animal
       && nameAnimal.residents.every((animalAge) => animalAge.age > age),
  );
}

module.exports = getAnimalsOlderThan;
