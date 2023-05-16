import { useState, useEffect } from "react";


const JsonPlaceHolder = () => {

    const [usuarios, setUsuarios] = useState([]);

    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?&s`)
            .then(respuesta => respuesta.json())
            .then(data => setUsuarios(data))
            .catch(error => console.log(error));
    }, [])




    const handleOnsubmitUsuarios = (event) => {
        event.preventDefault();

        setBusqueda(event.target.busqueda.value.toUpperCase());
        event.target.busqueda.value = '';
    }

    const usuariosFiltrados = usuarios.filter((usuario) =>
        busqueda === "TODOS" ? true : usuario.name.toUpperCase() === busqueda
    );

    return (
        <div>
            <form onSubmit={handleOnsubmitUsuarios}>
                <input type="text" name="busqueda" id="busqueda" />
                <button type="submit">Buscar Usuarios</button>
            </form>
            <div>

                {
                    usuariosFiltrados.map((usuario) => (
                        <p key={usuario.id}>
                            ID: {usuario.id}, NAME: {usuario.name}, EMAIL: {usuario.email}
                        </p>
                    ))
                }

            </div>
        </div>
    )
}

export default JsonPlaceHolder
