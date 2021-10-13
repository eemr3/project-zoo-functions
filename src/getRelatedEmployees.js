const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((managerId) => managerId.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error(
      'O id inserido não é de uma pessoa colaboradora gerente!',
    );
  }

  return employees.reduce((acc, employee) => (employee.managers.includes(managerId)
    ? acc.concat(`${employee.firstName} ${employee.lastName}`) : acc), []);
}

module.exports = { isManager, getRelatedEmployees };
