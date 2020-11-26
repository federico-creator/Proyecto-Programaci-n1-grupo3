window.addEventListener("load",function(){
  var buscarRandom = document.querySelector(".descubrirPelicula")
  function aleatorio() {
    return Math.floor(Math.random() * 9542);
  }
  buscarRandom.innerHTML = `<a href="movieDetail.html?id=${aleatorio()}">descubrir pelicula</a>`

  var buscarRandom = document.querySelector(".descubrirSerie")
  function aleatorio() {
    return Math.floor(Math.random() * 9542);
  }
  buscarRandom.innerHTML = `<a href="serieDetail.html?id=${aleatorio()}">descubrir Serie</a>`

})

