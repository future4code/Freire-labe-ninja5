import React from "react";
import './Forms.css'

export default class Forms extends React.Component {
    
    state = {
        título:"",
        descrição: "",
        preço: "",
    }

    handleInputChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render(){
        return(
            <div className='container'>
            <section className="box-principal"> 
                <div>   
                    <h2>Cadastre o seu serviço</h2>
                        <form> {/* FORMULÁRIO */}
                            <div>
                                <input 
                                    /* onChange={} */
                                    type="text" 
                                    placeholder="Titulo"
                                />
                            </div>
                            <div>    
                                <input 
                                    
                                    type="text" 
                                    placeholder="Descrição"
                                />
                            </div>  
                            <div>  
                                <input 
                                    
                                    type="number" 
                                    placeholder="Preço"
                                />
                            </div>
                            <div>
                                <select placeholder="Forma de pagamento">
                                    <option>Cartão de Débito</option>
                                    <option>Cartão de Crédito</option>
                                    <option>PayPal</option>
                                    <option>Boleto</option>
                                    <option>Pix</option>
                                </select>
                            </div>    
                            <div>    
                                <input 
                                    
                                    type="date" 
                                    placeholder="Forma de pagamento"
                                />
                            </div>    
                            <button
                                type="submit"
                                onclick="alert('Cadastro realizado com sucesso!')">Cadastrar
                            </button>
                        </form>
                </div>     
            </section>
            </div>
        )
    }
}