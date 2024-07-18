const { Client } = require('pg');
require('dotenv').config();

const client = new Client();
client.connect();

class Employee {
  static async getAll() {
    const res = await client.query('SELECT * FROM employee');
    return res.rows;
  }

  static async add(first_name, last_name, role_id, manager_id) {
    const res = await client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id]);
    return res.rows[0];
  }

  static async updateRole(employee_id, role_id) {
    const res = await client.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [role_id, employee_id]);
    return res.rows[0];
  }
}

module.exports = Employee;
