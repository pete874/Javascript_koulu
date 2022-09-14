function esimerkkiTaulukko() {
  var autot = [];
  var caarat = ["Tesla", "VW i3", "Hyundai Ionic"];
  autot.push("Jeep");
  document.write("caara[1] = " + caarat[1] + " autot[0] = " + autot[0] + "<br />");
  document.write("CAARAT = " + caarat + "<br />");
  document.write("autot = " + autot + "<br />");
  var siirrettava = caarat.pop();
  document.write("Siirrettävä = " + siirrettava);
  document.write("<br /> Caarat taulukko = " + caarat);
  autot.unshift(siirrettava);
  document.write("<br />Autot taulukko = " + autot);
  caarat.push() = autot.pop();
  document.write("<br />Caarat taulukko = " + caarat + "<br />Autot taulukko = " + autot);


}
