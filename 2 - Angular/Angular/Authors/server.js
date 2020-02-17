const express = require("express");
const app = express();
const path = require('path');

app.listen(8000, () => console.log("listening on port 8000"));

app.use(express.json());


require('./server/config/database');
require('./server/config/routes')(app);

app.use(express.static( __dirname + '/public/dist/public' ));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});