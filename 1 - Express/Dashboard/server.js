const express = require("express");
const app = express();
// app.get('/', (req, res) => {
//     //res.send("Hello Express");
//     res.render("index");
// });
app.listen(8000, () => console.log("listening on port 8000"));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MongooseDashboard', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static(__dirname + "/static"));  //you will need to create a static folder
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  //you will need to create a views folder
app.use(express.urlencoded({extended: true}));  //to accept POST data

const AnimalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "An animal must have a name."],
        minlength: [3, "Give your animal a longer name."],
    },
    stripes:{
        type: Number,
        required: [true, "An animal must have stripes."],
        min:[1,"One is the loneliest stripe."]
    },
    description:{
        type: String,
        required: [true, "Tell us more..."],
        maxlength: [300,"Too long, did not read."]
    }
}, {timestamps:true});

const Animal = mongoose.model("Animal", AnimalSchema);


app.get('/', (req,res) => {
    Animal.find()
        .then(animals => res.render('index', {allAnimals: animals}))
        .catch(err => res.json(err.errors));
})

app.get('/mongooses/new', (req,res) => {
    res.render('new');
})

app.post('/mongooses', (req,res) => {
    console.log(req.body);
    Animal.create(req.body)
        .then(animal => {
            res.redirect('/');
        })
        .catch(err => res.json(err.errors));
})

app.get('/mongooses/:id', (req,res) => {
    console.log(req.params.id);  //id on this line refers to the parameter taken on line above
    Animal.findById(req.params.id)
        .then(animal => res.render('show', {animal: animal}))
        .catch(err => res.json(err.errors));
})

app.get('/mongooses/edit/:id', (req,res) => {
    console.log(req.params.id);  //id on this line refers to the parameter taken on line above
    Animal.findById(req.params.id)
        .then(animal => res.render('edit', {animal: animal}))
        .catch(err => res.json(err.errors));
})

app.post('/mongooses/:id', (req,res) => {
    console.log(req.params.id);
    Animal.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
        .then( animal => res.redirect('/'))
        .catch(err => res.json(err.errors));
})

app.get('/mongooses/destroy/:id', (req,res) => {
    console.log(req.params.id);
    Animal.deleteOne({_id: req.params.id})
        .then(result => res.redirect('/'))
        .catch(err => res.json(err.errors));
})