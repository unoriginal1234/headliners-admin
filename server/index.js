require('dotenv').config()
const express = require('express');

const app = express();
const PORT = process.env.PORT;

const path = require('path');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});