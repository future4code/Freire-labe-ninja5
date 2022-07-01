import React from 'react';
import { DivServico, Button } from './style';

export default function Servicos(props) {

    return (
        
        <DivServico>

            <h3>{props.titulo}</h3> 
            <p><b>Preço:</b> R$ {props.preco}</p>
            <p><b>Prazo:</b> {props.prazo}</p>
            <Button onClick={() => props.delete()}>Exluir</Button>&nbsp;
            <Button onClick={() => props.detalhes()}>Ver Detalhes</Button> &nbsp;
            <Button onClick={() => props.addCart()} >Adicionar no Carrinho</Button>

        </DivServico>
        
    )
}



