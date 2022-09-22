
// Tehtävä 1:

function tehtava1() {
  var luku1 = document.getElementById('luku1').value;
  var luku2 = document.getElementById('luku2').value;
  var luku3 = document.getElementById('luku3').value;
  document.getElementById('v1').innerHTML = "annoit luvut: " + luku1 + " " + luku2 + " " + luku3;
  if (luku1 < luku2 && luku1 < luku3) {
    if (luku2 < luku3) {
      document.getElementById('v2').innerHTML = "luvut oikeassa järjestysessä " + luku1 + " " + luku2 + " " + luku3;
    } else {document.getElementById('v2').innerHTML = "luvut oikeassa järjestysessä " + luku1 + " " + luku3 + " " + luku2}
  } else if (luku2 < luku1 && luku2 < luku3) {
    if (luku1 < luku3) {document.getElementById('v2').innerHTML = "luvut oikeassa järjestysessä " + luku2 + " " + luku1 + " " + luku3;
  } else {document.getElementById('v2').innerHTML = "luvut oikeassa järjestysessä " + luku2 + " " + luku3 + " " + luku1}
  }
  else if (luku3 < luku1 && luku3 < luku2) {
    if(luku1 < luku2) {
      document.getElementById('v2').innerHTML = "luvut oikeassa järjestysessä " + luku3 + " " + luku1 + " " + luku2;
    } else {
      document.getElementById('v2').innerHTML = "luvut oikeassa järjestysessä " + luku3 + " " + luku2 + " " + luku1;
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
