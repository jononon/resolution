
$(window).resize( function(){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  $('#resolution').replaceWith(''+windowWidth+'X'+windowHeight);
});

$(window).ready(function () {
  while(true){
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('#resolution').replaceWith(''+windowWidth+'X'+windowHeight);
  }
});
