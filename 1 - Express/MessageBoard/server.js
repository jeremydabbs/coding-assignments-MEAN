const express = require("express");
const app = express();
// app.get('/', (req, res) => {
//    //res.send("Hello Express");
//    res.render("index");
// });
app.listen(8000, () => console.log("listening on port 8000"));

app.use(express.static(__dirname + "/static"));  //you will need to create a static folder
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  //you will need to create a views folder
app.use(express.urlencoded({extended: true}));  //to accept POST data

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MongooseDashboard', {useNewUrlParser: true, useUnifiedTopology: true});

const CommentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Your name must be provided."],
        minlength: [2, "Names must be at least two characters in length."],
    },
    comment:{
        type: String,
        required: [true, "A comment must be provided."],
        minlength: [2, "Please submit a longer comment."],
        maxlength: [1000,"Too long, did not read."]
    }
}, {timestamps:true});
const MessageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Your name must be provided."],
        minlength: [2, "Names must be at least two characters in length."],
    },
    message:{
        type: String,
        required: [true, "A message must be provided."],
        minlength: [2, "Please submit a longer message."],
        maxlength: [1000,"Too long, did not read."]
    },
    comments: [CommentSchema]
}, {timestamps:true});

const Comment = mongoose.model("Comment", CommentSchema);
const Message = mongoose.model("Message", MessageSchema);

app.get('/', (req,res) => {
    //res.render("index");
    Message.find()
        .then(messages => res.render('index', {allMessages: messages}))
        //.then(comments => res.render('index', {allComments: comments}))
        .catch(err => res.json(err.errors));
    // Comment.find()
    //     .then(comments => res.render('index', {allComments: comments}))
    //     .catch(err => res.json(err.errors));
})

app.post('/message', (req,res) => {
    console.log(req.body);
    Message.create(req.body)
        .then(message => {
            res.redirect('/');
        })
        .catch(err => res.json(err.errors));
})

app.post('/comments/:message_id', (req,res) => {
    console.log(req.body);
    Comment.create(req.body)
        .then(comment => {
            Message.findByIdAndUpdate(req.params.message_id, {$push: {comments: comment}})
                .then(result => {res.redirect('/')})
                .catch(err => res.json(err.errors));
        })
        .catch(err => res.json(err.errors));
});