// prompt welcoming user and taking name
var visitor = prompt("who r u?");

if (visitor != null) {
  document.getElementById('welcome').innerHTML = "<span class ='welcome'>hi " + visitor + ", u may enter.</span>";


// logging in web console
  var message = ("hi "+visitor+", u may enter.");
  console.log(message);
}
