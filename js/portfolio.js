let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let contactMessage = document.getElementById('contact-message')
let contactform = document.getElementById('contact-form')

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('header nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 200; // Augmentez cette valeur
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navlinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Forcer l'activation au clic
    navlinks.forEach(link => {
        link.addEventListener('click', function() {
            navlinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}