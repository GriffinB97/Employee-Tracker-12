const { mainMenu } = require('./views/prompts');
const { viewAllDepartments, addDepartment } = require('./controllers/departmentController');
const { viewAllRoles, addRole } = require('./controllers/roleController');
const { viewAllEmployees, addEmployee, updateEmployeeRole } = require('./controllers/employeecontroller');

async function init() {
  let exit = false;

  while (!exit) {
    const action = await mainMenu();

    switch (action) {
      case 'View all departments':
        await viewAllDepartments();
        break;
      case 'View all roles':
        await viewAllRoles();
        break;
      case 'View all employees':
        await viewAllEmployees();
        break;
      case 'Add a department':
        const { name } = await inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Enter department name:'
          }
        ]);
        await addDepartment(name);
        break;
      case 'Add a role':
        const roleDetails = await inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Enter role title:'
          },
          {
            type: 'input',
            name: 'salary',
            message: 'Enter role salary:'
          },
          {
            type: 'input',
            name: 'department_id',
            message: 'Enter department ID:'
          }
        ]);
        await addRole(roleDetails.title, roleDetails.salary, roleDetails.department_id);
        break;
      case 'Add an employee':
        const employeeDetails = await inquirer.prompt([
          {
            type: 'input',
            name: 'first_name',
            message: 'Enter first name:'
          },
          {
            type: 'input',
            name: 'last_name',
            message: 'Enter last name:'
          },
          {
            type: 'input',
            name: 'role_id',
            message: 'Enter role ID:'
          },
          {
            type: 'input',
            name: 'manager_id',
            message: 'Enter manager ID (or leave blank if none):',
            default: null
          }
        ]);
        await addEmployee(employeeDetails.first_name, employeeDetails.last_name, employeeDetails.role_id, employeeDetails.manager_id);
        break;
      case 'Update an employee role':
        const updateDetails = await inquirer.prompt([
          {
            type: 'input',
            name: 'employee_id',
            message: 'Enter employee ID:'
          },
          {
            type: 'input',
            name: 'role_id',
            message: 'Enter new role ID:'
          }
        ]);
        await updateEmployeeRole(updateDetails.employee_id, updateDetails.role_id);
        break;
      case 'Exit':
        exit = true;
        break;
    }
  }

  console.log('Goodbye!');
}

init();
