//CODIGO TRIANGULOS ISOSCELES

function alturaTrianguloIsos(lados, base){
    return Math.sqrt((lados*lados) - (base * base) /4)
}

function perimetroTrianguloIsos(lados, base){
    return lados + lados + base;
}

function areaTrianguloIsos(lados, base){
    const altura = alturaTrianguloIsos(lados, base);
    return (base * altura) / 2;
}

    //CODIGO PARA MOSTRAR TRIANGULOS ISOSCELES

    function calcularAlturaTrianguloIsos(){
        const medida1 = document.getElementById("medida1");
        const medida2 = document.getElementById("medida2");
        const medida3 = document.getElementById("medida3");
        const lado1 = Number(medida1.value);
        const lado2 = Number(medida2.value);
        const base = Number(medida3.value);
        
        if(lado1 != "" && lado2 != "" && base != "" && lado1 > 0 && lado2 > 0 && base > 0 && lado1 === lado2){
            const resultado = document.getElementById("res");
            document.getElementById("resTitle").innerText = "La altura del triángulo es de";
            document.getElementById("cmRes").innerText = "cm";

            const altura = alturaTrianguloIsos(lado1, base);
            resultado.value = altura;
            disableIsos();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular la altura de un Triángulo Isóscele necesita las medidas de Lado #1, Lado #2 (Lado 1 y 2 deben ser iguales) y Base");
            if(lado1 == "" || lado1 < lado2){
                document.getElementById("input1").className = "inputError"; 
                document.getElementById("medida1").focus(); 
                setTimeout(() =>{
                    document.getElementById("input1").className = "form-input";
                }, 2000) 
            }else if(lado2 == "" || lado2 < lado1){
                document.getElementById("input2").className = "inputError"; 
                document.getElementById("medida2").focus(); 
                setTimeout(() =>{
                    document.getElementById("input2").className = "form-input";
                }, 2000)
            }else if(base == ""){
                document.getElementById("input3").className = "inputError";
                document.getElementById("medida3").value = ""; 
                document.getElementById("medida3").focus(); 
                setTimeout(() =>{
                    document.getElementById("input3").className = "form-input";
                }, 2000)
            }
        }
    }

    function calcularPerimetroTrianguloIsos(){
        const medida1 = document.getElementById("medida1");
        const medida2 = document.getElementById("medida2");
        const medida3 = document.getElementById("medida3");
        const lado1 = Number(medida1.value);
        const lado2 = Number(medida2.value);
        const base = Number(medida3.value);
        
        if(lado1 != "" && lado2 != "" && base != "" && lado1 > 0 && lado2 > 0 && base > 0 && lado1 === lado2){
            const resultado = document.getElementById("res");
            document.getElementById("resTitle").innerText = "El perímetro del triángulo es de";
            document.getElementById("cmRes").innerText = "cm";

            const perimetro = perimetroTrianguloIsos(lado1, base);
            resultado.value = perimetro;
            disableIsos();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular El perímetro de un Triángulo Isóscele necesita las medidas de Lado #1, Lado #2 (Lado 1 y 2 deben ser iguales) y Base");
            if(lado1 == "" || value < 0 || lado1 < lado2){
                document.getElementById("input1").className = "inputError";
                document.getElementById("medida1").focus(); 
                setTimeout(() =>{
                    document.getElementById("input1").className = "form-input";
                }, 2000)  
            }else if(lado2 == "" || value < 0 || lado2 < lado1){
                document.getElementById("input2").className = "inputError";
                document.getElementById("medida2").focus(); 
                setTimeout(() =>{
                    document.getElementById("input2").className = "form-input";
                }, 2000) 
            }else if(base == "" || value < 0){
                document.getElementById("input3").className = "inputError";
                document.getElementById("medida3").value = ""; 
                document.getElementById("medida3").focus(); 
                setTimeout(() =>{
                    document.getElementById("input3").className = "form-input";
                }, 2000) 
            }
        }
    }

    function calcularAreaTrianguloIsos(){
        const medida1 = document.getElementById("medida1");
        const medida2 = document.getElementById("medida2");
        const medida3 = document.getElementById("medida3");
        const lado1 = Number(medida1.value);
        const lado2 = Number(medida2.value);
        const base = Number(medida3.value);
        
        if(lado1 != "" && lado2 != "" && base != "" && lado1 > 0 && lado2 > 0 && base > 0 && lado1 === lado2){
            const resultado = document.getElementById("res");
            document.getElementById("resTitle").innerText = "El área del triángulo es de";
            document.getElementById("cmRes").innerText = "cm²";

            const area = areaTrianguloIsos(lado1, base);
            resultado.value = area;
            disableIsos();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular el área de un Triángulo Isóscele necesita las medidas de Lado #1, Lado #2 (Lado 1 y 2 deben ser iguales) y Base");
            if(lado1 == "" || lado1 < lado2){
                document.getElementById("input1").className = "inputError";
                document.getElementById("medida1").focus(); 
                setTimeout(() =>{
                    document.getElementById("input1").className = "form-input";
                }, 2000)  
            }else if(lado2 == "" || lado2 < lado1){
                document.getElementById("input2").className = "inputError";
                document.getElementById("medida2").focus(); 
                setTimeout(() =>{
                    document.getElementById("input2").className = "form-input";
                }, 2000) 
            }else if(base == ""){
                document.getElementById("input3").className = "inputError";
                document.getElementById("medida3").value = ""; 
                document.getElementById("medida3").focus(); 
                setTimeout(() =>{
                    document.getElementById("input3").className = "form-input";
                }, 2000) 
            }
        }
    }