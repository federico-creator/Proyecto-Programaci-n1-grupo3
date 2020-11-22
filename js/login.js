/*window.addEventListener("load", function() {
    let formulario = document.querySelector('form')
    formulario.addEventListener('submit', function(evento){
        if(!validaciones()){
            evento.preventDefault();
        }else{
            formulario.submit();
        }

    })

    //Funciones para el formulario 
    let nombre = document.getElementById('nombre')
    let email= document.getElementById('email')
    function validaciones (){
        if(!validacionnombre(nombre) ) return false;
        return true; 
    }

})*/

//Aca defino mi función. En elparentesis van parámetros
function openloginPopup() {
    let popup = document.getElementById('Loginpoupup'); //Hasta aca tengo la referencia

    popup.style.display = 'block';
}
function closeLoginForm() {
    let popup = document.getElementById('Loginpoupup');

    popup.style.display = 'none';
}

function validation() {
    // #0 - Obtener datos del formulario
    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    
    // #1 - Validar que el form este lleno 
    if ('email')  
    
    // #2 - Guardar datos del usuario en el storage
    
    // #3 - Cierrra el popup
      closeLoginForm();
  }


  function validate() {
  // #0 - Obtener datos del formulario
  let email = document.getDocumentById('email').value;
  let nombre = document.getDocumentById('nombre').value;
  
  // #1 - Validar que el form este lleno
  if (email == "" || nombre == "") {
    // <p id="loginError" style="display:none">Clave o nombre esta vacio.</p>
    let loginErrorText = document.getDocumentById('loginError');
    loginErrorText.style.display = "block";
    return;
  }

  // #2 - Guardar datos del usuario en el storage
  window.sessionStorage.setItem('userName', nombre)
  window.sessionStorage.setItem('userEmail', email)
  
  // #3 - Imprimir para verificar que se guardo correctamente
  let userName = window.sessionStorage.getItem('userName');
  let userEmail = window.sessionStorage.getItem('userEmail');
  console.log(userName);
  console.log(userEmail);
  
  // #3 - Cierrra el popup
	closeLoginForm();
  
  // #4 - Actualizar header
  showUserInfo();
}

 function showUserInfo(){
  // #0 - Obtener datos del usuario
  let userName = window.sessionStorage.getItem('userName');
  let userEmail = window.sessionStorage.getItem('userEmail');

  // #0b  - Obtener elemento de badge
  let badge = document.getDocumentById('userBadge');

  // #1 - Actualizar datos en el html
  // <p id="userBadge" style="display:none"></p>
  badge.value = userName;
 	// <p id="userBadge" style="display:none">Mumi</p>

  // #2 - Mostrarlo
	badge.style.display = "block";
}
