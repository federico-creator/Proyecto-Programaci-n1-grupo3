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
            slider.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${d.id}"> <img src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a>
            <div> 
            <button id="${d.id}" type="send" name="favoritospelispop" class="btn btn-success btn-block favoritospelispop"><strong>agregar a favoritos</strong></button>
            </div>
            </li>`
        })
        let favoritos = document.querySelectorAll(".favoritospelispop")
        let arrayFavoritas;
        console.log(favoritos);
        favoritos.forEach(pelicula => {
            pelicula.addEventListener('click', function(e){
                console.log("se hizo click");
                //e.preventDefault()
                let favo = localStorage.getItem('favop')
                if( favo == null ){
                    arrayFavoritas = []
                } 
                else {
                    arrayFavoritas = JSON.parse(favo)
                }
                var prueba = true
                console.log(pelicula.id);
                if(favo==null){
                    prueba = true
                }
                else{
                    for(let i = 0; i<favo.length; i++){
                        if(pelicula.id==arrayFavoritas[i]){
                            prueba = false
                        }
                    }
                }
                if (prueba == true){
                    arrayFavoritas.push(pelicula.id)
                }
                else{
                    console.log(`esa pelicula ya está en favoritos`);
                }
                //arrayFavoritas.push(pelicula.id)
                localStorage.setItem('favop', JSON.stringify(arrayFavoritas))            
            })  
        })      
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
            slider.innerHTML += `<li class="pelicula"><a href="movieDetail.html?id=${d.id}"> <img src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a>
            <div> 
            <button id="${d.id}" type="send" name="favoritospelisest" class="btn btn-success btn-block favoritospelisest"><strong>agregar a favoritos</strong></button>
            </div>
            </li>`
        });
        let favoritos = document.querySelectorAll(".favoritospelisest")
        let arrayFavoritas;
        console.log(favoritos);
        favoritos.forEach(pelicula => {
            pelicula.addEventListener('click', function(e){
                console.log("se hizo click");
                //e.preventDefault()
                let favop = localStorage.getItem('favop')
                if( favop == null ){
                    arrayFavoritas = []
                } 
                else {
                    arrayFavoritas = JSON.parse(favop)
                }
                console.log(pelicula.id);
                arrayFavoritas.push(pelicula.id)
                localStorage.setItem('favop', JSON.stringify(arrayFavoritas))            
            })  
        })   
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
            slider.innerHTML += `<li class="serie"><a href="serieDetail.html?id=${d.id}"> <img src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a>
            <div> 
            <button id="${d.id}" type="send" name="favoritossereriepop" class="btn btn-success btn-block favoritossereriepop"><strong>agregar a favoritos</strong></button>
            </div>
            </li>`
        });
        let favoritos = document.querySelectorAll(".favoritossereriepop")
        let arrayFavoritas;
        console.log(favoritos);
        favoritos.forEach(serie => {
            serie.addEventListener('click', function(e){
                console.log("se hizo click");
                //e.preventDefault()
                let favos = localStorage.getItem('favos')
                if( favos == null ){
                    arrayFavoritas = []
                } 
                else {
                    arrayFavoritas = JSON.parse(favos)
                }
                console.log(serie.id);
                arrayFavoritas.push(serie.id)
                localStorage.setItem('favos', JSON.stringify(arrayFavoritas))            
            })  
        })   
        
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
            slider.innerHTML += `<li class="serie"><a href="serieDetail.html?id=${d.id}"> <img src="https://image.tmdb.org/t/p/w500/${d.poster_path}"></a>
            <div> 
            <button id="${d.id}" type="send" name="favoritossererieem" class="btn btn-success btn-block favoritossererieem"><strong>agregar a favoritos</strong></button>
            </div>
            </li>`
        });
        let favoritos = document.querySelectorAll(".favoritossererieem")
        let arrayFavoritas;
        console.log(favoritos);
        favoritos.forEach(serie => {
            serie.addEventListener('click', function(e){
                console.log("se hizo click");
                //e.preventDefault()
                let favos = localStorage.getItem('favos')
                if( favos == null ){
                    arrayFavoritas = []
                } 
                else {
                    arrayFavoritas = JSON.parse(favos)
                }
                console.log(serie.id);
                arrayFavoritas.push(serie.id)
                localStorage.setItem('favos', JSON.stringify(arrayFavoritas))            
            })  
        })   
    })
    .catch(function(error){
        console.log(error);
    })

    

})
