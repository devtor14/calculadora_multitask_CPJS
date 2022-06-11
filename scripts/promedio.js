let list = [];

function calcularPromedio(lista){
    let sumaLista = 0;
    sumaLista = lista.reduce((valorActual = 0, valorNuevo) =>{
        return valorActual + valorNuevo;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function crearLista(){
    const valor = document.getElementById("valor").value;
    if (valor != "" && valor > 0){
        document.getElementById("but1").style = "opacity: 0;";
        setTimeout(() => {
            document.getElementById("but1").style = "display: none;";
            document.getElementById("but2").style = "display: inline;";
        }, 250);
        setTimeout(() => {
            document.getElementById("but2").style = "opacity: 100;";
        }, 250);
        document.getElementById("but3").disabled = false;
    
        pushLista();
    }else{
        alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.");
        if(valor == "" || valor <= 0){
            document.getElementById("input").className = "inputError";
            document.getElementById("valor").value = ""; 
            document.getElementById("valor").focus(); 
            setTimeout(() =>{
                document.getElementById("input").className = "form-input inputMMP";
            }, 2000)
        }
    }
}

function pushLista(){
    list.push(Number(document.getElementById("valor").value));
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
}

function calcularLista(){
    document.getElementById("resTitle").innerText = "El promedio de la lista de valores que usted facilitó es";
    document.getElementById("res").value = calcularPromedio(list);

    list = [];

    disabledProm();
}