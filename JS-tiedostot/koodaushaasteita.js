//Koodaushaasteita1 / 1. haaste

function haaste1() {
  var taulukko = [];
  taulukko[0] = document.getElementById('luku1').value;
  taulukko[1] = document.getElementById('luku2').value;
  taulukko[2] = document.getElementById('luku3').value;
  taulukko[3] = document.getElementById('luku4').value;
  taulukko[4] = document.getElementById('luku5').value;

  var tulos1 = taulukko.sort();
  var tulos2 = tulos1.shift();
  var tulos3 = tulos1.pop();


  document.getElementById('v1').innerHTML = tulos2 + " on pienin ja " + tulos3 + " on suurin";
}


//Koodaushaasteita1 / 2. haaste

function haaste2() {
  var num = document.getElementById('luku6').value;

  if (num%2 == 0) {
    document.getElementById('v2').innerHTML = "Luku on parillinen"
  } else {document.getElementById('v2').innerHTML = "Luku on pariton"}
}

//Koodaushaasteita1 / 3. haaste

function haaste3() {

var viikonpaiva = document.getElementById('luku7').value;
  switch(viikonpaiva) {
    case "1":
    document.getElementById('v3').innerHTML = "Tammikuu";
    break;

    case "2":
    document.getElementById('v3').innerHTML = "Helmikuu";
    break;

    case "3":
    document.getElementById('v3').innerHTML = "Maaliskuu";
    break;

    case "4":
    document.getElementById('v3').innerHTML = "Huhtikuu";
    break;

    case "5":
    document.getElementById('v3').innerHTML = "Toukokuu";
    break;

    case "6":
    document.getElementById('v3').innerHTML = "Kesäkuu";
    break;

    case "7":
    document.getElementById('v3').innerHTML = "Heinäkuu";
    break;

    case "8":
    document.getElementById('v3').innerHTML = "Elokuu";
    break;

    case "9":
    document.getElementById('v3').innerHTML = "Syyskuu";
    break;

    case "10":
    document.getElementById('v3').innerHTML = "Lokakuu";
    break;

    case "11":
    document.getElementById('v3').innerHTML = "Marraskuu";
    break;

    case "12":
    document.getElementById('v3').innerHTML = "Joulukuu";
    break;
   }
}

// koodaushaasteita1 / 4. haaste

function OsoiteRekisteri(etunimi, sukunimi, lahiosoite, postinumero, postitoimipaikka, puhelin, sahkoposti) {
  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.lahiosoite = lahiosoite;
  this.postinumero = postinumero;
  this.postitoimipaikka = postitoimipaikka;
  this.puhelin = puhelin;
  this.sahkoposti = sahkoposti;
  this.tiedot = NaytaTiedot;
}

function NaytaTiedot() {
  var etunimi = this.etunimi;
  var sukunimi = this.sukunimi;
  var lahiosoite = this.lahiosoite;
  var postinumero = this.postinumero;
  var postitoimipaikka = this.postitoimipaikka;
  var puhelin = this.puhelin;
  var sahkoposti = this.sahkoposti;

  document.getElementById('v4').innerHTML = etunimi + " " + sukunimi + " " + lahiosoite + " " + postinumero + " " + postitoimipaikka + " " + puhelin + " " + sahkoposti;
}
var heikki = new OsoiteRekisteri("Heikki", "Pöllö", "Kyytitie 31", "01340", "Vantaa", "040827343", "heikki.pollo@google.com");
var janne = new OsoiteRekisteri("Janne", "Linnonmaa", "Maatie 2", "03450", "Espoo", "040321776", "janne.linnonmaa@google.com");
var jarmo = new OsoiteRekisteri("Jarmo", "Peipponen", "Kyyhkytie 3", "07540", "Tuusula", "0654894", "jarmo.peipponen@google.com");

function tiedot() {
  heikki.tiedot();
}


// Koodaushaasteita1 / 5. Haaste

function haaste5() {
  var sana = document.getElementById('luku8').value;
  var jatko = Array.from(sana);
  var string = jatko.sort();
  var lopullinen = string.join('');

  document.getElementById('v5').innerHTML = lopullinen;
}
