// $(document).ready(function(){
//   $('.carousel').carousel({
//     interval: 4000
//   });
// });

$(document).ready(function() {
  if($.turbo.isReady == true){
    $('.flexslider').flexslider({
      animation: "slide",
      direction: "vertical",
      pauseOnHover: true,
      controlNav: true,
      directionNav: false,
      prevText: "",
      nextText: "",
      slideshowSpeed: 2500,
      initDelay: 0
    });
  }
});
