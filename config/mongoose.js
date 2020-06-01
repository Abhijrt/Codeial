const mongoose = require('mongoose');
const env = require('./environment');
mongoose.connect(`mongodb://localhost/${env.db}`);

const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error on connecting to the data base"));
db.once('open',function(){
    console.log("Successfully Connecting");
});

module.exports = db;