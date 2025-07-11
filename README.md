# Banco API Tests

## 📌 Descrição do Projeto

Este projeto tem como objetivo **automatizar os testes** da [API REST Banco](https://github.com/juliodelimas/banco-api) utilizando JavaScript e bibliotecas específicas para testes de APIs. Ele garante que os endpoints da API estejam funcionando conforme o esperado, validando respostas, status codes e integridade dos dados.

## ⚙️ Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de Asserções:** [Chai](https://www.chaijs.com/)
- **Requisições HTTP:** [Supertest](https://www.npmjs.com/package/supertest)
- **Relatórios:** [Mochawesome](https://www.npmjs.com/package/mochawesome)

## 📂 Estrutura de Diretórios

```
├── test/               # Scripts de testes automatizados
├── mochawesome/        # Relatórios em HTML gerados após execução dos testes
├── node_modules/       # Dependências do projeto
├── .env                # Variáveis de ambiente (não incluso no repositório)
├── .gitignore
├── package.json        # Dependências e scripts npm
├── package-lock.json
```

## 🔑 Variáveis de Ambiente (.env)

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=https://url-da-api.com
```

Substitua o valor pelo endpoint base da API que será testada.

## 🚀 Comandos de Execução

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npm test
```

Gere o relatório HTML com o Mochawesome:

```bash
npx mocha test --reporter mochawesome
```

Após a execução, o relatório estará disponível no diretório `mochawesome`.

## 📚 Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Mochawesome](https://www.npmjs.com/package/mochawesome)

## 👩‍💻 Autor

Este projeto foi desenvolvido por [Michele Bruna](https://github.com/michelebruna).
