/*DISPLAY NOMBRE DE USUARIO*/  
window.addEventListener("load", function () {
    const userName = sessionStorage.getItem('user');
    if (userName) {
        let badge = document.getElementById('userBadge');
        badge.innerText = userName;
        badge.style.display = "block";
    }
})