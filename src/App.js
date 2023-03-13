import React from "react";

import { Container, ContainerBottom, ContainerMain } from "./styles";

function App() {

  const login = () => {


  }


  return (
    <Container>

      <ContainerMain>
        <h3>Bem-vindo ao Login</h3>
        <p>Preencha os dados do usuário para acessar</p>
        <input placeholder="Email"></input>
        <input placeholder="Senha"></input>
        <a>Esqueceu a senha?</a>
        <button type="button" onClick={login}>Entrar</button>
      </ContainerMain>

      <ContainerBottom><p>© 2023 Copyright</p></ContainerBottom>
    </Container>
  )
}

export default App;
