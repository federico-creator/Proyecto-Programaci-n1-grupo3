//Aca defino mi función. En elparentesis van parámetros
function openloginPopup() {
    let popup = document.getElementById('Loginpoupup'); //Hasta aca tengo la referencia

    popup.style.display = 'block';
}
function closeLoginForm() {
    let popup = document.getElementById('Loginpoupup');

    popup.style.display = 'none';
}

/**
 * @param user este parametroes el usuario en el login
 * @param email este parametro es el email en el login
 */
function showUserInfo(user,email) {
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

function validateEmail(email) {
    let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let error = document.getElementById('errorEmail');


    if (!re.test(email.value)){ 
      
      email.classList.add('is-invalid'); 
      console.log(errorEmail);
      error.innerHTML= "Debe colocar un email válido";
      error.classList.add('alert-danger');
      //errorEmail.classList.add('alert-danger');
     // email.addEventListener('change',cambioNombre);
    return false
  }else{
    error.innerHTML= "";
    error.classList.remove('alert-danger');
    email.classList.remove('is-invalid'); 
    email.classList.add('is-valid');
    formulario.elements.password.focus()
    return true;
  }}

    function logIn(){
        const user = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        if(validateForm(user, email)){
            showUserInfo(user,email)
            closeLoginForm();
        }
    
    }

  function validateForm(user,email){
    let valid = true;
    let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!user){
        valid = false;
        window.alert('Debe ingresar un usuario');
    } else if(!email || !re.test(email)){
        valid = false; 
        window.alert('Debe ingresar un mail valido');
    }
    
    return valid;
  }