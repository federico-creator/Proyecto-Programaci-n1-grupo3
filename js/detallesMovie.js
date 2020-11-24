window.addEventListener("load",function(){
    var recuperoStorage = localStorage.getItem("seriesFavoritos");
    if (recuperoStorage == null) {
        // Creo una lista vacia
        seriesFavoritos = [];
    } else {
        // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
        seriesFavoritos = JSON.parse(recuperoStorage);
    }

    let detallepelicula = location.search
    let detallePeliculaObjeto = new URLSearchParams(detallepelicula)
    let id = detallePeliculaObjeto.get("id")
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        console.log(datos);
        var info = document.querySelector(".info");
        var foto = document.querySelector(".foto");

        foto.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${datos.poster_path}">`
        if (datos.poster_path == null) {
            foto.innerHTML = '<img src="img/notfound.jpg">'
        }

        info.innerHTML += `<h2><strong> ${datos.title}</strong></h2>`
        

        var gnre = datos.genres
        var generos = "";
        for (var i = 0; i < gnre.length; i++) {
            generos += `<a href="xgeneropelicula.html?id=${datos.genres[i].id}&id_name=${datos.genres[i].name}">${datos.genres[i].name} </a> `
        }
        
        info.innerHTML += `<h3 ><strong>Géneros: </strong> ${generos} </h3>`
        info.innerHTML += `<h3><strong>Lenguaje original: </strong> ${datos.original_language} </h3>`
        info.innerHTML += `<h3><strong>Sinopsis: </strong> ${datos.overview}</h3>`
        info.innerHTML += `<h3><strong>Rating: </strong> ${datos.vote_average}</h3>`
        info.innerHTML += `<h3><strong>Fecha de estreno: </strong> ${datos.release_date} </h3>`

        
    })
    .catch(function(error){
        console.log(error);
    })
    var recomendaciones = document.querySelector(".recomendaciones");
    var btn = document.querySelector("#recom");
    btn.onclick = function() {
        recomendaciones.classList.toggle('mostrar')
    }
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1`)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
        let slider = document.getElementById("reco")
        console.log(datos);
        datos.results.forEach(d => {
            slider.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${d.id}"> <img class= "imgrecomendadas"src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a></li>`
        });
    })
  if (seriesFavoritos.includes(id)) {
    document.querySelector(".botonFavorito").innerHTML = "Quitar de Favoritos";
  }
  fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
    .then(function(response) {
      return response.json();
    })
    .then(function(id) {})
  document.querySelector(".botonFavorito").onclick = function() {
    //Paso 2: Modificar la informacion
    // Si la serie ya era favorito
    if (seriesFavoritos.includes(id)) {
      // Lo quito
      var index = seriesFavoritos.indexOf(id);
      seriesFavoritos.splice(index, 1);
      document.querySelector(".botonFavorito").innerHTML = "Agregar a favoritos";
    } else {
      //Lo agrego
      seriesFavoritos.push(id);
      document.querySelector(".botonFavorito").innerHTML = "Quitar de favoritos";
    }
    //Paso 3: Escribir en storage
    var infoParaStorage = JSON.stringify(seriesFavoritos);
    localStorage.setItem("seriesFavoritos", infoParaStorage);
    console.log(localStorage);
  }

})
