var terve = "maailma";
function heippa(terve) {
  var sana = "terve ";
  alert(sana + terve + "!");

}

function laskeYhteen(l1, l2) {
  var yhteensa = l1 + l2;
  return yhteensa
}

function tulosta(l1, l2) {
  var vastaus = laskeYhteen(l1, l2);
  alert(vastaus)
}

function onkoSamat(lu1, lu2) {
  if(lu1 == lu2) {
    alert("luvut ovat samat")
  }
  else {
    alert("luvut eivät ole samat")
  }
}

function luvunKoko(luk1) {
  if(luk1 < 0) {
    alert("luku on negatiivinen");
  }
  else if(luk1 < 1000) {
    alert("luku on pienempi kuin 1000")
  }
  else {
    alert("luku on yhtäsuuri tai suurempi kuin 1000")
  }
}

function eriSuuret(luku1, luku2) {
  if(luku1 != luku2) {
    alert("luvut ovat erisuuret")
  }
  else {
    alert("luvut ovat samat")
  }
}

function jaTesti(x1) {
  if(x1 <= 100 && x1 >= 200) {
    alert("luku ei ole 100 ja 200 välissä")
  }
  else {
    alert("luku on 100 ja 200 välissä")
  }
}

function taiTesti(x2) {
  if(x2 < 100 || x2 > 200) {
    alert("luku ei ole 100 ja 200 välissä")
  }
  else {
    alert("luku on 100 ja 200 välissä")
  }
}
