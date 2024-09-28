setInterval(function () {
    var C2W = `
    <div id="CNZW-watermark">
        Powered by
        <a class="CNZW-link" href="https://cnzw.us.kg/" target="_blank">CNZW</a>
        <style>
            #CNZW-watermark {
                font-size: 30px;
                color: #0000004d;
                user-select: none;
                position: fixed;
                right: 10px;
                bottom: 5px;            
            }

            @font-face {
                font-family: 'CNZW-link';
                src: url("https://cnzw.us.kg/ttf/MC.ttf");
            }

            .CNZW-link {
                font-family: 'CNZW-link';
                color: #0000004d;
                text-decoration: none;
            }
        </style>
    </div>
    `;
    if (document.querySelector("#CNZW-watermark") == null) {
        document.querySelector("body").innerHTML += "<div id='CNZW-watermark'></div>";
    } else {
        if (document.querySelector("#CNZW-watermark").innerHTML != C2W) {
            document.querySelector("#CNZW-watermark").innerHTML = C2W;
        }
    }
})