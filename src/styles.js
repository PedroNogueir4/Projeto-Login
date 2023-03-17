import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 5%;

`
export const ContainerMain= styled.div`
padding: 44px;
width: 32%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.25);
border-radius: 10px;

p{
    font-size: 11px;
    margin: 5%;
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
    color: #696969;
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
export const Inputs = styled.input`
  height: 38px;
    width: 89%;
    outline: none;
    border-radius: 14px;
    padding-left: 6px;
    border: 2px solid #cecece;
    color: #8E8E8E;
    margin:4%;
`

export const ContainerBottom = styled.div`
background-color: #FF790E;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 12%;
font-size: 12px;


`

