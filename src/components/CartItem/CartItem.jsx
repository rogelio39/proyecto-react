import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"




const CartItem = ({item, cantidad}) => {

    const {deleteProd} = useContext(CarritoContext);

    
    return (
        <div>
            <h3>{item.nombre}</h3>
            <h3>Cantidad: {cantidad}</h3>
            <p>Precio: {item.precio}</p>
            <button onClick={() => deleteProd(item.id)}> Eliminar </button>
        </div>
    ) 
}

export default CartItem
