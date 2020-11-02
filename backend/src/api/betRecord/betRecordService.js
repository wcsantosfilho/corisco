const betRecord = require('./betRecord')

// Endpoints da API
/*
 * addBet
 * 
 * add a Bet to the database
 */
addBet = async (req, res, next) => {
    try {
        console.log('antes do save')
        console.log(req.body)
        const bet = await new betRecord.bets( {...req.body} ).save()
        res.send(bet)
    } catch (err) {
        console.log('Erro encontrado: ' + err)
        res.status(422).send(err)
    }
}

/*
 * getCurrentBet
 * 
 * get the most recent Bet
 */
getCurrentBet = async (req, res, next) => {
    try{
        var bet = betRecord.bets
        var result = await bet.find().limit(1).sort( { finalRound: -1 })
        res.status(200).send(result[0])
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

/*
 * getBets
 * 
 * List all bets
 */
getBets = async (req, res, next) => {
    try{
        var bet = betRecord.bets
        var result = await bet.find().sort( { finalRound: -1 })
        res.status(200).send(result)
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
module.exports = { addBet, getCurrentBet, getBets }
