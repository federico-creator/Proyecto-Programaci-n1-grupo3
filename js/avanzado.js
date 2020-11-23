window.onload = function() {


    console.log("Hola ");
    fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        console.log(datos);
        var buscador = document.querySelector(".avana");
        var label1 = document.querySelector(".incluir");
        var label2 = document.querySelector(".excluir");
  
        var gnre = datos.genres;
  
  
        for (var i = 0; i < gnre.length; i++) {
          label1.innerHTML += '<option value="' + datos.genres[i].id + '">' + datos.genres[i].name + '</option>'
          label2.innerHTML += '<option value="' + datos.genres[i].id + '">' + datos.genres[i].name + '</option>'
        }
      })
}