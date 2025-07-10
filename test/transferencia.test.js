const request = require('supertest')
const { expect } = require('chai')

describe('Transferências', () => {
    describe('POST /trasnferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
            // Capturar o token
            const responseLogin = await request('http://localhost:3000')
                .post('/login') //o /login é a url
                .set('Content-Type', 'application/json') //set é para colocar o header 
                .send({ //send é o body
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = responseLogin.body.token

            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //modelo mais elegante de concatenação
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ''
                })

                expect(response.status).to.equal(201)

                console.log(response.body)


        })

        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
            const responseLogin = await request('http://localhost:3000')
                .post('/login') //o /login é a url
                .set('Content-Type', 'application/json') //set é para colocar o header 
                .send({ //send é o body
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = responseLogin.body.token

            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //modelo mais elegante de concatenação
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 7,
                    token: ''
                })

                expect(response.status).to.equal(422)

        })
    })

})