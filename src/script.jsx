//funcion que me aplica el estilo a la opcion seleccionada del menu 
function seleccionar (link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className ="";
    opciones[1].className ="";
    opciones[2].className ="";
    opciones[3].className ="";
    opciones[4].className ="";
    link.className = "seleccionado";
    //desaparecer el menu una ves seleccionado en modo rsponsive
    var x = document.getElementById("nav");
    x.className="";
}
//funcion que muestra el menu responsive
export function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === ""){
        x.className = "responsive";
    }else{
        x.className ="";
    }
}
//detecto de scrolling para barras
window.onscroll = function(){
    efectoHabilidades()
};
//funcion que aplica la animacion
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("pt").classList.add("barra-progreso4");
    }
}