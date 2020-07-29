/////////////COMIENZA EJERCICIO CON SWITCH////////////////////
function CalcularPrecio() {

    let precio = 35;
    let preciofinal;
    let descuento;
    let marca;
    let cantidad;
    let preciocondescuento;
    let IIBB;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    //Selecciono cantidad como variable ya que es lo que mas resalta.
    switch (cantidad) {
        case 1:

        case 2:
            descuento = 0;
            break;

        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 0.15;
            }
            else if (marca == "FelipeLamparas") {
                descuento = 0.10;
            }
            else {
                descuento = 0.05;
            }
            break;

        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 0.25;
            }
            else {
                descuento = 0.20;
            }
            break;

        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 0.40;
            }
            else {
                descuento = 0.30;
            }
            break;

        default:
            descuento = 0.50;
            break;

    }

    preciocondescuento = precio - precio * descuento;
    preciofinal = preciocondescuento * cantidad;

    if (preciofinal >= 120) {
        // otra forma seria " Preciofinal *10 / 100"
        IIBB = preciofinal * 0.10;
        precionfinal = preciofinal + IIBB;
        alert("IIBB : Usted pago : " + preciofinal + "  siendo : " + IIBB + " el impuesto que se pagó. ");
        document.getElementById("txtIdprecioDescuento").value = preciofinal;
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = preciofinal;

    }

}
///////////////////////TERMINA EJERCICIO CON SWITCH /////////////////////

/////////////////////COMIENZA EJERCICIO CON IF ELSE ////////////////////////
/*
function CalcularPrecio() {
    let precio = 35;
    let preciocondescuento;
    let preciototal;
    let cantlamp;
    let marca;
    let descuento;
    let IIBB;
    let precioconIIBB;


    cantlamp = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    ///////////////////////EJERCICIO A //////////////////////////////////
    if (cantlamp >= 6) {
        preciototal = cantlamp * precio;
        descuento = 0.50;
        preciocondescuento = preciototal - (preciototal * descuento);
        document.getElementById("txtIdprecioDescuento").value = preciocondescuento;
    }
    //////////////EJERCICIO B ///////////////////////////////
    else if (cantlamp == 5) {
        if (marca == "ArgentinaLuz") {
            preciototal = cantlamp * precio;
            descuento = 0.40;
            preciocondescuento = preciototal - (preciototal * descuento);
            document.getElementById("txtIdprecioDescuento").value = preciocondescuento;
        }
        if (marca != "ArgentinaLuz") {
            preciototal = cantlamp * precio;
            descuento = 0.30;
            preciocondescuento = preciototal - (preciototal * descuento);
            document.getElementById("txtIdprecioDescuento").value = preciocondescuento;
        }
    }
    /////////////EJERCICIO C /////////////////////////////////////////
    else if (cantlamp == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            preciototal = cantlamp * precio;
            descuento = 0.25;
            preciocondescuento = preciototal - (preciototal * descuento);
            document.getElementById("txtIdprecioDescuento").value = preciocondescuento;
        }
        if (marca != "ArgentinaLuz" && marca != "FelipeLamparas") {
            preciototal = cantlamp * precio;
            descuento = 0.20;
            preciocondescuento = preciototal - (preciototal * descuento);
            document.getElementById("txtIdprecioDescuento").value = preciocondescuento;
        }
    }
    //////// EJERCICIO D /////////////////////////
    else if (cantlamp == 3) {
        if (marca == "ArgentinaLuz") {
            preciototal = cantlamp * precio;
            descuento = 0.15;
            preciocondescuento = preciototal - (preciototal * descuento);
            document.getElementById("txtIdprecioDescuento").value = preciocondescuento;
        }
        else if (marca == "FelipeLamparas") {
            preciototal = cantlamp * precio;
            descuento = 0.10;
            preciocondescuento = preciototal - (preciototal * descuento);
            document.getElementById("txtIdprecioDescuento").value = preciocondescuento;
        }
        else if (marca != "Argentinaluz" && marca != "FelipeLamparas") {
            preciototal = cantlamp * precio;
            descuento = 0.05;
            preciocondescuento = preciototal - (preciototal * descuento);
            document.getElementById("txtIdprecioDescuento").value = preciocondescuento;
        }
    }
    ///////////EJERCICIO E //////////////////
    if (preciocondescuento > 120) {
        precioconIIBB = preciocondescuento * 1.10;
        IIBB = precioconIIBB * 0.10;
        alert("IIBB: Usted pago $" + precioconIIBB.toFixed(2) + " siendo $" + IIBB.toFixed(2) + " el impuesto que se pago.");
    }

}
            //////////TERMINA EJERCICIO CON IF ELSE.////////////

*/
