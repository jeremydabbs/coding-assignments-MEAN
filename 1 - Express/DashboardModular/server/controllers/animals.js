require('../models/animal');

const mongoose = require('mongoose'),
    Animal = mongoose.model('Animal');

module.exports = {
    index: (req,res) => {
        Animal.find()
            .then(animals => res.render('index', {allAnimals: animals}))
            .catch(err => res.json(err.errors));
    },
    new: (req,res) => {
        res.render('new');
    },
    create: (req,res) => {
    console.log(req.body);
    Animal.create(req.body)
        .then(animal => {
            res.redirect('/');
        })
        .catch(err => res.json(err.errors));
    },
    show: (req,res) => {
        console.log(req.params.id);  //id on this line refers to the parameter taken on line above
        Animal.findById(req.params.id)
            .then(animal => res.render('show', {animal: animal}))
            .catch(err => res.json(err.errors));
    },
    edit: (req,res) => {
        console.log(req.params.id);  //id on this line refers to the parameter taken on line above
        Animal.findById(req.params.id)
            .then(animal => res.render('edit', {animal: animal}))
            .catch(err => res.json(err.errors));
    },
    update: (req,res) => {
        console.log(req.params.id);
        Animal.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
            .then( animal => res.redirect('/'))
            .catch(err => res.json(err.errors));
    },
    destroy: (req,res) => {
        console.log(req.params.id);
        Animal.deleteOne({_id: req.params.id})
            .then(result => res.redirect('/'))
            .catch(err => res.json(err.errors));
    }
}