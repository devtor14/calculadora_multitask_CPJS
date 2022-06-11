class cupon{
    constructor(codigo, descuento){
        this.nombre = codigo;
        this.descuento = descuento;
    }
}

const cupones = [];
cupones.push(new cupon("VEINTE", 20));
cupones.push(new cupon("TREINTA", 30));
cupones.push(new cupon("CINCUENTA", 50));

function calcularPrecioConDescuento(precio, descuento){
    porcentajeDescuento = calcularPorcentajeDescuento(descuento)
    const precioConDescuento = (precio * porcentajeDescuento) / 100;
    return precioConDescuento;
}
function calcularPorcentajeDescuento(descuento){
    return 100 - descuento;
}

    function calcularPrecioTotal(){
        const precio = document.getElementById("pre");
        const descuento = document.getElementById("des");
        const pre = Number(precio.value);
        const des = Number(descuento.value);
        
        if(pre != "" && pre > 0 && des != "" && des > 0){
            const resultado = document.getElementById("res1");
            const porcentaje = calcularPorcentajeDescuento(des);
            const total = calcularPrecioConDescuento(pre, des);
            
            resultado.value = total;
            disabledPor();
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un número mayor a 0.");
            if(pre == "" || pre < 0){
                document.getElementById("input1").className = "inputError";
                document.getElementById("pre").value = ""; 
                document.getElementById("pre").focus(); 
                setTimeout(() =>{
                    document.getElementById("input1").className = "form-input discountInput";
                }, 2000)
            }else if(des == "" || des < 0){
                document.getElementById("input2").className = "inputError discountInput";
                document.getElementById("des").value = ""; 
                document.getElementById("des").focus(); 
                setTimeout(() =>{
                    document.getElementById("input2").className = "form-input discountInput";
                }, 2000)
            }
        }
    }

    function calcularPrecioCupon(){
        const seleccion = document.getElementById("cup").value;
        const precio = document.getElementById("pre");
        const descuento = document.getElementById("des");
        const pre = Number(precio.value);
        const des = Number(descuento.value);

        if(seleccion != "" && seleccion != 0){
            const cupon = cupones.find(dato =>{
                return dato.nombre === seleccion;
            })
            if(cupon != undefined){
                const valorCupon = cupon.descuento;
                const resultado = document.getElementById("res2");
                const totalSin = calcularPrecioConDescuento(pre, des);
                const totalCon = calcularPrecioConDescuento(totalSin, valorCupon)
                
                resultado.value = totalCon;
                disabledPorDos();
            }else{
                alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un cupon de descuento válido.");
                document.getElementById("input3").className = "inputError cupon-input";
                document.getElementById("cup").value = ""; 
                document.getElementById("cup").focus(); 
                setTimeout(() =>{
                    document.getElementById("input3").className = "form-input cupon-input";
                }, 2000)    
            }
        }else{
            alert("Por favor, asegurese de lo siguiente:\n\nDebe introducir un cupon de descuento válido.");
            if(seleccion == "" || seleccion > 0){
                document.getElementById("input3").className = "inputError cupon-input";
                document.getElementById("cup").value = ""; 
                document.getElementById("cup").focus(); 
                setTimeout(() =>{
                    document.getElementById("input3").className = "form-input cupon-input";
                }, 2000)
            }
        }
    }