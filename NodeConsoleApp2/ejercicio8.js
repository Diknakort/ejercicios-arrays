"use strict";
var _a, _b, _c;
class Persona {
    constructor(nombre, edad) {
        this.nombre = "";
        this.edad = 0;
        this.nombre = nombre;
        this.edad = edad;
    }
}
let dalo = (_a = document.getElementById("dalo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", muestralo, false);
let sumaEdades = 0;
let edadMedia = 0;
let expAcumulada = 0;
let miPersona;
function muestralo() {
    let nombreInput = document.getElementById("nombre").value;
    let edadInput = Number(document.getElementById("edad").value);
    miPersona = new Persona(nombreInput, edadInput);
    coleccionPersona.add(miPersona);
    sumaEdades += edadInput;
    edadMedia = sumaEdades / coleccionPersona.size;
    let muestraEdadMedia = `<p>el nombre es ${nombreInput} y la edad es ${edadInput} y la edad media es ${edadMedia}</p>`;
    document.getElementById("resultado").innerHTML = muestraEdadMedia;
}
let coleccionPersona = new Set();
class Empleado extends Persona {
    constructor(nombre, edad, experiencia) {
        super(nombre, edad);
        this.experiencia = 0;
        this.experiencia = experiencia;
    }
}
let contrato = (_b = document.getElementById("contratar")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", contratar, false);
let coleccionPersonaMap = new Map();
let miEmpleado;
function contratar() {
    let nombre = document.getElementById("nombre").value;
    let edadInput = Number(document.getElementById("edad").value);
    let experiencia = Number(document.getElementById("experiencia").value);
    let idEmpleado = document.getElementById("idEmpleado").value;
    miEmpleado = new Empleado(nombre, edadInput, experiencia);
    if (coleccionPersonaMap.has(idEmpleado)) {
        alert("Empleado ya contrado");
    }
    else {
        coleccionPersonaMap.set(idEmpleado, miEmpleado);
        sumaEdades += edadInput;
        edadMedia = sumaEdades / coleccionPersonaMap.size;
        alert(miEmpleado.nombre);
        expAcumulada += experiencia;
        let muestraIdEmpleado = `<p>el nombre es ${nombre} y la edad es ${edadInput} y la edad media es ${edadMedia} y su numero de empleado es ${idEmpleado} y mis empleados tienen una experiencia acumulada de ${expAcumulada}</p>`;
        document.getElementById("resultadoExperiencia").innerHTML = muestraIdEmpleado;
    }
}
let mostrarLosEmpleados = (_c = document.getElementById("mostrarLosEmpleados")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", mostrarEmpleados, false);
function mostrarEmpleados() {
    let listaEmpleadosHTML = '<ul>';
    coleccionPersonaMap.forEach((miEmpleado, idEmpleado) => {
        listaEmpleadosHTML += `<li>${idEmpleado}: de nombre ${miEmpleado.nombre}, Edad: ${miEmpleado.edad}, Experiencia: ${miEmpleado.experiencia}</li>`;
    });
    listaEmpleadosHTML += '</ul>';
    document.getElementById("listaEmpleados").innerHTML = listaEmpleadosHTML;
}
//# sourceMappingURL=ejercicio8.js.map