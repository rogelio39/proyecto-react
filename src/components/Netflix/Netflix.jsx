import { useState, useEffect } from "react"

import './Netflix.css'



const Netflix = () => {

    //aqui se bajaran todas las pelis
    const [peliculas, setPeliculas] = useState([]);
    //este sera el buscador por donde las buscaremos
    const [busqueda, setBusqueda] = useState('');


    const MY_KEY = 'c9f04fa4';


    useEffect(() => {

        fetch(`http://www.omdbapi.com/?apikey=${MY_KEY}&s=${busqueda}`)
            .then(response => response.json())
            .then(data => {
                setPeliculas(data.Search);
            })
            .catch(error => console.log(error));

    }, [busqueda]);


    const handleOnsubmit = (event) => {
        event.preventDefault();

        setBusqueda(event.target.busqueda.value);
        event.target.busqueda.value = '';
    }

    return (
        <div className="netflix">
            <h1>NETFLIX</h1>
            <form onSubmit={handleOnsubmit}>
                <input type="text" id='busqueda' name='busqueda' />
                <button type="submit">buscar</button>
            </form>


            <ul>

                {
                    peliculas === undefined ? <h2>La pelicula no esta disponible en nuestra base de datos</h2> : peliculas.map(peli => <li key={peli.imbdID}> <img src={peli.Poster} alt={peli.imbdID} /> {peli.Title} </li>)
                }

            </ul>
        </div>
    )
}

export default Netflix
