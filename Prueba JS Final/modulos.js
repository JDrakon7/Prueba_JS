// EJERCICIO 1



function tipo_tarjeta(numero_tarjeta) {
  const american_express = /^3[47][0-9]{13}$/;
  const diners_club = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  const discover = /^6011[0-9]{12}$/;
  const mastercard = /^5[1-5][0-9]{14}$/;
  const visa = /^4[0-9]{15}$/;

  if (numero_tarjeta.match(american_express)) {
    return "American Express";
  } else if (numero_tarjeta.match(diners_club)) {
    return "Diners Club";
  } else if (numero_tarjeta.match(discover)) {
    return "Discover";
  } else if (numero_tarjeta.match(mastercard)) {
    return "Mastercard";
  } else if (numero_tarjeta.match(visa)) {
    return "Visa";
  } else {
    return "Desconocido";
  }
}

export { tipo_tarjeta };

//////////////////////////////////// EJERCICIO 2///////////////////////////////////

// Función para sumar los números
function sumar_numeros(numeros) {
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return suma;
}

export { sumar_numeros }


// Función para verificar si un número es primo
function Primo(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

// Función para contar los números primos
function contar_primos(numeros) {
  let contador = 0;
  for (let numero of numeros) {
    if (Primo(numero)) {
      contador++;
    }
  }
  return contador;
}
export { contar_primos }


// Función para contar los números pares
function contar_pares(numeros) {
  let contador = 0;
  for (let numero of numeros) {
    if (numero % 2 === 0) {
      contador++;
    }
  }
  return contador;
}
export { contar_pares }


// Función para calcular el promedio de los números
function calcular_promedio(numeros) {
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return suma / numeros.length;
}
export { calcular_promedio }


// Función para calcular el promedio de los números primos
function promedio_primos(numeros) {
  let primos = numeros.filter(numero => Primo(numero));
  return calcular_promedio(primos);
}

export { promedio_primos }


// Función para calcular el promedio de los números pares
function promedio_pares(numeros) {
  let pares = numeros.filter(numero => numero % 2 === 0);
  return calcular_promedio(pares);
}
export { promedio_pares }







/////////////////////////////////EJERCICIO 5 /////////////////////////////////
class Calculadora {
  sumar(a, b) {
    return a + b;
  }
  restar(a, b) {
    return a - b;
  }
  multiplicar(a, b) {
    return a * b;
  }
  dividir(a, b) {
    return a / b;
  }
}
export default Calculadora;

