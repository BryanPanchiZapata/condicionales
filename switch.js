var numero = 1;

switch (numero) {
  case 1:
    console.log("Soy un uno!!!");
    break;
  case 10:
    console.log("Soy un diez!!");
    break;
  case 100:
    console.log("Soy un cien!!");
    break;
  default:
    console.log("No soy ninguno");
}

var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";

function juego(user, machine) {
  switch (true) {
    case user === piedra && machine === tijeras:
      console.log("Gano usuario con " + piedra);
      break;

    case user === papel && machine === piedra:
      console.log("Gano usuario con " + papel);
      break;

    case user === tijeras && machine === papel:
      console.log("Gano usuario con " + tijeras);
      break;

    case user === machine:
      console.log("empate técnico");
      break;

    default:
      console.log("Gano machine");
      break;
  }
}
