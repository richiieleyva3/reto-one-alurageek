
const campoNombre = document.getElementById('campo-nombre');
const campoPrecio = document.getElementById('campo-precio');
const campoImagen = document.getElementById('campo-imagen');

const validarCampos = () => {
    const campos = document.querySelectorAll('input');
    let validos = true;
    campos.forEach(campo => {
        if (!campo.validity.valid) {
            campo.parentNode.classList.add('invalido');
            validos = false;
        } else {
            campo.parentNode.classList.remove('invalido');
            validos = true;
        }
    });
    return validos;
}

export default validarCampos;
