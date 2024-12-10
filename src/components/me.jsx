import React from "react";

function Me({onNavigate}) {
    return (
      <>
        <div id="me">
          <section id="inicio" style={{background: "none", height: "auto"}}>
                <div class="contenido">
                    <header>
                        <div class="contenido-header">
                            <h1>/NC/</h1>
                            <nav id="nav" class="responsive">
                                <ul id="links">
                                    <li><a href="#inicio" onClick={() => onNavigate('inicio')}>INICIO</a></li>
                                    <li><a href="#me" class="seleccionado" onClick={() => onNavigate('me')}>SOBRE MI</a></li>
                                    <li><a href="#services" onClick={() => onNavigate('services')}>SERVICIOS</a></li>
                                    <li><a href="#skills" onClick={() => onNavigate('skills')}>HABILIDADES</a></li>
                                    <li><a href="#profile" onClick={() => onNavigate('profile')}>PORTAFOLIO</a></li>
                                    <li><a href="#contact" onClick={() => onNavigate('contact')}>CONTACTO</a></li>
                                </ul>
                            </nav>

                            <div id="icono-nav" onclick="responsiveMenu()">
                                <i class="fa-solid fa-bars"></i>
                            </div>

                            <div class="redes">
                              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-youtube"></i>
                              </a>
                              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-facebook"></i>
                              </a>
                              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-instagram"></i>
                              </a>
                            </div>
                        </div>
                    </header>
                </div>
          </section>
          <section id="sobremi">
            <div class="contenedor-foto">
              <img src="img/profile.jpeg" alt="" />
            </div>
            <div class="sobremi">
              <p class="titulo-seccion">Sobre Mi</p>
              <h2>Hola, soy <span>Natalia Coro Vasquez</span></h2>
              <h3>Desarrolladora Frond-end</h3>
              <p>
                Tengo una pasion por crear experiencias web modernas, intuitivas y
                funcionales. Disfruto trabajar con tecnologias como HTML, CSS,
                JavaScript y frameworks como React, para dar vida a proyectos
                innovadores que cumplan con las expectativas del usuario final.
              </p>
              <p>
                Cuando no estoy escribiendo código, me encanta explorar nuevas
                tendencias en tecnología y diseño, manteniéndome siempre a la
                vanguardia.
              </p>
              <a href="#">Descargar CV</a>
            </div>
          </section>
        </div>
        <footer>
        <p>Natalia C.V. - Todos los derechos reservados - 2024</p>
        <div class="redes">
                              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-youtube"></i>
                              </a>
                              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-facebook"></i>
                              </a>
                              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-instagram"></i>
                              </a>
                            </div>
       </footer>
      </>
    );
}

export default Me;