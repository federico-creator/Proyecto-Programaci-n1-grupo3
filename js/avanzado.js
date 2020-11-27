window.addEventListener("load", function () {
  fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=9a2ac68be330a24306c03ee0dac49d3a&language=en-US`)
    .then(response => response.json())
    .then(data => {
      const genres = data.genres;
      //Por cada uno de los elementos del array genres creamos una variable genres

      let includeList = document.getElementById('includeList');
      let anioPelicula = document.getElementById('anioPelicula');
      let serieoPelicula = document.getElementById('serieoPelicula');
     
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
  event.preventDefault();

  let listaGenerosElem = document.getElementById('includeList');
  let generoNombre = listaGenerosElem.options[listaGenerosElem.selectedIndex].text;
  let generoID = listaGenerosElem.value;
  let anioPelicula = document.getElementById('anioPelicula').value;

  window.location.href = `xgeneropelicula.html?id=${generoID}&name=${generoNombre}&year=${anioPelicula}`;
}

function buscar2(event) {
  event.preventDefault();

  let listaGenerosElem = document.getElementById('includeList');
  let generoNombre = listaGenerosElem.options[listaGenerosElem.selectedIndex].text;
  let generoID = listaGenerosElem.value;
  let anioPelicula = document.getElementById('anioPelicula').value;

  window.location.href = `xgeneroserie.html?id=${generoID}&name=${generoNombre}&year=${anioPelicula}`;
}