require('dotenv').config()
const {Client} = require('pg');

// LOCAL
// function clientConnect() {
//   return new Client({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PW,
//   })
// };

// DEPLOYED

const connectionString = process.env.CONNECTION_STRING;

function clientConnect() {
  return new Client({
    connectionString
  })
};

module.exports = clientConnect;

