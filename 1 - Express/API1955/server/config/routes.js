const births = require('../controllers/births');

module.exports = (app) => {
    app.get('/', (req,res) => births.index(req,res))
    
    app.get('/new/:name', (req,res) => births.create(req,res))
    
    app.get('/remove/:name', (req,res) => births.destroy(req,res))
    
    app.get('/:name', (req,res) => births.show(req,res))
}