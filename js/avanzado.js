window.addEventListener("load",function(){
fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=9a2ac68be330a24306c03ee0dac49d3a&language=en-US')
  .then(response => response.json())
  .then(data => {
    const genres = data.genres;
    //Por cada uno de los elementos del array genres creamos una variable genres
    let includeList = document.getElementById('includeList');
    let excludeList= document.getElementById('excludeList');
    for(let genre of genres){
        let option = document.createElement('option');
        option.text = genre.name; 
        option.value = genre.id;
        includeList.add(option);
        excludeList.add(option);
    } 
  });

})