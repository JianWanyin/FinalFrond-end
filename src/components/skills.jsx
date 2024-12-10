import React from "react";

function Skills({ onNavigate }) {
    return (
      <>
      <section id="inicio" style={{background: "none", height: "auto"}}>
                <div class="contenido">
                    <header>
                        <div class="contenido-header">
                            <h1>/NC/</h1>
                            <nav id="nav" class="responsive">
                                <ul id="links">
                                    <li><a href="#inicio" onClick={() => onNavigate('inicio')}>INICIO</a></li>
                                    <li><a href="#me" onClick={() => onNavigate('me')}>SOBRE MI</a></li>
                                    <li><a href="#services" onClick={() => onNavigate('services')}>SERVICIOS</a></li>
                                    <li><a href="#skills" class="seleccionado" onClick={() => onNavigate('skills')}>HABILIDADES</a></li>
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
        <div id="skills">
        <div class="contenedor-skills" id="skills">
      <h3>HABILIDADES</h3>

      <div class="skills">
        <div class="info">
          <p><span class="lista"></span>Html & Css</p>
          <span class="porcentaje">95%</span>
        </div>
        <div class="barra">
          <div id="html" class=""></div>
        </div>
      </div>

      <div class="skills">
        <div class="info">
          <p><span class="lista"></span>JavaScript</p>
          <span class="porcentaje">90%</span>
        </div>
        <div class="barra">
          <div id="js" class=""></div>
        </div>
      </div>

      <div class="skills">
        <div class="info">
          <p><span class="lista"></span>Base de Datos</p>
          <span class="porcentaje">70%</span>
        </div>
        <div class="barra">
          <div id="bd" class=""></div>
        </div>
      </div>

      <div class="skills">
        <div class="info">
          <p><span class="lista"></span>Cisco Packet Tracer</p>
          <span class="porcentaje">90%</span>
        </div>
        <div class="barra">
          <div id="pt" class=""></div>
        </div>
      </div>
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
        </div>
      </>
    );
}

export default Skills;