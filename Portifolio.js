// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');
// const menuClose = document.querySelector('#menu-close');

// window.addEventListener("scroll",function() {
//     var header = document.querySelector(".header");
//     header.classList.toggle("scrolled",window.scrollY>0);
// });
// menu.addEventListener('click',()=>{
//     navbar.classList.add('open')
//     menu.style.display = "none"
//     menuClose.style.display ="block"

// })
// menuClose.addEventListener('click',()=>{
//     navbar.classList.remove('open')
//     menu.style.display = "block"
//     menuClose.style.display ="none"

// })

// const sr =scrollReveal ({
//     distance:'40px',
//     duration:2500,
//     reset:true
// });

// sr.reveal('.logo',{delay:200, origin:'left'});
// sr.reveal('.navbar',{delay:400, origin:'top'}); 
// sr.reveal('.menu-btn',{delay:520, origin:'right'});  

// sr.reveal('.home-text span',{delay:600, origin:'top'}); 
// sr.reveal('.home-text h1',{delay:680, origin:'left'}); 
// sr.reveal('.home-text p',{delay:750, origin:'right'}); 
// sr.reveal('.home-btn',{delay:850, origin:'left'}); 

// sr.reveal('.share',{delay:950, origin:'bottom'}); 

// sr.reveal('.home-img',{delay:1000, origin:'right'});



// Select the theme toggle button
const themeBtn = document.getElementById('theme-btn');

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('theme') || 'light-mode';
document.body.classList.add(savedTheme);
updateIcon(savedTheme);

// Toggle theme on button click
themeBtn.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';

  // Update the theme
  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  // Save the theme preference
  localStorage.setItem('theme', newTheme);

  // Update the button icon
  updateIcon(newTheme);
});

// Update the button icon based on theme
function updateIcon(theme) {
  themeBtn.textContent = theme === 'dark-mode' ? '☀️' : '🌙';
}
