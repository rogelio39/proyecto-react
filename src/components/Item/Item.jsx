import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {



    return (
        
        <div className='cardProducto'>
            <img className='imgProduct' src={img} alt={nombre} />
            <h3>Nombre: {nombre}</h3>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <Link to={`/item/${id}`}><button className='btnProduct'>Ver detalles</button></Link>
        </div>
    )
}

export default Item
