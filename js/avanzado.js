window.addEventListener("load", function () {
  fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=9a2ac68be330a24306c03ee0dac49d3a&language=en-US')
    .then(response => response.json())
    .then(data => {
      const genres = data.genres;
      //Por cada uno de los elementos del array genres creamos una variable genres

      let includeList = document.getElementById('includeList');
      let anioPelicula = document.getElementById('anioPelicula');

      for (let genre of genres) {
        let option = document.createElement('option');
        option.text = genre.name;
        option.value = genre.id;
        includeList.add(option);
      }

      let fecha = new Date();

      for (let i = fecha.getFullYear(); i > 1920; i--) {
        let option = document.createElement('option');
        option.text = i;
        option.value = i;
        anioPelicula.add(option);

      }



    });

})


function buscar(event) {
  event.preventDefault()
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1")
    .then(function (respuesta) {
      return respuesta.json()
    })
    .then(function (datos) {
      let slider = document.getElementById("peliculasPopulares")





      let anioPelicula = document.getElementById('anioPelicula');


      let idGenero = document.getElementById('includeList').value;
      let listaDePeliculas = []
      listaDePeliculas = document.getElementById("listaDePeliculas");
      let listaFiltrada = datos.results.filter(pelicula => pelicula.genre_ids.includes(idGenero))

      console.log(listaFiltrada)

    })

}