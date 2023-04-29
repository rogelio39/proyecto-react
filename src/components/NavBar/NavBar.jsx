import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div>
            <header className="headerNav">
                <h1>PARADISI ONLINE</h1>
                <nav className="navBar">
                    <ul>
                        <li>PANES INTEGRALES</li>
                        <li>BUDINES</li>
                        <li>ALFAJORES</li>
                    </ul>
                </nav>

                <CartWidget/>
            </header>
        </div>
    )
}

export default NavBar
