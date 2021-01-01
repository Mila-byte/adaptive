$(document).ready(function(){

    var menu = $(".navbar");
    var navheight = $('.navbar').outerHeight();
    console.log(navheight);

    $(window).scroll(function(){
        if ( $(this).scrollTop() > navheight && menu.hasClass("no-fixed") ){
            menu.fadeOut('fast',function(){
                $(this).removeClass("no-fixed")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
                $('.icon-bar').css('background', '#fff');
                $('.navbar-toggle').css('border', '1px solid #fff');
            });
        } else if($(this).scrollTop() <= navheight && menu.hasClass("fixed")) {
            menu.fadeOut('fast',function(){
                $(this).removeClass("fixed transbg")
                    .addClass("no-fixed")
                    .fadeIn('fast');
                $('.icon-bar').css('background', 'grey');
                $('.navbar-toggle').css('border', '1px solid grey');
            });
        }
    });//scroll
});//jQuery
