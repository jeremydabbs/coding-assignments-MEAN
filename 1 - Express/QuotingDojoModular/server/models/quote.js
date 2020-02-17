const mongoose = require('mongoose');


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
