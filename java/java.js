//Saludo
const saludo = alert ("¡Bienvenido!")

//Menú Salado
function menuSalado(){
 let pedidoSalado = prompt ("¡Buena elección! ¿Quieres Ramen, Tonkatsu o Karaage?").toLocaleLowerCase();
    if (pedidoSalado === "ramen")
    alert ("¡Aquí tienes tu Ramen! Deberás abonar $2.000 ¡Gracias!");
    else if (pedidoSalado === "tonkatsu")
    alert ("¡Aquí tienes tu Tonkatsu! Deberás abonar $2.500 ¡Gracias!");
    else if (pedidoSalado === "karaage")
    alert ("¡Aquí tienes tu Karaage! Deberás abonar $1.800 ¡Gracias!");
}

//Menú Dulce
function menuDulce(){
 let pedidoDulce = prompt ("¡Buena elección! ¿Quieres Dorayaki, Mochi o Taiyaki?").toLocaleLowerCase();
    if (pedidoDulce === "dorayaki"){
    alert ("¡Aquí tienes tu Dorayaki! Deberás abonar $450 ¡Gracias!");
    }
    else if (pedidoDulce === "mochi"){
    alert ("¡Aquí tienes tu Mochi! Deberás abonar $300 ¡Gracias!");
    }
    else if (pedidoDulce === "taiyaki"){
    alert ("¡Aquí tienes tu Taiyaki! Deberás abonar $800 ¡Gracias!");
    }
}

//Elección de Menú
function elecciónDulceSalado (){
    let eleccion = prompt ("¡Perfecto! ¿te gustaría elegir algo dulce o salado?").toLocaleLowerCase();
    if (eleccion === "salado")
    menuSalado ();
    else if (eleccion === "dulce")
    menuDulce ();
}

//Pregunta sobre apetito
function preguntaHambre (){
let preguntaHambre = prompt ("Parece que tienes mucha hambre ¿verdad? puedes responder con un si o con un no, pero si dices que no estaré muy triste :(").toLocaleLowerCase();
 if (preguntaHambre === "si")
 elecciónDulceSalado ();
    else if ( preguntaHambre === "no"){
 alert ("¡Que lastima! nos vemos pronto...");
}
}

preguntaHambre ()