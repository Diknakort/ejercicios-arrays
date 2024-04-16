let misAstronautas: Set<string> = new Set<string>();
let Diccionario: Map<string, number> = new Map<string, number>();
let listaFallos = 0;
let nombreAstronautaInput = (<HTMLInputElement>document.getElementById("nombreAstronauta"))?.value;
let boton = <HTMLElement>document.getElementById("boton");
boton.addEventListener("click", mostrar, false);
//document.getElementById("boton")?.addEventListener("click", mostrar, false);
//document.getElementById("boton")?.addEventListener("click", ()=> alert("Adios"));
function mostrarDiccionario() {
    let texto = nombreAstronautaInput;
    if (Diccionario.has(texto)) {
        //let valor = Diccionario.get(texto) + 1;
        //Diccionario.set(texto, valor);
        /*        Diccionario.get(texto);*/
        //map.set(nombreAstronauta, (map.get(nombreAstronauta) + 1);
        alert("Nombre repetido");
        listaFallos++;
    } else {
        Diccionario.set(texto, 1);
        addEtiqueta(texto);
        //let nuevoLi = (<HTMLElement>document.createElement("li"));
        //nuevoLi.textContent = nombreAstronauta;
        //(<HTMLElement>document.getElementById("resultado")).appendChild(nuevoLi);
    //    misAstronautas.add(texto);
    }
    let porcentaje = ((listaFallos * 100) / (misAstronautas.size + listaFallos));
    let muestraRepeciciones = `<p> Duplicados son un ${porcentaje} % de los intentos</p>`;
    (<HTMLElement>document.getElementById("repeticiones")).innerHTML = muestraRepeciciones;
}
function mostrar() {
    let texto = nombreAstronautaInput;
    if (misAstronautas.has(texto)) {
        let misAstronautasFallo = new Map<string, number>();
        //map.set(nombreAstronauta, (map.get(nombreAstronauta) + 1);
        alert("Nombre repetido");
        listaFallos++;
    } else {
        addEtiqueta(texto);
        //let nuevoLi = (<HTMLElement>document.createElement("li"));
        //nuevoLi.textContent = nombreAstronauta;
        //(<HTMLElement>document.getElementById("resultado")).appendChild(nuevoLi);
        misAstronautas.add(texto);
    }
    let porcentaje = ((listaFallos * 100) / (misAstronautas.size + listaFallos));
    let muestraRepeciciones = `<p> Duplicados son un ${porcentaje} % de los intentos</p>`;
    (<HTMLElement>document.getElementById("repeticiones")).innerHTML = muestraRepeciciones;
}

function addEtiqueta(nombreAstronauta: string) {
    let elementoli = document.createElement("li");
    elementoli.textContent = nombreAstronauta;
    let lista = (<HTMLElement>document.getElementById("lista"));
    lista.appendChild(elementoli);
}
/*let nuevoAstronauta = document.getElementById("astronautaNombre");*/

//let astronautasJunticos = misAstronautas.join(", ");
//alert(`nombres de astronautas por comas :  ${astronautasJunticos}`);


//let repetido = document.getElementById("repeticiones");
//let lista = document.getElementById("lista");
//let resultado = document.getElementById("resultado");




