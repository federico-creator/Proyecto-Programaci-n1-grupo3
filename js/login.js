//Aca defino mi función. En elparentesis van parámetros
function openloginPopup() {
    let popup = document.getElementById('Loginpoupup'); //Hasta aca tengo la referencia

    popup.style.display = 'block';
}
function closeLoginForm() {
    let popup = document.getElementById('Loginpoupup');

    popup.style.display = 'none';
}


function showUserInfo() {
    let user = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    // #0 - Obtener datos del usuario
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('email', email);

    // #0b  - Obtener elemento de badge
    let badge = document.getElementById('userBadge');

    // #1 - Actualizar datos en el html
    badge.innerText = user;

    // #2 - Mostrarlo
    badge.style.display = "block";
}

function logOut() {
    let badge = document.getElementById('userBadge');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('email');
    badge.style.display = "none";
}
