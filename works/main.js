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
    for(i=0; i < $("slide").length; i++){
        $("slide").css("top", "-100px");
    };
    

})

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dotnav-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dotnav-active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


var slideIndex = 1;
showDivs(slideIndex);


function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x =


document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dotnav-active", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dotnav-active";
}

