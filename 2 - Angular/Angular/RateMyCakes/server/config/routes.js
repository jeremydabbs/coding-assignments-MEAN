const cakes = require('../controllers/cakes');


module.exports = (app) => {
    app.get('/api/cakes', (req,res) => cakes.index(req,res))

    app.post('/api/cake/create', (req,res) => cakes.create(req,res))
    
    app.get('/api/cake/:id', (req,res) => cakes.show(req,res))

    app.post('/api/cake/:cake_id/comment', (req,res) => cakes.create_rating(req,res))

}