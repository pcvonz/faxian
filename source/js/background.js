var back = document.getElementById("header");

var coords = { x:0, y:0 };

var tween = new TWEEN.Tween(coords)
  .to({x:254, y:196}, 10000)
  .repeat(Infinity)
  .onUpdate(function() {
    console.log(this.x, this.y);
  })
  .start();

  requestAnimationFrame(animate_background);


function animate_background(time) {
  var new_pos =  coords.x + "px " + coords.y + "px";
  back.style.backgroundPosition = new_pos;
  requestAnimationFrame(animate_background);
  TWEEN.update(time);
}


//function delay(x, y, speed) {
//  setTimeout(function() {
//    animate_background(x, y);
//  }, speed);
//}

//delay(100, 100, 60);
