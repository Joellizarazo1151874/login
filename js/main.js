var endpoint = 'https://servidortest.carlos-reneren7.repl.co';

var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var datos = new FormData(formulario);
    var login = {
        user: datos.get('user'),
        password: datos.get('password'),
    }
    fetch(endpoint+"/login",{
        method: "POST",
        body: JSON.stringify(login),
        headers:{
            "Content-type": "application/json"
        }
    }).then(res=>res.json())
    .then(data=>{
        if(data['login'] === true){
            localStorage.clear();
            localStorage.setItem('datos', JSON.stringify(data));
            location.href="dashboard.html";
        }
    }).catch(function(reason){
        document.getElementById('error').innerHTML = "Este usuario no ha creado una cuenta aún, "+`<a href="register.html">Registrate</a>`;
    })
});
