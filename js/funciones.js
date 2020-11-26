//en esta parte estan las funciones 
let misPeliculasFavoritas =  JSON.parse( localStorage.getItem('favop'))
function sacarDeMiListaPeliculas(idPeliculas){
    let miListaDeFavoritas = []
    miListaDeFavoritas = misPeliculasFavoritas.filter(function(favorita){
        return favorita != idPeliculas
    })
    localStorage.setItem('favop', JSON.stringify(miListaDeFavoritas))
    location.href = "favoritos.html"
}
let miSeriesFavoritas =  JSON.parse( localStorage.getItem('favos'))
function sacarDeMiListaSeries(idSeries){
    let miListaDeFavoritas = []
    miListaDeFavoritas = miSeriesFavoritas.filter(function(favorita){
        return favorita != idSeries
    })
    localStorage.setItem('favos', JSON.stringify(miListaDeFavoritas))
    location.href = 'favoritos.html'
}
