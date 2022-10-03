// Viikko3
// Tehtävä 1

function tehtava1() {
  var luku1 = parseInt(document.getElementById('luku1').value)
  var array = [];

  for (let i = 1; i < luku1; i++) {
    if (i % 2 == 0) {
      array.push(i);

    }
  }
  console.log(array)
  document.getElementById('v1').innerHTML = array;
}
 // Tehtövö 2

 function tehtava2() {
   var sana = document.getElementById('luku2').value;
   var array = Array.from(sana);
   var tulos = array.join("Ö");
   console.log(tulos);
   document.getElementById('v2').innerHTML = tulos;
 }

 // Tehtävä 3

 function tehtava3() {
   var sana = document.getElementById('luku3').value;
   if (sana.indexOf("ö") >= 0 || sana.indexOf("Ö") >= 0) {
     document.getElementById('v3').innerHTML = "on";
   } else {document.getElementById('v3').innerHTML = "ei ole";}
 }

//Tehtävä 4

function tehtava4() {
  var numero = document.getElementById('luku4').value;
  var tulos = 1;
  if (numero < 0) {
    document.getElementById('v4').innerHTML = "0"
  } else if (numero == 1) {
    document.getElementById('v4').innerHTML = "1"
  } else {
    for (let i = 1; i <= numero; i++) {
      tulos = tulos * i;
    } document.getElementById('v4').innerHTML = tulos;
  }
}

// Tehtävä 5

function tehtava5() {
  var numerot = "..........".length;
  var array = [];
  for(let i = ".".length; i <= (numerot*numerot); i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      array.push(" hipheijaa");
    } else if (i % 5 == 0) {
      array.push(" heijaa");
    } else if (i % 3 == 0) {
      array.push(" hip");
    } else {array.push(i);}

  }
  document.getElementById('v5').innerHTML = array;
  console.log(array);
}

// Tehtävä 6
