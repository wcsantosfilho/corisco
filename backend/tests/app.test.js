const test = require('tape')
const supertest = require('supertest')
const app = require('../src/loader')
/**
  * @desc Chama app.server porque foram exportados "server" e "db"
        para que o teste possa fechar a conexao do db ao final e 
        o teste não ficar suspenso
*/

/**
  * @desc Testes da API
  * @param  string testDescription - the message to be displayed
            callback - tests to be done
  * @return ???
*/
test('#A1 - POST de: /api/addAposta/', function (t) {
    supertest(app.server)
    .post('/api/addAposta/')
    .send({ dataAposta: "2020-01-05T22:00:00.000Z", 
        numeroConcurso: 1020 }
    )
    .expect('Content-Type', /json/)
    .expect(201)
    .end((err, res) => {
        // TESTE 1
        t.error(err, 'Sem erros na execução do POST')
        t.end()
    })
})


/**
  * @desc Teste de leitura da API
  * @param  string testDescription - the message to be displayed
            callback - tests to be done
  * @return ???
*/
test('#Z - Dummy', function (t) {
    // Chama app.server porque foram exportados "server" e "db"
    // para que o teste possa fechar a conexao do db ao final e 
    // o teste não ficar suspenso
    supertest(app.server)
    .get('/api/foo/')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .end((err, res) => {
        console.log(res.body);
        // TESTE 1
        t.error(err, 'Sem erros na execução do GET')
        
        // Fecha a conexão com o banco para encerrar o teste, 
        // caso contrário ficava suspenso
        app.db.connection.close()
        t.end()
    })
})

