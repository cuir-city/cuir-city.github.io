/* Swiper */
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',
    paginationClickable: true
  })

/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});

	$("img.lazy").lazyload({
		effect : "fadeIn"
	});

	initSliderMobile();
});

$(window).resize(function() {
	initSliderMobile();
});

function initSliderMobile(classNameContainer)
{
	if ($(this).width() < 767)
	{
		$('.swiper-products-container').each(function(){
			var container = $(this);
			var wrapper = container.children().first();
			wrapper.addClass('swiper-wrapper');
			wrapper.children().addClass('swiper-slide');
			var mySwiper = new Swiper ($(this), {
			    // Optional parameters
			    direction: 'horizontal',
			    loop: true,

			    // If we need pagination
			    pagination: '.swiper-products-pagination',

			    // Navigation arrows
			    nextButton: '.swiper-products-button-next',
			    prevButton: '.swiper-products-button-prev',
			  })

		});
	}
	else {
		$('.swiper-products-container').each(function(){
			var container = $(this);
			var wrapper = container.children().first();
			wrapper.removeClass('swiper-wrapper');
			wrapper.children().removeClass('swiper-slide');
		});
	}
}
