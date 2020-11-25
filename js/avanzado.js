window.addEventListener("load", function () {
  fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=9a2ac68be330a24306c03ee0dac49d3a&language=en-US')
    .then(response => response.json())
    .then(data => {
      const genres = data.genres;
      //Por cada uno de los elementos del array genres creamos una variable genres

      let includeList = document.getElementById('includeList');
      let excludeList = document.getElementById('excludeList');
      for (let genre of genres) {
        let option = document.createElement('option');
        option.text = genre.name;
        option.value = genre.id;
        let option2 = document.createElement('option');
        option2.text = genre.name;
        option2.value = genre.id;

        includeList.add(option);
        excludeList.add(option2);
      }
    });

})

function filtrarPorGenero(select) {
  debugger // avanza con F10   F8 va hasta el final
  let idOpcionElegida = select.value;
  let listaDePeliculas = []
  listaDePeliculas = document.getElementById("listaDePeliculas");
  let listaFiltrada = listaDePeliculas.filter(pelicula => pelicula.genero == idOpcionElegida)
}