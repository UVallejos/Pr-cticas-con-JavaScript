var Vec = new Array(); //Creamos el objeto Array Vec

function init(){
    console.log("Aplicación iniciada ....");
}

/*Funcion que limpia la información, lo que hace es obtener el 
elemento a partir del ID que ya previamente hemos definido en
el documento HTML*/
function limpiar(){
    var nom = document.getElementById("nombre");
    nom.value = ""

    var ap1 = document.getElementById("ap1");
    ap1.value = ""

    var ap2 = document.getElementById("ap2");
    ap2.value = ""

    var dni = document.getElementById("dni");
    dni.value = ""
}

/* Creamos una funcion que recoge los datos seleccionados en la tabla por el ID
correspondiente, luego creamos un nuevo objeto persona con los datos obtenidos */
function agregar(){
    var nom = document.getElementById("nombre");
    var ap1 = document.getElementById("ap1");
    var ap2 = document.getElementById("ap2");
    var dni = document.getElementById("dni");


    var per = new persona(nom.value, 
        ap1.value, 
        ap2.value, 
        dni.value); 
    
    /*Agregamos el objeto persona a la Array o lista que definimos al inicio
    VEC */
    Vec.push(per); //Con push se agregan elementos al final de una array
    verTabla();
}

function verTabla(){
    var tabla = document.getElementById("cuerpoTabla"); //Seleccionamos la tabla donde vamos a mostrar la informacion
    if (tabla) { //Si la tabla existe ingresa aquí


        while(tabla.rows.length > 0){ //Esto limpia los datos para volver almacenar nuevos datos, no percisten, se pierden
            tabla.deleteRow(0); //Si la tabla existe, va eliminando el elemento 0 de la tabla, hasta que tabla.rows.length sea false 
        }

        /* Lo que decimo es que se ejecute el ciclo For, mientras la variable
        i sea menor que la longitud de la lista o array VEC que hemos inicializado antes,
        si no tiene datos la lista, no inicia */
        for (var i = 0; i < Vec.length; i++) {

            // Inserta una fila en la tabla, en el índice 0
            var fila = tabla.insertRow();

            //Hacemos referencia a la fila que acabamos de inicializar con el bucle
            // y luego incertamos la miera celda, que corresponde al nombre
            var celda = fila.insertCell(); 
            celda.innerText = Vec[i].nom; 

            //Hacemos lo mismo con los demas celdas 
            var celda = fila.insertCell(); 
            celda.innerText = Vec[i].ap1;

            var celda = fila.insertCell(); 
            celda.innerText = Vec[i].ap2;

            var celda = fila.insertCell(); 
            //Vec[i].dni con esto le indicamos el dato que queremos ingresar
            celda.innerText = Vec[i].dni;


            
        }
    } 
    limpiar();  
}

/*Hacemos un construcctor de un objeto persona*/
function persona(nom, ap1, ap2, dni) {
    this.nom = nom;
    this.ap1 = ap1;
    this.ap2 = ap2;
    this.dni = dni;
}





