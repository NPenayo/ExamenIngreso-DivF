/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los estudiantes
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/

function mostrar() {
  let nombre;
  let situacionLaboral;
  let cantidadMaterias;
  let sexo;
  let promedio;
  let edad;
  let promedioMejorEstudiante = 0;
  let nombreMejorEstudiante;
  let nombreAlumnoViejo;
  let edadAlumnoViejo = 0;
  let promedioNotaBuscando = 0;
  let promedioNotaTrabajando = 0;
  let promedioNotaEstudiando = 0;
  let totalBuscando = 0;
  let totalTrabajando = 0;
  let totalEstudiando = 0;
  let buscandoTrabajoEdad;
  let buscandoTrabajoNombre;
  let buscandoTrabajoCantidadMaterias = 0;
  let flag = 0;
  let confirmacion;

  do {
    nombre = prompt("Nombre del alumno:");
    situacionLaboral = prompt(
      "Situación laboral: (buscando|trabajando|solo estudiante)"
    ).toLowerCase();
    cantidadMaterias = parseInt(prompt("Cantidad de materias:"));
    sexo = prompt("Sexo: (femenino|masculino|no binario)");
    promedio = parseInt(prompt("Nota promedio: (Entre 0 y 10)"));
    edad = parseInt(prompt("Edad:"));

    //----- Validación de datos----------------

    //Situacion laboral
    if (
      !(
        situacionLaboral == "buscando" ||
        situacionLaboral == "trabajando" ||
        situacionLaboral == "solo estudiante"
      )
    ) {
      alert("Situación laboral inválida");
    }

    //Cantidad de materias
    if (!(cantidadMaterias > 0 && cantidadMaterias < 8)) {
      alert("Cantidad de materias inválida");
    }

    //Promedio
    if (!(promedio > 0 && promedio <= 10)) {
      alert("Promedio inválido");
    }

    //Sexo
    if (!(sexo == "femenino" || sexo == "masculino" || sexo == "no binario")) {
      alert("Sexo inválido");
    }

    //Edad
    if (isNaN(edad) || edad < 17) {
      alert("Valor de edad inválido");
    }

    confirmacion = confirm("¿Desea cargar los datos de otro alumno?");

    //----- a) El nombre del mejor promedio de los estudiantes
    if (!(situacionLaboral == "buscando" || situacionLaboral == "trabajando")) {
      if (promedioMejorEstudiante < promedio || flag == 0) {
        promedioMejorEstudiante = promedio;
        nombreMejorEstudiante = nombre;
        //----- b) El nombre del mas viejo de los alumnos que solo sea estudiantes
      }
      if (edadAlumnoViejo < edad || flag == 0) {
        edadAlumnoViejo = edad;
        nombreAlumnoViejo = nombre;
      }
    }
    switch (situacionLaboral) {
      case "buscando":
        totalBuscando++;
        promedioNotaBuscando += promedio;
        if (buscandoTrabajoCantidadMaterias < cantidadMaterias || flag == 0) {
          buscandoTrabajoCantidadMaterias = cantidadMaterias;
          buscandoTrabajoEdad = edad;
          buscandoTrabajoNombre = nombre;
        }
        break;
      case "trabajando":
        totalTrabajando++;
        promedioNotaTrabajando += promedio;
        break;
      case "solo estudiante":
        totalEstudiando++;
        promedioNotaEstudiando += promedio;
        break;
    }
    flag = 1;
  } while (confirmacion);
  // --------a) El nombre del mejor promedio de los estudiantes
  if (nombreMejorEstudiante == undefined) {
    nombreMejorEstudiante = "No hay alumnos en esta condicion";
  }
  console.log("Estudiante con mejor promedio: " + nombreMejorEstudiante);
  //--------b) El nombre del mas viejo de los alumnos que solo sea estudiantes
  if (nombreAlumnoViejo == undefined) {
    nombreAlumnoViejo = "No hay alumnos en esta condicion";
  }
  console.log("Estudiante mas viejo: " + nombreAlumnoViejo);
  // ------ c) El promedio de nota por situacion laboral
  if (totalBuscando > 0) {
    promedioNotaBuscando = promedioNotaBuscando / totalBuscando;
  } else {
    totalBuscando = "No hay alumnos en esta condicion";
  }
  if (totalEstudiando > 0) {
    promedioNotaEstudiando = promedioNotaEstudiando / totalEstudiando;
  } else {
    totalEstudiando = "No hay alumnos en esta condicion";
  }
  if (totalTrabajando > 0) {
    promedioNotaTrabajando = promedioNotaTrabajando / totalTrabajando;
  } else {
    totalBuscando = "No hay alumnos en esta condicion";
  }
  console.log(
    "Promedio de notas por situación laboral:\n Buscando: " +
      promedioNotaBuscando +
      "\nTrabajando: " +
      promedioNotaTrabajando +
      "\n" +
      "Solo estudiando: " +
      promedioNotaEstudiando
  );
  //--d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
  if (buscandoTrabajoNombre == undefined || buscandoTrabajoEdad == undefined) {
    console.log("No hay alumnos buscando trabajo");
  } else {
    console.log(
      "Buscando trabajo y que cursa menos materias:\nNombre: " +
        buscandoTrabajoNombre +
        "\nEdad: " +
        buscandoTrabajoEdad
    );
  }
}
