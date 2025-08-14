import React from 'react';
import TituloPagina from './TituloPagina';
import DetalhesProduto from './DetalhesProduto';

const App = () => {
    const produtoA = {
        nome: 'Notebook',
        preco: 3500.00,
        descricao: 'Notebook de última geração com 16GB de RAM e SSD de 512GB.'
    };

    return (
        <>
            <TituloPagina />
            <DetalhesProduto produto={produtoA} />
        </>
    );
};

export default App;
