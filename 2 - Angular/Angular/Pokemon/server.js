const express = require("express");
const app = express();

app.listen(8000, () => console.log("listening on port 8000"));

app.use(express.json());


//require('./server/config/database');
//require('./server/config/routes')(app);

app.use(express.static( __dirname + '/public/dist/public' ));