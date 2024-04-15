let misAstronautas = new Set<string>();
let nombreAstronautaInput = <HTMLInputElement>document.getElementById("nombreAstronauta");
let boton = <HTMLInputElement>document.getElementById("boton");
boton.addEventListener("click", mostrar, false);
let listaFallos = 0;

function mostrar() {
    // Obtener el valor del input
    let nombreAstronauta = nombreAstronautaInput.value;
    // Verificar si el nombre ya está en el set
    if (misAstronautas.has(nombreAstronauta)) {
        alert("Nombre repetido");
        listaFallos++;
    } else {
        // Crear un nuevo elemento li
        //let nuevoLi = document.createElement("li");
        //// Asignar el valor del input como texto del li
        //nuevoLi.textContent = nombreAstronauta;
        //// Agregar el li al ul
        //let resultadoUl = <HTMLInputElement>document.getElementById("resultado");
        //resultadoUl.appendChild(nuevoLi);
        // Agregar el nombre al set
        misAstronautas.add(nombreAstronauta);
        document.writeln(misAstronautas.toString());
    }
    // Mostrar los nombres en consola
    for (let valor of misAstronautas) {
        console.log(valor);
    }
}


//let repetido = document.getElementById("repeticiones");
//let lista = document.getElementById("lista");
//let resultado = document.getElementById("resultado");





let nuevoAstronauta = document.getElementById("astronautaNombre");
