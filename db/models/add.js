require('dotenv').config()
const clientConnect = require('../index.js')
const axios = require('axios')

const add = (req, res) => {
  // console.log(req.body.headliner)
  const venue = {
    Name: req.body.venue,
    Date: req.body.date,
    Location: req.body.location
  }

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
      const headliner = response.data.artists.items[0] // this is the return info of the first found artist

      const openerSpotifyCall = req.body.openers.map((opener) => {
        return axios.get(`https://api.spotify.com/v1/search`, {
          params: {
            q: opener,
            type: 'artist'
          },
          headers: {
            Authorization: process.env.SPOTIFY_AUTH
          }}
        )
        .then((response) => {return response.data.artists.items[0]})
        .catch((error)=> {return error})
      })

      Promise.all(openerSpotifyCall)
        .then((values) => {
          const openers = values

          console.log(openers);
          console.log(headliner);

          let insertQuery = {
            text: `INSERT INTO gamecard (id, venue, headliner, openers, isplaying, playdate) VALUES (gen_random_uuid (), $1, $2, $3, false, NULL)`,
            values: [venue, headliner, openers]}

          let insertQuery2 = {
            text: 'INSERT INTO artists (artist) VALUES ($1) ON CONFLICT (artist) DO NOTHING',
            values: [headliner.name]
          }

          client = clientConnect()
          client.connect()
            .then(()=> client.query(insertQuery2))
            .catch((error) => console.log(error))
            .then(()=>client.query(insertQuery))
            .then(()=> res.status(200).send('inserted'))
            .then(()=> client.end())
            .catch((error) => {
              console.log(error)
              res.status(501).send(error)})
        })
    })
    .catch((error) => {
      res.status(502).send(error)
    });


}

module.exports.add = add