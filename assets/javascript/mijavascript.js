const saludar = () => {
  document.getElementById("mensaje").innerText = "Hola Mundo";
}

function limpiar()  {
  document.getElementById("contenido").innerHTML = "";
}

function ponerTitulo()  {
  let contenido = document.getElementById("contenido");
  
  let titulo = document.createElement("h1");
  let contenido_titulo = document.createTextNode("Nuevo Título");
  titulo.appendChild(contenido_titulo);

  let fila = document.getElementById("fila");
  // contenido.appendChild(titulo);
  contenido.insertBefore(titulo, fila);
}

function verMas() {
  let tarjeta = document.getElementById("tarjeta_1");
  let tarjeta_body = tarjeta.getElementsByClassName("card-body")[0];
  let texto_adicional = document.createElement("p");
  texto_adicional.innerHTML = "Este es un <b>texto</b> adicional";
  tarjeta_body.appendChild(texto_adicional);
}

function revisarLista() {
  let lista = ["uno", "dos", "tres", 4, 5, 6];
  console.log(lista[4]);
  console.log(lista[10]);

  let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 17,
    hijos: ["Pedro", "María", "Pablo"]
  }
  console.log(persona.nombre + " " + persona.apellido);

  if (persona.edad >= 18) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad");
  }

  if (persona.hijos.length > 0) {
    console.log("Tiene hijos");
  } else {
    console.log("No tiene hijos");
  }

  if (persona.edad >= 18 && persona.hijos.length > 0) {
    console.log("Es mayor de edad y tiene hijos: SUJETO A BONO");
  } else {
    console.log("No cumple con las condiciones");
  }


}