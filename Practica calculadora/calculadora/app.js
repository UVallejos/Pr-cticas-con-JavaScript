window.addEventListener("load", ()=> {  /* Escuchamos antes de que se cargue el documento */
    const display = document.querySelector(".calculator-display"); //Nos busca el primer elemento que encuentre y lo guarda
    const keypadButtons = document.getElementsByClassName("keypads-button"); //Nos guarda un HTML Coleccion

    //Convertimos el HTML Coleccion almacenado en "keypadButtons" en Array y guardamos en una constante
    const keypadButtonsArray = Array.from(keypadButtons); 

    //Iteramos sobre el Array
    keypadButtonsArray.forEach( (button) => {
        
        /*Indicamos que al hacer click en el botton que es un elemento de la Array keypadButtonsArray, nos devuelva el contenido del HTML
         y no toda la etiqueta completa*/
        button.addEventListener("click", ()=> {
            calculadora(button, display);
        })

    })

});

/* Switch para decidir la funcion a utilizar cuando ocurra un click en alguno de los botones de la calculadora */
function calculadora (button, display){
    switch (button.innerHTML) {
        case "C":
            borrar(display);
            break;
    
        case "=":
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break
    }
}

/* La funcion eval toma el string en el display, lo resuelve, lo guarda dentro de la misma variable para mostrar el resultado
en la pantalla*/

function calcular (display){
    display.innerHTML = eval(display.innerHTML) 
}


/* Funcion que borra el 0 inicial si existe y agregar al innerHTML del siaply el boton que acabamos de clicar*/
function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = "";

    }
    //Agrega a pantalla los números y simbolos que clicamos con losbotones, luego la función calculadora se encarga de resolverlo
    display.innerHTML += button.innerHTML;
    //display.innerHTML = display.innerHTML + button.innerHTML;
}

//Le indica al display que debe quedar en 0 al momento de llamar la funcion para limpiar la pantalla
function borrar(display){
    display.innerHTML = 0;
}