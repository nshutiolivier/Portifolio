let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
const menuClose = document.querySelector('#menu-close');

window.addEventListener("scroll",function() {
    var header = document.querySelector(".header");
    header.classList.toggle("scrolled",window.scrollY>0);
});
menu.addEventListener('click',()=>{
    navbar.classList.add('open')
    menu.style.display = "none"
    menuClose.style.display ="block"

})
menuClose.addEventListener('click',()=>{
    navbar.classList.remove('open')
    menu.style.display = "block"
    menuClose.style.display ="none"

})

const sr =scrollReveal ({
    distance:'40px',
    duration:2500,
    reset:true
});

sr.reveal('.logo',{delay:200, origin:'left'});
sr.reveal('.navbar',{delay:400, origin:'top'}); 
sr.reveal('.menu-btn',{delay:520, origin:'right'});  

sr.reveal('.home-text span',{delay:600, origin:'top'}); 
sr.reveal('.home-text h1',{delay:680, origin:'left'}); 
sr.reveal('.home-text p',{delay:750, origin:'right'}); 
sr.reveal('.home-btn',{delay:850, origin:'left'}); 

sr.reveal('.share',{delay:950, origin:'bottom'}); 

sr.reveal('.home-img',{delay:1000, origin:'right'});

