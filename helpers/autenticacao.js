const request = require('supertest')
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async (usuario, senha) => {
    const bodyLogin = { ...postLogin }
    const responseLogin = await request(process.env.BASE_URL)
                .post('/login') //o /login é a url
                .set('Content-Type', 'application/json') //set é para colocar o header 
                .send(bodyLogin)

           return responseLogin.body.token

}

module.exports = {
    obterToken
}
