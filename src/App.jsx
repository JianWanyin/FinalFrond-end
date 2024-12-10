// App.jsx
import React, { useState } from 'react';
import Header from './components/header'; // Asegúrate de que la ruta sea correcta
import Me from './components/me'; // Crea este componente
import Services from './components/services'; // Crea este componente
import Skills from './components/skills'; // Crea este componente
import Profile from './components/profile'; // Crea este componente
import Contact from './components/contact'; // Crea este componente


function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  function responsiveMenu () {
    var x = document.getElementById("nav");
    if (x.getElementsByClassName == ""){
        x.setAttribute("class","responsive");
    }else{
        x.setAttribute("class","");;
    }
};
  return (
    <div>
      <div>
          {activeSection === 'inicio' && <Header onNavigate={handleNavigation} />}
          {activeSection === 'me' && <Me onNavigate={handleNavigation} />}
          {activeSection === 'services' && <Services onNavigate={handleNavigation} />}
          {activeSection === 'skills' && <Skills onNavigate={handleNavigation} />}
          {activeSection === 'profile' && <Profile onNavigate={handleNavigation} />}
          {activeSection === 'contact' && <Contact onNavigate={handleNavigation} />}
      </div>
    </div>
    );
}

export default App;