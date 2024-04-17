// Diseñar un modulo llamado calculadora, en este módulo debe exportar una
// clase con los siguientes metodos:
// a.Suma
// b.Resta
// c.Multiplicación
// d.División
// Al momento de realizar cada operación el sistema debe validar que no se
// presenten errores, si al momento de su ejecución se presenta algún error, el
// sistema debe enviar un mensaje personalizado indicando el tipo de error
// para que el usuario lo solucione y continue realizando los cálculos básicos de las matemáticas.

import Calculadora from "./modulos.js";

const calculadora = new Calculadora();


let continuar = true;

while (continuar) {
  const operacion = prompt("Ingrese la operación que desea realizar: \n(a) Sumar \n(b) Restar \n(c) Multiplicar \n(d) Dividir").toLowerCase();
  let resultado;

  let n1 = parseFloat(prompt("Ingrese el primer número:"));
  let n2 = parseFloat(prompt("Ingrese el segundo número:"));

  switch (operacion) {
    case "a":
      resultado = calculadora.sumar(n1, n2);
      break;
    case "b":
      resultado = calculadora.restar(n1, n2);
      break;
    case "c":
      resultado = calculadora.multiplicar(n1, n2);
      break;
    case "d":
      if (n2 !== 0) {
        resultado = calculadora.dividir(n1, n2);
      } else {
        alert("Error: No se puede dividir entre 0");
        continuar = false;
      }
      break;
    default:
      alert("Operación no válida.");
      continuar = false;
  }

  if (resultado !== undefined) {
    alert(`Resultado: ${resultado}`);
    continuar = true;
  }

}
