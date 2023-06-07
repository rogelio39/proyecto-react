

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const { carrito, clearCart, totalCantidad, total } = useContext(CarritoContext);


    if (totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>Seguir comprando</Link>
            </>
        )
    }

    return (
        <div>
            {
                carrito.map(producto => <CartItem key={producto.id} {...producto} />)
            }
            <h3>Cantidad Total: {totalCantidad}</h3>
            <h3>Total compra: $ {total}  </h3>
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
    )
}

export default Cart
