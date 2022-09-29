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
