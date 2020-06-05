const express = require("express")
const server= express()
const routes = require('./routes')

//configurar pasta publica
server.use(express.static("public"))

//Habiliar o uso do req.body
server.use(express.urlencoded({ extended: true}))

//template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


//rotas
server.use(routes)


server.listen(3333)