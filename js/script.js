$(window).on("load", function () {

    $(".Summary-product-drop-header").click(function(){
        $(this).parent().children(".Summary-product-drop-content").slideToggle(150)
    })
    $("li.header-box").click(function(){
        // $(".list-box").not($(this).parent().toggleClass("active")).removeClass("active");
        // $("ul.list-box li.body-box").not($(this).parent().children("li.body-box").slideToggle(300)).slideUp(100)

        $(this).parent().children("li.body-box").slideToggle(300)
        $(this).parent().toggleClass("active")
    })

    $(".btn-add-department button").click(function(e){
        $(".sidebar-modal").addClass("active");
        $('body').addClass("overlay");
        e.preventDefault()
    })
    $(".overlay-sidebar").click(function(){
        $(this).parent().removeClass("active");
        $('body').removeClass("overlay");
    })




    // var n = 0;
    
    $( "li.dropdown-menu-small .dropdown" )
    .mouseenter(function() {
        // alert("sad")
        // n += 1;
        $( this ).children( ".menu-small" ).addClass( "active" );
    })
    .mouseleave(function() {
        $( this ).children( ".menu-small" ).removeClass("active");
    });


    $( "li.dropdown" )
    .mouseenter(function() {
        // n += 1;
        $( this ).children( ".dropdown-menu" ).addClass( "active" );
    })
    .mouseleave(function() {
        $( this ).children( ".dropdown-menu" ).removeClass("active");
    });




    if($(".sign_in").height() > $(window).height()){
        $(".sign_in").removeClass("authwindo")

    }else{
        $(".sign_in").addClass("authwindo")
    }

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

    $('.slider-auth-owl').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        rtl: true,
        autoplay: false,
        // animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            400: {
                items: 1
            },500: {
                items: 1
            },700: {
                items: 1
            },800: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // nav 
    $(".click-nav").click(function () {
        $(this).toggleClass("open");
        $(".click--nav").toggleClass("active");
        $(".overlay-header").toggleClass("block-nav");
        $(".nav").toggleClass("block-nav");
        $('body').toggleClass("overlay");
    });


    $(".overlay-header").click(function () {
        $(".click-nav").removeClass("open");
        $(".click-nav").removeClass("active");
        $(".overlay-header").removeClass("block-nav");
        $(".nav").removeClass("block-nav");
        $('body').removeClass("overlay");
    });

});