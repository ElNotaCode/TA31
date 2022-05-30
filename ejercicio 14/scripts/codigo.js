//declaramos las variables globales y las inicializamos en null
var x = null;
var operacion = null;
var y = null;

//Introducir numero
function introducirNumero(numero) {
  for (let i = 0; i < 10; i++) {
    if (numero == i) {
      //guardamos la pantalla
      let pantallaStr = getPantalla();
      //concatenamos pantalla y numero
      document.getElementById("pantalla").innerHTML = pantallaStr + "" + numero;
      break;
    }
  }
}

function coma() {
  //miramos si ya hay minimo un numero
  let pantallaStr = getPantalla();
  if (pantallaStr.length > 0) {
    //miramos si ya hay una coma
    for (let i = 1; i < pantallaStr.length; i++) {
      if (pantallaStr.charAt(i) == ".") {
        return alert("Ya hay una coma!");
      }
    }
    //si no la hay la ponemos
    document.getElementById("pantalla").innerHTML = pantallaStr + ".";
  }
}

function negativo() {
  //miramos si ya hay minimo un numero
  let pantallaStr = getPantalla();
  if (pantallaStr.length > 0) {
    if (pantallaStr.charAt(0) == "-") {
      document.getElementById("pantalla").innerHTML = pantallaStr.slice(1);
    } else {
      document.getElementById("pantalla").innerHTML = "-" + pantallaStr;
    }
  }
}

//realizar operacion
function realizarOperacion(operacionSelecionada) {
  //se guarda lo escrito en x
  x = parseFloat(getPantalla());
  //se guarda la operación seleccionada
  operacion = operacionSelecionada;
  //se resetea la pantalla para introducir el valor x
  borrarCE();
  if (operacion == "1/x") {
    let resultado = 1 / x;
    document.getElementById("pantalla").innerHTML = resultado;
  } else if (operacion == "Raiz") {
    let resultado = Math.sqrt(x);
    document.getElementById("pantalla").innerHTML = resultado;
  }
}

//calcular
function calcular() {
  //guardamos y
  y = parseFloat(getPantalla());
  //inicializamos la variable de bloque que va a indicar el resultado
  let resultado;

  switch (operacion) {
    case "+":
      //hacemos la operacion
      resultado = x + y;
      break;
    case "-":
      resultado = x - y;
      break;
    case "*":
      resultado = x * y;
      break;
    case "/":
      resultado = x / y;
      break;
    case "%":
      resultado = x % y;
      break;

    default:
      break;
  }

  document.getElementById("pantalla").innerHTML = resultado;
}

//borrar Retr
function borrarRetr() {
  let pantallaStr = getPantalla();
  //si hay algo escrito borramos lo ultimo
  if (pantallaStr.length > 0) {
    pantallaStr = pantallaStr.slice(0, -1);
    document.getElementById("pantalla").innerHTML = pantallaStr;
  }
}

//borrar todo el numero CE
function borrarCE() {
  document.getElementById("pantalla").innerHTML = "";
}

//borrar todo el calculo C
function borrarC() {
  document.getElementById("pantalla").innerHTML = "";
  x = null;
  operacion = null;
  y = null;
}

//he creado un getter de pantalla para no repetir tanto codigo
function getPantalla() {
  return document.getElementById("pantalla").textContent;
}
