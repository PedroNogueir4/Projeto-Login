import { React, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../../components/Login-Cadastro/Container/styles";
import { ContainerMain } from "../../components/Login-Cadastro/ContainerMain/styles";
import { ContainerBottom } from "../../components/Login-Cadastro/ContainerBottom/styles";
import { Inputs } from "../../components/Login-Cadastro/Inputs/styles";


function App() {

  const inputEmail = useRef()
  const inputPass = useRef()
  const navigate =useNavigate()


  const users =
  {
    name: 'testejnk',
    email: 'simulaçãobancodedados@gmail.com',
    password: '123321kk'
  }


  const login = () => {
    const user = {
      email: inputEmail.current.value,
      senha: inputPass.current.value
    }
    if (user.email === users.email) {

      if (user.senha === users.password) {

        navigate("/cadastro")
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