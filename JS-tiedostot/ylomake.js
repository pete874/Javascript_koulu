function vastaus() {
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;

  if (etunimi == "" || sukunimi == "") {
    alert("et syöttänyt kaikkia tietoja")
  } else {
    document.getElementById('v1').innerHTML = "Hei " + etunimi + " " + sukunimi;
  }
}
