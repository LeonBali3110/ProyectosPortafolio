document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector(".formulario")
    const respuesta = document.querySelector("#parrafo")
    respuesta.style.display = "none"

    formulario.addEventListener("submit", (e) => {
        e.preventDefault()

        const nombre = document.querySelector("#nombre").value
        const password = document.querySelector("#password").value

        const datosNombres = [];
        const datosConstraseña = [];

        if(nombre.trim() === '' || password.trim() === ''){
            respuesta.style.display = 'block'
            respuesta.textContent = 'Debes rellenar todos los campos'
            respuesta.style.backgroundColor = 'red'
        } else {
            respuesta.style.display = 'block'
            respuesta.textContent = 'Formulario enviado'
            respuesta.style.backgroundColor = 'green'

            datosNombres.push(nombre.trim());
            datosConstraseña.push(password.trim());

            console.log(datosNombres);
            console.log(datosConstraseña);
        }
    })
})