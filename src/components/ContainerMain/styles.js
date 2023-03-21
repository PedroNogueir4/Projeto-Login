import styled from "styled-components";

export const ContainerMain = styled.div`
padding: 44px;
width: 32%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.25);
border-radius: 10px;

@media (max-width:758px) {
        width: 44%;
    }

    @media (max-width:500px) {
        height: 60%;
        gap: 32px;
        width: 53%;
    }

p{
    font-size: 11px;
    margin: 5%;
    @media (max-width:500px) {
        display: none;
    }
    
}

button{
    margin-top: 7%;
    width: 100%;
    height: 15%;
    background: #FF790E;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;

}
a{
    cursor: pointer;
    font-size: 11.9px;
    color: #FF893E;
}
a:hover {
    opacity: 0.5;
}

a:active {
    opacity: 0.3;
}

input:focus {
    border-color: #FF790E;
}

button:hover {
    opacity: 0.5;
}

button:active {
    opacity: 0.3;
}

`
