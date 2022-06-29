import styled from 'styled-components';

export const DivFiltro = styled.form`
 display:flex;
 justify-content: space-around;
 padding:40px 60px 50px 60px ;

 select, input{
    width: 20%;
 }

`
export const DivServico = styled.form`
border: 2px solid black;
margin: 10px;
padding: 10px;
border-radius:20px;

 &:hover{
    background-color: brown;
 }
`
export const Button = styled.button`
border-radius:7px ;

&:hover{
    color:orange;
}
&:active{
    background-color: brown;
}


`


export const DivGrade = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    gap: 20px;
    width: 100%;
    padding-right:20px;
  
   
    height: fit-content;
    padding: 5px 25px;

`

