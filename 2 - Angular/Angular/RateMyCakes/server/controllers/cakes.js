require('../models/cake');

const mongoose = require('mongoose'),
    Rating = mongoose.model('Rating'),
    Cake = mongoose.model('Cake');

module.exports = {

    index: (req,res) => {
        Cake.find()
            .then(cakes => res.json({results: cakes}))
            .catch(err => res.json({errors: err.errors}));
    },
    create: (req,res) => {
        console.log(req.body);
        Cake.create(req.body)
        .then(cake => res.json({results: cake}))
        .catch(err => res.json({errors: err.errors}));
    },
    show: (req,res) => {
        console.log(req.params.id);
        Cake.findById(req.params.id)
        .then(cake => res.json({results: cake}))
        .catch(err => res.json({errors: err.errors}));
    },
    create_rating: (req,res) => {
        console.log(req.params.cake_id);
        console.log(req.body);
        Rating.create(req.body)
            .then(rating => {
                Cake.findByIdAndUpdate(req.params.cake_id, {$push: {ratings: rating}})
                    .then(cake => res.json({results: cake}))
                    .catch(err => res.json({errors: err.errors}));
            })
            .catch(err => res.json({errors: err.errors}));
    }

}