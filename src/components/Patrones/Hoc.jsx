import React from 'react'




export const conAumento = (Componente) => {
    return function({nombre, precio}){
        const nuevoPrecio = precio * 105 / 100;
        return <Componente nombre ={nombre} precio= {nuevoPrecio}/>
    }
}


const Hoc = () => {
    return (
        <div>
            HOC
        </div>
    )
}

export default Hoc
