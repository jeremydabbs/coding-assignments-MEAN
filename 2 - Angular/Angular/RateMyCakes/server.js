const express = require("express");
const app = express();
// app.get('/', (req, res) => {
//    res.send("Hello Express");
//    //res.render("index");
// });
app.listen(8000, () => console.log("listening on port 8000"));

app.use(express.json());

require('./server/config/database');
require('./server/config/routes')(app);

app.use(express.static( __dirname + '/public/dist/public' ));

