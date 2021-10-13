const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    (name) => employeeName === name.firstName || employeeName === name.lastName,
  );
}

module.exports = getEmployeeByName;
