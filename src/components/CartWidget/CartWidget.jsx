
import './CartWidget.css'


import { useState, useEffect } from 'react'



const CartWidget = ({ cantidad }) => {

    const [productosAgregados, setProductosAgregados] = useState(0);


    useEffect((cantidad) => {
        setProductosAgregados(cantidad);
    }, [cantidad])


    return (
        <li className='bi bi-cart'>{productosAgregados}</li>
    )
}

export default CartWidget
