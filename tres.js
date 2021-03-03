/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/

function mostrar() {
  let nombre;
  let obraSocial;
  let edad;
  let temperatura;
  let sexo;
  const PRECIO_BASE = 600;
  let totalOSDE = 0;
  let masJovenPAMINombre;
  let masJovenPAMITemp = 0;
  let precioViaje;
  let totalPAMI = 0;
  let totalOtras = 0;
  let totalPasajeros;
  let descuento = 0;
  let viejosConOSDE = 0;
  let confirmacion;
  let flag = 0;

  do {
    let nombre = prompt("Nombre del pasajero:");
    let obraSocial = prompt("Obra social: (PAMI|OSDE|otras)");
    let edad = parseInt(prompt("Edad del pasajero"));
    let temperatura = parseInt(prompt("Temperatura corporal:"));
    let sexo = prompt("Sexo: (F|M)").toLowerCase();

    //------------- Validación de datos
    if (obraSocial == "PAMI" || obraSocial == "OSDE" || obraSocial == "otras") {
      if (!(edad < 0 || isNaN(edad))) {
        if (temperatura > 34 && temperatura < 43) {
          if (sexo == "f" || sexo == "m") {
            switch (obraSocial) {
              case "PAMI":
                totalPAMI++;
                if (
                  (masJovenPAMITemp < temperatura && sexo == "f") ||
                  flag == 0
                ) {
                  masJovenPAMITemp = temperatura;
                  masJovenPAMINombre = nombre;
                  flag == 1;
                }
                break;
              case "OSDE":
                totalOSDE++;
                if (edad > 60) {
                  viejosConOSDE++;
                }
                break;
              case "otras":
                totalOtras++;
                break;
            }
            totalPasajeros++;
          } else {
            alert("Sexo inválido");
          }
        } else {
          alert("El pasajero está muerto o agonizando");
        }
      } else {
        alert("Edad inválida");
      }
    } else {
      alert("Obra social inválida");
    }

    confirmacion = confirmacion("¿Desea cargar los datos de otro pasajero?");
  } while (confirmacion);
  //a) La cantidad de personas con OSDE de mas de 60 años.
  if (viejosConOSDE > 0) {
    console.log("Pasajeros de mas de 60 con OSDE: " + viejosConOSDE);
  } else {
    console.log("No hay mayores de 60 con OSDE");
  }
  //b) el nombre y temperatura mujer mas joven con PAMI
  if (masJovenPAMITemp != undefined || masJovenPAMINombre != undefined) {
    console.log(
      "La mujer mas joven con PAMI:\nNombre: " +
        masJovenPAMINombre +
        "\nTemperatura: " +
        masJovenPAMITemp
    );
  } else {
    console.log("No hay mujeres con PAMI");
  }
  //c) cuanto sale el viaje total sin descuento.
  console.log("Costo total del viaje: " + totalPasajeros * PRECIO_BASE);
  //d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
  if (totalPAMI > totalPasajeros / 2) {
    descuento = 0.25;
    precioViaje = precioViaje - precioViaje * descuento;
	console.log("Precio total del viaje con descuento: "+ precioViaje);
  }else{
	console.log("Precio total del viaje: "+ precioViaje);
  }
}
