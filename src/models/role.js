const { Client } = require('pg');
require('dotenv').config();

const client = new Client();
client.connect();

class Role {
  static async getAll() {
    const res = await client.query('SELECT * FROM role');
    return res.rows;
  }

  static async add(title, salary, department_id) {
    const res = await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, department_id]);
    return res.rows[0];
  }
}

module.exports = Role;
