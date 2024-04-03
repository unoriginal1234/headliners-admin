require('dotenv').config();
const express = require('express');
let router = require('./routes.js');

const app = express();
const PORT = process.env.PORT;

const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(express.json());

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

