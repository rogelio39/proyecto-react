//Importamos el hook useState y createContext para crear un contexto que va a almacenar toda la logica del carro de compras



import { useState, createContext } from "react";


//Creamos contexto con un valor inicial por default sera un objeto con la propiedad "carrito" con un array vacio.


export const CarritoContext = createContext({ carrito: [] });

//creamos componente carritoProvider

export const CarritoProvider = ({ children }) => {

    //creamos estado carrito con useState
    const [carrito, setCarrito] = useState([]);


    //agregamos metodos a carritoprovider que me permitiran manipular el carrito.


    //agregar productos
    const addProduct = (item, cantidad) => {
        if (!isInCart(item.id)) {
            setCarrito(prev => [...prev, { item, cantidad }])
        } else {

            console.log('ya tienes este producto');
            // const updatedCart = carrito.map(prod => {
            //     if (prod.id === item.id) {
            //         return {...prod, cantidad: prod.cantidad + cantidad }
            //     }
            //     return prod;
            // }
            // )
            // setCarrito(updatedCart);
        }

        //la sintaxis: setCarrito(prod => [...prod, {item, cantidad}])
        // se utiliza para crear un nuevo array a partir del estado anterior del carrito y agregar un nuevo objeto que representa el nuevo producto (con el item que se agrega y la cantidad)
    }

            //funcion auxiliar 'isInCart'

            const isInCart = (id) => {
                return carrito.some(prod => prod.id === id);
            }
        


    //eliminar productos

    const deleteProd = (id) => {
        const updateCart = carrito.filter(prod => prod.id !== id);
        setCarrito(updateCart);
    }

    //vaciar carrito

    const clearCart = () => {
        setCarrito([]);
    }



    //usamos el componente carritoContext.provider para enviar el valor actual del carrito y los metodos a los componentes de mi aplicacion que lo necesiten


    return (
        <CarritoContext.Provider value={{ carrito, addProduct, deleteProd, clearCart }} >
            {children}
        </CarritoContext.Provider>
    )


    //Children: es una propiedad especial que se utiliza para representar a todos aquellos componentes que puedan necesitar el carrito y sus metodos.
}