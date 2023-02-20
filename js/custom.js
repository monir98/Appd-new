$(document).ready(function(){
// Owl Carousel
$('.apps-carousel').owlCarousel({
    loop:true,
    nav:false,
    center:true,
    autoplay:true,

    item:6,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});
// Next Preview Icon
$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');



    $(".client-carosul").owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        loop:true,
        nav:false,
        dots:false,
        navText:['<span class="fa fa-arrow-left"></span>','<span class="fa fa-arrow-right"></span>',]
    });

    $('.counter-text').counterUp({
        delay: 10,
        time: 1000
    });
    
// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});


  });
