import { useState, useEffect } from "react";


//useContador: creamos nuestro propio hook para comntar productos.

export const useContador = (valorInicial, stock) => {
    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > valorInicial) {
            setContador(contador - 1);
        }
    }

    return { contador, incrementar, decrementar }
}



export const useFetch = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.log(error));
    }, [url]);

    return data;

}