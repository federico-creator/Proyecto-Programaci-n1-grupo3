var buscarRandom = document.querySelector(".descubrir")

  function aleatorio() {
    return Math.floor(Math.random() * 9542);
  }

  buscarRandom.innerHTML = '<a href="serieDetail.html?id=' + aleatorio() + '">' + 'Descubrir' + '</a>'

