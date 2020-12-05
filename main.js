


$(document).ready(function(){

$('.toggle-button').click(function(){
    $('.navbar-links').toggleClass("active");
    })
})



$(document).ready(function(){

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
    } else {
        toggleButton.classList.remove('open');
        menuOpen = false;
    }
})



