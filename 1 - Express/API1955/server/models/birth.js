const mongoose = require('mongoose');


const BirthSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "A name must be provided."],
        //minlength: [3, "Give your animal a longer name."],
    },
}, {timestamps:true});

mongoose.model('Birth', BirthSchema);