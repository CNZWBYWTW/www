//通过窗口比例更改背景图片
var tp = 1.2;

setInterval(function () {
    if (innerWidth / innerHeight < tp) {
        if (new Date().getMonth() + 1 == 4 && new Date().getDate() == 1) {
            document.querySelector('body').style = "background-image: url('/img/background/4-1-P.png');";
        } else {
            document.querySelector('body').style = "background-image: url('/img/CNZW/background-p.png');";
        }
    } else {
        if (new Date().getMonth() + 1 == 4 && new Date().getDate() == 1) {
            document.querySelector('body').style = "background-image: url('/img/background/4-1-C.png');";
        } else {
            document.querySelector('body').style = "background-image: url('/img/CNZW/background.png');";
        }
    }
});
