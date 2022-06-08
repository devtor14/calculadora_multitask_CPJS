var last = document.cookie;

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