
$(window).resize( function(){
  var windowWidth = $(window).width();
  var windowHeight = $(window).width();
  $('#resolution').replaceWith(''+windowWidth+'X'+windowHeight);
});
/*
$(document).ready(function () {
  $('#resoluion').append('test');
});
*/
