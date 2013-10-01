// $(document).ready(function(){
//   $('.carousel').carousel({
//     interval: 4000
//   });
// });

// function carousel(){
//     $('.flexslider').flexslider({
//       animation: "slide",
//       direction: "vertical",
//       pauseOnHover: true,
//       controlNav: true,
//       directionNav: false,
//       prevText: "",
//       nextText: "",
//       slideshowSpeed: 2500,
//       initDelay: 1000
//     });  
// }

// $(document).ready carousel()
// $(document).on "page:load", carousel()

$(document).on('page:load ready', function(){
    $('.flexslider').flexslider({
      // animation: "slide",
      animationSpeed: 1200,
      direction: "vertical",
      pauseOnHover: true,
      controlNav: true,
      directionNav: false,
      // prevText: "",
      // nextText: "",
      slideshowSpeed: 2500,
      initDelay: 1000
    });
});
