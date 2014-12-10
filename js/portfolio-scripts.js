$(document).ready(function() {

    // ===
    // INITIALIZATION
    // ===

    // Create slider on load (first thing in order for calculations to work)	
    var pageSwiper = $('#landing-section .swiper-container').swiper({
        //Your options here:
        mode:'horizontal',
        speed: 1000,
        loop: true,
        calculateHeight: true,
        simulateTouch: false,
        onSlideChangeStart: function() {
            $('nav.page-nav a').removeClass('active');
            $('nav.page-nav a').eq(pageSwiper.activeIndex - 1).addClass('active');
        }
    });

    // Center content on load
    var vertPadding = calcPadding();
    $('.container #landing-section .jumbotron').css('top', vertPadding+"px");



    // ===
    // RESIZE WINDOW - CENTER CONTENT
    // ===

	$(window).resize(function() {
		var vertPadding = calcPadding();
		$('.container #landing-section .jumbotron').css('top', vertPadding+"px");
	});

    function calcPadding() {
        amtPadding = ($('.container #landing-section').height() - $('.container #landing-section .jumbotron').height() - 50) / 2;
        return amtPadding;
    }

    // ===
    // END WINDOW CENTERING
    // ===



	// ===
	// SCROLLING FUNCTIONALITY
	// ===

    function swipeTarget(target) {
    	var duration = 1200;
        pageSwiper.swipeTo(target, 1000);
  	}

  	$('nav.page-nav a').click(function(e) {
    	var target = $(this).index();

    	swipeTarget(target);
    	e.preventDefault();
  	});

    $('span.nav-arrows').click(function(e) {
        var target = $(this).data('dir');
      
        if(target == "left") {
            pageSwiper.swipePrev();
        }
        else {
            pageSwiper.swipeNext();
        }

        e.preventDefault();
    });

  	// ===
  	// END SCROLLING
  	// ===



});