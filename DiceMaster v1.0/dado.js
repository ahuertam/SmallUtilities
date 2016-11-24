// Javascript para app de DiceMaster ahuertam@yahoo.es 
function rollDice(cantidadDados, caras) {
  out = '';
  for (i = 0; i < cantidadDados; i++) {
    out += (Math.floor(Math.random() * caras)+1) + ' | '
  }
  return out;
}

function boton() {
  cantidadDados = document.getElementById("numDados").value
  caras = document.getElementById("caras").value
  var lanzaDados = rollDice(cantidadDados,caras);
 document.getElementById("resultado").innerHTML = lanzaDados;
 //alert("Numero de caras y dados"+caras + cantidadDados);
}
//Meter a futuro:
// función suma que muestre la suma de todas las tiradas
//función media
// función tirada mas baja
// función la tirada mas alta
// Función tirada mixta de dados 
// Función tirada enfrentada (compara 2 tiradas y elije la mas alta)