$(document).ready(function() {
	
  var pageSwiper = $('#landing-section .swiper-container').swiper({
    //Your options here:
    mode:'horizontal',
    loop: true,
    calculateHeight: true
    //etc..
  });


	var vertPadding = calcPadding();
	$('.container #landing-section .jumbotron').css('top', vertPadding+"px");

	$(window).resize(function() {
		var vertPadding = calcPadding();
		$('.container #landing-section .jumbotron').css('top', vertPadding+"px");
	});

  function calcPadding() {
    amtPadding = ($('.container #landing-section').height() - $('.container #landing-section .jumbotron').height() - 50) / 2;
    return amtPadding;
  }

	// ===
	// SCROLLING FUNCTIONALITY
	// ===

	function swipeTarget(target) {
    	var duration = 1200;
      pageSwiper.swipeTo(target, 1000);
  	}

  	$('nav a').click(function(e) {
    	var target = $(this).index();

    	swipeTarget(target);
    	e.preventDefault();
  	});

  	// ===
  	// END SCROLLING
  	// ===



});