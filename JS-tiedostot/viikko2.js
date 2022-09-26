
// Tehtävä 1:

function tehtava1() {
  var luku1 = document.getElementById('luku1').value;
  var luku2 = document.getElementById('luku2').value;
  var luku3 = document.getElementById('luku3').value;
  document.getElementById('v1').innerHTML = "annoit luvut: " + luku1 + " " + luku2 + " " + luku3;
  if (luku1 < luku2 && luku1 < luku3) {
    if (luku2 < luku3) {
      document.getElementById('v2').innerHTML = "luvut oikeassa järjestyksessä " + luku1 + " " + luku2 + " " + luku3;
    } else {document.getElementById('v2').innerHTML = "luvut oikeassa järjestyksessä " + luku1 + " " + luku3 + " " + luku2}
  } else if (luku2 < luku1 && luku2 < luku3) {
    if (luku1 < luku3) {document.getElementById('v2').innerHTML = "luvut oikeassa järjestyksessä " + luku2 + " " + luku1 + " " + luku3;
  } else {document.getElementById('v2').innerHTML = "luvut oikeassa järjestyksessä " + luku2 + " " + luku3 + " " + luku1}
  }
  else if (luku3 < luku1 && luku3 < luku2) {
    if(luku1 < luku2) {
      document.getElementById('v2').innerHTML = "luvut oikeassa järjestyksessä " + luku3 + " " + luku1 + " " + luku2;
    } else {
      document.getElementById('v2').innerHTML = "luvut oikeassa järjestyksessä " + luku3 + " " + luku2 + " " + luku1;
    }
  }
}


// Tehtävä 2:

function tehtava2() {
  var luku1 = document.getElementById('t2luku1').value;
  var luku2 = document.getElementById('t2luku2').value;
  var luku3 = document.getElementById('t2luku3').value;
  var luku4 = document.getElementById('t2luku4').value;
  var luku5 = document.getElementById('t2luku5').value;
  var vastaus

  if (luku1 < luku2 && luku3 < luku2 && luku4 < luku2 && luku5 < luku2) {
    document.getElementById('v3').innerHTML = "Luku " + luku2 + " On suurin"
  } else if (luku1 < luku3 && luku4 < luku3 && luku5 < luku3) {
    document.getElementById('v3').innerHTML = "Luku " + luku3 + " On suurin"
  } else if (luku1 < luku4 && luku5 < luku4) {
    document.getElementById('v3').innerHTML = "Luku " + luku4 + " On suurin"
  } else if (luku1 < luku5) {
    document.getElementById('v3').innerHTML = "Luku " + luku5 + " On suurin"
  } else {document.getElementById('v3').innerHTML = "Luku " + luku1 + " On suurin"}
}

// Tehtävä 3:

function tehtava3() {
  var luku1 = document.getElementById('t3luku1').value

  if (luku1%2 == 0) {
    document.getElementById('v4').innerHTML = "Luku on parillinen"
  } else {document.getElementById('v4').innerHTML = "Luku on pariton"}
}

// Tehtävä 4

function tehtava4() {
  var luku1 = document.getElementById('t4luku1').value
  if (luku1 < 16) {
    document.getElementById('v5').innerHTML = "Saat ajaa polkupyörää"
  } else if (luku1 >= 16 && luku1 < 18) {
    document.getElementById('v5').innerHTML = "Saat ajaa polkupyörää ja mopoa"
  } else {document.getElementById('v5').innerHTML = "Saat ajaa polkupyörää, mopoa ja autoa"}
}

// Tehtävä 5

function tehtava5() {
  var luku1 = document.getElementById('t5luku1').value;
  if (luku1 == "englanti") {
    document.getElementById('v6').innerHTML = "Hello World";
  } else if (luku1 == "ruotsi") {
    document.getElementById('v6').innerHTML = "Hej världen";
  } else {document.getElementById('v6').innerHTML = "Hola mundo"

  }
}

// Tehtävä 6:

function tehtava6() {
  var luku1 = document.getElementById('t6luku1').value;
  if (luku1 < 0) {
    document.getElementById('v7').innerHTML = "Luku on negatiivinen"
  } else if (luku1 > 0){
    document.getElementById('v7').innerHTML = "Luku on positiivinen"
  } else {document.getElementById('v7').innerHTML = "Luku on nolla"}
}

// Tehtävä 7:

function tehtava7() {
  let luku1 = document.getElementById('t7luku1').value;
  switch (luku1){
    case "1":
    document.getElementById('v8').innerHTML = "Maanantai";
    break;
    case "2":
    document.getElementById('v8').innerHTML = "Tiistai";
    break;
    case "3":
    document.getElementById('v8').innerHTML = "Keskiviikko";
    break;
    case "4":
    document.getElementById('v8').innerHTML = "Torstai";
    break;
    case "5":
    document.getElementById('v8').innerHTML = "Perjantai";
    break;
    case "6":
    document.getElementById('v8').innerHTML = "Lauantai";
    break;
    case "7":
    document.getElementById('v8').innerHTML = "Sunnuntai";
    break;
    default:
    document.getElementById('v8').innerHTML = "Anna numero 1 ja 7 välillä";
    break;
  }
}


// Tehtävä 8:

function tehtava8() {
  var luku1 = document.getElementById('t8luku1').value;
  if (luku1%4 == 0 && luku1%100 != 0) {
    document.getElementById('v9').innerHTML = "Vuosi on karkausvuosi";
  } else if (luku1%400 == 0) {
    document.getElementById('v9').innerHTML = "Vuosi on karkausvuosi";
  } else {document.getElementById('v9').innerHTML = "Vuosi ei ole karkausvuosi";}
}

// Tehtävä 9:

function tehtava9() {
  var luku1 = parseInt(document.getElementById('t9luku1').value);
  var luku2 = parseInt(document.getElementById('t9luku2').value);
  var luku3 = parseInt(document.getElementById('t9luku3').value);
  var luku4 = parseInt(document.getElementById('t9luku4').value);
  var luku5 = parseInt(document.getElementById('t9luku5').value);
  var summa = luku1 + luku2 + luku3 + luku4 + luku5;
  var keskiarvo = summa / 5;
  document.getElementById('v10').innerHTML = "Summa on " + summa + " Ja keskiarvo on " + keskiarvo;
}

// Tehtävä 10:

function tehtava10() {
  var luku = document.getElementById('t10luku1').value;
  var lause
  lause = luku + " x 1 = " + luku * 1 + "<br>"
  lause += luku + " x 2 = " + luku * 2 + "<br>"
  lause += luku + " x 3 = " + luku * 3 + "<br>"
  lause += luku + " x 4 = " + luku * 4 + "<br>"
  lause += luku + " x 5 = " + luku * 5 + "<br>"
  lause += luku + " x 6 = " + luku * 6 + "<br>"
  lause += luku + " x 7 = " + luku * 7 + "<br>"
  lause += luku + " x 8 = " + luku * 8 + "<br>"
  lause += luku + " x 9 = " + luku * 9 + "<br>"
  lause += luku + " x 10 = " + luku * 10;
  document.getElementById('v11').innerHTML = lause;

}
