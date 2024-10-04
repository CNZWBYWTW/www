function getURL(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//Convert
//ImageToBase64
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

//C-P
const wh = 1.2;
var c_,
    p_;

setInterval(function () {
    let whl = innerWidth / innerHeight;
    if (whl < wh) {
        cp = 'p';
        p();
    } else {
        cp = 'c';
        c();
    }
})

function c() {
    if (c_ != 'CNZW') {
        c_ = 'CNZW',
            p_ = '';
        _c();
    }
}
function p() {
    if (p_ != 'CNZW') {
        p_ = 'CNZW',
            c_ = '';
        _p();
    }
}

//
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}