// koodaushaasteita2 / 1. haaste






// Koodaushaasteita2 / 2. haaste

function haaste2() {
  document.getElementById('v2').innerHTML = "*<br>**<br>***<br>****<br>*****";
}

//koodaushaasteita2 / 3. haaste



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
