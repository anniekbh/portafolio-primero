var boton = document.getElementById('informacion');
var fondo = document.getElementById("presentacion");

boton.addEventListener("click", CrearInfo);

function CrearInfo(){
	var bloque = document.createElement("div");
    var titulo = document.createElement("span");
    var textitulo = document.createTextNode("Sobre Mi");
    var texto = document.createElement("span");
    var textbloque = document.createTextNode("Hola, tengo 26 años y soy desarrolladora front-end web junior. Estudié la carrera de comunicación audiovisual previamente y actualmente estudio en Laboratoria desarrollando mis habilidades. En mis ratos libres me gusta tomar fotografias y leer un buen libro junto a un delicioso té. Soy autodidacta, honesta y dinamica, me gusta estar al tanto de los desarrollos logrados en la indrustia tecnologica y aprender nuevas habilidades cada que sea requerido.");

	bloque.classList.add("info");
	titulo.classList.add("tituloSobre");
	texto.classList.add("textoSobre");
	fondo.setAttribute("class","fondoSobre");

    titulo.appendChild(textitulo);
    texto.appendChild(textbloque);

    bloque.insertBefore(titulo, bloque.children[0]);
    bloque.insertBefore(texto, bloque.children[1]);
    fondo.insertBefore(bloque, fondo.children[0]);
}