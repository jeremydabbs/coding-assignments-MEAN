const express = require("express");
const app = express();
app.get('/', (req, res) => {
    //response.send("Hello Express");
    res.render("index");
});
app.listen(8000, () => console.log("listening on port 8000"));

//app.use(express.static(__dirname + "/static"));  //you will need to create a static folder
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  //you will need to create a views folder
app.use(express.urlencoded({extended: true}));  //to accept POST data

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotingdojo', {useNewUrlParser: true, useUnifiedTopology: true});

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter the name of the quoted person."],
        minlength: [2, "Names must be at least two characters."]
    },
    quote:{
        type: String,
        required: [true, "Please enter a quote."],
        minlength: [4, "Quotes must have at least four characters."]
    }
    }, {timestamps: true})
   // create an object that contains methods for mongoose to interface with MongoDB
    const User = mongoose.model('User', UserSchema);

app.post('/quotes', (req, res) => {
    const user = new User();
      user.name = req.body.name;
      user.quote = req.body.quote;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => res.json(err.errors));
    res.redirect('/quotes');
    })
    
app.get('/quotes', (req, res) => {  
    User.find().sort({createdAt: -1})
        .then(data => res.render("quotes", {users: data}))
        .catch(err => res.json(err.errors));
    });