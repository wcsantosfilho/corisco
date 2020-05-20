const RegistroAposta = require('./registroAposta')

// Endpoints da API
addAposta = async (req, res, next) => {
    try{
        var aposta = await new RegistroAposta.apostas(req.body)
        console.log(req.body)
        var result = aposta.save()
        res.status(201)
        res.send(aposta)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

addPalpitesDaAposta = async (req, res, next) => {
    try{
        var palpitesDaAposta = await new RegistroAposta.palpites(req.body)
        var result = palpitesDaAposta.save()
        res.send(itensDaAposta)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports = { addAposta, addPalpitesDaAposta }
