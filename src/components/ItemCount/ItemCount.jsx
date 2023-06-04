
import { useState} from "react";






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
        <>
            <button onClick={decrementar} className="botonMenos"> - </button>
            <p> {contador} </p>
            <button onClick={incrementar} className="botonMas"> + </button>
            <button id="boton" onClick={() => funcionAgregar(contador)}> Agregar carrito </button>
        </>
    )


}



export default ItemCount

