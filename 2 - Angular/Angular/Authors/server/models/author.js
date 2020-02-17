const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "An author's name must be provided."],
        minlength: [3, "Names must be at least three characters in length."],
        unique: true,
        uniqueCaseInsensitive: true,
    },
    book1:{
        type: String
    },
    book2:{
        type: String
    },
    book3:{
        type: String
    }
}, {timestamps:true});
AuthorSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
// AuthorSchema.post('save', function(error, doc, next) {
//     if (error.name === 'MongoError' && error.code === 11000) {
//         next(new Error('There was a duplicate key error'));
//     } else {
//         next();
//     }
// });
// AuthorSchema.post('update', function(error, res, next) {
//     if (error.name === 'MongoError' && error.code === 11000) {
//         next(new Error('There was a duplicate key error'));
//     } else {
//         next(); // The `update()` call will still error out.
//     }
// });

mongoose.model('Author', AuthorSchema);