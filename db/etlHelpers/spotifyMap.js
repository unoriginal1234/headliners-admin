const clientConnect = require('../index.js');

let client = clientConnect();

client.connect()
  .then(()=> {
    client.query('DROP TABLE IF EXISTS artists')
      .then(() => console.log('Dropped artists'))
      .catch((error) => console.log(error))
  })
  .then(()=> {
    client.query('CREATE TABLE IF NOT EXISTS artists (artist TEXT)')
      .then(() => console.log('Created artist table'))
      .catch((error) => console.log(error))

  })
  .then(() => {
    client.query('SELECT headliner FROM sixties')
      .then((res) => console.log(res.rows))
      .then(() => client.end()) // toss this on the end of the last command you want to run
  })
  .catch((error) => console.log(error))