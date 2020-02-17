require('../models/product')
const mongoose = require('mongoose'),
    Product = mongoose.model("Product");
    
module.exports = {
    index: (req, res) => {
        Product.find()
            .then(result => res.json({ results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json({ errors: err.errors  }));
    },
    create: (req, res) =>{
        Product.create(req.body)
            .then(result => res.json({ results: result }))
            .catch( err => res.json({errors: err.errors}));
    },
    update: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id},req.body,{runValidators: true,useFindAndModify: false})
            .then(result => res.json({ results : result }))
            .catch(err => res.json({ errors: err.errors }));
    },
    destroy: (req,res) => {
        Product.deleteOne({_id:req.params.id})
            .then(result => res.json({ results: result }))
            .catch(err => res.json({ errors: err.errors }));
    }
}