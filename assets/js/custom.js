var textSlider = new Swiper('.text-slider-active', {
    spaceBetween: 50,
    slidesPerView: 2,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
        576: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2.5,
        },
    },
});

var textSlider = new Swiper('.text-slider-two-active', {
    spaceBetween: 50,
    slidesPerView: 1.5,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
        576: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 2,
        },
        1600: {
            slidesPerView: 2.5,
        },
    },
});

var blogSlider = new Swiper('.blog-slider-active', {
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 1500,
    allowTouchMove: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1201: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        1400: {
            spaceBetween: 70,
            slidesPerView: 3,
        },
    }
});

let testimonialContentTwo = new Swiper('.testimonialContentTwo', {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    parallax: true,
    watchSlidesProgress: true,
    speed: 1000,

});

let testimonialImageTwo = new Swiper('.testimonialImageTwo', {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    effect: "fade",
    speed: 1000,
    parallax: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
});

var brandSliderSix = new Swiper('.brand-six-active', {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        },
        1201: {
            slidesPerView: 7,
        },
    },
});

$(".bars_icon,.menu-button").on("click", function () {
    $(".offcanvas-info").addClass("info_open");
    $(".offcanvas_overlay").addClass("overlayopen");
});

$(".offcanvas-icon,.offcanvas_overlay").on("click", function () {
    $(".offcanvas-info").removeClass("info_open");
    $(".offcanvas_overlay").removeClass("overlayopen");
});

(function ($) {
    "use strict";
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
    });
    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });
    $(document).ready(function () {
        var services = $('.services-category-list li');
        var bgImages = $('.bg-img-wrapper .services-bg-img-1');
    
        services.mouseover(function () {
            var index = $(this).index(); // Get the index of the hovered item
    
            services.removeClass('active');
            $(this).addClass('active');
    
            bgImages.removeClass('active');
            bgImages.eq(index).addClass('active'); // Activate the corresponding bg image
        });
    });
})(jQuery);