import React from "react";
import './Forms.css'
import axios from "axios";

export default class Forms extends React.Component {

    state = {
        title: "",
        description: "",
        price: "",
        paymentMethods: [],
        dueDate: ""
    }

    titleInputChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };
    descriptionInputChange = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    priceInputChange = (e) => {
        this.setState({
            price: Number(e.target.value)
        });
    };

    paymentMethodsInputChange = (e) => {
        const paymentList = [...this.state.paymentMethods, e.target.value]
        this.setState({
            paymentMethods: paymentList
        });
        console.log(paymentList)
    };

    dueDateInputChange = (e) => {
        this.setState({
            dueDate: e.target.value
        });
    };

    createJob = (e) => {
        e.preventDefault()

        const body = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            paymentMethods: this.state.paymentMethods,
            dueDate: this.state.dueDate,
        };
        axios.post('https://labeninjas.herokuapp.com/jobs', body, {
            headers: {
                Authorization: "82842cb7-be45-48c9-b492-20aa550cecd1"
            }
        }
        ).then((resposta) => {
            alert("Cadastrado com Sucesso!")
            console.log(resposta.data)
            this.setState({
            title:"",
            description: "",
            price: "",
            paymentMethods: [],
            dueDate: ""})
        }).catch((error) => {
            console.log(error.response)
            alert("Ixi, deu erro!")
        });
    };




    render() {

        /*         const cadastrouBotao = () => {
                    alert("Cadastro realizado com sucesso!")
                } */

        return (
            <div className='container'>
                <section className="box-principal">
                    <div>
                        <h2>Cadastre o seu servi??o</h2>
                        <form> {/* FORMUL??RIO */}
                            <div>
                                <input
                                    value={this.state.title}
                                    onChange={this.titleInputChange}
                                    type="text"
                                    placeholder="Titulo"
                                />
                            </div>
                            <div>
                                <input
                                    value={this.state.description}
                                    onChange={this.descriptionInputChange}
                                    type="text"
                                    placeholder="Descri????o"
                                />
                            </div>
                            <div>
                                <input
                                    onChange={this.priceInputChange}
                                    value={this.state.price}
                                    type="number"
                                    placeholder="Pre??o"
                                />
                            </div>
                            <div>
                                <fieldset>
                                    <legend><b>M??todo de pagamento</b></legend>
                                    <div>
                                        <input
                                            onChange={this.paymentMethodsInputChange}
                                            value="cart??o de cr??dito"
                                            type="checkbox" />
                                        <label>Cart??o de cr??dito</label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={this.paymentMethodsInputChange}
                                            value="cartao de d??bito"
                                            type="checkbox" />
                                        <label >Cart??o de D??bito</label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={this.paymentMethodsInputChange}
                                            value="pix"
                                            type="checkbox" />
                                        <label >Pix</label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={this.paymentMethodsInputChange}
                                            value="boleto"
                                            type="checkbox" />
                                        <label >Boleto</label>
                                    </div>
                                </fieldset>
                            </div>
                            <div>
                                <input
                                    value={this.state.dueDate}
                                    onChange={this.dueDateInputChange}
                                    type="date"
                                />
                            </div>
                            <button className="Button1"
                                onClick={this.createJob}
                            >Cadastrar
                            </button>

                            <button className="Button" onClick={() =>this.props.backList()}>Ir para Servi??os</button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}