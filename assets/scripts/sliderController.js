/**
 * Created by Elliott on 28/11/2016.
 */

var sliderController = function(context) {

    function checkSlickNoSlide() {
        var elm = $('.slick-slider-for-feeds'),
            getSlick = elm.slick('getSlick');

        if(getSlick.slideCount <= getSlick.options.slidesToShow) {
            elm.addClass('slick-no-slide');
        }
        else {
            elm.removeClass('slick-no-slide');
        }
    }

    function resizeSlider() {

        $('button').on('click', function() {
            var filter = "";

            //Toggle active/inactive on button
            $(this).toggleClass("active inactive");
            if($(this).attr("data-active") == "true"){
                $(this).attr('data-active','false');
            }
            else if($(this).attr("data-active") == "false"){
                $(this).attr('data-active','true');
            }

            // get all active buttons
            $('button').each(function(i, obj) {
                if($(this).attr("data-active") == "true"){
                    filter = filter + "." + $(obj).attr("data-id") + ", ";
                }
            });
            filter = filter.slice(0,-2);

            //Filter slider
            $('.slick-slider-for-feeds').slick('slickUnfilter');
            $('.slick-slider-for-feeds').slick('slickFilter', filter);

            checkSlickNoSlide();
        });

        $('.slick-slider-for-feeds').on('afterChange', function(){
            checkSlickNoSlide();
        });

    }



    return {
        resizeSlider : resizeSlider
    }

};

