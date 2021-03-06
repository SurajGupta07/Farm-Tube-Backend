const mongoose = require('mongoose');
const dbConnection = process.env['DB_CONNECTOR'];

function initalizeDBConnection() {
  mongoose.connect(dbConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Successfully connected to the Database"))
  .catch(error => console.error("Failed to connect", error))
}

module.exports = { initalizeDBConnection }