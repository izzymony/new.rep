document.addEventListener('scroll', () => {
    const reels = document.querySelectorAll('.reel-video');

    reels.forEach(video => {
        const rect = video.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Optional: Play the first video on load
window.addEventListener('load', () => {
    const firstVideo = document.querySelector('.reel-video');
    if (firstVideo) {
        firstVideo.play();
    }
});
