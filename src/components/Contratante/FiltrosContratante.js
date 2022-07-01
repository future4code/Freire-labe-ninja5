import React from 'react';
import axios from 'axios';
import { DivFiltro, DivGrade } from './styled';
import Servicos from '../Servicos/Servicos';

export default class Contratante extends React.Component {

    state = {
        jobs: []

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
                        Authorization:  'e2190c39-7930-4db4-870b-bed0e5e4b88e'
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
        
        // Chamada de Serviço por ID
        // Chamada de Serviço por ID
        // Chamada de Serviço por ID

        getAllJobsId = (id) => {

            axios
                .get(
                    `https://labeninjas.herokuapp.com/jobs/${id}`,
                    {
                        headers: {
                            Authorization:  'e2190c39-7930-4db4-870b-bed0e5e4b88e'
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

            



    render() {

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

               
                
                <DivGrade>

                    
                {this.state.jobs.map((job) => {
                    return <Servicos key={job.id}
                    titulo= {job.title}
                    preco= {job.price}
                    prazo= {job.dueDate.slice(0,10)}
                    addCart= {() => this.props.addCart(job)}
                    />;
                })}

                </DivGrade>
            </div>
        )
    }
}