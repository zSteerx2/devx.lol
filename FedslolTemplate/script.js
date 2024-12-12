// Website template by https://github.com/Pathetic420
document.addEventListener('DOMContentLoaded', function() {
    var clickToEnter = document.getElementById('click-to-enter');
    var background = document.querySelector('.background');
    var video = document.querySelector('video');
    var audio = document.querySelector('audio');
    var muteButton = document.getElementById('mute-button');

    clickToEnter.addEventListener('click', function() {
        clickToEnter.style.display = 'none';
        background.style.display = 'block';
    });

    const startPlayback = () => {
        if (video) video.play();
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                audio.loop = true;
                audio.volume = 0.2;
                document.removeEventListener('click', startPlayback);
            }).catch(error => {
                console.log('Autoplay was prevented:', error);
            });
        }
    };

    document.addEventListener('click', startPlayback);

    muteButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            muteButton.classList.remove('muted');
        } else {
            audio.pause();
            muteButton.classList.add('muted');
        }
    });
});