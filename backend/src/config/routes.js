const express = require('express')
const registroDeAposta = require('../api/registroDeAposta/RegistroDeApostaService')

module.exports = function(server) {
    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // bar seria uma outra rota alternativa a /api
    server.use('/bar', (req,res,next) => {
        console.log('%s %s %s', req.method, req.url, req.path)
        res.status(200)
        res.send()
        next()
    })

    // foo fica dentro de /api
    router.use('/foo', (req, res, next) => {
        try {
            var result = { "xpto": "abcd" }
            res.set('Content-Type', 'application/json; charset=utf-8')
            res.status(200).json(result)
            next()
        } catch (error) {
            res.status(500).send(error)
        }
    })

    // estas ficam dentro de api e estão definidas em RegistroDeApostaService.js
    router.use('/addAposta', registroDeAposta.addAposta)
    router.use('/addPalpitesDaAposta', registroDeAposta.addPalpitesDaAposta)
}