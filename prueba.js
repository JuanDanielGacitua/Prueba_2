/*https://www.themealdb.com/api/json/v1/1/filter.php?c=NombreCategoria
utulizar para la función ver más*/

function verMas(NombreCategoria) {
  // Realiza una nueva llamada AJAX para obtener los platos de la categoría seleccionada
  $.get(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=NombreCategoria",
    function (data) {
      // Limpia la tabla anterior
      $("#tabla").empty();

      // Construye la nueva tabla con los datos obtenidos
      $.each(data.NombreCategoria, function (i, meal) {
        let htmlFila = "<tr><td>" + meal.meals + "</td></tr>";
        $("#tabla-detalle").append(htmlFila);
      });
    }
  );
}

$(document).ready(function () {
  console.log("Hola mundo");

  // funcion que permite cargar el api de categorias de comidas

  /*mostrando las categorías de comida*/
  $("#btn-cargar").on("click", function () {
    console.log("cargando informacion...");
    $("#spinner").html("");

    let htmlSpinner = '<div class="lds-circle"><div></div></div>';

    $("#spinner").append(htmlSpinner);

    $.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
      function (data) {
        $.each(data.categories, function (i, item) {
          let htmlFila =
            '<tr id="fila-1"><th scope="row">' +
            item.idCategory +
            "</th><td>" +
            item.strCategory +
            '</td><td><img src="' +
            item.strCategoryThumb +
            '" style="max-width: 150px;"></td><td><button onclick="verMas(1)"id="verMas" class="btn btn-dark"><i class="fa-solid fa-plus"></i></i> Ver más</button></td></tr>';

          $("#tabla").append(htmlFila);
        });
        $("#spinner").html("");
      }
    );
  });
  /*Aquí se agrega la función de verMAs */
  /*Aquí se establece la función para ver más alimentos de la categoría seleccionada */
});
