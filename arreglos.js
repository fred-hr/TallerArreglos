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
        contenido += "<td><button class='btn-mover'>➜</button></td>";
        contenido += "</tr>";
    }

    document.getElementById("tablaIzquierda").innerHTML = contenido;
}    

function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierdo();
}