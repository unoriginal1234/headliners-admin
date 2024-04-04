const clientConnect = require('../index.js');

const deleteOne = (req, res) => {

  let query = {
    text: 'DELETE FROM gamecard WHERE id = $1',
    values: [req.params.id]
  }

  client = clientConnect()
  client.connect()
    .then(()=> client.query(query))
    .then(() => res.status(202).send('Deleted'))
    .then(()=> client.end())
    .catch((error) => res.status(501).send(error))
}

module.exports.deleteOne = deleteOne