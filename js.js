$(document).ready(function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('#resolution').text(''+windowWidth+'X'+windowHeight);
});

$(window).resize( function(){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  $('#resolution').text(''+windowWidth+'X'+windowHeight);
});
