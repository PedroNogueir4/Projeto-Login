import { React, useRef } from "react";

import { Container, ContainerBottom, ContainerMain, Inputs } from "./styles";

function App() {

  const inputEmail = useRef()
  const inputPass = useRef()

  const users =
  {
    name: 'Pedro',
    id: 5,
    email: 'simulaçãobancodedados@gmail.com',
    senha: '123321kk'
  }


  const login = () => {
    const user = {
      email: inputEmail.current.value,
      senha: inputPass.current.value
    }
    if (user.email && user.senha === users.email && users.senha) {

      console.log('Login realizado com Sucesso')}
      
      
      else {
      console.log(" Email ou Senha são inválidos")
    }

  }


  return (
    <Container>

      <ContainerMain>
        <h3>Bem-vindo ao Login</h3>
        <p>Preencha os dados do usuário para acessar</p>
        <Inputs ref={inputEmail} placeholder="Email"></Inputs>
        <Inputs ref={inputPass} placeholder="Senha" type="password"></Inputs>
        <a>Esqueceu a senha?</a>
        <button onClick={login} type="button">Entrar</button>
      </ContainerMain>

      <ContainerBottom><p>© 2023 Copyright</p></ContainerBottom>
    </Container>
  )
}

export default App;
