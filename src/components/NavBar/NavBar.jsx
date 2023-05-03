import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    
    const imgLogo = "./assets/logo.png";

    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <img className='imgLogo' src={imgLogo} alt="imagen logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <p className="nav-link active" aria-current="page">Home</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Features</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Pricing</p>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <CartWidget />
        </header>

    )
}

export default NavBar
