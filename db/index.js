require('dotenv').config()
const {Client} = require('pg');

function clientConnect() {
  return new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
  })
};

module.exports = clientConnect;

