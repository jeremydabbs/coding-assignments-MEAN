const mongoose = require('mongoose');


const RatingSchema = new mongoose.Schema({
    rating:{
        type: Number,
        required: [true, "A rating must be provided."],
        min: [1, "Minimum rank is 1."],
        max: [5, "Maximum rank is 5."]
    },
    comment:{
        type: String,
        required: [true, "A comment regarding your rating must be provided."],
        minlength: [3, "Please make a longer comment."],
    },
}, {timestamps:true});

const CakeSchema = new mongoose.Schema({
    baker_name:{
        type: String,
        required: [true, "A name must be provided."],
        minlength: [3, "Please make a longer name."],
    },
    image_url:{
        type: String,
        required: [true, "An image url must be provided."],
    },
    ratings: [RatingSchema]
}, {timestamps:true});

mongoose.model('Rating', RatingSchema);
mongoose.model('Cake', CakeSchema);