console.log('Script.js is loading!');

const CONFIG = {
    password: "ILoveYouGiddi",
    introText: "Happy Birthday Mavaa 🤭❤️",
    letterHeading: "My Dearest Mavaa,",
    letterBody: "Every moment with you feels like a dream. On this special day, I wanted to create something as beautiful and magical as you are. You are the most beautiful part of my life ❤️."
};

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
            console.log('Password correct - unlocking...');
            lockScreen.classList.remove('active');
            mainContent.classList.add('active');
            
            bgMusic.play().catch(e => console.log("Audio autoplay prevented."));
            
            // Simple celebration
            document.body.style.backgroundColor = '#ff4d6d';
            setTimeout(() => {
                document.body.style.backgroundColor = '';
            }, 1000);
        } else {
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

function init() {
    console.log('Initializing application...');
    initLockScreen();
    renderLetterAndFooter();
    console.log('Application initialized!');
}

document.addEventListener('DOMContentLoaded', init);
