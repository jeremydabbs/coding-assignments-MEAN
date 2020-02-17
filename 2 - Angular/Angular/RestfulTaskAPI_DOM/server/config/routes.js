const tasks = require('../controllers/tasks');

module.exports = (app) => {
    app.get('/api/tasks', (req,res) => tasks.index(req,res))
    
    app.get('/api/task/:id', (req,res) => tasks.show(req,res))
    
    app.post('/api/task/create', (req,res) => tasks.create(req,res))

    app.put('/api/task/update/:id', (req,res) => tasks.update(req,res))
    
    app.delete('/api/task/destroy/:id', (req,res) => tasks.destroy(req,res))
}