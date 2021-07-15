// prompt welcoming user and taking name
var visitor = prompt("WAIT!!!! Who ARE you?");

// all uppercase
var up = visitor.toUpperCase()

if (visitor != null) {
  document.getElementById('welcome').innerHTML = "<span class ='welcome'>HI, " + up + ". CLICK KAZOO KID TO ENTER.</span>";


// logging in web console
  var message = ("Hi "+visitor+", welcome. Click the kazoo kid to enter. ");
  console.log(message);
}
