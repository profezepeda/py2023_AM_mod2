function saludar(){
    let elemento = document.getElementById("contenido");
    elemento.innerHTML = "Un saludo <b>especial</b> al mejor curso ONLINE";
}

function agregarelementos() {
    let elemento = document.getElementById("contenido");
    let nuevoElemento = document.createElement("p");
    let texto = document.createTextNode("Este es un nuevo párrafo");
    nuevoElemento.appendChild(texto);
    elemento.appendChild(nuevoElemento);
}

function leerElemento() {
  let elemento = document.getElementById("contenido");
  console.log(elemento.innerHTML);
  console.log("hijos: " + elemento.childNodes.length);
}

function cambiarColor() {
  let elemento = document.getElementById("contenido");
  if (elemento.childNodes.length > 2)  {
    elemento.childNodes[2].style.color = "red";
    elemento.childNodes[2].style.backgroundColor = "yellow";
  } else if (elemento.childNodes.length == 0) {
    console.log("No hay elementos");
  } else {
    console.log("No hay elementos suficientes");
  }
  let variable1 = "a";
  let variable2 = "b";
  let concatenacion = variable1 + variable2;
  variable1 += variable2;
}

/* function listarPaises() {
  let paises = ["Chile", "España", "Francia", "Italia", "Portugal"];
  let contador = 0;
  while (contador < paises.length) {
    console.log(contador, paises[contador]);
    contador++;
  }
} */

function sumar(varlo1, valor2)  {
  console.log(varlo1 + valor2)
  return varlo1 + valor2;
}

function listaPersonas()  {
  let lista = [];
  lista.push(getPersona(18, "Juan", "Pérez")); // 0
  lista.push(getPersona(15, "María", "Morales")); // 1
  lista.push(getPersona(25, "Pedro", "Prado")); // 2
  lista.push(getPersona(14, "Marco", "Morales")); // 3
  lista.push(getPersona(10, "Eugenia", "Pérez")); // 4
  lista.push(getPersona(50, "Marta", "González")); // 5

  // contador = 0;
  // while (lista[contador].edad >= 18) {
  //   console.log(lista[contador]);
  //   contador++;
  // }

  for (let contador = 0; contador < lista.length; contador++) {
    console.log(lista[contador])
    // if (lista[contador].edad >= 18) {
    //   console.log(lista[contador]);
    // }
  }


  // console.log(lista);
}

function getPersona(edad, nombre, apellidos) {
  let persona = {
    nombre: nombre,
    apellidos: apellidos,
    edad: edad,
    direccion: {
      calle: "C/ Mayor",
      numero: 12,
      ciudad: "Madrid",
      pais: "España"
    },
    aficiones: ["leer", "pasear", "deporte"]
  };
  return persona;
}


function listarPaises() {
  let elemento = document.getElementById("contenido");
  let paises = ["España", "Francia", "Italia", "Portugal", "Chile", "Perú", "Argentina"];
  let lista = document.createElement("ul");
  for (let i = 0; i < paises.length; i++) {
    let item = document.createElement("li");
    let texto = document.createTextNode(paises[i]);
    item.appendChild(texto);
    lista.appendChild(item);
  }
  elemento.appendChild(lista);
}

function colorearRojo() {
  let elemento = document.getElementById("contenido");
  elemento.style.backgroundColor = "pink";
}

function colorearNormal() {
  let elemento = document.getElementById("contenido");
  elemento.style.backgroundColor = "#ccc";
}