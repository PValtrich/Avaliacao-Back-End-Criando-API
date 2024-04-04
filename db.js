const sql = require('mssql');

const config = {
  server: '192.168.56.1',
  authentication: {
    type: 'default',
    options: {
      userName: 'sa',
      password: 'password',
    },
  },
  options: {
    database: 'Reservas',
  },
};

const pool = new sql.ConnectionPool(config);
pool.connect();

module.exports = pool;