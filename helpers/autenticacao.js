const request = require('supertest')

const obterToken = async (usuario, senha) => {
    const responseLogin = await request(process.env.BASE_URL)
                .post('/login') //o /login é a url
                .set('Content-Type', 'application/json') //set é para colocar o header 
                .send({ //send é o body
                    'username': usuario,
                    'senha': senha
                })

           return responseLogin.body.token

}

module.exports = {
    obterToken
}
