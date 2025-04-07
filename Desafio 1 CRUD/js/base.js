
function salvarToken(token){
    localStorage.setItem('token', token)
}

function salvarUsuario(usuario){
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
}
function salvarServices(service){
    localStorage.setItem('produtos', JSON.stringify(service));
    
}

function obterToken(){
    return localStorage.getItem("token");  
}

function obterUsuario(){
    return localStorage.getItem("usuario") || "{}";   
}

function sairSistema(){
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    direcionarTelaDeLogin();
}

function direcionarTelaDeLogin(){
    window.open('login.html', '_self');
}

function usuarioEstaLogado(){
    let token = obterToken();

    return !!token;
}

function validarUsuarioAutenticado(){

    let logado = usuarioEstaLogado();

    
    if(window.location.pathname == "/login.html"){
        
        if(logado){
            window.open("usuario.html", '_self')
        }
    } else if(!logado && window.location.pathname == "/controle-cliente.html"){
        direcionarTelaDeLogin();
    }

}


validarUsuarioAutenticado();