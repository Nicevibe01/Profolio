// CV download button
const cvBtn = document.getElementById('cv-btn');
if (cvBtn) {
    cvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = 'cv.pdf';
        link.download = 'Adebayo_Olamilekan_CV.pdf';
        link.click();
    });
}

// WhatsApp number (with country code, no + or spaces)
const WHATSAPP_NUMBER = "2347068923676";

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });
}
window.onload = () => {
    window.scrollTo(0, 0);
};

// Smooth scroll for nav links + close menu on click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
        // close mobile menu
        if (navMenu) navMenu.classList.remove('open');
        if (navToggle) navToggle.classList.remove('active');
    });
});

// Header buttons
const projectsBtn = document.getElementById('projects-btn');
const contactBtn = document.getElementById('contact-btn');

if (projectsBtn) {
    projectsBtn.addEventListener('click', () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
}

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// Contact form -> WhatsApp
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comment = document.getElementById('comment').value.trim();

        if (!firstName || !lastName || !email || !comment) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const message =
            `Hello, I'm ${firstName} ${lastName}.\n` +
            `Email: ${email}\n\n` +
            `Message: ${comment}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');

        contactForm.reset();
    });
}
