"use strict";
//console.log('Hello world');
//class Childrens {
//    nombre: string = "";
//    genero: string = "";
//}
let nombres01 = [];
nombres01.push("Andra");
nombres01.push("Aneu");
nombres01.push("Arlet");
nombres01.push("Ehud");
nombres01.push("Indivar");
nombres01.push("Samay");
nombres01.push("San�a");
nombres01.push("Tanit");
nombres01.push("Uxia");
nombres01.push("Zenda");
let nombres02 = [];
nombres02.push("Abba");
nombres02.push("Acfred");
nombres02.push("Areu");
nombres02.push("Drac");
nombres02.push("Guim");
nombres02.push("Iol");
nombres02.push("Kilian");
nombres02.push("Mirt");
nombres02.push("Yannick");
nombres02.push("Zigor");
nombres02.push("Tanit");
//interface IValidador {
//    isValid(MiNombre: Childrens): boolean;
//}
//class ValidaLargoNombre implements IValidador {
//    isValid(MiNombre: Childrens): boolean {
//        return MiNombre.nombre.length >= 2;
//    }
//}
function imprimeNombre(elemento) {
    console.log(elemento.toString());
}
console.log('Nombres chica');
nombres01.forEach(imprimeNombre);
console.log('Nombres chico');
nombres02.forEach(imprimeNombre);
//// FILTRO
function filtroLetra(element, index, array) {
    //let letraValor = "I";
    //return (element > letraValor);
    return (element > "I");
}
var letraFiltro = nombres02.filter(filtroLetra);
console.log("Nombres mayores que I (chicos): " + letraFiltro);
let buenoLargo = nombres01.filter(filtroLetra);
console.log('Nombres mayores que I (chicas): ', buenoLargo.toString());
//// EVERY
function mayorDos(element, index, array) {
    return (element.length > 2);
}
var esMasDos = nombres01.every(mayorDos);
console.log("Son todos los nombres de mas de 2 letras? : " + esMasDos);
// Reverse
function palindromo(element, index, array) {
    return element.split('').reverse().join('');
}
let palindromoChicos = nombres02.map(palindromo);
let palindromoChicas = nombres01.map(palindromo);
console.log('Nombres reverse (chicos): ', palindromoChicos);
console.log('Nombres reverse (chicas): ', palindromoChicas);
// IndexOF (buscar un OBJETO dentro de un array)
// Opcion 1
let pooChico = "Jacinto";
let fooChica = "Tanit";
console.log("Aparece " + pooChico + " en la lista chicas? : " + nombres01.indexOf(pooChico) + " y aparece en CHICOS? " + nombres02.indexOf(pooChico));
console.log("Aparece " + fooChica + " en la lista chicas? : " + nombres01.indexOf(fooChica) + " y aparece en CHICOS? " + nombres02.indexOf(fooChica));
// // Opcion 2
//console.log("En que puesto aparece en chicas el nombre de Jacinto? " + nombres01.indexOf("Jacinto") + ", y en la lista de chicos esta en la posicion : " + nombres02.indexOf("Jacinto"));
//console.log("En que puesto aparece en chicas el nombre de Tanit? " + nombres01.indexOf("Tanit") + ", y en la lista de chicos esta en la posicion : " + nombres02.indexOf("Tanit"));
/// JUNTAR Y poner "," para separar
let juntaComasChicas = nombres01.join(", ");
let juntaComasChicos = nombres02.join(", ");
console.log(`nombres chico separado por comas :  ${juntaComasChicos}`);
console.log(`nombres chica separado por comas :  ${juntaComasChicas}`);
// Crear un nuevo array con la longitud de cada nombre
const longitudNombresChica = nombres01.map(nombre => nombre.length);
const longitudNombresChico = nombres02.map(nombre => nombre.length);
console.log(`la longitud de los nombres de chicas son : ${longitudNombresChica}`);
console.log(`la longitud de los nombres de chicos son : ${longitudNombresChico}`);
//# sourceMappingURL=app.js.map