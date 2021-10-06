import React from 'react'
import { Link } from "react-router-dom";
import alpes1 from '../Imagenes/Alpes.jpg';
import bolivia1 from '../Imagenes/Bolivia.jpg';
import colombia1 from '../Imagenes/Colombia.jpg';
import egipto1 from '../Imagenes/Egipto.jpg';
import muralla1 from '../Imagenes/Muralla.jpg';
import polinesia1 from '../Imagenes/Polinesia.jpg';


const Navegacion = () => {
    return (
        <div className="container mt-3 padre" >
            <Link to="/Alpes" className="link" >
                <figure>
                    <img src={alpes1} alt="" className="tamanio-img"/>
                    <figcaption>Los Alpes Suizos</figcaption>
                </figure>
            </Link>

            <Link to="/Bolivia" className="link">
                <figure>
                    <img src={bolivia1} alt="" className="tamanio-img"/>
                    <figcaption>El Salar de Uyuni</figcaption>
                </figure>
            </Link>

            <Link to="/Colombia" className="link">
                <figure>
                    <img src={colombia1} alt="" className="tamanio-img"/>
                    <figcaption>El Río de 7 colores</figcaption>
                </figure>
            </Link>

            <Link to="/Egipto" className="link">
                <figure>
                    <img src={egipto1} alt="" className="tamanio-img"/>
                    <figcaption>Las pirámides de Giza</figcaption>
                </figure>
            </Link>

            <Link to="/Muralla" className="link">
                <figure>
                    <img src={muralla1} alt="" className="tamanio-img"/>
                    <figcaption>La gran muralla China</figcaption>
                </figure>
            </Link>

            <Link to="/Polinesia" className="link">
                <figure>
                    <img src={polinesia1} alt="" className="tamanio-img"/>
                    <figcaption>Polinesia Francesa, La isla Bora Bora</figcaption>
                </figure>
            </Link>

        </div>
    )
}

export default Navegacion
