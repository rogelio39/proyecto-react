import './Productos.css';

import { useState, useEffect } from 'react';

//importar funciones de firebase que necesitamos para mostrar productos.


//getDocs me permite obtener los documentos de una coleccion.
//collection me permite obtener una collecion 
//query me sirve cuando quiero generar una consulta. 

import { getDocs, collection, query, doc, updateDoc } from 'firebase/firestore';


import { baseDeDatos } from '../../services/config';



const Productos = () => {

    const [productos, setProductos] = useState([]);


    useEffect(() => {
        const myProducts = query(collection(baseDeDatos, 'inventario'));

        //por si quisieramos filtrar
        // const myProducts = query(collection(baseDeDatos, "inventario"), where("precio", "<", 200));

        getDocs(myProducts)
            .then((response) => {
                setProductos(response.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
            })
            .catch(err => console.error(err));
            


    }, [productos]) //al poner un array vacio en el array de dependencias, obtengo los datos cuando se monta el componente.


    //modificacion de stock al comprar producto

    const descontarStock = async(prod) => {

        const productRef = doc(baseDeDatos, "inventario", prod.id);


        const nuevoStock = prod.stock - 1;

        await updateDoc(productRef, {stock: nuevoStock});
    }


    return (
        <>
            <h2>Productos</h2>
            <div className='productos-container'>
                {
                    productos.map((prod) => (
                        <div className='product-card' key={prod.id}>
                            <h2>{prod.nombre}</h2>
                            <p>$ {prod.precio}</p>
                            <p>Stock: {prod.stock}</p>
                            <button onClick={() => descontarStock(prod)}>Comprar</button>
                        </div>
                    )
                    )
                }
            </div>
        </>
    )
}

export default Productos
