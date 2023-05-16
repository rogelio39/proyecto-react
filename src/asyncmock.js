const productos = [
    { nombre: 'Pan integral', precio: 500, id: 1, img: './assets/panIntegral.jpg' },
    { nombre: 'Pan integral', precio: 1000, id: 2, img: './assets/budines.jpg' },
    { nombre: 'Pan integral', precio: 200, id: 3, img: './assets/alfajores.jpg' }

]

//funcion que nos devuelve el array con los productos con un delay de 2 segundos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}


//funcion similar a la anterior pero lo que haremos es que solo devuelve un producto.

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id)

            resolve(producto);
        })
        }, 2000)
    }


    