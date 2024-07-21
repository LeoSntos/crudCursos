const conexao = require('../db/conexao')

const Professor = conexao.define('professores', {
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    }
})

module.exports = Professor