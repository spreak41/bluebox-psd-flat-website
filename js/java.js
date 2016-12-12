$(document).ready (function() {
    
    new WOW().init();
    
    $('header').waypoint(function(direction) {
        $('.header-img').addClass('animated slideInDown');
        $('.about').addClass('animated slideInRight');
        $('header').addClass('animated slideInLeft');
    }, {
        
    });
});