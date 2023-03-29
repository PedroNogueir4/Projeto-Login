import { React, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Container } from "../../components/Login-Cadastro/Container/styles";
import { ContainerMain } from "../../components/Login-Cadastro/ContainerMain/styles";
import { ContainerBottom } from "../../components/Login-Cadastro/ContainerBottom/styles";
import { Inputs } from "../../components/Login-Cadastro/Inputs/styles";



function App() {

  const inputEmail = useRef()
  const inputPass = useRef()
  const navigate = useNavigate()





  async function login() {
    const user = await axios.post('http://localhost:3001/', {

      Email: inputEmail.current.value,
      Senha: inputPass.current.value

    })
console.log(login)
  }
  function goCadastro() {

    navigate('/cadastro')
  }

  return (
    <Container>

      <ContainerMain>
        <h3>Bem-vindo ao Login</h3>
        <p>Preencha os dados do usuário para acessar</p>
        <Inputs ref={inputEmail} placeholder="Email"></Inputs>
        <Inputs ref={inputPass} placeholder="Senha" type="password"></Inputs>
        <a>Esqueceu a senha?</a> <a onClick={goCadastro}>Cadastre-se</a>
        <button onClick={login} type="button">Entrar</button>
      </ContainerMain>

      <ContainerBottom></ContainerBottom>
    </Container>
  )
}

export default App;
