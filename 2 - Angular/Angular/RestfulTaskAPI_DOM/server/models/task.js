const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "A title must be provided."],
        minlength: [3, "Please make a longer title."],
    },
    description:{
        type: String,
        default: null,
    },
    completed:{
        type: Boolean,
        default: false
    },
}, {timestamps:true});

mongoose.model('Task', TaskSchema);