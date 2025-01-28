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





// Email JS

const contactForm = document.getElementById("contactForm"),
        contactMessage = document.getElementById('contactMessage');

        const sendEmail = (e) =>{
            e.preventDefault();

            emailjs.sendForm('service_6bqzbie','template_h6eacnu','#contactForm','roRshUhxcIvfdNkIL').then(() =>{
                contactMessage.textContent = 'Message sent successfully ✅'
                setTimeout(()=>{
                    contactMessage.textContent =''
                },5000)

                contactForm.reset()
            }, () =>{
                contactMessage.textContent ='Message not sent (service error) ❌'
                setTimeout(()=>{
                    contactMessage.textContent =''
                },5000)
                contactForm.reset()
            })
        }

        contactForm.addEventListener('submit', sendEmail);

