const { Router } = require('express')
const cursoRoutes = require('./cursos.routes')


const routes = new Router()

routes.use('/cursos', cursoRoutes)

module.exports = routes 