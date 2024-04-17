//Diseñar un programa que me solicite ingresar n cantidad de números por
// teclado, luego de ingresar los números el programa me debe solicitar que
// operación deseo realizar:
// a.Sumar los números
// b.Contar los números primos
// c.Contar los números pares
// d.Calcular el promedio de los números primos
// e.Calcular el promedio de números pares
// Para este ejercicio se solicita trabajar con módulos.



import { 
  sumar_numeros, 
  contar_primos, 
  contar_pares, 
  promedio_primos, 
  promedio_pares 
} from './modulos.js';


let cantidad_numeros = prompt("Ingrese cuantos numeros desea ingresar");
let numeros = [];

for (let i = 0; i < cantidad_numeros; i++) {
  let numero = parseFloat(prompt(`Ingrese el ${i + 1} número:`));
  numeros.push(numero);
}

let operacion = prompt("Indique la operación deseada: \n(a) Sumar los números \n(b) Contar los números primos \n(c) Contar los números pares \n(d) Calcular el promedio de los números primos \n(e) Calcular el promedio de los números pares").toLowerCase();


switch (operacion) {
  case "a":
    let suma = sumar_numeros(numeros);
    alert("La suma de los números es: " + suma);
    break;

  case "b":
    let contarPrimos = contar_primos(numeros);
    alert("Cantidad de números primos: " + contarPrimos);
    break;
   
  case "c":
    let contarPares = contar_pares(numeros);
    alert("Cantidad de números pares: " + contarPares);
    break;
  case "d":
      let promedioPrimos = promedio_primos(numeros);
      alert("El promedio de los números primos es: " + promedioPrimos);
      break;
  case "e":
        let promedioPares = promedio_pares(numeros);
        alert("El promedio de los números pares es: " + promedioPares);
        break;
  default:
  alert("Operación no válida.");
      }









