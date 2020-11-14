window.addEventListener("load",function(){
    alert ("bienvenidos al Tops, somos el uno, somos el Tops")
    //fetch de peliculas populares
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        let slider = document.getElementById("peliculasPopulares")
        datos.results.forEach(d => {
            slider.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${d.id}"> <img src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a></li>`
        });
        
    })
    .catch(function(error){
        console.log(error);
    })
    // fetch de peliculas estrenos
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=2")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        let slider = document.getElementById("peliculasEstreno")
        datos.results.forEach(d => {
            slider.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${d.id}"> <img src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a></li>`
        });
        
    })
    .catch(function(error){
        console.log(error);
    })

    //fetch de series populares
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        let slider = document.getElementById("seriesPopulares")
        datos.results.forEach(d => {
            slider.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${d.id}"> <img src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a></li>`
        });
        
    })
    .catch(function(error){
        console.log(error);
    })
    //fetch de series Estreno
    fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=2")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        let slider = document.getElementById("seriesEmision")
        datos.results.forEach(d => {
            slider.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${d.id}"> <img src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a></li>`
        });
        
    })
    .catch(function(error){
        console.log(error);
    })
})
