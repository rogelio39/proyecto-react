
import { useState} from "react";

import './ItemCount.css'




const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    //primero desestructuramos
    const [contador, setContador] = useState(inicial); //entre parentesis colocamos el valor inicial del estado.



    const incrementar = () => {
        contador < stock && setContador(contador + 1);
    }


    const decrementar = () => {
        contador > inicial && setContador(contador - 1);
    }



    return (
        <div className="addCartContainer">
            <button  onClick={decrementar} className="botonMenos"> - </button>
            <p> {contador} </p>
            <button onClick={incrementar} className="botonMas"> + </button>
            <button className='addCart' id="boton" onClick={() => funcionAgregar(contador)}> Agregar carrito </button>
        </div>
    )


}



export default ItemCount

