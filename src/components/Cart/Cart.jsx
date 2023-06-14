import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';


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
        <div className='cart'>
            {
                carrito.map(producto => <CartItem key={producto.id} {...producto} />)
            }
            <h3>Cantidad Total: {totalCantidad}</h3>
            <h3>Total compra: $ {total}  </h3>
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to='/checkout'> <button>Finalizar compra</button></Link>
        </div>
    )
}

export default Cart
