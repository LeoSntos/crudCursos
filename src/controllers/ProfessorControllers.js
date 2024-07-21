const Professor = require('../models/Professor')

class ProfessorController {

    async createProfessor(request, response) {
        try {
            const dados = request.body

            if (!dados.nome || !dados.email || !dados.senha) {
                return response.status(400).json({ mensagem: 'Nome, email e senha são obrigatórios' })
            }

            const professor = await Professor.create(dados)

            response.status(201).json(professor)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao cadastrar o professor' })
        }
    }

    async getProfessores(request, response) {
        try {
            const professores = await Professor.findAll()
            response.status(200).json(professores)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao buscar os professores' })
        }
    }

    async getSpecificProfessor(request, response) {
        try {
            const filtro = request.params

            const professor = await Professor.findOne({ where: filtro })

            if (!professor) {
                return response.status(404).json({ mensagem: 'Professor não encontrado' })
            }

            response.status(200).json(professor)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao buscar o professor' })
        }
    }

    async deleteProfessor(request, response) {
        try {
            const id = request.params.id

            const professor = await Professor.findByPk(id)

            if (!professor) {
                return response.status(404).json({ mensagem: 'Professor não encontrado' })
            }

            await Professor.destroy({ where: { id } })

            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao deletar o professor' })
        }
    }

    async updateProfessor(request, response) {
        try {
            const id = request.params.id
            const dados = request.body

            const professor = await Professor.findByPk(id)

            if (!professor) {
                return response.status(404).json({ mensagem: 'Professor não encontrado' })
            } else if (!dados.nome || !dados.email || !dados.senha) {
                return response.status(400).json({ mensagem: 'Nome, email e senha são obrigatórios' })
            }

            nome = dados.nome
            email = dados.email
            senha = dados.senha
            await professor.save()

            response.status(200).json(professor)
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'houve um erro ao atualizar o professor' })
        }
    }
}

module.exports = new ProfessorController()