require('dotenv').config;

const express = require('express'),
    app = express(),
    uri = process.env.PORT || 8000,
    path = require('path'),
    server = app.listen(uri, () => console.log(`Listening on port ${uri}`))

app.use(express.json())

require('./server/config/database')
require('./server/config/routes')(app)
app.use(express.static(__dirname + '/public/dist/public'));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});