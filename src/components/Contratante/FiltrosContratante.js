import React from 'react';
import axios from 'axios';

import { DivFiltro, DivGrade, Img } from './styled';
import Servicos from '../Servicos/Servicos';
import logo from '../../logo.svg';

export default class Contratante extends React.Component {

    state = {
        jobs: [],
        CarregamentoTela: false
    }

    // Chamada de todos os serviços no Array
    // Chamada de todos os serviços no Array
    // Chamada de todos os serviços no Array

    componentDidMount() {
        this.getAllJobs();

    }




    getAllJobs = () => {

        axios
            .get(
                'https://labeninjas.herokuapp.com/jobs',
                {
                    headers: {
                        Authorization: '82842cb7-be45-48c9-b492-20aa550cecd1'
                    }
                }
            )
            .then((response) => {
                response ? this.setState({ CarregamentoTela: true }) : this.setState({ CarregamentoTela: false })
                this.setState({ jobs: response.data.jobs })
            }).catch((error) => {
                alert(error.message);
                console.log(error.message);
            });

    }

    // Chamada de Serviço por ID
    // Chamada de Serviço por ID
    // Chamada de Serviço por ID

    getAllJobsId = (id) => {

        axios
            .get(
                `https://labeninjas.herokuapp.com/jobs/${id}`,
                {
                    headers: {
                        Authorization: '82842cb7-be45-48c9-b492-20aa550cecd1'
                    }
                }
            )
            .then((response) => {
                console.log(response.data);
                this.setState({ jobs: response.data.jobs })
            }).catch((error) => {
                alert(error.message);
                console.log(error.message);
            });

    }

    deleteJob = (id) => {
        if (window.confirm('Deseja deletar esse serviço?')) {
            axios.delete(`https://labeninjas.herokuapp.com/jobs/${id}`,
                {
                    headers: {
                        Authorization: '82842cb7-be45-48c9-b492-20aa550cecd1'
                    }
                }
            )
                .then((response) => {
                    console.log(response.data);
                    this.getAllJobs();
                })
                .catch((error) => {
                    alert(error.message);
                    console.log(error.message);
                })
        };

    }



    render() {

        const listaServicos = this.state.jobs.map((job) => {
            return <Servicos key={job.id}
                titulo={job.title}
                preco={job.price}
                prazo={job.dueDate.slice(0, 10)}
                delete={() => { this.deleteJob(job.id) }}
                detalhes={() => { this.props.getAllJobsId(job.id) }}
                addCart={() => this.props.addCart(job)}
            />;
        })

        // const detalhesServico = this.props.jobs.map((job) => {  
        //     return <Detalhes key={job.id}

        //      titulo={job.title}
        //      preco={job.price}
        //      prazo={job.dueDate}
        //      descricao={job.description} 
        //      pagamento={job.paymentMethods}
        //     />;

        // })



        return (
            <div>

                <DivFiltro>
                    <input type="number" placeholder="Valor Mínimo"  ></input>
                    <input type="number" placeholder="Valor Máximo"  ></input>
                    <input type="text" placeholder="Busca por Título"  ></input>
                    <select >
                        <option> -------- </option>
                        <option>Menor Valor</option>
                        <option>Maior Valor</option>
                        <option>Titulo</option>
                        <option>Prazo</option>
                    </select>
                </DivFiltro>



                <div>


                    {this.state.CarregamentoTela ? <DivGrade>{listaServicos} </DivGrade> : <Img src={logo} alt="logo" />}

                </div>
            </div>
        )
    }
}