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
    $("*").each( function () {
    var $this = $(this);
    if ((parseInt($this.css("fontSize")) < 22) || (parseInt($this.css("fontSize")) < 3vw)) {
        $this.css({ "font-size": "22px" });   
    }
});
});
});