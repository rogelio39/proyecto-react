import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { getProductsByCategory } from '../../asyncmock'

import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();


    useEffect(() => {

        const funcionProductos = idCategoria ? getProductsByCategory : getProducts;

        funcionProductos(idCategoria)
            .then(response => setProductos(response))
            .catch(error => console.error(error));


    }, [idCategoria]);


    return (
        <>
            <h2 className="titulo">Bienvenido a: {props.greeting}</h2>
            <h3>Productos</h3>
            <ItemList productos={productos} />
        </>
    )
}


export default ItemListContainer
