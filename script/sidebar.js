// width of sidebar
function openNav() {
  document.getElementById("sidebar").style.width = "550px";
  document.getElementById("main").style.marginLeft = "550px";
}

// width of sidebar but closed
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
