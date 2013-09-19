function set_body_height() {
  var wh = $(window).height();
  $('body').height(wh); // body height = window height
}

$(document).ready(function() {
  set_body_height();
  $(window).bind('resize', function() { set_body_height(); });
});