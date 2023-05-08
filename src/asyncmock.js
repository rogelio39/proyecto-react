const productos = [
    { nombre: 'Pan integral', precio: 500, id: 1, img: './assets/panIntegral.jpg' },
    { nombre: 'Pan integral', precio: 1000, id: 2, img: './assets/budines.jpg' },
    { nombre: 'Pan integral', precio: 200, id: 3, img: './assets/alfajores.jpg' }

]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}