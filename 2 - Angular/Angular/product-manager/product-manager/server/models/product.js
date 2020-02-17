const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, "Is this even a product?"],
        minlength: [3, "A product must be more than 3 characters"]
    },
    
    price: {
        type: Number,
        required: [true, "Hey oh, YO, we ain't giving this away, add price."]
    },
    
    image_src:{
        type: String,
        required: [true, "I believe you can do better :D"]
    },
    likes:{
        type: Number,
        default: 0
    }
},{timestamps: true});


mongoose.model("Product",ProductSchema);