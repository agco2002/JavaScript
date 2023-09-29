


function Rectangulo(){
    var baseR, alturaR, areaR, perimetroR;
baseR = (prompt("Ingresar la base del Rectangulo"));
alturaR = (prompt("Ingresar la altura del Rectangulo"));

areaR = (baseR*alturaR);
perimetroR= 2*(baseR+alturaR);

alert("El Área del Rectángulo es: " + areaR + "cm² " + " El Perimetro del Rectángulo es: " + perimetroR + "cm.")
}

function Cuadrado(){
    var Lado, areaC, perímetroC;
Lado = (prompt("Ingresar el lado del Cuadrado"));

areaC= (Lado*Lado);
perímetroC= 4*Lado

alert("El Área del Cuadrado es: " + areaC + "cm² " + " El Perimetro del Cuadrado es: " + perímetroC + "cm.")
}

function Círculo(){
    var radio, areaCr, perímetroCr;
radio = (prompt("Ingresar el radio del Circulo"));

areaCr= Math.PI*(Math.pow(radio,2));
perímetroCr= 2*Math.PI*(Math.pow(radio,2));

alert("El Área del Círculo es: " + areaCr + "cm² " + " El Perimetro del Círculo es: " + perímetroCr + "cm.")
}