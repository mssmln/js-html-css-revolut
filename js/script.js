// Creare un layout con i dropdown-menu come da screenshot.


$(document).ready(function() {

  // code below
  $('.show-dropdown').hover(function() {
    $(this).children('.dropdown-menu').toggleClass('active');
  });

});
