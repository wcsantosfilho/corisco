const Mongoose = require('mongoose')

const palpitesSchema = new Mongoose.Schema({
    numeroPalpite: { type: Number, min: 0, required: true},
})

const apostaSchema = new Mongoose.Schema({
    dataAposta: { type: Date, required: true },
    numeroConcurso: { type: Number, min: 0, required: true},
    palpites: [ palpitesSchema ]
})


var apostas = Mongoose.model('apostas', apostaSchema)
var palpites = Mongoose.model('palpites', palpitesSchema)

module.exports = { apostas, palpites }