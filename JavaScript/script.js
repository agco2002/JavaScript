var a = Number( prompt("Ingrese el primer numero"));
var b = Number(prompt("Ingrese el segundo numero"));

var c = a+b;
var d = a-b;
var e = a*b;
var f = a/b;

document.write("El resultado de la suma es: " + c + "<br>");
document.write("El resultado de la resta  es: " + d + "<br>");
document.write("El resultado de la multiplicacion es: " + e +"<br>" );
document.write("El resultado de la division es: " + f +"<br>" );
console.log("El resultado de la suma es:" + c);

//Calcular notas de los estudiantes 

var calificacion = prompt("Ingrese su calificacion"); 

if (calificacion >= 7 && calificacion < 9 ) {
    alert( "aprobado");
} else if ( calificacion >= 9 ) {
    alert ( " Felicitaciones por su promedio alto");
} else if ( calificacion > 10 ){
    alert ( " solo se aceptan notas inferiores a 10");
} else {
    alert (  "reprobado :(");
}

//Realizar un programa que le indique al usuario si un numero es positivo o negativo.  

var num = prompt("Ingrese un numero");

if(num>0){
    alert("El numero es positivo");
} else if(num<0){
    alert("El numero es negativo");
} else if(num ==0){
    alert("El numero es cero");
}else{
    alert("El valor que ingresaste no es un numero");
}