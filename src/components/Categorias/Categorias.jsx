import React from 'react'

import { useState, useEffect } from 'react';

const Categorias = () => {

    const [categoria, setCategorias] = useState("");

    useEffect( () => {
        document.title = `categoria ${categoria}`;
    }, [categoria])

    const handleClick = (categoria) => {
        setCategorias(categoria);
    }

    return (
        <div>
            <h2>Categoria de Produtos</h2>
            <button onClick={() => handleClick("panes")} >Panes</button>
            <button onClick= {() => handleClick("budines")} >Budines</button>
            <button onClick={() => handleClick("alfajores")} >Alfajores</button>
        </div>
    )
}

export default Categorias
