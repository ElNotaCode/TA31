//Creamos la variable dado, que es un array con el minimo y el máximo + 1 ya que está excluido en el random.
//Esto es por si queremos ir añadiendo mas tipos de dados (d8, d10, d20...) y queremos reutilizar la función... y si, soy Dungeon Master en mi partida de D&D jajaja.
var d6 = [1, 7];
var arrayResultados = new Array(36000);
//repetir 36000 veces
for (let i = 0; i < 36000; i++) {
  //tirar dos dados
  let dado1 = tirarDados(d6);
  let dado2 = tirarDados(d6);
  //sumar y guardar
  arrayResultados[i] = dado1 + dado2;
  console.log(arrayResultados);
}

//funcion tirar dado
function tirarDados(tipoDado) {
  let min = tipoDado[0];
  let max = tipoDado[1];
  return Math.floor(Math.random() * (max - min)) + min;
}
