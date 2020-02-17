const express = require("express");
const app = express();

app.listen(8000, () => console.log("listening on port 8000"));



app.use(express.static(__dirname + "/static"));  //you will need to create a static folder
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  //you will need to create a views folder
app.use(express.urlencoded({extended: true}));  //to accept POST data


require('./server/config/database');
require('./server/config/routes')(app);

