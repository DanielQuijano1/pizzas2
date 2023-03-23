import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

    return (
        <>
            <div class="imgHeader"></div>
            <div class="marcoLogo">
                <div class="lineaRojaHeader"></div>
                <div class="lineaRojaHeader2"></div>
                <div class="marcoLogo__descripcion">
                    <Link to="/" className="imgIndex">
                        <div class="imgLogo" />
                    </Link>
                    <div class="tituloEinformacion">
                        <h1 class="titulo"> <em> Pizzería Mía </em></h1>
                        <div class="fondoInfo">
                            <p class="descripcion">
                                Todo lo rico de la comida casera, ahora cerca de tu casa.
                            </p>
                            <p class="descripcion">
                                <span class="material-icons">
                                    schedule
                                </span>
                                MARTES A DOMINGOS 19hs en adelante.
                            </p>
                            <p class="descripcion">
                                <span class="material-icons">
                                    location_on
                                </span>
                                Calle 818 n°2201
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="links">
                <div className="link__title">¿Consultas?</div>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5491165117736" class="link">
                    <button type="button" class="boton" aria-label="Enviar mensaje por Whastapp">
                        <div aria-hidden="true" focusable="false" class="iconoLink">
                            <svg height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <path class="cls-1"
                                    d="M20.5 3.49a12 12 0 00-20.4 8.4 11.82 11.82 0 001.6 5.95L0 24l6.33-1.65A12 12 0 0012 23.79 11.94 11.94 0 0024 11.9a11.8 11.8 0 00-3.5-8.41zm-8.45 18.3A10 10 0 017 20.41l-.36-.21-3.76 1 1-3.65-.24-.37A9.88 9.88 0 0112.05 2a9.89 9.89 0 110 19.78zm5.45-7.4c-.3-.15-1.77-.87-2-1s-.47-.15-.67.15-.77 1-.95 1.17-.35.22-.65.07a8.17 8.17 0 01-2.4-1.47 9 9 0 01-1.66-2.06c-.17-.3 0-.46.13-.61s.3-.35.45-.52a2 2 0 00.3-.5.55.55 0 000-.52c-.14-.1-.74-1.58-.99-2.18s-.49-.5-.67-.51h-.57a1.1 1.1 0 00-.8.37A3.33 3.33 0 006 9.25a5.78 5.78 0 001.2 3.07 13.27 13.27 0 005.1 4.49 17.31 17.31 0 001.7.63 4.11 4.11 0 001.88.12 3.07 3.07 0 002-1.41 2.48 2.48 0 00.17-1.41c-.05-.13-.25-.21-.55-.36z">
                                </path>
                            </svg>
                        </div>
                    </button>
                </a>
            </div>
        </>

    )
}

export default Navbar