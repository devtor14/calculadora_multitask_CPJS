let list = [];
let list2 = {};

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
    list.map((elemento)=>{
        if (list2[elemento]){
            list2[elemento] += 1;
        }else{
            list2[elemento] = 1;
        }
    });
    const list2Array = Object.entries(list2).sort((a, b)=>{return a[1]-b[1];});
    let moda = list2Array[list2Array.length - 1];
    console.log(moda);

    document.getElementById("resTitle").innerText = "La moda de la lista de valores que usted facilitó es";
    document.getElementById("res").value = `El número ${moda[0]}, con ${moda[1]} repeticiones`;

    list = [];
    list2 = [];

    disabledProm();
}