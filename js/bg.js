//通过窗口比例更改背景图片
var tp = 1.2;

setInterval(function () {
    if (innerWidth/innerHeight < tp) {
        document.querySelector('body').style = "background-image: url('/img/CNZW/background-p.png'), url('https://raw.bgithub.xyz/CNZWBYWTW/www/main/img/CNZW/background-p.png'), url('https://cdn.jsdelivr.net/gh/CNZWBYWTW/www/img/CNZW/background-p.png');";
    } else {
        document.querySelector('body').style = "background-image: url('/img/CNZW/background.png'), url('https://raw.bgithub.xyz/CNZWBYWTW/www/main/img/CNZW/background.png'), url('https://cdn.jsdelivr.net/gh/CNZWBYWTW/www/img/CNZW/background.png');";
    }
});
