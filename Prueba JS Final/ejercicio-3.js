// Diseñar un programa que me solicite por teclado n cantidad de números, al
// finalizar la carga de los números el programa debe enviar los números a
// una función expresada como único parámetro rest donde serán ordenados
// de mayor a menor para luego mostrarlos en una tabla por consola


// Crea una función de nos devuelva el elemento mayor de un arreglo de números.


alert("Encontrado el numero mayor")

let cantidad_numeros = parseInt(prompt("Ingrese cuántos números desea ingresar:"));

let numeros = [];


for (let i = 0; i < cantidad_numeros; i++) {
  let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
  numeros.push(numero);
}

function buscar_mayor(arr) {
  let mayor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }
  return mayor;
}

let numero_mayor = buscar_mayor(numeros);
alert(`El número mayor es: ${numero_mayor}`);


function mayor_a_menor(...numeros) {
  return numeros.sort((a, b) => b - a);
}

let numeros_ordenados = mayor_a_menor(...numeros);

alert(`Números ordenados de mayor a menor:${numeros_ordenados}`);