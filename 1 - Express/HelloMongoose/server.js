const express = require("express");
const app = express();
app.get('/', (req, res) => {
    //response.send("Hello Express");
    res.render("index");
});
app.listen(8000, () => console.log("listening on port 8000"));

app.use(express.static(__dirname + "/static"));  //you will need to create a static folder
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  //you will need to create a views folder
app.use(express.urlencoded({extended: true}));  //to accept POST data

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pirates', {useNewUrlParser: true, useUnifiedTopology: true});

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
    }, {timestamps: true})
   // create an object that contains methods for mongoose to interface with MongoDB
    const User = mongoose.model('User', UserSchema);

app.post('/users', (req, res) => {
    const user = new User();
      user.name = req.body.name;
      user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));
        
      res.redirect('/');
    })
    
app.get('/', (req, res) => {  
        User.find()
            .then(data => res.render("index", {users: data}))
            .catch(err => res.json(err));
    });