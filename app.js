const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const form = document.getElementById("form");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""

    if (nombre.value.lenght <3){
        warnings += "Nombre muy corto" <br>
        entrar ; true
    }

    if (apellido.value.lenght <3){
        warnings += "Apellido no valido" <br>
        entrar ; true
    }
    
    if (entrar){
        parrafo.innerHTML = warnings
    }

})
