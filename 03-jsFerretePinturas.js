/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let vGradosFahrenheit;
    let vConvercion;

    vGradosFahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    vConvercion = ((vGradosFahrenheit - 32)*5/9).toFixed(2);  // tambien serviria 1.8

    alert(+vGradosFahrenheit+"  Fahrenheit son : " +vConvercion+"  Grados centígrados. ");

   /* OTRA MANERA SERIA 
   alert(`${GradosFahrenheit} Fahrenheit son ${Convercion} Grados centígrados`); */
}
function CentigradosFahrenheit () 
{
    let vGradosCentigrados;
    let vConvercion;

    vGradosCentigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    // Se invierte la ecuacion -32 *5/9  a    *9/5 + 32.  
     vConvercion = ((vGradosCentigrados * 9/5)+32).toFixed(2);

    alert(vGradosCentigrados+" Centigrados : "+vConvercion+" Fahrenheit. ");

    //Otra forma de aplicarlo
    //alert(`${GradosCentigrados} Fahrenheit son ${Convercion} Grados centígrados`);
}