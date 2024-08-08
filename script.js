function searchVideo() {
    const videoUrl = document.getElementById('videoUrlInput').value;
    if (videoUrl.trim() === "https://github.com/Shineii86/m3u8player/blob/main/resources/ShadowGarden.mp4") {
        // Redirect to your Telegram account
        window.location.href = 'https://telegram.me/Shineii86';
    } else {
        // Proceed with searching the video
        const mergedUrl = 'https://shineii86.github.io/m3u8player/?video=' + encodeURIComponent(videoUrl);
        window.location.href = mergedUrl;
    }
}

const urlParams = new URLSearchParams(window.location.search);
const videoUrl = urlParams.get('video') || 'https://github.com/Shineii86/m3u8player/raw/main/resources/ShadowGarden.mp4';
const videoSource = document.getElementById('video-source');
videoSource.src = videoUrl;

fluidPlayer(
    'my-video',
    {
        layoutControls: {
            primaryColor: "rgba(224, 64, 251, 0.8)",
            allowDownload: true
        }
    }
);
