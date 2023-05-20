import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';



const NavBar = () => {


    const imgLogo = "./assets/logo.png";
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to={'/'}> <img className='imgLogo' src={imgLogo} alt="imagen logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <Menu />
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page">PRODUCTOS</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/categoria/1'} className="nav-link">Panes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/categoria/2'} className="nav-link">Budines</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/categoria/3'} className="nav-link ">Alfajores</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <CartWidget />
        </header>

    )
}

export default NavBar
