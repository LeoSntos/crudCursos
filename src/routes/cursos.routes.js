const { Router } = require('express')
const CursoControllers = require('../controllers/CursoControllers')

const cursoRoutes = new Router()

cursoRoutes.post('/', CursoControllers.createCurso)
cursoRoutes.get('/', CursoControllers.getCursos)
cursoRoutes.get('/:id', CursoControllers.getSpecificCurso)
cursoRoutes.put('/:id', CursoControllers.updateCurso)
cursoRoutes.delete('/:id', CursoControllers.deleteCurso)

module.exports = cursoRoutes