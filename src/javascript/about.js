
// About page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize interactive elements
    initInteractiveElements();
    
    // Initialize navigation
    initNavigation();
});

// Scroll animations for about page
export function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.value-card, .story-content, .cta-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Interactive elements for about page
export function initInteractiveElements() {
    // Value cards hover effects
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contact button animation
    const contactBtn = document.querySelector('.btn-contact');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                window.location.href = 'ContactUs.html';
            }, 150);
        });
    }

    // CTA buttons functionality
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Handle different button actions
            if (this.classList.contains('btn-primary')) {
                // Explore packages
                window.location.href = 'packages.html';
            } else if (this.classList.contains('btn-secondary')) {
                // Get in touch
                window.location.href = 'ContactUs.html';
            }
        });
    });
}

// Navigation functionality
export function initNavigation() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'launch.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Company statistics counter (optional enhancement)
export function initStatistics() {
    const stats = [
        { element: '.stat-clients', target: 500, suffix: '+' },
        { element: '.stat-destinations', target: 25, suffix: '+' },
        { element: '.stat-experience', target: 5, suffix: ' years' }
    ];

    stats.forEach(stat => {
        const element = document.querySelector(stat.element);
        if (element) {
            animateCounter(element, 0, stat.target, 2000, stat.suffix);
        }
    });
}

export function animateCounter(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Team member interactions (for future team section)
export function initTeamInteractions() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            const memberInfo = this.getAttribute('data-member');
            showTeamMemberModal(memberInfo);
        });
    });
}

export function showTeamMemberModal(memberInfo) {
    // This would show a modal with detailed team member information
    console.log('Showing team member:', memberInfo);
    // Implementation for modal display would go here
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initInteractiveElements();
    initNavigation();
    
    // Initialize statistics if elements exist
    if (document.querySelector('.stat-clients')) {
        initStatistics();
    }
    
    // Initialize team interactions if team section exists
    if (document.querySelector('.team-member')) {
        initTeamInteractions();
    }
});

