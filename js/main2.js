let endpoint = "https://ServidorTest.carlos-reneren7.repl.co/register";

document.getElementById("formulario1").addEventListener("click", (e) => {
  e.preventDefault();
  
  let user = document.getElementById("user").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let usuario = {
    "user": user,
    "password": password,
    "name": name,
    "email": email
  }


  fetch(endpoint+"/endpoint",{
        method: "POST",
        body: JSON.stringify(usuario),
        headers:{
            "Content-type": "application/json"
        }
    });
});