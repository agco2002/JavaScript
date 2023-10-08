function promediar()
{
	prom = document.getElementById("promedio").value;
	html = "";

	for (var i = 0; i < prom; i++)
	{
		html+= "<label>Numero" + (i+1) + "</label><input type='text' id='calcular'" + i + "'><br>'";
	}
	html+= "<input type ='button' onclick='calcular' ("+prom+")' value= 'calcular promedio de numeros'>"
	document.getElementById('resultado').innerHTML = html;
 }

 function calcular(n)
{   

 suma=0;
 promedio=0;
 x=0;
 for (var i = 0; i < n; i++)
 {
 	x=document.getElementById('calcular' + i).value;
 	suma+=parseInt(x);
 }
 promedio =suma/n;
 alert(promedio);



