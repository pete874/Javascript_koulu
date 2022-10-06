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
  taulukko[0] = parseInt(document.getElementById('luku10').value);
  taulukko[1] = parseInt(document.getElementById('luku11').value);
  taulukko[2] = parseInt(document.getElementById('luku12').value);
  taulukko[3] = parseInt(document.getElementById('luku13').value);
  taulukko[4] = parseInt(document.getElementById('luku14').value);

  taulukko.sort((a, b) => {if (a < b) {return -1} if (a > b) {return 1} return 0});
  var tulos2 = taulukko.shift();
  var tulos3 = taulukko.pop();


  document.getElementById('v9').innerHTML = tulos2 + " on pienin ja " + tulos3 + " on suurin";
}

// Tehtävä 10

function tehtava10() {
  var sana = document.getElementById('luku15').value;
  var kirjaimet = ["a", "b", "c", "d", "e", "f", "g", "h" ,"i" ,"j" ,"k" , "l" , "m" , "n" , "o" , "p" , "q" , "r", "s" , "t" , "u", "v" , "x" , "y" , "z"]
  var vali = [];
  var array = Array.from(sana);

  for (let i = 0; i < sana.length; i++) {
    vali.push(array[i])
    vali.push(kirjaimet[Math.floor((Math.random()*kirjaimet.length))])

  }

  var tulos = vali.join("")
  console.log(tulos);
  document.getElementById('v10').innerHTML = tulos;
}


// Tehtävä 11

function tehtava11() {
  var pienempi = parseInt(document.getElementById('luku16').value);
  var suurempi = parseInt(document.getElementById('luku17').value);
  var vali1 = [];
  var vali2 = [];
  var tulos1 = 0;
  var tulos2 = 0

  for (let i = pienempi; i <= suurempi; i++) {
    if (i % 2 == 0) {
      vali1.push(i);
      tulos1 += i;
    } else {
      vali2.push(i);
      tulos2 += i;
    }
  }
  console.log(vali1)
  console.log(vali2)
  document.getElementById('v11').innerHTML = "Parilliset numerot ovat " + vali1 + " ja niiden summa on " + tulos1;
  document.getElementById('v12').innerHTML = "Parittomat numerot ovat " + vali2 + " ja niiden summa on " + tulos2;
}

// Viikon 3 toiset tehtävät alkaa tästä:

//Tehtävä 1

function tehtava12() {
  var sana = document.getElementById('luku18').value;
  var pisteet = 0;
  for (let i = 0; i < sana.length; i++) {
    switch (sana[i]) {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "n":
      case "N":
      case "s":
      case "S":
      case "t":
      case "T":
      pisteet++
      break;

      case "o":
      case "O":
      case "ä":
      case "Ä":
      case "k":
      case "K":
      case "l":
      case "L":
      pisteet+=2
      break;

      case "u":
      case "U":
      case "m":
      case "M":
      pisteet+=3
      break;

      case "y":
      case "Y":
      case "h":
      case "H":
      case "j":
      case "J":
      case "p":
      case "P":
      case "r":
      case "R":
      case "v":
      case "V":
      pisteet+=4
      break;

      case "ö":
      case "Ö":
      case "d":
      case "D":
      pisteet+=7
      break;

      case "b":
      case "B":
      case "f":
      case "F":
      case "g":
      case "G":
      pisteet+=8
      break;

      case "c":
      case "C":
      pisteet+=10
      break;

      default:
      pisteet+=12
      }
  }
  document.getElementById('v13').innerHTML = "Sanasta " + sana + " Saa " + pisteet + " pistettä."
}

// Tehtävä 13

function tehtava13() {
  var numerot = [];
  while (numerot.length < 7) {
    var tarkistus = Math.floor(Math.random() * 40 + 1);
    if (numerot.indexOf(tarkistus) == -1) {
    numerot.push(tarkistus)
  }
  }
  numerot.sort((a, b) => {if (a < b) {return -1} if (a > b) {return 1} return 0});
  document.getElementById('v14').innerHTML = numerot;
}

// Tehtävä 14

function tehtava14() {
  var sisalto = [["A", "B", "C", "D"], ["E", "F", "G", "H"], ["I", "J", "K" , "L"], ["M", "N", "O", "P"], ["Q", "R", "S", "T"]];
  var table = '<table border=10>';
  for (let i = 0; i < sisalto.length; i++) {
    table += "<tr>"
    for (let j = 0; j < sisalto[i].length; j++) {
      table += "<td>" + sisalto[i][j] + "</td>";
    }
    table += "</tr>"
  } table += "</table>"
  document.getElementById('v15').innerHTML = table;
}

// Tehtävä 15

function tehtava15() {
  var korttipakka = [];
  var ikonit = ["♡", "♤", "♢", "♣"]
  var numerot = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  var luku = 0;
  for (let i = 0; i < ikonit.length; i++) {
    for (let j = 0; j < numerot.length; j++) {
      if(i == ikonit.length - 1 && j == numerot.length - 1) {
        korttipakka[luku] = ikonit[i] + numerot[j];
      } else {
        korttipakka[luku] = ikonit[i] + numerot[j];
        luku++;
      }
    }
  }

  var tulos = [];
  for (let k = 0; k < 5; k++) {
    var vali = korttipakka[Math.floor(Math.random() * 52)]
    tulos[k] = vali;
  }

  document.getElementById('v16').innerHTML = tulos;
}
