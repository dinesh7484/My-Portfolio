document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen after 1.5 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove loading screen from DOM after animation completes
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special case for skill bars
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    document.querySelectorAll('.timeline-item, .project-card, .section-title, .about-content, .contact-container').forEach(section => {
        observer.observe(section);
    });
    
    // Observe skills section separately
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Project card hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.project-overlay').style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.project-overlay').style.opacity = '0';
        });
    });
    
    // Typewriter effect for hero text
    const heroText = document.querySelector('.hero-content h1 span');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing after loading screen
        setTimeout(typeWriter, 1500);
    }
});
