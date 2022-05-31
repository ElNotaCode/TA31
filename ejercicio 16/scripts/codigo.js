var dateWithouthSecond = new Date();

function getHora() {
  dateWithouthSecond.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("reloj").innerText = dateWithouthSecond;
}

getHora();
