var last = document.cookie;

window.onload = function(){
    setTimeout(() => {
        let contenedor = document.getElementById("loader-container");
        contenedor.style.visibility = "hidden";
        contenedor.style.opacity = "0";
    }, 1000);   
}

function move(html){
    setTimeout(() => {
        parent.location = html;
    }, 250);
}

function about(actual, html){
    document.cookie = actual;
    move(html);
}

function eraseCookie(cookie){
    document.cookie = `${cookie}; max-age = 0`;
}