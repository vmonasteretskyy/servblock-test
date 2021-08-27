$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 5) {
            $('header.header:not(.onlywhite)').addClass('white');
        }
        else {
            $('header.header:not(.onlywhite)').removeClass('white');
        }
    });

    $('.menuburger').click(function () {
        $('.menuburger').hide();
        $('header.header .col-md-9').addClass('show');
        $('body').addClass('overflowhidden');
    });

    $('.closemenu').click(function () {
        $('.menuburger').show();
        $('header.header .col-md-9').removeClass('show');
        $('body').removeClass('overflowhidden');
    })

    // select
    if ($('body *').is('select')) {
        $(".custom-select").select2({
            // placeholder: "Select a state",
        });
    }

    // close cookie
    $('.cookie__close,.cookie__apply').click(function () {
        $('.cookie').hide();
    });

    // mian page - circle anim
    if ($('body *').is('.benefits__circle')) {

        document.addEventListener('DOMContentLoaded', updateDivFontSize);
        window.addEventListener('scroll', updateDivFontSize);

        function updateDivFontSize() {
            var div = document.querySelector('.benefits__circle'),
                divScrollCoef = getScrollCoef(div);

            div.style.width = divScrollCoef * 50 + 1 + 'vw';
            div.style.height = divScrollCoef * 50 + 1 + 'vw';
        }

        function getScrollCoef(element) {
            var elementRect = element.getBoundingClientRect(),
                elementOffsetTop = elementRect.top,
                elementOffsetBottom = elementRect.bottom,
                windowOffsetBottom = document.documentElement.clientHeight,
                coef;

            if (windowOffsetBottom < elementOffsetTop) {
                coef = 0;
            } else if (windowOffsetBottom > elementOffsetBottom) {
                coef = 1;
            } else {
                coef = (windowOffsetBottom - elementOffsetTop) / (elementOffsetBottom - elementOffsetTop);
            }
            return coef;

        }

    }


    // animations
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 800,
        delay: 100,
        disable: 'mobile'
    });







    // testbox
    // var hieghtThreshold = $(".testbox").offset().top;

    // console.log()


});