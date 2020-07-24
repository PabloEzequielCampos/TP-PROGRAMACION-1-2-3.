/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo; 
let ancho;
let alambre;
let perimetro;

    largo =parseInt(document.getElementById("txtIdLargo").value);
    ancho =  parseInt(document.getElementById("txtIdAncho").value);

        area      = ancho*largo;
        perimetro = 2*largo+2*ancho;
        alambre   = perimetro*3;

    //alert("El area del rectangulo es: " +area);
    alert("El Perimetro del Rectangulo es : "+perimetro+ 
    ". Por lo tanto son necesarios "+alambre+"m de hilo de alambre para cubrir las 3 vueltas al terreno.");

}
function Circulo () 

{ 
 let radio;
let area;

        radio  = parseFloat(document.getElementById("txtIdRadio").value);
            area    = Math.PI + 2*radio;
            alambre = area*3;

     alert("El Terreno Circular del Radio brindado es : " + Math.round(area)+"." + 
    " Por lo tanto se necesitan " +Math.round(alambre)+"m de hilo de alambre para cubrir las 3 vueltas al terreno.");


}
function Materiales () 
{
let largo;
let ancho;
let cemento;
let cal;

        largo = parseInt(document.getElementById("txtIdLargo").value);    
        ancho   = parseInt(document.getElementById("txtIdAncho").value);
            area      = ancho*largo;
            cemento   = 2*area;
            cal       = 3*area;


            alert("Para tu contrapiso vas a necesitar: "+cemento +"x bolsas de cemento y "+cal+ "x bolsas de cal.");
          

}