//CODIGO CIRCULOS

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

    //CODIGO PARA MOSTRAR RESULTADO DE CIRCULOS
    
    function calcularPerimetroCirculo(){
        const medida = document.getElementById("medida");
        const value = Number(medida.value);
        
        if(value != "" && value > 0){
            const resultado = document.getElementById("res");
            document.getElementById("resTitle").innerText = "El perímetro del Círculo es de";

            const perimetro = perimetroCirculo(value);
            resultado.value = perimetro;
            disable();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.");
            if(value == "" || value <= 0){
                document.getElementById("input1").className = "inputError";
                document.getElementById("medida1").focus(); 
                setTimeout(() =>{
                    document.getElementById("input1").className = "form-input";
                }, 2000)
            }
        }
    }

    function calcularAreaCirculo(){
        const medida = document.getElementById("medida");
        const value = Number(medida.value);
        
        if(value != "" && value > 0){
            const resultado = document.getElementById("resultado");
            document.getElementById("resTitle").innerText = "El área del Círculo es de";
            document.getElementById("cmRes").innerText = "cm²";

            const area = areaCirculo(value);
            resultado.value = area;
            disable();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.");
            if(value == "" || value <= 0){
                document.getElementById("input1").className = "inputError";
                document.getElementById("medida1").focus(); 
                setTimeout(() =>{
                    document.getElementById("input1").className = "form-input";
                }, 2000)
            }
        }
    }