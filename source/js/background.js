var back = document.getElementById("header");

function animate_background(x, y) {
  x += 1;
  y += 1;
  var new_pos =  x + "px " + y + "px";

  back.style.backgroundPosition = new_pos;
  delay(x, y, 60);
}


function delay(x, y, speed) {
  setTimeout(function() {
    animate_background(x, y);
  }, speed);
}

delay(100, 100, 60);
