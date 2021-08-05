var canvas;
var ctx;
var w = 1000;
var h = 600;
// var colors = ["blue"];

var o1 = {
  "x": w/2,
  "y": h/2,
  "w": 20,
  "h": 20,
  "c": 260,
  "angle": 0,
  "changle": 30,
  "distance": 50
}

//rotations
var oneDegree = 3*Math.PI/860;

setUpCanvas();
animationLoop();

// animation loop
function animationLoop(){
    star(o1);
    angle(o1,15);
    forward(o1,5)

    requestAnimationFrame(animationLoop);
  }

  function star(o){
    var x = o.x;
    var y = o.y;
    var a = o.angle;
    ctx.moveTo(o.x,o.y);
    for(var i = 0; i < 10; i++){

      angle(o, 210);
      forward(o, 250);
      ctx.lineTo(o.x, o.y);
      ctx.lineWidth = 0.3;
      ctx.stroke();
     // ctx.strokeStyle = colors[0];
    }

    o.x = x;
    o.y = y;
    o.angle = a;

  }

  function angle(o,a){
    if(a == undefined){
      o.angle+=o.changle;
    }else{
      o.angle+=a;
    }
  }

  function forward(o,d){
    var cx;
    var cy;
    if (d != undefined){
      o.distance = d;
    };
    cx = o.distance*Math.cos(o.angle*oneDegree);
    cy = o.distance*Math.sin(o.angle*oneDegree);
    o.x+=cx;
    o.y+=cy;
    }

///////////


// // ////////////////////drawing second shape
    function curvy(ctx, cx, cy, radius1, radius2, ratio) {
      var x, y, theta;
      ctx.beginPath();
      ctx.moveTo(cx + radius1 + radius2, cy);


      // draw segments from theta = 0 to theta = 2PI
      for (theta = 0; theta <= Math.PI * 2; theta += 0.01) {
        x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
        y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // dictating lines of shapes
    curvy(ctx, canvas.width / 2, canvas.height / 2, 50, 180, 30);

////////////canvas
    function setUpCanvas(){
      canvas = document.querySelector("#myCanvas");
      ctx = canvas.getContext("2d");
      canvas.width = w;
      canvas.height = h;
    }
// end of file

// sources used: https://www.maissan.net/articles/javascript-spirograph
