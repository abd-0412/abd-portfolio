document.addEventListener('DOMContentLoaded', function() {
    // ========================
    // Typing Effect (Hero)
    // ========================
    const typingText = document.querySelector('.typing-text');
    const roles = ['Full Stack Developer', 'UI/UX Designer', 'Software Engineer', 'Problem Solver'];
    let roleIndex = 0, charIndex = 0, isDeleting = false;
    let typingDelay = 100, erasingDelay = 50, newRoleDelay = 2000;

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = erasingDelay;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingDelay = newRoleDelay;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500;
        }

        setTimeout(type, typingDelay);
    }

    setTimeout(type, 1000);

    // ========================
    // Navbar Scroll & Active Link
    // ========================
    const navbar = document.querySelector('.navbar');

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const navHeight = navbar.offsetHeight;

            if (window.scrollY >= sectionTop - navHeight - 50 &&
                window.scrollY < sectionTop + sectionHeight - navHeight - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');

        updateActiveNavLink();
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    updateActiveNavLink();

    // ========================
    // Contact Form Validation
    // ========================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Optional helper function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbar = document.querySelector('.navbar');
        const navHeight = navbar.offsetHeight;
        window.scrollTo({ top: section.offsetTop - navHeight, behavior: 'smooth' });
    }
}
// Animation for about section
        document.addEventListener('DOMContentLoaded', function() {
            const particlesContainer = document.getElementById('particles');
            const shapesContainer = document.getElementById('shapes');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                const size = Math.random() * 10 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 15;
                const duration = Math.random() * 10 + 15;   
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`; 
                particlesContainer.appendChild(particle);
            }
            for (let i = 0; i < 5; i++) {
                const shape = document.createElement('div');
                shape.classList.add('shape');
                const size = Math.random() * 100 + 50;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 20;
                const borderRadius = Math.random() > 0.5 ? '50%' : '0';
                
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                shape.style.left = `${posX}%`;
                shape.style.top = `${posY}%`;
                shape.style.animationDelay = `${delay}s`;
                shape.style.animationDuration = `${duration}s`;
                shape.style.borderRadius = borderRadius;
                
                shapesContainer.appendChild(shape);
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
    // Delay image animation so it comes after text
    const homeImage = document.querySelector('.home-image .image-container');
    if (homeImage) {
        setTimeout(() => {
            homeImage.classList.add('visible');
        }, 700); // adjust delay as needed
    }
});
