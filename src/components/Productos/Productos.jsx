import './Productos.css';

import { useState, useEffect } from 'react';

//importar funciones de firebase que necesitamos para mostrar productos.


//getDocs me permite obtener los documentos de una coleccion.
//collection me permite obtener una collecion 
//query me sirve cuando quiero generar una consulta. 

import { getDocs, collection, query } from 'firebase/firestore';


import { baseDeDatos } from '../../services/config';



const Productos = () => {

    const [productos, setProductos] = useState([]);


    useEffect(() => {
        const misProductos = query(collection(baseDeDatos, 'inventario'));

        getDocs(misProductos)
            .then((response) => {
                setProductos(response.docs.map((doc) => ({ id: doc.id, ...doc.data })))
            });


    }, []) //al poner un array vacio en el array de dependencias, obtengo los datos cuando se monta el componente.



    return (
        <div>
            <h2>Productos</h2>
            <div className='productos-container'>
                {
                    productos.map((prod) => (
                        <div className='product-card' key={productos.id}>
                            <h2>{productos.nombre}</h2>
                            <p>{productos.precio}</p>
                            <p>Stock: {productos.stock}</p>
                            <button>Comprar</button>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Productos
