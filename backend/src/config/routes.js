const express = require('express')
const betRecords = require('../api/betRecord/betRecordService')

module.exports = function(server) {
    /*
     * Define base URL to all routes
     * Definir URL base para todas as rotas
     */
    const router = express.Router()
    server.use('/api', router)

    /* 
     * 'bar' is a alternative to /api route
     */
    server.use('/bar', (req,res,next) => {
        console.log('%s %s %s', req.method, req.url, req.path)
        res.status(200)
        res.send()
        next()
    })

    /*
     * 'foo' works insede /api
     */
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

    /*
     * The endpoints below stay under /api/ and are defined in betRecordService.js
     */
    router.use('/addBet', betRecords.addBet)
    router.use('/getCurrentBet', betRecords.getCurrentBet)

}