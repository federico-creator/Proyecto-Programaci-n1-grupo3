window.addEventListener("load",function(){
    var querystring = location.search;
    var query2 = new URLSearchParams(querystring)
    var id = query2.get("id")
    page = 1
    vermas(page)
    function vermas(page){
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${id}`)
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
                series.innerHTML += `<li class="serie"><a href="seriedetail.html?id=${d.id}"> <img class= "imgrecomendadas"src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a></li>`
            });
        })
    }
    window.addEventListener('scroll', function (){
        var body = document.querySelector('body')
        var limite = body.scrollHeight
        if (body.offsetHeight + body.scrollTop >= limite) {
            page++
            vermas(page)
        }
    })
})