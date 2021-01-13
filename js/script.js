// Creare un layout con i dropdown-menu come da screenshot.


$(document).ready(function() {

  // code below
  $('.show-dropdown').hover(function() {
    $('.dropdown-menu').append('<li><a href="#">standard</a></li>');
    $(this).children('.dropdown-menu').toggleClass('active');

  });

});
