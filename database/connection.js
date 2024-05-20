const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'sql11.freemysqlhosting.net',
  user: 'sql11697600',
  password: 'NfXwhXyMs1',
  database: 'sql11697600'
});

module.exports = connection;