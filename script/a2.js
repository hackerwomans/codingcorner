// canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var sColors = ["#000000", "blue"];
var size = 1050;
canvas.style = "position: absolute; left: 55%; width: 400px; margin-left: -200px; top: 20%;";
ctx.lineJoin = 'bevel';

// closeness and randomness of shape
var line, place,
    odd = false,
    lines = [],
    gap = size / 20;

for(var y = gap/1; y <= size; y+= gap) {
  odd = !odd;
  line = [];
  for(var x = gap / 4; x <= size; x+= gap) {
    place = {x: x + (odd ? gap%2 : 0), y: y};
    line.push({
      x: x + (Math.random()*.8 - .4) * gap  + (odd ? gap/2 : 0),
      y: y + (Math.random()*1 - .4) * gap
    });

    ctx.fill();
  }
  lines.push(line);
}

// drawing the lines of the weird shape
function drawShape(line1, line2, line3) {
  ctx.beginPath();
  ctx.moveTo(line1.x, line1.y);
  ctx.lineTo(line2.x, line2.y);
  ctx.lineTo(line3.x, line3.y);
  ctx.lineTo(line1.x, line1.y);
  ctx.closePath();


  // random fill colour
  ctx.lineWidth = 1;
  var colors = Math.floor(Math.random()*16777215).toString(16);
  ctx.fillStyle = '#' + colors;
  ctx.fill();
}

// placements
for(var y = 0; y < lines.length - 1; y++) {
  odd = !odd;
  placeLine = [];
  for(var i = 0; i < lines[y].length; i++) {
    placeLine.push(odd ? lines[y][i]   : lines[y+1][i]);
    placeLine.push(odd ? lines[y+1][i] : lines[y][i]);
  }
  for(var i = 0; i < placeLine.length - 10; i++) {
    drawShape(placeLine[i], placeLine[i+1], placeLine[i+10]);
  }
}

// drawing a curve
ctx.beginPath();
ctx.lineWidth = 30;
ctx.moveTo(200, 40);
ctx.arcTo(180,130, 110,130, 130);
ctx.lineTo(0, 130);
ctx.strokeStyle = sColors[0]; //first colour from array is black
ctx.stroke();

// drawing another curve
ctx.beginPath();
ctx.lineWidth = 30;
ctx.moveTo(1000, 1000);
ctx.arcTo(180, 130, 180,180, 180);
ctx.lineTo(130, 130);
ctx.strokeStyle = sColors[0]; //first colour from array is black
ctx.stroke();
