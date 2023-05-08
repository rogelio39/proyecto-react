import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {
                setProductos(res);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);


    return (
        <>
            <h2 className="titulo">Bienvenido a: {props.greeting}</h2>
            <h3>Productos</h3>
            <ItemList productos={productos} />
        </>
    )
}


export default ItemListContainer
