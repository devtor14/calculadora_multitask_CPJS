//CODIGO TRIANGULOS

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

    //CODIGO PARA MOSTRAR RESULTADO DE TRIANGULOS
    
    function calcularPerimetroTriangulo(){
        const medida1 = document.getElementById("medida1");
        const medida2 = document.getElementById("medida2");
        const medida3 = document.getElementById("medida3");
        const lado1 = Number(medida1.value);
        const lado2 = Number(medida2.value);
        const base = Number(medida3.value);
        
        if(lado1 != "" && lado2 != "" && base != "" && lado1 > 0 && lado2 > 0 && base > 0){
            const resultado = document.getElementById("res");
            document.getElementById("resTitle").innerText = "El perímetro del triángulo es de";

            const perimetro = perimetroTriangulo(lado1, lado2, base);
            resultado.value = perimetro;
            disableTriangles();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular el Area necesita introducir las medidas de Lado #1, Lado #2 y Base");
            if(lado1 == "" || lado1 <= 0){
                document.getElementById("input1").className = "inputError";
                document.getElementById("medida1").value = ""; 
                document.getElementById("medida1").focus(); 
                setTimeout(() =>{
                    document.getElementById("input1").className = "form-input";
                }, 2000)
            }else if(lado2 == "" || lado2 <= 0){
                document.getElementById("input2").className = "inputError";
                document.getElementById("medida2").value = "";
                document.getElementById("medida2").focus();
                setTimeout(() =>{
                    document.getElementById("input2").className = "form-input";
                }, 2000)
            }else if(base == "" || base <= 0){
                document.getElementById("input3").className = "inputError";
                document.getElementById("medida3").value = "";
                document.getElementById("medida3").focus();
                setTimeout(() =>{
                    document.getElementById("input3").className = "form-input";
                }, 2000)
            }
        }
    }

    function calcularAreaTriangulo(){
        const medida1 = document.getElementById("medida3");
        const medida2 = document.getElementById("medida4");
        const base = Number(medida1.value);
        const altura = Number(medida2.value);
        
        if(base != "" && altura != "" && base > 0 && altura > 0){
            const resultado = document.getElementById("res");
            document.getElementById("resTitle").innerText = "El área del triángulo es de";
            document.getElementById("cmRes").innerText = "cm²";

            const area = areaTriangulo(base, altura);
            resultado.value = area;
            disableTriangles();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular el Area necesita introducir las medidas de Base y Altura");
            if(base == "" || base <= 0){
                document.getElementById("input3").className = "inputError";
                document.getElementById("medida3").value = ""; 
                document.getElementById("medida3").focus(); 
                setTimeout(() =>{
                    document.getElementById("input3").className = "form-input";
                }, 2000) 
            }else if(altura == "" || altura <= 0){
                document.getElementById("input4").className = "inputError";
                document.getElementById("medida4").value = ""; 
                document.getElementById("medida4").focus(); 
                setTimeout(() =>{
                    document.getElementById("input4").className = "form-input";
                }, 2000)
            }
        }
    }