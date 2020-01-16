$(document).ready(function () {
    $('.btn-maps').click(function (e) {
        e.preventDefault();
        $('.maps').removeClass('maps-active');
        var selectTab = $(this).attr("href");
        $(selectTab).addClass('maps-active');
    });

    $('.certificate-slider').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.certificate-slider__nav',
    });

    $('.question-box h3').click(function () {
        $(this).toggleClass('close').siblings('.answer').fadeToggle();
    });

    $("body").on("click", ".click-top", function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });

    $('.btn-burger').click(function () {
$('.mobile-menu').fadeIn();
    });

    $('.btn-close').click(function () {
        $('.mobile-menu').fadeOut();
    });

    function blocktimer(idtimer, timetimes, timesnows, member) {
        var timetimes = timetimes;
        timetimes = timetimes.split(", ");
        var timesnows = timesnows;
        var ts = new Date(timetimes[0], timetimes[1], timetimes[2]);
        if ((new Date()) > ts) {
            ts = (new Date()).getTime() + timesnows;
        }
        $(idtimer).countdown({
            timestamp: ts,
            callback: function (hours, minutes, seconds) {
            }
        });
    }

    $(document).ready(function () {
        blocktimer('#countdown', '2019, 7, 1', 10 * 60 * 60 * 1000);
    });


});
