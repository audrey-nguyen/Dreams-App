
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $(".navbar").css("top", "-100px");
        } else {
            $(".navbar").css("top", "0px");
        }      
    })
})