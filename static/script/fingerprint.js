let $fingerprint = document.querySelector('.mod-detail .fingerprint');
let $mod_intro = document.querySelector('.mod-intro');
let $webgl = $mod_intro.querySelector('.webgl');
let $canvas = $mod_intro.querySelector('.canvas');
let $font = $mod_intro.querySelector('.font');
let $audio = $mod_intro.querySelector('.audio');

let formatPanel = function(info){
    $fingerprint.querySelector('.value').innerHTML = info.value;
    $webgl.innerHTML = info.webgl;
    $canvas.innerHTML = info.canvas;
    $font.innerHTML = info.font;
    $audio.innerHTML = info.audio;
};

browser.getFingerprint().then(formatPanel);