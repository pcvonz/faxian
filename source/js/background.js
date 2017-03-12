//Convert this to CSS!
//var back = document.getElementById("header");
var prev_hash = window.location.hash;
//var svg = document.getElementById("svg-icon");

$(window).on('hashchange', function() {
   change_hash(window.location.hash);
});

function clear_child_nodes(node) {
    var node = document.getElementById(node);
    if(node != null){
        console.log("beep");
        while(node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }
    }
}

function change_hash(hash) {
    hash = hash.split("_")[0].replace("#", "");
    hash = "images/icons/"+hash +".svg"
    console.log(hash);
	var s = Snap("#svg");
    //Clear children nodes if they exist
    clear_child_nodes("svg");
    hash = hash.split(0);
    console.log(hash);
    Snap.load(hash, function(f) {

		var text = f.selectAll("path");
    console.log(text);
    var start = 1000;
    var g = s.g();
    g.append(text); 
    g.attr({
      transform: "s" + 5 + " t20, 13" 
      });
    Snap.animate(0, 1, function(val) {
        g.attr({opacity: val}); 
    }, 1000, mina.easin);
        s.append(g);
});

};
change_hash(window.location.hash);


