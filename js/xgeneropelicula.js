window.addEventListener("load",function(){
    var querystring = location.search;
    var query2 = new URLSearchParams(querystring)
    var id = query2.get("id")
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1`)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
        var titulo = document.getElementById("titulo")
        var name = query2.get("name")
        if(name == null){
            var name = query2.get("id_name")
            titulo.innerHTML = `Usted esta viendo peliculas del genero ${name}`
        }
        else{
            titulo.innerHTML = `Usted esta viendo peliculas del genero ${name}`
        }

        let peliculas = document.querySelector(".peliculas")
        datos.results.forEach(d => {
            peliculas.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${d.id}"> <img class= "imgrecomendadas"src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a></li>`
        });
    })
})