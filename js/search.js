  window.addEventListener("load", function() {
    let contenedor = document.querySelector(".contenedor-carga")
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";
    var queryString = location.search; //Capturamos la query string del navegador
  
    var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString
  
    var busqueda = searchParams.get("busqueda"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "busqueda" (name="busqueda").
    var input = document.querySelector(".uk-search-input")
    input.setAttribute("value", busqueda)

    var url = `https://api.themoviedb.org/3/search/movie?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&query=${busqueda}&page=1`
    var url2 = `https://api.themoviedb.org/3/search/tv?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&query=${busqueda}&page=1`

    fetch(url)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      console.log(datos);


      var destino = document.querySelector(".resultados");
      var datosFinales = datos.results;
      var titulo = document.querySelector(".primero");

      titulo.innerText = `usted buscó peliculas por la palabra: ${busqueda}`

      if (datos.results.length === 0 ) {
        titulo.innerText = "No se encontraron resultados";
        titulo.style.textTransform = "none";
        titulo.style.padding = "20%"
        titulo.style.textAlign = "center"
        titulo.style.color = "Red"
      }

      let peliculas = document.querySelector(".peliculas")
          datos.results.forEach(d => {
            peliculas.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${d.id}"> <img class= "imgrecomendadas"src="https://image.tmdb.org/t/p/w500/${d.poster_path}" alt"img/notfound.jpg"></a></li>`
          });
    })
    .catch(function(error){
      console.log(error);
    })

    fetch(url2)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      console.log(datos);


      var destino = document.querySelector(".resultados");
      var datosFinales = datos.results;
      var titulo2 = document.querySelector(".segundo");

      titulo2.innerText = `usted buscó series por la palabra: ${busqueda}`

      if (datos.results.length === 0 ) {
        titulo.innerText = "No se encontraron resultados";
        titulo.style.textTransform = "none";
        titulo.style.padding = "20%"
        titulo.style.textAlign = "center"
        titulo.style.color = "Red"
      }

      let peliculas = document.querySelector(".series")
          datos.results.forEach(d => {
            peliculas.innerHTML += `<li class="serie"><a href="serieDetail.html?id=${d.id}"> <img class= "imgrecomendadas"src="https://image.tmdb.org/t/p/w500/${d.poster_path}" alt"img/notfound.jpg"></a></li>`
          });
    })
    .catch(function(error){
      console.log(error);
    })

})