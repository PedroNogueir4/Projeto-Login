const express = require('express')
const uuid = require('uuid')
const cors = require('cors')

const app =express()
app.use(express.json())
app.use(cors())

const port =3001
const Users = []


app.post('/cadastro',(request,response)=>{

const {Nome,Email,Senha} =request.body
const user ={id:uuid.v4(),Nome,Email,Senha}
Users.push(user)

console.log(Users)
return response.status(201).json({message:"Usuário Registrado"})

})



app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})