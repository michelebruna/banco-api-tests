const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao.js')
const postTransferencias = require('../fixtures/postTransferencias.json')


describe('Transferências', () => {
    describe('POST /transferencias', () => {
        let token

        beforeEach(async () =>{
            // Capturar o token
            
            token = await obterToken('julio.lima', '123456')

        })

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
            const bodyTransferencias = { ...postTransferencias} //shallow copy funciona apenas quando os dados estão em primeiro nível. Se houver uma lista, por exemplo, não funcionará

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //modelo mais elegante de concatenação
                .send(bodyTransferencias)

                expect(response.status).to.equal(201)

                console.log(response.body)


        })

        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
            const bodyTransferencias = { ...postTransferencias} 
            bodyTransferencias.valor = 7

            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //modelo mais elegante de concatenação
                .send(bodyTransferencias)

                expect(response.status).to.equal(422)

        })
    })

})