//Saludo
alert ("¡Bienvenido!")

//Menú Salado
function menuSalado(){
 let pedidoSalado = prompt ("¡Buena elección! ¿Quieres Ramen, Tonkatsu o Karaage?").toLocaleLowerCase();
    if (pedidoSalado === "ramen")
    alert ("¡Aqui tienes tu Ramen! Deberas abonar $2.000 ¡Gracias!");
    else if (pedidoSalado === "tonkatsu")
    alert ("¡Aqui tienes tu Tonkatsu! Deberas abonar $2.500 ¡Gracias!");
    else if (pedidoSalado === "karaage")
    alert ("¡Aqui tienes tu Karaage! Deberas abonar $1.800 ¡Gracias!");
}

//Menú Dulce
function menuDulce(){
 let pedidoDulce = prompt ("¡Buenas elección! ¿Quieres Dorayaki, Mochi o Taiyaki?").toLocaleLowerCase();
    if (pedidoDulce === "dorayaki"){
    alert ("¡Aqui tienes tu Dorayaki! Deberas abonar $450 ¡Gracias!");
    }
    else if (pedidoDulce === "mochi"){
    alert ("¡Aqui tienes tu Mochi! Deberas abonar $300 ¡Gracias!");
    }
    else if (pedidoDulce === "taiyaki"){
    alert ("¡Aqui tienes tu Taiyaki! Deberas abonar $800 ¡Gracias!");
    }
}

//Elección de Menú
function elecciónDulceSalado (){
    let eleccion = prompt ("¡Perfecto! ¿te gustaria elegir algo dulce o salado?").toLocaleLowerCase();
    if (eleccion === "salado")
    menuSalado ();
    else if (eleccion === "dulce")
    menuDulce ();
}

//Pregunta sobre apetito
function preguntaHambre (){
let preguntaHambre = prompt ("Parece que tienes mucha hambre ¿verdad? puedes responder con un si o con un no, pero si dices que no estare triste :(").toLocaleLowerCase();
 if (preguntaHambre === "si")
 elecciónDulceSalado ();
    else if ( preguntaHambre === "no"){
 alert ("¡Que lastima! nos vemos pronto...");
}
}

preguntaHambre ()