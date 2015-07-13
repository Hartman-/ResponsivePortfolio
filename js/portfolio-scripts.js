var menuOpen = false;

$(document).ready(function() {

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash.substring(1);
        var $target = $('a[name='+target+']').parent();
        var targetScroll = $target.offset().top-$(".nav").height();
        if(targetScroll < 0) targetScroll = 0;

        $('html, body').stop().animate({
            'scrollTop':targetScroll
        }, 500, 'swing');
    });

    function closeMenu() {
        $('.nav-menu').removeClass('open');
        $('.nav-mobile .nav-item').slideUp();
        if($(window).scrollTop() >= $('.landing').height()-$('.nav-desktop').height()) {
            $('.nav-mobile').css({'position':'fixed','top':'0','bottom':'auto'});
            $('.nav-mobile').animate({'height':'3rem'});
        }else
        {
            $('.nav-mobile').css({'position':'absolute','top':'auto','bottom':(-$(window).scrollTop())+'px'});
            $('.nav-mobile').animate({'bottom':'0','height':'3rem'});
        }
        $('.nav-menu').text('MENU');
        menuOpen = false;
    }

    $('.nav-menu').click(function() {
        if(menuOpen) {
            closeMenu();
        }else
        {
            $('.nav-mobile').css({'position':'fixed','top':($('.nav-mobile').offset().top-$(window).scrollTop())+'px'});
            $('.nav-mobile').animate({'top':'0','height':'100%'});
            $('.nav-menu').addClass('open');
            $('.nav-mobile .nav-item').slideDown();
            $('.nav-menu').text('CLOSE');
            menuOpen = true;
        }
    });

    $('.nav-mobile .nav-item').click(function() {
        closeMenu();
    });

    // ===
    // INITIALIZATION
    // ===

    // Create slider on load (first thing in order for calculations to work)	
    /*var pageSwiper = new Swiper('.section .section-reel .swiper-container.reel-swiper', {
        //Your options here:
        mode:'horizontal',
        speed: 1000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        simulateTouch: true
    });

	// ===
	// SCROLLING FUNCTIONALITY
	// ===

    $('span.nav-arrows').click(function(e) {
        var target = $(this).data('dir');
      
        if(target == "left") {
            pageSwiper.slidePrev();
        }
        else {
            pageSwiper.slideNext();
        }

        e.preventDefault();
    });*/

  	// ===
  	// END SCROLLING
  	// ===



});

$(window).scroll(function() {
    var selector = '.nav';
    if(menuOpen) selector = '.nav-desktop';
    if($(window).scrollTop() >= $('.landing').height()-$('.nav').height()) {
        $(selector).css({'position':'fixed','top':'0','bottom':'auto'});
    }else
    {
        $(selector).css({'position':'absolute','top':'auto','bottom':'0'});
    }
    var current = '#home';
    if($(window).scrollTop() >= $('a[name=about]').parent().offset().top-$('.nav').height()) current = '#about';
    if($(window).scrollTop() >= $('a[name=reel]').parent().offset().top-$('.nav').height())  current = '#reel';
    if($(window).scrollTop() >= $('a[name=contact]').parent().offset().top-$('.nav').height()) current = '#contact';
    if($(window).scrollTop() >= $(document).height()-$('.landing').height()) {
        current = '#contact';
        if($(window).scrollTop() <= $('a[name=reel]').parent().offset().top) current = '#reel';
    }
    if(!$(current).hasClass('selected')) {
        $('.nav-item.selected').removeClass('selected');
        $('a[href='+current+']').addClass('selected');
    }   
});