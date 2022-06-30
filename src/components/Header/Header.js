import React from 'react';
import { Head, CompHead } from './styled';

export default class Header extends React.Component {
    render() {
        return (

            <Head>

                <h1>LABE - Friends</h1>
                <CompHead>
                    <button>home</button>
                    <button>Carrinho</button>


                </CompHead>
            </Head>
        )
    }
}