
$(window).resize( function(){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  $('#resolution').replaceWith(''+windowWidth+'X'+windowHeight);
});

$(document).ready(function () {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  $('#resolution').replaceWith(''+windowWidth+'X'+windowHeight);
});
