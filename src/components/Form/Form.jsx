import { useState } from "react"

import { baseDeDatos } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";


const Form = () => {

    const [nombre, setNombre] = useState('');

    const [apellido, setApellido] = useState('');

    const [celular, setCelular] = useState('');



    //FUNCION PARA MANEJAR FORMULARIO

    const handleSubmit = (event) => {
        event.preventDefault();

        //usamos addDoc que subira el nuevo documento a la coleccion. Toma los datos del formulario, lo carga en los estados, de los estados crea un nhevo documento, se conecta con la base de datos y los sube

        addDoc(collection(baseDeDatos, 'usuarios'), {
            nombre: nombre,
            apellido: apellido,
            celular: celular
        })
        
        setNombre('');
        setApellido('');
        setCelular('');

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>FORMULARIO</h2>

            <label htmlFor="">Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <label htmlFor="">Apellido</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

            <label htmlFor="">Celular</label>
            <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />

            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form
