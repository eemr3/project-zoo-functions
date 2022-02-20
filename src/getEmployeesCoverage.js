const { employees, species } = require("../data/zoo_data");

const getEmployeesCoverageNotParams = () =>
  employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.reduce(
      (acc, specie) =>
        employee.responsibleFor.includes(specie.id)
          ? acc.concat(specie.name)
          : acc,
      []
    ),
    locations: species.reduce(
      (accLocation, location) =>
        employee.responsibleFor.includes(location.id)
          ? accLocation.concat(location.location)
          : accLocation,
      []
    ),
  }));

const isEmployeesCoverage = ({ id, name }) =>
  employees.some(
    (employee) =>
      employee.id === id ||
      employee.firstName === name ||
      employee.lastName === name
  );

const getEmployeeParameter = ({ id, name }) => {
  if (!isEmployeesCoverage({ id, name })) {
    throw new Error("Informações inválidas");
  }
  return employees.filter(
    (employee) =>
      employee.id === id ||
      employee.firstName === name ||
      employee.lastName === name
  );
};

const getEmployeesWithParameter = (employee) => {
  const result = getEmployeeParameter(employee);
  return result.reduce(
    (acc, current) => ({
      id: current.id,
      fullName: `${current.firstName} ${current.lastName}`,
      species: species.reduce(
        (accSp, specie) =>
          current.responsibleFor.includes(specie.id)
            ? accSp.concat(specie.name)
            : accSp,
        []
      ),
      locations: species.reduce(
        (accLoc, location) =>
          current.responsibleFor.includes(location.id)
            ? accLoc.concat(location.location)
            : accLoc,
        []
      ),
    }),
    {}
  );
};

function getEmployeesCoverage(employee) {
  if (!employee) return getEmployeesCoverageNotParams();
  return getEmployeesWithParameter(employee);
}

module.exports = getEmployeesCoverage;
