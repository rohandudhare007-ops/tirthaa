// ===================================
// Scroll to Section
// ===================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===================================
// Music Toggle
// ===================================

const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
const musicText = document.getElementById("musicText");

let isPlaying = false;

musicToggle.addEventListener("click", () => {
    if (!isPlaying) {
        bgMusic.play();
        musicText.textContent = "Pause";
        isPlaying = true;
    } else {
        bgMusic.pause();
        musicText.textContent = "Music";
        isPlaying = false;
    }
});



// ===================================
// Heart Cursor Trail
// ===================================
let lastHeartTime = 0;
const hearts = ['❤️', '💖', '💕', '💗'];

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart-trail';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${Math.random() * 14 + 12}px`;
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1200);
}

document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastHeartTime > 100) {
        createHeart(e.clientX, e.clientY);
        lastHeartTime = now;
    }
});

// ===================================
// Floating Particles
// ===================================
function createFloatingParticles() {
    const containers = document.querySelectorAll('.floating-particles');
    
    containers.forEach(container => {
        const count = 20;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.textContent = '✨';
            particle.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                font-size: ${Math.random() * 12 + 8}px;
                animation: twinkle ${Math.random() * 2 + 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
                pointer-events: none;
            `;
            container.appendChild(particle);
        }
    });
}

// ===================================
// Animated Waves
// ===================================
function createAnimatedWaves() {
    const wavesContainer = document.querySelector('.animated-waves');
    if (!wavesContainer) return;
    
    wavesContainer.innerHTML = `
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
                d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" 
                fill="rgba(133, 193, 233, 0.3)"
                class="animate-wave"
            />
        </svg>
        <svg style="position: absolute; bottom: 0; left: 0;" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
                d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z" 
                fill="rgba(93, 173, 226, 0.4)"
                class="animate-wave"
                style="animation-delay: 0.5s;"
            />
        </svg>
    `;
}

// ===================================
// Intersection Observer for Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// ===================================
// Initialize Scroll Animations
// ===================================
function initScrollAnimations() {
    // Sunflower photos
    const sunflowerPhotos = document.querySelectorAll('.sunflower-photo');
    sunflowerPhotos.forEach((photo, index) => {
        photo.style.opacity = '0';
        photo.style.transform = 'translateY(100px)';
        photo.style.transition = `all 0.8s ease ${index * 0.1}s`;
        animateOnScroll.observe(photo);
    });
    
    // Ocean photos
    const oceanPhotos = document.querySelectorAll('.ocean-photo');
    oceanPhotos.forEach((photo, index) => {
        photo.style.opacity = '0';
        photo.style.transform = 'translateY(150px)';
        photo.style.transition = `all 0.8s ease ${index * 0.15}s`;
        animateOnScroll.observe(photo);
    });
    
    // Eyes photos
    const eyesPhotos = document.querySelectorAll('.eyes-photo');
    eyesPhotos.forEach((photo, index) => {
        photo.style.opacity = '0';
        photo.style.transform = 'scale(0.8)';
        photo.style.transition = `all 0.8s ease ${index * 0.1}s`;
        animateOnScroll.observe(photo);
    });
    
    // Gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(60px)';
        item.style.transition = `all 0.6s ease ${index * 0.08}s`;
        animateOnScroll.observe(item);
    });
    
    // Love letters
    const loveLetters = document.querySelectorAll('.love-letter');
    loveLetters.forEach((letter, index) => {
        letter.style.opacity = '0';
        letter.style.transform = 'translateY(40px)';
        letter.style.transition = `all 0.6s ease ${index * 0.15}s`;
        animateOnScroll.observe(letter);
    });
    
    // Text sections
    const textSections = document.querySelectorAll('.sunflower-text, .ocean-text, .eyes-text');
    textSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'all 0.8s ease 0.2s';
        animateOnScroll.observe(section);
    });
}

// ===================================
// Footer Functions
// ===================================
function replayJourney() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sharePage() {
    if (navigator.share) {
        navigator.share({ 
            title: 'For Tirtha', 
            text: 'A digital love letter', 
            url: window.location.href 
        }).catch(err => console.log('Share failed:', err));
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

// ===================================
// Parallax Effect
// ===================================
function initParallax() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                // Parallax for decorative sunflowers
                const decorativeSunflowers = document.querySelectorAll('.decorative-sunflower');
                decorativeSunflowers.forEach((sunflower, index) => {
                    const speed = (index + 1) * 0.2;
                    sunflower.style.transform = `translate(${scrolled * speed * 0.05}px, ${scrolled * speed * 0.1}px)`;
                });
                
                // Parallax for floating images
                const floatingImages = document.querySelectorAll('.swan-cat-img');
                floatingImages.forEach((img, index) => {
                    const speed = index === 0 ? 0.15 : 0.25;
                    img.style.transform = `translateY(${scrolled * speed}px)`;
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// ===================================
// Smooth Section Transitions
// ===================================
function initSmoothTransitions() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.6s ease';
        sectionObserver.observe(section);
    });
}

// ===================================
// Dynamic Background Colors
// ===================================
function updateBackgroundOnScroll() {
    const sections = [
        { id: 'hero', color: 'rgba(133, 193, 233, 0.1)' },
        { id: 'sunflower-section', color: 'rgba(244, 208, 63, 0.1)' },
        { id: 'ocean-section', color: 'rgba(133, 193, 233, 0.1)' },
        { id: 'eyes-section', color: 'rgba(215, 189, 226, 0.1)' },
        { id: 'swan-cat-section', color: 'rgba(245, 183, 177, 0.1)' },
        { id: 'forever-section', color: 'rgba(244, 208, 63, 0.1)' },
        { id: 'gallery-section', color: 'rgba(215, 189, 226, 0.1)' },
        { id: 'footer-section', color: 'rgba(254, 249, 231, 0.1)' },
    ];
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = sections.find(s => s.id === entry.target.id);
                if (section) {
                    document.body.style.backgroundColor = section.color;
                }
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
    });
}

// ===================================
// Image Lazy Loading
// ===================================
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    }, { rootMargin: '50px' });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Add Hover Effects to Cards
// ===================================
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ===================================
// Accessibility: Keyboard Navigation
// ===================================
function initAccessibility() {
    const buttons = document.querySelectorAll('.btn, button');
    
    buttons.forEach(btn => {
        btn.setAttribute('tabindex', '0');
        
        btn.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
    
    // Add ARIA labels
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.setAttribute('role', 'img');
        item.setAttribute('aria-label', `Photo of Tirtha - Memory ${index + 1}`);
    });
}

// ===================================
// Performance: Debounce Function
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// Responsive Layout Adjustments
// ===================================
function handleResponsiveLayout() {
    const checkLayout = debounce(() => {
        const width = window.innerWidth;
        
        if (width < 768) {
            // Mobile adjustments
            document.querySelectorAll('.glass-card').forEach(card => {
                card.style.padding = '24px';
            });
        } else {
            // Desktop adjustments
            document.querySelectorAll('.glass-card').forEach(card => {
                card.style.padding = '';
            });
        }
    }, 250);
    
    window.addEventListener('resize', checkLayout);
    checkLayout();
}

// ===================================
// Initialize Page Visibility
// ===================================
function initPageVisibility() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause animations when tab is not visible
            document.querySelectorAll('[style*="animation"]').forEach(el => {
                el.style.animationPlayState = 'paused';
            });
        } else {
            // Resume animations
            document.querySelectorAll('[style*="animation"]').forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
    });
}

// ===================================
// Smooth Scroll Enhancement
// ===================================
function initSmoothScroll() {
    // Add smooth scrolling to all links
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

// ===================================
// Loading Animation
// ===================================
function initLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}

// ===================================
// Add Sparkle Effect on Click
// ===================================
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 20px;
        pointer-events: none;
        z-index: 9999;
        animation: heart-fade 1s ease-out forwards;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') || e.target.classList.contains('glass-card')) {
        createSparkle(e.clientX, e.clientY);
    }
});

// ===================================
// Easter Egg: Konami Code
// ===================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createHeart(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
            }, i * 50);
        }
        konamiCode = [];
    }
});

// ===================================
// Initialize Everything on DOM Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('💕 Tirtha\'s Love Universe - Loaded Successfully!');
    
    // Core initializations
    createFloatingParticles();
    createAnimatedWaves();
    initScrollAnimations();
    initSmoothTransitions();
    
    // Visual effects
    initParallax();
    initCardHoverEffects();
    updateBackgroundOnScroll();
    
    // Performance
    initLazyLoading();
    handleResponsiveLayout();
    
    // Accessibility
    initAccessibility();
    initSmoothScroll();
    
    // Page visibility
    initPageVisibility();
    initLoadingAnimation();
    
    // Add touch support for mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
});

// ===================================
// Service Worker for Offline Support (Optional)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js').then(registration => {
        //     console.log('SW registered:', registration);
        // }).catch(err => {
        //     console.log('SW registration failed:', err);
        // });
    });
}

// ===================================
// Export functions for global use
// ===================================
window.loveUniverse = {
    scrollToSection,
    replayJourney,
    sharePage,
    createHeart,
    createSparkle
};