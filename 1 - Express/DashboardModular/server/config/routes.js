const animals = require('../controllers/animals');


module.exports = (app) => {
    app.get('/', (req,res) => animals.index(req,res))
    
    app.get('/mongooses/new', (req,res) => animals.new(req,res))
    
    app.post('/mongooses', (req,res) => animals.create(req,res))
    
    app.get('/mongooses/:id', (req,res) => animals.show(req,res))
    
    app.get('/mongooses/edit/:id', (req,res) => animals.edit(req,res))
    
    app.post('/mongooses/:id', (req,res) => animals.update(req,res))
    
    app.get('/mongooses/destroy/:id', (req,res) => animals.destroy(req,res))
}