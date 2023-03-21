import { React, useRef } from "react";
import { Container } from "../../components/Container/styles";
import { ContainerMain } from "../../components/ContainerMain/styles";
import { ContainerBottom } from "../../components/ContainerBottom/styles";
import { Inputs } from "../../components/Inputs/styles";


const App = () => {

    const inputEmail = useRef()
    const inputName = useRef()
    const inputSenha = useRef()


    const register = () => {

        const registerUser = {
            name: inputName.current.value,
            email: inputEmail.current.value,
            password: inputSenha.current.value


        }
    }




    return (
        <Container>

            <ContainerMain>
                <h3>Cadastro de Usuário</h3>
                <p>Preencha os dados do usuário para cadastro</p>
                <Inputs ref={inputName} placeholder="Usuário"></Inputs>
                <Inputs ref={inputEmail} placeholder="Email"></Inputs>
                <Inputs ref={inputSenha} placeholder="Senha"></Inputs>
                <button onClick={register}>Cadastrar</button>
            </ContainerMain>

            <ContainerBottom></ContainerBottom>
        </Container>

    )
}

export default App