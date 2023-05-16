
import { useContador, useFetch } from "./customhooks"


const Hooks = () => {

    const { contador, incrementar, decrementar } = useContador(1, 5);

    const data = useFetch('asdklaskdlas');



    return (
        <div>
            <h2>Contador</h2>
            <button onClick={decrementar}> - </button>
            <strong> {contador} </strong>
            <button onClick={incrementar}> + </button>
            <hr />
            <h2>fetch de datos</h2>
            {data && data.map((usuario) => <p key={usuario.id}> {usuario.name}</p>)}
        </div>
    )
}



export default Hooks
