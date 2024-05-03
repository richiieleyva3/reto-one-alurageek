import postAPI from "./post.js";
import validarCampos from "./validarCampos.js";

/* Implementamos la funcionalidad del formulario: botonEnviar */
const formulario = document.getElementById('formulario');
const campoNombre = document.getElementById('campo-nombre');
const campoPrecio = document.getElementById('campo-precio');
const campoImagen = document.getElementById('campo-imagen');
const botonEnviar = document.getElementById('btn-enviar');

const botonEnviarFormularioClick = botonEnviar.addEventListener('click', (event) => {
    const camposValidos = validarCampos();
});

const botonEnviarFormulario = formulario.addEventListener('submit', (event) => {
    const camposValidos = validarCampos();
    if (!camposValidos) {
        event.preventDefault();
        return;
    }
    const producto = {
        nombre: campoNombre.value,
        precio: parseFloat(campoPrecio.value),
        imagen: campoImagen.value
    };

    postAPI(producto).then(() => {
        campoNombre.value = '';
        campoPrecio.value = '';
        campoImagen.value = '';
    });

    event.preventDefault();
});

export { botonEnviarFormulario, botonEnviarFormularioClick };

