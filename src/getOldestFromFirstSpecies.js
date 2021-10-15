const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idRsponsibleEmployee = employees.find(
    (employee) => employee.id === id,
  ).responsibleFor;

  return species.reduce((acc, currentSpecie) => {
    if (idRsponsibleEmployee[0] === currentSpecie.id) {
      return Object.values(currentSpecie.residents.reduce((accResidente, resident) =>
        (accResidente.age > resident.age ? accResidente : resident)));
    }

    return acc;
  }, 0);
}

module.exports = getOldestFromFirstSpecies;
