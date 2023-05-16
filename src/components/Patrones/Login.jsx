import { useState} from "react"

import InicioSesion from "./InicioSesion"
import LogginButton from "./LogginButton"

const Login = () => {

    const [usuario, setUsuario] = useState(null);

    const handleLoggin = () => {
        setUsuario('samuel');
    }



    return (
        <div>
            {
                usuario ? (<InicioSesion nombre={usuario}/>) : (<LogginButton Loguear={handleLoggin}/> )
            }
        </div>
    )
}

export default Login
