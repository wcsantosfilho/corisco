module.exports = function(req, res, next) {
    res.header('Acess-Control-Allow-Origin', 'http://localhost:8080/')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    next()
}