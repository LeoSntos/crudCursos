const { DataTypes } = require("sequelize");
const conexao = require("../db/conexao");

const Curso = conexao.define('cursos', {
    nome: {
        type: DataTypes.STRING
    },
    duracao: {
        type: DataTypes.INTEGER
    }
}, {
    paranoid: true
})

module.exports = Curso