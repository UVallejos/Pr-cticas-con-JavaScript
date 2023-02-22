var estadoLicuadora = "apagada";

var licuadora = document.getElementById("blender");

var sonidoBoton = document.getElementById("blender-button-sound");

var sonidoLicuadora = document.getElementById("blender-sound");

//Controlamos el estado de licuadora luego de clicar al div asociado "licuadora"
function controlarLicuadora(){

    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerSonido();
        //Agregamos "active" a la clase con ID "blender" del div licuadora
        //De esta forma activamos el gif agregado por css a la cass "blender activate"
        licuadora.classList.add("active");
        console.log("Me prendiste")

    }else{
        estadoLicuadora = "apagada";
        hacerSonido();
        licuadora.classList.remove("active")
        console.log("Me apagaste")
    }
}

//Funcion para gestionar el sonido de los botones cuando queremos 
//Encender o apagar
function hacerSonido(){
    if ( sonidoLicuadora.paused ){
        sonidoBoton.play();
        sonidoLicuadora.play();
    }else{
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }

}
