//Haaste 1

function haaste1() {
  var sana = document.getElementById('luku1').value;
  var tarkastus = /^([A-Z])/
  if (tarkastus.test(sana) == true) {
    document.getElementById('v1').innerHTML = "Ensimmäinen kirjain on iso";
  } else {document.getElementById('v1').innerHTML = "Ensimmäinen kirjain on pieni"}
}

// haaste2

function haaste2() {
  var sana = document.getElementById('luku2').value;
  var tulos = sana.trim();
  console.log(tulos)
  document.getElementById('v2').innerHTML = tulos;
}


// koodaushaasteita3

function haaste3() {
  var sana = document.getElementById('luku3').value;
  var tarkistus = /[a, e, y, u, i, o, ö, ä, å]/gi;
  var vokaalit = sana.match(tarkistus);
  var maara = vokaalit.length;

  document.getElementById('v3').innerHTML = "Vokaalien määrä on " + maara;
}
