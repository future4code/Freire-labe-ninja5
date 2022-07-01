import React from "react";
export default class Carrinho extends React.Component {


    constructor(props) {
        super(props)
    }

    k = () => {
        return <h1>Carrinho Vazio</h1>
    }
    
    t = () => {
        return (
            <>
                {this.props.carrinho.map(tmp => tmp.job).map((job, i) => {
                    return (
                        <>
                            <span key={job.id + i}>
                                <label>{job.title}</label>
                                <br />
                                <label>R${job.price}</label>
                                <br />
                                <button onClick={() => this.props.removeJob(i)}>Remover</button>
                                <br />
                                <br />
                            </span>
                        </>
                    );
                })}
                <label>Total: R${this.props.carrinho
                                .map(tmp => tmp.job)
                                .map(job => job.price)
                                .reduce((acc, price) => acc + price)
                            }</label>
                            <br/>
                            <button onClick={() => this.props.backList()}>Voltar para a lista</button>
                            <br/>
                            <button onClick={() => this.props.cleanCart()}>Finalizar Compra</button>
            </>
        )
    }

    msg = () => {
        return this.props.carrinho.length !== 0 ? this.t() : this.k()
    }

    render() {
        return this.msg();
    }
}