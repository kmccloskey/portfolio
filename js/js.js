$(document).ready( function() {
    $(".who_i_am").on("click", function( e ) {
        e.preventDefault();
        $("body, html").animate({ 
            scrollTop: $('.third_img').offset().top 
        }, 600);
    });
    $(".contact_button").on("click", function( e ) {
        e.preventDefault();
        $("body, html").animate({ 
            scrollTop: $('.fourth_img').offset().top 
        }, 600);
    });
});