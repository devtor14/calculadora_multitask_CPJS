function onload(){
    document.getElementById("medida").focus();
}

//CODIGO CUADRADOS

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

    //CODIGO PARA MOSTRAR RESULTADO DE CUADRADOS
    
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
            if(value == ""){
                document.getElementById("medida").value = ""; 
                document.getElementById("medida").focus();
            }
        }
    }

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
            if(value == ""){
                document.getElementById("medida").value = ""; 
                document.getElementById("medida").focus();
            }
        }
    }

//CODIGO TRIANGULOS

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

    //CODIGO PARA MOSTRAR RESULTADO DE TRIANGULOS
    
    function calcularPerimetroTriangulo(){
        const medida1 = document.getElementById("radio");
        const medida2 = document.getElementById("radio2");
        const medida3 = document.getElementById("radio3");
        const lado1 = Number(medida1.value);
        const lado2 = Number(medida2.value);
        const base = Number(medida3.value);
        
        if(lado1 != "" && lado2 != "" && base != "" && lado1 > 0 && lado2 > 0 && base > 0){
            const resultado = document.getElementById("resultado");
            document.getElementById("resultitle").innerText = "El perímetro del triangulo es de";

            const perimetro = perimetroTriangulo(lado1, lado2, base);
            resultado.value = perimetro;
            disable();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular el Area necesita introducir las medidas de Lado #1, Lado #2 y Base");
            if(lado1 == ""){
                document.getElementById("radio").value = ""; 
                document.getElementById("radio").focus(); 
            }else if(lado2 == ""){
                document.getElementById("radio2").value = "";
                document.getElementById("radio2").focus();
            }else if(base == ""){
                document.getElementById("radio3").value = "";
                document.getElementById("radio3").focus();
            }
        }
    }

    function calcularAreaTriangulo(){
        const medida1 = document.getElementById("radio3");
        const medida2 = document.getElementById("radio4");
        const base = Number(medida1.value);
        const altura = Number(medida2.value);
        
        if(base != "" && altura != "" && base > 0 && altura > 0){
            const resultado = document.getElementById("resultado");
            document.getElementById("resultitle").innerText = "El área del triangulo es de";
            document.getElementById("cmRes").innerText = "cm²";

            const area = areaTriangulo(base, altura);
            resultado.value = area;
            disable();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular el Area necesita introducir las medidas de Base y Altura");
            if(base == ""){
                document.getElementById("radio3").value = ""; 
                document.getElementById("radio3").focus(); 
            }else if(altura == ""){
                document.getElementById("radio4").value = ""; 
                document.getElementById("radio4").focus();
            }
        }
    }

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
        const medida1 = document.getElementById("radio");
        const medida2 = document.getElementById("radio2");
        const medida3 = document.getElementById("radio3");
        const lado1 = Number(medida1.value);
        const lado2 = Number(medida2.value);
        const base = Number(medida3.value);
        
        if(lado1 != "" && lado2 != "" && base != "" && lado1 > 0 && lado2 > 0 && base > 0 && lado1 === lado2){
            const resultado = document.getElementById("resultado");
            document.getElementById("resultitle").innerText = "La altura del triangulo es de";
            document.getElementById("cmRes").innerText = "cm";

            const altura = alturaTrianguloIsos(lado1, base);
            resultado.value = altura;
            disableIsos();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular la altura de un Triangulo Isóscele necesita las medidas de Lado #1, Lado #2 (Lado 1 y 2 deben ser iguales) y Base");
            if(lado1 == ""){
                document.getElementById("radio").value = ""; 
                document.getElementById("radio").focus(); 
            }else if(lado2 == ""){
                document.getElementById("radio2").value = ""; 
                document.getElementById("radio2").focus();
            }else if(base == ""){
                document.getElementById("radio3").value = ""; 
                document.getElementById("radio3").focus();
            }
        }
    }

    function calcularPerimetroTrianguloIsos(){
        const medida1 = document.getElementById("radio");
        const medida2 = document.getElementById("radio2");
        const medida3 = document.getElementById("radio3");
        const lado1 = Number(medida1.value);
        const lado2 = Number(medida2.value);
        const base = Number(medida3.value);
        
        if(lado1 != "" && lado2 != "" && base != "" && lado1 > 0 && lado2 > 0 && base > 0 && lado1 === lado2){
            const resultado = document.getElementById("resultado");
            document.getElementById("resultitle").innerText = "El perímetro del triangulo es de";
            document.getElementById("cmRes").innerText = "cm";

            const perimetro = perimetroTrianguloIsos(lado1, base);
            resultado.value = perimetro;
            disableIsos();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular El perímetro de un Triangulo Isóscele necesita las medidas de Lado #1, Lado #2 (Lado 1 y 2 deben ser iguales) y Base");
            if(lado1 == ""){
                document.getElementById("radio").value = ""; 
                document.getElementById("radio").focus(); 
            }else if(lado2 == ""){
                document.getElementById("radio2").value = ""; 
                document.getElementById("radio2").focus();
            }else if(base == ""){
                document.getElementById("radio3").value = ""; 
                document.getElementById("radio3").focus();
            }
        }
    }

    function calcularAreaTrianguloIsos(){
        const medida1 = document.getElementById("radio");
        const medida2 = document.getElementById("radio2");
        const medida3 = document.getElementById("radio3");
        const lado1 = Number(medida1.value);
        const lado2 = Number(medida2.value);
        const base = Number(medida3.value);
        
        if(lado1 != "" && lado2 != "" && base != "" && lado1 > 0 && lado2 > 0 && base > 0 && lado1 === lado2){
            const resultado = document.getElementById("resultado");
            document.getElementById("resultitle").innerText = "El área del triangulo es de";
            document.getElementById("cmRes").innerText = "cm²";

            const area = areaTrianguloIsos(lado1, base);
            resultado.value = area;
            disableIsos();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.\n\nPara calcular el área de un Triangulo Isóscele necesita las medidas de Lado #1, Lado #2 (Lado 1 y 2 deben ser iguales) y Base");
            if(lado1 == ""){
                document.getElementById("radio").value = ""; 
                document.getElementById("radio").focus(); 
            }else if(lado2 == ""){
                document.getElementById("radio2").value = ""; 
                document.getElementById("radio2").focus();
            }else if(base == ""){
                document.getElementById("radio3").value = ""; 
                document.getElementById("radio3").focus();
            }
        }
    }

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
        const medida = document.getElementById("radio");
        const value = Number(medida.value);
        
        if(value != "" && value > 0){
            const resultado = document.getElementById("resultado");
            document.getElementById("resultitle").innerText = "El perímetro del Circulo es de";

            const perimetro = perimetroCirculo(value);
            resultado.value = perimetro;
            disable();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.");
            if(value == ""){
                document.getElementById("radio").value = ""; 
                document.getElementById("radio").focus();
            }
        }
    }

    function calcularAreaCirculo(){
        const medida = document.getElementById("radio");
        const value = Number(medida.value);
        
        if(value != "" && value > 0){
            const resultado = document.getElementById("resultado");
            document.getElementById("resultitle").innerText = "El área del Circulo es de";
            document.getElementById("cmRes").innerText = "cm²";

            const area = areaCirculo(value);
            resultado.value = area;
            disable();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.");
            if(value == ""){
                document.getElementById("radio").value = ""; 
                document.getElementById("radio").focus();
            }
        }
    }

//CODIO PARA REINICIOS

function disable(){
    document.getElementById("but1").disabled = true;
    document.getElementById("but2").disabled = true;
    document.getElementById("but3").disabled = false;
}

function disableIsos(){
    document.getElementById("but1").disabled = true;
    document.getElementById("but2").disabled = true;
    document.getElementById("but3").disabled = true;
    document.getElementById("but4").disabled = false;
}

function restart(){
    document.getElementById("but1").disabled = false;
    document.getElementById("but2").disabled = false;
    document.getElementById("but3").disabled = true;

    document.getElementById("form").reset();
    document.getElementById("cmRes").innerText = "cm";

    document.getElementById("medida").focus();
    document.getElementById("resTitle").innerText = "Resultado";
}

function restartIsos(){
    document.getElementById("but1").disabled = false;
    document.getElementById("but2").disabled = false;
    document.getElementById("but3").disabled = false;
    document.getElementById("but4").disabled = true;

    document.getElementById("form").reset();
    document.getElementById("cmRes").innerText = "cm";

    document.getElementById("medida").focus();
    document.getElementById("resTitle").innerText = "Resultado";
}