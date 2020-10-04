$(window).on("load", function () {
    // loading
    // $('.pre-load').stop().animate({
    //     opacity: 0
    // }, 500, function () {
    //     $('.pre-load').css({
    //         'display': 'none'
    //     });
    //     $('body').css({
    //         'overflow-y': 'auto'
    //     });
    // });
    

    // slider
    
    $('.slider-categorie').owlCarousel({
        loop: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        margin: 25,
        items: 1,
        rtl: true,
        autoplay: true,
        animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            500: {
                items: 1
            },700: {
                items: 2
            },800: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });


    // nav 
    $(".click--nav").click(function () {
        $(this).toggleClass("open");
        $(".click--nav").toggleClass("active");
        $(".body-overlay").toggleClass("back");
        $(".nav").toggleClass("back");
        $('body').toggleClass("overlay");
    });


    $(".body-overlay").click(function () {
        $(".click--nav").removeClass("open");
        $(".click--nav").removeClass("active");
        $(".body-overlay").removeClass("back");
        $(".nav").removeClass("back");
        $('body').removeClass("overlay");
    });

});