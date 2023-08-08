let datoNombre = prompt("Ingrese su nombre");
while (datoNombre === "") {
    alert("Nombre requerido!");
datoNombre = prompt("Ingrese su nombre");
}
    alert("Bien!! ");
let datoApellido = prompt("Ingrese su apellido");
while (datoApellido === ""){
      alert("Apellido requerido!")
  datoApellido = prompt("Ingrese su apellido");
}
    alert("Bien!!")
    alert(`¡Hola ${datoNombre} ${datoApellido}!`)
    alert("Bienvendio a mi tienda online!!") 
    alert("Tenemos para ofrecerte las siguiente prendas..")
    alert("Calsa negra $5000")
    alert("Buzo $7000")
    alert("Conjunto deportivo $10000")
    alert("Camiseta gris $6000")
    alert("Eliga la prenda que quiere comprar con su precio")
let precioElegido = parseFloat(prompt("Ingrese el precio de la prenda"));
let cantidadProductos = parseFloat(prompt("Ingrese la cantidad"));
let descuentoPrincipal = 0.20;
const calculoUno = (a,b) => a * b ;
const calculoDos = (a,b) => a - b ;
let resultadoMultiplicacion = calculoUno (precioElegido,cantidadProductos );
let resultadoDescuento = calculoUno (resultadoMultiplicacion,descuentoPrincipal);
let resultadoFinal = calculoDos (resultadoMultiplicacion,resultadoDescuento)
    alert(`Su total a pagar es:${resultadoMultiplicacion}`);
    alert("tenemos un descuento del 20%");
    alert(`Su total a pagar con el descuento es:${resultadoFinal}`);
    alert("Gracias por su compra!")