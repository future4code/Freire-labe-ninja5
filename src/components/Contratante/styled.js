import styled from 'styled-components';


// Filtro Contratante
export const DivFiltro = styled.form`
 display:flex;
 justify-content: space-evenly;
 flex-flow: wrap;
 padding:40px 60px 10px 60px ;

 select, input{
    width: 250px;
    margin: 10px;
 }

`



// Grade de serviços
// Grade de serviços
// Grade de serviços

export const DivGrade = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    min-height: 74vh;
    gap: 25px;
    width: 100%;
    height: fit-content;
    padding: 20px 0px;

`
export const Img = styled.img`
display: flex;
margin-left:25%;
width: 45%;
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

  

