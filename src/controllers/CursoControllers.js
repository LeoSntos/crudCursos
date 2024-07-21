const Curso = require('../models/Curso')

class CursoController {

    async createCurso(request, response) {
        try {
            const dados = request.body

            if (!dados.nome || !dados.duracao) {
                return response.status(400).json({ mensagem: 'Nome e duração são obrigatórios' })
            }

            const curso = await Curso.create(dados)
            response.status(201).json(curso)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao cadastrar o curso' })
        }
    }

    async getCursos(request, response) {
        try {
            const cursos = await Curso.findAll()
            response.status(200).json(cursos)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao buscar os Cursos' })
        }
    }

    async getSpecificCurso(request, response) {
        try {
            const filtro = request.params

            const curso = await Curso.findOne({ where: filtro })

            if (!curso) {
                return response.status(404).json({ mensagem: 'Curso não encontrado' })
            }

            response.status(200).json(curso)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao buscar o curso' })
        }
    }

    async deleteCurso(request, response) {
        try {
            const id = request.params.id

            const curso = await Curso.findByPk(id)

            if (!curso) {
                return response.status(404).json({ mensagem: 'Curso não encontrado' })
            }

            await Curso.destroy({ where: { id } })

            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao deletar o curso' })
        }
    }

    async updateCurso(request, response) {
        try {
            const id = request.params.id
            const dados = request.body

            const curso = await Curso.findByPk(id)

            if (!curso) {
                return response.status(404).json({ mensagem: 'Curso não encontrado' })
            }

            curso.nome = dados.nome
            curso.duracao = dados.duracao
            await curso.save()

            response.status(200).json(curso)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao atualizar o curso' })
        }
    }
}

module.exports = new CursoController()