$(document).ready(function(){
    console.log('work');
    $('#scroller').hide();
    var navheight = $('.navbar').outerHeight();
    //fade in/out based on scrollTop value
    $(window).scroll(function() {
        if ($(this).scrollTop() > navheight) {
            $('#scroller').fadeIn();
        }else{
            $('#scroller').fadeOut();
            // alert ('hello word');
        }
    });

    // scroll body to 0px on click
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});