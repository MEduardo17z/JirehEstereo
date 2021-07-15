//Create Elements ...

const ap_html = '<style>.ap_container{display:inline-block;text-align:center;overflow:hidden;background:transparent;border-radius:4px;transition:all 1s}.ap_controls{width:100%;display:flex;position:relative;flex-direction:row;font-size:large;font-family:Tahoma,Geneva,Verdana,sans-serif;cursor:pointer}.ap_controls span{margin:5px;display:inline-block}.ap_container .playpausebtn{border-radius:50%;font-size:larger}.ap_container svg{width:50px;height:50px;} @media (max-width: 500px){.ap_container svg{width:40px;height:40px;} } .ap_controls .duration{width:80%;margin-right:10px;bottom:4px;display:flex;align-items: center;}.ap_controls input[type=range]{-webkit-appearance:none;width:100%;outline:0;height:2px;margin:0 15px;background:#fff}.ap_controls:hover input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;cursor:pointer;background:#00ced1}.ap_controls input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:0}.ap_sound{padding:4px}.ap_time{margin:4px}</style><div class="ap_container"> <div class="ap_controls"> <span class="playpausebtn" onclick="justplay()"> </span><span style="display:none;" class="ap_loop" onclick="ap_loopf()"></span> <span class="duration"> <input type="range" min="0" max="100" value="0" class="duration_slider" onchange="change_duration()"> </span> <span style="display:none;" class="ap_time"></span> <span class="ap_download" onclick="ap_download()"></span> <span class="ap_sound" onclick="ap_mute()"> </span> </div> </div>';



//Constants
let ap_audio = o('.audiplay');
createcontainer();
let play = o('.playpausebtn');
let ap_loop = o('.ap_loop');
let slider = document.querySelector('.duration_slider');

let track = o('.audiplay');
let showtimer = o('.ap_time');
let ap_time = ap_audio.currentTime;
let Playing_song = false;
let playing_time = '  ' + secondsToMinutes(ap_audio.duration);

let autoplay = false;
let loop = false;

function createcontainer() {
    ap_audio.insertAdjacentHTML('Beforebegin', ap_html)
}



//Mains 

ap_audio.style.display = "none";
if (ap_audio.style.width != '') {
    o('.ap_container').style.width = ap_audio.style.width;
}

// ------------------------ Functions

//Settimg Audio Timing onload
//ap_audio.onloadeddata = o('.ap_time').innerHTML = '  '+secondsToMinutes(ap_audio.duration) ;
setTimeout(function () {
    o('.ap_time').innerHTML = '  ' + secondsToMinutes(ap_audio.duration)
}, 1000)
setTimeout(function () {
    o('.ap_time').innerHTML = '  ' + secondsToMinutes(ap_audio.duration)
}, 1000)

function showtime() {
    showtimer.innerHTML = '  -' + secondsToMinutes(ap_audio.duration - ap_audio.currentTime);
}
// checking.. the song is playing or not
function justplay() {
    if (Playing_song == false) {
        playsong();

    } else {
        pausesong();
    }
}

function secondsToMinutes(time) {
    return Math.floor(time / 60) + ':' + Math.floor(time % 60);
}


// change slider position 
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
    showtime();
}
if (track.getAttribute("nodownload") != null) {
    o('.ap_download').style.display = 'none';
}

function ap_download() {
    window.open(track.currentSrc)
}


function o(a) {
    return document.querySelector(a);
}

function range_slider() {
    let position = 0;
    showtime();
    // update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }


    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = ap_playsvg;
        if (autoplay == 1) {
            index_no += 1;
            //load_track(index_no);
            playsong();
        }
    }
}

function ap_mute() {
    if (!ap_audio.muted) {
        ap_audio.muted = 1;
        o('.ap_sound').innerHTML = ap_mutesvg;
    } else {
        ap_audio.muted = 0;
        o('.ap_sound').innerHTML = ap_volumnsvg;
    }
}

function ap_loopf() {
    if (!ap_audio.loop) {
        ap_audio.loop = true;
        o('.ap_loop').innerHTML = ap_loopedsvg;
    } else {
        ap_audio.loop = false;
        o('.ap_loop').innerHTML = ap_loopsvg;
    }
}

//SVGs

const ap_playsvg = '<?xml version="1.0"?> <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path></svg>';
const ap_pausesvg = '<?xml version="1.0"?> <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="pause-circle" class="svg-inline--fa fa-pause-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"></path></svg>';
const ap_loopsvg = '<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-up" class="svg-inline--fa fa-volume-up fa-w-18" role="img" viewBox="0 0 576 512"/>';
const ap_loopedsvg = '<?xml version="1.0" encoding="utf-8"?> <svg version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 513.22 513" style="enable-background:new 0 0 512 512" class="" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com"> <g transform="matrix(1,0,0,1,0,2.842170943040401e-14)"> <path xmlns="http://www.w3.org/2000/svg" d="m240.015625 495.46875c-.015625-8.207031 6.175781-15.277344 14.367187-15.886719 100.882813-7.472656 180.6875-92 180.6875-194.734375l32-.882812v.882812c0 119.261719-92.429687 217.421875-209.40625 226.574219-9.457031.734375-17.632812-6.480469-17.648437-15.953125zm0 0" fill="#74ddce" data-original="#fbc02d" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m113.871094 456.878906c-70.222656-40.511718-113.871094-116-113.871094-196.992187 0-34.207031 7.710938-67.953125 22.414062-98.527344 3.875-8.050781 13.601563-11.3125 21.347657-6.867187l1.535156.882812c7.039063 4.046875 9.328125 12.800781 5.824219 20.109375-12.546875 26.210937-19.121094 55.105469-19.121094 84.402344 0 69.597656 37.503906 134.449219 97.855469 169.261719zm0 0" fill="#4dd0e1" data-original="#4dd0e1" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m437.441406 137.886719c-7.089844 4.144531-16.304687 2.320312-20.960937-4.449219-36.242188-52.65625-96.703125-84.832031-161.054688-84.832031-34.515625 0-68.433593 9.121093-98.097656 26.382812l-16.097656-27.644531c34.546875-20.113281 74.015625-30.738281 114.195312-30.738281 74.621094 0 144.734375 37.152343 186.957031 98.015625 5.394532 7.792968 3.234376 18.496094-4.941406 23.265625zm0 0" fill="#aeeff7" data-original="#e64a19" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m204.160156 96.109375h-80v-80c0-8.832031 7.167969-16 16-16 8.832032 0 16 7.167969 16 16v48h48c8.832032 0 16 7.167969 16 16s-7.167968 16-16 16zm0 0" fill="#94e4ef" data-original="#ff7043" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m136 464.109375h-80c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h48v-48c0-8.832031 7.167969-16 16-16s16 7.167969 16 16zm0 0" fill="#80deea" data-original="#80deea" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m485.902344 321.34375-33.949219-33.9375-33.953125 33.9375c-6.238281 6.238281-16.382812 6.238281-22.625 0-6.253906-6.257812-6.238281-16.386719 0-22.625l56.578125-56.5625 56.574219 56.5625c6.257812 6.238281 6.257812 16.382812 0 22.625-6.238282 6.253906-16.367188 6.253906-22.625 0zm0 0" fill="#5fd1dd" data-original="#fdd835" style="" class=""/> </g> <path d="M 314 338 m -103.525 0 a 103.525 103.525 0 1 0 207.05 0 a 103.525 103.525 0 1 0 -207.05 0 Z M 314 338 m -62.114 0 a 62.114 62.114 0 0 1 124.228 0 a 62.114 62.114 0 0 1 -124.228 0 Z" style="fill: rgb(216, 216, 216);" transform="matrix(-0.833441, 0.552608, -0.552608, -0.833441, 688.569834, 370.780287)" bx:shape="ring 314 338 62.114 62.114 103.525 103.525 1@71c981af"/> </svg>';
const ap_downloadsvg = '<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g> <linearGradient xmlns="http://www.w3.org/2000/svg" id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="258" x2="512" y2="258" gradientTransform="matrix(1 0 0 -1 0 514)"> <stop offset="0" style="stop-color:#00F2FE"/> <stop offset="0.021" style="stop-color:#03EFFE"/> <stop offset="0.293" style="stop-color:#24D2FE"/> <stop offset="0.554" style="stop-color:#3CBDFE"/> <stop offset="0.796" style="stop-color:#4AB0FE"/> <stop offset="1" style="stop-color:#4FACFE"/> </linearGradient> <path xmlns="http://www.w3.org/2000/svg" style="fill:url(#SVGID_1_);" d="M432,512H80c-44.112,0-80-35.888-80-80c0-11.046,8.954-20,20-20s20,8.954,20,20  c0,22.056,17.944,40,40,40h352c22.056,0,40-17.944,40-40c0-11.046,8.954-20,20-20s20,8.954,20,20C512,476.112,476.112,512,432,512z   M297.398,367.454L408.114,257.17c7.826-7.795,7.851-20.458,0.056-28.284c-7.795-7.825-20.458-7.851-28.284-0.056L269.142,339.142  c-3.778,3.777-8.8,5.858-14.142,5.858c-5.323,0-10.329-2.065-14.102-5.817L132.243,228.959c-7.754-7.867-20.418-7.957-28.284-0.203  s-7.957,20.417-0.203,28.284l108.716,110.284c0.034,0.034,0.067,0.068,0.101,0.102c11.701,11.701,27.069,17.549,42.437,17.549  C270.366,384.975,285.72,379.133,297.398,367.454z M276,265V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v245  c0,11.046,8.954,20,20,20C267.046,285,276,276.046,276,265z" fill=""/> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>';
const ap_volumnsvg = '<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-up" class="svg-inline--fa fa-volume-up fa-w-18" role="img" viewBox="0 0 576 512"><path fill="#fff" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"/></svg>';
const ap_mutesvg = '<?xml version="1.0"?> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-mute" class="svg-inline--fa fa-volume-mute fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>';

//Inner Htmls
ap_loop.innerHTML = ap_loopsvg;
o('.ap_download').innerHTML = ap_downloadsvg;
play.innerHTML = ap_playsvg;
o('.ap_sound').innerHTML = ap_volumnsvg;

// play song
function playsong() {
    setInterval(function () {
        range_slider()
    }, 700);
    track.play();
    Playing_song = true;
    play.innerHTML = ap_pausesvg;
}

//pause song
function pausesong() {
    track.pause();
    Playing_song = false;
    play.innerHTML = ap_playsvg;
}