const clientConnect = require('../index.js');

const play = (req, res) => {

  let query1 = {
    text: 'UPDATE gamecard SET isplaying = false WHERE isplaying = true',
  }

  let query2 = {
    text: 'UPDATE gamecard SET isplaying = true WHERE id = $1',
    values: [req.params.id]
  }

  client = clientConnect()
  client.connect()
    .then(()=> client.query(query1))
    .then(()=> client.query(query2))
    .then(() => res.status(201).send('Updated'))
    .then(()=> client.end())
    .catch((error) => res.status(501).send(error))
}

const playDate = (req, res) => {

  let query1 = {
    text : 'UPDATE gamecard SET playdate = $1 WHERE id = $2',
    values : [req.params.playDate, req.params.id]
  }

  console.log(req.params.playDate)

  client = clientConnect()
  client.connect()
    .then(()=> client.query(query1))
    .then(() => res.status(201).send('Updated'))
    .then(()=> client.end())
    .catch((error) => res.status(501).send(error))

}

module.exports.play = play
module.exports.playDate = playDate