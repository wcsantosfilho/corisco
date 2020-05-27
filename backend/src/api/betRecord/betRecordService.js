const betRecord = require('./betRecord')

// Endpoints da API
/*
 * addBet
 * 
 * add a Bet to the database
 */
addBet = async (req, res, next) => {
    try{
        var bet = await new betRecord.bets(req.body)
        console.log(req.body)
        var result = bet.save()
        res.status(201)
        res.send(bet)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
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
        console.log('getCurrentBet')
        res.status(200).send(result[0])
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
module.exports = { addBet, getCurrentBet }
