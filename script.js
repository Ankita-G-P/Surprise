console.log('Script.js is loading!');

/**
 * script.js - Romantic Interactivity
 * Features: Password Lock, Fireworks, Hearts, Modal, Slideshow
 */

// ==========================================
// 🔐 CONFIGURATION - CHANGE THESE SETTINGS
// ==========================================
const CONFIG = {
    password: "ILoveYouGiddi", // CHANGE YOUR PASSWORD HERE ❤️
    introText: "Happy Birthday Mavaa 🤭❤️", // Main greeting
    typingSpeed: 100, // Speed of typing animation (ms)
    // ==========================================
    // 💌 LOVE LETTER - CHANGE YOUR MESSAGE HERE
    // ==========================================
    letterHeading: "My Dearest Mavaa,",
    letterBody: `Every moment with you feels like a dream. On this special day, I wanted to create something as beautiful and magical as you are. You are the most beautiful part of my life ❤️.`,
    // ==========================================
    // 🎁 GIFT BOXES - CHANGE YOUR MESSAGES HERE
    // ==========================================
    giftBoxes: [
        {
            title: "First Memory 💝",
            date: "2023-01-15",
            message: "The day we met - my life changed forever",
            media: ["box1.mp4.mp4", "box2.jpeg.jpeg"],
            mediaType: ["video", "image"]
        },
        {
            title: "Our First Date 🌹",
            date: "2023-02-14", 
            message: "Valentine's Day with you was perfect",
            media: ["box3.mp4.mp4", "box4.jpeg.jpeg"],
            mediaType: ["video", "image"]
        },
        {
            title: "Birthday Surprise 🎂",
            date: "2023-06-10",
            message: "Making your birthday special is my favorite thing",
            media: ["box5.jpeg.jpeg", "box6.jpeg.jpeg"],
            mediaType: ["image", "image"]
        },
        {
            title: "Anniversary Magic ✨",
            date: "2023-09-20",
            message: "Every anniversary with you is better than the last",
            media: ["box7.jpeg.jpeg", "box8.jpeg.jpeg"],
            mediaType: ["image", "image"]
        },
        {
            title: "Future Dreams 🌟",
            date: "2024-01-01",
            message: "I can't wait to spend every future birthday with you",
            media: ["box9.mp4.mp4"],
            mediaType: ["video"]
        }
    ],
    // ==========================================
    // 📅 TIMELINE MEMORIES - CHANGE YOUR MEMORIES HERE
    // ==========================================
    timelineData: [
        {
            date: "January 15, 2023",
            title: "The Day We Met 💕",
            text: "I still remember the first time I saw you. Everything changed in that moment.",
            icon: "💝",
            media: "timeline1.mp4.mp4",
            mediaType: "video",
            autoPlay: true
        },
        {
            date: "February 14, 2023", 
            title: "Our First Valentine 🌹",
            text: "You made this day magical. Your smile, your laugh - everything perfect.",
            icon: "💕",
            media: "timeline2.jpeg.jpeg",
            mediaType: "image"
        },
        {
            date: "May 10, 2023",
            title: "Birthday Surprise 🎂", 
            text: "Seeing you happy on your birthday is the best gift I could ever receive.",
            icon: "🎁",
            media: "timeline3.jpeg.jpeg",
            mediaType: "image"
        },
        {
            date: "September 20, 2023",
            title: "Anniversary Magic ✨",
            text: "Every moment with you feels like magic. Thank you for everything.",
            icon: "💖",
            media: "timeline4.jpeg.jpeg", 
            mediaType: "image"
        },
        {
            date: "December 25, 2023",
            title: "Christmas Together 🎄",
            text: "The best Christmas gift is being with you.",
            icon: "🎅",
            media: "timeline5.jpeg.jpeg",
            mediaType: "image"
        },
        {
            date: "January 1, 2024",
            title: "New Year Together 🎊",
            text: "Starting the new year with you - couldn't ask for more.",
            icon: "🌟",
            media: "timeline6.jpeg.jpeg",
            mediaType: "image"
        }
    ],
    // ==========================================
    // 🎶 BACKGROUND MUSIC - CHANGE YOUR SONG HERE
    // ==========================================
    musicFile: "music4.mp3.mp3" // Change this to your music file
};

// ==========================================
// 🎇 TYPEWRITER EFFECT
// ==========================================
function typeEffect(element, text, speed = 50, callback = null) {
    if (!element) return;
    element.textContent = "";
    let i = 0;
    
    const typeChar = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        } else if (callback) {
            callback();
        }
    };
    
    typeChar();
}

// ==========================================
// 🎁 GIFT BOXES RENDERING
// ==========================================
function renderGiftBoxes() {
    const giftContainer = document.getElementById('giftContainer');
    if (!giftContainer) return;

    let html = '';
    CONFIG.giftBoxes.forEach((gift, index) => {
        html += `
            <div class="gift-box" data-index="${index}">
                <div class="gift-box-content">
                    <div class="gift-icon">🎁</div>
                    <h3>${gift.title}</h3>
                    <span class="gift-date">${gift.date}</span>
                </div>
            </div>
        `;
    });
    giftContainer.innerHTML = html;

    // Add click events
    document.querySelectorAll('.gift-box').forEach(box => {
        box.addEventListener('click', function() {
            const index = this.dataset.index;
            openModal(CONFIG.giftBoxes[index]);
        });
    });
}

// ==========================================
// 🎨 MODAL FUNCTIONALITY
// ==========================================
function closeModal() {
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.classList.remove('active');
        stopSlideshow();
    }
}

// Add close button functionality
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});

// ==========================================
// 🎬 MEDIA HTML GENERATOR
// ==========================================
function getMediaHTML(src, type, className = '', autoPlay = false) {
    if (!src) return '';
    
    const mediaClass = className ? `class="${className}"` : '';
    const autoplayAttr = autoPlay ? 'autoplay muted playsinline' : '';
    const controlsAttr = type === 'video' ? 'controls' : '';
    
    if (type === 'video') {
        return `<video ${mediaClass} ${autoplayAttr} ${controlsAttr} loop>
                    <source src="${src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
    } else if (type === 'image') {
        return `<img ${mediaClass} src="${src}" alt="Memory" loading="lazy">`;
    }
    return '';
}

// ==========================================
// 📱 SLIDE NAVIGATION
// ==========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.section');
let isTransitioning = false;

function showSlide(index) {
    if (isTransitioning || index < 0 || index >= slides.length) return;
    
    isTransitioning = true;
    
    // Hide current slide
    slides[currentSlide].classList.remove('active', 'slide-current');
    slides[currentSlide].classList.add('slide-previous');
    
    // Show new slide
    currentSlide = index;
    slides[currentSlide].classList.remove('slide-previous', 'slide-next');
    slides[currentSlide].classList.add('active', 'slide-current');
    
    // Update other slides
    slides.forEach((slide, i) => {
        if (i < currentSlide) {
            slide.classList.add('slide-previous');
            slide.classList.remove('slide-next', 'active');
        } else if (i > currentSlide) {
            slide.classList.add('slide-next');
            slide.classList.remove('slide-previous', 'active');
        }
    });
    
    setTimeout(() => {
        isTransitioning = false;
    }, 800);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// ==========================================
// 🎯 SLIDE INITIALIZATION
// ==========================================
function initSlidePages() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left
            } else {
                prevSlide(); // Swipe right
            }
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
}

// ==========================================
// 🎆 SLIDESHOW FOR MODAL
// ==========================================
let currentModalSlide = 0;
let modalSlides = [];

function showModalSlide(index) {
    if (!modalSlides.length) return;
    
    modalSlides[currentModalSlide].classList.remove('active');
    currentModalSlide = (index + modalSlides.length) % modalSlides.length;
    modalSlides[currentModalSlide].classList.add('active');
}

function nextModalSlide() {
    showModalSlide(currentModalSlide + 1);
}

function prevModalSlide() {
    showModalSlide(currentModalSlide - 1);
}

// ==========================================
// 🎁 GIFT BOXES CLICK HANDLERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const giftBoxes = document.querySelectorAll('.gift-box');
    const modal = document.getElementById('giftModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-modal');
    
    giftBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const index = this.dataset.index;
            const giftData = CONFIG.giftBoxes[index];
            
            // Create modal content
            let mediaHTML = '';
            giftData.media.forEach((media, idx) => {
                mediaHTML += getMediaHTML(media, giftData.mediaType[idx], 'modal-slide', idx === 0);
            });
            
            modalBody.innerHTML = `
                <div class="modal-slideshow">
                    ${mediaHTML}
                </div>
                <div class="modal-info">
                    <h3>${giftData.title}</h3>
                    <span class="modal-date">${giftData.date}</span>
                    <p>${giftData.message}</p>
                </div>
            `;
            
            modal.classList.add('active');
            modalSlides = document.querySelectorAll('.modal-slide');
            currentModalSlide = 0;
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
});

// ==========================================
// 🎇 FIREWORKS & PARTICLE SYSTEM
// ==========================================
let fireworks = {
    canvas: null,
    ctx: null,
    particles: [],
    burst: function(x, y) {
        if (x !== undefined && y !== undefined) {
            this.createFirework(x, y);
        } else {
            for(let i=0; i<5; i++) {
                this.createFirework(
                    Math.random() * this.canvas.width,
                    Math.random() * this.canvas.height
                );
            }
        }
    },
    createFirework: function(x, y) {
        const colors = ['#ff4d6d', '#ff85a1', '#ffb3c1', '#ffffff', '#ffd700'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        for(let i=0; i<30; i++) {
            this.particles.push(new Particle(x, y, color));
        }
    }
};

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.velocity = {
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 8
        };
        this.life = 100;
        this.opacity = 1;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // Occasionally draw heart instead of circle
        if (Math.random() > 0.95) {
            this.drawHeart(ctx, this.x, this.y, this.size * 2);
        } else {
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
    }

    drawHeart(ctx, x, y, size) {
        ctx.moveTo(x, y + size / 4);
        ctx.quadraticCurveTo(x, y, x + size / 2, y);
        ctx.quadraticCurveTo(x + size, y, x + size, y + size / 4);
        ctx.quadraticCurveTo(x + size, y + size / 2, x + size / 2, y + size * 0.75);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x - size / 2, y + size * 0.75);
        ctx.quadraticCurveTo(x - size, y + size / 2, x - size, y + size / 4);
        ctx.quadraticCurveTo(x - size, y, x - size / 2, y);
        ctx.quadraticCurveTo(x, y, x, y + size / 4);
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.life -= 1.5;
        this.opacity = this.life / 100;
    }
}

function initCanvas() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    fireworks.canvas = canvas;
    fireworks.ctx = ctx;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background floating hearts rarely
        if (Math.random() < 0.03) {
            const x = Math.random() * canvas.width;
            const y = canvas.height + 10;
            const p = new Particle(x, y, '#ff4d6d');
            p.velocity.y = -(Math.random() * 2 + 1);
            p.velocity.x = (Math.random() - 0.5) * 1;
            fireworks.particles.push(p);
        }

        fireworks.particles.forEach((p, index) => {
            p.update();
            p.draw(ctx);
            if (p.life <= 0) {
                fireworks.particles.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Occasional bursts
    setInterval(() => {
        if (!document.getElementById('lockScreen').classList.contains('active')) {
            if (Math.random() < 0.2) fireworks.burst();
        }
    }, 3000);
}

// ==========================================
// ✨ SPARKLE CURSOR EFFECT
// ==========================================
function initSparkleCursor() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.1) {
            const sparkle = document.createElement('div');
            sparkle.className = 'cursor-sparkle';
            sparkle.innerHTML = '✨';
            sparkle.style.left = e.pageX + 'px';
            sparkle.style.top = e.pageY + 'px';
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    });
}

// ==========================================
// 🚀 INITIALIZATION
// ==========================================
function init() {
    console.log('Initializing application...');
    initLockScreen();
    renderTimeline();
    renderLetterAndFooter();
    initSlidePages();
    initGiftBoxes();
    initCanvas();
    console.log('Application initialized!');
}

// ==========================================
// 🔐 LOCK SCREEN & PASSWORD
// ==========================================
function initLockScreen() {
    console.log('Initializing lock screen...');
    const unlockBtn = document.getElementById('unlockBtn');
    const passwordInput = document.getElementById('passwordInput');
    const lockScreen = document.getElementById('lockScreen');
    const mainContent = document.getElementById('mainContent');
    const errorMessage = document.getElementById('errorMessage');
    const bgMusic = document.getElementById('bgMusic');
    
    console.log('Elements found:', {
        unlockBtn: !!unlockBtn,
        passwordInput: !!passwordInput,
        lockScreen: !!lockScreen,
        mainContent: !!mainContent,
        errorMessage: !!errorMessage,
        bgMusic: !!bgMusic
    });

    const handleUnlock = () => {
        console.log('Password entered:', passwordInput.value);
        console.log('Expected password:', CONFIG.password);
        console.log('Comparison:', passwordInput.value.toLowerCase(), '===', CONFIG.password.toLowerCase());
        
        if (passwordInput.value.toLowerCase() === CONFIG.password.toLowerCase()) {
            // Success
            console.log('Password correct - unlocking...');
            lockScreen.classList.remove('active');
            mainContent.classList.add('active');
            
            // Try playing music (Browsers require interaction)
            bgMusic.play().catch(e => console.log("Audio autoplay prevented. Interaction needed."));
            
            // Trigger initial fireworks
            fireworks.burst();
        } else {
            // Error
            errorMessage.textContent = "Incorrect Password 💔";
            errorMessage.style.display = "block";
            passwordInput.value = "";
            passwordInput.classList.add('shake');
            setTimeout(() => passwordInput.classList.remove('shake'), 400);
        }
    };

    if (unlockBtn) {
        console.log('Adding click event listener to unlock button...');
        unlockBtn.addEventListener('click', handleUnlock);
    } else {
        console.error('Unlock button not found!');
    }
    
    if (passwordInput) {
        console.log('Adding keypress event listener to password input...');
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleUnlock();
        });
    } else {
        console.error('Password input not found!');
    }
}

// ==========================================
// 🎬 ANIMATION TRIGGERS
// ==========================================
function triggerSlideAnimation(slideId) {
    const slide = document.getElementById(slideId);
    if (slide) {
        slide.classList.add('active');
    }
}

// ==========================================
// 💌 LETTER & FOOTER RENDERING
// ==========================================
function renderLetterAndFooter() {
    const heading = document.getElementById('letterHeading');
    const body = document.getElementById('letterBody');
    const intro = document.getElementById('introText');
    
    if (heading) {
        typeEffect(heading, CONFIG.letterHeading, 80);
    }
    
    if (body) {
        setTimeout(() => {
            typeEffect(body, CONFIG.letterBody, 50);
        }, 2000);
    }
    
    if (intro) {
        typeEffect(intro, CONFIG.introText, 100);
    }
}

// ==========================================
// 📅 TIMELINE RENDERING
// ==========================================
function renderTimeline() {
    const timelineContainer = document.getElementById('dynamicTimeline');
    if (!timelineContainer) return;

    let html = '';
    CONFIG.timelineData.forEach((item, index) => {
        html += `
            <section class="section slide-down timeline-slide">
                <div class="container">
                    <h2 class="section-title">Memory #${index + 1}</h2>
                    <div class="timeline-single-card glass">
                        <div class="timeline-dot-large">${item.icon}</div>
                        <span class="date">${item.date}</span>
                        <h4>${item.title}</h4>
                        <div class="timeline-img-container large">
                            ${getMediaHTML(item.media, item.mediaType, '', item.autoPlay !== false)}  
                        </div>
                        <p class="memory-text">${item.text}</p>
                    </div>
                </div>
            </section>
        `;
    });
    timelineContainer.innerHTML = html;
}

// ==========================================
// 🎁 GIFT BOXES RENDERING
// ==========================================
function initGiftBoxes() {
    const giftContainer = document.getElementById('giftContainer');
    if (!giftContainer) return;

    let html = '';
    CONFIG.giftBoxes.forEach((gift, index) => {
        html += `
            <div class="gift-box" data-index="${index}">
                <div class="gift-box-content">
                    <div class="gift-icon">🎁</div>
                    <h3>${gift.title}</h3>
                    <span class="gift-date">${gift.date}</span>
                </div>
            </div>
        `;
    });
    giftContainer.innerHTML = html;

    // Add click events
    document.querySelectorAll('.gift-box').forEach(box => {
        box.addEventListener('click', function() {
            const index = this.dataset.index;
            openModal(CONFIG.giftBoxes[index]);
        });
    });
}

// ==========================================
// 🎨 MODAL FUNCTIONALITY
// ==========================================
function openModal(data) {
    const modal = document.getElementById('giftModal');
    const modalBody = document.getElementById('modalBody');
    
    // Create Modal HTML
    let mediaSlides = "";
    data.media.forEach((item, idx) => {
        mediaSlides += `
            <div class="slide ${idx === 0 ? 'active' : ''}">
                ${getMediaHTML(item.src, item.type, '', idx === 0)}
            </div>
        `;
    });

    modalBody.innerHTML = `
        <div class="slideshow-container">
            ${mediaSlides}
        </div>
        <div class="modal-info">
            <h3 class="modal-title">${data.title}</h3>
            <span class="modal-date">${data.date}</span>
            <p class="modal-message">${data.message}</p>
        </div>
    `;

    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// ==========================================
// 🎆 SLIDESHOW CONTROLS
// ==========================================
let slideshowInterval;

function startSlideshow() {
    stopSlideshow();
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    slideshowInterval = setInterval(() => {
        // Pause video in current slide if it exists
        const currentVideo = slides[currentSlide].querySelector('video');
        if (currentVideo) currentVideo.pause();

        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');

        // Play video in new slide if it exists
        const nextVideo = slides[currentSlide].querySelector('video');
        if (nextVideo) nextVideo.play().catch(e => console.log("Autoplay blocked"));
    }, 4000); // 4 seconds for slideshow
}

function stopSlideshow() {
    if (slideshowInterval) clearInterval(slideshowInterval);
}

// ==========================================
// 🎇 INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', init);

// Initialize sparkle cursor
initSparkleCursor();
