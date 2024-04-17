// Diseñar un modulo llamado calculadora, en este módulo debe exportar una
// clase con los siguientes metodos:
// a.Suma
// b.Resta
// c.Multiplicación
// d.División
// Al momento de realizar cada operación el sistema debe validar que no se
// presenten errores, si al momento de su ejecución se presenta algún error, el
// sistema debe enviar un mensaje personalizado indicando el tipo de error
// para que el usuario lo solucione y continue realizando los cálculos básicos
// de las matemáticas.



import { sumar, restar, multiplicar, dividir } from "./modulos.js";

const operacion = prompt("Ingrese la operación que desea realizar: \n(a) Sumar \n(b) Restar \n(c) Multiplicar \n(d) Dividir").toLowerCase();


let resultado;
switch (operacion) {
  case "a":
    const suma1 = parseFloat(prompt("Ingrese el primer número para sumar:"));
    const suma2 = parseFloat(prompt("Ingrese el segundo número para sumar:"));
    resultado = sumar(suma1, suma2);
    break;
  case "b":
    const resta1 = parseFloat(prompt("Ingrese el primer número para restar:"));
    const resta2 = parseFloat(prompt("Ingrese el segundo número para restar:"));
    resultado = restar(resta1, resta2);
    break;
  case "c":
    const multi1 = parseFloat(prompt("Ingrese el multiplicando:"));
    const multi2 = parseFloat(prompt("Ingrese el multiplicador:"));
    resultado = multiplicar(multi1, multi2);
    break;
  case "d":
    const divi1 = parseFloat(prompt("Ingrese el dividendo:"));
    const divi2 = parseFloat(prompt("Ingrese el divisor:"));
    resultado = dividir(divi1, divi2);
    if (resultado === Infinity) {
      alert("Error: No se puede dividir entre 0");
      resultado = undefined;
    }
    break;
  default:
    alert("Operación no válida.");
}

if (resultado !== undefined) {
  alert(`Resultado: ${resultado}`);
}