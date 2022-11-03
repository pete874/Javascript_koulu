function randomPerson()
  {
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0]);

    document.getElementById('randomImage').src = data.results[0].picture.large;

    document.getElementById('randomPerson').innerHTML = "<b>Firstname</b> : " + data.results[0].name.first + "<br> <b>Lastname</b> : " + data.results[0].name.last
    + "<br> <b>Gender</b> : " + data.results[0].gender + "<br> <b>Phone</b> : " + data.results[0].phone + "<br> <b>Cellphone</b> : " + data.results[0].cell + "<br>  <b>Address</b> : " + data.results[0].location.street.name
    + " " + data.results[0].location.street.number + ", <br> &emsp;&emsp;&emsp;&emsp;&nbsp;"+ data.results[0].location.city + " " + data.results[0].location.country + " " + data.results[0].location.postcode
    + "<br> <b>Country</b> : " + data.results[0].location.country + "<br> <b>Username</b> : " + data.results[0].login.username + "<br> <b>Password</b> : " + data.results[0].login.password
    + "<br> <b>Birthday</b> : " + data.results[0].dob.date;
  } );
};


function omaApi() {
  fetch("http://127.0.0.1:64363/API/db.json")
  .then(response => response.json())
  .then(data => {
    console.log(data[0].tietokone);

    document.getElementById('omaApi').innerHTML = "<b>CPU</b> : " + data[0].tietokone.cpu + "<br> <b>GPU</b> : " + data[0].tietokone.gpu + "<br> <b>RAM</b> : " + data[0].tietokone.ram + "<br> <b>Kotelo</b> : " + data[0].tietokone.case
    + "<br> <b>SSD</b> : " + "M.2 " + data[0].tietokone.ssd.m2 + " ja SATA " + data[0].tietokone.ssd.sata;
  } );
}
