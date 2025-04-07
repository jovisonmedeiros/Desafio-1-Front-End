
let email = document.getElementById('typeEmailX');
let senha = document.getElementById('typePasswordX');
let btnEntrar = document.getElementById('btn-entrar');
let loginButton = document.getElementById("login");
let logoutButton = document.getElementById("logout-button");





function autentica(){

     let userEmail = email.value;

     let userSenha = senha.value;
 
     
 
     if(!userEmail || !userSenha){
       
        alert('Os campos de e-mail e senha são obrigatórios!')
      
         return;
     }
    
     autenticar(userEmail, userSenha);
   

     
}

document.addEventListener("keydown", function(event) {
   
    if (event.key === "Enter") {
       
       autentica();
       return;
    }
});


btnEntrar.addEventListener('click',function(event) {
    autentica();
    return;
   
});

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("typePasswordX");
    const togglePasswordButton = document.querySelector(".toggle-password");

    togglePasswordButton.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    });
  });

function autenticar(email, senha){
   const urlBase = `http://localhost:3400`;

   fetch(`${urlBase}/login`, {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, senha})
   })
   .then(response => response = response.json())
   .then(response => {

       if(!!response.mensagem){
        alert(response.mensagem);
        return;

       }else{

        
        salvarToken(response.token);
        salvarUsuario(response.usuario);
       
        
        
      
         window.open('usuario.html', '_self'); 
       }
    });
}





