import React from "react";

function Services({onNavigate}) {
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
                                    <li><a href="#me"  onClick={() => onNavigate('me')}>SOBRE MI</a></li>
                                    <li><a href="#services" class="seleccionado" onClick={() => onNavigate('services')}>SERVICIOS</a></li>
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
        <div id="services">
          <section id="servicios">
            <h3 class="titulo-seccion">MIS SERVICIOS</h3>
            <div class="fila">
              <div class="servicio">
                <span class="icono"><i class="fa-brands fa-html5"></i></span>
                <h4>HTML Y CSS</h4>
                <hr />
                <ul class="servicios-tag">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                </ul>
                <p>
                Dominio avanzado en la creación de interfaces web modernas, intuitivas y responsivas. Mi experiencia incluye el diseño de sitios atractivos y funcionales utilizando las mejores prácticas en semántica, accesibilidad y optimización para navegadores.
                </p>
              </div>


              <div class="servicio">
                <span class="icono"><i class="fa-brands fa-js"></i></span>
                <h4>JavaScript</h4>
                <hr />
                <ul class="servicios-tag">
                  <li>Diseño</li>
                  <li>Desarrollo</li>
                  <li>Optimizacion</li>
                </ul>
                <p>
                Experto en JavaScript, desarrollando funcionalidades dinámicas e interactivas en aplicaciones web. Integro bibliotecas y frameworks como React o Vanilla JS para mejorar la experiencia del usuario y resolver problemas complejos con soluciones elegantes.
                </p>
              </div>
              
              <div class="servicio">
                <span class="icono"><i class="fa-solid fa-database"></i></span>
                <h4>Base de Datos</h4>
                <hr />
                <ul class="servicios-tag">
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>WAMPP</li>
                </ul>
                <p>
                Capacidad para diseñar, implementar y gestionar bases de datos relacionales y no relacionales. Experiencia con SQL, MongoDB y optimización de consultas para garantizar un acceso eficiente a los datos.
                </p>
              </div>
            </div>
            <div class="fila">
              <div class="servicio">
                <span class="icono"><i class="fa-solid fa-router"></i></span>
                <h4>Cisco Packet Tracer</h4>
                <hr />
                <ul class="servicios-tag">
                  <li>Routers</li>
                  <li>Switches</li>
                  <li>SD-WAN</li>
                </ul>
                <p>
                Competencia en el diseño, simulación y configuración de redes utilizando Cisco Packet Tracer. Tengo experiencia en la creación de redes seguras y optimizadas, aplicando principios sólidos de redes para resolver problemas en entornos simulados.
                </p>
              </div>
              <div class="servicio">
                <span class="icono"><i class="fa-brands fa-figma"></i></span>
                <h4>Figma</h4>
                <hr />
                <ul class="servicios-tag">
                  <li>Prototipos</li>
                  <li>Diseño</li>
                  <li>Funcion</li>
                </ul>
                <p>
                Experiencia en la creación de prototipos de alta fidelidad y diseños centrados en el usuario. Utilizo Figma para colaborar en equipo, diseñar interfaces y garantizar una experiencia visual coherente en todos los dispositivos.
                </p>
              </div>
              <div class="servicio">
                <span class="icono"><i class="fa-brands fa-github"></i></span>
                <h4>GitHub</h4>
                <hr />
                <ul class="servicios-tag">
                  <li>Almacenar</li>
                  <li>Compartir</li>
                  <li>Trabajar</li>
                </ul>
                <p>
                Dominio en el uso de GitHub para la gestión de código fuente, control de versiones y colaboración en proyectos. Implemento prácticas como pull requests, revisiones de código y flujos de trabajo CI/CD para mantener un desarrollo organizado y eficiente.
                </p>
              </div>
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

export default Services;