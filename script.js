// Initialize feather icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-emerald-300', 'font-medium');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('text-emerald-300', 'font-medium');
            }
        });
    });

    // Floating particles effect
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Position particles randomly
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random size between 1px and 4px
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random animation duration
            const duration = Math.random() * 15 + 10;
            particle.style.animation = `float ${duration}s linear infinite`;
            
            // Random opacity and color variation
            const opacity = Math.random() * 0.2 + 0.1;
            particle.style.opacity = opacity;
            particle.style.backgroundColor = `rgba(59, 243, 174, ${opacity})`;
            
            document.body.appendChild(particle);
            
            // Remove particle after animation completes
            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }
        
        // Create initial particles
        for (let i = 0; i < 15; i++) {
            setTimeout(createParticle, i * 300);
        }
        
        // Continue creating particles periodically
        setInterval(createParticle, 1000);
    }
});
