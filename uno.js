/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/

function mostrar() {
  let nombre;
  let tipo;
  let precio;
  let cantidad;
  let categoria;
  let fabricante;
  let totalAlcohol = 0;
  let totalIac = 0;
  let totalQuat = 0;
  let totalDesi = 0;
  let totalBacte = 0;
  let totalDete = 0;
  let masCaroPrecio = 0;
  let masCaroFabricante;
  let masCaroCategoria;
  let detergentesBaratos = 0;
  let flag = 0;

  for (let index = 0; index < 5; index++) {
    nombre = prompt("Nombre del producto:");
    tipo = prompt("Tipo de producto: (ALCOHOL|IAC|QUAT)").toUpperCase();
    precio = parseInt(prompt("Precio por unidad: (Entre 100 y 300)"));
    cantidad = parseInt(
      prompt("Cantidad de unidades: (Mayor a 0 y menos de 1000)")
    );
    categoria = prompt(
      "Categoría del producto: (Bactericida|Detergente|Desinfectante"
    ).toLowerCase();
    fabricante = prompt("Fabricante:");

    //--------------Validación de datos---------------------

    //---- Tipo
    if (!(tipo == "ALCOHOL" || tipo == "IAC" || tipo == "QUAT")) {
      alert("Tipo de producto inválido");
    }

    //----Precio
    if (!(precio >= 100 && precio <= 300)) {
      alert("Precio incorrecto");
    }

    //----Cantidad
    if (!(cantidad > 0 && cantidad <= 1000)) {
      alert("Cantidad incorrecta");
    }
    //----Categoria
    if (
      !(
        categoria == "desinfectante" ||
        categoria == "bactericida" ||
        categoria == "detergente"
      )
    ) {
      alert("Categoría de producto inválida");
    }
    //----- Sumar los totales por tipo
    switch (tipo) {
      case "ALCOHOL":
        totalAlcohol += cantidad;
        break;
      case "IAC":
        totalIac += cantidad;
        break;
      case "QUAT":
        totalQuat += cantidad;
        break;
    }
    //------Sumar los totales por categoria
    switch (categoria) {
      case "desinfectante":
        totalDesi += cantidad;
        break;
      case "bactericida":
        totalBacte += cantidad;
        break;
      case "detergente":
        totalDete += cantidad;
        //----- Sumar la cantidad si el precio del detergente es menor a 200
        if (precio <= 200) {
          detergentesBaratos += cantidad;
        }
        break;
    }

    //------- Obtener los datos del producto mas caro
    if (masCaroPrecio < precio || flag == 0) {
      masCaroPrecio = precio;
      masCaroCategoria = categoria;
      masCaroFabricante = fabricante;
    }
  }

  //------a)  Promedio de productos por compra------------------
  console.log("Promedio de ALCOHOL: " + totalAlcohol / 5);
  console.log("Promedio de IAC: " + totalIac / 5);
  console.log("Promedio de QUAT: " + totalQuat / 5);

  //-------b) La categoria con mas cantidad de unidades en total de la compra

  if (totalDete > totalBacte && totalDete > totalDesi) {
    console.log("Hay más unidades de detergentes en la compra: " + totalDete);
  } else if (totalDesi > totalBacte && totalDesi > totalDete) {
    console.log(
      "Hay más unidades de desinfectantes en la compra: " + totalDesi
    );
  } else {
    console.log("Hay más unidades de bactericidas en la compra: " + totalBacte);
  }
  //-----c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
  console.log("Detergentes que valen menos de 200: " + detergentesBaratos);

  //----d) el fabricante y Categoria del más caro de los productos
  console.log(
    "Fabricante más caro: " +
      masCaroFabricante +
      " " +
      "Categoría: " +
      masCaroCategoria
  );
}
