const { Client } = require('pg');
require('dotenv').config();

const client = new Client();
client.connect();

class Department {
  static async getAll() {
    const res = await client.query('SELECT * FROM department');
    return res.rows;
  }

  static async add(name) {
    const res = await client.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
  }
}

module.exports = Department;
