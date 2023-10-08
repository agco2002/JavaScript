
var lado1 = prompt("Ingresa la medida del primer lado del triángulo:");
var lado2 = prompt("Ingresa la medida del segundo lado del triángulo:");
var lado3 = prompt("Ingresa la medida del tercer lado del triángulo:");

if (lado1 === lado2 && lado1 === lado3) {
    document.write("El triángulo es equilátero.");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    document.write("El triángulo es isósceles.");
  } else {
    document.write("El triángulo es escaleno.");
  }
 
