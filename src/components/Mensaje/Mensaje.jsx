import React from 'react'



import { useState } from 'react';

const Mensaje = () => {

    const [mensaje, setMensaje] = useState(false);

    const manejadorMensaje = () => {
        setMensaje(!mensaje);
        //recuerden que ! invierte el valor de la variable booleana
    }



    return (
        <div>
            <button onClick={manejadorMensaje} className='mensaje'> {mensaje ? 'Ocultar' : 'Mostrar'}</button>
            {mensaje && <h2>Aguante el useState</h2>}
        </div>
    )
}

export default Mensaje
