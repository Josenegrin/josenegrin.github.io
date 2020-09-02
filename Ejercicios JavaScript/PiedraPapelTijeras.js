 /* Funcion en la que se selecciona un numero aleatorio del 0 al 2 */
function aleatorio() {
   var numeroAleatorio = Math.floor(Math.random() * (3 - 0)) + 0;
   return numeroAleatorio;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var jugador;
var ordenador = aleatorio(0,3);
/* usamos un prompt para pedirle la opcion al usuario */
jugador = prompt("Selecciona una opcion: \nPiedra = 0 \nPapel = 1 \nTijera = 2");


/* hacemos un alert para mostrar en pantalla lo que eligio el jugador y lo que eligio la computadora */
alert("Elegiste " + opciones[jugador]);
alert("Terminator eligio " + opciones[ordenador]);

/* Validamos que pasa en cada opción */
 if (jugador == ordenador) {
       alert("Ha sido un empate!");
   } else if (jugador == 0 && ordenador == 2) {
       alert("La piedra ha aplastado a la tijera. !Haz ganado!");
   } else if (jugador == 1 && ordenador == 0) {
       alert("El papel ha envuelto a la piedra. !Haz ganado!");
   } else if (jugador == 2 && ordenador == 1) {
       alert("Haz hecho picadillo al papel. !Haz ganado!");
   } else if (jugador == 2 && ordenador == 0) {
      alert("La piedra ha aplastado a la tijera. !Haz Perdido!");
   } else if (jugador == 0 && ordenador == 1) {
       alert("El papel ha envuelto a la piedra. !Haz Perdido!");
   } else if (jugador == 1 && ordenador == 2) {
       alert("Han hecho picadillo al papel. !Haz Perdido!");
   } else {
       alert("Introduce un valor válido");
}


