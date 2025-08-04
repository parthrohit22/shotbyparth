
$(function(){
	'use strict';


	$('#portfolio-grid').mixItUp();


	$('#popup-Instagram').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false
	});
	

	smoothScroll.init({
        speed: 1000,
        updateURL: true,
        offset: 50
    });

$(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
            $('#header-nav').addClass('navbar-shotbyparth');
        } else {
            $('#header-nav').removeClass('navbar-shotbyparth');
        }
    });

});