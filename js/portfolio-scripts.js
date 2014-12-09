$(document).ready(function() {
	


	var vertPadding = ($('.container #landing-section').height() - 360) / 2;
	$('.container #landing-section .jumbotron').css('margin-top', vertPadding+"px");

	$(window).resize(function() {
		var vertPadding = ($('.container #landing-section').height() - 360) / 2;
		$('.container #landing-section .jumbotron').css('margin-top', vertPadding+"px");
	});

	// ===
	// SCROLLING FUNCTIONALITY
	// ===

	function scrollTarget(target) {
    	var duration = 1200;

    	$('html, body').animate({scrollTop: $("#" + target).offset().top}, duration);
  	}

  	$('nav a').click(function(e) {
    	var target = $(this).attr('href').substring(1);
    	console.log(target);

    	scrollTarget(target);
    	e.preventDefault();
  	});

  	// ===
  	// END SCROLLING
  	// ===



});