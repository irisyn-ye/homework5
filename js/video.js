var vid

// page load 
window.addEventListener('load', function() {
    vid = document.querySelector('video')
    vid.removeAttribute('autoplay')
});

// play button
document.querySelector('#play').addEventListener('click', function() {
    console.log('Play Video');
    vid.play()
});

// pause button
document.querySelector('#pause').addEventListener('click', function() {
    console.log('Pause Video');
    vid.pause()
});

// slow down
document.querySelector('#slower').addEventListener('click', function() {
    // need to set a range of the speed
    let playspeed = vid.playspeed;
    if (playspeed > 0.5 & playspeed <= 2) {
        playspeed = playspeed / 2;
    }
    // elif (playspeed <= 0.5) {
    //     window.alert("Video is at slowest speed!");
    //     return false;
    // }
    else {
        window.alert("Video is at slowest speed!");
        return false;
    }
});

// speed up
document.querySelector('#faster').addEventListener('click', function() {
    let playspeed = vid.playspeed;
    if (playspeed >= 2) {
        window.alert("Video is at fastest speed!");
        return false;
    }
    else {
        playspeed = playspeed * 2;
    }
});

// skip ahead 
document.querySelector('#skip').addEventListener('click', function() {
    let skiptime = vid.currentTime + 15;
    if (skiptime > vid.duration) {
        vid.currentTime = 0;
    }
    else {
        vid.currentTime = skiptime;
    }
});

// mute
document.querySelector('#mute').addEventListener('click', function() {
    if (vid.muted) {
        document.querySelector('#mute').innerHTML = 'Mute';
        vid.muted = false;
    }
    else {
        document.querySelector('#mute').innerHTML = 'Unmute';
        vid.muted = true;
    }
});

// volume slider 
document.querySelector('#slider').addEventListener('click', function() {
    let vol = document.getElementById('slider').value;
    document.querySelector('#volume').innerHTML = vol;
})