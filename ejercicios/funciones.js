function sumar()
{
	var num1 = form1.n1.value;
	var num2 = form1.n2.value;
	var resultado = parseInt(num1) + parseInt(num2);

	alert("El resultado de la suma es: " + resultado);

	document.write("<h1>" + num1 + "+" + num2 + "=" + resultado + "</h1>");
	document.write("</br>");
	document.write("<h2>El resultado de la suma es: " + resultado + "</h2>");
	document.write("</br>");
	document.write('<a href="Matematicas.html">Volver</a><br>');
}

function MostrarDatos()
{
	alert('Dato numero 1: ' + form1.n1.value);
	alert('Dato numero 2: ' + form1.n2.value);
}
