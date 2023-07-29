


let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
if (nombre != "" && apellido != "") {
    alert(`Hola ${nombre} ${apellido}!!` );
}
else{
    alert("el nombre y apellido se requieren");
}


let edad = parseInt(prompt("Ingrese su edad"));
        alert(`su edad es:${edad}`);
        alert(`su nombre es:${nombre} ${apellido}`)
let respuesta = prompt("Los datos son correctos?")        
        if ( respuesta === "si"){
            alert("Podemos continuar!!")  
        }
        else{
            alert("Por favor vuelve a ingresar tus datos")
        }



let numero = prompt("Ingresar un numero del 1 al 10");
while (numero != "ESC") {
    switch (numero) {
        case "1":
            alert("su precio es: $150");
            break;
        case "2":
            alert("su precio es: $200");
            break;
        case "3":
            alert("su precio es: $250");
            break;
        case "4":
            alert("su precio es: $300");
            break;
        case "5":
            alert("su precio es: $350");
            break;
        case "6":
            alert("su precio es: $400");
            break;
        case "7":
            alert("su precio es: $450");
            break;
        case "8":
            alert("su precio es: $500");
            break;
        case "9":
            alert("su precio es: $550");
            break;
        case "10":
            alert("su precio es: $600");
            break;           
            default:
            alert("numero incorrecto");
            break;
        }
        numero = prompt("Ingrese ESC para terminar");
    } 

let precio;
let cantidad;
let desc;
let comprar;
let pagar;
precio = parseFloat(prompt("Ingrese precio"));
cantidad= parseFloat(prompt("Ingrese cantidad"));
alert("Tiene un descuento del 20%")
compra = precio * cantidad;
desc = compra * 0.20;
pagar = compra - desc;
console.log(desc)
console.log(pagar)
    alert("el descuento es:" + desc);
    alert("el total a pagar es:" + pagar)