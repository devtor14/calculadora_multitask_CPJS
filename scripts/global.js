var last = document.cookie;

window.onload = endLoad();

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

function load(){
    document.getElementById("medida").focus();
}

function endLoad(){
    setTimeout(() => {
        let contenedor = document.getElementById("loader-container");
        contenedor.style.visibility = "hidden";
        contenedor.style.opacity = "0";
    }, 1000); 
}

//CODIO PARA REINICIOS

function disable(){
    document.getElementById("input").className = "inputDisabled";
    document.getElementById("medida").disabled = true;
    document.getElementById("but1").disabled = true;
    document.getElementById("but2").disabled = true;
    document.getElementById("but3").disabled = false;
}

function disabledPor(){
    document.getElementById("input1").className = "inputDisabled";
    document.getElementById("input2").className = "inputDisabled";
    document.getElementById("input3").className = "form-input cupon-input";
    document.getElementById("pre").disabled = true;
    document.getElementById("des").disabled = true;
    document.getElementById("cup").disabled = false;
    document.getElementById("but1").disabled = true;
    document.getElementById("but2").disabled = false;
    document.getElementById("but3").disabled = false;
}

function disabledPorDos(){
    document.getElementById("input3").className = "inputDisabled cupon-input";
    document.getElementById("cup").disabled = true;
    document.getElementById("but2").disabled = true;
}

function disableTriangles(){
    document.getElementById("input1").className = "inputDisabled";
    document.getElementById("input2").className = "inputDisabled";
    document.getElementById("input3").className = "inputDisabled";
    document.getElementById("input4").className = "inputDisabled";
    document.getElementById("medida1").disabled = true;
    document.getElementById("medida2").disabled = true;
    document.getElementById("medida3").disabled = true;
    document.getElementById("medida4").disabled = true;
    document.getElementById("but1").disabled = true;
    document.getElementById("but2").disabled = true;
    document.getElementById("but3").disabled = false;
}

function disableIsos(){
    document.getElementById("input1").className = "inputDisabled";
    document.getElementById("input2").className = "inputDisabled";
    document.getElementById("input3").className = "inputDisabled";
    document.getElementById("medida1").disabled = true;
    document.getElementById("medida2").disabled = true;
    document.getElementById("medida3").disabled = true;
    document.getElementById("but1").disabled = true;
    document.getElementById("but2").disabled = true;
    document.getElementById("but3").disabled = true;
    document.getElementById("but4").disabled = false;
}

function restart(){
    document.getElementById("input").className = "form-input";
    document.getElementById("medida").disabled = false;
    document.getElementById("but1").disabled = false;
    document.getElementById("but2").disabled = false;
    document.getElementById("but3").disabled = true;

    document.getElementById("form").reset();
    document.getElementById("cmRes").innerText = "cm";
    document.getElementById("res").value = "";

    document.getElementById("medida").focus();
    document.getElementById("resTitle").innerText = "Resultado";
}

function restartPor(){
    document.getElementById("input1").className = "form-input discountInput";
    document.getElementById("input2").className = "form-input discountInput";
    document.getElementById("pre").disabled = false;
    document.getElementById("des").disabled = false;
    document.getElementById("but1").disabled = false;
    document.getElementById("but3").disabled = true;
    
    document.getElementById("form").reset();
    document.getElementById("pre").value = "";
    document.getElementById("des").value = "";
    document.getElementById("cup").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";

    document.getElementById("pre").focus();
}

function restartTriangles(){
    document.getElementById("input1").className = "form-input";
    document.getElementById("input2").className = "form-input";
    document.getElementById("input3").className = "form-input";
    document.getElementById("input4").className = "form-input";
    document.getElementById("medida1").disabled = false;
    document.getElementById("medida2").disabled = false;
    document.getElementById("medida3").disabled = false;
    document.getElementById("medida4").disabled = false;
    document.getElementById("but1").disabled = false;
    document.getElementById("but2").disabled = false;
    document.getElementById("but3").disabled = true;

    document.getElementById("form").reset();
    document.getElementById("cmRes").innerText = "cm";
    document.getElementById("res").value = "";

    document.getElementById("medida1").focus();
    document.getElementById("resTitle").innerText = "Resultado";
}

function restartIsos(){
    document.getElementById("input1").className = "form-input";
    document.getElementById("input2").className = "form-input";
    document.getElementById("input3").className = "form-input";
    document.getElementById("medida1").disabled = false;
    document.getElementById("medida2").disabled = false;
    document.getElementById("medida3").disabled = false;
    document.getElementById("but1").disabled = false;
    document.getElementById("but2").disabled = false;
    document.getElementById("but3").disabled = false;
    document.getElementById("but4").disabled = true;

    document.getElementById("form").reset();
    document.getElementById("cmRes").innerText = "cm";
    document.getElementById("res").value = "";

    document.getElementById("medida1").focus();
    document.getElementById("resTitle").innerText = "Resultado";
}