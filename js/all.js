function getURL(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/* Convert */
/* ImageToBase64 */
function ImageToBase64(url, callback) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onload = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(blob);
        })
        .catch(error => console.error('Error converting image to base64:', error));
}

/* C-P */
const wh = 1.2;
var c_,
    p_;

setInterval(function () {
    let whl = innerWidth / innerHeight;
    if (whl < wh) {
        cp = 'p';
        _p();
    } else {
        cp = 'c';
        _c();
    }
})

function _c() {
    if (c_ != 'CNZW') {
        c_ = 'CNZW',
            p_ = '';
        __c__();
    }
}
function _p() {
    if (p_ != 'CNZW') {
        p_ = 'CNZW',
            c_ = '';
        __p__();
    }
}

/* RandomInt */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* LoadCSS */
function loadCSS(href) {
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = href;
    document.getElementsByTagName("head")[0].appendChild(cssLink);
}

/* getPi */
function getPi(pij) {
    let pi = 0;
    let denominator = 1;
    let sign = 1;
    for (let i = 0; i < pij; i++) {
        pi += sign / denominator;
        denominator += 2;
        sign *= -1;
    }
    return pi * 4;
}

/* validateEmail */
function check_email(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

/* spectrum */
function spectrum(media_s, canvas_s) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = document.querySelector(media_s);
    const source = audioContext.createMediaElementSource(audioElement);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    const canvas = document.querySelector(canvas_s);
    const ctx = canvas.getContext('2d');
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    const renderFrame = () => {
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const barWidth = (canvas.width / analyser.frequencyBinCount);
        let barHeight;
        for (let i = 0; i < analyser.frequencyBinCount; i++) {
            barHeight = dataArray[i];
            const ratio = barHeight / 255;
            const r = Math.round(255 * (1 - ratio));
            const g = Math.round(255 * ratio);
            const b = 0;
            ctx.fillStyle = `rgb(${r},${g},${b})`;
            ctx.fillRect(barWidth * i, canvas.height, barWidth, -barHeight);
        }
    };
    renderFrame();
}
function spectrum_url(media_url, canvas_s) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio(media_url);
    const source = audioContext.createMediaElementSource(audioElement);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    const canvas = document.querySelector(canvas_s);
    const ctx = canvas.getContext('2d');
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    const renderFrame = () => {
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const barWidth = (canvas.width / analyser.frequencyBinCount);
        let barHeight;
        for (let i = 0; i < analyser.frequencyBinCount; i++) {
            barHeight = dataArray[i];
            const ratio = barHeight / 255;
            const r = Math.round(255 * (1 - ratio));
            const g = Math.round(255 * ratio);
            const b = 0;
            ctx.fillStyle = `rgb(${r},${g},${b})`;
            ctx.fillRect(barWidth * i, canvas.height, barWidth, -barHeight);
        }
    };
    renderFrame();
    audioElement.play();
}

/* Get_UTC_Time */
function UTC() {
    date = new Date();
    function padZero(num) {
        return num < 10 ? '0' + num : num;
    };
    return (
        date.getUTCFullYear() + '-' +
        padZero(date.getUTCMonth() + 1) + '-' +
        padZero(date.getUTCDate()) + ' ' +
        padZero(date.getUTCHours()) + ':' +
        padZero(date.getUTCMinutes()) + ':' +
        padZero(date.getUTCSeconds()) + ' UTC'
    );
}
