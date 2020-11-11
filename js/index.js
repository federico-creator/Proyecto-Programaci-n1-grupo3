window.addEventListener("load",function(){
    alert ("bienvenidos al Tops, somos el uno, somos el Tops")
    let pelicula = document.querySelector(".peliculas")
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(pelis){
        pelis.results.forEach(peliculas => {
            let articulo = document.createElement("article")
            articulo.innerHTML += `<div class= "pelicula"> <img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt= "${peliculas.title}"> <a href="serieDetail.html" class="links">${peliculas.title}</a> </div>`
            pelicula.append(articulo) 
        });
    })
    .catch(function(error){
        console.log(error);
    })
    let serie = document.querySelector(".series")
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(seris){
        seris.results.forEach(series => {
            let articulo = document.createElement("article")
            articulo.innerHTML += `<div class= "serie"> <img src="https://image.tmdb.org/t/p/w500${series.poster_path}" alt= "${series.title}"> <a href="serieDetail.html" class="links">${series.title}</a> </div>`
            serie.append(articulo) 
        });
    })
    .catch(function(error){
        console.log(error);
    })
    let actores = document.querySelector(".actores")
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(act){
        act.results.forEach(actor => {
            let articulo = document.createElement("article")
            articulo.innerHTML += `<div class= "actor"> <img src="https://image.tmdb.org/t/p/w500${actor.poster_path}" alt= "${actor.title}"> <a href="serieDetail.html" class="links">${actor.title}</a> </div>`
            actores.append(articulo)
        });
    })
    .catch(function(error){
        console.log(error);
    })
})
