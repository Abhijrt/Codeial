const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error on connecting to the data base"));
db.once('open',function(){
    console.log("Successfully Connecting");
});

module.exports = db;