// 1. Diseñar un programa que permita validar el tipo de tarjeta de crédito que
// registra el operador, para ello debemos tener en cuenta que las diferentes
// tarjetas tienen diferentes nomenclaturas:
// • American Express: 15 dígitos y empieza por(34 – 37)
// • Diners Club: tiene 14 dígitos y empieza por(300 – 305 o 36 - 38)
// • Discover: tiene 16 dígitos y empieza por(6011)
// • Mastercard: tiene 16 dígitos y empieza por(51 – 55)
// • Visa: tiene: 16 dígitos y empieza por(4)
// El programa solo se debe permitir el ingreso de enteros positivos y máximo
// 16 caracteres, si el operador ingresa un carácter no permitido se debe
// mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
// de crédito.
// Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
// condicionales.Si está permitido solicitar al operador el tipo de su tarjeta de
// crédito.


//ejemplo visa 4000123456789010

import { tipo_tarjeta } from './modulos.js';

let numero_tarjeta = prompt("Ingrese el numero de la tarjeta de credito para determinar su tipo")

let identificar = tipo_tarjeta(numero_tarjeta);

alert(`La tarjeta "${numero_tarjeta}" Pertenece a ${identificar}.`);
















