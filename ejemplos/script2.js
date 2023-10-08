var a = Number(prompt("Ingrese el numero 1"));
var b = Number(prompt("Ingrese el numero 2"));
var z=a+b;
var x=a-b;
var s=a*b;
var c=a/b;
document.write("El valor de la suma es:"+ z + "<br>");
document.write("El valor de la resta es:"+ x + "<br>");
document.write("El valor de la multiplicacion es:"+ s + "<br>");
document.write("El valor de la division es:"+ c + "<br>");

//Condicionales

var calificacion = prompt("Ingrse su calificacion.");
 if (calificacion>=7 && calificacion<=10) {
    alert("Usted aprobo la materia");
 }else {
    alert("Usted reprobo la materia");
 } 