import styled from 'styled-components';


// Box Serviços
// Box Serviços
// Box Serviços

export const DivServico = styled.div`
    border: 2px solid black;
    margin: 20px 20px;
    padding: 10px;
    border-radius:20px;
 width:250px;
 &:hover{
    background-color: #C4A689; opacity: 90% ;
 }
`
// Botão Serviços
// Botão Serviços
// Botão Serviços

export const Button = styled.button`
    border-radius:7px ;

    &:hover{
        color:#FF8500;
    }
    &:active{
        background-color: #684138;
    }


`

export const Img = styled.img`

@media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 4s linear;
  
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


`