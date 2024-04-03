const clientConnect = require('../index.js');

const readAll = (req, res) => {
  client = clientConnect()
  client.connect()
    .then(()=> client.query('SELECT * FROM gamecard'))
    .then((result) => res.status(201).send(result.rows))
    .then(()=> client.end())
    .catch((error)=> res.status(500).send(error))
}

const readOne = (req, res) => {
  client = clientConnect()
  client.connect()
    .then(()=> client.query('SELECT * FROM gamecard WHERE isplaying = true'))
    .then((result) => res.status(201).send(result.rows))
    .then(()=> client.end())
    .catch((error)=> res.status(500).send(error))
}

module.exports.readAll = readAll;
module.exports.readOne = readOne;