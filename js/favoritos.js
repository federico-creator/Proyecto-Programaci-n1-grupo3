window.addEventListener("load", function() {
    let idFavoritas =  JSON.parse(localStorage.getItem('favo'))
    console.log(idFavoritas);
    for(let i = 0; i < idFavoritas.length; i++){
        fetch(`https://api.themoviedb.org/3/movie/${idFavoritas[i]}?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos);
            let slider = document.getElementById("peliculasFavoritas")
            slider.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${datos.id}"> <img src="https://image.tmdb.org/t/p/w500/${datos.poster_path}"></a>`
        })
        .catch(function(error){
            console.log(error);
        })
    }
    /*let misPeliculasFavoritas =  JSON.parse( localStorage.getItem('favo'))
    function sacarDeMiLista(idEliminar){
    let miListaDeFavoritas = []
    miListaDeFavoritas = misPeliculasFavoritas.filter(function(favorita){
        return favorita.id != idEliminar
    })

    localStorage.setItem('miLista', JSON.stringify(miListaDeFavoritas))
    location.href = 'miLista.html'*/
})