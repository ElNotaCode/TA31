let fecha = prompt("Fecha (dd/mm/yyyy):");
comprobarFecha(fecha);

function comprobarFecha(fechaStr) {
  //https://regex101.com/r/GT3oDB/1
  let re = new RegExp("^([0-2][0-9]|3[0-1])(/)(0[1-9]|1[0-2])\2(d{4})$");
  console.log(re.test(fechaStr));
}
