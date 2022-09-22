function vastaus() {
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  var kulkuneuvo = document.getElementsByName('kouluun');
  var kulku;
  for (let i = 0; i < kulkuneuvo.length; i++) {
    if (kulkuneuvo[i].checked) {
      kulku = kulkuneuvo[i].value;
    }
  }
  var aineet = document.getElementById('aineet').value;


    document.getElementById('v1').innerHTML = "Hei olen " + etunimi + " " + sukunimi + " Ja tulin tänään kouluun " + kulku + " ja lempituntini on " + aineet;



}
