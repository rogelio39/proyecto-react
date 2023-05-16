import React from 'react'

import { useState, useEffect } from 'react'
import { getOneProduct } from '../../asyncmock'

import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getOneProduct(1)
            .then(response => setProducto(response))
            .catch(error => console.log(error));


    },[])
    
    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer
