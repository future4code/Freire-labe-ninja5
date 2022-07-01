import React from "react";
import Forms from '../Forms/Forms';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FiltroContratante from '../Contratante/FiltrosContratante';
import Carrinho from '../Carrinho/Carrinho'
export default class Home extends React.Component {


    forms = () => {
        return <Forms />
    }


    updateCart = (job) => {
        const tmp = [...this.state.carrinho]
        tmp.push(job)
        this.setState({carrinho: tmp})
    }

    contratante = () => {
        return <FiltroContratante addCart={(job) => this.updateCart({job})}/>
    }

    home = () => {
        return <div hidden={this.props.homeHidden}>
            <h1>LabeNinjas</h1>
            <h3>O talento certo no momento certo</h3>
            <button onClick={() => this.setState({ show: this.forms })}>Quero ser um Ninja</button>
            <button onClick={() => this.setState({ show: this.contratante })}>Contratar um Ninja</button>
        </div>
    }

    car = () => {
        return <Carrinho carrinho={this.state.carrinho}
        backList={() => this.setState({ show: this.contratante })}
        cleanCart={() => this.setState({ carrinho: [] })}
        removeJob={(index) => this.removeJob(index)}/>
    }
    
    removeJob = (index) => {
        const tmp = [...this.state.carrinho]
        tmp.splice(index,1)
        this.setState({carrinho: tmp})
    }


    state = { show: this.home, carrinho: []}


    render() {
        return (
            <>
                <Header home={() => this.setState({ show: this.home })}
                carrinho={() => this.setState({ show: this.car })} />
                {this.state.show()}
                <Footer />
            </>

        )

    }

}