
import { useState } from "react";


const ItemCount = ({inicial, stock}) => {
    //primero desestructuramos
    const [contador, setContador] = useState(inicial); //entre parentesis colocamos el valor inicial del estado.


    const incrementar = () => {
        contador < stock && setContador(contador + 1);
    }


    const decrementar = () => {
        contador > inicial && setContador(contador - 1);

    }

    const agregarCarrito = () => {
        console.log(`Agregado ${contador} items`);
    }

    return (
        <div>
            <button onClick={decrementar} className="botonMenos"> - </button>
            <p> {contador} </p>
            <button onClick={incrementar} className="botonMas"> + </button>
            <br /> <br />
            <button onClick={agregarCarrito}> Agregar carrito </button>
        </div>
    )


}



export default ItemCount
