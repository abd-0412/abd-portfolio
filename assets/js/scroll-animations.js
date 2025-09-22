document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

    // Fade animations for all fade-up, fade-left, fade-right elements
    const fadeElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translate(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        if (el.classList.contains('fade-up')) el.style.transform = 'translateY(20px)';
        else if (el.classList.contains('fade-left')) el.style.transform = 'translateX(-20px)';
        else if (el.classList.contains('fade-right')) el.style.transform = 'translateX(20px)';

        el.style.opacity = 0;
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeObserver.observe(el);
    });

    // Experience & Certification cards animation
    const animatedCards = document.querySelectorAll('.experience-card, .cert-card');
    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        cardObserver.observe(card);

        // For certification cards z-index hover effect
        if (card.classList.contains('cert-card')) {
            card.addEventListener('mouseenter', () => {
                animatedCards.forEach(c => c.style.zIndex = '1');
                card.style.zIndex = '10';
            });
        }
    });

    // Skill bar animation
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.getAttribute('data-width');
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => skillObserver.observe(bar));
    }
});
