// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () =>{
//   navbarLinks.classList.toggle('active')
// })


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



