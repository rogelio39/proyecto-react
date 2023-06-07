import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { baseDeDatos } from '../../services/config'
import { collection, getDocs, where, query } from 'firebase/firestore'





const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();


    useEffect(() => {

        const myProducts = idCategoria ? query(collection(baseDeDatos, 'inventario'), where('idCat', '==', idCategoria)) : collection(baseDeDatos, 'inventario');

        getDocs(myProducts)
            .then(response => {
                const newProducts = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(newProducts);
            })
            .catch(error => console.log(error));


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
