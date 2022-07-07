import React from "react";

import { DivCarrinho, DivItensCarrinho, DivCarrinhoVazio } from './styled';
export default class Carrinho extends React.Component {

    


    k = () => {
        return <DivCarrinhoVazio>
            <h1>Carrinho Vazio</h1>
            <br />
            <button onClick={() => { this.props.backList() }}>Voltar para a lista</button>
        </DivCarrinhoVazio>
    }

    t = () => {
        return (
            <DivCarrinho>
                {this.props.carrinho.map(tmp => tmp.job).map((job, i) => {
                    return (
                        <>
                            <DivItensCarrinho key={job.id + i}>
                                <p>{job.title}</p>
                                <br />
                                <p>R${job.price}</p>
                                <br />
                                <button onClick={() => this.props.removeJob(i)}>Remover</button>
                                <br />
                            </DivItensCarrinho>
                        </>
                    );
                })}
                <label>Total: R${this.props.carrinho
                    .map(tmp => tmp.job)
                    .map(job => job.price)
                    .reduce((acc, price) => acc + price)
                }</label>
                <br />
                <button onClick={() => this.props.backList()}>Voltar para a lista</button>
                <br />
                <button onClick={() => this.props.cleanCart()}>Finalizar Compra</button>
            </DivCarrinho>
        )
    }

    msg = () => {
        return this.props.carrinho.length !== 0 ? this.t() : this.k()
    }

    render() {
        return this.msg();
    }
}