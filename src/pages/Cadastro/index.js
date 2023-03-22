import { React, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Container } from "../../components/Login-Cadastro/Container/styles";
import { ContainerMain } from "../../components/Login-Cadastro/ContainerMain/styles";
import { ContainerBottom } from "../../components/Login-Cadastro/ContainerBottom/styles";
import { Inputs } from "../../components/Login-Cadastro/Inputs/styles";


const App = () => {

    const inputEmail = useRef()
    const inputName = useRef()
    const inputSenha = useRef()
    const navigate = useNavigate()


    const register = () => {

        const registerUser = {
            name: inputName.current.value,
            email: inputEmail.current.value,
            password: inputSenha.current.value


        }
        console.log(registerUser)
        navigate("/")
 }




    return (
        <Container>

            <ContainerMain>
                <h3>Cadastro de Usuário</h3>
                <p>Preencha os dados do usuário para cadastro</p>
                <Inputs ref={inputName} placeholder="Nome"></Inputs>
                <Inputs ref={inputEmail} placeholder="Email"></Inputs>
                <Inputs ref={inputSenha} placeholder="Senha"></Inputs>
                <button onClick={register}>Cadastrar</button>
            </ContainerMain>

            <ContainerBottom></ContainerBottom>
        </Container>

    )
}

export default App