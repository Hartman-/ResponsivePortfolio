$(document).ready(function() {

    // ===
    // INITIALIZATION
    // ===

    // Create slider on load (first thing in order for calculations to work)	
    var pageSwiper = $('#landing-section .swiper-container.main-swiper').swiper({
        //Your options here:
        mode:'horizontal',
        speed: 1000,
        loop: false,
        calculateHeight: true,
        simulateTouch: false, 
        onSlideChangeStart: function() {
            $('nav.page-nav a').removeClass('active');
            $('nav.page-nav a').eq(pageSwiper.activeIndex).addClass('active');

            if(pageSwiper.activeIndex == 0) {

                $('span.nav-arrows.left').fadeOut();
                ga('send', 'event', 'Home', 'click', 'nav-buttons');
            }
            else if(pageSwiper.activeIndex == 1) {

                $('span.nav-arrows.left').fadeIn(); 
                ga('send', 'event', 'Work', 'click', 'nav-buttons');
            }
            else if(pageSwiper.activeIndex == 2) {

                $('span.nav-arrows.left').fadeIn(); 
                ga('send', 'event', 'About', 'click', 'nav-buttons');
            }
            else if(pageSwiper.activeIndex == 3) {

                $('span.nav-arrows.left').fadeIn(); 
                ga('send', 'event', 'Contact', 'click', 'nav-buttons');
            }
            else {
                $('span.nav-arrows.left').fadeIn();   
            }
        },
        preventLinksPropagation: true
    });

    var workSwiper = $('#landing-section .swiper-container.work-swiper').swiper({
        //Your options here:
        mode:'vertical',
        speed: 1000,
        loop: true,
        pagination: '.pagination',
        paginationClickable: true,
        calculateHeight: true,
        cssWidthAndHeight: true,
        preventLinksPropagation: true
    });

    // Center content on load
    var vertPadding = calcPadding();
    $('.container #landing-section .jumbotron').css('top', vertPadding+"px");
    $('span.nav-arrows.left').hide();



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