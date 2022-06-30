import React from 'react';

export default function Detalhes(props) {
    return (
    <div>
        <div>
            <h2>{props.titulo}</h2>
            <p>Preço: R$ {props.preco}</p>
            <p>Prazo: {props.prazo}</p>
            <p>Descrição:{props.descricao}</p>
            <li>{props.pagamento}</li>
            <button>Voltar para lista</button>
        </div>
    </div>
)

}