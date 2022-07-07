import React from "react";
import Forms from '../Forms/Forms';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FiltroContratante from '../Contratante/FiltrosContratante';
import Carrinho from '../Carrinho/Carrinho'
import {DivHome , Button, H1} from './styled';
export default class Home extends React.Component {


    forms = () => {
        return <Forms 
        backList={() => this.setState({ show: this.contratante })}
       />
    }


    updateCart = (job) => {
        const tmp = [...this.state.carrinho]
        tmp.push(job)
        this.setState({carrinho: tmp})
        alert(`Adicionado com sucesso ${job.job.title}`)
    }

    contratante = () => {
        return <FiltroContratante addCart={(job) => this.updateCart({job})}/>
    }

    

    home = () => {
        return <DivHome hidden={this.props.homeHidden}>
            <H1>Labe Ninjas</H1>
            <h3>O talento certo no momento certo</h3>
            <Button onClick={() => this.setState({ show: this.forms })}>Quero ser um Ninja</Button>
            &nbsp; 
            <Button onClick={() => this.setState({ show: this.contratante })}>Contratar um Ninja</Button>
        </DivHome>
    }

    car = () => {
        return <Carrinho carrinho={this.state.carrinho}
        backList={() => this.setState({ show: this.contratante })}
        cleanCart={() => this.setState({ carrinho: [] })}
        removeJob={(index) => this.removeJob(index)}/>
    }
    
    removeJob = (index) => {
        const removido = {...this.state.carrinho[index]}
        const tmp = [...this.state.carrinho]
        tmp.splice(index,1)
        this.setState({carrinho: tmp},() => alert(`Removido: ${removido.job.title}`))
        
    }


    state = { show: this.home, carrinho: []}


    render() {
        return (
            <div>
                <Header 
                home={() => this.setState({ show: this.home })}

                carrinho={() => this.setState({ show: this.car })} />
                {this.state.show()}
                <Footer />
            </div>

        )

    }

}