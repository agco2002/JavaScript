function receta(){
    litros= prompt("litros de cerveza");
var litros, malta, lupulo, levadura, agua ;

malta= litros*100;
lupulo = litros*5;    
levadura =litros*5;
agua= litros* 1000;
document.write("Para hacer un litro de cervaza se necesitan los siguientes ingredientes:<br>" + malta +" gramos de Malta<br>"+ lupulo+" gramos de Lúpulo  <br>"
+levadura +" gramos de Levadura <br> "+ agua+ "Litros de agua");

}

function costos(){

    litros = Number(prompt("litros de cerveza"));
var litros, malta, lupulo, levadura, agua, total ;
malta= litros*3500;
lupulo = litros*4000;   
levadura =litros*2000;
agua= litros*100;
total= malta+lupulo+levadura+agua;
document.write("Los costos para los litros de cerveza son: "+ total);
} 