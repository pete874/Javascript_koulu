// koodaushaasteita2 / 1. haaste
function haaste1() {
  var array = [];

  for (let i = 100; i <= 1000; i++) {
    let numeromaara = i.toString().length;
    let numero = 0;
    let vali = i;

    while (vali > 0) {
      let jaljella = vali % 10;
      numero += jaljella ** numeromaara;
      vali = parseInt(vali / 10);
    }

    if (numero == i) {
      array.push(i);
    }
 }
 document.getElementById('v1').innerHTML = array;
 console.log(array);
}





// Koodaushaasteita2 / 2. haaste

function haaste2() {
  document.getElementById('v2').innerHTML = "*<br>**<br>***<br>****<br>*****";
}

//koodaushaasteita2 / 3. haaste
//tein kaksi erilaista tapaa

function haaste3() {
var string = "ohjelmointi on hauskaa";
var string2 = document.getElementById('luku3').value;

/* const asearch = "a";
const akorvataan = "4";
const esearch = "e";
const ekorvataan = "3";
const osearch = "o";
const okorvataan = "0";
const isearch = "i";
const ikorvataan = "1";
const ssearch = "s";
const skorvataan = "5";
const vastaus = string.split(asearch).join(akorvataan);
const vastaus1 = vastaus.split(esearch).join(ekorvataan);
const vastaus2 = vastaus1.split(osearch).join(okorvataan);
const vastaus3 = vastaus2.split(isearch).join(ikorvataan);
const vastaus4 = vastaus3.split(ssearch).join(skorvataan);

const vastaus00 = string2.split(asearch).join(akorvataan);
const vastaus11 = vastaus00.split(esearch).join(ekorvataan);
const vastaus22 = vastaus11.split(osearch).join(okorvataan);
const vastaus33 = vastaus22.split(isearch).join(ikorvataan);
const vastaus44 = vastaus33.split(ssearch).join(skorvataan); */

const a = "a";
const e = "e";
const o = "o";
const i = "i";
const s = "s";
var vastaus6 = string.replaceAll(a, "4").replaceAll(e, "3").replaceAll(o, "0").replaceAll(i, "1").replaceAll(s, "5");
var vastaus7 = string2.replaceAll(a, "4").replaceAll(e, "3").replaceAll(o, "0").replaceAll(i, "1").replaceAll(s, "5");

console.log(vastaus6)
document.getElementById('v3').innerHTML = vastaus6;
document.getElementById('v33').innerHTML = vastaus7;
}

//koodaushaasteita2 / 4. haaste

function haaste4() {
  var numerot = "..........".length;
  var array = [];
  for(let i = ".".length; i <= (numerot*numerot); i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      array.push(" hik-up");
    } else if (i % 5 == 0) {
      array.push(" up");
    } else if (i % 3 == 0) {
      array.push(" hik");
    } else {array.push(i);}

  }
  document.getElementById('v4').innerHTML = array;
  console.log(array);

}
