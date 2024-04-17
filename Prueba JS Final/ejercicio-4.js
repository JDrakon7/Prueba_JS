// Diseñar un programa que me permita ingresar n cantidad de palabras por
// teclado, al finalizar la carga, se debe enviar como a una función expresada
// como único parámetro rest donde nos responderá cual de las palabras
// ingresadas es mayor a todas las anteriores.

let numero_palabras = parseInt(prompt("Ingrese cuántas palabras desea ingresar:"));
let palabras = [];

for (let i = 0; i < numero_palabras; i++) {
  let palabra = prompt(`Ingrese la palabra ${i + 1}:`);
  palabras.push(palabra)
}


let palabra_larga = function buscar_palabra_larga(palabras) {
  let palabra_larga = palabras[0];
  for (let i = 1; i < palabras.length; i++) {
    if (palabras[i].length > palabra_larga.length) {
      palabra_larga = palabras[i];
    }
  }
  return palabra_larga;
}

alert(`La palabra mas larga es ${palabra_larga}`)















