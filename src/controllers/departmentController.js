const Department = require('../models/department');

async function viewAllDepartments() {
  const departments = await Department.getAll();
  console.table(departments);
}

async function addDepartment(name) {
  const department = await Department.add(name);
  console.log('Department added:', department);
}

module.exports = { viewAllDepartments, addDepartment };
