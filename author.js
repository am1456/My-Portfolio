const bgMusic = document.getElementById('bgMusic');
const clickSound = document.getElementById('clickSound');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

// Function to toggle background music
function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🔇';
        isMusicPlaying = false;
    } else {
        bgMusic.play().catch(e => {
            console.log('Music playback failed:', e);
        });
        musicToggle.textContent = '🔊';
        isMusicPlaying = true;
    }
}

// Function to play click sound
function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => {
        console.log('Click sound failed:', e);
    });
}

// Auto-start music on first user interaction
document.addEventListener('click', function startMusicOnce() {
    if (!isMusicPlaying) {
        bgMusic.play().catch(e => {
            console.log('Auto-play blocked:', e);
        });
        musicToggle.textContent = '🔊';
        isMusicPlaying = true;
    }
    document.removeEventListener('click', startMusicOnce);
}, { once: true });