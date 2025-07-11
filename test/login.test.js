//const { describe } = require("mocha");
const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

//Vai usar o supertest para fazer uma requisição para a API passando credenciais válidas e vamos esperar o status code 200 e que a propriedade token seja String

//este teste é do Mocha

//Quando tem dentro do método que retorna uma promesse, precisa usar o await. E se usar o await, precisa usar o async antes da função anônima
describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            const bodyLogin = {...postLogin}
            const response = await request(process.env.BASE_URL)
                .post('/login') //o /login é a url
                .set('Content-Type', 'application/json') //set é para colocar o header 
                .send(bodyLogin)

            expect(response.status).to.equal(200);
            expect(response.body.token).to.be.a('string');
        })

    })
})