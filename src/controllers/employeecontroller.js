const Employee = require('../models/employee');

async function viewAllEmployees() {
  const employees = await Employee.getAll();
  console.table(employees);
}

async function addEmployee(first_name, last_name, role_id, manager_id) {
  const employee = await Employee.add(first_name, last_name, role_id, manager_id);
  console.log('Employee added:', employee);
}

async function updateEmployeeRole(employee_id, role_id) {
  const employee = await Employee.updateRole(employee_id, role_id);
  console.log('Employee role updated:', employee);
}

module.exports = { viewAllEmployees, addEmployee, updateEmployeeRole };
