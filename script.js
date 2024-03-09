let nombre = prompt("Ingrese su nombre aqui");

    let magic = 12000;
    let skylar = 17000;
    let ultraviolet = 20000;
    let estellar = 17500;

alert("Bienvenida " + nombre);

let pedir = prompt("¿Ya sabe cual va a ser su pedido? Ingrese SI o NO");

if ((pedir === "no") || (pedir === "No") || (pedir === "NO")){
    alert ("Esperemos que regrese pronto. No se pierda de nuestros glosses!");
} else {
    let orden = prompt ("Ingrese su pedido. Cual va a ser el gloss de su eleccion magic, skylar, ultraviolet, estellar.");

switch (orden){
    case "magic":
        alert ("Gracias por su pedido. Su total es de: $ " + magic );
        agradecer ()
        break; 
    case "skylar":
        alert ("Gracias por su pedido. Su total es de: $ " + skylar );
        agradecer ()
        break; 
    case "ultraviolet":
        alert ("Gracias por su pedido. Su total es de: $ " + ultraviolet );
        agradecer ()
        break;
    case "estellar":
        alert ("Gracias por su pedido. Su total es de: $ " + estellar );
        agradecer ()
        break; 
        
}
}

function agradecer (){
    alert (nombre + ", ya hemos procesado su pedido. Se encuentra en preparacion, pronto sera contactado. Gracias por elegirnos!!!")
} 