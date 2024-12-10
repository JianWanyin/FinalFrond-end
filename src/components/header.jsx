import React, { useState } from "react";
import '/src/estilo.css';

function Header({onNavigate}) {
    const [darkMode, setDarkMode] = useState(false);

    function responsiveMenu () {
        var x = document.getElementById("nav");
        if (x.getElementsByClassName == "") {
            x.setAttribute("class","responsive");
        } else {
            x.setAttribute("class","");
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode"); // Cambia la clase del body
    };

    return (
        <>
            <section id="inicio">
                <div className="contenido">
                    <header>
                        <div className="contenido-header">
                            <h1>/NC/</h1>
                            <nav id="nav" className="responsive">
                                <ul id="links">
                                    <li><a href="#inicio" className="seleccionado" onClick={() => onNavigate('inicio')}>INICIO</a></li>
                                    <li><a href="#me" onClick={() => onNavigate('me')}>SOBRE MI</a></li>
                                    <li><a href="#services" onClick={() => onNavigate('services')}>SERVICIOS</a></li>
                                    <li><a href="#skills" onClick={() => onNavigate('skills')}>HABILIDADES</a></li>
                                    <li><a href="#profile" onClick={() => onNavigate('profile')}>PORTAFOLIO</a></li>
                                    <li><a href="#contact" onClick={() => onNavigate('contact')}>CONTACTO</a></li>
                                </ul>
                            </nav>

                            <div id="icono-nav" onClick={responsiveMenu}>
                                <i className="fa-solid fa-bars"></i>
                            </div>

                            {/* Botón de modo oscuro */}
                            <button onClick={toggleDarkMode} className="dark-mode-toggle">
                                {darkMode ? "🌞 Claro" : "🌙 Oscuro"}
                            </button>

                            <div className="redes">
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </header>
                    <div className="presentacion">
                        <p className="bienvenida">BIENVENIDOS</p>
                        <h2>Soy <span>NATALIA CORO</span>, Desarrolladora Web</h2>
                        <p className="descripcion">
                            Me especializo en el diseño y desarrollo de interfaces que no solo sean visualmente atractivas, sino tambien altamente usables.</p>
                        <a href="#profile" onClick={() => onNavigate('profile')}>Ir a Portafolio</a>
                    </div>
                </div>
            </section>
            <footer>
                <p>Natalia C.V. - Todos los derechos reservados - 2024</p>
                <div className="redes">
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Header;
