import React from 'react';
import { Head, CompHead, Button } from './styled';

export default class Header extends React.Component {


    render() {
        return (

            <Head>

                <h1 onClick={() => this.props.home()}>Labe Ninjas</h1>
                <CompHead>
                    <Button onClick={() => this.props.home()}>Home</Button>&nbsp; &nbsp;&nbsp;
                    <Button onClick={() => this.props.carrinho()}>Carrinho</Button>


                </CompHead>
            </Head>
        )
    }
}