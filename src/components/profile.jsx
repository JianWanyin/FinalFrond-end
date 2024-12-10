import React from "react";

function Profile ({onNavigate}) {
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
                                    <li><a href="#profile" class="seleccionado" onClick={() => onNavigate('profile')}>PORTAFOLIO</a></li>
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
        <div className="profile">
          <section id="portfolio">
            <h3 class="titulo-section">MI GALERIA</h3><br/>
            <p>Galeria de los animes mas vistos en mi 2024</p>
            <div class="fila">
              <div class="proyecto">
                <div class="overlay"></div>
                <img
                  src="https://elcomercio.pe/resizer/v2/4ZEGOTP4ORCYZFF3OA4BUNEEBU.jpg?auth=23118f996176913474cd4c1361de6aefed966df21220340838a0fefd5c08ae0c&width=1200&height=675&quality=75&smart=true"
                  alt=""
                />
                <div class="info">
                  <h4></h4>
                  <p>NARUTO</p>
                </div>
              </div>


              <div class="proyecto">
                <div class="overlay"></div>
                <img
                  src="https://diarioelsalvador.media/2024/08/EPY1p4aXkAA3ulC.jpg"
                  alt=""
                />
                <div class="info">
                  <h4></h4>
                  <p>DR. STONE</p>
                </div>
              </div>

              <div class="proyecto">
                <div class="overlay"></div>
                <img
                  src="https://pbs.twimg.com/media/GBpqAsdaMAAhnvM.jpg:large"
                  alt=""
                />
                <div class="info">
                  <h4></h4>
                  <p>KATEKYO HITMAN REBORN</p>
                </div>
              </div>

              <div class="proyecto">
                <div class="overlay"></div>
                <img
                  src="https://i0.wp.com/elpalomitron.com/wp-content/uploads/2020/12/Shingeki-no-Kyojin-S4-Episodios-fecha-y-trailer-de-la-ultima-temporada-de-AOT-personajes-destacada-El-Palomitron.jpg?resize=1200%2C600&ssl=1"
                  alt=""
                />
                <div class="info">
                  <h4></h4>
                  <p>SHINGEKI NO KIOYIN</p>
                </div>
              </div>

              <div class="proyecto">
                <div class="overlay"></div>
                <img
                  src="https://wallpapers.com/images/hd/your-lie-in-april-pictures-jqem4ozd4w2hc3lz.jpg"
                  alt=""
                />
                <div class="info">
                  <h4></h4>
                  <p>SHIGATSU WA KIMI NO USO</p>
                </div>
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

export default Profile;