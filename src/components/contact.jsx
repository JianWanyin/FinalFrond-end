import React from "react";

function Contact({onNavigate}) {
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
                                    <li><a href="#skills" onClick={() => onNavigate('skills')}>HABILIDADES</a></li>
                                    <li><a href="#profile" onClick={() => onNavigate('profile')}>PORTAFOLIO</a></li>
                                    <li><a href="#contact" class="seleccionado" onClick={() => onNavigate('contact')}>CONTACTO</a></li>
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
      <div id="contact">
        <section id="contacto">
          <h3 class="titulo-seccion">Contacta ahora</h3>
          <div class="contenedor-form">
            <form action="">
              <div class="fila mitad">
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  class="input-mitad"
                />
                <input
                  type="text"
                  placeholder="Direccion de Email"
                  class="input-mitad"
                />
              </div>
              <div class="fila">
                <input type="text" placeholder="Tema..." class="input-full" />
              </div>
              <div class="fila">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  class="input-full"
                ></textarea>
              </div>

              <input type="submit" value="Enviar Mensaje" class="btn-enviar" />
            </form>
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
export default Contact;