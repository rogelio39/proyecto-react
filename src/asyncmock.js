export const productos = [
    { nombre: 'Pan integral', precio: 500, id: '1', stock: 10, img: '../assets/panIntegral.jpg', idCat:'1' },
    { nombre: 'Budines', precio: 1000, id: '2', stock: 10, img: '../assets/budines.jpg', idCat:'2' },
    { nombre: 'Alfajores', precio: 200, id: '3',stock:7, img: '../assets/alfajores.jpg', idCat:'3' }

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


//funcion que retorne toda una categoria de productos

export const getProductsByCategory = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve (productosCategoria);    
        },1000)
        })
    }



    export const getOneProductBySearch = (busqueda) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const producto = productos.find(prod => prod.name === busqueda)
    
                resolve(producto);
            })
            }, 2000)
        }