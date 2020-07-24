/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

let precio1;
let precio2;
let precio3;
let Resultado; 
    //Les asigno un espacio para ingresar el valor y que se guarde en la variable
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
        // Resuelvo
        Resultado = precio1 + precio2 + precio3;
                //Cartel emergente con mensaje deseado
                 alert("La suma de los pruductos es : $"  +Resultado.toFixed(2));
}

function Promedio () 
{
let precio1;
let precio2;
let precio3;
let resultado;
let promedio;
   
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
  
    resultado = precio1+ precio2 + precio3;
    promedio  = resultado / 3;
                
                alert("El promedio generale es : $" +promedio.toFixed(2));
}

function PrecioFinal () 
{

let precio1;
let precio2;
let precio3;
let preciofinal;
    
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    //Resuelvo y sumo el 21% de iva
    preciofinal = (precio1 + precio2 + precio3) *1.21;
                
                alert("el precio final con el 21% de iva es : $" +preciofinal.toFixed(2));

}