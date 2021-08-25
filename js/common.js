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













});