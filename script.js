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
    letterHeading: "My Dearest...💞", 
    letterBody: [
        "This is my first time letter baritirod pls enara tapp idra hotti nag hako,nang heng start madbek anta gott agvalth actually en gotta eed ontara hosa experience ni nann life nag bandag inda na est kushi agi iden anta words nag express madlik agalla eno ontara beautifull feel. Nange ninn bagge ellanu ista ni nann mel preeti torso reeti,ninn care,ninn restrictions,nin sann vishya nu nenap itkolo reeti,nin este sitt nag idru na ning este sitt barsidru nang baidre tadkolalla na anta control madkoti ala ella andra ella ista.yen madod ond sala ninn mado restrictions ig ninu yedrig sikkag hakond hodibek anastad🤪but adu nann olledakke anta arta agi sumne agbidteni.Nin bari nann hudga aste ala you are my comfort zone,you are my safe place,you are my everything🌎.Thankyou for taking care of me,thankyou for being with me,thankyou nann istond sahiskolodak nanu ning baal hurt madeni yen yenara baideni,matadeni ning yest sidi sidi madteni,na niddi kannago atva gotto gottildeno baal hurt madeni ning yelladakku sorry🥺,and adnella sahiskond nann jote iddidak thankyou very much😇.and I know ning nann joti preeti inda matado kina nang irritate madodrinda kaadod drinda na kushi anta🙄but its ok yello ond kade adu nangu ista😉.Thankyou nann hantakina ista pattiddak,nan nann kanas nagu ankondirlilla nanu obanna istond hacchkoteni love madteni anta ivella beda anta idar sahavasa beda hinta hucchata ella beda anta nann paadig idde na hantakig ee tara tali kedsi sari illa le ni nang beda nin too nind hate you chinna🥺😘You are my forever favourite ◖ıɐɹʎMıןʞ i always want my favourite🍫.Innu baal helod ada na but idrag agalla adka yedrig sikkag helteni ok na ivag jasti tali tinnalla togo na ning yenu kelkolalla nang yenu beda ninn inda just nang ninn preeti,ninn care,ninn time iste kodu sak bere enu kelalla plss nanna vatta bitt kodbeda yavaglu nann joti hinga iru plss🥺.Love you so much forever and ever..😘❤️",
        "From your Giddi❤️"                      
    ],
    // ==========================================
    // 💖 FOOTER - CHANGE YOUR FINAL WORDS HERE
    // ==========================================
    footerMessages: [
        "I love you more than words can express. Lets create memories together forever take this journey to the infinity and lets become success together❤️💖",
        "I Love You Always and Forever💝."
    ],
    // ==========================================
    // 💕 TIMELINE - CHANGE YOUR MEMORIES HERE
    // ==========================================
    timelineData: [
        {
            date: "Jan 29, 2025",
            title: "First Meet 🌸",
            text: "The day the stars aligned and I first saw your beautiful smile.",
            icon: "🌸",
            media: "timeline1.mp4.mp4", // Path to photo or video
            mediaType: "video", // "photo" or "video"
            autoPlay: true // Whether to autoplay if video
        },
        {
            date: "Aug 16, 2025",
            title: "First Photo 📸",
            text: "Our very first selfie together. We looked so nervous yet happy!",
            icon: "📸",
            media: "timeline2.jpeg.jpeg",
            mediaType: "photo",
            autoPlay: true
        },
        {
            date: "Apr 25, 2026",
            title: "First Trip ✈️", 
            text: "Our first adventure together. Exploring new places with you is my favorite thing.",
            icon: "✈️",
            media: "timeline3.jpeg.jpeg",
            mediaType: "photo",
            autoPlay: true
        },
        {
            date: "Jan 02, 2026",
            title: "First Date ❤️",
            text: "A magical evening that I wish I could live over and over again.",
            icon: "❤️",
            media: "timeline4.jpeg.jpeg",
            mediaType: "photo",
            autoPlay: true
        },
        {
            date: "No date",
            title: "Favorite Memory 💫",
            text: "Walking through the beach, feeling the world belonged to just us.",
            icon: "💫",
            media: "timeline5.jpeg.jpeg",
            mediaType: "photo",
            autoPlay: true
        },
        {
            date: "Everyday",
            title: "First Long Call 🌙",
            text: "Hours turning into minutes when we talk about everything and nothing.",
            icon: "🌙",
            media: "timeline6.jpeg.jpeg",
            mediaType: "photo",
            autoPlay: true
        }
    ],
    // ==========================================
    // 🎁 GIFTS - CHANGE YOUR SURPRISE CONTENT HERE
    // ==========================================
    giftData: {
        "1": {
            title: "The First Time We Met 🌸",
            date: "AThat day",
            message: "I still remember the butterflies in my stomach. That day changed my world forever.",
            media: [
                { src: "box1.mp4.mp4", type: "video" },
                { src: "box2.jpeg.jpeg", type: "photo" }
            ] 
        },
        "2": {
            title: "Adventure Time ✈️", 
            date: "Always",           
            message: "Every trip with you is a new chapter in our beautiful story. I love exploring the world by your side.",
            media: [
                { src: "box3.mp4.mp4", type: "video" },
                { src: "box4.jpeg.jpeg", type: "photo" }
            ]
        },
        "3": {
            title: "Sweet Moments 🍰", 
            date: "Always",           
            message: "It's the little things—the way you laugh, the way you hold my hand. You make everything sweeter.",
            media: [
                { src: "box5.jpeg.jpeg", type: "photo" },
                { src: "box6.jpeg.jpeg", type: "photo" }
            ]
        },
        "4": {
            title: "Dancing Under Stars ✨",
            date: "Always",           
            message: "If I could stop time, I'd stop it right in those moments when it's just you and me.",
            media: [
                { src: "box7.jpeg.jpeg", type: "photo" }
            ]
        },
        "5": {
            title: "Our Evenings ☕",   
            date: "Everyday",         
            message: "Spending whole day knowing you're in my life is the greatest gift I've ever received.",
            media: [
                { src: "box8.jpeg.jpeg", type: "photo" }
            ]
        },
        "6": {
            title: "The Best is Yet to Come 💍",
            date: "Always",
            message: "I can't wait to spend my whole life celebrate it together. I love you forever.",
            media: [
                { src: "box9.mp4.mp4", type: "video" }
            ]
        }
    }
};

// ==========================================
// 🚀 SLIDE-BASED NAVIGATION
// ==========================================
let currentSlideIndex = 0;
let isScrolling = false;
let touchStartY = 0;

function initSlidePages() {
    const slides = document.querySelectorAll('.section');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    // Navigation Buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlideIndex < slides.length - 1) goToSlide(currentSlideIndex + 1);
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlideIndex > 0) goToSlide(currentSlideIndex - 1);
        });
    }

    updateNavButtons();

    // Mouse Wheel / Scroll
    window.addEventListener('wheel', (e) => {
        if (isScrolling || !document.getElementById('mainContent').classList.contains('active')) return;
        
        const activeSection = slides[currentSlideIndex];
        // More lenient scroll check for better navigation
        const scrollBottom = activeSection.scrollTop + activeSection.clientHeight;
        const isAtBottom = scrollBottom >= activeSection.scrollHeight - 10;
        const isAtTop = activeSection.scrollTop <= 10;

        if (e.deltaY > 20 && currentSlideIndex < slides.length - 1) {
            if (isAtBottom) goToSlide(currentSlideIndex + 1);
        } else if (e.deltaY < -20 && currentSlideIndex > 0) {
            if (isAtTop) goToSlide(currentSlideIndex - 1);
        }
    }, { passive: true });

    // Touch events for mobile
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    window.addEventListener('touchend', (e) => {
        if (isScrolling || !document.getElementById('mainContent').classList.contains('active')) return;
        
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchStartY - touchEndY;

        const activeSection = slides[currentSlideIndex];
        const scrollBottom = activeSection.scrollTop + activeSection.clientHeight;
        const isAtBottom = scrollBottom >= activeSection.scrollHeight - 10;
        const isAtTop = activeSection.scrollTop <= 10;

        if (deltaY > 40 && currentSlideIndex < slides.length - 1) {
            if (isAtBottom) goToSlide(currentSlideIndex + 1);
        } else if (deltaY < -40 && currentSlideIndex > 0) {
            if (isAtTop) goToSlide(currentSlideIndex - 1);
        }
    });
}

function updateNavButtons() {
    const slides = document.querySelectorAll('.section');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (prevBtn) {
        if (currentSlideIndex === 0) prevBtn.classList.add('disabled');
        else prevBtn.classList.remove('disabled');
    }

    if (nextBtn) {
        if (currentSlideIndex === slides.length - 1) nextBtn.classList.add('disabled');
        else nextBtn.classList.remove('disabled');
    }
}

function goToSlide(index) {
    if (index === currentSlideIndex || isScrolling) return;
    
    const slides = document.querySelectorAll('.section');
    
    isScrolling = true;
    
    // Direction
    const direction = index > currentSlideIndex ? 'down' : 'up';
    
    // Set old slide
    const oldSlide = slides[currentSlideIndex];
    oldSlide.classList.remove('active', 'slide-current', 'slide-up', 'slide-down');
    oldSlide.classList.add(direction === 'down' ? 'slide-up' : 'slide-down');
    
    // Set new slide
    currentSlideIndex = index;

    // Update Button States
    updateNavButtons();

    // Trigger animations for specific slides
    triggerSlideAnimation(slides[currentSlideIndex].id);

    // Manage Media Playback in Slides
    slides.forEach((slide, i) => {
        const video = slide.querySelector('video');
        if (video) {
            if (i === index) {
                video.currentTime = 0;
                video.play().catch(e => console.log("Autoplay blocked"));
            } else {
                video.pause();
            }
        }
    });

    const newSlide = slides[currentSlideIndex];
    newSlide.classList.remove('slide-up', 'slide-down', 'slide-current');
    
    // Position incoming slide before animating (Slide Down = From Right, Slide Up = From Left)
    newSlide.classList.add(direction === 'down' ? 'slide-down' : 'slide-up');
    
    // Small timeout for class processing
    setTimeout(() => {
        newSlide.classList.remove('slide-up', 'slide-down');
        newSlide.classList.add('active', 'slide-current');
    }, 50);

    // Debounce scroll
    setTimeout(() => {
        isScrolling = false;
    }, 1000);
}

// ==========================================
// 🎞️ MEDIA RENDER HELPER
// ==========================================
function getMediaHTML(src, type, className = '', autoPlay = true) {
    if (type === 'video') {
        return `
            <video 
                src="${src}" 
                class="${className}" 
                ${autoPlay ? 'autoplay' : ''} 
                loop 
                muted 
                playsinline
            ></video>
        `;
    }
    return `
        <img 
            src="${src}" 
            class="${className}" 
            alt="Memory" 
            onerror="this.src='https://placehold.co/600x400?text=Photo+Missing'"
        >
    `;
}

// ==========================================
// 🚀 INITIALIZATION
// ==========================================
function init() {
    initLockScreen();
    renderTimeline();
    renderLetterAndFooter();
    initSlidePages();
    initGiftBoxes();
    initCanvas();
}
document.addEventListener('DOMContentLoaded', init);

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
            // Note: Replace with your actual music file in index.html
            bgMusic.play().catch(e => console.log("Audio autoplay prevented. Interaction needed."));
            
            // Start Intro Animation
            triggerSlideAnimation('intro');
            
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
// 🎇 TYPEWRITER EFFECT
// ==========================================
function typeEffect(element, text, speed = 50, callback = null) {
    if (!element) return;
    element.textContent = "";
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Map of slides to their typing elements and content
const animatedSlides = {
    'intro': {
        elementId: 'introText',
        getText: () => CONFIG.introText,
        speed: CONFIG.typingSpeed
    },
    'message': {
        elementId: 'letterHeading',
        getText: () => CONFIG.letterHeading,
        speed: 80,
        next: {
            elementId: 'letterBody',
            getText: () => CONFIG.letterBody.join('\n\n'),
            speed: 30
        }
    },
    'closing': {
        elementId: 'footerContainer',
        getText: () => CONFIG.footerMessages.join(' '),
        speed: 80
    }
};

function triggerSlideAnimation(slideId) {
    const config = animatedSlides[slideId];
    if (!config) return;

    const element = document.getElementById(config.elementId);
    if (!element) return;

    // Don't re-animate if already animated (optional, but requested to have it appear like first slide)
    // Clear and re-animate for fresh cinematic feel
    typeEffect(element, config.getText(), config.speed, () => {
        if (config.next) {
            const nextElement = document.getElementById(config.next.elementId);
            typeEffect(nextElement, config.next.getText(), config.next.speed);
        }
    });
}

// ==========================================
// 🎁 GIFT BOXES & MODAL
// ==========================================
function initGiftBoxes() {
    const giftBoxes = document.querySelectorAll('.gift-box');
    const modal = document.getElementById('giftModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-modal');

    giftBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const giftId = box.getAttribute('data-gift');
            const data = CONFIG.giftData[giftId];
            
            if (data) {
                // Add opening animation
                box.classList.add('opening');
                
                // Trigger celebratory noise/burst at box position
                const rect = box.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                if (fireworks && typeof fireworks.burst === 'function') {
                    fireworks.burst(centerX, centerY);
                }

                // Wait for animation to finish before opening modal
                setTimeout(() => {
                    openModal(data);
                    box.classList.remove('opening');
                }, 600);
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        stopSlideshow();
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            stopSlideshow();
        }
    });
}

let slideshowInterval;

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
    
    if (data.media.length > 1) {
        startSlideshow();
    }
}

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
// 💕 RENDER TIMELINE (Individual Slides)
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
// 💌 RENDER LETTER & FOOTER
// ==========================================
function renderLetterAndFooter() {
    // Initial content clearing for typing effect compatibility
    const heading = document.getElementById('letterHeading');
    const body = document.getElementById('letterBody');
    const footer = document.getElementById('footerContainer');

    if (heading) heading.textContent = "";
    if (body) body.textContent = "";
    if (footer) footer.textContent = "";
}

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

// Add these styles dynamically or put in style.css
// I'll add them to style.css in the next step or here
initSparkleCursor();

/*Every moment with you feels like a dream. On this special day, I wanted to create something as beautiful and magical as you are. You are the most beautiful part of my life ❤️.
