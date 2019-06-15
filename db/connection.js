const mongoose = require("mongoose")

const url = "mongodb://localhost/test"

const options = {
    connectTimeoutMS: 5000,
    reconnectInterval: 100,
    useCreateIndex: true,
    useNewUrlParser: true,
  }


mongoose.connect(url, options);


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo is connected")
});


module.exports = db