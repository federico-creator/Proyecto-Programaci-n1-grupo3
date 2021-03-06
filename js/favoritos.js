window.addEventListener("load", function() {
    let contenedor = document.querySelector(".contenedor-carga")
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";
    let idPeliculasFavoritas =  JSON.parse(localStorage.getItem('favop'))
    if(idPeliculasFavoritas== null){
        console.log(`no hay peliculas favoritas`);
    }
    else{
        for(let i = 0; i < idPeliculasFavoritas.length; i++){
            fetch(`https://api.themoviedb.org/3/movie/${idPeliculasFavoritas[i]}?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
            .then(function(respuesta){
                return respuesta.json()
            })
            .then(function(datos){
                let slider = document.getElementById("peliculasFavoritas")
                slider.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${datos.id}"> <img class="destacar" src="https://image.tmdb.org/t/p/w500/${datos.poster_path}"></a>
                <div> 
                <button id="${datos.id}" type="send" name="quitarFavPeli" class="btn btn-danger btn-block" onclick= 'sacarDeMiListaPeliculas(${datos.id})'><strong>Quitar de Favoritos</strong></button>
                </div>
                </li>`
                console.log(datos.id);
            })
            .catch(function(error){
                console.log(error);
            })
    
        }
    }
    let idseriesFavoritas =  JSON.parse(localStorage.getItem('favos'))
    if(idseriesFavoritas== null){
        console.log(`no hay peliculas favoritas`);
    }
    else{
        for(let i = 0; i < idseriesFavoritas.length; i++){
            fetch(`https://api.themoviedb.org/3/tv/${idseriesFavoritas[i]}?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
            .then(function(respuesta){
                return respuesta.json()
            })
            .then(function(datos){
                let slider = document.getElementById("seriesFavoritas")
                slider.innerHTML += `<li class="serie"><a href="serieDetail.html?id=${datos.id}"> <img class="destacar" src="https://image.tmdb.org/t/p/w500/${datos.poster_path}"></a>
                <div> 
                <button id="${datos.id}" type="send" name="quitarFavPeli" class="btn btn-danger btn-block" onclick= 'sacarDeMiListaSeries(${datos.id})'><strong>Quitar de Favoritos</strong></button>
                </div>
                </li>`
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }
    let borrador = document.querySelector(".borrador")
    borrador.addEventListener("click",function(){
        console.log(`se hizo click`);
        console.log(``);
        localStorage.clear()
        location.href = "favoritos.html"
    })
})