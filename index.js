const express = require('express');
const app = express();
const port = 8000;
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error on running port : ${port}`);
        return;
    }
    console.log(`Start server on port : ${port}`);
});