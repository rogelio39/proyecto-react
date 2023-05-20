import React from 'react'

import { useState, useEffect } from 'react'
import { getOneProduct } from '../../asyncmock'

import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {


        getOneProduct(idItem)
            .then(response => setProducto(response))
            .catch(error => console.log(error));


    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer
