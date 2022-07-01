import styled from "styled-components";

export const DivCarrinho = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    
    gap: 25px;
    width: 100%;
    height: fit-content;
    padding: 20px 0px;
    min-height: 74vh;

`

export const DivItensCarrinho = styled.span`
    
    border: 2px solid black;
    margin: 20px 20px;
    padding: 10px;
    border-radius:20px;
    width:280px;
`
export const DivCarrinhoVazio = styled.div`
    text-align: center;
    height: 74vh;

`