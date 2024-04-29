const clientConnect = require('./index.js');
const fs = require('fs');
const path = require('path');
const copyFrom = require('pg-copy-streams').from;

// Read from the csv
// Make a call to the Spotify API
// POST it to the database

let inputFile = path.join(__dirname, './csvs/1960s.csv');
let table = 'sixties';

let client = clientConnect();

client.connect();

client.query('DROP TABLE IF EXISTS sixties')

client.query('CREATE TABLE IF NOT EXISTS sixties (id UUID, InCurrentDeck TEXT, Venue TEXT, Date TEXT, City TEXT,State TEXT, Country TEXT, Headliner TEXT, OpeningAct1 TEXT, OpeningAct2 TEXT, OpeningAct3 TEXT, OpeningAct4 TEXT, FunnyNotes TEXT, playdate DATE UNIQUE)');

let stream = client.query(copyFrom(`COPY ${table} FROM STDIN WITH (FORMAT csv, HEADER)`))
let fileStream = fs.createReadStream(inputFile)

fileStream.on('error', (error) =>{
  console.log(`Error in reading file: ${error}`)
})

stream.on('error', (error) => {
  console.log(`Error in copy command: ${error}`)
})

stream.on('end', () => {
  console.log(`Completed loading data into ${table}`);
  client.end();
});

fileStream.pipe(stream);