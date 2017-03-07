//Convert this to CSS!
//var back = document.getElementById("header");
var prev_hash = window.location.hash;
var svg = document.getElementById("svg-icon");

$(window).on('hashchange', function() {
   change_hash(window.location.hash);
});

function change_hash(hash) {
  
}
var coords = { x:0, y:0 };

var tween = new TWEEN.Tween(coords)
  .to({x:254, y:196}, 10000)
  .repeat(Infinity)
  .onUpdate(function() {
  })
  .start();

  requestAnimationFrame(animate_background);


function animate_background(time) {
  var new_pos =  coords.x + "px " + coords.y + "px";
  svg.style.right = new_pos;
  requestAnimationFrame(animate_background);
  TWEEN.update(time);
}


//function delay(x, y, speed) {
//  setTimeout(function() {
//    animate_background(x, y);
//  }, speed);
//}

//delay(100, 100, 60);
