import React from 'react';
import { DivFiltro, DivGrade } from './styled';
import Servicos from './Servicos';

import AXIOS from 'axios';
export default class Contratante extends React.Component {
    state = {
        Jobs: []
            
    }

    componentDidMount() {
        this.getAllJobs();
    }

    getAllJobs = () =>
        AXIOS
            .get(
                'https://labeninjas.herokuapp.com/jobs',
                {
                    headers: {
                        Authorization: '82842cb7-be45-48c9-b492-20aa550cecd1'
                    }
                }
            )
            .then((response) => {
                console.log(response.data);
        
            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            });




    render() {
        const title = this.state.Jobs.map((job) => {
            return <p>{job.title}</p>;
        })

        // const price = this.state.Jobs.map((job) => {
        //     return <p>{job.price}</p>;
        // })
        //     const dueDate = this.state.Jobs.map((job) =>{
        //         return <p>{job.dueDate}</p>;
        //     })

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
                <section>
                {title}
                </section>


                <DivGrade>

                    <Servicos
                        titulo=""
                        preco=""
                        prazo=""
                    />




                </DivGrade>
            </div>
        )
    }
}