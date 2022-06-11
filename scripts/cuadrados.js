window.onload = load();

//CODIGO CUADRADOS

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

    //CODIGO PARA MOSTRAR RESULTADO DE CUADRADOS
    
    function calcularAreaCuadrado(){
        const medida = document.getElementById("medida");
        const value = Number(medida.value);
        
        if(value != "" && value > 0){
            const resultado = document.getElementById("res");
            document.getElementById("resTitle").innerText = "El área del cuadrado es de";
            document.getElementById("cmRes").innerText = "cm²";
            
            const area = areaCuadrado(value);
            resultado.value = area;
            disable();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.");
            if(value == "" || value <= 0){
                document.getElementById("input").className = "inputError";
                document.getElementById("medida").value = ""; 
                document.getElementById("medida").focus(); 
                setTimeout(() =>{
                    document.getElementById("input").className = "form-input";
                }, 2000)
            }
        }
    }

    function calcularPerimetroCuadrado(){
        const medida = document.getElementById("medida");
        const value = Number(medida.value);
        
        if(value != "" && value > 0){
            const resultado = document.getElementById("res");
            document.getElementById("resTitle").innerText = "El perímetro del cuadrado es de";

            const perimetro = perimetroCuadrado(value);
            resultado.value = perimetro;
            disable();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.");
            if(value == "" || value <= 0){
                document.getElementById("input").className = "inputError";
                document.getElementById("medida").value = ""; 
                document.getElementById("medida").focus(); 
                setTimeout(() =>{
                    document.getElementById("input").className = "form-input";
                }, 2000)          
            }
        }
    }