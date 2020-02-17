const express = require("express");
const app = express();

//app.use(express.static(__dirname + "/static"));  //you will need to create a static folder
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  //you will need to create a views folder
app.use(express.urlencoded({extended: true}));  //to accept POST data

const mongoose = require('mongoose');
require('./server/config/mongoose.js')

//this is where my schema was
require('./server/models/quote.js')

//this is where my routes were
require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));