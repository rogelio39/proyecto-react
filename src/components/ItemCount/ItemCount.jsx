
import { useState, useEffect } from "react";






const ItemCount = ({ inicial, stock }) => {
    //primero desestructuramos
    const [contador, setContador] = useState(inicial); //entre parentesis colocamos el valor inicial del estado.

    const [color, setColor] = useState("black");

    useEffect( () => {
        console.log("se ejecuto el useEffect!!!")
        document.title = `Contador: ${contador}`;

        if(contador > 5){
            setColor("red");
        } else {
            setColor("black")
        }

    }, [contador])



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
            <button id="boton" onClick={agregarCarrito} style={{color: color}}> Agregar carrito </button>
        </div>
    )


}



export default ItemCount

