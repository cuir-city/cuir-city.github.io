"use strict"

var site = {};
var swipers = [];
var currentMenu;

(function() {



    function setDesktopMenuWidth()
    {
        $('.desktop-menu .categories .sub-menu').width($('.desktop-menu').width());
    }

    function initDesktopMenu()
    {
        setDesktopMenuWidth();

        $('.desktop-menu li.dropdown').mouseenter(function(){
            $('#main-overlay').show();
            $('.desktop-menu li.dropdown').removeClass('active');
            $(this).addClass('active');
            $(this).find('.sub-menu').css('top',$('ul.categories').height());
            $(this).find('.sub-menu').show();
            $(this).find('.sub-menu').children('.content').removeClass('active');
            $(this).find('.sub-menu').children('.content').first().addClass('active');
            $('.sub-categories li a').removeClass('active');
        });

        $('.desktop-menu li.dropdown').mouseleave(function(){
            $('#main-overlay').hide();
            $(this).find('.sub-menu').hide();
            $('.desktop-menu li.dropdown').removeClass('active');
        });

        $('.desktop-menu .categories .sub-categories li a').mouseenter(function(){
            $('.sub-categories li a').removeClass('active');
            $(this).addClass('active');
            var id = $(this).attr('data-category');
            $(this).parents('.sub-menu').find('.content').removeClass('active');
            $(this).parents('.sub-menu').find(id).addClass('active');
        })
    }

    function initSwiperProducts()
    {
        if ($(window).width() <= 500)
        {
            if (swipers.length == 0)
            {
                $('.swiper-products-container').each(function(){
                    var container = $(this);
                    var wrapper = container.children().first();
                    wrapper.addClass('swiper-wrapper');
                    wrapper.children().addClass('swiper-slide');
                    var mySwiper = new Swiper ($(this), {
                    scrollbar: $(this).find('.swiper-scrollbar'),
                    direction: 'horizontal',
                    loop: false,
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 2,
                    speed: 1200,
                    scrollbarHide: false
                    })

                    swipers.push(mySwiper);

                });
            }
        }
        else {

            $('.swiper-images-product').each(function(){
                var container = $(this);
                var swiperImagesProduct = new Swiper (container, {
                    // Optional parameters
                    direction: 'horizontal',
                    loop: true,
                    simulateTouch: false,
                    allowSwipeToPrev: false,
                    allowSwipeToNext: false,
                    nextButton : container.parents('.product').find('.next'),
                    prevButton : container.parents('.product').find('.previous'),
                    lazyLoading: true
                  })
            });

            swipers.forEach(function(swiper)
            {
                if (swiper != null)
                {
                    swiper.destroy(true,true);
                }
            });
            swipers = [];
            $('.swiper-products-container > .swiper-wrapper').children().removeClass('swiper-slide');
            $('.swiper-products-container > .swiper-wrapper').removeClass('swiper-wrapper');
            $('.swiper-products-container > .swiper-products-pagination').empty();
        }
    }

    $(window).resize(function() {
            setDesktopMenuWidth();
            initSwiperProducts();
        });

    site.init = function() {
        // Scroll up button
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

        /* Swiper */
        var mySwiper = new Swiper ('.swiper-push', {
            direction: 'horizontal',
            loop: true,
            autoplay: 2000,
            //autoplayDisableOnInteraction: true,
            speed: 500,
            pagination: '.swiper-pagination',
            paginationClickable: true
          })

        // Desktop menu
        initDesktopMenu();
        // Sliders mobile
        initSwiperProducts();
        // Banner info
        $('.banner-info .close-link').on('click',function(){
            $(this).parent().slideUp();
        });


    }

})()


site.init()
