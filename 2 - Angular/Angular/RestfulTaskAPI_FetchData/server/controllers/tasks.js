require('../models/task');

const mongoose = require('mongoose'),
    Task = mongoose.model('Task');

module.exports = {
    
    index: (req,res) => {
        Task.find()
            .then(tasks => res.json({results: tasks}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req,res) => {
        console.log(req.params.id);
        Task.findById(req.params.id)
        .then(task => res.json({results: task}))
        .catch(err => res.json({errors: err.errors}));
    },
    create: (req,res) => {
        console.log(req.body);
        Task.create(req.body)
            .then(task => res.json({results: task}))
            .catch(err => res.json({errors: err.errors}));
    },
    update: (req,res) => {
        console.log(req.params.id);
        Task.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators:true, useFindAndModify:false})
        .then(task => res.json({results: task}))
        .catch(err => res.json({errors: err.errors}));
    },
    destroy: (req,res) => {
        console.log(req.params.id);
        Task.findByIdAndDelete(req.params.id)
            .then(birth => res.json({results: task}))
            .catch(err => res.json({errors: err.errors}));
    }
}
