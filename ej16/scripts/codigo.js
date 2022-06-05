function getHora() {
  let dateWithouthSecond = new Date();
  dateWithouthSecond.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("reloj").innerText = dateWithouthSecond;
}

window.setInterval(function () {
  getHora();
});
