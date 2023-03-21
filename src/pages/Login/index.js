import { React, useRef } from "react";

import { Inputs } from "../../components/Inputs/styles";
import { ContainerBottom } from "../../components/ContainerBottom/styles";
import { Container } from "../../components/Container/styles";
import { ContainerMain } from "../../components/ContainerMain/styles";

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
    if (user.email === users.email) {

      if (user.senha === users.senha) {

        console.log('Login realizado com Sucesso')
      }
      else { alert(" Email ou Senha são inválidos") }
    }

    else {
      alert(" Email ou Senha são inválidos")
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

      <ContainerBottom></ContainerBottom>
    </Container>
  )
}

export default App;
