require('../models/author');

const mongoose = require('mongoose'),
    Author = mongoose.model('Author');

module.exports = {

    index: (req,res) => {
        Author.find().collation({locale:'en',strength: 3}).sort({name: 1})
            .then(authors => res.json({results: authors}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req,res) => {
        console.log(req.params.id);
        Author.findById(req.params.id)
        .then(author => res.json({results: author}))
        .catch(err => res.json({errors: err.errors}));
    },
    create: (req,res) => {
        console.log(req.body);
        Author.create(req.body)
            .then(author => res.json({results: author}))
            .catch(err => res.json({errors: err.errors}));
    },
    update: (req,res) => {
        console.log(req.params.id);
        Author.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators:true, context: 'query', useFindAndModify:false})//context was added for the uniqueValidator to work with findByIdAndUpdate
            .then(author => res.json({results: author}))
            .catch(err => res.json({errors: err.errors}));
    },
    destroy: (req,res) => {
        console.log(req.params.id);
        Author.findByIdAndDelete(req.params.id)
            .then(author => res.json({results: author}))
            .catch(err => res.json({errors: err.errors}));
    }

}