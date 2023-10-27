

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




    // Creamos nuestra aplicacion.
    /*const app = Vue.createApp({
        // DATOS de la aplicacion
        data() {
            // Definimos los valores que posee la aplicación
            // (Son similares a las propiedades de un objeto)
            return {
                contenidoHTML:'<div class="img"><img src="recursos/img.jpg"></div><div class="descripcion"><h3>Nombre del juego</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maxime, ex assumenda ea ipsum quasi provident dignissimos aspernatur iusto?</p></div>'
            }
        }
    });

    // Montamos la aplicacion en el div que tiene id="app":
    app.mount('#app');*/




// Creamos nuestra aplicacion.
const miAplicacion = Vue.createApp({
    components: {
        'spider': componente1,
        'amongus': componente2,
        'spider2': componente3,
        'amongus2': componente4
    },
    data() {
        return {
            spider_visible: false,
            amongus_visible: false,
            spider2_visible: false,
            amongus2_visible: false
        }
    },
    methods: {
        show(componente) {
            this.spider_visible = false
            this.amongus_visible = false
            this.spider2_visible = false
            this.amongus2_visible = false
            console.clear()
            console.log(componente)
            if (componente == "spider") {
                this.spider_visible = true
                //Te sube la pantalla hasta arriba despues de elegir la guia
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // Opciones adicionales: "auto" (predeterminado) o "instant"
                });
            } else if (componente == "amongus") {
                this.amongus_visible = true
                //Te sube la pantalla hasta arriba despues de elegir la guia
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // Opciones adicionales: "auto" (predeterminado) o "instant"
                });
            } else if (componente == "spider2") {
                this.spider2_visible = true
                //Te sube la pantalla hasta arriba despues de elegir la guia
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // Opciones adicionales: "auto" (predeterminado) o "instant"
                });
            } else if (componente == "amongus2") {
                this.amongus2_visible = true
                //Te sube la pantalla hasta arriba despues de elegir la guia
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // Opciones adicionales: "auto" (predeterminado) o "instant"
                });
            }
        }
    }
})


miAplicacion.mount("#app")

