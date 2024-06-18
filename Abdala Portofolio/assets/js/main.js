//home text effect//
const typeSpeed = 100; // Adjust the typing speed here (in milliseconds)
const text = "Developer,Designer"; // Text to be typed

let i = 0;
let typingInterval;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    typingInterval = setTimeout(typeWriter, typeSpeed);
  }
}

// Start typing effect when the page is loaded
window.onload = function() {
  typeWriter();
};

/*===== MENU SHOW =====*/ 
let apperancer = document.getElementById('appear');
let apearTaker = document.getElementById('nav-menu');

const getControl = function() {
    appearancer.addEventListener('click', function() {
        this.classList.toggle('bi-x-square');
    });
}

getControl();

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 40}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 20}); 
emailjs.init("your_user_id");

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent default form submission
document.body.style.backgroundColor = 'red';

    // Get the form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send the email
    emailjs.send("service_hrmn9pn", "template_gjdzyoa", formData)
        .then(function(response) {
            console.log('Email sent:', response);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.error('Email sending failed:', error);
            alert('Oops! Something went wrong. Please try again later.');
        });
});
let by = document.body;
document.body.style.backgroundColor = 'red';