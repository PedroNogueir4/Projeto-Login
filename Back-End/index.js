const express = require('express')
const uuid = require('uuid')
const cors = require('cors')
const { request, response } = require('express')

const app = express()
app.use(express.json())
app.use(cors())

const port = 3001
const Users = []


const checkUser = (request, response, next) => {

    const { Email } = request.body

    const index = Users.findIndex(user => user.Email === Email)

    if (index < 0) {
        return response.status(404).json({ error: "Usuário não encontrado!" })
    }
    next()
}

app.post('/', checkUser, (request, response) => {

    const userData = {
        Email: request.body,
        Senha: request.body
    }
console.log(userData)
 return response.json({ message: "usuario salvo"})
})

app.post('/cadastro', (request, response) => {

    const { Nome, Email, Senha } = request.body
    const user = { id: uuid.v4(), Nome, Email, Senha }
    Users.push(user)

    console.log(Users)
    return response.status(201).json({ message: "Usuário Registrado" })

})



app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})