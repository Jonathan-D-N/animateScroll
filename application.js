let vid = document.getElementById('Video1');

vid.onpause();

window.onscroll = function() {
    vid.pause();
};