
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
  
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    })
  
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    })
  });

console.log("hola");



function validarEnviar(){

    //ANALIZO EL NOMBRE
    if(document.formulario.fname.value.length <= 2){
        alert("Ingrese un nombre correcto.")
        document.formulario.fname.focus()
        parrafo.innerHTML = "Nombre incorrecto."
        return
    }
    if(document.formulario.lname.value.length <= 2){
        alert("Ingrese un apellido correcto.")
        document.formulario.lname.focus()
        parrafo.innerHTML = "Nombre incorrecto."
        return
    }
    // Get our input reference.
    var emailField = document.getElementById('email');
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if( validEmail.test(emailField.value) ){
        return true;
    }else{
        alert('Email is invalid, skip form submission');
        return false;
    }
}

