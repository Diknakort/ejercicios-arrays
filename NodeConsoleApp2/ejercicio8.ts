class Persona {
    nombre: string = "";
    edad: number = 0;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
let dalo = <HTMLElement><unknown>document.getElementById("dalo")?.addEventListener("click", muestralo, false);
let sumaEdades = 0;
let edadMedia = 0;
let expAcumulada = 0;

let miPersona: Persona;
function muestralo() {
    let nombreInput = (<HTMLInputElement>document.getElementById("nombre")).value;
    let edadInput = Number((<HTMLInputElement>document.getElementById("edad")).value);

    miPersona = new Persona(nombreInput, edadInput);
    coleccionPersona.add(miPersona);

    sumaEdades += edadInput;
    edadMedia = sumaEdades / coleccionPersona.size;
    let muestraEdadMedia = `<p>el nombre es ${nombreInput} y la edad es ${edadInput} y la edad media es ${edadMedia}</p>`;
    (<HTMLElement>document.getElementById("resultado")).innerHTML = muestraEdadMedia;

}
let coleccionPersona: Set<Persona> = new Set();

class Empleado extends Persona {
    experiencia: number = 0;
    constructor(nombre: string, edad: number, experiencia: number) {
        super(nombre, edad);
        this.experiencia = experiencia;
    }
}
let contrato = <HTMLElement><unknown>document.getElementById("contratar")?.addEventListener("click", contratar, false);
let coleccionPersonaMap: Map<string, Empleado> = new Map<string, Empleado>();
let miEmpleado: Empleado;
function contratar() {

    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let edadInput = Number((<HTMLInputElement>document.getElementById("edad")).value);
    let experiencia = Number((<HTMLInputElement>document.getElementById("experiencia")).value);
    let idEmpleado = (<HTMLInputElement>document.getElementById("idEmpleado")).value;

        miEmpleado = new Empleado(nombre, edadInput, experiencia);
    if (coleccionPersonaMap.has(idEmpleado)) {
        alert("Empleado ya contrado");
    } else {
        coleccionPersonaMap.set(idEmpleado, miEmpleado);
        sumaEdades += edadInput;
        edadMedia = sumaEdades / coleccionPersonaMap.size;
        alert(miEmpleado.nombre);
        expAcumulada += experiencia;
        let muestraIdEmpleado = `<p>el nombre es ${nombre} y la edad es ${edadInput} y la edad media es ${edadMedia} y su numero de empleado es ${idEmpleado} y mis empleados tienen una experiencia acumulada de ${expAcumulada}</p>`;
        (<HTMLElement>document.getElementById("resultadoExperiencia")).innerHTML = muestraIdEmpleado;
    }
}
let mostrarLosEmpleados = <HTMLElement><unknown>document.getElementById("mostrarLosEmpleados")?.addEventListener("click", mostrarEmpleados, false);
function mostrarEmpleados() {
    let listaEmpleadosHTML = '<ul>';
    coleccionPersonaMap.forEach((miEmpleado, idEmpleado) => {
        listaEmpleadosHTML += `<li>${idEmpleado}: de nombre ${miEmpleado.nombre}, Edad: ${miEmpleado.edad}, Experiencia: ${miEmpleado.experiencia}</li>`;
    });
    listaEmpleadosHTML += '</ul>';
    document.getElementById("listaEmpleados")!.innerHTML = listaEmpleadosHTML;
}
