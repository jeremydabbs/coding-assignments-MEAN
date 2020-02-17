const mongoose = require('mongoose');


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

mongoose.model('Animal', AnimalSchema);