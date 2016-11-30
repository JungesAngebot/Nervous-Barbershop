$(document).ready(function() {

    $('.slick-slider-for-feeds').slick({
        infinite: false,
        lazyLoad: 'progressive',
        swipeToSlide: true,
        slidesToShow: 3,
        variableWidth: false,
        slidesToScroll: 1,
        touchThreshold: 10,
        speed: 150,
        prevArrow: '<i class="slick-prev-custom blop icon icon_arrow-left"></i>',
        nextArrow: '<i class="slick-next-custom blop icon icon_arrow-right"></i>',
        //mobileFirst: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 1,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    new sliderController().resizeSlider();

    new socialFeedController().setSocialFeeds();

});
