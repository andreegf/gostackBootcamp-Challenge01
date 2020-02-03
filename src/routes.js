const { Router } = require('express')

const ProjectController  = require ('./controllers/ProjectController')
const { checkProjectIdExists } = require('./middlewares')

const routes = Router()

routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.store)
routes.post('/projects/:id/tasks',checkProjectIdExists, ProjectController.storeTask)
routes.put('/projects/:id', checkProjectIdExists, ProjectController.update)
routes.delete('/projects/:id', checkProjectIdExists, ProjectController.delete )

module.exports = routes