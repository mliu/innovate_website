// $(document).ready(function(){
//   var cw = $('#hi').width();
//   $('.user_container-picture_container').css('height', cw)
// });

$(document).ready(function(){
  $('.user_container').on(click, function(){
    $('#' + $(this).attr('id') + 'B').toggleClass("click")
  });
});