/* Implementamos la funcionalidad del formulario: botonLimpiar */
const campoNombre = document.getElementById('campo-nombre');
const campoPrecio = document.getElementById('campo-precio');
const campoImagen = document.getElementById('campo-imagen');
const botonLimpiar = document.getElementById('btn-limpiar');

botonLimpiar.addEventListener('click', () => {
        campoNombre.value = '';
        campoPrecio.value = '';
        campoImagen.value = '';

        const campos = document.querySelectorAll('input');
        campos.forEach(campo => {
                campo.parentNode.classList.remove('invalido');
        });
});

export default botonLimpiar;