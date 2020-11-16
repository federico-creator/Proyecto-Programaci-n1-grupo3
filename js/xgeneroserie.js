window.addEventListener("load",function(){
    var querystring = location.search;
    var query2 = new URLSearchParams(querystring)
    var id = query2.get("id")
    fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1`)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
        console.log(datos);
        var titulo = document.getElementById("titulo")
        var name = query2.get("name")
        if(name == null){
            var name = query2.get("id_name")
            titulo.innerHTML = `Usted esta viendo series del genero ${name}`
        }
        else{
            titulo.innerHTML = `Usted esta viendo series del genero ${name}`
        }

        let series = document.querySelector(".series")
        datos.results.forEach(d => {
            series.innerHTML += `<li class="serie"><a href="movieDetail.html?id=${d.id}"> <img class= "imgrecomendadas"src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a></li>`
        });
    })
})