const { Sequelize } = require('sequelize')
const databaseConfig = require('../config/database.config')

const conexao = new Sequelize(databaseConfig)

module.exports =  conexao 



