const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')
const conexao = require('./db/conexao')

const APP_PORT = process.env.APP_PORT

class Server {
    constructor(server = express()) {
        this.middlewares(server)
        this.database()
        server.use(routes)
        this.initalizeServer(server)
    }

    async middlewares(server) {
        console.log("executando middlewares")
        server.use(cors()) 
        server.use(express.json())
        console.log("middlewares executados")
    }

    async database() {
        try {
            console.log("executando database")
            await conexao.authenticate()
            console.log("database executado com sucesso")
        } catch (error) {
            console.log("houve um erro ao conectar ao database")
            console.log(error)
        }
    }

    async initalizeServer(server) {
        server.listen(APP_PORT, () => {
            console.log(`server running on port ${APP_PORT}`)
        })
    }
}

module.exports = { Server }
