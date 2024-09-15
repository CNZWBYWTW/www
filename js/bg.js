//通过窗口比例更改背景图片
var tp;
fetch('https://api.cnzw.us.kg/background/bgw.json')
    .then(response => response.json())
    .then(data => {
        tp = data.tp;
    })

setInterval(function () {
    if (innerWidth/innerHeight < tp) {
        document.querySelector('body').style = "background-image: url('/img/CNZW/background-p.png'), url('https://raw.bgithub.xyz/CNZWSTUDIO/www/main/img/CNZW/background-p.png'), url('https://cdn.jsdelivr.net/gh/CNZWSTUDIO/www/img/CNZW/background-p.png');";
    } else {
        document.querySelector('body').style = "background-image: url('/img/CNZW/background.png'), url('https://raw.bgithub.xyz/CNZWSTUDIO/www/main/img/CNZW/background.png'), url('https://cdn.jsdelivr.net/gh/CNZWSTUDIO/www/img/CNZW/background.png');";
    }
});
