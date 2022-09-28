// koodaushaasteita2 / 1. haaste






// Koodaushaasteita2 / 2. haaste

function haaste2() {
  document.getElementById('v2').innerHTML = "*<br>**<br>***<br>****<br>*****";
}

//koodaushaasteita2 / 3. haaste
function haaste3() {
var string = "ohjelmointi on hauskaa";
var string2 = document.getElementById('luku3').value;
const asearch = "a";
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
const vastaus44 = vastaus33.split(ssearch).join(skorvataan);

console.log(vastaus4)
document.getElementById('v3').innerHTML = vastaus4;
document.getElementById('v33').innerHTML = vastaus44;
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
