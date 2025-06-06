// Script principal pour le site Dry Needling - Harmonisé avec le site de référence

document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Toggle de la navigation mobile
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Toggle du mode sombre/clair
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-theme');
            
            // Changer l'icône selon le mode
            const icon = themeToggle.querySelector('i');
            if (body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }
    
    // Animation au défilement
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Observer pour les animations au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observer chaque élément avec la classe fade-in
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi de formulaire
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Envoi en cours...';
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                submitButton.textContent = 'Message envoyé !';
                submitButton.classList.add('success');
                
                // Réinitialiser le formulaire
                contactForm.reset();
                
                // Restaurer le bouton après un délai
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    submitButton.classList.remove('success');
                }, 3000);
            }, 1500);
        });
    }
});
