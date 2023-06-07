import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { baseDeDatos } from "../../services/config"
import { collection, addDoc } from 'firebase/firestore'

const Checkout = () => {

    const { carrito, clearCart } = useContext(CarritoContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');


    const handleOnSubmit = (event) => {
        event.preventDefault();

        //validar que los campos esten completos

        if (!nombre || !apellido || !celular || !email || !emailConfirmation) {
            setError('Por favor complete los campos');
            return;
        }


        if (email !== emailConfirmation) {
            setError('Los campos del email no coinciden');
            return;
        }


        //creamos el objeto de la orden de compra

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            celular,
            email
        };


        //guardamos la orden en la base de datos

        addDoc(collection(baseDeDatos, 'ordenes'), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                clearCart();
            })
            .catch(error => {
                console.log('error al crear la orden', error);
                setError('se produjo un error al crear la orde, vuelva más tarde');
            });

    }

    //validamos que los campos del email coincidan



    return (
        <div>
            <h2>CheckOut</h2>
            <form onSubmit={handleOnSubmit}>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre} * {producto.cantidad}</p>
                        <p>Precio: $ {producto.item.precio}</p>
                    </div>
                ))}
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Celular</label>
                    <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Email Confirmación</label>
                    <input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>


                {
                    error && <p style={{ color: 'red' }}>{error}</p>
                }

                <button type='submit'>Finalizar compra</button>

                {
                    ordenId && (
                        <strong> ¡Gracias por su compra! Tu número de orden es: {ordenId}</strong>
                    )
                }
            </form>

        </div>
    )
}

export default Checkout
