

import './Vista.css';
import { useState } from 'react';

const Vista = () => {

    const [modoOscuro, setModoOscuro] = useState(false);
    
    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? 'oscuro' : 'claro';

    return (
        <div className={estilo}>
            <button onClick={cambiarModo} className='cambiarVista'>{modoOscuro ? 'claro' : 'oscuro'}</button>
            <h2> Componente vista</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, consequatur?</p>
        </div>
    )
}

export default Vista
