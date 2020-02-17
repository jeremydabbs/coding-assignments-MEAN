require('../models/birth');

const mongoose = require('mongoose'),
    Birth = mongoose.model('Birth');

module.exports = {
    
    index: (req,res) => {
        Birth.find()
            .then(births => res.json({Births: births}))
            .catch(err => res.json(err.errors));
    },
    create: (req,res) => {
        console.log(req.params);
        Birth.create(req.params)
            .then(birth => res.json({birth: birth}))
            .catch(err => res.json(err.errors));
    },
    destroy: (req,res) => {
        console.log(req.params);
        Birth.deleteOne(req.params)
            .then(birth => res.json({birth: birth}))
            .catch(err => res.json(err.errors));
    },
    show: (req,res) => {
        console.log(req.params.name);
        Birth.findOne(req.params)
            .then(birth => res.json({birth: birth}))
            .catch(err => res.json(err.errors));
    }

}
