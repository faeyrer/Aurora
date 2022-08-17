/* Cotización en cuotas */
/* Funcion para validar el valor a cotizar*/
function validacion_inicial() {
    valor_inicial = (parseFloat(prompt("Ingrese el costo total de su pedido        *operamos solo con valores entre 1000 y 50000*")));
    while ((isNaN(valor_inicial)) || (valor_inicial < 1000) || (valor_inicial > 50000)){
            alert("No trabajamos con esos valores por favor vuelva a intentar");
            valor_inicial = (parseInt(prompt("Ingrese el costo final de su pedido        *operamos solo con valores entre 1000 y 50000*")));
    }
}
/*Funcion para elegir entidad bancaria */
function seleccion_banco() {
    entidad_bancaria = prompt("Ingrese su operador bancario: 1)VISA(Hasta 12 cuotas sin interes) 2)MASTERCARD(Hasta 6 cuotas sin interes) 3)CABAL(Hasta 3 cuotas sin interes)")
    do {
        if ((entidad_bancaria.toUpperCase() != "VISA") && (entidad_bancaria.toUpperCase() != "MASTERCARD") && (entidad_bancaria.toUpperCase() != "CABAL")) {
            alert("No operamos con su entidad bancaria, por favor vuelva a intentar")
            entidad_bancaria = prompt("Ingrese su operador bancario: 1)VISA(Hasta 12 cuotas sin interes) 2)MASTERCARD(Hasta 6 cuotas sin interes) 3)CABAL(Hasta 3 cuotas sin interes)")
        }
    } while ((entidad_bancaria.toUpperCase() != "VISA") && (entidad_bancaria.toUpperCase() != "MASTERCARD") && (entidad_bancaria.toUpperCase() != "CABAL"));
}
/* Funcion para calcular y validar el valor de cada cuota de visa*/
function visa_cuotas() {
    do {
        numero_de_cuotas = parseInt(prompt("Por favor seleccione el numero de cuotas a cotizar:    1)1 cuota con 10% de interes 2)3 cuotas con 20% de interes 3)6 cuotas con 40% de interes 4)12 cuotas con 80% de interes"))
        if ((numero_de_cuotas != 1) && (numero_de_cuotas != 3) && (numero_de_cuotas != 6) && (numero_de_cuotas != 12)) {
            alert("No ingreso una opción valida");
        }
    } while ((numero_de_cuotas != 1) && (numero_de_cuotas != 3) && (numero_de_cuotas != 6) && (numero_de_cuotas != 12))
    if (numero_de_cuotas == 1) {
        valor_con_intereses = valor_inicial * 1.1;
        valor_cuota = valor_con_intereses;
    } else if (numero_de_cuotas == 3) {
        valor_con_intereses = valor_inicial * 1.2
        valor_cuota = valor_con_intereses / 3;
    } else if (numero_de_cuotas == 6) {
        valor_con_intereses = valor_inicial * 1.4;
        valor_cuota = valor_con_intereses / 6;
    } else {
        valor_con_intereses = valor_inicial * 1.8;
        valor_cuota = valor_con_intereses / 12;
    }
}
/* Funcion para calcular y validar el valor de cada cuota de mastercard*/
function mastercard_cuotas() {
    do {
        numero_de_cuotas = parseInt(prompt("Por favor seleccione el numero de cuotas a cotizar:    1)1 cuota con 10% de interes 2)3 cuotas con 20% de interes 3)6 cuotas con 40% de interes"))
        if ((numero_de_cuotas != 1) && (numero_de_cuotas != 3) && (numero_de_cuotas != 6)) {
            alert("No ingreso una opción valida");
        }
    } while ((numero_de_cuotas != 1) && (numero_de_cuotas != 3) && (numero_de_cuotas != 6))
    if (numero_de_cuotas == 1) {
        valor_con_intereses = valor_inicial * 1.1;
        valor_cuota = valor_con_intereses;
    } else if (numero_de_cuotas == 3) {
        valor_con_intereses = valor_inicial * 1.2
        valor_cuota = valor_con_intereses / 3;
    } else {
        valor_con_intereses = valor_inicial * 1.4;
        valor_cuota = valor_con_intereses / 6;
    }
}
/* Funcion para calcular y validar el valor de cada cuota de cabal*/
function cabal_cuotas() {
    do {
        numero_de_cuotas = parseInt(prompt("Por favor seleccione el numero de cuotas a cotizar:    1)1 cuota con 10% de interes 2)3 cuotas con 20% de interes"))
        if ((numero_de_cuotas != 1) && (numero_de_cuotas != 3)) {
            alert("No ingreso una opción valida");
        }
    } while ((numero_de_cuotas != 1) && (numero_de_cuotas != 3))
    if (numero_de_cuotas == 1) {
        valor_con_intereses = valor_inicial * 1.1;
        valor_cuota = valor_con_intereses;
    } else {
        valor_con_intereses = valor_inicial * 1.2
        valor_cuota = valor_con_intereses / 3;
    }
}    
/*Funcion de falla en inicio o fin */
    function cierre() {
        while ((confirmacion.toUpperCase() != "SALIR") && (confirmacion.toUpperCase() != "INICIAR")) {
            alert("Detectamos una falla en su respuesta, por favor vuelva a intentar");
            confirmacion = prompt("¿Desea iniciar una nueva cotización o salir? Por favor ingrese *iniciar* *salir* ");
        }
        if (confirmacion.toUpperCase() == "INICIAR") {
            cotizacion()
        } else if (confirmacion.toUpperCase() == "SALIR") {
            alert("Hasta luego!")
        }
    }
/*Funcion para iniciar una cotización nueva */
function cotizacion() {
    while (confirmacion.toUpperCase() == "INICIAR") {
        validacion_inicial();
        seleccion_banco();
        if (entidad_bancaria.toUpperCase() == "VISA")
            visa_cuotas();
        else if (entidad_bancaria.toUpperCase() == "MASTERCARD") {
            mastercard_cuotas();
        } else {
            cabal_cuotas();
        }
        console.log("Usted seleccionado la entidad bancaria", entidad_bancaria, ", ingresando un valor inicial de", valor_inicial, "el costo final sera $", valor_con_intereses, " en ", numero_de_cuotas, "cuotas a ", valor_cuota, " cada una.");
        confirmacion = prompt("¿Desea iniciar con una nueva cotización o salir? Por favor ingrese *iniciar* *salir* ")
    }
    cierre()
}


    let valor_inicial = "";
    let numero_de_cuotas = "";
    let valor_con_intereses = 0;
    let valor_cuota = 0;
    let entidad_bancaria = "";
    let confirmacion = prompt("¿Desea iniciar una nueva cotización o salir? Por favor ingrese *iniciar* *salir* ");

    cotizacion();