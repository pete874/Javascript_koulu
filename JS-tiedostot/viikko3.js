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


function tehtava6() {
    var tulos = [];
    for (let i = 1; i <= 10; i++) {
      tulos.push(i);
    }
    var tulos2 = tulos.join(" ");
    document.getElementById('v6').innerHTML = tulos2
}

// Tehtävä 7

function tehtava7() {
    var tulos = 0;
    for (let i = 0; i <= 10; i++) {
      tulos += i;

    } document.getElementById('v7').innerHTML = tulos ;
}

// Tehtävä 8

function tehtava8() {
  var luku1 = document.getElementById('luku8').value;
  var luku2 = document.getElementById('luku9').value;
  var tulos = Math.pow(luku1, luku2)
  document.getElementById('v8').innerHTML = tulos
}

// Tehtävä 9

function tehtava9() {
  var taulukko = [];
  taulukko[0] = document.getElementById('luku10').value;
  taulukko[1] = document.getElementById('luku11').value;
  taulukko[2] = document.getElementById('luku12').value;
  taulukko[3] = document.getElementById('luku13').value;
  taulukko[4] = document.getElementById('luku14').value;

  var tulos1 = taulukko.sort();
  var tulos2 = tulos1.shift();
  var tulos3 = tulos1.pop();


  document.getElementById('v9').innerHTML = tulos2 + " on pienin ja " + tulos3 + " on suurin";
}

// Tehtävä 10

function tehtava10() {
  var sana = document.getElementById('luku15').value;
  var kirjaimet = ["a", "b", "c", "d", "e", "f", "g", "h" ,"i" ,"j" ,"k" , "l" , "m" , "n" , "o" , "p" , "q" , "r", "s" , "t" , "u", "v" , "x" , "y" , "z"]
  var array = Array.from(sana);
  var tulos = array.join(kirjaimet[Math.floor((Math.random()*kirjaimet.length))]);
  console.log(tulos);
  document.getElementById('v10').innerHTML = tulos;
}
