
import './CartWidget.css'

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';



const CartWidget = () => {

    const { totalCantidad } = useContext(CarritoContext);



    return (

        <Link to='/cart'>
            <li className='bi bi-cart'>
                {
                    totalCantidad > 0 && <span>{totalCantidad}</span>
                }
            </li>
        </Link>
    )
}

export default CartWidget
