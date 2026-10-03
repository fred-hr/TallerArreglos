let arregloIzquierdo =[];
let arregloDerecho =[];

function agregarEdad() {
    let edad = recuperarInt("edad");
    arregloIzquierdo.push(edad);

    pintarArregloIzquierdo();
}

function pintarArregloIzquierdo() {
    let contenido = "";
    for (let i = 0; i < arregloIzquierdo.length; i++) {
        contenido += "<tr>";
        contenido += "<td>" + arregloIzquierdo[i] + "</td>";
        contenido += "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button></td>";
        contenido += "<td><button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>➜</button></td>";
        contenido += "</tr>";
    }

    document.getElementById("tablaIzquierda").innerHTML = contenido;
}    

function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierdo();
}

function pintarArregloDerecho() {
    let contenido = "";

    for (let i = 0; i < arregloDerecho.length; i++) {
        contenido += "<tr>";
        contenido += "<td><button class='btn-mover' onclick='moverHaciaIzquierda(" + i + ")'>⬅</button></td>";
        contenido += "<td>" + arregloDerecho[i] + "</td>";
        contenido += "<td><button class='btn-eliminar' onclick='eliminarDerecho(" + i + ")'>Eliminar</button></td>";
        contenido += "</tr>";
    }

    document.getElementById("tablaDerecha").innerHTML = contenido;
}

function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecho();
}

function moverHaciaDerecha(indice) {
    let valor = arregloIzquierdo[indice];
    arregloDerecho.push(valor);
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierdo();
    pintarArregloDerecho();
}

function moverHaciaIzquierda(indice) {
    let valor = arregloDerecho[indice];
    arregloIzquierdo.push(valor);
    arregloDerecho.splice(indice, 1);
    pintarArregloIzquierdo();
    pintarArregloDerecho();
}