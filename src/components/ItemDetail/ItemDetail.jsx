
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import CartWidget from '../CartWidget/CartWidget'

import ItemCount from '../ItemCount/ItemCount';

import { CarritoContext } from '../../context/CarritoContext';

import { useContext } from 'react';





const ItemDetail = ({ item }) => {

    //funcion manejadora de la cantidad
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { addProduct } = useContext(CarritoContext);

    //creo un objeto con el item y la cantidad:


    const { id, nombre, stock, precio, img } = item;

    //funcion manejadora de la cantidad

    const handleCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        console.log('productos agregados ' + cantidad);

        addProduct(item, cantidad);

    }

    return (
        <div className="contenedorItem">
            <h2>Nombre: {nombre}</h2>
            <h3>precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, perferendis!</p>
            <img src={img} alt={nombre} />
            {
                //empleamos logica de montaje y desmontaje de componentes
                agregarCantidad > 0 ? <div className='buttonsContainer'>
                    <Link to='/cart'><button>Terminar compra</button></Link>
                    <Link to='/'><button >Seguir comprando</button></Link>
                </div> : <ItemCount inicial={1} stock={stock} funcionAgregar={handleCantidad} />
            }
        </div>
    )
}

export default ItemDetail
