$(document).ready(function() {
  $('#fullpage').fullpage(
    { 
      anchors:['paint_nav', 'roof_nav', 'wall_nav', 'floor_nav', 'window_nav'],
      scrollOverflow: true,
      responsiveHeight: 0,
      responsiveWidth: 768
    });
});
