const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
app.use(express.urlencoded());
app.use(expressLayouts);
app.use(express.static('./assets'));
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(cookieParser);
app.listen(port, function(err){
    if(err){
        console.log(`Error on running port : ${port}`);
        return;
    }
    console.log(`Start server on port : ${port}`);
});