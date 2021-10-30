const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')

class UserService {
  constructor() {
    this.pool = pool
    this.pool.on('error', (error) => console.error(error))
  }

  async find() {
    const response = pool.query('SELECT * FROM tasks')
    return response.rows
  }
}

module.exports = UserService
