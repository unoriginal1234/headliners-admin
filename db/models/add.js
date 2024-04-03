require('dotenv').config()
const clientConnect = require('../index.js')
const axios = require('axios')

const add = (req, res) => {
  console.log(req.body.headliner)
  axios.get(`https://api.spotify.com/v1/search`, {
    params: {
      q: req.body.headliner,
      type: 'artist'
    },
    headers: {
      Authorization: process.env.SPOTIFY_AUTH
    }}
  )
    .then((response) => {
      console.log(response.data.artists.items[0])
      res.status(200).send()
    })
    .catch((error) => {
      res.status(502).send(error)
    });
  // client = clientConnect()
  // client.connect()
  //   .then(()=> console.log(req.body.headliner))
  //   .then(()=> res.status(200))
  //   // .then(()=> client.query())
  //   .then(()=> client.end())
  //   .catch((error) => res.status(501).send(error))
}

module.exports.add = add