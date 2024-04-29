const clientConnect = require('./index.js')
const fakeData = require('./fakeData.js')

const client = clientConnect()

const insertQuery1 = {
  text: `INSERT INTO gamecard (id, Venue, Headliner, Openers, isPlaying, playdate) VALUES (gen_random_uuid (), $1, $2, $3, true, '2024-04-27')`,
  values: [fakeData[0].venue, fakeData[0].headliner, fakeData[0].openers]
}

const insertQuery2 = {
  text: `INSERT INTO gamecard (id, Venue, Headliner, Openers, isPlaying, hasPlayed) VALUES (2, $1, $2, $3, false, false)`,
  values: [fakeData[1].venue, fakeData[1].headliner, fakeData[1].openers]
}

const insertQuery3 = {
  text: `INSERT INTO gamecard (id, Venue, Headliner, Openers, isPlaying, hasPlayed) VALUES (3, $1, $2, $3, false, false)`,
  values: [fakeData[2].venue, fakeData[2].headliner, fakeData[2].openers]
}

client.connect()
  // .then(()=> client.query('SELECT * FROM test')
  // .then((result) => console.log(result.rows))
  .then(()=> client.query('DROP TABLE IF EXISTS gamecard'))
  .then(()=> client.query('CREATE TABLE IF NOT EXISTS gamecard (id UUID NOT NULL PRIMARY KEY, venue jsonb, headliner jsonb, openers jsonb[], isplaying boolean, playdate DATE UNIQUE)'))
  .then((res)=> console.log('Table created'))
  //.then(()=> client.query(insertQuery1))
  //.then(()=> client.query('DELETE FROM gamecard WHERE id =2'))
  .then(()=> client.query(insertQuery1))
  .then(()=> client.query('SELECT * FROM gamecard'))
  .then((result) => console.log(result.rows))
  .catch((error) => console.log(error))
  .then((res)=> client.end())


