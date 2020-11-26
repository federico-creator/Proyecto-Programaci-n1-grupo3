window.addEventListener("load",function(){
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
        foto.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${datos.poster_path}" alt"img/notfound.jpg"> <button id="${datos.id}" type="send" name="favoritos" class="center favoritos" ><strong>Agregar a Favoritos</strong></button>`
        let favoritos = document.querySelector(".favoritos")
        let arrayFavoritas;
        favoritos.addEventListener('click', function(e){
            console.log("se hizo click");
            //e.preventDefault()
            let favop = localStorage.getItem('favop')
            if( favop == null ){
                arrayFavoritas = []
            } 
            else {
                arrayFavoritas = JSON.parse(favop)
            }
            var prueba = true
            if(favop==null){
                prueba = true
            }
            else{
                for(let i = 0; i<favop.length; i++){
                    if(favoritos.id==arrayFavoritas[i]){
                        prueba = false
                    }
                }
            }
            if (prueba == true){
                arrayFavoritas.push(favoritos.id)
            }
            else{
                console.log(`esa película ya está en favoritos`);
            }
            localStorage.setItem('favop', JSON.stringify(arrayFavoritas))            
        })
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
    var reviews = document.querySelector(".reviews");
    var btn = document.querySelector("#reviews");
    btn.onclick = function() {
        reviews.classList.toggle('mostrar')
    }
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=0d278db4bda20f994d6bf90837dc480e&language=es-US&page=1`)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
        let rev = document.getElementById("rev")
        console.log(datos.results);
        datos.results.forEach(d => {
            rev.innerHTML += `<li><p>Autor: ${d.author}</p><p>${d.content}</p></li>`
        });

    })
})
