var el = document.getElementById("start-container");

el.addEventListener("click", function() {
  var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  window.scroll({
    top: height,
    left: 0,
    behavior: 'smooth'
  });
}, false);
