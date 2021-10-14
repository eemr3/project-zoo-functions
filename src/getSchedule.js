const { species, hours } = require('../data/zoo_data');

const dayClosed = {
  Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' },
};
const weekDaysNames = Object.keys(hours);
const weekDaysHours = Object.values(hours);

const scheduleNotParams = () => {
  const result = weekDaysNames.reduce((acc, curr, index) => {
    acc[curr] = {
      officeHour: `Open from ${weekDaysHours[index].open}am until ${weekDaysHours[index].close}pm`,
      exhibition: species.reduce(
        (acc2, tt) =>
          (tt.availability.includes(curr) ? acc2.concat(tt.name) : acc2),
        [],
      ),
    };
    return acc;
  }, {});

  result.Monday = {
    exhibition: 'The zoo will be closed!',
    officeHour: 'CLOSED',
  };

  return result;
};

// Filtrar por dia passado
const scheduleOfDayHour = (scheduleTarget) => {
  const result = {};
  const names = species
    .filter((specie) => specie.availability.includes(scheduleTarget))
    .map((specie) => specie.name);
  result[scheduleTarget] = {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: names };
  return result;
};

// Filtrar por epecie passada
const scheduleOfAnimalDay = (scheduleTarget) =>
  species.reduce((acc, specie) => (specie.name === scheduleTarget
    ? acc.concat(specie.availability) : acc), []);

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || scheduleTarget === 'qualquercoisa') return scheduleNotParams();
  if (scheduleTarget === 'Monday') return dayClosed;
  if (Object.keys(hours).includes(scheduleTarget)) return scheduleOfDayHour(scheduleTarget);

  return scheduleOfAnimalDay(scheduleTarget);
}

module.exports = getSchedule;
