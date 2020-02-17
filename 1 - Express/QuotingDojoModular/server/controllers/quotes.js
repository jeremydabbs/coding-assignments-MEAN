const mongoose = require('mongoose');
const User = mongoose.model('User');

// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
        // code...
        res.render("index");
    },
    
    create: function(req, res) {
        // code...
        const user = new User();
        user.name = req.body.name;
        user.quote = req.body.quote;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => res.json(err.errors));
    res.redirect('/quotes');
    },
    
    display: function(req, res) {
        // code...
        User.find().sort({createdAt: -1})
            .then(data => res.render("quotes", {users: data}))
            .catch(err => res.json(err.errors));
    }
};
