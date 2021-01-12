$(document).ready(function(){

    $('.toggle-button').click(function(){
        $('.navbar-links').toggleClass("active");
    })

    $('.toggle-button').click(function(){
        $('.navbar').toggleClass("active");
     })
    
     $('li').on("click",  function(){
      $(this).closest('li').siblings().removeClass("active2");
      $(this).addClass("active2")
      console.log("print");
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