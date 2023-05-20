
import './Footer.css';




const Footer = () => {


    const imgLogo = "./assets/logo.png";
    return (
        <div className="card">
            <div className='card-container'>
                <div className="card-header">
                    <img src={imgLogo} alt="logo" />
                </div>

                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Encontranos en Bascary Tucuman, Yerba buena.</p>
                        <footer className="blockquote-footer">COMPARTI <cite title="Source Title">PARADISI</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Footer
