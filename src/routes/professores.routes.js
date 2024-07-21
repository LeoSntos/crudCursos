const { Router } = require('express')
const ProfessorControllers = require('../controllers/ProfessorControllers')

const professorRoutes = new Router()

professorRoutes.post('/', ProfessorControllers.createProfessor)
professorRoutes.get('/', ProfessorControllers.getProfessores)
professorRoutes.delete('/:id', ProfessorControllers.deleteProfessor)
professorRoutes.get('/:id', ProfessorControllers.getSpecificProfessor)
professorRoutes.put('/:id', ProfessorControllers.updateProfessor)

module.exports = professorRoutes