/* eslint-disable no-unused-vars */
const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getNamesAnimals({ sex = false, sorted = false }, specie) {
  let names = [];
  if (sex) {
    names = specie.residents
      .filter((specieName) => specieName.sex === sex)
      .map((specieName) => specieName.name);
  } else {
    names = specie.residents.map((specieName) => specieName.name);
  }
  if (sorted) return names.sort();
  return names;
}

// Mensão: Ajuda do Tiago da Silva Moreira - Aluno da Turma 012 (Meu filho)
function getAnimalMap(options) {
  const result = {};
  const NESpecies = species.filter((specie) => specie.location === 'NE');
  const NWSpecies = species.filter((specie) => specie.location === 'NW');
  const SESpecies = species.filter((specie) => specie.location === 'SE');
  const SWSpecies = species.filter((specie) => specie.location === 'SW');
  if (!options || !options.includeNames) {
    return {
      NE: NESpecies.map((animalName) => animalName.name),
      NW: NWSpecies.map((animalName) => animalName.name),
      SE: SESpecies.map((animalName) => animalName.name),
      SW: SWSpecies.map((animalName) => animalName.name),
    };
  }
  result.NE = NESpecies.map((specie) => ({ [specie.name]: getNamesAnimals(options, specie) }));
  result.SE = SESpecies.map((specie) => ({ [specie.name]: getNamesAnimals(options, specie) }));
  result.NW = NWSpecies.map((specie) => ({ [specie.name]: getNamesAnimals(options, specie) }));
  result.SW = SWSpecies.map((specie) => ({ [specie.name]: getNamesAnimals(options, specie) }));
  return result;
}

module.exports = getAnimalMap;
