import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { baseDeDatos } from '../../services/config';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});

    const { idItem } = useParams();

    useEffect(() => {
        const productSelected = doc(baseDeDatos, 'inventario', idItem);

        getDoc(productSelected)
            .then(response => {
                const data = response.data();
                const newProductSelected = {id: response.id, ...data}
                setProducto(newProductSelected);
            })
            .catch(error => console.log(error)); 

    }, [idItem]);


    return (
        <div>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer

