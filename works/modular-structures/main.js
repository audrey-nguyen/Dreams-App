$(document).ready(function(){

    $('.toggle-button').click(function(){
        $('.navbar-links').toggleClass("active");
    })

    $('.toggle-button').click(function(){
        $('.navbar').toggleClass("active");
     })
})




    const toggleButton = document.querySelector('.toggle-button');

    let menuOpen = false;

    toggleButton.addEventListener('click', ()=> {
        if(!menuOpen) {
        toggleButton.classList.add('open');
        menuOpen = true;
        }   else {
        toggleButton.classList.remove('open');
        menuOpen = false;
        }
    })

// split


$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $(".navbar").css("top", "-100px");
        } else {
            $(".navbar").css("top", "0px");
        }      
    })
})