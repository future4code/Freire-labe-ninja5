import React from 'react';
import { DivFiltro, DivGrade } from './styled';
import Servicos from './Servicos';


export default class Contratante extends React.Component{
    render(){
        return (
            <div>
                <DivFiltro>
                <input type="number" placeholder="Valor Mínimo"  ></input>
                <input type="number" placeholder="Valor Máximo"  ></input>
                <input type="text" placeholder="Busca por Título"  ></input>
                <select >
                <option> -- </option>    
                <option>Menor Valor</option>    
                <option>Maior Valor</option>    
                <option>Titulo</option>    
                <option>Prazo</option>    
                </select>
                </DivFiltro>
               <DivGrade>
               <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />
                <Servicos
                titulo="Aleatorio"
                preco="R$100,00"
                prazo="21/09/2022"
                />


               </DivGrade>
            </div>
        )
    }
}