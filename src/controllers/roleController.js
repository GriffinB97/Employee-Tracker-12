const Role = require('../models/role');

async function viewAllRoles() {
  const roles = await Role.getAll();
  console.table(roles);
}

async function addRole(title, salary, department_id) {
  const role = await Role.add(title, salary, department_id);
  console.log('Role added:', role);
}

module.exports = { viewAllRoles, addRole };
