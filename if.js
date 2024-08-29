var edad = 18;

if (edad === 18) {
  console.log("Puedes votar, Sera tu primera votacion :D");
} else if (edad > 18) {
  console.log("Puedes votar nuevamente");
} else {
  console.log(" Eres menor de edad, aún no puedes votar :(");
}

var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";

function resultado(user, pc) {
  if (user != pc) {
    if (user === piedra && pc === tijeras) {
      console.log("Usuario gano con " + piedra);
    } else if (user === papel && pc === piedra) {
      console.log("Usuario gano con " + papel);
    } else if (user === tijeras && pc === papel) {
      console.log("Usuario gano con " + tijeras);
    } else {
      console.log("Gano la CPU");
    }
  } else if (user === pc) {
    console.log("Empate técnico");
  }
}
